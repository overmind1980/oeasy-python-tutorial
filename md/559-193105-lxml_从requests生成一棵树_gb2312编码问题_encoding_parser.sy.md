---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 生成 etree

## 回忆

- 上次终于可以通过字符串
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

### 准备环境

- 启动 nginx

```
sudo service nginx start
sudo service nginx status
firefox http://localhost &
```

- 浏览器中确认

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519133861)

- 先去游乐场试试

### 游乐场试水

```
import requests
response = requests.get("http://localhost")
response.status_code
```

- 确实可以访问到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519223218)

- 可以得到源文件吗？

### 得到源文件


```
response.text
response.content
```

- 可以得到两种形式的响应源文件
	- text 字符串
	- content 字节序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519291120)

- 可以生成元素树吗？

### 生成元素树

```
b_html = response.content
et_html = etree.HTML(b_html)
print(etree.tostring(et_html,pretty_print=True).decode())
```


- 用字节序列形式的
	- response.content
	- 确实可以生成元素树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519443180)

- 可以遍历这棵元素树吗？

### 遍历元素树

```python
for element in et_html.iter():
	print(element.tag)
```

- 确实可以遍历整棵树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519686046)

- 把这些整合到py文件中

### 整合

- 整合结果

```python
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
print(etree.tostring(et_html,pretty_print=True).decode())
for element in et_html.iter():
	print(element.tag)
```

- 我可以遍历body元素所对应的这个分支吗？

### 遍历body

- body元素是et_html[1]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669520869926)

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669520882534)

- 如果我想要找的是body中
	- 所有的a元素呢？

### 筛选

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669520997770)

- 输出结果
	- 确实筛选了a元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669521011642)

- 我想看看
	- a.text
	- a.attrib

### 修改结果

```
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
print(etree.tostring(et_html,pretty_print=True).decode())
for element in et_html[1].iter("a"):
    print(element.tag)
    print(element.text)
    print(element.attrib)
    print("================")
```

- 最终结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711962340893)

- 这些都是ok的
- 但是如果编码格式不是utf-8
- 而是gb2312呢？

### 编辑gb2312 文档

```
vi gb.html
```

- 编写网页

```
<html>
  <head>
    <title>gb2312格式</title>
  </head>
  <body>
	我的格式并不是utf-8，而是gb2312。
  </body>
</html>
```

### 设置编码

- 观察编码

```
:set fileencoding
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713146021689)

```
:set fileencoding=gb2312
```

- 然后保存

### 浏览文件

```
sudo cp gb.html /usr/share/nginx/html 
sudo service nginx start 
firefox http://localhost/gb.html &
```

- 浏览器显示没有问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713146469731)

### 尝试爬取

```
import requests
from lxml import etree
response = requests.get("http://localhost/gb.html")
b_html = response.content
et_html = etree.HTML(b_html)
print(b_html)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713147607032)

- 看起来 
	- 汉字编码方式是两字节 
	- 应该对应gb2312 
	- 而不是utf-8

### 尝试手工解码

```
b"\xb8\xf1".decode("gb2312")
b"\xca\xbd".decode("gb2312")
```

- 解码结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713146698657)

- 如何根据这个字节流
	- 生成一颗正确的树呢？

### 直接生成

```
import requests
from lxml import etree
response = requests.get("http://localhost/gb.html")
b_html = response.content
et_html = etree.HTML(b_html)
print(et_html[1].text)
```

- 输出结果为乱码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713147662070)

- 因为HTML将字节流解码的方式
	- 不是gb2312
- 如何让他强制用gb2312解码呢？

### 设置解码格式

```
import requests
from lxml import etree
response = requests.get("http://localhost/gb.html")
b_html = response.content
parser=etree.HTMLParser(encoding="gb2312")
et_html = etree.HTML(b_html,parser)
print(et_html[1].text)
```

- 解码结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713147753799)

- 能否不用解码格式
- 让爬虫自动捕获解码格式呢？

### 修改网页

```
vi gb.html
```

- 为网页文件添加
	- 第三句 元数据设置

```
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
    <title>gb2312格式</title>
  </head>
  <body>
	我的格式并不是utf-8，而是gb2312。
  </body>
</html>
```

- 添加第三句
	- 明确网页文件
	- 编码格式

### 浏览

```
sudo cp gb.html /usr/share/nginx/html
firefox http://localhost/gb.html &
```

- 拷贝并浏览
	- 查看源代码
	- view source

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713148120974)

### 解码

- 由于网页header中
	- 设置了元数据meta
	- content="text/html; charset=gb2312" 

```
import requests
from lxml import etree
response = requests.get("http://localhost/gb.html")
b_html = response.content
et_html = etree.HTML(b_html)
print(et_html[1].text)
```

- HTML解析的时候
	- 不用手动设置解码方式
	- 会自动读取网页文件编码方式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713148190078)

- head中的元数据
	- 虽然不是内容
	- 但是作用很大
- 遇到 乱码问题
	- 就去找parser
	- 设置解码格式

## 总结

- 首先 将 字符串
	- 转化为 ElementTree对象
- 然后把前面的 requests的结果
	- 和 etree生成 结合了
- 通过 requests 
	- 获得网页的 response
- 通过 HTML 函数
	- 把 response 的字节序列
	- 转化为一棵 etree 树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669521450717)

- 流程 
	- 跑通了
- 但是 
	- 找元素 挺麻烦
	- 有什么 更好的方法吗？🤔
- 下次再说 👋
