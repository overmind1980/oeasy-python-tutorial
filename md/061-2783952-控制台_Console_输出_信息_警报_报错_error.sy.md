---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次了解了网景公司的后续
	- 战胜SpyGlass之后
	- 面对一个很难战胜的对手
- 比尔盖茨的微软
	- 虽然最开始对于数字世界进化路径判断错了
	- 但是调整及时
	- 凭借着win95在pc领域的垄断
	- 强行将IE打包进入操作系统
	- 成为免费的模块
- 来自window的警报响了
	- 有什么办法处理吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240806-1722915704208)

### 恐怖的微软

- 强大的对手最终还是发现了你

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723123221098)

- 无论是
	- 研发能力
	- 市场能力
	- 法律能力
	- 社会背景
	- 网景都不是对手

### 对比

- 网景从最开始就拒绝和微软进行任何合作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723123210765)

- windows的警报还是拉响了
- 你能否体会那种无奈？

```
vi o.html
```

- 去体验一下

### window.alert


```
<script>
	window.alert("你怎么打开了这个网页?!");
	window.alert("我知道你有点好奇");
	window.alert("你猜一会儿会发生什么?!");
	window.alert("再等等!");
	window.alert("也许有奇迹？");
	window.alert("这是最后一句了!88");
	window.alert("怎么还有?!");
</script>
```

- 我们学到的函数
	- alert
	- prompt 
	- 都要弹窗
- 能否不弹窗呢？
	- 而是在控制台输出呢？

### 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723168913228)

- 应该用的是console对象

### console

- 替换代码

```html
<script>
	console.error('console.error()');
	console.warn('console.warn()');
	console.log('console.log()');
	console.info('console.info()');
	console.debug('console.debug()');
</script>
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783952/uid1190679-20241203-1733180292024) 

- 相关信息都可以折叠
- 为啥两条警告？

### doctype

- 第一条警告来自于doctype
	- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode?utm_source=mozilla&utm_medium=firefox-console-errors&utm_campaign=default

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783952/uid1190679-20241203-1733180411632) 

- 只要声明了doctype
	- 第一条警告就会消失

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783952/uid1190679-20241203-1733180477367) 

- 这样就可以
	- 直接输出到控制台了
- 不过为什么有五种形式呢？

### 五种级别

- 报错信息是由级别的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723124335857)

- 在js中可以分别筛选

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723124400922)

- 红色的error是级别最高的
- 回忆之前的代码

### 原始代码

```js
temp = prompt("你多少度？");
if (temp > 39){
	alert("高烧");
}
else if(temp>37){
	alert("低烧");
}
else{
	alert("正常");
}
```

- 还是高烧的话
	- 就要反复试表
	- 这怎么写？

### ai

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783952/uid1190679-20241203-1733181713456) 

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>体温检测</title>
</head>

<body>
  <script>
    let temp;
    do {
      temp = prompt("你多少度？");
      if (temp > 39) {
        alert("高烧");
      } else if (temp > 37) {
        alert("低烧");
      } else {
        alert("正常");
      }
    } while (temp > 39);
  </script>
</body>

</html>
```

 ![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783952/uid1190679-20241203-1733182312990) 

- 能否改造成功？

- 可以对于原来的代码改造吗？

### 改造代码

- 完成替换

```
:%s/alert/console.log/
```

- 保存并运行

```
:w|!firefox % &
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723168491241)

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723168824119)

### 回忆 之前的 for循环

- for循环进行的警报(alert)
	- 也可以 替换为控制台日志(console log)吗？

```javascript
for(i=0;i<=3;i++){
	alert("i===="+i);
}
```

- 可以成功吗？ 

### 总结 🤔

- 这次研究了 js在控制台输出的方法
	- 总共有五种输出方式
	- 代表了五种类型的信息

```javascript
console.log('console.log()');
console.info('console.info()');
console.debug('console.debug()');
console.warn('console.warn()');
console.error('console.error()');
```

- 除了控制台之外
	- 能否将信息`直接输出`到网页呢？🤔
- 下次再说！👋