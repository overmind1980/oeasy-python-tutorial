---
show: step
version: 1.0
enable_checker: true
---

# h1 - h6 标题元素

## 回忆

- 上次研究了html的由来
	- html是由两个人创造出来的
		- 一个在欧洲搞原子弹的
		- 一个在美国搞电气工程的
	- 都不挨着
- 但是借助互联网 讨论出了
	- http
	- html

- 文档260页提到的例子

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2745994/uid1190679-20241117-1731831272490) 

- 发现了新标签
	- UL
	- LI
- 他们都是什么意思？

### 写入文档

```
<UL>
	<LI> list element
	<LI> another list element ...
</UL>
```

- 看起来
	1. 都是大写
	2. 没有结束标签

### 运行结果

- 结果
	- 大写都变成了小写
	- 自动增加了结束标签
	- 文字前面有了小黑点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719971339605)

- 为什么要用无序列表呢?

### 简洁

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719972023176)

- 文字描述太复杂
	- 总结为记忆点

```
<html>
	<head>
		<title>
				北海公园
		</title>
	</head>
	<body>
		  <h1>欢迎来到北海公园</h1>
		  主要景点
		  <ul>
		  		<li>琼岛春荫</li>
		  		<li>九龙壁</li>
		  		<li>五龙亭</li>
			</ul>
	</body>
</html>
```

- ul 具体什么意思呢?

### ul

- ul 隶属于 
	- grouping content
	- 成族元素
	- https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719972141405)

- 用来描述顺序不重要的列表场景

### 举个例子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719972213798)

- 身体由三部分构成

```
<html>
	<head>
		<title>
				身体的结构
		</title>
	</head>
	<body>
		  下面是身体的组成
		  <ul>
		  		<li>脑袋</li>
		  		<li>上肢</li>
		  		<li>下肢</li>
			</ul>
	</body>
</html>

```
- ul可以嵌套吗?

### 嵌套元素

- 上肢 由 三部分构成
	- 躯干
	- 左臂
	- 右臂

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719972296803)

- 可以列出完整的身体结构吗?

### 完整的身体

```
<!DOCTYPE html>
<html>
	<head>
		<title>
				身体的结构
		</title>
	</head>
	<body>
		  下面是身体的组成
		  <ul>
		  		<li>脑袋 </li>
		  		<li>上肢 </li>
		  		<ul> 
		  			<li>躯干 </li>
		  			<li>左臂 </li>
		  			<ul>
		  				<li>左大臂 </li>
		  				<li>左小臂 </li>
		  				<li>左手 </li>
		  			</ul>
		  			<li>右臂 </li>
		  		</ul>
		  		<li>下肢 </li>
		  		<ul>
		  			<li>左腿 </li>
		  			<li>右腿 </li>
		  		</ul>
			</ul>
	</body>
</html>
```

- li什么意思呢?

### li的含义

- li
	- list item
	- 列表项目
	- https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1719972426742)

- li不但可以用在ul中
	- 还可以用在ol和memu中
- 什么是ol?
- 什么是menu?

### 总结 🤔
- 这次我们讲了ul
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
- 下次再说！👋
