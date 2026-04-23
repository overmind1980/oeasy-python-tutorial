---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次 实现了
	- 动态分配路由的 效果
	- 可以把关于用户管理的路由
	- 全都放到一个`modules/user/__init__.py` 
	- 进行处理呢？
- 这样就可以实现模块封装了
- 真的可以把用户相关的模块封装起来吗？

### 确认用户名

- 如果当前session中的用户名是admin的话
- 将路由重定向到/user_manager

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675855030580)

- 我想将/user_manager
	- 放在独立的user_manager.py中
	- 可能吗？

### 引入user_manager.py

```
from flask import Blueprint

app_user = Blueprint("user", __name__)

@app_user.route('/user/')
def user():
    return 'oeasy redirects here o'
```

- 尝试在main.py中使用蓝图

### main.py

```
from flask import Flask,render_template,request,redirect,session
import traceback
import psycopg
import datetime
from db import pool
from config import app
from user_manager import app_user

app.register_blueprint(app_user)

@app.route('/')
def hello():
    current_user = session.get("current_user")
    print("current user:",current_user)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM login;")
            records = cur.fetchall()
            cur.close()
            conn.close()
    return render_template("show_data.html", l = records,current_user = current_user)

@app.route("/regist", methods=['POST', 'GET'])
def regist():
    username = request.form["username"]
    password = request.form["password"]
    print(username)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = "INSERT INTO login(username, password) VALUES(%s, %s)"""
                t = (username,password)
                cur.execute(sql,t)
                conn.commit()
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                return redirect("/")

@app.route("/login", methods=['POST', 'GET'])
def login():
    username = request.form["username"]
    password = request.form["password"]
    print(username)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = "SELECT * FROM login WHERE username=%s AND password=%s"
                t = (username,password)
                user = cur.execute(sql,t).fetchone()
                print("sql===",sql,";",t)
                print(type(user))
                session["current_user"] = str(user[0])
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  "failed to login as" + user[0]
            else:
                return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
```

### 路由结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675909767914)

- 想让用户管理界面 
	- 首先确认用户名是admin

### 注册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675909851426)

- 首先注册一个admin

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675909865592)

### 登录

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675909897158)

- 使用admin登录

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675909910830)

- session被更新

### 在用户管理页面确认登陆者

- 其他人无权访问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675910536598)

- 只有admin可以进行用户管理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675910494231)

- 需要显示出所有用户

### 修改user_manager.py

```
from flask import Flask,render_template,request,redirect,session,Blueprint
from db import pool

app_user = Blueprint("user", __name__)

@app_user.route('/user/')
def user():
    current_user = session["current_user"]
    print(current_user)
    if current_user == "admin":
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM login;")
                records = cur.fetchall()
                cur.close()
                conn.close()
                return render_template("user_manager.html", l = records,current_user = current_user)
    else:
        return "You are not admin<br/>"
```

- 需要制作渲染页

### 渲染页面

```
<!doctype html>
<title>Hello from Flask</title>
{% if current_user == "admin" %}
    <h1>Hello {{ current_user }}!</h1>
    {% for name in l %}
        <p>Hello {{ name }}!</p>
    {% endfor %}
{% else %}
    <h1>You dont have permission</h1>
{% endif %}
```

- 最终结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675913431554)

## 总结

- 这次制作了用户管理模块
	- 如果当前用户是admin的话
	- 就展示所有用户的信息
- 其实没有必要展示密码
- 而且没有必要展示admin的信息
- 这些可以调整吗？🤔
- 下次再说!from flask import Blueprint


