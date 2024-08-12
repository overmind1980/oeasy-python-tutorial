---
show: step
version: 1.0
enable_checker: true
---

#  通过ajax技术post提交json到flask后台

## 回忆上次

- 上次了解了异步发送请求的方法
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
- 可以通过浏览器用ajax方式提交一个json到后台吗

### 构建网页
- 新建一个api文件夹
	- 并且进入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685160308818)

- 在static/task/下面
	- 制作task.html

```
<html>
  <head>
  <script type="text/javascript">
    function go(){
		var task_name = document.getElementById("task_name").value;
		var task_detail = document.getElementById("task_detail").value;
		var para = {"task_name": task_name, "task_detail":task_detail};
		para = JSON.stringify(para);
        var jsonHttp = new XMLHttpRequest();
		jsonHttp.open("POST","/task/insert",true);
		jsonHttp.setRequestHeader("Content-type", "application/json;charset-UTF-8");
		jsonHttp.send(para);
	}
  </script>
  </head>
  <body>
	task_name<input id="task_name" name="task_name"><br/>
	task_detail<input id="task_detail" name="task_detail"><br/>
	<input type="button" onclick="go()" value="go">
	<span id="result">
  </body>
<html>
```

### 构建主程序

- 在api根下建立main.py

```
from flask import Flask,request,jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Home"

if __name__ == "__main__":
    app.run(debug=True)
```

- 并且启动flask服务器

```
python3 main.py >> flask.log 2>&1
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685160434935)

### 观察网页

- 访问静态页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685160530229)

- 填写数据
	- 并点击go提交

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685160616705)

### 提交请求

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685160761487)

- 确实发出了请求
- 并且请求中有json

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685160784030)

### 后台响应

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685160797071)

- 后台由于没有对应路由的处理函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685160818456)

- 返回了404的响应
- 如何让后台能够响应这个路由呢？

### 建立路由

```
from flask import Flask,request,jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Home"

@app.route("/task/insert",methods=["POST"])
def task_insert():
    return "hahaha"

if __name__ == "__main__":
    app.run(debug=True)
```

- 响应结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685160947752)

- 可以把这个 响应结果
	- 在网页中显示出来吗？

### 修改网页

```html
<html>
  <head>
  <script type="text/javascript">
    function go(){
		var task_name = document.getElementById("task_name").value;
		var task_detail = document.getElementById("task_detail").value;
		var para = {"task_name": task_name, "task_detail":task_detail};
		para = JSON.stringify(para);
        var jsonHttp = new XMLHttpRequest();
		jsonHttp.open("POST","/task/insert",true);
		jsonHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		jsonHttp.send(para);
		jsonHttp.onreadystatechange=function(){
			if (jsonHttp.readyState==4 && jsonHttp.status==200){
				var msg = jsonHttp.responseText;
				document.getElementById("result").innerHTML=msg;
			}
		}
	}
  </script>
  </head>
  <body>
	task_name<input id="task_name" name="task_name"><br/>
	task_detail<input id="task_detail" name="task_detail"><br/>
	<input type="button" onclick="go()" value="go">
	<span id="result">
  </body>
<html>
```

- 显示结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685161363414)

- 可以在后台对json进行什么样的处理吗？

### 后台处理

```
from flask import Flask,request,jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Home"

@app.route("/task/insert",methods=["POST"])
def task_insert():
    body = request.get_json()
    status_code = 200
    response_headers =  {"Content-Type": "application/json"}
    return body, status_code, response_headers

if __name__ == "__main__":
    app.run(debug=True)

```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685167210903)

## 总结

- 这次从浏览器异步发送了一个http请求
	- 使用的还是ajax
	- 发送的内容是json文件
- 服务器端
	- 可以对这个异步请求进行处理
	- 返回的还是一个原样的json文件
- 浏览器接收到异步请求的响应之后
	- 在浏览器端显示出服务器返回的json文件
	- 整个流程完成
- 我们可以用这种方式
	- 异步地向数据库里面插入一条记录
	- 然后再在网页里面把所有记录集显示出来吗？🤔
- 下次再说！