---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次我们了解了左浮

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241019-1729341794516)

- 如同在书籍排版中一样
	- 左浮或者右浮可以实现图文混排的效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241019-1729341944959) 

- 这个左浮的首字符算是行内还是块级呢？🤔

### 块级和行内

- 块儿级和行内
	- 主要指的是
	- display这个特性
	- https://developer.mozilla.org/en-US/docs/Web/CSS/display

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730711743656) 

- 块儿级横贯一行
	- 行内是文档中的一段段文字
- 各有什么元素来着？

### 元素对比

- 成组元素
	- group element

|元素名|含义|样式效果|
|---|---|---|
|p|段落(paragraph)|分段落、前后有距离|
|h1...h6|标题(headings)|有大纲级别和样式的段落|
|ul|无序列表(unordered_list)|无符号并列的段落|
|ol|有序列表(ordered_list)|有编号的段落|
|dl|定义列表(defined_list)|多对多的问答|
|div|无含义|无效果|

- 文档级别元素
	- text-level element

|元素名|含义|样式效果|
|---|---|---|
|mark|做标记|黄色背景|
|`b`old|粗体|粗体|
|strong|强调重要|粗体|
|`i`talic|斜体|斜体|
|`em`phasize|强调|斜体|
|`d`e`f`i`n`ition|定义|斜体、点下划线、移上显示缩写|
|`abbr`eviation|简写|点下划线、移上显示缩写|
|ruby/rt|拼音|上方拼音|
|small|小号字体元素|小字体|
|sup|上标|斜上方小字|
|sub|下标|斜下方小字|
|`q`uote|引用话语|加引号|
|cite|引用来源|斜体|
|span|无含义|无效果|

### 写个例子

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730714180368) 

```
<style>
div{
	border:1px solid blue;
	background: lightblue;
}
span{
	border:1px solid green;
	background: lightgreen;
}
</style>
<div>
	<span>我是span1</span>
	<span>我是span2</span>
	<span>我是span3</span>
</div>
```

- 如果让span2的文字变大

### 修改例子

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730714713524) 

```
<style>
div{
	border:1px solid blue;
	background: lightblue;
}
span{
	border:1px solid green;
	background: lightgreen;
}
#span2{
    font-size:30px;
}
</style>
<div>
	<span>我是span1</span>
	<span id="span2">我是span2</span>
	<span>我是span3</span>
</div>
```

- 字体变大
	- 但仍然是行内的
	- 文字级别元素
	- text-level

- 如果把span2的display
	- 设置为block

### 设置

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730714913189) 

```
<style>
div{
	border:1px solid blue;
	background: lightblue;
}
span{
	border:1px solid green;
	background: lightgreen;
}
#span2{
    display: block;
    font-size:30px;
}
</style>
<div>
	<span>我是span1</span>
	<span id="span2">我是span2</span>
	<span>我是span3</span>
</div>
```

- span2就不能作为文字级别元素存在
	- 而是作为块级儿元素
	- 横贯一行
- img是
	- 块级还是行内？

### 例子

- img可以设置高度宽度
	- 像块级block

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241106-1730845809164) 

- 随着文字走
	- 像行内inline

### img

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730718901155) 


```
<style>
div{
	border:1px solid blue;
	background: lightblue;
}
span{
	border:1px solid green;
	background: lightgreen;
}
img{
    height:100px;
    width:100px;
}
</style>
<div>
	<span>我<img>是span1</span>
</div>
```

- img
	- 看起来很像一个文字
		- 算是文本级别
		- text-level
	- 但是有高度宽度 
		- 又像是一个
		- 块级元素
		- block-level
- 可以设置文本的高度宽度吗？

### 设置一下

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730719231628) 

```
<style>
div{
	border:1px solid blue;
	background: lightblue;
}
span{
	border:1px solid green;
	background: lightgreen;
}
img{
    height:100px;
    width:100px;
}
span::first-letter{
	height:200px;
    width:200px;
}
</style>
<div>
	<span>我<img>是span1</span>
</div>
```

- 行内元素不能设置
	- 高度
	- 宽度
- 除非display 设置为
	- inline-block
	- 行内块级

### 行内块级

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730719556904) 

- 通过伪类设置失败

```
<style>
div{
	border:1px solid blue;
	background: lightblue;
}
span{
	border:1px solid green;
	background: lightgreen;
}
img{
    height:100px;
    width:100px;
}
span::first-letter{
	display:inline-block;
	height:200px;
    width:200px;
}
</style>
<div>
	<span>我<img>是span1</span>
</div>
```

- 试着添加一个span

### span

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730721176955) 

```
<style>
div{
	border:1px solid blue;
	background: lightblue;
}
span{
	border:1px solid green;
	background: lightgreen;
}
img{
    height:100px;
    width:100px;
}
#i{
	display:inline-block;
	height:200px;
    width:200px;
    vertical-align: top;
}
</style>
<div>
    <span id="i">我</span>
    <img>
    <span>是span1</span>
</div>
```

- 确实都是一行里面的文字
- 但是为什么对齐方向不一致呢？

### 靠上对齐

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730721326783) 

```
<style>
div{
	border:1px solid blue;
	background: lightblue;
}
span{
	border:1px solid green;
	background: lightgreen;
    vertical-align:top;
}
img{
    height:100px;
    width:100px;
}
#i{
	display:inline-block;
	height:200px;
    width:200px;
    vertical-align: top;
}
</style>
<div>
    <span id="i">我</span>
    <img>
    <span>是span1</span>
</div>
```

### 向下对齐

```
:%s/top/bottom/g
```

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730721875978) 

- 可以垂直居中吗？

### 垂直居中

```
:%s/bottom/middle/g
```

- img的vertical-align
	- 需要重新设置一下

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730721906982) 

- 上次的首字下沉
	- display是什么呢？

### 首字下沉

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003920/uid1190679-20241104-1730724549613) 

- 首字伪类
	- 使用了float
	- block
	- 块级 

```
<!DOCTYPE html>
<html>

<head>
  <style>
    p::first-letter {
      font-size: 2em;
      float: left;
      line-height: 1;
      width:100px;
      height:100px
    }
    body{
    	width: 400px;
    }
  </style>
</head>

<body>
  <p>这是一段用来展示首字下沉效果的文字。这是一段用来展示首字下沉效果的文字。这是一段用来展示首字下沉效果的文字。这是一段用来展示首字下沉效果的文字。这是一段用来展示首字下沉效果的文字。这是一段用来展示首字下沉效果的文字。这是一段用来展示首字下沉效果的文字。这是一段用来展示首字下沉效果的文字。这是一段用来展示首字下沉效果的文字。这是一段用来展示首字下沉效果的文字。</p>
</body>

</html>
```


### 总结 🤔

- 这次我们了解了display
	- block 块级
	- inline 行内
	- inline-block 行内块级
		- 既像文字一样 在行内
		- 又可以设置高度宽度 像块级

- 这其实 都是
	- 普通文档流
	- normal flow
- 如何理解普通文档流呢？🤔
- 我们下次再说！👋
