---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 生成 etree

## 回忆

- 终于可以通过字符串
	- 构建一棵 etree 的节点树了
	- 通过 etree.HTML()函数
	- 将网页源文件进行 parse(语法分析)生成一棵 etree

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711961966480)

- 要总装了 
	- 把一切串联起来
    - 将request 得到的 response.content
    - 当做 etree.HTML()需要的参数
- 想 把爬到的字节序列 
	- 生成 节点树？🤔
- 这`可能`吗？🤔

### 准备环境

- 启动 nginx

```
sudo service nginx start
sudo service nginx status
firefox http://localhost &
```

- 浏览器中 确认 
	- 已经在 localhost 启动web服务

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193105/uid1190679-20250427-1745716375752) 

- 先去 游乐场
	- 试试 用python 发请求 接响应

### 游乐场试水

```
import requests
response = requests.get("http://localhost")
response.status_code
```

- 状态码 为 200

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519223218)

- 可以 得到`源文件` 吗？

### 得到源文件

```
response.text
response.content
```

- 两种形式的 响应
	1. text 字符串
	2. content 字节序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519291120)

- 可以 用响应 生成`元素树` 吗？

### 生成元素树

```
from lxml import etree
b_html = response.content
et_html = etree.HTML(b_html)
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 用字节序列形式的
	- response.content
	- 确实可以生成元素树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519443180)

- 好像没有 缩进(indent)

### 控制缩进

- 设置 缩进(indent)

```
etree.indent("et_html", "    ")
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 缩进成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193105/uid1190679-20250427-1745717075358) 

- 可以 `遍历` 这棵 etree吗？

### 遍历元素树

```python
for element in et_html.iter():
	print(element.tag, element.text)
```

- 确实可以遍历整棵树

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193105/uid1190679-20250427-1745717304093) 

- 把 上面这些代码 
	- 整合到py文件中

### 整合

```
vi t.py
```

- 整合代码

```python
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
print(etree.tostring(et_html,pretty_print=True).decode())
for element in et_html.iter():
	print(element.tag, element.text)
```

- 我可以 `只`遍历 body元素 对应的分支吗？

### 遍历body

```python
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
print(etree.tostring(et_html[1],pretty_print=True).decode())
for element in et_html[1].iter():
	print(element.tag, element.text)
```

- body元素是
	- html 的 第`1`个子节点
	- et_html[1]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669520869926)

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193105/uid1190679-20250427-1745718260901/wm) 

- 如果我 只想要
	- body中的 a元素 呢？

### 筛选

```
for element in et_html[1].iter("a"):
	print(element.tag, element.text)
```

- 遍历的时候 对a元素 进行筛选

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/193105/uid1190679-20250427-1745718715836) 

- 输出结果
	- 确实筛选了a元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669521011642)

- 我 还想看看
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

## 总结

- 上次 将 字符串
	- 转化为 etree节点
- 这次 
	- 发送requests
	- 返回的response
- 将 response 作为 源头
	- 生成etree节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669521450717)

- 但是 如果 网页文件 的 编码格式
	- 不是utf-8
	- 而是gb2312呢？？🤔
- 下次再说 👋
