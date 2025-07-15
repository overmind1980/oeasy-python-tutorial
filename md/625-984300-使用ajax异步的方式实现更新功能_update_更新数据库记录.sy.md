---
show: step
version: 1.0
enable_checker: true
---

#  使用ajax异步的方式实现更新功能_update_更新数据库记录

## 回忆上次

- 上次完成了异步删除的功能
	1. 首先从里浏览器发出一个DELETE的异步请求
	2. 后台接到请求后从数据库删除记录并返回异步请求的响应
	3. 浏览器接到相应后再异步发出一个查询请求
	4. 后台接到异步查询请求后，在数据库中查询，并返回json
	5. 浏览器接到json并且在页面进行展示
- 这次真的成功完成了异步删除的功能！
- CRUD中
	- 增加(Create)
	- 读取(Read)
	- 更新(Update)
	- 删除(Delete)
- 可以使用异步的方法完成更新吗？

### 首先重构网页 

- 列中的td都变成input
	- 使得列可以被修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685232098050)

- 添加一列
	- 更新按钮列

### 完整网页

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
  </script>
  </head>
  <body onload="refresh_data()">
	task_name<input id="task_name" name="task_name"><br/>
	task_detail<input id="task_detail" name="task_detail"><br/>
	<input type="button" onclick="insert_task()" value="go">
	<span id="result"></span>
	<span id="showData"></span>
  </body>
<html>

```

- 当更新按钮被按下时
	- 会触发什么函数呢？

### 更新函数

- 将id、task_name、task_detail 三项
	- 组成一个json文件
		- 然后把json文件异步地PUT到
			- /task/update去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685232206494)

- 真的可以异步发送这个请求吗？

### 点击结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685232465483)

- 不过目前后台没有处理相应的路由

### 后台代码

```python
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

```

### 后台路由

- 后台对于路由/task/update进行响应

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685233477110)

- 接收的发送方式(method)为PUT
- 回忆CRUD的四种方式

### CRUD

-  CRUD 是一个缩写
	-  指的是数据库中可以执行的四种基本操作
		-  创建 (Create)
		-  读取 (Read)
		-  更新 (Update)
		-  删除 (Delete)。

- 如下图所示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685234785569)

- 应该如何理解CRUD呢？
- 我们先去总结

## 总结
- 上次完成了异步更新的功能
	1. 首先从里浏览器发出一个PUT的异步请求
	2. 后台接到请求后从数据库更新记录并返回异步请求的响应
	3. 浏览器接到相应后再异步发出一个查询请求
	4. 后台接到异步查询请求后，在数据库中查询，并返回json
	5. 浏览器接到json并且在页面进行展示
- 这次CRUD完整啦！
	- 增加(Create)
	- 读取(Read)
	- 更新(Update)
	- 删除(Delete)
- 究竟应该如何理解CRUD呢？
- 下次再说！👋🏻
