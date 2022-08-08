---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 生成 etree

## 回忆

- 已经可以在内存构建了一棵 etree 树了
  - 树是由节点 Element 构成的
- 除了 etree.Element 节点之外，还有
  - etree.Entity
  - etree.Comment
- Element 元素最重要，他的成员有:
  - attrib 属性字典
  - text 具体文本
  - tail 后跟文本
  - tag 标签
  - iter() 迭代器函数
    - 这个迭代器是深度优先算法的
    - 可以用 for 遍历迭代器函数
    - 参数 tag=etee.Element 可以类型进行筛选
- 但是网上爬到的网页源文件的 response 只有字节序列
  - 如何通过字节序列得到一棵 etree 树呢？🤔

### 从字符串生成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630503765091)

```
some_xml_data = "<root>data</root>"
root = etree.fromstring(some_xml_data)
print(root.tag)
etree.tostring(root)
```

### 生成

- 可以看到
  - 字符串可以生成 etree 元素节点(Element)
	- 你给他一个字符串
	- 他给你一个 etree 节点
- 节点的根目录标签
	- 取决于字符串最外层的标签

### 生成 etree

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630466004301)

```python
root = etree.XML('<html><head/><body><p>Hello<br/>World</p></body></html>')
etree.tostring(root)
# default: method = 'xml'
etree.tostring(root, method='xml')
# same as above
etree.tostring(root, method='html')
print(etree.tostring(root, method='html', pretty_print=True).decode("utf-8"))
etree.tostring(root, method='text')
```

### 操作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630466164563)

- 这样确实可以通过字符串来生成一棵 etree
- 我们就把得到的字符串 str 和 etree 关联起来了
- 不过我们要的不是 xml
- 我们要的是 html

### 生成 html

- 首先查询文档
- 找到 parsers 语法分析器
- Parsing HTML
  - HTML 就是网页
  - Parsing 就是把纯文本的 html 变成 html 语法树型结构
  - 也就是生成我们的 etree

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211017-1634436427443)

### 动手

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211017-1634437629258)

- 如果只有部分元素
- 也可以生成一棵 html 树么？

### 部分元素

```
root = etree.HTML("<p>data</p>")
etree.tostring(root)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630504602875)

- 这次应该是可以生成 html 元素
- 而且可以自动补全整个的结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630504739828)

- 语法分析器会分析出目前的标签情况
- 他会自动补全这棵树
- 把相关内容放在 html 的根下的 body 节点的下面
- 如果 html 是错乱的标签还能生成树么？

### 错乱标签

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211017-1634436427443)

- 其实仔细看可以发现 broken_html
  - 其实是混乱的 html 源代码
  - 缺少一些结束标签
  - 但是并不妨碍我们生成一棵完成的 etree
- 浏览器也经常面对这类情况
  - 它能够容错
- 这个事情就是 libxml2.6.21 以上的库帮助我们完成的
  - 包括补充头尾标签

### 动手试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220712-1657599575592/wm)

- 绝大多数情况下
	- 会补全结束标签
	- 消除不相关的结束标签
- 不过世事无绝对

### 特殊情况

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220712-1657599630558/wm)

- p元素应该是属于body元素的
- 不过这里让隶属于head元素
- 这种情况很少
- 错的实在太离谱
- 连个body都没有
- 毕竟巧妇难为无米之炊

### 移除空格

```
parser = etree.HTMLParser(remove_blank_text=True)
root = etree.HTML("<root>  <a/>   <b>  </b>     </root>", parser)
etree.tostring(root)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630504914540)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630505103633)

- 标签之间没有意义的空格被删除掉了
- 注意删除的是标签之间的
  - 而不是标签内部的

### 控制缩进

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630505528348)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630505481176)

```python
etree.indent(root, space="    ")
print(etree.tostring(root))
etree.indent(root, space="\t")
etree.tostring(root)
```

### 编码问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630466274184)

```python
# 得到root中的br元素中的第一个
# get first result of iteration
br = next(root.iter('br'))

#将br.tail赋值为一个unicode字符串
br.tail = u'W\xf6rld'

# 想要直接用默认编码 unicode字符串 是不行的
etree.tostring(root, method='text')

# 必须指定编码格式为utf-8
etree.tostring(root, method='text', encoding="utf-8")
```

### 操作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211016-1634393774811)

- 我们可以从树上找到 br 这个节点
- 然后设置他的尾巴
- 这个尾巴不是一般的 ascii 字符
- 在网页中显示为&#246;
- 这个字符的 unicode 编码是`\xf6`

### utf-8

- 这个字符的 unicode 编码是`\xf6`
- 传输的时候需要使用 utf-8
- 编码为 utf-8 方式后
- 占据两个字节
- 为`\xc3\xb6`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630466672155)

### 过程

- root 的类型是 unicode 编码的字节流 bytes
- 传输时需要把他变成 utf-8 编码
- 输出的时候还需要把他从 utf-8 解码为具体的字符
- 进行输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211016-1634393857739)

## 总结

- 终于可以通过字符串构建一棵 etree 了
- 通过 etree.HTML()函数将网页源文件进行 parse(语法分析)生成一棵 etree
- 通过 etree.HTMLParser()函数设置 parser - parser = etree.HTMLParser(remove_blank_text=True)
  - 这个 parser 的作用是去除标签间不相关的空格
  - 用 parser 作为生成树的时候的参数 - root = etree.HTML("<root> <a/> <b> </b> </root>", parser)
  - parser 可以控制语法
- etee.indent()函数可以控制 etree.Element 输出的缩进
  - etree.indent(root, space="\t")
  - etree.tostring(root)
- 我能用前面的 requests 爬到的字符串生成 etree 元素么？
  - 通过 request 获得网页源文件
  - 通过 etree 把源文件转化为一棵 etree 的元素树
- 就是把
  - request 得到的 response 的 content
  - 当做 etree.HTML()需要的参数
  - 对接起来，可以么？🤔
- 下次再说
