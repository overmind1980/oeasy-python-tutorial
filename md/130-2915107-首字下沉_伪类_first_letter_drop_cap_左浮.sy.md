---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次将表格布局的网页
	- 转化为div浮动布局的网页
	- 其中用到的最重要的东西是float
	- 浮动布局

```
float:left;
```

- 这个float特性应该怎么理解呢？🤔


### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729215283530) 

- 浮动布局float
	- 指的是上浮
	- 元素要往上走

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729215346154) 

- 我们看看具体代码

### 演示

```
<style>
div{
	float: left;
	width:60px;
	height:60px;
	border:1px solid black;
	background-color: #9D6C3C;
	color:white;
}
</style>
<div>我左浮了</div>
<p>水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水</p>
```

- 左浮的div
	- 像一块木头
	- 始终从左边
	- 漂浮在上面

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241019-1729341187195)

- 改变 浏览器宽度之后
	- 其他块级元素中的文本
	- 像水一样
	- 包围在他的周围

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241019-1729341262051) 

- 这很适合首字下沉

### 首字下沉

- 传统排版技术
	- drop cap
		- cap 指的是 
			- 首字母
			- capital letter
		- drop 指的是
			- 下沉

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241018-1729221812298)

- 首字下沉

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241018-1729221914439) 

- 先复制下来看看效果

### 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241104-1730708487195)

```
<!DOCTYPE html>
<html>

<head>
  <style>
    p::first-letter {
      font-size: 2em;
      float: left;
      line-height: 1;
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

- 具体是怎么实现的呢？

### 实现方式

- 通过p::first_letter
	- 选中了p元素的第一个字符
	- 这种选择方式叫做伪类
	- Pseudo-classes

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241018-1729222420811) 

- 我们以前也接触过伪类
	- 是用来选择什么来着呢？

### 伪类

- 伪类(pseudo class)
	- 选择的是超链元素的状态
	- https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726320433536)

|伪类名称|对应情况|
|---|---|
|hover|鼠标移上|
|visited|已访问|
|checked|已选取|

- 这次选择之后
	- 是如何设置的呢？

### 具体代码

```
p::first-letter {
  font-size: 2em;
  float: left;
  line-height: 1;
}
```

- 字体大小 2em
- 这em是什么单位呢？

### em

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241018-1729222779281)

- 2em
	- 原来字体大小多少？

### 修正

```
p{
	font-size: 20px;
}
```

- 现在首字下沉2字符
	- 2 em 
	- = 2 x 20px
	- = 40px

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241104-1730708950243) 

- 为什么会有
	- `首字下沉`这个效果呢？

### 源流

- 因为需要知道 
	- `新段落`的开始位置
	- 首字下沉  可以引导视线
	- 效果明显

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241019-1729297880435)

- 古腾堡 刚开始印圣经的时候
	- 就开始了

### 总结 🤔

- 这次我们了解了左浮

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241019-1729341794516)

- 如同在书籍排版中一样
	- 左浮或者右浮可以实现图文混排的效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915107/uid1190679-20241019-1729341944959) 

- 这个左浮的首字符算是行内还是块级呢？🤔
- 我们下次再说！👋
