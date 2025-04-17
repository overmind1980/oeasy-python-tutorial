---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次研究了 链接 配合内嵌对象的写法
	- a 的 target属性 负责指定打开窗口
	- iframe 的 name属性 负责定义窗口的名字

```
<a href="autumn/autumn.html" target="my_window">autumn</a>
<iframe name="my_window"></iframe>
```

- a元素的target属性
	- 除了可以是自定义的名字
	- 还可以是什么值吗？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2891079/uid1190679-20241012-1728707527774) 

- 我们用的是framename

```
<a href="autumn/autumn.html" target="my_window">autumn</a>
<iframe name="my_window"></iframe>
```

- _self是自身的窗口
	- 比较好理解
- _blank是什么意思呢？

### 尝试

```
<a href="http://lanqiao.cn" target="_blank">
	link
</a>
```

- 每次点击
	- 都会出现新的窗口或者标签页

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2892584/uid1190679-20241012-1728718369732) 

- 如何理解_parent呢？

### 两个网页

- a.html

```
<a href="a.html" target="_parent">
	link
</a>
```

- f.html

```
hhh
<iframe src="a.html"></frame>
```

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2892584/uid1190679-20241012-1728718695843) 

- 点击框架中的a.html中的链接后
	- 在iframe的父级窗口
	- 打开a.html

- 那_top如何理解呢？

### _top

- _top就是
	- _parent的_parent的...
	- 最开头的祖宗
	- 最顶级的窗口
- 如果四世同堂
	- son.html
	- father.html
	- grandpa.html
	- great.html
- 我在son.html中
	- 想要打开grand.html
	- 应该怎么办呢？

### 构造结构

```
<a href="a.html" target="g">
	link
</a>
```

- son.html

```
father
<iframe src="son.html"></frame>
```

- father.html

```
grandpa
<iframe src="father.html" name="g"></frame>
```

- grandpa.html

```
grandpa
<iframe src="father.html" name="g"></frame>
```


- great


### 效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2892584/uid1190679-20241012-1728721429186) 

- 点击link之后
	- 会在grandpa.html这个g窗口中
	- 打开链接

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2892584/uid1190679-20241012-1728721469703) 

- whatwg是如何介绍
	- a元素的target属性的呢？

### a

- 找到a元素
	- https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2892584/uid1190679-20241012-1728721669935) 

### target

- 找到target属性
	- https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-target

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2892584/uid1190679-20241012-1728721799361) 

### 常用值

- https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2892584/uid1190679-20241012-1728721853109) 




### 总结 🤔

- 这次研究了 a元素target属性的常用值

|特性值|位置|
|----|----|
|_self|自身窗口内|
|_blank|新窗口内|
|_parent|父级|
|_top|顶级|
|windowname|某个窗口|

- 如果说a元素是所有元素中最核心的元素
	- 原因就是 他可以访问到英特网上`所有的`资源
	- 不论物理位置有多远
	- 靠的就是url的定位
- 这种定位的方式
	- 是如何确定的呢？🤔
	- 又是如何发展的呢？🤔
	- 为什么..就可以向上一层目录呢？🤔
- 我们下次再说！👋
