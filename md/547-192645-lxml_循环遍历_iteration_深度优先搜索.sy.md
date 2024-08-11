---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 遍历

## 回忆

- 上次了解 etree 中的元素的成员变量

|  | text | tail | tag | attrib |
|---|---|---|---|---|
| 含义 | 文本 | 尾部文本 | 标签 | 属性 |
| 类型 | 字符串 |字符串 |字符串 |字典 |

- etree.tostring() 函数参数
  - method = "text" 
	- 可以控制输出结果只包含 text 和 tail
  - with_tail = False 
	- 可以控制输出结果不包含 tail
  - pretty_print = True 
	- 可以控制输出结果包含缩进信息
- 我们已经在内存构建了一棵树了
	- 但是如何遍历这棵树(etree)呢？🤔

### 遍历节点的子元素

- etree.Element 类可以有很多 Element 子对象
	- 可以用 for 语言来遍历 Element对象 的子对象

```
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_html.append(et_head)
et_title = etree.Element("title")
et_head.append(et_title)
et_body = etree.Element("body")
et_html.append(et_body)
et_h1 = etree.Element("h1")
et_body.append(et_h1)
et_title.text = "oeasy"
et_body.text = "o2z"
et_h1.text = "o3z"
et_h1.tail = "o4z"
for element in et_html:
    print(element.tag,element.text)
```

- 可以遍历html的两个子节点
	- head
	- body
- 如果我想把所有子节点都遍历了呢？

### 遍历所有节点

- etree.Element函数
	- 作用是构建etree的Element
- etree.SubElement函数
	- 作用是构建etree的Element
	- 并且把新建的Element添加到目前元素下面
	- 也就是说新元素是某元素的子元素
		- 连构造函数带父子关系
		- 一行搞定

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630463450183)

- 找这种思路改造源代码

### 改造代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669431269923)

- 仍然可以运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669430633525)

- 输出结果不变
- 能否把所有的子元素都遍历一遍呢？

### 寻找函数

- 通过按下<kbd>tab</kbd>做提示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669431036352)

- iter()
	- 这个函数比较有可能

### iter()函数遍历所有子元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669431475012)

- 我们使用 iter 函数
  - 递归地遍历了一遍根元素和各子元素节点
    - 从根开始
    - 然后遍历根的子元素
    - 然后递归递遍历子元素里面的子元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669431487379)

- 这iter()函数的返回值是什么类型的呢？

### iter()类型

```
print(html.iter())
```

- 输出看看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220912-1662979607390)

- 这个东西的类型是一个深度优先迭代器
- 什么是深度优先？

### 深度优先

- 见到节点先往深里走
  - 而不是先往广里走
  - 遍历head之后往深里走
	-  找到title

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669435909964)


- 这就是深度优先
	- DepthFirst
- 和深度优先相对的
	- 是广度优先
- 可以广度优先遍历元素吗？

### 广度优先

```python
from lxml import etree
et_html = etree.Element("html")
etree.SubElement(et_html, "head")
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
l = []

def iterator(et):
    print(et.tag,et.text,sep=":")
    for ele in et:
        l.append(ele)
    for ele in l:
        l.remove(ele)
        iterator(ele)

iterator(et_html)
```

- 遍历head之后往广里走
	- 找到body	
	- 这就是广度优先
	- Breadth-First-Search

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669435857616)

- 通过这个
	- 大致可以想象深度优先搜索实现原理
- 可以对于标签进行筛选吗？

### 筛选标签

- 先查文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630463660607)

- iter("child")可以遍历所有标签是 child 的子元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636195307288)

- root.iter("child","another")筛选这两个 tag 的所有元素
  - 然后遍历

### 根据标签筛选元素

```python
from lxml import etree
et_html = etree.Element("html")
etree.SubElement(et_html, "head")
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
for element in et_html.iter("head"):
    print(element.tag, element.text,sep=":")
```

- 筛选结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669436555598)

- 可以筛选多个标签吗？

### 筛选多个标签名

```python
from lxml import etree
et_html = etree.Element("html")
etree.SubElement(et_html, "head")
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
for element in et_html.iter("head","h1"):
    print(element.tag, element.text,sep=":")
```
- 筛选结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220912-1662980770206)

- 确实是可以筛选出来的

## 总结

- 这次已经在内存构建了一棵 etree 树了
- 树是由节点 Element 构成的
- Element 元素的成员有:
  - attrib 属性字典
  - text 具体文本
  - tail 后跟文本
  - tag 标签
  - iter() 迭代器函数
    - iter 是深度优先遍历
    - 可以对tag进行筛选
- 除了etree.Element之外
	- 网页中还有什么对象吗？🤔
- 下次再说👋
