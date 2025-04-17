---
show: step
version: 1.0
enable_checker: true
---

# 定义元素 dfn 缩写元素 abbr definition abbreviation 

## 回忆

- 上次了解了倾斜字体的元素
	- i 
		- 只是倾斜 
		- 不做强调
	- em 
		- 除了倾斜
		- 还做强调

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670379022909)

- 同样是倾斜效果的元素还有
	- dfn
- 具体什么意思呢？🤔

### 搜索dfn

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670379074893)

### 查看定义

- dfn 代表了对于术语的定义
	- 定义就是definition

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669282111895)

- 具体来说什么define是什么呢？

### define

- 来自于拉丁词根

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670383344546)

- de
	- 就是完整的
- fine 
	- 就是好了
	- fine了
	- finish了
- define的意思是
	- 完整的好了
	- 说明白了
	- 定义清楚了
- 我们来试试代码

### dfn

- dfn 就是 definition

```html
<dfn title="definition">dfn</dfn>
```

- 什么叫做属性呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669284108438)

- 如果dfn元素
	- 有一个title属性
		- 属性的值就应该是dfn内容的定义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669283666294)

- dfn 3个字倾斜效果
	- 鼠标移动到文字之上后
	- 会出现title属性的值
- 这就是关于dfn(定义元素)的定义
- 这里面提到的属性attribute
	- 有关于属性的定义吗？

### 属性 attribute

- 看起来有点复杂

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669285348525)

- 属性 是 元素的属性
	- 属性 是 附加在元素上的性质
- 继续回看dfn

### dfn之外

- dfn

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669285208799)

- 如果dfn
	- 有子元素节点
	- 但没有子文本
	- 而且子元素是abbr 
		- abbr并且有个title
	- 那么这个title属性就是整个dfn的定义

- 我们看看例子

### 例子

- 第1个红框中
	- dfn元素中嵌套abbr元素
	- abbr元素有title
	- 符合要求
- 这时abbr的title
	- 其实就是dfn的title

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669285467079)

- 不过这个abbr是什么意思呢？

### abbr

- abbr 
	- abbriviation
		- 缩写
	- title就是缩写对应的全拼

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669285657992)

- abbriviation怎么来的呢？

### 词源

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670383805102)

- ad	
	- to 
- breviare
	- brief一点
	- 目前特指缩写

### 例子

- https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669285706243)

- 去试试

### 代码

- 这里有个定义
	- 什么的定义？
		- 关于whatwg缩写的定义

```html
<dfn id="whatwg">
	<abbr title="Web Hypertext Application Technology Working Group">
	WHATWG
	</abbr>
</dfn>
```

- 火狐访问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669286038686)

- 具体效果
	- 字体倾斜了
	- 而且光标移动到字体之上会有abbr的title出现
- 只有abbr会如何呢？

### abbr

- 只有abbr的话

```html、
<abbr title="Web Hypertext Application Technology Working Group">
WHATWG
</abbr>
```

- 浏览效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669286225328)

- 字体没有倾斜
	- 光标移动上面之后
	- 依然有提示可以看

### 总结 🤔

- 这次学的是dfn和abbr

|元素|含义|拼写|效果|实现|
|---|---|---|---|---|
|dfn |定义 |definition|斜体+下点划线|title属性|
|abbr |缩写| abbriviation|下点划线|title属性|

- 这两个元素有点像
	- dfn还可以包含abbr元素
	- 写关于缩写的定义
- 那能否
	- 写文本的注音呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669293995268)

- 下次再说！👋
