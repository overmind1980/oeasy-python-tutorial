---
show: step
version: 1.0
enable_checker: true
---

# 文本提取方法

## 回忆
- xpath 是
	- 整个爬取的核心

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240609-1717932671660)

- 如果我只想爬取文本
	- 而且是跨元素地爬取文本

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

- 有什么技巧么？🤔

### 准备环境

```
sudo service nginx start
firefox http://localhost &
```

- 启动服务器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697976420944)

- 在浏览器中确认可以访问

### 遍历文本

- 想要遍历body中的所有文本

```python3
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
html = etree.HTML(b_html)
lst = html.xpath("/html/body/*")
for ele in lst:
	print(ele.text)
```

- 先找到 body中 
	- 所有子元素的文本

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775826089092) 

- 实际网页
	- 很明显 最后一段
	- 文本并不是None

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240609-1717935422552)

- 为什么会这样？

### 相差原因

- xpath("/html/body/*")
	- 只能找到 
	- body元素直接子元素的text
	- 无法找到元素中元素中的text

```python3
lst = html.xpath("/html/body/*")
```

- 比如 
	- 找到最后一个p元素之后
		- 元素的text为None
	- p中有个em元素
		- em中 有文本
		- 但是却无法提取
	- 结果为None

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775798377476) 

- 想要 递归提取 元素中的所有文本 
	- 怎么办？

### xpath

- "string()"
	- 可以得到 当前节点中
	- 所有的文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630463341760)

- "//text()"
	- 可以得到任意路径下
	- 元素文本的列表

### 得到文本
```
from lxml import etree
html = etree.Element("html")
head = etree.Element("head")
html.append(head)
title = etree.Element("title")
head.append(title)
body = etree.Element("body")
html.append(body)
title.text = "oeasy"
h1 = etree.Element("h1")
body.append(h1)
h1.text = "o3z"
h1.tail = "o2z"
str_html = etree.tostring(html,pretty_print=True).decode()
print(str_html)
```

- 尝试构造这棵树

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775825854851) 

### 获取文本

```
s = html.xpath("string()")
s
l = html.xpath("//text()")
l
```

- 通过这样的方式可以快速得到网页的文本
	- xpath("string()") 可以得到纯文本
	- xpath("//text()") 可以得到文本列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775798492551) 

- 第一种 类型为 str
- 第二种 类型为 list

### 默认页

- 默认页面 挺简单的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636203855264)

- 那这棵树长什么样呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636203907913)

- 可以用这次新了解的方式吗？

### string()

```
# 1. 导入网络请求库
import requests
# 2. 导入lxml的XML/HTML解析模块
from lxml import etree

# 3. 向本地localhost发送GET请求，获取响应
response = requests.get("http://localhost")
# 4. 将响应内容解析为HTML元素树
et_html = etree.HTML(response.content)

# 5. 用XPath获取html下的body节点，取第一个结果
et_body = et_html.xpath("/html/body")[0]

# 6. 【核心错误】再次用绝对路径获取所有文本，导致结果为空
l_str = et_body.xpath("/html/body//text()")
print(l_str)
```

- 确实可以得到列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775826578826) 

- 尝试遍历这个列表

### 直接遍历

```
for text in l_str:
    print(text)
```

- 太多换行要处理

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775826918485) 

### 去除换行

```
# 7. 遍历文本列表，过滤换行符
for text in l_str:
    if text == "\n":
        continue
    # 8. 替换换行符（冗余操作，前面已经过滤）
    text = text.replace("\n", "", 5)
    print(text)
```

- 输出本身的 结束符 也是换行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775826852313) 

- 可以控制 print的结束符

### 最后效果

```
# 7. 遍历文本列表，过滤换行符
for text in l_str:
    if text == "\n":
        continue
    # 8. 替换换行符（冗余操作，前面已经过滤）
    text = text.replace("\n", "", 5)
    print(text, end="")
```

- 最终输出

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775827023698)


### 深入观察

- 最开始有一个h1元素

- 后面有三个段落P
	1. 第一段
	  - 全是文本
	2. 第二段
	  - 前面是文本
	  - 然后是 a 元素
	  - a 元素后面还是文本
	  - 在后面是<br>
	  - 在后面是 a
	  - 再后面还是文本
	3. 第三段
	  - 文本都在 em 元素中

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775827062951) 


- 需要递归地把子元素里面的文本全部输出

### 最终输出

```python3
lst = et_html.xpath("/html/body/*")
for ele in lst:
    text = ele.xpath("string()")
    text = text.replace("\n", " ")
    print(text)
    print()
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775827681323) 

### 对比

- "string()"作为 xpath 的参数
  - 返回值的类型 是 字符串
  - 元素中的文本汇总出来
- "text()"作为 xpath 的参数
  - 返回的类型 是 文本的列表
  - 不能 自动把 嵌套的 子元素拼接
  - 但是能明确地拿到本层的字符串
- "//text()" 可以得到 当前元素下
	- 任意层级的文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636204374562)

- 另外还有 etree.tostring 方法
  - 配合 method="text"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636206437341)

### 得到 具体实现

- etree.tostring

```python
et_body = et_html.xpath("/html/body")[0]
print(etree.tostring(et_body,method="text").decode())
```

- 用传统方法得到body元素的text

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/263197/uid1190679-20260410-1775828530682) 

- 输出得到的结果

### 总结

- 可以
  - 通过循环遍历元素子元素进行输出
  - 或者通过 xpath 筛选出节点
    - et_html.xpath("/html/body/*")
      - 返回body下所有子节点的列表
    - et_html.xpath("//text()")
      - 返回各个文本字符串的列表
    - et_html.xpath("string()")
      - 返回的拼接好的字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240609-1717932552000)

- 另外还有 etree.tostring 方法
  - 配合 method="text"
- 下次再说
