---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次了解了浏览器大战的开始
	- 微软牢牢占据了技术底层架构
	- 构建了操作系统
- 想要抢夺互联网相关生意
	- 网络接入
	- 浏览器
- 但微软软并不成功
	- AOL成功抵御了微软的进攻
	- 网景首战告捷
- 不过战争刚刚开始
	- 谁能成为真正的底层平台呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240817-1723901170839)

- 还是先看HTML语言中表单(Form)里
	- 更多的表单项目吧

### 复现例子

- 恢复 
	- 上次从html2扒下来的代码
	- 第一句可以知道doctype文档类型为html2.0

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

- 将例子缩减

### FORM属性

- 注意现在只有一个FORM表单
	- 表单提交的网址为oeasy.org/sample

```
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<title>Sample of HTML Form Submission</title>
<FORM METHOD="POST" ACTION="http://oeasy.org/sample">
<P>Male <INPUT NAME="gender" TYPE=RADIO VALUE="male">
<P>Female <INPUT NAME="gender" TYPE=RADIO VALUE="female">
<P><INPUT TYPE=SUBMIT> 
</FORM>
```

- 因为radio的name相同
	- 所以彼此之间有互斥的作用

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798883/uid1190679-20241206-1733452595814) 

- 先F12找到网络调版
	- 准备提交

### 提交

- 将表单提交试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724031129217)

- 确实把
	- 单选(radio)表单项name
	- 提交到指定的url了
- 表单在网络中 提交的
	- key 是 name属性
	- value 是 value属性

### 提交方法

- 修改了FORM的ACTION属性之后
	- 我们修改METHOD属性

```
<FORM METHOD="GET" ACTION="http://oeasy.org/sample">
```

- 将表单(FORM)的提交方法(METHOD)
	- 从邮递(POST)修改为直接得到(GET)

- FORM 元素 两个属性

|属性名|属性值|作用|
|---|---|---|
|ACTION|"http://oeasy.org/sample"|目标地址|
|METHOD|"GET"|使用方法|

### 提交结果

- 注意本次请求的方法为GET
	- 表单数据中没有内容
	- 内容放到了url中
- 这就是FORM的GET方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724032136056)

- 可以在本地	
	- `直接`得到单选按钮的值吗？

### 得到元素

- 需要 得到元素
	- 原来 用id属性 得到元素

```
document.getElementById
```

- 目前 的 只有NAME 属性
	- 两者区别是

```
<P>Male <INPUT NAME="gender" TYPE=RADIO VALUE="male">
<P>Female <INPUT NAME="gender" TYPE=RADIO VALUE="female">
```

|属性名|作用|
|---|---|
|name|表单中 提交的字段|
|id|前端js定位元素|

- 可以通过name获得元素吗？


### 在控制台里面尝试

- 可以根据NAME属性得到元素列表
	- 总共有两个input元素
	- TYPE都是单选类型
	- VALUE不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724034414881)

- 如何判断谁被选择了呢？

### 判断是否被选择

- 首先得到列表
	- 然后依次得到input元素
	- 通过input元素的checked属性进行判断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724035241803)

- 准备根据这些内容
	- 在本地输出单选按钮的情况

### 调试过程

- 要注意
	- js中的真
		- 是`小`写的true


```
<P>Male <INPUT NAME="gender" TYPE=RADIO VALUE="male">
<P>Female <INPUT NAME="gender" TYPE=RADIO VALUE="female">
<P><INPUT TYPE="button" value="提交" onclick="get_gender()">
<p id = "result">

<script>
    function get_gender(){
        radio_list = document.getElementsByName("gender");
        p = document.getElementById("result");
        for (i=0;i<radio_list.length;i++){
            radio = radio_list[i];
            if (radio.checked == true){
                p.textContent = radio.value;
            }
        }
    }
</script>
```

- 运行成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724035709367)

- 尝试做一个复杂点的
	- MBTI测试(16personalities)

### 四道单选

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724035961962)

### 得出结论

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724036953214)

### 总结 🤔

- 这次研究了单选(radio)按钮
	- 也是 常用的 表单(form)项(item)
	- 可以 用这些构成比较复杂的测试
	- 并且通过js来计算得分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724053323622)

- 我想做一mbti性格测试页面🤔
- 下次再说！👋

