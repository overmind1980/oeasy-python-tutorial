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

### 编写网页

```bash
vi food.html
```

- 编写网页

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

- <kbd>"</kbd><kbd>+</kbd><kbd>P</kbd> 粘贴
	- 然后 `:wq`保存

### 观察

- 观察写后的文件

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775875384149) 

- 确认写好了
	- 准备拷贝

### 拷贝


- 使用管理员权限(sudo)
	- 把 home中的gb.html(~/gb.html) 
	- 拷贝 到 网页服务器 根目录(/usr/share/nginx/html)

```
sudo cp ~/food.html /usr/share/nginx/html 
ls /usr/share/nginx/html
```

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775875634471) 

- 网站根目录确实已经存在food.html

### 尝试在浏览器中访问

- 服务器启动
	- 浏览器浏览

```
sudo service nginx start
firefox http://localhost/food.html &
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231210-1702175158890)

- 网页已经可以用浏览器访问
	- 准备用爬虫访问

### 构造结构

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775875834201) 

- 在游乐场 跑爬虫

```python
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
```

### 输出网页

```
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775876228407) 

- 尝试输出根元素的属性

### 结果

```
print(et_html.attrib)
for attribute in et_html.attrib:
    print(attribute,et_html.attrib[attribute])
```

- 运行结果
	- 确实可以看到
	- html的属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697978177395)

- 可以用
	- key和value
	- 来 描述 吗？

### items

- 遍历字典

```python
for key,value in et_html.attrib.items():
    print(key,value,sep=":")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697978589180)

- 我想看到所有
	- 有属性元素 的 标签和属性

### xpath

```
l_element = et_html.xpath("//*[@*]")
for ele in l_element:
	print(ele.tag,ele.attrib,sep="|")
```

- 可以找到 所有 有属性的元素

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775876105169) 

### 得到属性

- attrib 是 节点元素的 属性
	- 类型是 字典
- attrib字典 
	- 是 节点元素的 成员变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630461979008)

- 可以用 get 和索引的方式
	- 得到属性的值

### 属性操作

- 索引方式有报错风险
	- 还可以使用get的方法

```
et_body = et_html.xpath("/html/body")[0]
print(et_body.attrib["id"])
print(et_body.attrib.get("id"))
```

- 效果一样

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775876709478) 


### 避免索引报错

- 尝试访问不存在的属性

```
et_body.attrib["not_exist"]
et_body.attrib.get("not_exist")
```

- 不存在的属性
	- []索引会报错
	- get会返回None

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775876833453) 

- 使用 get 的操作相对 更安全
	- 索引可能会爆出 key 不存在的 KeyError
	- 不过也可能呢找不到bug
- 给[] 的方式
	- 使用try 也可以 捕获 KeyError
- 如果想要得到全部文本呢？

### 得到文本

- 使用string

```
str = et_html.xpath("string()")
str
```

- 可以得到文本

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775877046484) 

- 使用//text()

```
str = et_html.xpath("//text()")
str
```

- 得到文本列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775877107054) 

- 可以根据 属性筛选吗？

### 属性比较

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630566795961)

- 参考上面的例子
	- 修改 xpath的表达式

```
lst = et_html.xpath("//li[price>=20]")
lst
```

- 筛选出一个li

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775877202164)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630568001180)

### 更多xpath

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

```
lst = et_html.xpath("//li[price>=20]/span")
lst
```

- 10 元以内(含10元)的食品名称


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775877366628) 

- 注意最终输出的是
	- 节点的 text 成员

```
lst[0].text
```

- 输出效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/732853/uid1190679-20260411-1775877420970) 

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

