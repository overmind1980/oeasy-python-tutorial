---
show: step
version: 1.0
enable_checker: true
---

#  浏览器刷新自动显示数据_并使用蓝图blueprint_将task模块封装到py文件

## 回忆上次

- 上次完成了
	- 从数据库读取数据
	- 生成json文件返回浏览器
	- 浏览器将json字符串转化为json对象
	- 然后在页面生成了表格table
- 如何在一开始就能够从数据库读取数据
- 并直接在网页里面进行显示呢？？🤔

### 网页直接加载

- 在网页加载的时候
	- body onload的时候
		- 调用refresh_data()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685190692130)

- 刷新网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685190746406)

- 可以把task封装成一个专门的task.py模块吗？

### 使用蓝图(blue_print)

- 编辑task.py

```
from flask import Flask,request,jsonify
import json
from flask import Blueprint
from db import pool

module_task = Blueprint("task", __name__)

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


```

- 整个app的目录结构如何呢？

### 目录结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685192270179)

- main.py 应该如何呢？

### main.py

```
from flask import Flask,request,jsonify
import json
from task import module_task

app = Flask(__name__)
app.register_blueprint(module_task)

@app.route("/")
def home():
    return "Home"


if __name__ == "__main__":
    app.run(debug=True)
```

- 去浏览器里面访问

### 访问结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685192454137)

- 查询和插入功能都很好用
- 能否有一个删除功能呢？

## 总结

- 这次将task封装成了模块task.py
	- 所有查询和插入功能都放到了task.py中
	- 显示的工作放到了static/task/task.html中
- 能否为这个task模块
	- 添加删除的功能
	- 并且在数据库中完成删除呢？
- 下次再说！👋🏻
