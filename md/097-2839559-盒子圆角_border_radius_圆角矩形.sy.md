---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次研究了border的细节
	- border-width
	- border-style
	- border-color
	- 都可以二值、三值、四值设置
		- 二值
			- 上下 
			- 左右、
		
		- 三值
			- 上
			- 左右
			- 下
		
		- 四值
			- 上
			- 右
			- 下
			- 左

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2860286/uid1190679-20241008-1728386545644) 

- 这种圆角怎么设置的呢？🤔

### 回忆

- border除了
	- 宽度
	- 类型
	- 粗细

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726318938533)

- 还可以设置
	- 圆角

### 边框圆角

- 边框圆角
	- border-radius
	- https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240921-1726892358533)

- 也有
	- 两值、三值、四值

### 回忆一下

- 盒子边的缩写
	- https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240921-1726893255351)

- 四角应该如何缩写呢？

### 四角

- 盒子角的缩写
	- 目的也是节省占用空间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240921-1726893382519)

- 以西北为起点和终点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726968519198)

- 看看具体例子

### 具体例子

- 二值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726969149149)

- 四值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726969160582)

- /斜线如何理解？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726969116051)

### 构造 

```
<style>
    div{
        width:100px;
        height:100px;
        border:1px solid black;
        border-radius: 10% / 50%;
    }
</style>
<div></div>
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726969197481)

- 四个角角
	- 每个都有自己的两个方向
		- 水平方向
		- 垂直方向

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726972309484)

- 具体怎么设置呢？

### /斜线

- 问问ai

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726969244361)

### 测试

```
<style>
    div{
        width:100px;
        height:100px;
        border-radius: 10px 20px 30px 40px/50px 60px 70px 80px; 
        border:1px solid black;
    }
</style>
<div></div>
```

- 实际效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726969477407)

- 这样的圆角矩形
	- 现实中有什么应用吗？

### 无处不在

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726972932816)

- 甚至有的时候
	- 你都意识不到这是圆角

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726969593175)

- 有四个角度不同的圆角吗？

### 四个角不同

- 百度就是这样拼接起来的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726972135788)

- 右侧和左侧圆角度不同

```
border-radius: 0 10px 10px 0;
```

### 总结 🤔

- 这次我们研究了盒子的四个角角
	- 1234

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726972833809)

- 每个角也有
	- 水平方向
	- 垂直方向

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726972880958)

- border这个词怎么来的呢？🤔
- 我们下次再说！👋