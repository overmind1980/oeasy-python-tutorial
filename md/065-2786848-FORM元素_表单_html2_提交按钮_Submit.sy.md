---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次了解了字符实体的书写方法
- 有了这些实体
	- 就可以在网页里面写
		- 标签
		- 属性
		- 任意字符
- 规则是95年左右的时候
	- w3c在html第二版规范中制定的
	- 第二版规范仍然是Tim主导
- 不过实际标准已经成为了
	- 微软的ie和网景的navigator之间较量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723209502282)

- html2标准中出现了新元素
	- form 这个元素怎么用呢？？🤔

### 先看说明

- https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723461612967)

- Form元素有三个属性
	1. 动作
	2. 方法
	3. 编码格式

### 观察例子

- FORM 元素有两个属性

|属性名|属性值|作用|
|---|---|---|
|ACTION|"http://www.w3.org/sample"|目标地址|
|METHOD|"POST"|使用方法|

```
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<title>Sample of HTML Form Submission</title>
<H1>Sample Questionnaire</H1>
<P>Please fill out this questionnaire:
<FORM METHOD="POST" ACTION="http://www.w3.org/sample">
<P>Your name: <INPUT NAME="name" size="48">
<P>Male <INPUT NAME="gender" TYPE=RADIO VALUE="male">
<P>Female <INPUT NAME="gender" TYPE=RADIO VALUE="female">
<P>Number in family: <INPUT NAME="family" TYPE=text>
<P>Cities in which you maintain a residence:
<UL>
<LI>Kent <INPUT NAME="city" TYPE=checkbox VALUE="kent">
<LI>Miami <INPUT NAME="city" TYPE=checkbox VALUE="miami">
<LI>Other <TEXTAREA NAME="other" cols=48 rows=4></textarea>
</UL>
Nickname: <INPUT NAME="nickname" SIZE="42">
<P>Thank you for responding to this questionnaire.
<P><INPUT TYPE=SUBMIT> <INPUT TYPE=RESET>
</FORM>
```

- 这POST属性什么意思？
- 先看看效果

### 运行结果

- 这表单里面
	- 有很多类型的表单项

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723461915344)

- 尝试填写并提交

### POST

- 就像邮递员投递邮件一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240816-1723783715762)

- 将表单信息邮递到目标服务器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240816-1723783569645)

- 怎么提交呢？


### 填写并提交

- F12查看器
	- 切换到网络选项卡

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723462742659)

- 然后点击提交按钮

### 提交之后

- 被拦截了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723462909605)

- 目前提交的url是w3c.org
	- 尝试换个地址
	- http://lanqiao.cn/urlnotexist

### 替换结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723463274505)

- 替换的是ACTION属性
	- 原来提交到w3c.org
	- 现在提交到lanqiao.cn

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723463999021)

- 找到表单发出的那个请求
	- 表单有若干数据
	- 这些都是发给服务器的
	- 提交了什么给服务器呢？

### 默认内容

- 就算你什么都不填写
	- 表单会提交默认内容
	- 到服务器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723464862316)

- 如果填写了呢？

### 填写之后

- 表单提交
	- 填写好的表单项
	- 到服务器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723464906811)

- 这些表单项是由什么决定的呢？

### 查看文档

- 提价到服务器的是
	- Name/Value的名值对

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723465073524)

- 提交的表单项
	- 名称是来自于
	- 表单项元素(input)的
	- Name属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723465111695)

- 这些表单项是如何提交的呢？

### 提交按钮

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723465221714)

- 代码中的最后两个input元素
	- 类型分别是
		1. 提交 submit
		2. 重置 reset

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723465277439)

- 不过究竟
	- 什么是form
	- 什么是submit呢？

### 总结 🤔

- 这次我们研究了表单元素(form)
	- 表单元素的表单项是(input元素)
- input有两个属性很重要
	- Name 决定提交到服务器的字段
	- Type 决定表单项类型
		- 默认 文本框
		- radio 单选
		- chekcbox 复选
		- submit 提交按钮
		- reset 重置按钮

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240812-1723465640899)

- 究竟什么是form？🤔
- 又该如何理解submit呢？🤔
- 下次再说！👋