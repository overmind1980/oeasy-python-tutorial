---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次研究了密码域(password)
	- 密码域在填写的时候不回显
- 两个属性 各有各的用处

|属性名称|主要作用|
|---|---|
|name|网络传递表单数据|
|id|js得到元素进行操作|

- 还有什么好用的表单控件吗？🤔

### 最初结构

- https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2.4

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240827-1724767927035)

- textarea元素
	- 是干什么用的呢？

### h5中的定义

- https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240828-1724841284557)

- 有两个属性

|名称|作用|数量|
|---|---|---|
|rows|行数|20|
|cols|列数|40|

- 去尝试做个
	- 多行文本域

### 多行文本域

```
<form id="myForm">
    多行文本
    <textarea id="my_text" rows="20" cols="40">请在这里录入</textarea>
    <input type="button" value="提交" onclick="check()">
</form>

<p id="message"></p>

<script>
    function check(){
        var my_text = document.getElementById("my_text");
        var message = document.getElementById("message");
        message.innerHTML = my_text.value; 
    }
</script>
```

- 点击效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240828-1724845970796)

- 可以来多行吗？

### 多行效果

- 回车效果被忽略

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240828-1724847454849)

- html对于文本中的空格回车
	- 都会忽略
	- 回车只认<br>
- 如何修改？

### 回车符换br

```
<form id="myForm">
    多行文本
    <textarea id="my_text" rows="20" cols="40">请在这里录入</textarea>
    <input type="button" value="提交" onclick="check()">
</form>

<p id="message"></p>

<script>
    function check(){
        var my_text = document.getElementById("my_text");
        var text = my_text.value;
        var newText = text.split("\n").join("<br>");
        var message = document.getElementById("message");
        message.innerHTML = newText; 
    }
</script>
```

- 效果达成！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240828-1724847643292)

- ୧(﹒︠ᴗ﹒︡)୨
- 如果想要过滤关键词呢？

### 过滤关键词

```
<form id="myForm">
    多行文本
    <textarea id="my_text" rows="20" cols="40">请在这里录入</textarea>
    <input type="button" value="提交" onclick="check()">
</form>

<p id="message"></p>

<script>
    function check() {
        var my_text = document.getElementById("my_text");
        var text = my_text.value;
        var filteredText = text.replace(/oeasy/g, '');
        var message = document.getElementById("message");
        message.innerHTML = filteredText;
    }
</script>
```

- 过滤完成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240828-1724847769008)

- 回顾一下

### html2例子

- html2例子中
	- https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2.4
	- 所有的表单域都了解了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240828-1724847850232)

- form元素
	- action属性 | 提交到的目标地址
	- method属性 ｜ 提交方法
		- GET | url中直接传递
		- POST|  将数据打包邮递
- input元素
	- id属性 | js操作的dom对象名	 
	- name属性 | 表单传的参数名
	- type属性|  类型
		- 默认 | 文本域
		- radio|  单选
		- checkbox | 复选
		- button|  按钮
		- password | 密码
		- submit| 提交
	- checked属性 默认选择
- textarea元素 
	- rows属性
	- cols属性
- 这是否是html2中所有的表单元素呢？

### 观察目录

- https://www.w3.org/MarkUp/html-spec/html-spec_toc.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240828-1724848156230)

- 还有个元素
	- select选择

### 总结 🤔

- 这次研究了
	- textarea元素
	- 多行文本域
- 可以设置多行多列
	- rows
	- cols
- 完成了
	- 回车符换成br元素
	- 对关键词进行过滤
- 发现html2中
	- 还有个
	- 选择元素
	- select
- 怎么用呢？🤔
- 下次再说！👋

