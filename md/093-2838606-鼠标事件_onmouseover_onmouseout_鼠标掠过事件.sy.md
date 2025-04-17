---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次研究了
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

### 回到最初

```
<!DOCTYPE html>
<html>
<style>
#mySpan{
	text-decoration:underline;
}
</style>
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

- 把问题交给ai

### 提问过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726286292134)

### 分析过程

- 提到了两个新的事件

|事件名称|事件触发条件|
|---|---|
| mouseover|鼠标移动上面|
| mouseout|鼠标从上面移开|

- 就像之前的

|事件名称|事件触发条件|
|---|---|
| onclick|按钮点击|
| onsubmit|表单提交|

```
<!DOCTYPE html>
<html>

<head>
  <style>
    #mySpan {
      text-decoration: underline;
    }
  </style>
</head>

<body>

  <span id="mySpan" onclick="openWebPage()">点击这里打开网页</span>

  <script>
    function openWebPage() {
      window.open('https://www.example.com', '_blank');
    }

    // 添加鼠标移入事件监听器
    document.getElementById('mySpan').addEventListener('mouseover', function () {
      this.style.color = 'red';
    });

    // 添加鼠标移出事件监听器
    document.getElementById('mySpan').addEventListener('mouseout', function () {
      this.style.color = '';
    });
  </script>

</body>
</html>
```

- 鼠标移动上去
	- 确实颜色改变

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726287519790)

- 去MDN搜索相关资料

### MDN

- 这些都是全局的属性
	- 任何元素都可以有的属性
- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726287290145)

- 关于鼠标的有若干的效果
	- 鼠标按下
	- 鼠标进入
	- ...
- 鼠标移动上去的时候
	- 还想让字体变大

### 字体变大

- js中字体大小的属性
	- fontSize
	- 小驼峰命名的
		- 和textDecoration一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726287932029)

- 想要设置初始字体大小10px

### 设置字体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726288155103)

- 如果还想要鼠标移动上去之后
	- 字体大小变成20px

### 字体变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726312139216)

|js特性名|style特性名|作用|
|---|---|---|
|textDecoration|text-decoration|文本修饰效果|
|fontSize|font-size|字体大小|

```
<!DOCTYPE html>
<html>

<head>
  <style>
    #mySpan {
      text-decoration: underline;
      font-size: 10px;
    }
  </style>
</head>

<body>

  <span id="mySpan" onclick="openWebPage()">点击这里打开网页</span>

  <script>
    function openWebPage() {
      window.open('https://www.example.com', '_blank');
    }

    function handleMouseOver() {
      const span = document.getElementById('mySpan');
      span.style.color = 'red';
      span.style.fontSize = '20px';
    }

    function handleMouseOut() {
      const span = document.getElementById('mySpan');
      span.style.color = '';
      span.style.fontSize = '10px';
    }

    document.getElementById('mySpan').addEventListener('mouseover', handleMouseOver);
    document.getElementById('mySpan').addEventListener('mouseout', handleMouseOut);
  </script>

</body>

</html>
```

- 希望取消匿名函数

### 取消匿名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240914-1726312233343)

- 红色的部分
	- 将鼠标事件 绑定到具体的函数

```
<!DOCTYPE html>
<html>

<head>
  <style>
    #mySpan {
      text-decoration: underline;
      font-size: 10px;
    }
  </style>
</head>

<body>

  <span id="mySpan" onclick="openWebPage()">点击这里打开网页</span>

  <script>
    function openWebPage() {
      window.open('https://www.example.com', '_blank');
    }

    function handleMouseOver() {
      const span = document.getElementById('mySpan');
      span.style.color = 'red';
      span.style.fontSize = '20px';
    }

    function handleMouseOut() {
      const span = document.getElementById('mySpan');
      span.style.color = '';
      span.style.fontSize = '10px';
    }

    document.getElementById('mySpan').addEventListener('mouseover', handleMouseOver);
    document.getElementById('mySpan').addEventListener('mouseout', handleMouseOut);
  </script>

</body>

</html>
```

### 绑定函数

- 现在绑定的工作
	- 放到mySpan中的全局属性里面
	- 直接进行函数调用

```
<!DOCTYPE html>
<html>

<head>
  <style>
    #mySpan {
      text-decoration: underline;
      font-size: 10px;
    }
  </style>
</head>

<body>

  <span id="mySpan" onclick="openWebPage()" onmouseover="handleMouseOver();" onmouseout="handleMouseOut();">点击这里打开网页</span>

  <script>
    function openWebPage() {
      window.open('https://www.example.com', '_blank');
    }

    function handleMouseOver() {
      const span = document.getElementById('mySpan');
      span.style.color = 'red';
      span.style.fontSize = '20px';
    }

    function handleMouseOut() {
      const span = document.getElementById('mySpan');
      span.style.color = '';
      span.style.fontSize = '10px';
    }

  </script>

</body>
</html>
```


### 总结 🤔

- 这次研究了全局的属性
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
- 下次再说