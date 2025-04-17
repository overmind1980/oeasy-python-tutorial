---
show: step
version: 1.0
enable_checker: true
---

# h1 - h6 标题元素

## 回忆

- 上次我们了解了`标题`元素
	- 标题一共分为六级
		1. 标题一 headings 1
		2. 标题二 headings 2
		3. 标题三 headings 3
		4. 标题四 headings 4
		5. 标题五 headings 5
		6. 标题六 headings 6
- 他们控制着
	- 章节(section)
	- 大纲(outliner)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670485849589)

- 章节和大纲
	- 又该怎么理解？🤔

### 等价

- 下面这两个是等价的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240701-1719825983095)

- 这里面有个没有学过的section元素
- 什么是section呢？

### 查询元素

- 章节元素(section)代表着
	- 章节
	- https://html.spec.whatwg.org/multipage/sections.html#the-section-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240701-1719826056442)

- 一般来说
	- 一个章节就是主题相似的内容
	- 一个章节 一般有个 章节标题
- section这个词来自于什么呢？

### section

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670487947035)

- 从整体上切下来的一部分
	- 章节、部门、部分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670488016115)

- 来自于*sek-
	- 锯子斧头都是用来切的
- 具体怎么切呢？

### 标题

- 军师旅团营连排
	- 作战单位细分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670488474949)

- 每个作战单位
	- 都有自己的头目
- 头目管的范围不同
	- 要把归属理清楚

### 归属关系

- 一师师长 隶属于
	- 一军军长 
	- 这很明确
- 这个士兵的隶属 关系
	- 不是 很明确

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670488731165)


- 这个士兵 究竟是
	1. 隶属于 一军军长?
	2. 还是 隶属于 一师师长?

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670488778161)

- 怎么让他明确呢？

### 放到section中

- 士兵隶属于一师师长

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670488965147)

- 士兵隶属于一军军长

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670489012718)

- 这就明确了

### 再比较代码

- 各个部门(section)
	- 都有自己的头儿(headings)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240701-1719825983095)

|标签|作用|
|---|---|
|h1 | body这个section的头儿 |
|h2 | body下面的子section的头儿 |
|h3 | body下子section的子section的头儿|

### 军团编制

- 书写文档 是 遣词造句
	- 军团编制 是 调兵谴将

- 结构关系 形成了 
	- 文档大纲(outliner)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670490918394)

- 什么是文档大纲呢?

### 大纲

- 纲就是提网的总绳

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670505643337)

- 所以说纲举目张

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670505884494)

- 纲领是关键是最重要的
	- 所以说提纲挈领

### 文档大纲

- 一个检查大纲的网站
	- https://gsnedders.html5.org/outliner/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670505032614)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240701-1719830635022)

- 如果文档有若干标题
	- 至少有一个得是h1

### 具体例子

- 标题下的子标题
	- 标题级别 +1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670506706468)

- h4 被升级为 h1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670506716816)

- 和下图相同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670506777226)

### 子标题升级

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670506865747)

- h3 会自动升级吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670506881618)

- h3确实会自动升级为h2


### 检查大纲

```
<body>
<h1>Let's call it a draw(ing surface)</h1>
<h2>Diving in</h2>
<h2>Simple shapes</h2>
<h2>Canvas coordinates</h2>
<h3>Canvas coordinates diagram</h3>
<h2>Paths</h2>
</body>
```

- 检查结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670505164943)

### 复杂版

```
<body>
 <h1>Let's call it a draw(ing surface)</h1>
 <section>
  <h2>Diving in</h2>
 </section>
 <section>
  <h2>Simple shapes</h2>
 </section>
 <section>
  <h2>Canvas coordinates</h2>
  <section>
   <h3>Canvas coordinates diagram</h3>
  </section>
 </section>
 <section>
  <h2>Paths</h2>
 </section>
</body>
```

- 其实两段代码本质相同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670505174618)

- section 就是
	- 给不同的标题
	- 划定范围

### 大纲

- 标题一层层的
	- 最终会形成一棵树
- 有次序的大纲树
	- outliner
	- 可以看出整体轮廓

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670506120989)


### 总结🤔

- 这次研究的是
	- section章节
- 一个完整的网页可以分成
	- 章、节、小节、小小节...
	- 每个部件是一个section
	- 每个section可以有自己的标题
	- 这些标题构成一棵大纲树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670507219234)

- 标题还有什么好玩的吗?🤔
- 下次再说！👋
