---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 生成

## 回忆

- 上次深入了 xpath
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


### 构造环境

- 启动 本地Web服务

```
sudo service nginx start
sudo service nginx status
firefox http://localhost &
```

- 浏览器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669527325250)

- 右键内容检查元素

### 复制xpath

- 在 元素查看界面
	- 右键复制 - xpath

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669527339987)

- 元素的xpath
	- 已经 复制到了 剪贴板

### 使用xpath

```
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
l_et_element = et_html.xpath("")
print(l_et_element)
```

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

### 直接搜索元素

- l_et_前缀代表着
	- 这是 元素树节点的列表
	- list of element tree

```python
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
print(b_html)
et_html = etree.HTML(b_html)
l_et_element = et_html.xpath("//a")
for element in l_et_element:
	print(element)
```

- 任意层级下的
	- a元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670027535333)

- 找到 
	- 2个a元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670027552580)

### 根据属性类型筛选

- //a[@href]
	- //a
		- 任意层级下的
		- a元素
	- [@href]
		- 有@href属性的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670027751966)

- 任意路径下
	- 有href属性的
	- a元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670027759394)

- 这里 用到的 中括号
	- 叫什么 方法 呢？

### 谓语 predicates

- 谓词 predicates

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670028229949)

- 如何理解谓词呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630552360248)

- 谓词
	- 是 对元素 进一步的描述
	- 是 筛选元素的 方式

### 根据属性值筛选

- 中括号叫做谓词

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670027868489)

- 任意层级下
	- 有href属性 
	- 且值为 "http://nginx.org/" 的
	- a元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669542517451)

- 注意 属性值 引用
	- 单引号或者双引号都可以
	- 冲突了的话 需要转义

### 谓词筛选

- 根据是否有属性 
	- 筛选元素
- //a[@*]
	- //a 
		- 任意层级下的
		- a元素
	- [@*]
		- []是筛选谓词
		- @是attribute
		- *是任意的
		- 有任意属性的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670027653580)

- 任意层级下 
	- 有任意属性的 
	- a元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670027673635)

- 可以 按位置 筛选 吗？

### 双重谓词

- 任意层级下的
	- 位置小于2的
	- 有href的a元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670029048298)

- 以下xpath等价

| 表达式 | 描述 | 
|--- |--- |
| //a[postion()<2] | 任意层级下 位置小于2的 a元素 | 
| //a[postion()=1] | 任意层级下 位置等于1的 a元素 | 
| //a[1] | 任意层级下 第一个 a元素 | 


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670029184013)

- xpath 可以
	- 成功得到元素列表
- 但是	 
	- 可以得到 元素的属性 吗？

### 观察网页

- 原来是根据属性谓词	
	- 筛选 元素 
	- //a[@href="http://nginx.org"]


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669541813289)

- 这次尝试 
	- 筛选属性
	- a 元素 下的 
	- href 属性

```python
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
print(b_html)
et_html = etree.HTML(b_html)
l_attrib = et_html.xpath("//a/@href")
print(l_attrib)
```
- 任意层级下的
	- a元素的
	- href属性

### xpath

- 得到属性的列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670027314021)

- 任意路径下
	- a元素的
	- href属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669542041751)

- 得到一个
	- 属性值的列表
- 如果
	- 不筛选a元素呢？

### href

- 修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669542128636)

- 任意路径下
	- 任意元素的
	- href属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669542166221)

- 目前可以筛选到属性值
	- 可以根据元素 同时得到
	- 属性名 和 属性值 吗？

### 属性变量

```
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
et_html.
```

- 到游乐场找找

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712563742981)

- attrib 就是属性
	- 具体什么类型呢？

### 查看类型

```
et_html
et_html.attrib
```

- 类型 好像是 字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712563837106)

- 尝试遍历

### 遍历过程

- "//\*[@\*]"
	- // 任意层级下的
	- \* 任意元素
	- [@*] 需要拥有任意属性

```
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
l_e = et_html.xpath("//*[@*]")
for element in l_e:
    print(element.attrib)
```

- 找到 任意层级下 
	- 所有 有属性的元素
	- 打印他的属性字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712564058509)

- 可以按照字典的方式 
	- 输出attrib吗？

### 输出

```
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
l_e = et_html.xpath("//*[@*]")
for element in l_e:
    print(element.tag)
    for key, value in element.attrib.items():
        print(key,value,sep=":")
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712564228513)

- 我们再温习一下下

### 尝试

- 这里面出现了索引运算符[]
- 找一下/html/body下	
	- 第 1 个 p

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669542698464)


### 最后一个

- /html/body/
	- 最后一个p元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669542854651)

- 在索引运算符中使用了 last()
	- 此时last() = 3


### 倒数第二

- 倒数第二个p

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669542974392)

- 关键还是对 li 使用索引运算符
  - last()是最后一个
  - last() - 1 是倒数第二个

### 前两名 position

- 前两个p

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669543060055)

- p[position()<3]
	- 可以找到前两项
- 如果我想找后两项呢？🤔

### 后两项 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670028432090)

- p[position()>last()-2]
- 可以找到后两项

### 存在href属性的a元素

- 拥有href属性 的 a元素 🤪

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669546658719)


- 可以试试href属性是特定值吗？

### 属性内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669546941736)

- href属性是 http://nginx.org 的a元素

### 总结

- 这次深入了 xpath 的筛选
  - 可以用中括号索引的方式对于子元素的位置进行筛选

| xpath 表达式 | 含义 |
|---|---|
| xpath("//p[1]")|第一个p  |
|xpath("//p[last()]") |最后一个p |
|  xpath("//p[position()<=3]")|正数前三个p|
|  xpath("//p[position()>last()-2"])| 倒数两个p |

- 可以在索引中对属性进行筛选
    - @ 俗称花 a
    - 对应@ttribute

| xpath 表达式 | 含义 |
|---|---|
|//*[@href] | 任意层级下 <br/>有href属性的<br/>元素|
|//*[@href=\\"http://nginx.org/\"]| 任意层级下 <br/>href属性是特定值的<br/>元素|
|//a[last()][@href=\\"http://nginx.org/\"]|任意层级下<br/> href属性是特定值的<br/>最后一个<br/>元素|
|//@|任意层级下 <br/> 任意属性|

- 还有什么好玩的呢？🤔
- 下次再说
