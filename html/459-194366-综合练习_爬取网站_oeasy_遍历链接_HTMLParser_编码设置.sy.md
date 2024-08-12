---
show: step
version: 1.0
enable_checker: true
---

# 爬取网站

## 回忆

- 上次深入了 xpath 中的元素选择
  - 可以根据元素层级关系选择
  - 也可以根据元素位置选择
  - 还可以根据属性具体值选择
  - 而且可以根据文本的值进行选择
  - 甚至开始使用通配符
- 我们来爬取一个真正的网站吧
  - 比如 oeasy.org
  - 怎么弄呢？🤔

### 下载网站

```
git clone http://gitee.com/overmind1980/oeasyorg.git
sudo cp -r oeasyorg /usr/share/nginx/html/
sudo service nginx start
firefox http://localhost/oeasyorg/index.html
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220604-1654324037955)

- 在浏览器里面能打开
- 并且观察到编码格式是`utf-8`
- 我的目标是把红框里面的菜单扒下来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210903-1630651569966)

### 获取 xpath

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630587857006)

- 右键"爱情"
	- 检查元素
- 右键a元素
	- 复制 xpath
	- /html/body/header/nav/ul/li[1]/a
	- 但是通用的xpath应该怎么写呢？


### 修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220713-1657719955413)

- 爱情的xpath是/html/body/header/nav/ul/li[1]/a
- 电路的xpath是/html/body/header/nav/ul/li[2]/a
- 综合可以得到整体的是
	- /html/body/header/nav/ul/li/a
- 含义是
	- 根下的html下的body下的header下的nav下的ul下的li下的a


### 安装插件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230111-1673403083841)

### 通过url 反选

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230111-1673403116683)

- 点击 Excute 执行
- 修改 xpath 路径

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230111-1673403132031)

- 可以选中多个标签
- 可以确定xpath
	- 并写代码了

### 修改
- 把原来的 get.py 打开
	- :w oeasy.py
		- 另存为oeasy.py
	- :e oeasy.py
		- 打开oeasy.py

```
import requests
from lxml import etree
response = requests.get("http://localhost/oeasyorg/index.html")
b_html = response.content
et_html = etree.HTML(b_html)
et_targets = et_html.xpath("/html/body/header/nav/ul/li/a")
for anchor in et_targets:
    print(anchor.text)
```

- 特别注意
	- 要把下载到的字节序列(content)
	- 送到 etree.HTML这个 parser 里面分析

### 运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220713-1657720460765)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630588074620)

- 运行成功
- 可以直接从oeasy.org得到字节序列吗？

### 尝试 

```
import requests
from lxml import etree
response = requests.get("http://localhost/oeasyorg/index.html")
b_html = response.content
et_html = etree.HTML(b_html)
et_targets = et_html.xpath("/html/body/header/nav/ul/li/a")
for anchor in et_targets:
    print(anchor.text)
```

- 爬取结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697980773401)

- 编码格式出了问题

### 编码设置

```
import requests
from lxml import etree
response = requests.get("http://localhost/oeasyorg/index.html")
b_html = response.content
et_html = etree.HTML(b_html,parser=etree.HTMLParser(encoding="utf-8"))
et_targets = et_html.xpath("/html/body/header/nav/ul/li/a")
for anchor in et_targets:
    print(anchor.text)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697980815852)

- 如果我想把链接地址拿到
- 应该怎么办？
- 去源头
- 找官网帮助

### lxml

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630588320923)

- 找到 etree 节点之后
- 找到他的 attrib 属性
- 这个属性是一个 dict 字典
- 然后找到["href"]这个key的value(值)

### 地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220713-1657720604266)

```
import requests
from lxml import etree
response = requests.get("http://localhost/oeasyorg/index.html")
b_html = response.content
et_html = etree.HTML(b_html)
et_targets = et_html.xpath("/html/body/header/nav/ul/li/a")
for anchor in et_targets:
    print(anchor.text)
    attributes = anchor.attrib
    print(attributes["href"])
```

### 存入文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220713-1657720735051)


- 代码没有变
- 输出重定向到`urls.txt`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220713-1657720819256)

- 目前存储的是相对链接
	- 需要转化为绝对链接

### 绝对链接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220713-1657722183295)

- 完成了链接字符串的切片和拼接

```
import requests
from lxml import etree
response = requests.get("http://localhost/oeasyorg/index.html")
b_html = response.content
et_html = etree.HTML(b_html)
et_targets = et_html.xpath("/html/body/header/nav/ul/li/a")
for anchor in et_targets:
    attributes = anchor.attrib
    link = attributes["href"]
    link = link.replace("./","")
    link = "http://localhost/oeasyorg/" + link
    print(link)
```

### 总结

- 这次真的爬了一个网站
  - oeasy.org
- 右键检查元素
  - 获取 xpath
- 爬取之后获得属性 href 的值
- 然后切片并拼接为绝对链接地址
- 并且存储到了 urls.txt 中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220713-1657722223759)

- 能把这些链接都爬一遍么？🤔
- 下次再说
