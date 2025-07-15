---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 遍历

## 回忆

- 上次 了解了 etree.tostring() 函数参数
  - method = "text" 
	- 可以控制输出结果只包含 text 和 tail
  - pretty_print = True 
	- 可以控制输出结果包含缩进信息
  - with_tail = False 
	- 可以控制输出结果不包含 tail

|属性|英文|
|---|---|
|tag|标签|
|text|文本|
|tail|尾巴|
|attrib|属性|

- etree上 除了etree.Element
	- 还有 `啥` 呢？

### 实体和注释

- 继续查文档
	- https://lxml.de/tutorial.html
- 除了  etree.Element 之外
	- 增加了两类对象
	  1. etree.Entity("#234") 实体
	  2. etree.Comment("some comment") 注释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630463857945)

- 先看看实体 Entity

### 添加实体

```
vi t.py
```

- 为body元素添加Entity("#234")

```python
from lxml import etree
et_html = etree.Element("html")
etree.SubElement(et_html,"head")
etree.SubElement(et_html[0],"title").text = "oeasy"
etree.SubElement(et_html,"body").text = "o2z"
et_html[1].append(etree.Entity("#234"))
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711945327667)

### 输出重定向

```
:w|!python3 % > 1.html
```

- 输出重定向到1.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669457946281)

### 使用火狐

- 用火狐打开1.html

```
:!firefox 1.html &
```

- 出现了ê
	- 复制 这个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458003513)

- 这个ê是什么呢？

### 观察字符

- ê的序号是234

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458085251)

- 查看源文件
	- 找不到 ê
	- 只能看到 &#234; 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231017-1697546153712)

- 我可以把ê这个字符
	- 直接放进网页 源文件吗？

### 直接使用字符

```
vi 1.html
```

- 编辑 网页文件
	- 把 ê 粘贴进入文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711945505741)

- 这次 字符ê 
	- 成为了text的一部分
	- 而不是一个 Entity 实体

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/757829/uid1190679-20250426-1745653259474) 

- 为什么 不直接写好
	- 而要使用 `&#234;`` 这种写法呢？

### 输入符号

- 有些符号
	- 键盘上没有按键
	- 就使用 `&#234;` 方式
		- 234 对应着 符号的 unicode编码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711945733409)

- 换个 序号 试试？🤔

### 汉字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458203480)

- 得到序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458215941)

### 成功

- 确实 输出了
	- 序号对应的 汉字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458223383)

- 源文件中 依然使用Entity形式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711945883423)

- 可以 输出emoji 吗？

### emoji

```
chr(0x1f600)
0x1f600
```

- 得到序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458325252)

- 生成实体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458345799)

###  结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458353714)

- 源代码中 依然使用的 是Entity

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711945957227)

- 可以使用unicode字符串输出吗？

### 编码问题

- 例子代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630466274184)

- 我们简化这个代码

```
from lxml import etree
et_body = etree.Element("body")
et_body.text = u"\xf6"
print(etree.tostring(et_body,pretty_print=True).decode())
```

### 效果

- 代码 没问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669469500993)

- 可以 看到 `输出重定向`的网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669469552082)

- 问题 在tostring 
	- method = "text" 
	- 生成文本 的 时候

### 转化为纯文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669469710572)

- 想要 以文本方式 输出

```
print(etree.tostring(et_body,method="text").decode())
```

### 报错了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669469760718)

- 就像 将字节b"\xf6" 直接解码

```
b"\xf6".decode("ascii")
```

-  解码失败

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711960046679)

- 为何失败？

### 字符集与编码格式

- unicode是字符集
	- 只提供字符对应序号
	- 但无法用于 存储传输
- utf-8是编码方式
	- 可以 编码进入字节
	- 可以 存储传输

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669469907656)

- b"\xf6" 是1个字节
	- 里面存储的是
	- ö 在unicode编码下的字节形态
- b"\xc3\xb6" 是2个字节
	- 里面存储的
	- ö 在utf-8编码下的字节形态
- 默认的ascii解码
	- 解不出来b"\xf6"怎么办呢？

### 如何解码？

- 这个字符的 unicode 编码是`\xf6`
	- 传输的时候需要使用 utf-8
	- 编码为 utf-8 方式后
	- 占据两个字节
		- 为`\xc3\xb6`

```
b"\xc3\xf6".decode("ascii")
```

- 将这两个字节 用 utf-8 解码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/757829/uid1190679-20250426-1745654772025) 

- 可以得到字符

### 反过来

- 对于unicode字符串 u"\xf6"
	- 明确utf-8 编码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630466672155)

- 然后再用utf-8解码就可以了

### 观察tostring的细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669471415277)

- 先把默认编码设置为utf-8

### 修改代码

```
from lxml import etree
et_body = etree.Element("body")
et_body.text = u"\xf6"
print(etree.tostring(et_body,encoding="utf-8",pretty_print=True).decode())
```

- 设置 编码格式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669471466342)

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669471507544)

### 完整过程

- text属性的类型是string
	- tostring默认得到的是 unicode 编码的字节流 bytes
	- 使用 utf-8 代替ascii将 字符串编码

```
from lxml import etree
et_body = etree.Element("body")
et_body.text = u"\xf6"
print(etree.tostring(et_body,encoding="utf-8",pretty_print=True).decode("utf-8"))
```

- 输出的时候再用 utf-8 解码
	- 为具体的字符串
	- 进行输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211016-1634393857739)

- 遍历的时候 可以 筛出Entity 吗？

### 筛选

- iter()函数中
	- 用参数 tag=etree.Element
	- 可以进行筛选

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669459779067)

- 现在可以 筛出 实体Entity了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669459724547)

- iter()函数的参数
  - tag=etree.Entity - 筛选出 Entity 实体对象
  - tag=etree.Element - 筛选出 Element 元素对象
  - tag=etree.Comment - 筛选出 Comment 注释对象

- 再看看 注释(Comment) 咋回事

### Comment

```python3
from lxml import etree
et_html = etree.Element("html")
etree.SubElement(et_html, "head")
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
et_html[1].append(etree.Comment("i am comment"))
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 生成comment

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458780584)

### 浏览

```
firefox 1.html &
```

- 所谓注释Comment
	- 就是网页里面看不到

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/757829/uid1190679-20250426-1745659026409)

- 怎样看到注释呢？

### view source

- 浏览网页时
	- 右键检查源文件
	- 可以看到源文件中的注释
	- 但是源文件里面可以看到的
	- 对源文件的解释
	- 用`<!--` 和 `-->` 包裹起来的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458819057)

- etree.Comment 和etree.Entity 很像
	1. Entity 元素本身只包含
	  - text 成员
	2. Comment 元素包含
	  - 具体的注释文本
	  - 头尾的注释标记
- Comment 也可以 被 筛出来 吗？

### 遍历实体和注释

- 追加 遍历代码

```python3
for element in et_html.iter():
	print(element.tag, element.text, sep=":")
```

- 结果 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669459637978)

- 真的看到了 
	- 实体 Entity
	- 注释 Comment

## 总结

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
- 下次再说
