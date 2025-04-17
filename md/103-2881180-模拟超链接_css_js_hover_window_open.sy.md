---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次我们研究了 
	- 鼠标移上指针变手的方法

- 选择器 selector 是
	- span 元素选择器
	- hover 伪类

```
span:hover 
```

- 特性property是

```
cursor: pointer;
```

- cursor特性设置为小手指针
- 我们能够彻底用css和js
	- 实现一个鼠标指针吗？🤔

### ai询问


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241001-1727741281506)

- ai具有推理功能
	- 分析出了 超链接的 
		- 样式 css
		- 行为 javascript

### 稍显不足

- 需要利用ai的上下文关联功能
	- 后续的操作在此基础上进行

```
<!DOCTYPE html>
<html>

<head>
  <style>
   .link-like-span {
      cursor: pointer;
      text-decoration: underline;
      color: blue;
    }
  </style>
</head>

<body>
  <span class="link-like-span">这看起来像个超链接</span>

  <script>
    const span = document.querySelector('.link-like-span');
    span.addEventListener('click', function () {
      // 这里可以添加当点击这个“假超链接”时要执行的逻辑，比如打开一个新页面
      window.open('https://www.example.com', '_blank');
    });
  </script>
</body>

</html>
```

- 首先控制颜色
	- 点击之前 蓝色
	- 鼠标移上时 红色 
	- 点击之后 紫色

### 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241001-1727741577261)

```
<!DOCTYPE html>
<html>

<head>
  <style>
   .link-like-span {
      cursor: pointer;
      text-decoration: underline;
      color: blue;
    }

   .link-like-span:hover {
      color: red;
    }

   .clicked {
      color: purple;
    }
  </style>
</head>

<body>
  <span class="link-like-span">这看起来像个超链接</span>

  <script>
    const span = document.querySelector('.link-like-span');
    let isClicked = false;
    span.addEventListener('click', function () {
      isClicked = true;
      span.classList.add('clicked');
      // 这里可以添加当点击这个“假超链接”时要执行的逻辑，比如打开一个新页面
      window.open('https://www.example.com', '_blank');
    });
    span.addEventListener('mouseover', function () {
      if (!isClicked) {
        span.style.color = 'red';
      }
    });
    span.addEventListener('mouseout', function () {
      if (!isClicked) {
        span.style.color = 'blue';
      }
    });
  </script>
</body>

</html>
```

- css中的修改保留
- js中的修改不要

### 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241001-1727741616073)

- js中所有的代码都被删除了

```
<!DOCTYPE html>
<html>

<head>
  <style>
   .link-like-span {
      cursor: pointer;
      text-decoration: underline;
      color: blue;
    }

   .link-like-span:hover {
      color: red;
    }

   .link-like-span:active {
      color: purple;
    }
  </style>
</head>

<body>
  <span class="link-like-span">这看起来像个超链接</span>
</body>

</html>
```

- 通过css基本实现
	- 现在控制js

### 实现js

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241001-1727741885376)

```
<body>
  <span class="link-like-span" onclick="window.open('https://oeasy.org','_blank')">这看起来像个超链接</span>
</body>
```

- 将onclick事件的驱动 
	- 封装到script元素中

### 彻底完成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241001-1727741948031)

- 最终实现

```
<!DOCTYPE html>
<html>

<head>
  <style>
   .link-like-span {
      cursor: pointer;
      text-decoration: underline;
      color: blue;
    }

   .link-like-span:hover {
      color: red;
    }

   .link-like-span:active {
      color: purple;
    }
  </style>
</head>

<body>
  <span class="link-like-span">这看起来像个超链接</span>

  <script>
    const span = document.querySelector('.link-like-span');
    span.addEventListener('click', function () {
      window.open('https://oeasy.org', '_blank');
    });
  </script>
</body>

</html>
```

### 实质

- 其实上面这些代码
	- 本质上可以变成

```
<a href="https://oeasy.org" target="_blank">
	这就是超链接
</a>
```

- 早期网络的核心网站
	- 都是围绕着a元素
	- 建立起来的

### 雅虎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241001-1727742276932)

- 雅虎
	- 用人工的方式
	- 将链接 分类成 目录结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241001-1727742311226)

- 成为了www站点的核心

### 谷歌

- 谷歌使用爬虫沿着超链接爬取

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241001-1727742396372)

- 并且使用pagerank算法
	- 使用机器得到 
	- 最符合用户需求的网页

### 总结 🤔
- 这次彻底用css和js实现了a元素
	- css特性

|特性|作用|
|---|---|
|cursor|指针|
|text-decoration|文档修饰(下划线等)|
|color|文字颜色|

- 伪类 选择器

|伪类|作用|
|---|---|
|:hover|mouseover|
|:visited|访问过的|

- js效果

```
window.open('http://oeasy.org')
```

- a元素 是
	- html核心元素
	- 网站建立的关键
	- 搜索引擎的 基石
- 人们开始使用搜索引擎 检索信息 之后
	- 传统 新闻出版行业 会如何呢？🤔
- 我们下次再说！👋