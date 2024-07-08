---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 text 文本

## 回忆

- 添加 子节点方法
	- append 尾部添加
	- insert 指定位置添加
- etree里面元素的访问方法
	- 索引 index
	- 切片 slice
- 了解 树 中的元素关系
  - 父子 
	- isparent()
  - 哥哥
	- isprevious
  - 弟弟
	- isnext()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668854537523)

- 不过 目前树中 只有元素 
	- 而没有 任何文本
	- 网页中的 文本 是如何设置的呢？？🤔

### 文本

- text 文本是 
	- etree 元素的一个成员变量
  - 就像 tag 是 etree 元素的一个成员变量一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630462348659)

- text 成员的类型是
	- 字符串

### 基础结构

```
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_html.append(et_head)
et_title = etree.Element("title")
et_head.append(et_title)
et_body = etree.Element("body")
et_html.append(et_body)
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 这里出现的四个元素
	- 都没有text成员

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220912-1662977673434)

- 给title添加
	- text成员

### text

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669382177231)

- 可以看到设置了 title 元素的 text 成员
  - 标签不仅仅是标签本身
  - 开始结束标签里面还有了 text 文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220912-1662977765655)

- 网页就有了标题
	- 可以让body元素有text吗？

### 继续

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669382273263)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669382284546)

- 可让生成元素树(element tree)
	- 更加 快速一些吗?

### 改造 生成方法

- etree.Element函数
	- 作用是构建etree的Element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630463450183)

- etree.SubElement函数
	- 作用是构建etree的Element
	- 并且把新建的Element添加到目前元素下面
	- 也就是说新元素是某元素的子元素
		- 连构造函数带父子关系
		- 一行搞定
- 按照这种思路改造源代码

### 改造代码

```
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
print(etree.tostring(et_html,pretty_print=True).decode())
for element in et_html:
    print(element.tag,element.text)
```

- 和原来的代码等效

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717150984911)

- 除了 text 成员
	- 还有什么成员 代表着 
	- 网页中的文本呢？

### 尾巴

- 可以在元素后面
	- 追加尾部文本
	- tail

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630462571298)

- tail 是什么意思呢？

### tail

- tail就是尾巴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669383030883)

- 具体怎么用呢？

### tail应用

```
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
print(etree.tostring(et_html,pretty_print=True).decode())
for element in et_html:
    print(element.tag,element.text)
```

- body中的文本只有o2z吗?

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717150350431)

- 为什么body中的文本
	- 只有o2z?

### 文本来源

- tail 像 text
  - 是 元素的成员变量
  - 也是 字符串类型的
  - 只不过在元素结束标签的后面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669385229895)

- 怎么把body中的所有文本提取出来呢?

### 查找帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669382445393)

- 好像可以试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669382486173)

- etree.tostring(et_body, method="text")

### method

```
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
print(etree.tostring(et_html[1],pretty_print=True).decode())
print(etree.tostring(et_html[1], method="text").decode())
```

- 确实可以
	- 只输出文本
	- 不输出标签

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717151189302)

- 但是单词都连接在一起
	- 无法分词
- 还是需要 `遍历`
	-  这棵树中的所有节点!

### 寻找函数

- 通过按下<kbd>tab</kbd>做提示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669431036352)

- iter()
	- 这个函数比较有可能

### iter()函数遍历所有子元素

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

- 而 iter()使用的方式 是 
	- 深度优先
	- Depth First
- iter()可以
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

- 了解 etree 中的元素的成员变量

|  | text | tail | tag | attrib |
|---|---|---|---|---|
| 含义 | 文本 | 尾部文本 | 标签 | 属性 |
| 类型 | 字符串 |字符串 |字符串 |字典 |

- iter() 迭代器函数
    - iter 是深度优先遍历

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