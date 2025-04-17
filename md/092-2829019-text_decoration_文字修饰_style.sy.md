---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次介绍了一个网站
	- 一个完全基于超链接标签的网站
	- yahoo
- 从汽车上临时工位的两个人
	- 到www目录的大比拼

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726177629796)

- 超链接
	- 除了点击跳转
	- 一般都是蓝色
	- 而且拥有下划线
- 如何用js和style实现这个效果？🤔

### 回忆

```
<!DOCTYPE html>
<html>

<body>

  <span id="mySpan" onclick="openWebPage()">点击这里打开网页</span>

  <script>
    function openWebPage() {
      window.open('https://www.example.com', '_blank');
    }
  </script>

</body>
</html>
```

- 先把代码交给ai

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726196926690)

- 现在要把文字变成蓝色
	- 该如何对ai说

### 明确的说法

- ai正确的理解了
	- 虽然提的问题问题
	- 字数一点不比代码少
	- 但是这毕竟是自己写出来的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726197246676)

- 我们所说的训练ai
	- 其实也指我们能够正确的向ai提出要求
	- 也是训练自己
- 在此基础上
	- 给文字添加下划线效果

### 正确提问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726197553229)

- 这时候我们发现了一个新特性
	- new property
	- text-decoration

- 这个特性是什么意思
	- 都有什么样的取值呢？

### 再提问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726197709608)

- 以前好像有个文本级别(text-level)的标签
	- 删除标签 del
	- 用的就是中划线
- 然后要求他做一个例子
	- 我们去试试

### 做例子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726198097538)

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726198078789)

- 可以既有上划线
	- 又有下划线吗？

### 继续问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726198192459)

- 这个property在哪里定义呢？

### MDN

- https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726202108506)

- 可以设置类型、形式、颜色、粗细

### 粗细的支持度

- 目前safari对于粗细还不支持 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726202250500)

- 如果想要用js控制下划线闪烁怎么办？

### 继续提问

```
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
   .underline-flash {
      text-decoration: none;
    }
  </style>
</head>

<body>
  <span id="mySpan">这是一个文本。</span>

  <script>
    let isUnderlined = false;
    let intervalId;

    function toggleUnderline() {
      const span = document.getElementById('mySpan');
      isUnderlined =!isUnderlined;
      if (isUnderlined) {
        span.style.textDecoration = 'underline';
      } else {
        span.style.textDecoration = 'none';
      }
    }

    function startUnderlineFlash() {
      intervalId = setInterval(toggleUnderline, 500);
    }

    const span = document.getElementById('mySpan');
    startUnderlineFlash();
  </script>
</body>

</html>
```

- 注意

|分类|js|style|
|---|---|---|
|名称|textDecoration|text-decoration|
|命名法|小驼峰|中划线|

### 总结 🤔

- 这次研究了
	- 特性text-decoration
	- 可以设置
		- 上划线
		- 中划线
		- 下划线
		- 无划线
- 超链接
	- text-decoration就是
		- underline
		- 下划线
	- 而且 光标在超链接之上
		- 字体会变化
- 具体怎么变呢？🤔
- 下次再说