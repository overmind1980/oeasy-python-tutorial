---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 生成 etree

## 回忆

- 已经在内存构建了一棵 etree 树了
	- 树是由节点 Element 构成的
	- 除了 etree.Element 节点之外，还有

| 对象名 | 对象类型 |
| --- | --- |
| etree.Entity | 实体 | 
| etree.Comment | 注释|

- Element 元素最重要，他的成员有:
  - attrib 属性字典
  - text 具体文本
  - tail 后跟文本
  - tag 标签
  - iter() 迭代器函数
    - 可以用 for 遍历迭代器函数
    - 参数 tag=etee.Element 可以类型进行筛选
- etee.indent()函数
	- 可以控制 etree.Element 输出的缩进
    - etree.indent(root, space="\t")
- etree.tostring()函数
	- 可以输出网页文件
    - `etree.tostring(et_html,pretty_look=True)`
- 能否 通过字符串
	- 比如 "\<html>\<head>\<title>o\</title>..."
	- 直接生成一棵etree树呢？ 🤔

### 从字符串生成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630503765091)

```python
from lxml import etree
some_xml_data = "<root>data</root>"
root = etree.fromstring(some_xml_data)
print(root.tag)
print(etree.tostring(root,pretty_print=True).decode())
```

- 确实可以生成etree元素树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711958973597)

- 虽然这棵树只有一个节点

### 生成

- 根据字符串
	- 生成 etree 元素节点(Element)
- 你给他一个字符串
	- 他给你一个 etree 根节点
	- 里面的text属性会自动设置好

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669466951252)

- 节点的根目录标签
	- 取决于字符串最外层的标签
- 不过我们 要的
	- 不是 xml
	- 而是 html
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

### 运行结果

- 这样确实
	- 可以通过字符串来生成一棵 etree

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711959244195)

- 我们就把 
	- 从网页得到的字符串 和 etree 
	- 关联起来了
- 如果网页文本并不标准呢?

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669467418516)

- 将 fromstring方法
	- 更换为 HTML方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669467386432)

- 如果 元素标签不完整 
	- 也可以生成一棵 html 树么？🤔

### 部分元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630504602875)

- 这次应该是可以生成 html 元素

```python
from lxml import etree
root = etree.HTML("<p>data</p>")
etree.indent(root,space="\t")
print(etree.tostring(root,pretty_print=True).decode())
```

- 而且可以自动补全整个的结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231017-1697548271033)

- 语法分析器 HTMLParse
	- 会分析出目前的标签情况
	- 自动补全这棵树
		- 把`<p>`相关内容
			- 放在 html 的根下的 
			- body 节点的下面
	- 就像浏览器那样健壮
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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220712-1657599575592)

- 绝大多数情况下
	- 会补全结束标签
	- 消除不相关的结束标签
- 不过世事无绝对

### 特殊情况

- p元素应该是属于body元素的
	- 不过这里让隶属于head元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220712-1657599630558)

- 这种情况很少
	- 错的实在太离谱
	- 连个body都没有
	- 毕竟巧妇难为无米之炊

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

- 把一切串联起来
  - 将request 得到的 response.content
  - 当做 etree.HTML()需要的参数
- 直接 将爬到的字节序列 
	- 生成节点树？🤔
    - 这可能吗？🤔
- 下次再说 👋
