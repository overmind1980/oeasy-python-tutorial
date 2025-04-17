---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

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

### 回忆

- h1是标准流
	- 横贯一行
- Float左浮的方块
	- 被下面的文字
	- 像浮在水面上

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241104-1730707751804) 

```
<style>
.box {
    float: left;
    margin: 20px;
    width: 300px;
    height: 300px;
    background-color: lightblue;
    text-align: center;
    font-size:30px;
}
p {
    background: lightgreen;
    padding:40px;
}
</style>
<h1>Float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

### 清除左浮

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003919/uid1190679-20241104-1730726701928) 

- 设置第二段样式为clear

```
p.class{
	clear:left;
}
```

- p.clear 
	- 选择class为clear的p元素
- clear:left
	- 清除左浮
- 如果我就想要蓝色和第一段是一体的呢？

### 封装wrapper

```
<style>
.box {
    float: left;
    margin: 20px;
    width: 300px;
    height: 300px;
    background-color: lightblue;
    text-align: center;
    font-size:30px;
}
p {
    background: lightgreen;
    padding:40px;
}
div#wrapper{
    background: lightgreen;
}
div#wrapper::after {
  content: "";
  clear: both;
  display: block;
} 
</style>
<h1>Float example</h1>
<div id="wrapper">
    <div class="box">Float</div>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
    dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
    ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
    laoreet sit amet.
    </p>
</div>

<p class="clear">
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
```

### 效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003919/uid1190679-20241104-1730727403261) 

- 把第一段和蓝色封装到wrapper中

```
div#wrapper{
    background: lightgreen;
}
div#wrapper::after {
  content: "";
  clear: both;
  display: block;
} 
```

- div#wrapper
	- 选择id为wrapper的div
	- 设置背景

### after伪类
- div#wrapper::after 
	- 选择id为wrapper的div后面的内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241104-1730727707441)

- 然后 设置 
	- 清除浮动
	- clear:both
	- 左右都清空
- 还可以右浮吗？

### 设置右浮

```
float:right;
```

- 设置右浮

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003919/uid1190679-20241104-1730727797515) 

### 总结 🤔

- 这次我们了解了
	- 清除浮动
	- clear
- 可以清除
	- 左浮
	- 右浮
	- 两边都清空


![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3003919/uid1190679-20241104-1730727953941) 

- 我们还没有真正用到多个浮动元素
- 多个元素浮动起来什么样子？？🤔
- 我们下次再说！👋
