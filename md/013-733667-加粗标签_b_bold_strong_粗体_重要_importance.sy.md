---
show: step
version: 1.0
enable_checker: true
---

# 粗体

## 回忆

- 上次了解了具体的标签
- 以前学的都是结构性质的标签
	- html
		- head
			- title
		- body
- 这次了解了mark标签
	- mark标签就像荧光笔
	- 可以mark出重点范围
- mark的开始标签和结束标签的位置
	- 可以精确地控制荧光笔的范围
		- 非常好用！！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668951582756)

- 这其实就是markup language的基本用法
	- 用标签的位置
	- 精确控制选择范围

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668952948699)

- 我可以让字体加粗吗？🤔

### 寻找

- https://html.spec.whatwg.org/multipage/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221123-1669209177782)

- 在 文本级语义
	- Text-level semantics
	- 里面找到了b元素
	- https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element

### b 元素

- b元素表示一段文本
	- 出于实用目的而引起注意
	- 但不传达任何额外的重要性
	- 也不暗示其他声音或情绪

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221123-1669209234363)

- 例如文档摘要中的关键词

### 试试

```html
<b>to be</b> or not to be
```

- 粘贴进入vim

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221123-1669209550681)

- 浏览结果
	- 用上b元素的文本
	- 确实要引人注意一些

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221123-1669209565174)

- 因为相对比较粗

### b

- 这仿佛是个规矩
	- 很多办公软件
	- 还有富文本编辑器
	- 都以b为字体加粗

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221206-1670335029486)

- 为什么b就可以让字体变粗呢？

### bold

- 粗体英文 叫做
	- bold


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221123-1669210312683)


- bold原意是
	- 勇敢的
	- 敢于表白情感的
	- 敢于冒险的
	- 明显、轮廓突出的
- 这 和粗体 
	- 有`什么`关系？

### bold

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221206-1670336714772)

- bold
	- 粗犷的
	- 与细腻相对

### 粗体字

- 粗壮的人
	- 比瘦弱的人
	- 肌肉更发达

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221206-1670335128321)

### 粗面

- 吃粗面
	- 需要比较强的肠胃

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670372418345)

- 整体看来
	- 比较勇敢(brave)

### strong

- 在富文本编辑器中
	- 将粗体元素切换成html代码之后
	- 到了下图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670372822770)

- strong 
	- 也是能够让文本变粗的元素
- strong在网页中是什么效果呢？

### strong效果

```html
<strong>to be</strong> or not to be
```

- 用浏览器访问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221123-1669211014206)

- 效果和b几乎一样
- 这strong 和 b 有什么区别吗？

### 区别

- strong元素
	- 表示其内容有强烈的
		- 重要性
		- 严肃性
		- 紧迫性
	- 可以用在标题、标题或段落中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221123-1669211135630)

- b 元素
	- 只是区别视觉上引人注意
	- 并不<b>强</b>调重要性

### 效果

- 使用strong
	- 可以提高重要性

```html
重点在于<strong>了解strong元素</strong> 
```

- 不仅仅是
	- 像b一样
	- 只 在视觉上 引人瞩目

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221123-1669211370664)

- 可是 看起来 这些网页 
	- 长得都一样
- 这有什么意义吗？

### 爬虫

- strong可以在html代码中告诉搜索引擎
	- 在本网页中哪些文字相对是更重要(important)的
	- 搜索引擎就知道
		- 在搜索这些文字的时候
		- 本网页的排名应该更靠前

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221206-1670336236981)

- 爬虫会加强strong元素中内容的权重
	- 但不会加重b元素中内容的权重

### 重中之重

```html
重点在于<strong>重中之<strong>重</strong></strong> 
```

- 重点之中还有
	- 重点中的重点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221123-1669211557196)

- 浏览器看不出来
	- 但是 爬虫 得爬出来
	- 最后一个重 最重

### 总结 
- 这次我们研究了两个元素
	- b和strong
		- 都可以将文本变粗
	- 但是有区别
		- b 
			- 只是文本变粗 
			- 并不强调内容
		- strong 
			- 不止文本变粗 
			- 而且强调内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221123-1669211725166)

- 除了加粗
	- 可以设置倾斜吗？🤔
- 下次再说！👋
