---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 生成

## 回忆

- 首先 将 字符串
	- 转化为 ElementTree对象
- 然后把前面的 requests的结果
	- 和 etree生成 结合了
- 通过 requests 
	- 获得网页的 response
- 通过 HTML 函数
	- 把 response 的字节序列
	- 转化为一棵 etree 树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669521450717)

- 流程 
	- 跑通了
- 但是 
	- 找元素 挺麻烦
	- 有什么 更好的方法吗？🤔

### 搜索

- 搜索xpath

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630547071875)

- 点击第一个开始研究

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630547145505)

- xpath 
	- 是 w3c制定的 标准
- 具体怎么用？

### 路径表达式

| 表达式 | 描述 | 
|--- |--- |
| nodename | 在当前位置选择此类节点 | 
|  / | 从根节点选取 或 表示层级关系 |
| // | 在任意层级下的子孙路径下 |
| . | 选取当前节点 |
| .. | 选取当前节点的父节点 | 
| @ | 选取属性 |


- 这些东西怎么理解呢？
	- 具体来看看

### 构造环境

```
sudo service nginx start
sudo service nginx status
firefox http://localhost &
```

- 右键 
	- 查看源代码
	- view source

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712539021966)

### 操作

- dom 树如下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669525619191)

- 我们来试一下
	- 各种路径表达式

### 点(.)

- 点(.) 为当前节点
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

- xpath 参数为 .
	- 选择的是 当前节点
	- 输出为html元素的列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712539113192)

- 结果 真的 
	- 是一个列表？

### 程序验证

- 追加输出
	- et_element的type

```
print(type(et_element))
```

- 复制最后一句
	- 输出 et_element的type

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712539218352)

- 确实 xpath函数的返回值类型
	- 是一个列表
	- list
- xpath(".")
	- 得到的 是 
	- 当前元素html
- html下面 
	- 还有什么 
	- 子节点呢？

### 输出

- 当前节点为html
	- 下面有head子节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526063986)

- 可以输出head元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526080303)

- 可以 再往深了找 吗？

### 层级关系

- body/p
	- 使用的是相对路径
	- 代表着 当前元素(et_html)
	- 下面的body
	- 下面的p
	- 这使用的是相对路径
- 也可以使用 绝对路径
	- /html/body/p

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526234839)

- 可以找到3个p元素
	- 都在同一个列表里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526259394)

- 效果一样

### 再向下一层

|xpath|描述方式|
|---|---|
|body/p/a|当前节点下的<br/>body下的<br>p下的<br>a元素|
|/html/body/p/a|根下的html下的<br>body下的<br>p下的<br>a元素|
|/html/body/p[2]/a|根下的html下的<br>body下的<br>第2个p下的<br>a元素|

- 在本例中
	- 上述的xpath等价

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526419016)

- 因为所有a
	- 都在第二个p里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526455954)

- 都可以找到 
	- 所有 a元素 的 列表

### 任意层级下

- //em
	- 任意层级下的em元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526539230)

- 可以找到

### 当前节点

- 当前节点
	- 点(.) 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669527130581)

- body的当前节点
	- (还是body)下的
	- h1元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712539828012)

### 向上一层

- 向上一层	
	- 两个点(..)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669526663256)


- 根下的html下的
	- body的
	- 上一层元素(html)下的
	- head下的
	- style元素
- 我们怎么知道
	- 需要的元素是 哪个子节点 呢？

### 通过浏览器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669527325250)

- 右键内容检查元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669527339987)

- 在元素查看界面
	- 右键复制-xpath
- 将 该元素的xpath
	- 复制到 剪贴板

### 使用xpath

- 将复制的xpath
	- 粘贴到代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669527474403)

- /html/body/p[1]
	- /html
		- 根下的html下
	- /body
		- html下的body下
	- /p[1]
		- body 下的 第1个 p 元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669527566939)

- 注意!!!
	- 元素树节点下标
		- 是从1开始
	- 与列表
		- 从0开始
		- `不`同

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
| @ | 选取属性 |

- @选属性 这个 
	- 我们还没有试
	- 怎么用呢？🤔
- 下次再说👋
