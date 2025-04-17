---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次我们了解了display
	- block 块级
	- inline 行内
	- inline-block 行内块级
		- 既像文字一样 在行内
		- 又可以设置高度宽度 像块级

- 这其实 都是
	- 普通文档流
	- normal flow
- 如何理解普通文档流呢？🤔

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241019-1729342191952) 

### 效果

```
<!DOCTYPE html>
<html>

<body>
  <div>第一个块级元素</div>
  <div>第二个块级元素</div>
  <span>第一个行内元素</span>
  <span>第二个行内元素</span>
</body>

</html>
```

- 两类容器
	1. 块级 div
	2. 文本级别 span

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241019-1729342684017) 

- 回忆块级元素

### 块级元素 

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

- 这些元素都是独立一行的
	- 各有些什么特点呢？

### 原始的p元素

```
<p>第1段段</p>
<p>第2段段</p>
```

- 第1段会有一个下边距

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241019-1729343673475) 

- 第2段会有上下边距

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241019-1729343697957)

- 这是谁规定的？
- 具体边距大小是多少呢？

### 源头

- 在HTML4的版本中
	- 附录D 是 元素默认的css设置
	- Appendix D. Default style sheet for HTML 4
	- https://www.w3.org/TR/CSS22/sample.html

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241019-1729343820349) 

- 一上来就是好多块级元素
	- 原来display:block;
	- 也是需要默认设置的

### p的margin

- 这些元素margin都默认 是二值的
	- 上下边距 1.12em
		- em和font-size相关
		- 字体越大 间距越大
	- 左右 0

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241019-1729343955535) 

- h1-h3 怎么不在此列呢？

### 标题元素的默认样式

- 这些老朋友的渲染格式
	- 其实都是有据可依的

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241019-1729344115769) 

|标签| 字号|间距|
|---|---|---|
|h1-h3|大于 1em|小于1em|
|h4 | 等于 1em|大于1em|
|h5、h6 | 小于 1em|大于1em|

- 后面还有老朋友

### 各种列表

- 三L
	- ul
	- ol
	- dl

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241019-1729344344665)

- 左边有margin
- 还有个list-style-type的特性
	- 这怎么用的？

### list-style-type

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241020-1729390670629) 

- 试试代码

### 代码
```
<!DOCTYPE html>
<html>

<head>
  <style>
    ul.disc {
      list-style-type: disc;
    }
    ul.circle {
      list-style-type: circle;
    }
    ul.square {
      list-style-type: square;
    }
    ul.decimal {
      list-style-type: decimal;
    }
    ul.lower-roman {
      list-style-type: lower-roman;
    }
    ul.upper-roman {
      list-style-type: upper-roman;
    }
    ul.lower-alpha {
      list-style-type: lower-alpha;
    }
    ul.upper-alpha {
      list-style-type: upper-alpha;
    }
    ul.none {
      list-style-type: none;
    }
  </style>
</head>

<body>
  <h2>disc 样式</h2>
  <ul class="disc">
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>

  <h2>circle 样式</h2>
  <ul class="circle">
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>

  <h2>square 样式</h2>
  <ul class="square">
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>

  <h2>decimal 样式</h2>
  <ul class="decimal">
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>

  <h2>lower-roman 样式</h2>
  <ul class="lower-roman">
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>

  <h2>upper-roman 样式</h2>
  <ul class="upper-roman">
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>

  <h2>lower-alpha 样式</h2>
  <ul class="lower-alpha">
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>

  <h2>upper-alpha 样式</h2>
  <ul class="upper-alpha">
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>

  <h2>none 样式</h2>
  <ul class="none">
    <li>列表项 1</li>
    <li>列表项 2</li>
    <li>列表项 3</li>
  </ul>
</body>

</html>
```

### 具体效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241020-1729391401774) 

### body的margin

- body外边距8px的来源

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241020-1729391574898)

- body、p、h1、三L这些都是
	- 块级元素
	- display:block;
- 我们再去看看
	- 行内元素
	- display:inline;

### 行内元素

- strong 的`粗`体

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241020-1729391754920) 

- i 和 em 的`斜`体

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241020-1729391796885) 

- big/small/上下标的字体大小设定

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241020-1729391837154) 

- 上下标是如何控制位置的呢？

### 位置控制

- 上下标控制
	- 垂直对齐方式
	- verticle-align

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241020-1729391924400) 

- u/ins的
	- 下划线
	- text-decoration

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241020-1729392029080)

- 还有超链接的下划线

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2928282/uid1190679-20241020-1729392048397) 

- 很多元素的默认样式都在这个附录里面设置了

### 总结 🤔

- 这次 了解了 很多元素的默认设置

| 元素 | 效果 | 
|---|---|
| body | 8px的margin|
|p和headings | font-size,margin-top,margin-bottom|
|ul 、ol 、dl | list-style-type|

- 这些设置都来自html4的
	- 附录D 是 元素默认的css设置
	- Appendix D. Default style sheet for HTML 4
	- https://www.w3.org/TR/CSS22/sample.html
- 1997年时 
	- html3.2还在浏览器大战中苦苦寻觅出路
- 1999年
	- html4已经有了非常详细的建议
- 这过程中经历了什么？🤔
- 我们下次再说！👋
