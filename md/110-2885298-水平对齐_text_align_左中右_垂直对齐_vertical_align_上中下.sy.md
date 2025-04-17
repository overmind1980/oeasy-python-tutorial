---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次了解了margin词源

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885299/uid1190679-20241003-1727918610285) 

- 有了margin可以

```
margin:0 auto;
```

- 实现容器 居中对齐

```
text-align:center
```

- 文本水平居中对齐 
- 两者 有`什么`区别 呢？

### 问ai

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241003-1727921677696)

### 试代码

```<!DOCTYPE html>
<html>

<head>
  <style>
   .left-aligned {
      text-align: left;
    }

   .right-aligned {
      text-align: right;
    }

   .center-aligned {
      text-align: center;
    }

   .justified {
      text-align: justify;
    }
  </style>
</head>

<body>
  <p class="left-aligned">这是左对齐的文本。</p>
  <p class="right-aligned">这是右对齐的文本。</p>
  <p class="center-aligned">这是居中对齐的文本。</p>
  <p class="justified">这是两端对齐的文本。这是两端对齐的文本。这是两端对齐的文本。这是两端对齐的文本。</p>
</body>

</html>
```

### 效果

- 在p元素792的宽度中
	- 文本 左对齐 left

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885298/uid1190679-20241003-1727921888073) 

- 右对齐(right)、居中对齐(center)
	- 都好理解
- 如何理解 两边对齐？

### 英文例子

- 中文 
	- 文字等宽方块字
	- 标点 全角符号
	- 看不出 两端对齐的效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885298/uid1190679-20241003-1727922141412) 

### 代码

```
<!DOCTYPE html>
<html>

<head>
  <style>
   .justified-text {
      text-align: justify;
      border: 1px solid #000;
      padding: 20px;
      width: 300px;
    }

   .centered-text {
      text-align: center;
      border: 1px solid #000;
      padding: 20px;
      width: 300px;
    }
  </style>
</head>

<body>
  <p class="justified-text">This is an example of justified text. It makes the text align evenly on both sides. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p class="centered-text">This is centered text. It places the text in the middle of the container. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</body>

</html>
```

- 英文字符宽度不等
	- 如何两端对齐？

### 效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885298/uid1190679-20241003-1727922211783) 

- 第一段中 空格宽度增加
	- 保证两端 左右边界是对齐的

- 除了 水平方向的 左中右
	- 垂直方向的位置可以控制吗？

### 问ai

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241003-1727922449745)

### 实验代码

```
<!DOCTYPE html>
<html>

<head>
  <style>
    .container {
      font-size: 24px;
      line-height: 48px;
    }

    .vertical-top {
      vertical-align: top;
    }

    .vertical-middle {
      vertical-align: middle;
    }

    .vertical-bottom {
      vertical-align: bottom;
    }

    .vertical-text-top {
      vertical-align: text-top;
    }

    .vertical-text-bottom {
      vertical-align: text-bottom;
    }
  </style>
</head>

<body>
  <div class="container">
    <span class="vertical-top">Top aligned</span>
    <span class="vertical-middle">Middle aligned</span>
    <span class="vertical-bottom">Bottom aligned</span>
    <span class="vertical-text-top">Text top aligned</span>
    <span class="vertical-text-bottom">Text bottom aligned</span>
  </div>
</body>

</html>
```

### 效果

- 在这个div中
	- 字体大小24px
	- 行高48px

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885298/uid1190679-20241003-1727922562505) 

- 文本 垂直对齐分别是 
	- 上 top
	- 中 middle
	- 下 bottom
	- 各种基线 (base line)位置 

- 如果想做一个 3 x 3 的矩阵
	- 九种 各自不同的对齐方式

### 描述需求

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885298/uid1190679-20241003-1727922906111)

- 描述的并不清晰
	- 出现了 baseline、sub
- 这句话 该如何描述

### 明确需求

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885298/uid1190679-20241003-1727922974234)

- 这次代码貌似符合要求

### 代码

```
<!DOCTYPE html>
<html>

<head>
  <style>
    table {
      border-collapse: collapse;
      width: 300px;
    }

    th,
    td {
      border: 1px solid black;
      padding: 10px;
    }

  .top-row {
      vertical-align: top;
    }

  .middle-row {
      vertical-align: middle;
    }

  .bottom-row {
      vertical-align: bottom;
    }

  .left-col {
      text-align: left;
    }

  .center-col {
      text-align: center;
    }

  .right-col {
      text-align: right;
    }
  </style>
</head>

<body>
  <table>
    <tr>
      <th class="top-row left-col">Top Left</th>
      <th class="top-row center-col">Top Center</th>
      <th class="top-row right-col">Top Right</th>
    </tr>
    <tr>
      <td class="middle-row left-col">Middle Left</td>
      <td class="middle-row center-col">Middle Center</td>
      <td class="middle-row right-col">Middle Right</td>
    </tr>
    <tr>
      <td class="bottom-row left-col">Bottom Left</td>
      <td class="bottom-row center-col">Bottom Center</td>
      <td class="bottom-row right-col">Bottom Right</td>
    </tr>
  </table>
</body>

</html>
```

- 每个格子 有两个类
	- 水平对齐 
	- 垂直对齐

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241003-1727924625172)

- 垂直方向
	- 效果不明显

### 修改代码

```
table {
  border-collapse: collapse;
  width: 600px;
}

th,
td {
  border: 1px solid black;
  padding: 10px;
  width:200px;
  height:200px;
} 
```

- 效果明显了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241003-1727924562448)

- 外部表格布局 
	- 很方便
- 里面文字 
	- 对齐方式 也很好用

|特性|取值|
|---|---|
|text-align|左中右|
|vertical-align|上中下|

### 总结 🤔

- 这次了解了对齐方式
	- 容器中 有两种对齐方式

|特性|取值|
|---|---|
|text-align|左中右|
|vertical-align|上中下|

- 这些特性 
	- 为网页设计师提供了 弹药

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241003-1727958240599)

- 设计师这个行业 
	- 是如何互联网化的呢？🤔
- 我们下次再说！👋

