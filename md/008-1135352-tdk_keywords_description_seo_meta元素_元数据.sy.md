---
show: step
version: 1.0
enable_checker: true
---

# title元素

## 回忆

- 上次我们了解了title元素
	- title元素是head元素中的子元素
	- head元素是html元素中的子元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668937067663)

- title元素的内容是纯文本	
	- 所谓内容是指	
		- 开始标签<title>和结束标签</title>
			- 所包围的部分
- title是标题
	- 出现在标签页、搜索、书签等位置
	- 是网页内容的题目
	- 是网页中最重要的文本！！！

- 搜索中除了title之外
	- 还有其他元素会对搜索排名产生影响吗？🤔

### tdk 都会产生影响

- tdk 是 seo 时的重要因素
 
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230413-1681376882229)

- seo 是搜索引擎优化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230413-1681377053880)

- 对于搜索引擎
	- 优化不优化有什么要紧吗?

### 网络时代

- 各种咨询的获得
	- 都需要依赖各类搜索引擎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719454596637)

- 设置好合理的tdk
	- 可以使得搜索排序靠前
- 什么是tdk呢?

### tdk设置

- tdk就是
	- title
	- keywords
	- description

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230413-1681377316512)

- 除了`t`itle之外
	- description和keywords
	- 都对应meta元素
- whatwg里
	- 怎么定义meta的?

### 帮助位置

- meta元素 
	- 也是由标签构成的
	- 但不需要结束标签
	- https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231008-1696761845461)

- 具体怎么写呢？

### 核心关键词

- 关联搜索词

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719457564759)

- 当然还要注意所针对的引擎

### 淘宝

- 不同搜索关键词
	- 会有不同的相关词
- 这些词往往更细节
	- 但也更容易命中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719457612997)

- 如果我们的产品是视频呢?

### 长尾关键词

- 就需要在视频网站观察

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719457762394)

- 主关键词竞争充分怎么办？

### 边缘入手

- 需要从边缘地带入手
	- 观察分析 长尾关键词

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719457945676)

- 视频的tdk
	- 标题
	- 关键词列表
	- 简介
	- 都会落实到网页的层面

### keywords

- 整体上讲 元素是 meta

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231008-1696761946492)

- meta元素 有两个属性

|属性名|属性值|
|---|---|
|name |"keywords"|
|content|"british,type,face..."|

- meta元素
	- 有结束标签吗?

### 标签定义

- meta元素
	- 没有结束标签

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231008-1696762422029)

- 语法只是常规配置
	- 核心是如何设置关键词

### 从引擎出发

- meta元素
	- 有开始标签
	- 没有结束标签

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719458232358)

- 要注意逗号是半角
	- 而不是全角

```html
<!DOCTYPE HTML>
<html lang="zh-cn">
	<head>
		<title>oeasy</title>
		<meta name="keywords" content="教程,学习资料,个性">
	</head>
	<body>
	</body>
</html>
```

- 这些关键词很难和oeasy关联

### 观察指数信息

- index.baidu.com
	- 去指数工具中观察

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719458350861)

### description

- 但是这些和oeasy教程并不相关
	- 不能为了关键字而关键字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231008-1696762067400)

- 搜索细节

### 搜索ps教程

- 在百度搜索ps之后
	- 按下空格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719458554247)

- 找到细化的明确需求

###  观察

- 可以观察需求的
	- 地域和年龄特征
	- 细化任务

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719458641650)

### 名字问题

- 一个词汇课能有多个名字
	- 在指数工具中观察
	- 长期和短期趋势
		- https://index.baidu.com/v2/main/index.html#/trend/ps?words=ps,photoshop,%E7%94%BB%E5%9B%BE%E8%BD%AF%E4%BB%B6,ps%E6%95%99%E7%A8%8B,%E7%BE%8E%E5%B7%A5

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719458957707)

### 类似的多个名称

|词汇|缩写|中文描述|
|---|---|---|
|photoshop|ps|作图软件|
|powerpoint|ppt|演示文档|
|illustrator|ai|矢量作图工具|
|excel||电子表格|

- 关键词 也不是多多益善
	- 根据引擎的不同而不同
	- 一般来讲10个刚好

### 描述信息

- 这样写可能是你心里面真实的想法
	- 但是可能打不到核心关键词

```html
<!DOCTYPE HTML>
<html lang="zh-cn">
	<head>
		<title>oeasy</title>
		<meta name="keywords" content="教程,学习资料,个性">
		<meta name="description" content="oeasy教程是个性化非常明显的教程，评价两极化。">
	</head>
	<body>
	</body>
</html>
```

- 如何打到核心关键词

### 描述写法

```
零基础教程,入门教程,初学者从入门到精通,ps入门,photoshop教学,视频教程,美工必备,作图修图,抠像处理,全套免费自学
```

- 比如核心关键词如上所述

```html
<meta name="description" content="oeasy教程是适合于零基础入门学习ps/photoshop的视频教程,可以让初学者迅速从入门到精通,了解作图修图、抠像处理等美工必备工具,而且全套免费,适合自学.">
```
- 争取打到尽可能多的关键词
	- 控制出现频率
	- 并把语句理顺
	- 100汉字左右

### 最终效果

- title也要向keywords上靠近

```html
<!DOCTYPE HTML>
<html lang="zh-cn">
	<head>
		<title>oeasy的ps/photoshop教程</title>
		<meta name="keywords" content="零基础教程,入门教程,初学者从入门到精通,ps入门,photoshop教学,视频教程,美工必备,作图修图,抠像处理,全套免费自学">
		<meta name="description" content= "oeasy教程是适合于零基础入门学习ps/photoshop的视频教程,可以让初学者迅速从入门到精通,了解作图修图、抠像处理等美工必备工具,而且全套免费,适合自学.">
	</head>
	<body>
	</body>
</html>
```

- 最终完成整个tdk的设置

### app封装为网页

- 商品或服务的 最终页面
	- 也有tdk
	- 接受其他引擎的收录和索引

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719459922722)

### 视频

- 音视频也一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719459981179)

- 生活中可以多观察一下
	- 优秀的seo是如何实现的

### 总结 

- 这次我们了解了tdk

|英文|中文|
|---|---|
|title|标题| 
| description|描述|
| 关键字 |keywords | 

- tdk 是 
	- 搜索引擎 判断权重的重要依据！
	- 是seo技术的核心
- seo 就是
	- search engine optimization
	- 搜索引擎优化
- 我可以在网页中用中文吗??🤔
- 下次再说！👋


