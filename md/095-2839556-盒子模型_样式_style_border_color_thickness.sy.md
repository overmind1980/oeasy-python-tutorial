---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次了解到了
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

### 尝试

```
<style>
div{
	width: 200px;
	height: 150px;
}
</style>
<div>i am a box</div>
```

- 打开查看器
	- 尝试观察
- 选择div元素
	- 在盒模型里面选中
	- 200 x 150
	- 上方div元素被显形

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726406650111)

- 可以直接在页面显示出盒子大小吗？

### 设置背景

- 将背景(background)设置为
	- 浅蓝色
	- lightblue

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726406906550)

- 确实可以直接在页面上显示
	- 盒子模型的大小了

```
border:2px solid firebrick;
```

- 这句什么意思？

### border

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726407008866)

- border 指的是 边框
	- 是style属性中的
	- 特性property
	- 具体值是

|子特性|数值|
|---|---|
|边框|2px|
|样式|实线|
|颜色|砖红|

- 可以在那里查到border的含义吗？

### 搜索

- 在mdn中搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726407353757)

- 找到链接
	- https://developer.mozilla.org/en-US/docs/Web/CSS/border-style

### 子特性

- border-style
	- 属于border-*
	- 也就是border特性下的子特性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726407573352)

- border-style的值

|特性值|效果|
|solid|实线|
|dotted|点线|
|none|无线|
|inset|凹陷|

- 可以查到所有的边框样式吗？

### 所有样式

- https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#syntax

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726407725012)

- 具体什么效果

### 具体效果

- 往下翻有代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726407807484)

- 关于border-style
	- 还有什么吗？

### 子特性

- border-style
	- 属于border-*
	- 也就是border特性下的子特性
- border-style也有子特性
	- border-style-*
- 可以分别设置四条边框

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726409071580)

- 颜色怎么设置的？

### border-color

- 设置 边框颜色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726409175967)

- 边框颜色也有四个子特性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726409192862)

- 边框的粗细呢？

### border-width

- 设置边框宽度
	- border-width

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726409298510)

- 和边框颜色(border-color)
	- 边框样式(border-style)一样
- 边框宽度(border-color)也有自己的
	- 组成子特性
	- constituent

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726409368777)

- 例子中的代码如何理解？

```
border:2px solid firebrick;
```

### 观察border

- border特性 包括
	- 宽度 border-width
	- 样式 border-style
	- 颜色 border-color

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726409466316)

- border有三个子特性构成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726409523527)

### 总结 🤔

- 这次了解了div元素可以设置
	- 高度宽度
	- 边框

- border元素 包括
	- 宽度 border-width
	- 样式 border-style
	- 颜色 border-color
	- 每个子特性都有自己的组成子特性
	- constituent properties

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240921-1726885651185)

- 除了单个属性的设置
- 好像也支持一次设置两个属性？？🤔
- 我们下次再说！👋