---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次我们了解了
	- 清除浮动
	- clear
- 可以清除
	- 左浮
	- 右浮
	- 两边都清空


![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003919/uid1190679-20241104-1730727953941) 

- 我们还没有真正用到多个浮动元素
- 多个元素浮动起来什么样子？？🤔

### 具体代码

```
<!DOCTYPE html>
<html>

<head>
  <style>
   .float-left {
      float: left;
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }

   .float-right {
      float: right;
      width: 150px;
      height: 150px;
      background-color: pink;
    }
  </style>
</head>

<body>
  <div class="float-left"></div>
  <div class="float-right"></div>
  <p>这是一段文本，会环绕着浮动元素显示。</p>
</body>

</html>
```

### 浏览

- 可以看到两个div都浮到最上面了

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729215886235) 

- 缩小浏览器宽度到最小
	- 最窄也要434px

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729215718988)

- 修改一下代码
	1. 左边宽度500px
	2. 右边宽度450px

### 修改代码

- 默认宽度
	- 左右div浮到水面

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729216357211) 

- 缩小浏览器宽度

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729216439462) 

- 左右两个div还是浮在水面上
	- 逐渐将文字往水下压

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729216502071)

- 直到将文字完全压缩到左浮块下面

### 继续收窄

- 收窄之后
	- 总宽度缩小之后
	- 水面 不能再让 两个div 并排了
	- 左边蓝色
		- 先出现在html中
		- 浮在上面
		- 压住右边粉色
	- 粉色方块
		- 依然上浮到所能到达的最高位置
		- 从右边上浮
	- 文字漂到了水面上

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729216541482) 

- 继续收窄

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729216695210) 

- 如果文字足够多
	- 会流到粉色左侧吗？

### 添加文字

```
<p>这是一段文本，会环绕着浮动元素显示。这是一段文本，会环绕着浮动元素显示。这是一段文本，会环绕着浮动元素显示。</p>
```

- 文字会在浮动的div之间网上浮动
	- 见缝插针

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729216812537) 

- 继续收窄

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729216925158)

- 粉色的宽度撑住了网页的宽度
	- 不能再收窄了
- 如果两个都是左浮
	- 会如何呢？

### 都是左浮

- 都从左边浮到顶面

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217024674) 

- 收窄之后
	- 文字先被挤到水下

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217071772) 

- 再收窄
	- 浏览器宽度无法让两个方块同时在水面
	- 蓝色方块
		- 先出现在html中
		- 浮在上面
		- 压住粉色
	- 粉色方块
		- 依然上浮到所能到达的最高位置
		- 从左边上浮
	- 文字
		- 浮到最上

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217237006) 

- 再收窄
	- 文字被压缩
	- 向下挤压

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217277901) 

- 最终
	- 粉色撑住了浏览器宽度
	- 文字被挤到两边都有

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217334723)

- 如果都是右浮 会如何呢？

### 右浮

- 两个div上浮到顶
	- 文字从左边浮上去
	- 蓝色先出现 更靠左

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217421857) 

- 收窄宽度
	- 文字都被挤下去

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217492003)

- 再收窄
	- 两个div不能都在顶层一行了
	- 先出现的蓝色把粉色挤下去了

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217572718) 

- 继续收窄
	- 蓝色还在最上
	- 粉色还在底下
	- 文字被压缩

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217607637) 

- 收窄到极限
	- 粉色撑住浏览器宽度
	- 文字被挤到两块
- 清除浮动会如何呢？

### 清除右浮

- 第2个div
	- 清除了右浮
	- clear:right

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241104-1730728254408) 

- 没有用
	- 因为第1个div
	- 用的是左浮

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241104-1730728305411) 

### 清除左浮

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241104-1730728367308)

- 左浮清除
	- 下面的div浮不上去了
	- 只能在上面div的下面右浮

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241104-1730728358040) 



### 总结 🤔

- 这次我们了解了浮动布局的原理

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241018-1729217787027) 

- float就是浮动
	- 往上浮动
	- 浮到能浮的最上面的位置
- 这种浮动有什么应用吗？🤔
- 我们下次再说！👋
