---
show: step
version: 1.0
enable_checker: true
---

# 文本提取方法

## 回忆

- 这次深入了 xpath 中的元素选择
  - 直接选择
    - /html
    - /child::html
    - /child::html/child::body
  - 任意后代
    - //div
    - /descendant::div
  - 任意元素
    - //div/\*
  - 通过排行选择
    - /span[1]
    - /div[last()]
    - /h1[first()]
  - 属性选择
    - //div[@*]
    - //div[not(@*)]
    - //a[@href]
  - 属性值选择
    - //a[@class='style1']
  - 去冗余空格
    - //div[normalize-space(@id)='mydiv']
  - 子节点计数
    - //\*[count(a)=2]
    - //div[count(a)<3]
    - //div[count(*)>5]
  - 标签名开始于
    - //\*[start-with(name(),'page')]
    - //\*[start-with(name(),'p')]
    - //div[start-with(name(),'p')]
  - 标签名包含
    - //\*[contains(name(),'note')
    - //div[contains(name(),'note')
  - 长度
    - //\*[string-length(name())>3]
  - 并集
    - //div|//span
  - 直接父亲
    - //h1/parent::\*
    - //h2/parent::div
    - //h2/..
  - 祖先
    - //a[@id='link']/ancestor::\*
  - 弟弟
    - //h1[@id='关羽']/siblings::\*
  - 哥哥
    - //h3[@id='张飞']/preceding-siblings::\*
  - 后续
    - //span[@id='刘备']/following::\*
  - 前辈
    - //span[@id='关索']/preceding::\*
  - 自身和所有后代
    - //span[@id='诸葛瞻']/decendant-or-self::\*
- xpath 是整个爬取的核心
- 如果我只想爬取文本
- 而且是跨元素地爬取文本
- 有什么技巧么？🤔

### xpath

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630463341760)

- "string()"可以得到根节点下所有的文本
- "//text()"可以得到任意路径下元素文本的列表

### 得到文本

```
from lxml import etree
html = etree.Element("html")
head = etree.Element("head")
html.append(head)
title = etree.Element("title")
head.append(title)
body = etree.Element("body")
html.append(body)
title.text = "oeasy"
h1 = etree.Element("h1")
body.append(h1)
h1.text = "o3z"
h1.tail = "o2z"
s = html.xpath("string()")
print(s)
l = html.xpath("//text()")
print(l)
```

- 通过这样的方式可以快速得到网页的文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220912-1662979252047/wm)


### 默认页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636203855264)

- 这个页面也是挺简单的
- 那这棵树长什么样呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636203907913)

- 先回游乐场
- 想遍历 body 可以么

### 得到 body

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636205510533)

- xpath 得到的返回值还是 list
- 通过索引运算符可以得到 et_body
- 我可以把它输出出来么？

### 整体输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636205658149)

- 输出 body 还是比较顺利的
- 那我想遍历 body 里面的 3 个 paragraph

### 继续深入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636205809311)

- xpath 返回的还是一个 list 型的变量
- list 里面的元素是 etree 类型 tag 为 p 的变量
- 我想看的是 p 里面的文本 text

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636205929394)

- 这个结果和网页上不一致啊

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636203855264)

### 观察网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636205961826)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636205929394)

- 比对后发现
  - 第一段
    - 没有问题
  - 第二段
    - 超链之前没有问题
    - 超链之后全都消失
  - 第三段
    - 完全消失
- 这是为什么呢？🧐

### 深入观察

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636206093561)

- 第一段
  - 全是文本
- 第二段
  - 前面是文本
  - 然后是 a 元素
  - a 元素后面还是文本
  - 在后面是<br>
  - 在后面是 a
  - 再后面还是文本
- 第三段
  - 文本都在 em 元素中
- 原来子元素里的文本被卡掉了
- 不算作文本了
- 那我看所有文本
- 应该怎么办？

### tostring

- 使用 etree.tostring()函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636206369220)

- 确实可以都输出出来
- 但是如何只要文本不要标签呢呢？

### tostring 函数的 method 参数

- method= "text"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636206437341)

- 这样真的可以输出所有文本！
- 但是有些回车仿佛不受控制
- 还有其他的方法么？

### "//text()" 作为 xpath 参数

```python
print(et_html.xpath("//text()")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636204627990)

- `//text()`
  - `//` 是任意路径下
    - 不管是子路径还是孙路径
    - 只要在底下的节点就算
  - `text()` 说明选择的是其中的文本
- 如果明确落实到 p 这个 element 上面呢？

### 输出文本函数 text()

```python
for p in l_p:
	print(p.xpath("//text()")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636206681318)

- 这是个列表的嵌套
- 看起来是把 html 根下的所有文本都输出了 3 遍
- 我们应该调整一下 xpath 的参数
- 只要 3 个 paragraph 的 文本

### 调整参数

```python
l_p = et_html.xpath("/html/body/p")
for p in l_p:
	print(p.xpath("text()")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636207141580)

- 嵌套在子元素里面的东西还是输出不出来
- 除此之外还有办法吗？🤔
- 回忆一下迭代器函数 iter()

### 迭代器

```python
for p in l_p:
	for element in p:
		print(element.text,end="")
	print()
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636207448241)

- 这种深度优先的迭代器刚好输出所有文本
- 不过写起来有点麻烦啊
- 而且 第三段落会出现 None 这样不应该出现的
- 为什么会出现呢？

### 出现原因

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636206093561)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636207448241)

- br 元素和第 3 个 p 应该是 None 的来源
- 其实 text()更适合输出指定元素的文本
- 而不适合整合各元素的文本

### "string()" 作为 xpath 参数

```python
print(et_html.xpath("string()")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636204616662)

- 如果只要三个目标段落呢？

### 纯文本输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636206666541)

- 这样可以递归地把子元素里面的文本全部输出

### 对比

- "string()"作为 xpath 的参数
  - 返回的类型是字符串
  - 能自动把嵌套的子元素里面的字符串拼接
- "text()"作为 xpath 的参数
  - 返回的类型是字符串的列表
  - 不能自动把嵌套的子元素拼接
  - 但是能明确地拿到本层的字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636204374562)

- 另外还有 etree.tostring 方法
  - 配合 method="text"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636206437341)

- 可是这结果还是有不该回车的地方

### 解决问题

```python
import requests
from lxml import etree
response = requests.get("http://localhost")
et_html = etree.HTML(response.content)
l_et_element = et_html.xpath("/html/body//*")
for element in l_et_element:
    print(element,element.tag,element.text)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637490575286)

### 解决问题

```python
import requests
from lxml import etree
response = requests.get("http://localhost")
et_html = etree.HTML(response.content)
l_et_element = et_html.xpath("/html/body/p")
for element in l_et_element:
    s = element.xpath("string()")
    s = s.replace("\n","")
    print(s)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637491128161)

### 总结

- 可以
  - 通过循环遍历元素子元素进行输出
  - 或者通过 xpath 筛选出节点
    - et_html.xpath("/html/body/ul/li")
      - 返回选择 li 的列表
    - et_html.xpath("//text()")
      - 返回各个文本字符串的列表
    - et_html.xpath("string()")
      - 返回的拼接好的字符串
- 另外还有 etree.tostring 方法
  - 配合 method="text"
- 这个就等于开始进行爬虫了
- 我们去爬取一些真实的网站
- 比如说 oeasy.org
- 不能上网也能爬么？🤔
- 下次再说
