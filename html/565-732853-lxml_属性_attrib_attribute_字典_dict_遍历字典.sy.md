---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 attrib

## 回忆

- 上次可以
  - 通过循环遍历元素子元素进行输出
  - 或者通过 xpath 筛选出节点
    - et_html.xpath("/html/body/*")
      - 返回body下所有子节点的列表
    - et_html.xpath("//text()")
      - 返回各个文本字符串的列表
    - et_html.xpath("string()")
      - 返回的拼接好的字符串
- 另外还有 etree.tostring 方法
  - 配合 method="text"？🤔

### 查看文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630461037878)

- etree 元素的属性
	- 很像一个字典 dict
- 我们来试试

### 构造环境

```bash
sudo service nginx start
whereis nginx
cd /usr/share/nginx/html
vi food.html
```

- 首先找到nginx网站
	- 根目录位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231210-1702174515259)

- 然后在根目录下
	- 编辑food.html


### food.html

- 网页文件如下

```html
<!DOCTYPE html>
<html lang="zh-cn">
	<head>
		<title>menu</title>
		<meta charset="utf-8">
	</head>
	<body width="700px" id="mybody">
		<h1>menu</h1>
		<ul id="ulist">
			<li>
				<span class="food">豆汁</span>
				<price>10</price>
			</li>
			<li>
				<span class="food">羊瘪汤</span>
				<price>15</price>
			</li>
			<li>
				<span class="food">折耳根</span>
				<price>20</price>
			</li>
		</ul>
	</body>
</html>
```

### 尝试直接保存文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231210-1702174703218)

- 由于权限问题	
	- 文件无法保存

```
:w !sudo tee %
```

- % 代表当前编辑的文件名
- :w !{cmd} 是一个vim命令
	- 会执行{cmd}命令
	- 并将当前编辑的文件内容作为标准输入传入
- 在这个例子中
	- {cmd}是"sudo tee %
	- 这意味着它会以超级用户的权限
		- 将当前编辑的文件内容保存到当前文件中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231210-1702174820692)

### 写后结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231210-1702174838411)

- 写完之后强制退出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231210-1702174909072)

- 观察写后的文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231210-1702174942403)

### 尝试在浏览器中访问

```
firefox http://localhost/food.html &
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231210-1702175158890)

- 确认网页已经存在
	- <kbd>ctrl</kbd> + <kbd>c</kbd> 结束火狐进程

### 构造结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231210-1702175284199)

- 回到 当前用户文件夹 (~)
	- 编辑爬虫文件

```python
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
print(et_html.attrib)
for attribute in et_html.attrib:
    print(attribute,et_html.attrib[attribute])
```

- 运行结果
	- 确实可以看到属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697978177395)

- 可以用
	- key和value
	- 来 描述 吗？

### items

- 遍历字典

```python
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
for key,value in et_html.attrib.items():
    print(key,value,sep=":")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697978589180)


### 得到属性

- attrib 是 节点元素的 属性
	- 类型是 字典
- attrib字典 
	- 是 节点元素的 成员变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630461979008)

- 可以用 get 和索引的方式
	- 得到属性的值

### 操作属性

```
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
et_body = et_html.xpath("/html/body")[0]
print(etree.tostring(et_html,pretty_print=True).decode())
for key,value in et_body.attrib.items():
    print(key,value,sep=":")
```

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697978975842)

### 属性操作

- 索引方式有报错风险
	- 还可以使用get的方法

```
print(et_body.attrib["id"])
print(et_body.attrib.get("id"))
```

- 效果一样


- 尤其是当你不确定属性是否存在的时候

### 避免索引报错

- 不存在的属性
	- get会返回None
	- []索引会报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668857699571)

- 使用 get 的操作相对更安全
	- 索引可能会爆出 key 不存在的 KeyError
	- 不过也可能呢找不到bug
	- 如果想要得到全部文本呢？

### 得到文本

```
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
l_element = et_html.xpath("/html/body/*")
for element in l_element:
    text = element.xpath("string()")
    text = text.replace("\n", " ")
    print(text.strip())
    print()
```

- 可以得到文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712583657579)


### 属性比较

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630566795961)

- 参考上面的例子

```
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
l_element = et_html.xpath("//li[price>=20]")
for element in l_element:
    print(element)
```

- 修改 xpath的表达式

### 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630568001180)


- 结果

|xpath表达式|找到的元素数|
|---|---|
|//li[price>=20]| 1 条 li|
|//li[price>=15]" |2 条 li|
|//li[price>=10]" | 3 条 li|

### 继续研究

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630568371007)

- 根据上面的例子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630568001180)

- l_element = et_html.xpath("//li[price<=10]/span")

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670031300427)

- 10 元以内(含10元)的食品名称

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670031314170)

- 注意最终输出的是
	- 节点的 text 成员


## 总结

- 这次了解etree.Element的attrib
  - attrib
  - 属性对象本质是一个字典
  - 可以用 get 和索引的方式得到具体的值
  - 使用 get 的方式更安全

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668858225490)


- 我们去爬取一些真实的网站
- 比如说 oeasy.org
- 不能上网也能爬么？🤔
- 下次再说👋

