---
show: step
version: 1.0
enable_checker: true
---

#  通过异步ajax方式向数据库插入记录_并异步返回所有记录的集合

## 回忆上次

- 上次使用ajax技术
	- 异步地向数据库插入数据
	- 并对数据库进行查询
	- 把查询结果再用异步的方式
	- 传回浏览器
- 浏览器上可以显示出数据库结果
	- 但是显示效果比较杂乱
	- 可以显示的更加规整一些吗？

### 网页接收到的结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685179812812)

- 如何把这个json文件转化为表格文件呢？

### 修改main.py

- 首先将数据库结果集的形式进行修改
	- 使得传回到网页的是json格式的文件

```
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

@app.route("/task/tasks",methods=["POST","GET"])
def get_all_tasks():
    try:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                sql = """SELECT id,task_name,task_detail FROM task"""
                cur.execute(sql)
                records = cur.fetchall()
                l_tasks = []
                for record in records:
                    result = {}
                    result["id"] = record[0]
                    result["task_name"] = record[1]
                    result["task_detail"] = record[2]
                    l_tasks.append(result)
                str_tasks = str(l_tasks)
                print("str_tasks=========", str_tasks)
                return str(str_tasks)
    except:
        return "cannot get all tasks!"

if __name__ == "__main__":
    app.run(debug=True)
```

### 使用curl读取

```
curl "http://localhost:5000/"
curl "http://localhost:5000/task/tasks"
```

- 可以从数据库查询出结果
	- 并生成json文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685188656086)

### 修改网页

```
<!DOCTYPE html>
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
                if (msg == "insert successful"){
                    refresh_data();
                }
			}
		}
	}
    function refresh_data(){
		alert("refresh_data=========");
        var jsonHttp = new XMLHttpRequest();
		jsonHttp.open("POST","/task/tasks",true);
		jsonHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        jsonHttp.send()
		jsonHttp.onreadystatechange=function(){
			if (jsonHttp.readyState==4 && jsonHttp.status==200){
				var tasks_text = jsonHttp.responseText;
				alert("tasks_text=========" + tasks_text);
				var tasks = JSON.parse(tasks_text);
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
	<span id="showData"></span>
  </body>
<html>
```

- 并尝试将得到的字符串parse生成json对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685189001616)

- 在控制台得到如下报错信息
	- Uncaught SyntaxError: JSON.parse: expected property name or '}' at line 1 column 3 of the JSON data

### 解决问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685189111089)

- 要将单引号转化为双引号
- 然后才可以顺利将字符串转化为json对象

### 替换过程

```
var tasks_text = tasks_text.replace(/'/g, '"'); 
```

- 这句话可以将单引号批量替换为双引号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685189295870)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685189305439)

- 替换完成
- 如何将这个json转化为表格呢？

### 更新网页

```
<!DOCTYPE html>
<html>
  <head>
  <style>
    table{
      border-collapse:collapse;
      border:none;
    }
    table tr td{
      border: solid black 1px;
    }
    table th{
      background-color: black;
      color: white;
    }
  </style>
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
				var tasks_text = jsonHttp.responseText;
				var tasks_text = tasks_text.replace(/'/g, '"'); 
				var tasks = JSON.parse(tasks_text);
				var col = [];
				for (var i = 0; i < tasks.length; i++) {
					for (var key in tasks[i]) {
						if (col.indexOf(key) === -1) {
							col.push(key);
						}
					}
				}
		
				// CREATE DYNAMIC TABLE.
				var table = document.createElement("table");
		
				// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
		
				var tr = table.insertRow(-1);                   // TABLE ROW.
		
				for (var i = 0; i < col.length; i++) {
					var th = document.createElement("th");      // TABLE HEADER.
					th.innerHTML = col[i];
					tr.appendChild(th);
				}
		
				// ADD JSON DATA TO THE TABLE AS ROWS.
				for (var i = 0; i < tasks.length; i++) {
		
					tr = table.insertRow(-1);
		
					for (var j = 0; j < col.length; j++) {
						var tabCell = tr.insertCell(-1);
						tabCell.innerHTML = tasks[i][col[j]];
					}
				}
		
				// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
				var divContainer = document.getElementById("showData");
				divContainer.innerHTML = "";
				divContainer.appendChild(table);
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
	<span id="showData"></span>
  </body>
<html>
```

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685190147625)

## 总结

- 这次完成了
	- 从数据库读取数据
	- 生成json文件返回浏览器
	- 浏览器将json字符串转化为json对象
	- 然后在页面生成了表格table
- 如何在一开始就能够从数据库读取数据
- 并直接在网页里面进行显示呢？？🤔
- 下次再说！👋🏻
