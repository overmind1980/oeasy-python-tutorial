---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次了解了亚马逊
	- 世界上最大的电子书店
	- 从图书目录开始
	- 在没有实体店和仓库的情况下
	- 做成了世界上最大的网上书店

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240823-1724420988868)

- 登陆电视商务网站
	- 肯定需要密码
- 密码是如何录入系统的呢？🤔

### 最初结构

- https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2.4

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240825-1724572158218)

- 将name这个input的type设置为password

### 目前代码

```
<FORM METHOD="POST" ACTION="http://oeasy.org/fun">
<P>Your name: <INPUT NAME="name" TYPE="password">
<P><INPUT TYPE=SUBMIT> <INPUT TYPE=RESET>
</FORM>
```

- 运行效果
	- 文本框中输入的按键
	- 都看不到具体的字符
	- 起到了保密的作用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240825-1724573394823)

- 提交效果
	- 提交的时候
	- 能够把输入的字符正确提交到服务器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240825-1724573410894)

- 密码必须得有大小写、数字、符号
	- 应该怎么修改？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733831664391) 

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Validation</title>
    <style>
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <form id="passwordForm" method="POST" action="http://lanqiao.cn/fun" onsubmit="return validatePassword()">
        <p>Your name: <input type="text" name="name" id="name"></p>
        <p>Your password: <input type="password" name="password" id="password"></p>
        <p class="error" id="error"></p>
        <p><input type="submit" value="Submit"> <input type="reset" value="Reset"></p>
    </form>

    <script>
        function validatePassword() {
            const password = document.getElementById('password').value;
            const errorElement = document.getElementById('error');

            // 正则表达式用于验证密码是否包含大写字母、小写字母、数字和符号
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).+$/;

            if (passwordPattern.test(password)) {
                errorElement.textContent = ''; // 清除错误信息
                return true; // 验证通过，允许提交表单
            } else {
                errorElement.textContent = '密码必须包含大小写字母、数字和符号！';
                return false; // 验证未通过，阻止表单提交
            }
        }
    </script>
</body>
</html>
```

### 尝试验证

- 密码必须包含大写字母、小写字母和数字
	- 不满足不能提交

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733832149100) 

- F12切换到网络选项卡
	- 准备提交数据

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733832213961) 

### 表单数据

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733832377741) 

- 传输了两个字段过去
	- name
	- password
	- 怎么传的呢？

```
<p>Your name: <input type="text" name="name" id="name"></p>
<p>Your password: <input type="password" name="password" id="password"></p>
```

- name和id这两个属性
	- 有什么区别吗？

### 属性对比

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733832659974)

- name是网络上传输表单用的

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733832704873) 

- id是dom树中
	- 确定元素用的
- 单选按钮也是这样的吗？

### 单选按钮

- 试着手动添加表单项目

```
e<input name="Extraversion" type="radio" id="e">
i<input name="Extraversion" type="radio" id="i">
```

- 注意这次name和id不同

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733836655408) 

- 准备提交看结果

### 提交结果

- 两个radio互斥的原因就是因为
	- 他们属于同一个name
- 提交后 观察网络信息
	- 传输的确实是name

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733836630486) 

- id干什么用呢？

### 使用id

```
extra = document.getElementById("Extraversion");
extra = document.getElementById("e");
```

- 通过id获得dom中的元素

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733836744947) 

- 可以通过name获得相关元素吗？

### 通过name获得dom中的元素

- 注意	
	- id得到的是单数Element
	- name得到的是复数Elements

```
extra = document.getElementsByName("Extraversion");
```

- 根据name可以得到input元素的列表
	- 可以在本地使用js控制dom中的元素
	- 还可以通过form在网络中传输数据

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733836952924) 

- 这是为什么用name来传输数据呢？

### 观察

- 注意这是html2中的例子
	- 从1995年左右的网页标准
	- 就规定name属性能够传递参数的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240827-1724763700952)

- 如果不是单选按钮
	- 而是复选框呢？

### 替换

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733837172467) 

- 替换结果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733837212308) 

### 传输情况

- 我们可以看到
	- 相同name的复选框
	- 传过来的是列表

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733839416248) 

- 还可以用js来访问name吗？

### 用js访问name


```
extra = document.getElementsByName("Extraversion");
```

- 得到了两个input元素
	- type为checkbox

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2799869/uid1190679-20241210-1733839587694) 


### 总结 🤔

- 这次研究了密码域(password)
	- 密码域在填写的时候不回显
- 两个属性 各有各的用处

|属性名称|主要作用|
|---|---|
|name|网络传递表单数据|
|id|js得到元素进行操作|

- 还有什么好用的表单控件吗？🤔
- 下次再说！👋

