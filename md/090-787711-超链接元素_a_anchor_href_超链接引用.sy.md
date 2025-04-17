---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次讲的是a元素
	- 超链接
	- hyperlink
- html语言
	- 从www-talk开始
	- 到html1
	- 一直到现在
	- 都是最重要的标签 
- 这种标签一般怎么用呢？🤔

### A元素

- 在wwwtalk的时候
	- 就已经存在的元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725783659417)

- a元素
	- 含义是ahchors
- 什么是anchors

### anchor

- 锚

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725784187452)

- 可以锚定某个东西
	- 然后定位在那个位置

### 锚点元素

- a元素是非常重要的元素
	- 因为他服务于网页中最重要的功能
	- 超链接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725784276665)

- 超链接使得信息可以从任何一个ip地址获得

### 更进一步

- Tim Berners-Lee
	- 更进一步

> Its universality is essential: the fact that a hypertext link can point to anything, be it personal, local or global, be it draft or highly polished”

### 早期超链接

- 最早的超链接
	- 使用数字编号
	- 按下数字
	- 奇迹发生
	- 跳转到另一个链接的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724985866501)

- 后来在超链接的下方
	- 经常会出现下滑线
	- 点击之后会跳转到下一个地址

### mosaic的实现

- mosaic实现的效果
	- 超链接颜色为蓝色
	- 点击之后
	- 可以打开一个网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725784751711)

- 我可以用javascript来实现超链接这个功能吗？

### 功能分析

- 直接提问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240909-1725872875192)

- 这是直接生成了一个a元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240909-1725872978130)

- 如果我想让一个span
	- 被点击之后 能够跳转 

### 再问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726183220955)

- 不想使用函数式编程

### 三问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726183316323)

- 不想使用匿名函数

### 四问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726183245850)

- 想要在span元素中
	- 用属性完成绑定

### 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240913-1726183378398)

```
<!DOCTYPE html>
<html>

<body>
  <span id="mySpan">点击这里跳转</span>

  <script>
    const span = document.getElementById('mySpan');
    span.addEventListener('click', goToPage);

    function goToPage() {
      window.location.href = 'https://www.example.com';
    }
  </script>

</body>

</html>
```

- 效果实现

### 尝试 

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

- 完全可以实现功能

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240909-1725874497943)

- 但是a这个标签
	- 显然更简单好用

### html1

- https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240909-1725874996299)

- 核心的属性是href
	- 有两种情况
	1. 当前文档内的引用
	2. 其他文档的引用
- 这如何理解？

### 试着做行内链接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240909-1725875754745)

- 这代码行吗？

### 观察

```
<!DOCTYPE html>
<html>

<body>
  <h1>页面内容</h1>
  <p>这里是一些文本内容。</p>
  <p>还有更多的文本内容。</p>
  <a href="#section2">跳转到第二个链接处</a>
  <p>继续一些文本内容。</p>
  <p>大量的文本内容。</p>
  <h2 id="section2">第二个链接处的标题</h2>
  <p>这是第二个链接处的内容。</p>
  <a href="#top">回到顶部</a>
</body>

</html>
```

- 第一个超链接的地址是
	- #section2
- 这个section2
	- 是下面一个h2元素的id
- 也就是说
	- 超链接 
	- 通过id
	- 找到页面内的位置

### 效果

- 将页面高度缩小

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240909-1725876007449)

- 确实能够看到效果
- 这种用#找id的方式
	- 不但在业内链接中可以用
	- 页外链接也可以用

### 页外链接

```
<a href="https://www.w3.org/MarkUp/html-spec/html-spec_5.html#SEC5.7.3">
    html2中的a元素
</a>
```

- 确实跳转到了网页的指定位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240909-1725876764584)

- 这个链接是
	- 由id属性定义的

### a标签的位置

- 如果a元素位于
	- marquee元素中 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240911-1726024254284)

- 相当难以点击到
	- 变相增加了难度 

### 图片链接

- 可以让图片成为a所包裹的内容

```
<a href="http://oeasy.org">
	<img src="a.jpg" />
</a>
```

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/787711/uid1190679-20241106-1730884449486) 

- 既有链接
	- 又让画面生动活泼

### 总结 🤔

- 这次讲的是a元素
	- 超链接
	- hyperlink
- html语言
	- 从www-talk开始
	- 到html1
	- 一直到现在
	- 都是最重要的标签 
- 这种标签一般怎么用呢？🤔
- 下次再说