---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次研究了 二级、三级联动的选择框
	- 在select元素onchange的时候
	- 可以触发函数 调整下一级选择框
- 显示隐藏可以基于
	- style属性中的
	- display这个特性proprrty
- 可以让文本
	- 一会儿出现
	- 一会儿消失
	- 闪烁起来吗？🤔

### 查询

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724935891675)

### 尝试执行

- 定义了myFunction函数
	- 设置了每1000毫秒执行myFunction一次

```
<script>
function myFunction() {
  console.log("定时执行！");
}

let intervalId = setInterval(myFunction, 1000); // 每 1000 毫秒（1 秒）执行一次 myFunction 函数
</script>
```

- 运行结果
	- 红框中的数字增加

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724935937209)

- 能否每次输出一个不同的数字吗？

### 自增变量

- 定义了全局变量
	- count每次自增1

```
<script>
var count = 0;
function myFunction() {
    count += 1;
    console.log(count+"====定时执行！");
}
let intervalId = setInterval(myFunction, 1000); // 每 1000 毫秒（1 秒）执行一次 myFunction 函数
</script>
```

- 效果确实自增了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724936114788)

- 这个setInterval函数的官方帮助在哪呢？

### 官网帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724936357965)

- 去mdn搜索setInterval

### 找到定义

- https://developer.mozilla.org/en-US/docs/Web/API/setInterval

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724936427680)

### 更多参数

```
<script>
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b);
}
</script>
```

- 确实可以将参数传入
	- 回调函数 myCallback

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724936562149)

- 可是我们要的是闪烁效果

### 闪烁效果

- 第二个例子就是
	- 颜色变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724936637991)

- 点击那个play按钮可以看效果的

### 直接看效果

- 分成三个部分
	- html
	- css
	- js

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724936741651)

- 点击start之后
	- 字体颜色红绿变化
- 我们把他们放到一个文件中

### 汇总效果

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

- 可以进去调试吗？

### 准备调试

- F12进入调试器
	- 将43行设置一个断点
	- 点击刷新按钮

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724979830708)

- 准备调试

### 准备

- 当前调用(call)堆栈(stack)为
	- 全局(global)
	- 就是在顶层

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724980413651)

- 第43行
	- 给start按钮
	- 点击事件click
	- 添加一个函数
		- addEventListener
	- 添加的函数为changeColor
	- 具体位置在上面
- 点击跨越按钮
	- 完成事件绑定

### 准备点击

- 43句执行结束之后
	- 执行44句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724980574070)

- 然后js代码结束

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724980617741)

- 准备点击按钮

### 点击效果

- 43行添加的触发器
	- 被调用了
- 调用堆栈
	- 底层43行
	- 上层27行
	- if 判断表达式为True
	- 进入分支

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724980902461)

- 分支中给flashText函数
	- 添加了定时触发
	- 1000毫秒一次

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724980910885)

- 函数执行完毕

### 1000毫秒后

- 1000毫秒之后
	- 进入32行flashText函数
- 调用堆栈
	- 底层43行
	- 43行调用了27行
	- 27行调用了32行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724981191977)

- 效果为不断切换
	- 文本对象的className

### 切换颜色

- class在style元素中
	- 已经定义好

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724981395088)

- 点击播放按钮
	- 颜色自动切换

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724981459131)

- 如何理解调用堆栈呢？

### 例子

```
<script>
function one(){
	console.trace("1 before====Call Stack");
	two();
	console.trace("1 after ====Call Stack");
}
function two(){
	console.trace("2 before ====Call Stack");
	three();
	console.trace("2 after ====Call Stack");
}
function three(){
	console.trace("in 3====Call Stack");
}
one();
</script>
```

- 运行效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724982113008)

- 如何理解这个call stack呢？

### 堆栈

- 堆栈
	- stack 
	- 一层层往上叠东西

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724982220497)

- 硬币堆栈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724982227139)

- 网球堆栈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724982237523)

- 书堆栈

### 函数堆栈

- 函数一层层调用的关系
	- 函数堆栈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240830-1724981579370)

- 调用的时候就往上摞
- 调用完成之后就从顶部移开

### 总结 🤔

- 这次完成了文本变色的操作
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
- 下次再说！👋

