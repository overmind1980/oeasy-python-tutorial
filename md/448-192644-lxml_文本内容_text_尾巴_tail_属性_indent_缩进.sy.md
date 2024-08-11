---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 text 文本

## 回忆

- 上次 了解元素的标签成员
  - tag
- etree.Element最重要的是
	- 构成一棵家族树
- 了解 树 中的元素关系
  - 父子 
	- isparent()
  - 哥哥
	- isprevious
  - 弟弟
	- isnext()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668854537523)

- html元素内的文本内容
	- 可以在程序里面找得到吗？🤔

### 文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630462348659)

- text 文本是 etree 元素的一个成员变量
  - 就像 tag 是 etree 元素的一个成员变量一样
  - 就像 attrib 是 etree 元素的一个成员变量一样
  - text 成员变量的类型是字符串

### 动手

```
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_html.append(et_head)
et_title = etree.Element("title")
et_head.append(et_title)
et_body = etree.Element("body")
et_html.append(et_body)
print(etree.tostring(et_html,pretty_print=True).decode("utf-8"))
```

- 这里出现的四个元素都没有text属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220912-1662977673434)

- 我们给title添加text属性

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

- 确实可以
- 可以只输出元素树节点下的所有文本吗？

### 查找帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669382445393)

- 好像可以试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669382486173)

- etree.tostring(et_html, method="text")

### method

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669382752195)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669382842531)

- 确实可以
	- 只输出文本
	- 不输出标签

### 追加

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630462571298)

- 可以在元素后面追加个 tail
- tail 是什么意思呢？

### tail

- tail就是尾巴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669383030883)

- tail 就像 text
  - 也是元素的成员变量
  - 也是字符串类型的
  - 只不过在元素结束标签的后面

### 动手

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669384804892)

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669384843452)

- 具体的树长成什么样子呢？

### 具体的元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669385213310)

- 输出的结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669385229895)

- 如果不想输出tails呢？

### 不输出tail
- 可以添加 tail
	- 就可以取消 tail
- 将et_tail.text 设置为空串
	- h1.tail = ""

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669385568520)

- 也可以在 tostring 函数中
  - 用 with_tail=False 参数控制 tail 成员不显示

### 最终代码
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
print(etree.tostring(et_body, pretty_print=True).decode())
```


## 总结

- 了解 etree 中的元素的成员变量

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
- 下次再说👋