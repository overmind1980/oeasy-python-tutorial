---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 text 文本

## 回忆

- 方法

| 函数名 | 功能 |
|--- | --- |
| append  |  添加子节点|
|  remove| 移除子节点 |
|  insert| 指定位置添加 |

- etree里面元素的访问方法
	- 索引 index
	- 切片 slice

- 可以根据节点
	- 找到 他的`父亲`、`孩子`、`哥哥`、`弟弟`吗？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1138256/uid1190679-20250423-1745362306510) 

### 父子兄弟

- 复现 上次代码

```
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_ul = etree.Element("ul")
et_html.append(et_head)
et_html.append(et_body)
et_body.append(et_ul)
for num in range(3):
    et_li = etree.Element("li")
    et_ul.append(et_li)
```

- 得到 哥哥或弟弟 元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630460957729)

- 可以 得到 
	- 父级或者子级 元素 吗?

### 父级

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630460949130)

- 得到父级

```
et_body.getparent()
```

- 验证成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192644/uid1190679-20250426-1745657417097) 

### 得到子集

```
et_html.getchildren()
```

- 子集 得到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717149499113)

### 关系

- 伦理清晰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711935972891)

- 准备验证

### 动手尝试

- 综合验证

```
print(et_body.getparent())
print(et_html.getchildren())
print(et_body.getprevious())
print(et_head.getnext())
```

- 得到
  - 父亲
  - 哥哥
  - 弟弟
  - 子集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717149609557)

### 整体输出

```
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 目前 层级间 缩进两格

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1138256/uid1190679-20250421-1745201075540) 

- 可以 把缩进 改为4空格吗？

### 控制缩进

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630505528348)

- 根据文档
	- 再次输出

```
etree.indent(et_html, space = "    ")
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 效果	

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192644/uid1190679-20250426-1745657490431) 

- 可是这棵dom树 是个空架子
	- 没有文本啊！
	- 如何 在etree节点上 挂`文本`呢？？🤔

### 文本

- text(文本)是 
	- etree元素 的 成员属性
    - 就像 标签(tag) 一样

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

- 添加第9句后
	- 再输出

```python3
et_title.text = "oeasy"
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 可以看到设置了 title中的 文本(text)
	- 网页有了标题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250422-1745304061790)

- 可以 让body `也`有text吗？

### 继续

```python3
et_body.text = "oeasy"
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669382284546)

- 元素树(element tree)
	- 可以 生成得 更快些 吗?

### 改造 生成方法

- etree.Element函数
	- 作用是构建etree的Element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630463450183)

- etree.SubElement函数
	- 不但 构建etree的Element
	- 并且 把新建的Element 添加到目标元素下
- 也就是说
	- 新元素 是 目标元素的子元素
	- 构造节点 连带 父子关系
	- 一行搞定

### 改造代码

- 按照新思路 改造源码

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
	- `还有`啥 也代表着 
	- 网页中的 文本 呢？

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

- 怎么 把body中的文本 `都` 提取出来呢?

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

- 确实可以 把文本 都捋出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717151189302)

- 但是 单词 都 粘在一起
	- 分不开了 
-  怎么办呢？

## 总结

- 了解 树中的 元素关系

| 函数 | 作用 | 
|---|---|
| getparent | 得到 父级 |
| getchildren | 得到 子集列表 |
| getprevious | 得到 哥哥 |
| getnext | 得到 弟弟 |

- 了解 etree 中的元素的成员变量

|  | text | tail | tag | attrib |
|---|---|---|---|---|
| 含义 | 文本 | 尾部文本 | 标签 | 属性 |
| 类型 | 字符串 |字符串 |字符串 |字典 |


- etree.tostring() 函数参数
  - method = "text" 
	- 可以控制输出结果只包含 text 和 tail
  - pretty_print = True 
	- 可以控制输出结果包含缩进信息

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192644/uid1190679-20250423-1745362457112) 

- 想要把 节点下面
	- 所有的节点 的文本
	- 和 节点下 所有的子节点 文本
	- 都找出来
- 要 `怎么`办 呢？🤔
- 下次再说👋