---
show: step
version: 1.0
enable_checker: true
---

# h1 - h6 标题元素

## 回忆

- 上次我们讲了ul
	- unordered list
	- 无序列表
- ul里面的是元素
	- 是li
	- list item

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719975489447)

- li元素还可以应用到
	- ol
	- menu
- 具体怎么用呢?🤔

### 一只手

- 五个兄弟

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719977871130)

- 有序列表 
	- ol
	- ordered list

### 例子

```
<!DOCTYPE html>
<html>
	<head>
		<title>
				身体的结构
		</title>
	</head>
	<body>
		  下面手的组成
		  <ol>
		  		<li>大拇哥 </li>
		  		<li>二拇哥 </li>
		  		<li>三拇哥 </li>
		  		<li>无名指 </li>
		  		<li>小拇指 </li>
			</ol>
	</body>
</html>
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719978100100)

- 可以嵌套进入整个身体的ul中吗?

### 嵌套结构

```
<html>
	<head>
		<title>
				身体的结构
		</title>
	</head>
	<body>
		  下面是身体的组成
		  <ol>
		  		<li>脑袋 </li>
		  		<li>上肢 </li>
		  		<ol> 
		  			<li>躯干 </li>
		  			<li>左臂 </li>
		  			<ol>
		  				<li>左大臂</li>
		  				<li>左小臂</li>
		  				<li>左手</li>
		  			</ol>
		  			<li>右臂 </li>
		  		</ol>
		  		<li>下肢 </li>
		  		<ol>
		  			<li>左腿 </li>
		  			<li>右腿 </li>
		  		</ol>
			</ol>
	</body>
</html>
```

- 既然有了ul
	- ol还有什么意义吗?

### 描述步骤

- 本身是有次序的

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2746013/uid1190679-20241117-1731845812065) 

- 这类元素
	- 不但是列表
	- 而且要求有序
- 可以看看现在的要求吗?

### ol

- https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719978500319)

- 元素的属性
	- 我们见过

### 回忆tdk

- tdk
	- title
	- description
	- keywords

```html
<!DOCTYPE HTML>
<html lang="zh-cn">
	<head>
		<title>oeasy的ps/photoshop教程</title>
		<meta name="keywords" content="零基础教程,入门教程,初学者从入门到精通,ps入门,photoshop教学,视频教程,美工必备,作图修图,抠像处理,全套免费自学">
	</head>
	<body>
	</body>
</html>
```

- meta元素有两个属性

|属性名|属性值|
|---|---|
|name |"keywords"|
|content|"british,type,face..."

### start

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719978677440)

- 开始元素

### 效果

```
<ol start="0">
```

- 从零开始

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719978717397)

- reversed 
	- 翻转 
	- 有什么用呢?

### reversed

- 看起来
	- 反转次序
	- 布尔类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719978772078)

- 布尔类型怎么理解?

### 布尔类型属性

- 以下三种等价
	- https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719978921528)

### 代码
```
<ol start="0" reversed>
```

- 带上负号了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719978983930)

- 如果没有起始值start呢?

### 纯reversed

```
<ol reversed>
```

- 逆序
	- 到1结束

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719979063138)

- 最后一个属性是type

### type

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719979152808)

- 目前有五种计数方法
	- 阿拉伯
	- 英文小写
	- 英文大写
	- 罗马小写
	- 罗马大写

### type设置

```
<ol reversed type="a">
```

- 可以设置类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719979315503)

- 可以设置从z开始吗?

### 开始值

```
<ol reversed type="a" start="26">
```

- 确实需要构思

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719979475492)

- 如果超过26呢?

### 超过

```
<ol reversed type="a" start="29">
```

- 变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719979529086)

- z+1 = aa
- menu又是怎么变化的呢?

### menu

- 作用像是一个
	- 工具栏

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719979697898)

### 例子

```
<menu>
 <li><button onclick="copy()"><img src="copy.svg" alt="Copy"></button></li>
 <li><button onclick="cut()"><img src="cut.svg" alt="Cut"></button></li>
 <li><button onclick="paste()"><img src="paste.svg" alt="Paste"></button></li>
</menu>
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719979741577)

- 有点像ul

### 总结 🤔
- 这次研究了
	- ol 有序列表
	- menu 菜单
- ol有三个参数
	- reversed
	- start
	- type
- 还有什么list吗?🤔
- 下次再说！👋
