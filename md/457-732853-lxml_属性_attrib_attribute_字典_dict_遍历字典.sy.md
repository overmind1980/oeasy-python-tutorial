---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 attrib

## 回忆

- 上次了解元素的标签成员
  - tag
- etree.Element最重要的是
	- 构成一棵家族树
- 了解 树 中的元素关系
  - 父子 
	- isparent()
  - 哥哥
	- isprevious
  - 弟弟
	- isnext()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668854537523)

- html元素的属性可以在程序里面找得到吗？🤔

### 查看文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630461037878)

- etree 元素的属性很像像一个字典 dict
- 我们来试试

### 构造环境

- 首先在用户宿主文件夹
	- 建立一个网页

```bash
vi food.html
```

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

### 构造结构

```python
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
print(et_html.attrib)
for attribute in et_html.attrib:
    print(attribute,et_html.attrib[attribute])
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697978177395)

- 确实可以看到属性
- 可以用得到key和value吗？

### items

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

- attrib 是节点元素的属性字典
  - 属性字典是节点元素的成员变量
  - 属性字典的类型是一个字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630461979008)

- 可以用 get 和索引的方式得到属性的值

### 操作属性

```
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
et_body = et_html.xpath("/html/body")[0]
for key,value in et_body.attrib.items():
    print(key,value,sep=":")
```
- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697978975842)

### 属性操作

- 索引方式有报错风险
	- 还可以使用get的方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668857510613)

- 效果一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668857530187)

- 尤其是当你不确定属性是否存在的时候

### 避免索引报错

- 不存在的属性
	- get会返回None
	- []索引会报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668857699571)

- 使用 get 的操作相对更安全
	- 索引可能会爆出 key 不存在的 KeyError
	- 不过也可能呢找不到bug

## 总结

- 这次了解etree.Element的attrib
  - attrib
  - 属性对象本质是一个字典
  - 可以用 get 和索引的方式得到具体的值
  - 使用 get 的方式更安全

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668858225490)

- 除了标签和属性组成员之外
  - 元素类还有文本成员
- 这文本成员怎么理解呢？🤔
- 下次再说
  - 使用 get 的方式更安全

