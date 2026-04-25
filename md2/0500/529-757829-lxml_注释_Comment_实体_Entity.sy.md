本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

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

![图片描述](../0529/uid1190679-20210901-1630463857945.png)

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

![图片描述](../0529/uid1190679-20240401-1711945327667.png)

### 输出重定向

```
:w|!python3 % > 1.html
```

- 输出重定向到1.html

![图片描述](../0529/uid1190679-20221126-1669457946281.jpg)

### 使用火狐

- 用火狐打开1.html

```
:!firefox 1.html &
```

- 出现了ê
	- 复制 这个字符

![图片描述](../0529/uid1190679-20221126-1669458003513.png)

- 这个ê是什么呢？

### 观察字符

- 进入游乐场观察

```
!python
```

- ê的序号是234

![图片描述](../0529/uid1190679-20221126-1669458085251.png)

- 查看源文件
	- 找不到 ê
	- 只能看到 &amp;#234;

![图片描述](../0529/uid1190679-20231017-1697546153712.png)

- 我可以把ê这个字符
	- 直接放进网页 源文件吗？

### 直接使用字符

```
vi 1.html
```

- 编辑 网页文件
	- 把 ê 粘贴进入文档

![图片描述](../0529/uid1190679-20240401-1711945505741.png)

- 这次 字符ê 
	- 成为了text的一部分
	- 而不是一个 Entity 实体

![图片描述](../0529/uid1190679-20250426-1745653259474.png) 

- 为什么 不直接写在网页里
	- 而要使用 `&#234;` 这种写法呢？

### 输入符号

- 有些符号
	- 键盘上 没有 这个键

![图片描述](../0529/uid1190679-20240401-1711945733409.png)

- 使用 `&#234;` 方式	
	- 234 对应着 符号的 unicode编码
- 换个 序号 试试？🤔

### 汉字

```
0x4e00
chr(19968)
```

- 得到序号

![图片描述](../0529/uid1190679-20260327-1774587672787.png) 

- 写到网页中

![图片描述](../0529/uid1190679-20221126-1669458215941.jpg)

### 成功

- 确实 输出了
	- 序号对应的 汉字
	- `一`

![图片描述](../0529/uid1190679-20221126-1669458223383.png)

- 源文件中 依然使用Entity形式

![图片描述](../0529/uid1190679-20240401-1711945883423.png)

- 可以 输出emoji 吗？

### emoji

```
chr(0x1f600)
0x1f600
```

- 得到序号

![图片描述](../0529/uid1190679-20221126-1669458325252.png)

- 生成实体

![图片描述](../0529/uid1190679-20221126-1669458345799.png)

###  结果

![图片描述](../0529/uid1190679-20221126-1669458353714.png)

- 源代码中 依然使用的 是Entity

![图片描述](../0529/uid1190679-20240401-1711945957227.png)

- 可以使用unicode字符串输出吗？

### 编码问题

- 例子代码

![图片描述](../0529/uid1190679-20210901-1630466274184.png)

- 我们简化这个代码

```
from lxml import etree
et_body = etree.Element("body")
et_body.text = u"\xf6"
print(etree.tostring(et_body,pretty_print=True).decode())
```

### 效果

- 代码 没问题
	- 可以输出重定向 到 网页

![图片描述](../0529/uid1190679-20221126-1669469500993.png)

- 网页 没有问题！

![图片描述](../0529/uid1190679-20221126-1669469552082.png)

- 问题 在tostring 
	- method = "text" 
	- 生成文本 的 时候

### 转化为纯文本

![图片描述](../0529/uid1190679-20221126-1669469710572.png)

- 想要 以文本方式 输出

```
print(etree.tostring(et_body,method="text").decode())
```

### 报错了

![图片描述](../0529/uid1190679-20221126-1669469760718.jpg)

- 就像 将字节b"\xf6" 直接解码

```
b"\xf6".decode("ascii")
```

-  解码失败

![图片描述](../0529/uid1190679-20240401-1711960046679.png)

- 为何失败？

### 字符集与编码格式

