---
show: step
version: 1.0
enable_checker: true
---

# h1 - h6 标题元素

## 回忆

- 上次接触到了
	- dl
	- dt
	- dd

|元素|完整英文|中文|
|---|---|---|
|dl|definition list|定义列表|
|dt|definition term|定义中的名词|
|dt|definition description|定义中的解释|

- 总共有三个list

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1720001678023)

- 他们都是
	- Grouping Content
	- 成族元素
	- 总结一下

### 成组元素

- 成组元素
	- group element

|元素名|含义|样式效果|
|---|---|---|
|p|段落(paragraph)|分段落、前后有距离|
|h1...h6|标题(headings)|有大纲级别和样式的段落|
|ul|无序列表(unordered_list)|无符号并列的段落|
|ol|有序列表(ordered_list)|有编号的段落|
|dl|定义列表(defined_list)|多对多的问答|

- 文本元素的典型代表是span

### span

- span元素
	- 没有任何含义
	- 也没有任何样式
	- 是最简单的文本元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726395666519)

- 有没有最简单的块级元素呢？

### div

- div就是最简单的块级元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726400920762)

- 具体什么意思呢？

### div

- div的意思是division
	- 来自于divide

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726401647934)

- 分开

### division

- 分开 一堆 东西就是
	- divide
- division
	- 除法
	- division
- dividend
	- 被除数
- divisor
	- 除数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726401793156)

- 分开之后成为部门、部分
	- division
	- 分开的地方
- 看看例子

### 例子

- 这里面的division的效果就是	
	- 把两个段落单独划分出来
	- division

```
<article lang="en-US">
 <h1>My use of language and my cats</h1>
 <p>My cat's behavior hasn't changed much since her absence, except
 that she plays her new physique to the neighbors regularly, in an
 attempt to get pets.</p>
 <div lang="en-GB">
  <p>My other cat, coloured black and white, is a sweetie. He followed
  us to the pool today, walking down the pavement with us. Yesterday
  he apparently visited our neighbours. I wonder if he recognises that
  their flat is a mirror image of ours.</p>
  <p>Hm, I just noticed that in the last paragraph I used British
  English. But I'm supposed to write in American English. So I
  shouldn't say "pavement" or "flat" or "colour"...</p>
 </div>
 <p>I should say "sidewalk" and "apartment" and "color"!</p>
</article>
```

- whatwg里面怎么说呢？

### whatwg

- div没有任何含义
	- 也没有任何的样式
	- 就是一个单纯的块级元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726401056415)

- 这类没有任何含义、样式的元素
	- 以前也接触过一个

### span

- 一拃

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726402203467)

- span元素也一样
	- 没有任何含义
	- 也没有任何的样式
	- 最基本的文本级别元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726402242335)

- 这两个有什么区别呢？

### 区别

- 块级元素包括
	- p、h1、ul
	- 都是单独起一行的

```
<div>我是div<span>我是span</span></div>
<p>我是p<em>我是em</em></p>
```

- 文本级别的元素有
	- em、b、strong
	- 都是在一行里面的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726402564376)

### 块级元素 

- 成组元素
	- group element

|元素名|含义|样式效果|
|---|---|---|
|p|段落(paragraph)|分段落、前后有距离|
|h1...h6|标题(headings)|有大纲级别和样式的段落|
|ul|无序列表(unordered_list)|无符号并列的段落|
|ol|有序列表(ordered_list)|有编号的段落|
|dl|定义列表(defined_list)|多对多的问答|
|div|无含义|无效果|


### 总结 🤔
- 这次接触到了div
	- 没有任何含义
	- 没有任何效果的块级元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240915-1726402697024)

- 就是划分(divide)出一块东西
	- 里面也可以有别的块级元素
- 总结本章内容吧!🤔
- 下次再说！👋
