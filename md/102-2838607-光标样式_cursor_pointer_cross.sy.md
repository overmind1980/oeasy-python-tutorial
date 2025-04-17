---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次我们回顾了google的诞生和发展
- 整个搜索引擎基于爬虫
	- 爬虫基于超链接技术
	- 简单来说就是a元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240926-1727329077481)

- a元素还有一项特殊效果我们还没有介绍
	- 是什么特殊效果呢？？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240926-1727329518379)

### 特殊效果

- 鼠标在移动到a元素上方的时候
	- 鼠标的光标样式
	- cursor
	- 会发生变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240926-1727329827843)

- 鼠标主体在哪里设置？

### 鼠标方案

- 目前的鼠标方案

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726232502809)

- 只有一个主题
	- 主题里面没有其他的光标样式

### 主题

- https://www.xfce-look.org/p/2124626

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726234971859)

- 各种光标挺多的

### 下载

- https://www.xfce-look.org/p/2124626

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240926-1727330614499)

- 点击右侧Download
- 下载到本地

### 上传并解压

- 从本地上传到蓝桥云

```
cd Code
unzip Candy-Pixel-Blue-vr2-Linux.zip
cp -r Candy-Pixel-Blue-vr2-Linux ~/.icons/
```

- 修改当前 鼠标样式主题
	- 鼠标指针变成蓝色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240930-1727704278296)

- 如何让鼠标指针
	- 在网页中呈现手型？

### 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240930-1727704525738)

### 代码

```
<!DOCTYPE html>
<html>

<head>
  <style>
    span:hover {
      cursor: pointer;
    }
  </style>
</head>

<body>
  <span>这是一个可点击的区域。</span>
</body>

</html>
```

- 效果达成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240930-1727705150093)

- 只有在鼠标移过span的时候
	- 指针样式才变化
	- 这是怎么选中的？

### 选择器

- 使用的选择器是 span:hover
	- span 元素选择器
	- hover 伪类 代表鼠标移过时

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2838607/uid1190679-20240930-1727705375484) 

- 样式的设置为cursor: pointer;
- 这个cursor属性如何理解？

### 搜索

- 在mdn搜索cursor

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240930-1727705857234)

- 找到具体解释
	- https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240930-1727705838260)


### 常用鼠标指针

- 这是一些常见的鼠标指针

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240930-1727707234262)

- 只要鼠标主题里面有相应的图标
	- 网页就可以支持相应的样式
- 可以自定义鼠标指针吗？

### 比如特定场景

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240930-1727707381043)

### 可以自定义鼠标

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240930-1727705933093)

- 格式包括
	- svg
	- cur

### 动手

- 动态指针ani
	- http://www.rw-designer.com/cursor-set/riven-the-sequel-to-myst

```
cd ~/Code
wget https://labfile.oss.aliyuncs.com/courses/3781/n.cur
vi b.html
```

- 这次选择器使用html

```
<!DOCTYPE html>
<html>

<head>
  <style>
    html {
      cursor: url('n.cur'), auto;
    }
  </style>
</head>

<body>
  这里的鼠标指针将是自定义的。
</body>

</html>
```

- 鼠标在html内部的时候
	- 会变化

### 总结 🤔
- 这次我们研究了 
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
- 我们下次再说！👋