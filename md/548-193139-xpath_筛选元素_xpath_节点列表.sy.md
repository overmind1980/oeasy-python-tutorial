---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 生成

## 回忆

- 上次 了解了 编码设置
	- response 获得 网页 的 字节流之后
	- 可按照指定的编码格式解码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745738929329) 

|编码名称|应用领域|
|---|---|
|UTF-8|使用最广泛|
|ASCII|英语|单字节首选|
|ISO-8859-1|拉丁字母|
|GBK|简繁体中文|
|BIG5|繁体中文|


- etree 可以顺利生成了 
	- 如何 快速 定位 要爬取的节点呢？？🤔

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745799471414)

- 什么是`xpath`呢？

### 继续提问

- xpath


 ![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745799557436) 

###  语法

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745799632624) 

|语法|描述|示例|
|---|---|---|
|/|从根节点选取，也用于表示路径中的分隔符|/root/child：选取根节点root下的child子节点|
|//|在整个文档中选取节点，不考虑其位置|//element：选取文档中所有的element节点|
|.|选取当前节点|在一个节点的上下文环境中，.表示当前节点自身|
|..|选取当前节点的父节点|假设当前节点是child，..可选取其父节点|
|*|通配符，选取任何元素节点|//*：选取文档中的所有元素节点|
|@|选取属性节点|//element[@attribute]：选取所有具有attribute属性的element节点|
|@*|选取所有属性节点|/root/element/@*：选取root下element节点的所有属性节点|
|node()|选取所有节点|//node()：选取文档中的所有节点，包括元素节点、文本节点等|
|[ ]|谓词，用于添加条件筛选节点|/root/element[1]：选取root下的第一个element节点//book[@price>10]：选取所有price属性值大于10的book节点|
|and、or|用于组合多个条件|//book[@category='fiction' and @price>20]：选取category为fiction且price大于20的book节点//book[@category='fiction' or @category='mystery']：选取category为fiction或mystery的book节点|
|union|用于合并两个节点集|//book union //article：选取所有book节点和article节点|


- 太多了 简化一点～

### 路径表达式

| 表达式 | 描述 | 
|--- |--- |
| nodename | 在当前位置选择此类节点 | 
|  / | 从根节点选取 或 表示层级关系 |
| // | 在任意层级下的子孙路径下 |
| . | 选取当前节点 |
| .. | 选取当前节点的父节点 | 

- 这些东西怎么理解呢？

### 构造环境

- 启动 本地Web服务

```
sudo service nginx start
sudo service nginx status
firefox http://localhost &
```

- 浏览网页

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745801623894) 

- 右键 
	- 查看源代码
	- view source

### 分析源代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712539021966)

- dom 树如下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669525619191)

- 我们来试一下
	- 各种路径表达式

### 点(.)

- et_为类型前缀
	- 含义为element_tree_node
	- 元素树节点

```
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
et_element = et_html.xpath(".")
print(et_element)
```

- 点(.) 为当前节点
	- xpath 参数为 点(.) 
	- 选择的是 当前节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712539113192)

- 结果 
	- 中括号 被中括号 `括`起来
	- 类型 是 `列表`？

### 程序验证

- 追加输出
	- et_element的type

```
print(type(et_element))
```

- 复制最后一句
	- 输出 et_element 的 类型(type)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712539218352)

- xpath函数的 返回值
	- 确实 是一个列表(list)
- xpath(".")
	- 得到的 是 
	- 当前元素(et_html) 的列表

### 输出

- 既然 返回值 是 列表(`l`ist)
	- 我们 再给 变量名加上前缀 l_
	- l_et_element 
		- 类型 明确
		- 是 etreeElement的列表

```
l_et_element =  et_html.xpath(".")
l_et_element
```

- 当前节点为html
	- 下面有head子节点

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745802403372) 

- et_html节点 下面 
	- 还有什么 
	- 子节点呢？



### head

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745802434857) 

- xpath表达式直接写head
	- 意思是 当前元素(et_html) 下面的 head

```
l_et_element =  et_html.xpath("head")
l_et_element
```

- 可以输出head元素

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745802567464) 

- 可以 再往`更`深了找 吗？

### 层级关系

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745802767759) 

- body/p
	- 使用的是相对路径
	- 代表着 当前元素(et_html)
	- 下面的body
	- 下面的p

```
l_et_element =  et_html.xpath("body/p")
l_et_element
```

- 获得了 找到3个p元素
	- 都在同一个列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745802674874) 

- 目前 使用的是 `相对路径` 
	- 可以 使用 `绝对路径` 表示 这三p吗？


### 其他形式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526234839)

- 还可以使用 绝对路径
	- /html/body/p

```
l_et_element =  et_html.xpath("/html/body/p")
l_et_element
```

- 和 `body/p` 效果一样


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526259394)

- 可以 再往`更更`深了找 吗？

### 再向下一层

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526419016)

|xpath|描述方式|
|---|---|
|body/p/a|当前节点下的<br/>body下的<br>p下的<br>a元素|
|/html/body/p/a|根下的html下的<br>body下的<br>p下的<br>a元素|
|/html/body/p[2]/a|根下的html下的<br>body下的<br>第2个p下的<br>a元素|

- 上述的xpath等价

```
l_et_element =  et_html.xpath("body/p/a")
l_et_element
```

- 因为所有a
	- `都`在第二个p里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526455954)

- 想`直接`找到 
	- 所有 a元素 的 列表

### 任意层级下

- 找到任意层级下的 a元素

```
l_et_element =  et_html.xpath("//a")
l_et_element
```

- 从 树的 层级 来说
	- 本节点下 是 `/`
	- 任意层级下 是 `//`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745803175281) 

- 再找个 任意层级下的

### 任意层级下

- //em
	- 任意层级下的em元素

```
l_et_element =  et_html.xpath("//em")
l_et_element
```

- 可以找到

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745803262610)

- 本节点下 是 `/`
	- 任意层级下 是 `//`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526539230)

- `当前节点` 怎么说 ？

### `当前节点`

- `当前节点`
	- 点(.) 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669527130581)

- body的当前节点
	- (还是body)下的
	- h1元素

```
l_et_element =  et_html.xpath("body/./h1")
l_et_element
```

- `/`是当前节点下
	- `.` 是 当前节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712539828012)

- 可以找到 当前节点 之`上` 吗？

### 向上一层

- 向上一层	
	- 两个点(..)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526663256)

```
l_et_element =  et_html.xpath("/html/body/../head/style")
l_et_element
```

- 根下的html下的
	- body的
	- 上一层元素(html)下的
	- head下的
	- style元素

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193139/uid1190679-20250428-1745804896588) 


## 总结

- 这次深入了 xpath
- xpath 
	- 用来筛选 
	- xml 文件中的节点

| 表达式 | 描述 | 
|--- |--- |
| nodename | 在当前位置选择此类节点 | 
|  / | 从根节点选取 或 表示层级关系 |
| // | 在任意层级下的子孙路径下 |
| . | 选取当前节点 |
| .. | 选取当前节点的父节点 | 

- 我们怎么知道
	- 某个元素 的 xpath 呢？
- 下次再说👋
