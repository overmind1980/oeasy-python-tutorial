---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次完成了文本变色的操作
	- 主要靠的是
	- 周期调用函数setInterval
	- 查看函数的方式是翻阅mdn
	- mozilla develope network
- 还记得mozilla怎么来的吗？
	- Mosaic Godzilla Killa

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724982578935)

- 我们这次本意是要闪烁字体啊？！


```
<!DOCTYPE html>
<html lang=en>
    <head>
        <meta charset="UTF-8">
        <style>
.go {
    color: green;
}
.stop {
    color: red;
}
        </style>
        <title>Document</title>
    </head>
    <body>
        <div id="my_box">
            <h3>Hello World</h3>
        </div>
        <button id="start">Start</button>
        <button id="stop">Stop</button>
    </body>
    <script>
let nIntervId;

function changeColor() {
    // check if an interval has already been set up
    if (!nIntervId) {
        nIntervId = setInterval(flashText, 1000);
    }
}

function flashText() {
    const oElem = document.getElementById("my_box");
    oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
    clearInterval(nIntervId);
    // release our intervalID from the variable
    nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
    </script>
</html>
```

- 可以根据这个修改吗？

### 问问ai

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240904-1725450721899)

- 再看看js部分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240904-1725450749986)


### 代码

- 每隔500ms
	- 运行一次blink
	- 实现闪烁

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>闪烁字体</title>
</head>

<body>
  <h1 id="blinkingText">闪烁的字体</h1>

  <script>
    const blinkingText = document.getElementById('blinkingText');

    function blink() {
    blinkingText.style.visibility = blinkingText.style.visibility === 'hidden'? 'visible' : 'hidden';
    }

    setInterval(blink, 500);
  </script>
</body>

</html>
```

- 这个blink效果
	- 也曾经是一个标签
	- 这是怎么回事呢？

### blink元素

- 原来是网景公司
	- 据说是直播养鱼那哥们做的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240904-1725451077945)

- 不过经他本人证明	
	- 他提出了想法
	- 其他工程师实现了标签

>  It turns out that one of the engineers liked my idea so much that he left the bar sometime past midnight, returned to the office and implemented the blink tag overnight. He was still there in the morning and quite proud of it

- 这个元素具体怎么用呢？

### 使用
 
```
<blink>This text could blink</blink>
```

- 有了这个就可以让文字闪烁
	- 这是很多个人用户想做的效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240904-1725451946854)

- 但是为什么这个标签消失了呢？

### 网景的野望

- 网景目前领先
	- 想要通过领先地位牵着微软走
- 用户喜欢blink元素
	- 网景提供支持

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240904-1725452362991)

- 微软不支持
	- 用户不用微软
- 微软支持
	- 微软遵守网景的规则继续走
- 微软会如何应对呢？

### 微软的应对

- 微软不会跟着网景的规则走
	- 目前支持遵循w3c的html2.0
	- https://www.w3.org/MarkUp/html-spec/html-spec_toc.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240904-1725452752414)

- 已经被w3c收录的标签
	- 微软就实现
	- 跟着规则走
	- 而不是跟着网景走
	- 并且期待有朝一日可以定规则

### 为难

- 用户感到十分为难
	- 你说用不用这个新技术

- 用了 
	- 怕微软浏览器不支持
- 不用
	- 特别想要blink的闪烁效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240904-1725454527155)

- 网页制作的社区
	- 在被这两个公司撕裂

### 总结 🤔

- 这次讲到了blink元素
	- 这是网景公司 
		- 实现闪烁效果的标签
- 微软公司
	- 并没有跟着网景公司的后面走
	- 直到今天微软浏览器也不支持blink元素
- blink可谓死不瞑目

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240904-1725454882500)

- blink是
	- 网景公司做的
	- 微软不支持
- 有没有 什么标签是
	- 微软公司做的
	- 网景不支持呢？
- 下次再说！👋

