---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次讲到了blink元素
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

### maquee元素

- 微软不想跟着网景后面走
	- 他也制作了一个标签
	- maquee

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240905-1725506073968)

- 这个标签怎么用呢？

### 走马灯

- marquee就是大帐篷
	- 人在里面走来走去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240905-1725506575018)

- 具体效果是
	- 走马灯特效
	- 文字走来走去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240905-1725506342543)

- 能用吗？

### 不支持

- w3c标准也没支持微软的marquee
	- 就像没支持网景的blink一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240905-1725506652363)

- 我们可以看到marquee元素的一些属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240905-1725506693997)

- 这个东西现在被火狐之类的支持吗？

### 支持状态

- 目前大多数浏览器都支持

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240905-1725515162091)

- 尝试运行

### 运行

```html
<marquee>This text will scroll from right to left</marquee>

<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate">This text will bounce</marquee>
</marquee>
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240905-1725515378142)

- 我们可以用js
	- 实现这个
	- 走马灯效果吗？

### 效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>JavaScript Marquee</title>
</head>

<body>
  <div id="marquee-container">
    <div id="marquee-text">这是一个用 JavaScript 实现的滚动文本。</div>
  </div>
  <script>
const marqueeContainer = document.getElementById('marquee-container');
const marqueeText = document.getElementById('marquee-text');

let offset = 0;
const speed = 2; // 调整速度
const intervalTime = 50; // 调整间隔时间

marqueeText.style.width = `${marqueeContainer.offsetWidth}px`; // 使文本宽度与容器相同

function scrollMarquee() {
  offset -= speed;
  if (offset <= -marqueeText.offsetWidth) {
    offset = marqueeContainer.offsetWidth;
  }
  marqueeText.style.transform = `translateX(${offset}px)`;
}

// 使用 setInterval 来重复调用 scrollMarquee 函数
setInterval(scrollMarquee, intervalTime);
  </script>
</body>

</html>
```

- 每隔intervalTime
	- 运行scrollMarquee
- scrollMarquee中
	- 根据速度speed
	- 来调整位移offset

### 实现效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240905-1725508182380)

- 这样网景和微软就分庭抗礼了

### 分庭抗礼

|支持情况|微软|网景|
|---|---|---|
|marquee|⭕️|❌|
|blink|❌|⭕|

- 如果网页写成这样...

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240905-1725515857133)

```
<marquee>
  <blink>Night Of The Living Dead</blink>
</marquee>
```

- 两边浏览器都不支持

### 改进

- 在原来用js实现marquee的基础上	
	- 加上blink效果

```
const blinkingText = document.getElementById('blinkingText');

function blink() {
blinkingText.style.visibility = blinkingText.style.visibility === 'hidden'? 'visible' : 'hidden';
}

setInterval(blink, 500);
```

- 尝试调试和修改

### 最终效果

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>JavaScript Marquee</title>
</head>

<body>
  <div id="marquee-container">
    <div id="marquee-text">这是一个用 JavaScript 实现的滚动文本。</div>
  </div>
  <script>
const marqueeContainer = document.getElementById('marquee-container');
const marqueeText = document.getElementById('marquee-text');

let offset = 0;
const speed = 2; // 调整速度
const intervalTime = 50; // 调整间隔时间

marqueeText.style.width = `${marqueeContainer.offsetWidth}px`; // 使文本宽度与容器相同

function scrollMarquee() {
  offset -= speed;
  if (offset <= -marqueeText.offsetWidth) {
    offset = marqueeContainer.offsetWidth;
  }
  marqueeText.style.transform = `translateX(${offset}px)`;
}

function blink() {
    marqueeText.style.visibility = (marqueeText.style.visibility === 'hidden'? 'visible' : 'hidden');
}

setInterval(blink, 500);// 使用 setInterval 来重复调用 scrollMarquee 函数
setInterval(scrollMarquee, intervalTime);
  </script>
</body>

</html>
```

- 这段代码最终实现了
	- 闪烁的走马灯特效

### 很多界面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240925-1727231590845)

- 滚动的字幕无处不在

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240925-1727231313369)

### 总结 🤔

- 这次研究了marquee元素
	- 属性最多的元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240905-1725517821920)

- 虽然不被推荐
	- 但是 却被很多浏览器所支持
- 为什么
	- 微软公司的marquee依然被支持
	- 而网景公司的blink彻底消失了呢？🤔
- 下次再说！👋

