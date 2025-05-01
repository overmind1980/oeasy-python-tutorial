---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 遍历

## 回忆

- 上次了解 深度优先遍历 函数 iter

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

### 实体和注释

- 为 root元素 增加了 两类对象
  - etree.Entity("#234") 实体
  - etree.Comment("some comment") 注释
  - 还有原来的 
  - etree.Element("h1")
- root 元素本身是 
	- etree.Element 对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630463857945)


- Entity 和 Comment 是另外两类对象
  - 作为 root 元素的子对象
    - 可以被遍历到
    - 但是不属于 etree.Element 元素类的对象
- iter()函数中
	- 用参数 tag=etree.Element
	- 可以进行筛选
- Entity 元素本身只包含
  - text 成员
- Comment 元素包含
  - 头尾的注释标记
  - 具体的注释内容

### 添加实体

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

```
:!firefox 1.html
```

- 用火狐打开1.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458003513)

- 出现了ê这个字符
- 这个ê是什么呢？

### 观察字符

- ê的序号是234

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458085251)

- 查看源文件
	- 看到源文件中的 实体
	- Entity

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231017-1697546153712)

- 我可以把ê这个字符
	- 直接放进网页 源文件吗？

### 直接使用字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711945505741)

- 这次 字符ê 
	- 成为了text的一部分
	- 而不是一个 Entity 实体

- 为什么会有&#234;这种写法呢？

### 输入符号

- 有些符号
	- 键盘上没有按键

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711945733409)

- 就使用 &#234; 方式输出
	- 234 对应着 该符号的 unicode编码
- 可以换个序号输出吗？🤔
- 我们试试

### 汉字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458203480)

- 得到序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458215941)

- 确实输出了指定序号的汉字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458223383)

- 源文件中依然使用Entity的形式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711945883423)

- 可以输出emoji符号吗？

### emoji

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458325252)

- 得到序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458345799)

- 生成实体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458353714)

- 源代码中依然使用的是Entity

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711945957227)


### 编码问题

- 例子代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630466274184)

- 我们简化这个代码

### 操作

```
from lxml import etree
et_body = etree.Element("body")
et_body.text = u"\xf6"
print(etree.tostring(et_body,pretty_print=True).decode())f
```

- 本身没有什么问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669469500993)

- 甚至可以看到输出重定向的网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669469552082)

- 问题出现在tostring函数中
	- 当method = "text" 时

### 转化为纯文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669469710572)

- 问题是

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669469760718)

- b"\xf6" 
	- 无法用默认的ascii 进行解码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711960046679)

- 那是为什么？

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
	- 观察tostring的细节

### 设置编码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669471415277)

- 先把默认编码设置为utf-8

### utf-8

- 这个字符的 unicode 编码是`\xf6`
	- 传输的时候需要使用 utf-8
	- 编码为 utf-8 方式后
	- 占据两个字节
		- 为`\xc3\xb6`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630466672155)

- 然后再用utf-8解码就可以了

### 修改代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669471466342)

```
from lxml import etree
et_body = etree.Element("body")
et_body.text = u"\xf6"
print(etree.tostring(et_body,encoding="utf-8",pretty_print=True).decode())
```

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211016-1634393857739)

- 进行输出
- Comment怎么玩呢？

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
firefox 1.html
```

- 浏览网页时
	- 右键检查源文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669458819057)

- 可以看到源文件中的注释
	- 所谓注释Comment
	- 就是网页里面看不到
	- 但是源文件里面可以看到的
	- 对源文件的解释
	- 用`<!--` 和 `-->` 包裹起来的
- etree.Comment和etree.Entity很像
- 可以控制输出时候的缩进吗？

### 控制缩进

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630505528348)

- 根据文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669460191258)

- 输出缩进

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669460207547)

- 可以把缩进改为4空格吗？

### 调整缩进

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669460280148)

- 可以调整吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669460300493)

- 确实是有效的 
- Entity 和 Comment 可以被遍历出来吗？

### 遍历实体和注释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669459173609)

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669459637978)

- 遍历的时候可以筛选Entity和Comment吗？

### 筛选

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669459779067)

- iter()函数的参数
  - tag=etree.Entity - 筛选出 Entity 实体对象
  - tag=etree.Element - 筛选出 Element 元素对象
  - tag=etree.Comment - 筛选出 Comment 注释对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221126-1669459724547)

- 现在可以在内存里生成操作这颗 etree 树了

## 总结

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
- 下次再说
