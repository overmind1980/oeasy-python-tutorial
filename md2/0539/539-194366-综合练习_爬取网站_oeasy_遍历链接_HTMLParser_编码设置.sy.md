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
firefox http://localhost/oeasyorg/index.html &
```

![图片描述](uid1190679-20220604-1654324037955.png)

- 在浏览器里面 能打开
	- 并且 观察到编码格式是`utf-8`

![图片描述](uid1190679-20210903-1630651569966.png)

- 目标是 
	- 把 红框里面的 菜单
	- 扒 下来

### 获取 xpath

- 右键"爱情"
	- 检查元素

![图片描述](uid1190679-20210902-1630587857006.png)

- 右键a元素
	- 复制 xpath
- 得到 
	- /html/body/header/nav/ul/li[1]/a
- 但是
	- 通用的xpath
	- 应该`怎么`写呢？


### 修改

- 爱情的xpath是
	- /html/body/header/nav/ul/li[1]/a
- 电路的xpath是
	- /html/body/header/nav/ul/li[2]/a
- 综合可以 得到整体的xpath 是
	- /html/body/header/nav/ul/li/a

![图片描述](uid1190679-20220713-1657719955413.png)

- 含义是
	- 根下的html下的
	- body下的
	- header下的
	- nav下的
	- ul下的
	- li下的
	- a

### 安装插件

- 如果
	- 蓝桥中没有外网
	- 下面步骤 
	- 在 本地 火狐中完成体验

![图片描述](uid1190679-20240414-1713100050119.png)

- 点击插件和主题

### 找到插件

- 搜索xpath

![图片描述](uid1190679-20240414-1713100165116.jpg)

- 安装插件

![图片描述](uid1190679-20240414-1713100178715.png)

### 通过url 反选

- 点击启动插件
	- 在expression中
	- 粘贴xpath

![图片描述](uid1190679-20230111-1673403116683.png)

- 点击 Excute 执行

### 修改 xpath 路径

- 所有的菜单

```
/html/body/header/nav/ul/li/a
```

![图片描述](uid1190679-20230111-1673403132031.png)

- 可以选中多个标签

- 前三条菜单

```
/html/body/header/nav/ul/li[position()<=3]/a
```

- 倒数两条菜单

```
/html/body/header/nav/ul/li[position()>=last()-1]/a
```

- 可以确定xpath
	- 并写代码了

### 修改

```
vi o.py
```

- 编辑o.py

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

- 运行结果

![图片描述](uid1190679-20210902-1630588074620.png)

- 运行成功


- 如果我想把链接地址拿到
	- 应该怎么办？

### lxml

- 去源头
	- 找官网帮助

![图片描述](uid1190679-20210902-1630588320923.png)

- 找到 etree 节点之后
	- 找到他的 attrib 成员
	- attrib 类型是 dict 字典
	- 然后找到["href"]这个key的value(值)

### 地址

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

- 运行结果

![图片描述](uid1190679-20240415-1713150552604.png)

- 输出结果
	- 只需要链接

### 修正

```
import requests
from lxml import etree
response = requests.get("http://localhost/oeasyorg/index.html")
b_html = response.content
et_html = etree.HTML(b_html)
et_targets = et_html.xpath("/html/body/header/nav/ul/li/a")
for anchor in et_targets:
    attributes = anchor.attrib
    print(attributes["href"])
```

- 输出链接

![图片描述](uid1190679-20240415-1713150634492.png)

### 存入文件

- 代码没有变

![图片描述](uid1190679-20220713-1657720735051.png)

- 输出重定向到`urls.txt`

![图片描述](uid1190679-20220713-1657720819256.png)

- 目前存储的是
	- 相对链接
	- 没法进一步爬取
- 需要 转化为
	- 绝对链接

### 绝对链接

- 链接字符串
	- 拼接

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

- 输出结果
	- 重定向到urls.txt

```
:w|!python3 > urls.txt
```

- 打开urls.txt 如下图所示

![图片描述](uid1190679-20240415-1713150731632.png)

### 总结

- 这次真的爬了一个网站
  - oeasy.org
  - 想要得到 菜单上的所有链接
  
1. 获取 xpath
	- 右键检查元素
2. 爬取之后
	- 获得属性 href 的值
	- 然后切片并拼接为绝对链接地址
	- 并且存储到了 urls.txt 中

![图片描述](uid1190679-20220713-1657722223759.png)

- 能进入 这些得到的链接
	- 再去 深入爬取 吗？🤔
- 下次再说
