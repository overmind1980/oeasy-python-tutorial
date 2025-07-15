---
show: step
version: 1.0
enable_checker: true
---

#  lxml_从字符串_str_生成_etree_Element_元素节点_生成树 

## 回忆

- 在 内存构建 一棵 `etree树` 后
	- etree.tostring()函数
		- 可以输出网页文件
	    - `etree.tostring(et_html,pretty_look=True)`
	- etree.indent()函数
		- 可以控制 etree.Element 输出的缩进
	    - etree.indent(root, space="\t")

- etree 里面 有3种 对象节点

| 对象名 | 对象类型 |
| --- | --- |
| etree.Element | 元素 | 
| etree.Entity | 实体 | 
| etree.Comment | 注释|

- iter() 迭代器函数
    - 可以用 for 遍历迭代器函数
    - 参数 tag=etee.Element 可以类型进行筛选

- 筛出的节点 有4种属性

|属性|英文|
|---|---|
|tag|标签|
|text|文本|
|tail|尾巴|
|attrib|属性|

- 能否 通过字符串
	- 比如 "\<html>\<head>\<title>o\</title>..."
	- 直接 生成 一棵`etree树` 呢？ 🤔

### 生成

- 根据字符串
	- 生成 etree 元素节点(Element)


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192646/uid1190679-20250427-1745713678971) 

- 你给他一个字符串
	- 他给你一个 etree 根节点
	- 里面的text属性会自动设置好

```
from lxml import etree
some_xml_data = "<root>data</root>"
root = etree.fromstring(some_xml_data)
print(root.tag)
etree.tostring(root)
```


- 节点的根目录标签
	- 取决于字符串最外层的标签

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192646/uid1190679-20250427-1745713788872) 

- 能否用一个网页文本
	- 来生成一棵etree树呢？

### 生成 etree

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630466004301)

```python
from lxml import etree
root = etree.fromstring("<html><head/><body><p>Hello<br/>World</p></body></html>")
etree.indent(root,space="    ")
print(etree.tostring(root,pretty_print=True).decode())
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192646/uid1190679-20250427-1745713859091) 

- 我们就把 
	- 从 字符串 和 etree 
	- 关联起来了
		- 从 字符串 到 etree 是 fromstring
		- 从 etree 到 字符串 是 tostring
- 网页结构不完整呢？

### 网页元素

- 源头字符串 只有`一个p元素`

```
from lxml import etree
root = etree.fromstring("<p>data</p>")
etree.indent(root,space="\t")
print(etree.tostring(root,pretty_print=True).decode())
```

- 确实 可以生成 p元素节点

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192646/uid1190679-20250427-1745714064053) 

- 但是 无法对于 html的框架补完

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630451887662)

### 生成 html

- 首先查询文档
	- 找到 HTML 
	- parsers 语法分析器
- HTML Parser
	- 可以将 不那么标准的HTML
	- 生成 etree

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211017-1634436427443)

- Parsing HTML
  - HTML 就是网页
  - Parsing 就是把纯文本的 html 变成 html 语法树型结构
  - 也就是生成我们的 etree

### 动手

- 把fromstring 改成 HTML

```
from lxml import etree
root = etree.HTML("<p>data</p>")
etree.indent(root,space="\t")
print(etree.tostring(root,pretty_print=True).decode())
```

- 将 fromstring方法
	- 更换为 HTML方法
	- 这样会 补全 HTML 框架结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669467386432)

- 如果 html 是错乱的标签
	- 还能生成树么？🤔

### 错乱标签

- 仔细观察
  - 发现 broken_html
	- 其实是混乱的 html 源代码
  - 缺少一些结束标签
  - 这也可以生成一棵完成的 etree 吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211017-1634436427443)

- 浏览器也经常面对这类情况
  - 它能够容错
- 这个事情就是 libxml2.6.21 以上的库帮助我们完成的
  - 包括补充头尾标签

### 动手试试

```
from lxml import etree
s = "<title>t<body><p>123"
root = etree.HTML(s)
print(etree.tostring(root,pretty_print=True).decode())
```

- 字符串中 标签 不完整

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220712-1657599575592)

- 绝大多数情况下
	- 会 补全 结束标签
	- 消除 不相关的 结束标签
- 不过世事无绝对

### 特殊情况

```
from lxml import etree
s = "<title>t<p>123"
root = etree.HTML(s)
print(etree.tostring(root,pretty_print=True).decode())
```

- p元素 本该属于 body
	- 不过这里隶属于 head元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220712-1657599630558)

- 这种情况 很少
	- 错的 实在太离谱
	- 连个body都没有
	- 毕竟 巧妇难为无米之炊

### 移除空格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630504914540)

- 照猫画虎

```python
from lxml import etree
parser = etree.HTMLParser(remove_blank_text=True)
root = etree.HTML("   <p>  data    <b> strong   </b>    </p>    ", parser)
print(etree.tostring(root))
etree.indent(root,space="\t")
print(etree.tostring(root))
print(etree.tostring(root,pretty_print=True).decode())
```

- 标签之间没有意义的空格被删除掉了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630505103633)

- 注意删除的空格是 标签`之间`的
  - 而不是 标签`内部`的

## 总结

- 终于可以通过字符串
	- 构建一棵 etree 的节点树了
	- 通过 etree.HTML()函数
	- 将网页源文件进行 parse(语法分析)生成一棵 etree

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711961966480)

- 要总装了 
	- 把一切串联起来
    - 将request 得到的 response.content
    - 当做 etree.HTML()需要的参数
- 想 把爬到的字节序列 
	- 生成 节点树？🤔
- 这`可能`吗？🤔
- 下次再说 👋
