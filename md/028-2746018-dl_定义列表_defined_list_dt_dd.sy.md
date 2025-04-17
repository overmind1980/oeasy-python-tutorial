---
show: step
version: 1.0
enable_checker: true
---

# h1 - h6 标题元素

## 回忆

- 上次研究了
	- ol 有序列表
	- menu 菜单
- ol有三个参数
	- reversed
	- start
	- type
- 还有什么list吗?

### dl

- dl
	- definition list
	- 定义列表
	- https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1720000421824)

- 定义列表是一个组合
	- 一个以上的key
	- 对应一个以上的value


### 新例子

```
<dl>
  <dt> Last modified time </dt>
  <dd> 2004-12-23T23:33Z </dd>
</dl>
```

- 一个问题
	- 上次修改时间
- 一个答案
	- 2004-12-23 

### 一问一答

- 所以dl 叫做
	- 定义列表
	- definition list

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240729-1722229389389)

- dt、dd是什么意思呢？ 

### dt、dd

```
<dl>
 <dt><dfn>Apartment</dfn>, n.</dt>
 <dd>An execution context grouping one or more threads with one or
 more COM objects.</dd>
 <dt><dfn>Flat</dfn>, n.</dt>
 <dd>A deflated tire.</dd>
 <dt><dfn>Home</dfn>, n.</dt>
 <dd>The user's login directory.</dd>
</dl>
```

|元素|完整英文|中文|
|---|---|---|
|dt|definition term|定义中的名词|
|dt|definition description|定义中的解释|

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1720001039127)

### 一问多答

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240729-1722229493736)

```
<dl>
  <dt> Authors </dt>
  <dd> Robert Rothman </dd>
  <dd> Daniel Jackson </dd>
 </div>
</dl>
```

### 多问一答

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240729-1722229616544)

```
<dl>
  <dt> Authors </dt>
  <dt> Editors </dt>
  <dd> Daniel Jackson </dd>
</dl>
```

### 多问多答

```
<dl>
  <dt> Authors </dt>
  <dt> Editors </dt>
  <dd> Robert Rothman </dd>
  <dd> Daniel Jackson </dd>
</dl>
```

### 实际应用

```
<dl>
 <div>
  <dt> Last modified time </dt>
  <dd> 2004-12-23T23:33Z </dd>
 </div>
 <div>
  <dt> Recommended update interval </dt>
  <dd> 60s </dd>
 </div>
 <div>
  <dt> Authors </dt>
  <dt> Editors </dt>
  <dd> Robert Rothman </dd>
  <dd> Daniel Jackson </dd>
 </div>
</dl>
```

- 最后一组是
	- 两个名次 对应 两个定义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1720000826502)

### 另一个例子

```
<dl>
 <dt> Authors
 <dd> John
 <dd> Luke
 <dt> Editor
 <dd> Frank
</dl>
```

- 两组名值对
	- 作者两人
	- 编辑一人

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1720000582586)

### 另一个例子

```
<dl>
 <dt lang="en-US"> <dfn>color</dfn> </dt>
 <dt lang="en-GB"> <dfn>colour</dfn> </dt>
 <dd> A sensation which (in humans) derives from the ability of
 the fine structure of the eye to distinguish three differently
 filtered analyses of a view. </dd>
</dl>
```

- 一组名值对
	- 两个名词
	- 一个定义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1720000703366)

### 单词词典

```
<dl>
 <dt><dfn>happiness</dfn></dt>
 <dd class="pronunciation">/ˈhæpinəs/</dd>
 <dd class="part-of-speech"><i><abbr>n.</abbr></i></dd>
 <dd>The state of being happy.</dd>
 <dd>Good fortune; success. <q>Oh <b>happiness</b>! It worked!</q></dd>
 <dt><dfn>rejoice</dfn></dt>
 <dd class="pronunciation">/rɪˈdʒɔɪs/</dd>
 <dd><i class="part-of-speech"><abbr>v.intr.</abbr></i> To be delighted oneself.</dd>
 <dd><i class="part-of-speech"><abbr>v.tr.</abbr></i> To cause one to be delighted.</dd>
</dl>
```

- 两个单词
	- dfn 是 Text-level的元素
	- 含义是definition
	- 可以 用于 dt中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1720001227364)

- 这dl、dt、dd 
	- 什么时候有的呢?

### 昨日重现

- 在最早的时候
	- html1讨论标签的时候就有
	- 这三个元素了
	- http://info.cern.ch/hypertext/WWW/MarkUp/Tags.html
	- 当时元素名大写

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240703-1720001451645)

- dl 明确为 
	- glossary 
		- 术语汇编
	- definition list
		- 定义列表

### list总结

- 我们接触到了三个列表

|元素名|英文含义|中文含义|内部元素|
|---|---|---|---|
|ul|ordered list|有序列表|li|
|ol|unordered list|无序列表|li|
|dl|definition list|定义列表|dt、dd|

### 总结 🤔
- 这次接触到了
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
	- 总结一下吧!🤔
- 下次再说！👋
