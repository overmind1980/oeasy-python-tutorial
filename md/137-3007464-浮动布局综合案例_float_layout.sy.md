---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次我们了解了浮动布局的原理

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217787027) 

- float就是浮动
	- 往上浮动
	- 浮到能浮的最上面的位置
- 这种浮动有什么应用吗？🤔

### 思路

- 大概结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241104-1730728751987)

```
<body>
<div id="wrapper">
	<div id="header"></div>
	<div id="middle">
		<div id="sidebar"></div>
		<div id="content"></div>
	</div>
	<div id="footer"></div>
</div>
</body>
```

- 需要精确尺寸

### 选择尺寸

- 800*600下
	- 网页宽度保持在778以内
	- 不会出现水平滚动条
	- 高度则视版面和内容决定
	- 后来分辨率不断增高

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3007464/uid1190679-20241105-1730808128011) 

- 1024*768下
	- 网页宽度保持在1002以内
	- 高度是612-615之间
	- 不会出现水平滚动条和垂直滚动条

### 切分细节

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3007464/uid1190679-20241105-1730808867595) 

### 实现效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3007464/uid1190679-20241105-1730810790664) 


```
<style>
body{
    margin:0;
}
div#wrapper{
    width:1000px;
    margin:0 auto
}
div#header{
    height:120px;
    background:lightblue;
}
div#middle{
    height:520px;
}
div#sidebar{
    height:520px;
    width:240px;
    float:left;
    background:lightgreen;
}
div#content{
    height:520px;
    width:760px;
    float:left;
    background:cyan;
}
div#footer{
    height:100px;
    background:lightblue;
}
</style>
```

- 在上面写字

### 继续写字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241105-1730811111422)

```
<body>
<div id="wrapper">
	<div id="header"> 我是header </div>
	<div id="middle">
		<div id="sidebar"> 我是 sidebar</div>
		<div id="content"> 我是内容 </div>
	</div>
	<div id="footer">我是 footer</div>
</div>
</body>
```

- 这种类型的网站逐渐增加

### 总结 🤔

- 这次我们了解了
	- 浮动布局下的网页布局
	- float layout
	- 逐渐取代了
		- 表格布局
		- table layout

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3007464/uid1190679-20241105-1730811250474) 

- 当时网页设计的审美是如何的呢？🤔
- 我们下次再说！👋
