---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次研究了cookie
	- 小甜点
	- 真的很好吃
- 这样可以往浏览器里面写一些东西
- 告诉浏览器浏览器我是谁
- 比如正确登录之后的用户名
- 这个东西怎么存呢?

### 写一个session

- 直接写cookie太不安全了
	- 常见的方式是session

- session 就是 会话
	- 可以 在登陆成功的 时候
	- 设置session

```
from flask import Flask,render_template,request,redirect,session
import traceback
import psycopg
from db import pool

app = Flask("__name__")
app.secret_key = b'_5#y2L"Fdfq/SDFGBDGSDGWERVC#@#%'

@app.route('/')
def hello():
    with pool.connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM login;")
            records = cur.fetchall()
            cur.close()
            conn.close()
    return render_template("show_data.html", l = records)

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
                session["current_user"] = user
                cur.close()
                conn.close()
                return user[0] + " is logon!"
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
```

### 重点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675826758706)

- 总共有三处改动
- 改了之后有什么效果呢？

### 有个东西存在浏览器上面了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675826860830)

- 他的名称叫做一个session
	- 他本质上是一个cookie
	- 可以在其他页面通过session得到用户名吗？

### 重定向到首页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675850048129)

- 通过session得到current_user

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674483353165)

- 可以把登录状态展示在网页上吗？

### 修改代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675850305524)

- 网页模板也需要修改

### 网页模板

```
<!doctype html>
<title>Hello from Flask</title>
{{username}} logon!<br>
{% for name in l %}
  <h1>Hello {{ current_user }}!</h1>
{% endfor %}
```

- 最终效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674483619040)

- 这样就得到了
	- 登录后的session信息
- 如何理解session呢？

### main.py

```
from flask import Flask,render_template,request,redirect,session
import traceback
import psycopg
from db import pool

app = Flask("__name__")
app.secret_key = b'_5#y2L"Fdfq/SDFGBDGSDGWERVC#@#%'

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
                return  username + " already exists"
            else:
                return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
```

### show_data.html

```
<!doctype html>
<title>Hello from Flask</title>
{{ current_user}} is logon!
{% for name in l %}
  <h1>Hello {{ name }}!</h1>
{% endfor %}
```

### session

- 会话
	- 指的是浏览器和服务器之间的会话

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230131-1675135097159)

- 这个session可以保持多久的时间呢？

## 总结

- 这次 研究了 会话(session)
- 登陆之后
	- 在 服务器和浏览器之间
	- 添加了 一个 session
	- session本质上 是 根据secret设置的cookie

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675851208059)

- session 会在多长时间 断开呢？
- 下次再说!