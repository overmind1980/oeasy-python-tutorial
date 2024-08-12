---
show: step
version: 1.0
enable_checker: true
---

# cookie效果

## 回忆上次

- 上次 研究了 会话(session)
- 登陆之后
	- 在 服务器和浏览器之间
	- 添加了 一个 session
	- session本质上 是 根据secret设置的cookie

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675851208059)

- session 会在多长时间 断开呢？


### 参数设置

- session.permanent 
	- 设置 session 模式
- permanent_session_lifetime 
	- 设置 session断开时间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230131-1675133627789)


- 先观察一下这两项的默认值

### 默认值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675852131583)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675852113204)


```
session.permanent = True
app.permanent_session_lifetime = datetime.timedelta(days=31)
```

- 设置session保持时间为31天


### `main.py`

```from flask import Flask,render_template,request,redirect,session
import traceback
import psycopg
import datetime
from db import pool

app = Flask("__name__")
app.secret_key = b'_5#y2L"Fdfq/SDFGBDGSDGWERVC#@#%'

@app.route('/')
def hello():
    current_user = session.get("current_user")
    print("current user:",current_user)
    print(session.permanent)
    print(app.permanent_session_lifetime)
    session.permanent = True
    app.permanent_session_lifetime = datetime.timedelta(days=31)
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

### 过期时间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675852310684)

- 过期时间为31天后
- 如果刷新/会如何呢？

### 刷新结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675852367691)

- 过期日期不会更改
- 除非重新登陆

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675852419077)

- 这app的secret_key非常重要
- 要放在一个config.py中
- 并且对于git要ignore

### config.py

```
from flask import Flask
app = Flask("__name__")
app.secret_key = b"ASDSHQWFW@#$!123fffdasdfdasf1233$5674%^#Q@$"
```

- 制作config.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675865030387)

- 在main.py中导入config.py中的app

## 总结

- 这次设置了 session保持31天

```
session.permanent = True
app.permanent_session_lifetime = datetime.timedelta(days=31)
```

- 如果当前用户名是admin的话
- 能否进行用户管理操作呢？
- 可以删除用户吗？🤔
- 下次再说!