```
b = b"\xf6"
b
chr(0xf6)
```

- chr可以
	- 得到 序号
	- 得到 unicode 编码

![图片描述](../0529/uid1190679-20260327-1774587912975.png) 


### unicode 和 utf-8

- unicode 是 字符集
	- 只提供字符对应序号
	- 但无法用于 存储传输

```
"ö".encode("unicode-escape")
"ö".encode("utf-8")
```

- utf-8是编码方式
	- 可以 编码进入字节
	- 可以 存储传输

![图片描述](../0529/uid1190679-20260327-1774588059901.png) 

- b"\xf6" 
	- 是1个字节
	- 里面存储的是 ö 的 序号
	- unicode编码
- b"\xc3\xb6" 是2个字节
	- 里面存储的
	- ö 在utf-8编码下的字节形态

### 实践观察

- 观察 1.html的 字节形态

![图片描述](../0529/uid1190679-20260327-1774588257312.png) 

- 可以看到 字符ö
	- 存了两个字节
	- b"\xc3\xb6"

![图片描述](../0529/uid1190679-20260327-1774588287243.png) 

- 默认的ascii解码
	- 解不出来b"\xf6"怎么办呢？

### 如何解码？

- 这个字符的 unicode 编码是`\xf6`
	- 传输的时候需要使用 utf-8
	- 编码为 utf-8 方式后
	- 占据两个字节
		- 为`\xc3\xb6`

```
b"\xc3\xb6".decode("ascii")
b"\xc3\xb6".decode("utf-8")
```

- 解码方式 
	- 选 ascii 报错
	- 选 utf-8 成功

![图片描述](../0529/uid1190679-20260327-1774588407414.png) 

- 必须用utf-8解码

### 观察tostring的细节

![图片描述](../0529/uid1190679-20221126-1669471415277.jpg)

- 先把默认编码设置为utf-8

### 修改代码

```
from lxml import etree
et_body = etree.Element("body")
et_body.text = u"\xf6"
print(etree.tostring(et_body,encoding="utf-8",pretty_print=True).decode())
```

- 设置 编码格式utf-8

![图片描述](../0529/uid1190679-20221126-1669471466342.jpg)

- 执行结果

![图片描述](../0529/uid1190679-20221126-1669471507544.png)

### 完整过程

- 先把字符 编码为utf-8存储进入 etree
	- 再使用 utf-8 代替ascii将 字符串编码

```
from lxml import etree
et_body = etree.Element("body")
et_body.text = u"\xf6"
print(etree.tostring(et_body,encoding="utf-8",pretty_print=True).decode("utf-8"))
```

- 输出的时候再用 utf-8 解码
	- 为具体的字符串
	- 进行输出

![图片描述](../0529/uid1190679-20260327-1774588614726.png) 

- 遍历的时候 可以 筛出Entity 吗？

### 筛选

- iter()函数中
	- 用参数 tag=etree.Element
	- 可以进行筛选

![图片描述](../0529/uid1190679-20221126-1669459779067.jpg)

- 现在可以 筛出 实体Entity了

![图片描述](../0529/uid1190679-20221126-1669459724547.png)

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

![图片描述](../0529/uid1190679-20221126-1669458780584.jpg)

### 浏览

```
firefox 1.html &
```

- 所谓注释Comment
	- 就是网页里面看不到

![图片描述](../0529/uid1190679-20250426-1745659026409.png)

- 怎样看到注释呢？

### view source

- 浏览网页时
	- 右键检查源文件
	- 可以看到源文件中的注释
	- 但是源文件里面可以看到的
	- 对源文件的解释
	- 用`<!--` 和 `-->` 包裹起来的

![图片描述](../0529/uid1190679-20221126-1669458819057.png)

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

![图片描述](../0529/uid1190679-20221126-1669459637978.png)

- 真的看到了 
	- 实体 Entity
	- 注释 Comment

## 总结

- 在 内存构建 一棵 `etree树` 后
	- etree.tostring()函数
		- 可以输出网页文件
	    - `etree.tostring(et_html,pretty_print=True)`
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
