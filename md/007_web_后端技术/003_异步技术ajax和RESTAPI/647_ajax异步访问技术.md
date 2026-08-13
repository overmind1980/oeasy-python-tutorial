---
show: step
version: 1.0
enable_checker: true
---

# 分页功能细节

## 回忆上次

- 上次 把分页的内容	
	- 彻底搞定了
- 可以翻页
- 也可以搜索
- 还可以设置页内记录数量
- 还有什么好玩的吗？ 🤔

### 建立最小系统

```
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, oeasy!</p>"

if __name__ == "__main__":
    app.run(debug=True)
```

- 效果如下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230219-1676795556732)

### 建立静态页

```
<html>
	<head> 
		<title>Title</title> 
		<script type="text/javascript">
			function testJsAjax(){
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.open("GET","http://localhost:5000/",true);
				xmlhttp.send();
				xmlhttp.onreadystatechange=function(){
					if (xmlhttp.readyState==4 && xmlhttp.status==200){
						var msg = xmlhttp.responseText;
						document.getElementById("msg").innerHTML=msg;
					}
				}
			}
		</script>
	</head> 
	<body> 
		<div id="msg"></div> 
		<input type="button" name="btn" value="jsAsynchoniz" onclick="testJsAjax()">
	</body>
</html>
```

- 当点击按钮时

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230219-1676795946297)

- 会异步发送请求
- 得到响应之后
- 再刷新页面
- 可以看到刷新过程吗？

### 修改代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230219-1676796030695)

- 修改代码
- 每次点击都将得到的数据
- 追加到页面上

## 总结

- 这次了解了异步发送请求的方法
	- ajax 技术
	- Asynchronous JavaScript And XML
- ajax能够
    - 不刷新页面更新网页
    - 在页面加载后从服务器请求数据
    - 在页面加载后从服务器接收数据
    - 在后台向服务器发送数据

- AJAX 并非编程语言
	- AJAX 仅仅组合了
		- 浏览器内建的 XMLHttpRequest 对象
			- 从 web 服务器请求数据
		- JavaScript 和 HTML DOM（显示或使用数据）

- Ajax 是一个令人误导的名称
	- Ajax 应用程序 
		- 可能使用 XML 来传输数据
		- 但也可能使用 纯文本或 JSON
- 可以通过浏览器用ajax方式提交一个json到后台吗？
- 下次再说!