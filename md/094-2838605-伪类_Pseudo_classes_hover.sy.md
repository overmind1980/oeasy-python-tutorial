---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次研究了全局的属性
	- onmouseover
	- onmouseout
	- ...
- 可以将对象的相关事件
	- 绑定到函数上
	- 进行字体大小、颜色的修改
- 有没有更简单的方式
	- 让span中的文字
	- 在鼠标移上面之后
	- 是另外一种效果？🤔

### 伪类

- 这个看起来很简单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726313211508)


```
<!DOCTYPE html>
<html>

<head>
  <style>
    #mySpan {
      font-size: 10px;
    }
    #mySpan:hover {
      font-size: 20px;
      color: red;
    }
  </style>
</head>
<body>
  <span id="mySpan">鼠标移上来试试</span>
</body>
</html>
```

- 什么叫做伪类呢？
- 到哪里查？

### 打开检查器

- 打开查看器
	- 找到span元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726319232349)

- 可以看到id选择器#mySpan
- 可是 看不到这#mySpan:hover

### 查看伪类

- 点击hover
	- 选择hover
	- 可以查看到hover相应的效果设置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726319405692)

- 什么是hover呢？

### hover

- 意思是悬停

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726320155394)

- 什么是伪类呢？

### 查询

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726318867324)

- https://developer.mozilla.org/en-US/docs/Web/CSS/:hover

### 伪类

- 伪类(pseudo class)
	- 选择的是元素的某些状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726320433536)

- 这些有什么固定规则吗？

### 固定规则

- 规则
	- 已经访问过的 紫红色
	- 没有访问过的 蓝色

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2838605/uid1190679-20241008-1728386785928) 

- 这是ie当时的默认设置
	- 根据颜色可以得到超链接的位置

### 案例展示

- 有个专门介绍伪类的链接
	- https://developer.mozilla.org/en-US/docs/Web/CSS/:hover

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726318938533)

- 这里面好像定义了
	- 高度
	- 宽度
	- 边界
	- 圆角
- 挺有意思

### 总结 🤔

- 这次了解到了
	- 伪类(pseudo class)
	- 就是定义某个或者某些元素
		- 在特殊状态下的样式
- 目前已知的伪类有

|伪类名称|对应情况|
|---|---|
|hover|鼠标移上|
|visited|已访问|
|checked|已选取|

- 最终看到这个按钮很有意思
	- 具体怎么定义呢？？🤔
- 下次再说！👋