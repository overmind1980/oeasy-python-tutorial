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

![图片描述](uid1190679-20221127-1669521450717.png)

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

![图片描述](uid1190679-20250427-1745716375752.png) 

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
:set fileencoding?
```

- 目前没有设定编码

![图片描述](uid1190679-20260330-1774835738892.png) 

- 编码为默认的utf-8

### 保存

```
:w
```

- 保存文档后 小加号消失

![图片描述](uid1190679-20260330-1774858503733.png) 

- 准备 修改 编码格式

### 设置编码

- 注意等号两边没有空格

```
:set fileencoding=gb2312
```

- 设定编码后
	- 小加号出现
	- 文件字节状态 改变

![图片描述](uid1190679-20250427-1745724177977.png) 

- 保存并退出

```
:wq
```

- 回到 shell
	- 准备浏览页面

### 浏览文件

- 把 gb.html拷贝 到
	- 网页服务器 根目录

```
sudo cp gb.html /usr/share/nginx/html 
sudo service nginx start 
firefox http://localhost/gb.html &
```

- 浏览器 显示正常

![图片描述](uid1190679-20240415-1713146469731.png)

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

![图片描述](uid1190679-20260330-1774858635432.png) 

- 2-bytes 对应 gb2312 
	- 3-bytes 对应 utf-8

### 直接生成

- 尝试直接解码

```
print(et_html[0][0].text)
```

- 直接 解码字节流
	- 使用默认 解码方式utf-8	 
	- 结果 为 乱码

![图片描述](uid1190679-20260330-1774858736560.png) 


### 乱码原因

![图片描述](uid1190679-20260330-1774857517361.png) 

### 尝试手工解码

```
b"\xb8\xf1".decode("gb2312")
b"\xca\xbd".decode("gb2312")
```

- 解码结果

![图片描述](uid1190679-20260330-1774836189615.png) 

- 字节流 该如何
	- 正确地 解码 呢？

### 询问

- 问问ai

![图片描述](uid1190679-20250427-1745725589334.png) 

- 需要设置HTML parser 语法分析器
	-  再用 gb2312解码 

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

- 指定 解码格式 为 gb2312

![图片描述](uid1190679-20240415-1713147753799.png)

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
	- 编码格式gb2312

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

![图片描述](uid1190679-20240415-1713148120974.png)

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
	- 爬虫 按照 gb2312 自动解码

![图片描述](uid1190679-20240415-1713148190078.png)

- head中 的 元数据
	- 虽然 不是 具体内容
	- 但是 作用 很大
- 如果 元数据(meta)中 
	- 设置 编码 为 gb2312 
	- 实际 文件编码为 utf-8 呢？

### 设置编码

- 保留meta中字符集设置为gb2312
	- 设置网页编码为utf-8

![图片描述](uid1190679-20250427-1745738389519.png) 

- 保存并退回到shell

![图片描述](uid1190679-20250427-1745738421535.png) 

### 覆盖文件

- 遇到 乱码问题
	- 就去找parser
	- 设置解码格式

```
sudo cp gb.html /usr/share/nginx/html 
firefox http://localhost/gb.html &
```

- 浏览器被骗惨了

![图片描述](uid1190679-20250427-1745738587598.png) 

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

![图片描述](uid1190679-20250427-1745738669951.png) 

- 应该怎么办呢？

### 设置编码

- 设置 使用utf-8解码

```
parser=etree.HTMLParser(encoding="utf-8")
et_html = etree.HTML(b_html, parser)
print(et_html[1].text)
```

- 解码成功

![图片描述](uid1190679-20250427-1745738772604.png) 

## 总结

- 这次 了解了 编码设置
	- response 获得 网页 的 字节流之后
	- 可按照指定的编码格式解码

![图片描述](uid1190679-20250427-1745738929329.png) 

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
