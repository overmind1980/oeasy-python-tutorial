---
show: step
version: 1.0
enable_checker: true
---

#  使用ajax异步的方式实现查询功能_SELECT_数据库记录_WHERE

## 回忆上次

- 上次了解了CRUD
	- 数据持久层的增查改删操作
	- 最早是基于各种自定义的数据存储格式
	- 后来基于数据库统一用sql语言来操作
	- 到了互联网时代基于url完成操作
- 我们的这个应用还不能进行查询
	- 如何才能实现查询效果呢？🤔
- 浏览器是发起异步请求的开端
	- 我们还是从浏览器开始

### 首先添加按钮

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685240153445)

- 然后添加 处理函数

### 处理函数

- 从浏览器发送一个异步请求

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685240792743)

- 确实发送了一个json请求

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685265168427)

### 网页代码

```html
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
    function update_task(task_id){
		var task_name = document.getElementById("task_name_" + task_id).value;
		var task_detail = document.getElementById("task_detail_" + task_id).value;
		var para = {"task_id": task_id,"task_name": task_name,"task_detail": task_detail};
		para = JSON.stringify(para);
        var jsonHttp = new XMLHttpRequest();
		jsonHttp.open("PUT","/task/update",true);
		jsonHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		jsonHttp.send(para);
		jsonHttp.onreadystatechange=function(){
			if (jsonHttp.readyState==4 && jsonHttp.status==200){
				var msg = jsonHttp.responseText;
				document.getElementById("result").innerHTML=msg;
                if (msg == "delete successful"){
                    refresh_data();
                }
			}
		}
	}

    function delete_task(task_id){
		var para = {"task_id": task_id};
		para = JSON.stringify(para);
        var jsonHttp = new XMLHttpRequest();
		jsonHttp.open("DELETE","/task/delete",true);
		jsonHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		jsonHttp.send(para);
		jsonHttp.onreadystatechange=function(){
			if (jsonHttp.readyState==4 && jsonHttp.status==200){
				var msg = jsonHttp.responseText;
				document.getElementById("result").innerHTML=msg;
                if (msg == "delete successful"){
                    refresh_data();
                }
			}
		}
	}

    function insert_task(){
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
                col.push("delete");
                col.push("update");
		
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
                        if (j == col.length - 2){
                            tabCell.innerHTML = "<input type=\"button\" value=\"delete\" onclick=\"delete_task(" + tasks[i][col[0]]+ ")\">"
                            continue;
                        }
                        if (j == col.length - 1){
                            tabCell.innerHTML = "<input type=\"button\" value=\"update\" onclick=\"update_task(" + tasks[i][col[0]]+ ")\">"
                            continue;
                        }
						tabCell.innerHTML = "<input type=\"textbox\" id = \"" + col[j] + "_" + tasks[i][col[0]] + "\" value=\"" + tasks[i][col[j]] + "\">";
					}
				}
		
				// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
				var divContainer = document.getElementById("showData");
				divContainer.innerHTML = "";
				divContainer.appendChild(table);
			}
		}
    }
    function search_tasks(){
		var task_name = document.getElementById("task_name").value;
		var task_detail = document.getElementById("task_detail").value;
		var para = {"task_name": task_name, "task_detail":task_detail};
		para = JSON.stringify(para);
        var jsonHttp = new XMLHttpRequest();
		jsonHttp.open("POST","/task/search_tasks",true);
		jsonHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		jsonHttp.send(para);
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
                col.push("delete");
                col.push("update");
		
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
                        if (j == col.length - 2){
                            tabCell.innerHTML = "<input type=\"button\" value=\"delete\" onclick=\"delete_task(" + tasks[i][col[0]]+ ")\">"
                            continue;
                        }
                        if (j == col.length - 1){
                            tabCell.innerHTML = "<input type=\"button\" value=\"update\" onclick=\"update_task(" + tasks[i][col[0]]+ ")\">"
                            continue;
                        }
						tabCell.innerHTML = "<input type=\"textbox\" id = \"" + col[j] + "_" + tasks[i][col[0]] + "\" value=\"" + tasks[i][col[j]] + "\">";
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
  <body onload="refresh_data()">
	task_name<input id="task_name" name="task_name"><br/>
	task_detail<input id="task_detail" name="task_detail"><br/>
	<input type="button" onclick="insert_task()" value="add">
	<input type="button" onclick="search_tasks()" value="search">
	<span id="result"></span>
	<span id="showData"></span>
  </body>
<html>
```

