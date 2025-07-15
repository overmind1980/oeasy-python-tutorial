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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240609-1717932671660)

- 有什么技巧么？🤔

### 准备环境

```
sudo service nginx start
firefox http://localhost &
```

- 启动服务器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697976420944)

- 在浏览器中确认可以访问

### 遍历文本

- 想要遍历body中的所有文本

```python3
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
l_et_element = et_html.xpath("/html/body/*")
for et_element in l_et_element:
	print(et_element.text)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240609-1717935411656)

- 实际网页
	- 很明显 最后一段
	- 文本并不是None

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240609-1717935422552)

- 为什么会这样？

### 相差原因

- xpath("/html/body/*")
	- 只能找到 
	- body元素直接子元素的text
	- 无法找到元素中元素中的text

```python3
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
l_et_element = et_html.xpath("/html/body/*")
for et_element in l_et_element:
	print(et_element.text)
```

- 比如 最后一句
	- 找到p之后
	- 只能找到p中有个em元素
	- 不能找到em中的文本
	- 所以结果为None

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697976734297)

- 怎么办？

### xpath

- "string()"
	- 可以得到根节点下
	- 所有的文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630463341760)

- "//text()"
	- 可以得到任意路径下
	- 元素文本的列表

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
str_html = etree.tostring(html,pretty_print=True).decode()
print(str_html)
s = html.xpath("string()")
print(s)
l = html.xpath("//text()")
print(l)
```

- 通过这样的方式可以快速得到网页的文本
	- xpath("string()") 可以得到纯文本
	- xpath("//text()") 可以得到文本列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697976860750)

- 第一种不利于分词
- 第二种需要处理列表和回车

### 默认页

- 默认页面 挺简单的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636203855264)

- 那这棵树长什么样呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636203907913)

- 可以用这次新了解的方式吗？

### string()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670042746666)

- 列表方式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670042798312)

- 表现形式还是不好

### 深入观察

- 最开始有一个h1元素

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


- 需要递归地把子元素里面的文本全部输出

### 最终输出

```python3
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
l_element = et_html.xpath("/html/body/*")
for element in l_element:
    text = element.xpath("string()")
    text = text.replace("\n", " ")
    print(text)
    print()
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670043126002)

### 对比

- "string()"作为 xpath 的参数
  - 返回值的类型 是 字符串
  - 能自动 把嵌套在 子元素里面的 
	- 字符串拼接
- "text()"作为 xpath 的参数
  - 返回的类型 是 字符串的列表
  - 不能 自动把 嵌套的 子元素拼接
  - 但是能明确地拿到本层的字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636204374562)

- 另外还有 etree.tostring 方法
  - 配合 method="text"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636206437341)

### 得到 具体实现

- 可以用etree.tostring函数吗？

```python
import requests
from lxml import etree
response = requests.get("http://localhost")
et_html = etree.HTML(response.content)
et_body = et_html.xpath("/html/body")[0]
print(etree.tostring(et_body,method="text").decode())
```

- 用传统方法得到body元素的text

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670041449359)

- 输出得到的结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670041466297)

### 总结

- 可以
  - 通过循环遍历元素子元素进行输出
  - 或者通过 xpath 筛选出节点
    - et_html.xpath("/html/body/*")
      - 返回body下所有子节点的列表
    - et_html.xpath("//text()")
      - 返回各个文本字符串的列表
    - et_html.xpath("string()")
      - 返回的拼接好的字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240609-1717932552000)

- 另外还有 etree.tostring 方法
  - 配合 method="text"
- 下次再说
