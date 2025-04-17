---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次研究了
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

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2811710/uid1190679-20241006-1728217545388) 

### 表单

```
<form action="http://oeasy.org" method="POST">
    <SELECT NAME="flavor">
        <OPTION>Vanilla
        <OPTION>Strawberry
        <OPTION value="RumRasin">Rum and Raisin
        <OPTION selected>Peach and Orange
    </SELECT>
    <input type="submit">
</form>
```

- 提交结果
	- 传递的变量名是选择框(select)元素的name
	- 传递的变量值是所选option(选项)的value

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724888196285)

- 这有什么用呢？

### 规范提交信息

- select 和input相比
	- 可以提交的信息 更加明确

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2811710/uid1190679-20241006-1728217219217) 

- js如何操作选择元素呢？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2811710/uid1190679-20241006-1728217681934) 

- change触发事件
	- 可以写到元素属性中
	- onchange

### 操作选择元素

- select元素
	- 在发生改变的时候
	- 会触发onchange函数
- 就像button元素
	- 在点击的时候
	- 会触发onclick函数

```
<select id="mySelect" onchange="showMessage()">
  <option value="option1">选项 1</option>
  <option value="option2">选项 2</option>
  <option value="option3">选项 3</option>
</select>

<p id="message" style="display: none;">选择的选项值：</p>

<script>
  function showMessage() {
    var select = document.getElementById("mySelect");
    var selectedValue = select.value;
    var message = document.getElementById("message");
    message.innerHTML = "选择的选项值：" + selectedValue;
    message.style.display = "block";
  }
</script>
```

- 函数功能是将选择的选项
	- 输出到页面上id为message的p元素中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724888586549)


- 这里用到了style属性

### 回忆style属性

- span元素
	- 拥有一个属性 
		- style
	- 属性值为 
		- color: blue;
background: transparent;

```h5
<span style="color: blue;background: transparent;">blue</span>
```

- span元素
	- 拥有一个属性 style
	- 属性值为 
		- color: blue;
background: transparent;


- 分号<kbd>;</kbd>将 属性值 分成两个property

|property名值对|
|---|
| color:blue |
| background:transparent | 

- 冒号<kbd>:</kbd>将property 的 key 和value 分隔开

|property key | property value|
|---|---|
|color|blue|
|background|transparent|

- 我们这次是怎么用的呢？

### 本次应用

|display的值|作用|
|---|---|
|none|不显示|
|block|显示为块级元素|


```
<p id="message" style="display: none;">选择的选项值：</p>
```

- 这里面用到了style属性中的property
	- display

```
message.style.display = "block";
```

- 用js设置
	- id为message的p元素
	- 显示模式为块级元素

- select元素可以二级联动吗？

### 总结 🤔

- 这次了解了
	- 选择框 select
	- 里面的选项可以被选择
- 表单中传递的
	- 字段名是
		- 选择框select的name
	- 字段值是
	- 具体选择的 选项 option元素
- 我希望选择框之间可以联动

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2811710/uid1190679-20241006-1728217797798) 

- 可以吗？🤔
- 下次再说！👋