### 路由处理函数

- 接受这个路由
	- 并且做出一些处理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685267167516)

- 注意 模糊查询中 %的处理方式

### 完整代码

```
from flask import Flask,request,jsonify
import json
from flask import Blueprint
from db import pool

module_task = Blueprint("task", __name__)

@module_task.route("/task/delete",methods=["DELETE"])
def task_delete():
    task_dict = request.get_json()
    print("task_dict==========",task_dict)
    task_id = task_dict.get("task_id")
    status_code = 200
    response_headers =  {"Content-Type": "application/json"}
    if not task_id:
        return "task_id is none", status_code, response_headers
    try:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                sql = """DELETE FROM task WHERE id=%s"""
                t = (task_id, )
                print("sql=========",sql)
                cur.execute(sql,t)
                conn.commit()
                return "delete successful", status_code, response_headers
    except:
        return "delete failed!", status_code, response_headers

@module_task.route("/task/update",methods=["PUT"])
def task_update():
    task_dict = request.get_json()
    print("task_dict==========",task_dict)
    task_id = task_dict.get("task_id")
    task_name = task_dict.get("task_name")
    task_detail = task_dict.get("task_detail")
    status_code = 200
    response_headers =  {"Content-Type": "application/json"}
    if not task_name or not task_detail :
        return "task_name and task_detail cannot be none", status_code, response_headers
    try:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                sql = """UPDATE task SET task_name=%s, task_detail=%s WHERE id=%s"""
                print(sql)
                t = (task_name, task_detail,task_id)
                print(t)
                cur.execute(sql,t)
                conn.commit()
                return "update successful", status_code, response_headers
    except:
        return "update failed!", status_code, response_headers

@module_task.route("/task/insert",methods=["POST"])
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

@module_task.route("/task/tasks",methods=["POST","GET"])
def get_all_tasks():
    try:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                sql = """SELECT id,task_name,task_detail FROM task ORDER BY id"""
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

@module_task.route("/task/search_tasks",methods=["POST","GET"])
def search_tasks():
    task_dict = request.get_json()
    print("task_dict==========",task_dict)
    task_name = task_dict.get("task_name")
    task_detail = task_dict.get("task_detail")
    if task_name == None :
        return "{\"msg\":\"task_name is None\"}"
    if task_detail == None:
        return "{\"msg\":\"task_detail is None\"}"
    try:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                pattern1 = "%" + task_name + "%"
                pattern2 = "%" + task_detail + "%"
                sql = """SELECT id,task_name,task_detail FROM task WHERE task_name LIKE %s and task_detail LIKE %s ORDER BY id"""
                print(sql)
                t = (pattern1, pattern2)
                print(t)
                cur.execute(sql,t)
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
        return "{\"msg\":\"cannot search tasks\"}"
```

### 搜索结果

- 确实可以模糊查询

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685267312371)

## 总结
- 这通过异步的方式实现了查询
	1. 浏览器异步向服务器发请求
	2. 服务器接到请求查询数据库
	3. 服务器将查询结果作为异步请求的响应传回浏览器
	4. 浏览器做数据呈现

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685268522701)

- 网址
	- https://github.com/overmind1980/flask_restful_api

- 这样我们就用异步的方式建立起了一个restful的服务
- 并且可以通过浏览器进行访问
- pythonweb还有什么好玩的吗？？🤔
- 下次再说！👋🏻