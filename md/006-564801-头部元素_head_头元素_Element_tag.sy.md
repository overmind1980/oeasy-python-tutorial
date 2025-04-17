---
show: step
version: 1.0
enable_checker: true
---

# head元素

## 回忆

- 上次我们学习了body元素
- body元素和html元素一样
	- 也是由开始和结束标签构成的
		- 开始标签 
			- start tag
			- `<body>`
		- 结束标签
			- end tag
			- `</body>`
- 如果html、head、body不存在或不完整
	- 浏览器也会帮我们补全这些框架

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668935070920)

- 如果我们偏偏搞颠倒会如何呢？🤪
	- head在下
	- body在上

### 构建

- <kbd>ctrl</kbd> + <kbd>c</kbd>
	- 结束上一个火狐进程
	- 回到vim
- 修改文档如下

```html
<html>
	<body>
		The hanged document!
	</body>
	<head>
	</head>
</html>
```

- 保存并用火狐浏览网页

### 再次浏览

- <kbd>f12</kbd> 检查元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719450946957)

- 火狐浏览器 已经帮我们
	- 改成了标准结构
	- html元素依然是根
	- html根下依然是两个元素
		1. 先 head
		2. 后 body
- 浏览器 是 如何理解
	- html源代码的呢？

### view source

- 鼠标右键
	- 查看源文件
	- 可以看到源代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719452333476)

- 但是head的 开始和结束标签
	- 标红了
- 把鼠标移动到红线上面

### 浏览器提示

- stray start tag "head"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719452355691)

- 什么是stray呢？

### stray

- stray 来自于 古法语
	- 来自古法语 estraier, 漫游，流浪，偏离
- street people
	- 在大街上的流浪汉
- 浏览器 认出了 head元素
	- 没在该在的地方
	- 已经成了流浪汉

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221206-1670320983565)

- 再去whatwg
	- 查看一下head

### 查询

- 去关于head定义的字典查询
	- https://html.spec.whatwg.org/multipage/semantics.html#the-head-element
- head 号称 
	- html里面 第1个元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220908-1662623104626)

- 可以看看
	- 整棵树的结构么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719452223255)

### 树形结构

- 根是html
	- 里面两个分支
		1. 第一个元素 head
		2. 第二个元素 body

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221206-1670315898562)

- 选中html开始标签
	- 观察最后一行 
		- 结束标签 变蓝
	- 页面元素  
		- 都被选中 也变蓝

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719452400427)

- html元素下面
	- 两个元素
		- 先是head

### head

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719452480937)

- 后是body

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719452489278)

- 这 两个元素
	- 先后次序固定
- 试着 搜索 文本

### 搜索body

- 先 搜索 body
	- 有1个匹配

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719452627409)

- 再 搜索 head 
	- 可以跳转到head元素的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719452665610)

- 如果搜索文本`doc` 呢？

### 搜索文本

- 搜索文本
	- 就跳转到 
	- 文本所在的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719452693473)

- 这个树型结构
	- 我理解了
- 可以在html
	- 源文件体现出这个结构吗？

### 缩进体现结构

- 关闭火狐
	- 回到vim
- 在正常状态下
	- 输入 <kbd>g</kbd><kbd>g</kbd><kbd>=</kbd><kbd>G</kbd>
	- 从首行 缩进到 尾行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719452878235)

- 自动缩进之后
	- 网页的层次结构非常清晰
	- html是根
	- head和body是子元素
- 不过次序还有点问题

### 调整次序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719453676873)

- :5,6m1
	- 把从第5到第6行
	- m(move/移动)到第1行下面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719453685897)

- head元素
	- 是html下面的第1个元素
	- 然后才是body
- 元素 是由什么组成的来着？

### 元素组成

- 元素 Element 是由 
	- 成对的标签Tag 组成的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230806-1691331645026)

- tag 这个词根来自于
	- touch 触摸

### 总结
- 这次我们 了解了
	- head元素
- head元素
	- 也是由
		- 开始标签
			- `<head>`
		- 结束标签 
			- `</head>` 
		- 来组成
	- 开始和结束两个标签一起
		- 封闭起来
		- 构成一个head元素
- 根是`html`
	- `html`里面两个子元素
		1. `head`
		2. `body`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221206-1670320477048)

- `body`里面
	- 是网页的具体内容
- `head`里面
	- 有什么呢?🤔
- 下次再说！👋


