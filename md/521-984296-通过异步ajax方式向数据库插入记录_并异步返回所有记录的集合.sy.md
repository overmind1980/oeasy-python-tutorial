---
show: step
version: 1.0
enable_checker: true
---

#  通过异步ajax方式向数据库插入记录_并异步返回所有记录的集合

## 回忆上次

- 上次从浏览器异步发送了一个http请求
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

### 首先准备数据库环境

1. 启动数据库服务
2. 进入oeasydb
3. 建表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685168042266)

4. 插入数据

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685168061922)

5. 查询

- 如何在flask中插入数据呢？

### main.py

```python3
from flask import Flask,request,jsonify
import json
from db import pool

app = Flask(__name__)

@app.route("/")
def home():
    return "Home"

@app.route("/task/insert",methods=["POST"])
def task_insert():
    task_dict = request.get_json()
    print("task_dict==========",task_dict)
    task_name = task_dict.get("task_name")
    task_detail = task_dict.get("task_detail")
    status_code = 200
    response_headers =  {"Content-Type": "application/json"}
    if not task_name or not task_detail :
        return "task_name and task_detail cannot be none", status_code, response_headers
    try:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                sql = """INSERT INTO task(task_name,task_detail) VALUES(%s,%s)"""
                t = (task_name, task_detail)
                cur.execute(sql,t)
                conn.commit()
                return "insert successful", status_code, response_headers
    except:
        return "insert failed!", status_code, response_headers

if __name__ == "__main__":
    app.run(debug=True)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685169456282)

- 确实可以异步插入数据
- 可以让网页接收到数据并显示吗？

### 网页

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
                alert("msg========="+msg+"==========");
                alert("msg========="+(msg=="insert successful")+"==========");
				document.getElementById("result").innerHTML=msg;
                if (msg == "insert successful"){
                    refresh_data();
                }
			}
		}
	}
    function refresh_data(){
        var jsonHttp = new XMLHttpRequest();
		jsonHttp.open("POST","/task/tasks",true);
		jsonHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        jsonHttp.send()
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
	<span id="result"></span>
	<span id="data"></span>
  </body>
<html>

```

- 显示结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685178678737)

- 确实将数据库读取结果显示出来了
- 可以显示得好看一点吗？

## 总结

- 这次使用ajax技术
	- 异步地向数据库插入数据
	- 并对数据库进行查询
	- 把查询结果再用异步的方式
	- 传回浏览器
- 浏览器上可以显示出数据库结果
	- 但是显示效果比较杂乱
	- 可以显示的更加规整一些吗？🤔
- 下次再说！👋🏻

