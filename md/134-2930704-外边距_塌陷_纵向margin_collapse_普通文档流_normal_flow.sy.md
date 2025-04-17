---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次了解到微软和网景大战的终局
	- 微软 最终胜出
- 1999年
	- 胜利者ie的标准
	- 形成了html4的标准

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2892589/uid1190679-20241020-1729431101340) 

- w3c 对于页面的要求 越来越严格
	- 并且把未来压在xhtml这种过于严格的标准上
- 除了 
	- 浮动布局 float layout之外
	- 默认的布局方式 叫什么名字呢？🤔
	- 有什么特点呢？🤔

### 默认模式

- 常规流布局
	- Normal Flow
	- https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241023-1729691025595) 

### 块级元素

- 默认情况下
	- 块级元素会填充其父元素所有的行向空间
	- 并沿着其块向伸长以容纳其内容
	- 行级元素的大小就是其本身的大小

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241023-1729691786090)

- 这如何理解？

### 观察例子

```html
<h1>基础文档流</h1>

<p>我是一个基本的块级元素。我的相邻块级元素在我的下方另起一行。</p>

<p>
  默认情况下，我们会占据父元素 100%
  的宽度，并且我们的高度与我们的子元素内容一样高。我们的总宽度和高度是我们的内容
  + 内边距 + 边框宽度/高度。
</p>
```

- 我们首先来看html元素

### html元素

- html没有指定宽度

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729731823228) 

- html
	- 横向填充行向空间 450px
	- 纵向延伸以容纳内部元素 207.433px

### body元素

- body有一圈8px的margin
	- 这是 html4标准
	- 对 body的默认设置

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729732017417) 

- body元素 没有指定宽度
	- 留够margin之后
		- 横向填充行向空间 434px
		- 纵向延伸以容纳内部元素 183.433px

### h1元素

- h1在body里面

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729732017417) 

- 本应该有个margin-top

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729735412560)

- 但是margin-top消失了？

### 问问ai

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729737183433) 

- 说白了就是
	- body 的 margin-top 8px
	- h1  的 margin-top 0.67em

- h1 遇到了body 
	- margin-top 塌陷为0 
	- margin collapse

- 如果
	- 强制设置body的margin为0
	- 会如何呢？

### 强制设置

```
<style>
body{
    margin: 0;
}
</style>
```

- h1的margin-top
	- 依旧塌陷为0

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729737634925) 

- 如果 
	- 保持body默认8px的margin
	- 又想让h1上面隔离一段距离怎么办呢？

### padding
```
<style>
body{
    padding-top: 20px;
}
</style>
```

- 可以实现

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729737761910)

- 如果
	- 想要body的padding-top恢复为0
	- 修改h1的padding-top呢？

### 修改h1

```
<style>
body{
    padding-top: 20px;
}
</style>
```

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729737955395) 

- 只有 
	- 外边距 会 塌陷
	- margin collaspe
- 内边距 padding
	- 不会消失
- 如果父元素不是body呢？
	- 子元素的margin-top也会消失吗？

### 明确例子

```
<style>
#parent{
    width:300px;
    height:300px;
    background-color:lightblue;
}
#child{
    width:100px;
    height:100px;
    background-color:lightgreen;
    margin-top:10px;
}
</style>
<div id="parent">
    <div id="child">123</div>
</div>
```

- 非body元素的div 
	- margin为0
	- 第一个子元素
	- margin-top
	- 也会消失

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729739177627)

- 如何理解这个
	- 外边距 塌陷
	- margin collapse
- 如果父div的margin-top不为0呢？

### 折叠效果

- 父div的margin-top为20px
- 子div的margin-top为10px

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729742013190)

- 父div的margin-top里面
	- 容纳了子div的margin-top
	- margin 还是 collopse 了
	- 折叠起来了
- 如果 
	- 子div margin-top 高于
	- 父div 的 margin-top呢？

### 折叠到子div的margin-top

- 父div的margin-top为10px
- 子div的margin-top为20px

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729742198531) 

- 子div的margin-top
	- 容纳了父div的margin-top
- 总之
	- margin-top留取
	- 最大的margin-top

### 图形显示

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729741345438) 

- 这个margin collaspe
	- 外边距塌陷
	- 究竟是如何定义的？

### 再问ai

- 明确定义

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729739755842)

- 我们先看第二种情况
	- 条件还很多
- 条件
	1. 父元素和第一个子元素或最后一个子元素
	2. 父元素没有border
	3. 父元素没有padding
	4. 父元素没有overflow
- 结果
	- margin会collapse
- 如果父元素有个border会如何呢？

### 父元素的border

- 修改父元素的margin后
	- 子元素的margin就不会塌陷了

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729739948347)

- 再看看margin collapse的第一种情况

### 再看定义

- 如果是兄弟
	- 上下之间的margin 会 collpase

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729739755842)

- 观察一下

### 兄弟关系

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729740114850) 

- h1的margin-bottom是21.44px
- h1下面的兄弟p
	- margin-top 是 16px

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729740167973)

- 16px 小于 21.44px
	- 这总体上的margin 
	- 就塌陷成了21.44px
- 下面的p也会折叠吗？

### 塌陷

- 继续观察

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729740524998)

- 坍塌都发生在
	- 垂直外边距
	- vertical margin
	- 吗？

### 兄弟上下边距总结

- 哥哥的下边距
- 和弟弟的上边距
- 会 折叠 collapse 成最大的

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729741393772) 

- 只有垂直方向外边距会折叠塌陷吗？

### 三问ai

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729740634436) 

- 火狐有没有什么解释吗？

### 火狐解释

- 火狐关于margin collapse的描述
	- 火狐翻译为 外边距折叠
	- 我们也就按照这种说法了
	- https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729740859505)

- 比ai还要非常详细
	- 从实现的角度说清楚了

### 总结 🤔

- 总共`三`种布局方式
	1. `浮动布局` 
	2. `绝对定位布局` 
	3. `普通文档流布局` 
- 边距折叠
	- 只发生在
	- `普通文档流布局` 
	- Normal Flow 
	- 垂直方向
		1. 父子之间
		2. 兄弟之间

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2930704/uid1190679-20241024-1729741493778) 

- 浮动布局
	- float layout
	- 是什么意思来着？🤔
- 我们下次再说！👋
