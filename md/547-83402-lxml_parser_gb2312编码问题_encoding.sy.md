---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 生成 etree

## 回忆

- 上上次 将 字符串
	- 转化为 etree节点
- 上次 
	- 发送requests
	- 返回的response
- 将 response 作为 源头
	- 生成etree节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669521450717)

- 但是 如果 网页文件 的 编码格式
	- 不是utf-8
	- 而是gb2312呢？？🤔

### 再准备环境

- 启动 nginx

```
sudo service nginx start
sudo service nginx status
firefox http://localhost &
```

- 浏览器中 确认 
	- 已经在 localhost 启动web服务

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193105/uid1190679-20250427-1745716375752) 

- 准备 网页

### 网页

- 编辑gb2312 文档

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

- 目前没有设定编码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745724020616)

- 编码为默认的utf-8

```
:w
```

- 保存文档后 小加号消失

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745724083989) 

- 准备修改编码格式

### 设置编码

```
:set fileencoding=gb2312
```

- 设定编码后
	- 小加号出现
	- 文件字节状态 改变

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745724177977) 

- 保存文件

```
:wq
```

- 回到 shell
	- 准备浏览页面

### 浏览文件

```
sudo cp gb.html /usr/share/nginx/html 
sudo service nginx start 
firefox http://localhost/gb.html &
```

- 浏览器显示正常

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713146469731)

- 这个文件编码 怎么才能`看出来`呢？

### 尝试爬取

```
import requests
from lxml import etree
response = requests.get("http://localhost/gb.html")
b_html = response.content
et_html = etree.HTML(b_html)
print(b_html)
```

- 单个汉字 编码 为 两字节 (2-bytes)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713147607032)

- 2-bytes 对应 gb2312 
	- 3-bytes 对应 utf-8

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

- 使用默认 解码方式utf-8 解码字节流
	- 结果 为 乱码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713147662070)

- 需要使用 gb2312解码 

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745725589334) 

- 我们需要设置HTML parser 语法分析器

### 设置解码格式

- 语法分析的时候 设置 parser

```
import requests
from lxml import etree
response = requests.get("http://localhost/gb.html")
b_html = response.content
parser=etree.HTMLParser(encoding="gb2312")
et_html = etree.HTML(b_html, parser)
print(et_html[1].text)
```

- 解码结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713147753799)

- 能否让 浏览器 和 爬虫
	- 清楚地 知道 
	- 当前网页 到底使用 什么`编码`呢？

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

- 添加 第三句 meta(元数据)
	- 明确网页文件
	- 编码格式

```
:wq
```

- 保存并退回到shell

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

- lxml 在 HTML解析的 时候
	- 不用手动 设置解码方式
	- 会自动读取 网页文件 编码方式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240415-1713148190078)

- head中的元数据
	- 虽然不是内容
	- 但是作用很大
- 如果 元数据(meta)中 
	- 设置 编码 为 gb2312 
	- 实际 文件编码为 utf-8 呢？

### 设置编码

- 设置网页编码为utf-8

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745738389519) 

- 保存并退回到shell

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745738421535) 

### 覆盖文件


- 遇到 乱码问题
	- 就去找parser
	- 设置解码格式

```
sudo cp gb.html /usr/share/nginx/html 
firefox http://localhost/gb.html &
```

- 网页效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745738587598) 

- 如果使用爬虫爬取呢？

### 爬取

```
import requests
from lxml import etree
response = requests.get("http://localhost/gb.html")
b_html = response.content
et_html = etree.HTML(b_html)
print(et_html[1].text)
```

- 将字节流 解码 失败

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745738669951) 

- 应该怎么办呢？

### 设置编码

- 设置 使用utf-8解码

```
parser=etree.HTMLParser(encoding="utf-8")
et_html = etree.HTML(b_html, parser)
print(et_html[1].text)
```

- 解码成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745738772604) 


## 总结

- 这次 了解了 编码设置
	- response 获得 网页 的 字节流之后
	- 可按照指定的编码格式解码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83402/uid1190679-20250427-1745738929329) 

|编码名称|应用领域|
|---|---|
|UTF-8|使用最广泛|
|ASCII|英语|单字节首选|
|ISO-8859-1|拉丁字母|
|GBK|简繁体中文|
|BIG5|繁体中文|


- etree 可以顺利生成了 
	- 如何 快速 定位 要爬取的节点呢？？🤔
- 下次再说 👋
