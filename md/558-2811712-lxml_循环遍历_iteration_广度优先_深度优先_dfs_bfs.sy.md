---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 text 文本

## 回忆

- 上次 了解 etree 中的元素的成员变量

|  | text | tail | tag | attrib |
|---|---|---|---|---|
| 含义 | 文本 | 尾部文本 | 标签 | 属性 |
| 类型 | 字符串 |字符串 |字符串 |字典 |

- etree.tostring() 函数参数
  - method = "text" 
	- 可以控制输出结果只包含 text 和 tail
  - pretty_print = True 
	- 可以控制输出结果包含缩进信息
- 可以遍历根结点下的所有子节点吗？

### 寻找函数

- 通过按下<kbd>tab</kbd>做提示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669431036352)

- iter()
	- 这个函数比较有可能

### 迭代

- iter()函数遍历所有子元素

```
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
for element in et_html.iter():
    print(element.tag,element.text)
```

- 我们使用 iter 函数
  - 递归地遍历了 根元素和各子元素节点
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

- 这个东西的类型是
-	- Element Depth First Iterator
	- 元素 深度优先 迭代器
- 什么是 深度优先 ？

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

- 深度优先是
	- 一枝一枝地捋

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724901390428)

- 广度优先是
	- 围着自己先从最近的开始找

### 广度优先

- 遍历head之后往广里走
	- 找到body	
	- 这就是广度优先
	- Breadth-First-Search

```python
from lxml import etree
et_html = etree.Element("html")
etree.SubElement(et_html, "head")
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
l = []

def traversal(et):
    print(et.tag,et.text,sep=":")
    for ele in et:
        l.append(ele)
    for ele in l:
        l.remove(ele)
        iterator(ele)

traversal(et_html)
```
- 而 traversal()使用的方式 是 
	- 深度优先 遍历节点
	- Depth First

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669435857616)

- 遍历 和 迭代有什么区别吗？

### 迭代、遍历、循环、递归

- 迭代（iterate）
	- 指的是按照某种顺序逐个访问列表中的每一项。

```python
for element in et_html.iter():
    print(element.tag,element.text)
```

- 遍历（traversal）
	- 指的是按照一定的规则访问树形结构中的每个节点，而且每个节点都只访问一次

```python
def traversal(et):
    print(et.tag,et.text,sep=":")
    for ele in et:
        l.append(ele)
    for ele in l:
        l.remove(ele)
        iterator(ele)
```

- 循环（loop）
	- 指的是在满足条件的情况下，重复执行同一段代码

```
for num in range(5):
	print(num)
```

- 递归（recursion）
	- 指的是一个函数不断调用自身的行为。比如，以编程方式输出著名的斐波纳契数列

```python
def fibo(n):
	if n == 1:
		return 1
	elif n == 2:
		return 2:
	else:
		return fibo(n-1) + fibo(n-2)
```

- 迭代器 iter()可以
	- 对于 标签 进行筛选 吗？

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
- 可以将 tails 也输出出来吗？

### tails

```
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
for element in et_html.iter("head","h1"):
    print(element.tag,element.text,element.tail)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711940459728)

- 把所有文本 都输出出来 函数
	- 怎么用来着？

### 动手

```
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
print(etree.tostring(et_html,method="text").decode())
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711940567281)

- 具体的树长成什么样子呢？

### 具体的树

```
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
print(etree.tostring(et_html,method="text").decode())
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 树形结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711940648917)

- 可以不输出tail吗？

### 不输出tail

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669385568520)

- 也可以在 tostring 函数中
  - 用 with_tail=False 参数控制 tail 成员不显示

### 最终代码

```
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
print(etree.tostring(et_html[1][0],method="text",with_tail=False).decode())
```

- 当前元素tail不输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711940912560)

- 元素属性是如何生成的呢？

### 添加属性

```
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html.attrib["lang"] = "zh_Hans"
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711941151199)

- attrib成员 
	- 类型 是 字典
	- 存放着 元素键值对

## 总结

- 了解 深度优先遍历 函数 iter

- iter() 迭代器函数
    - iter 是深度优先遍历

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724901390428)

- etree.tostring() 函数参数
  - method = "text" 
	- 可以控制输出结果只包含 text 和 tail
  - pretty_print = True 
	- 可以控制输出结果包含缩进信息
  - with_tail = False 
	- 可以控制输出结果不包含 tail
- 元素当中除了etree.Element
	- 还有什么对象吗？
- 下次再说👋