---
show: step
version: 1.0
enable_checker: true
---

# cookie效果

## 回忆上次

- 上次完成了排序工作
- 但是人数太少
- 想来个函数 批量添加出200个用户
- 可以吗？

### 随机字符串

```
def get_random_str():
    s = ""
    for i in range(10):
        s += chr(randint(0x61,0x61+27))
    return s
```

- 生成一个长度为9的字符串
- 可以用作
	- 用户名
	- 密码

### 批量生成用户名、密码

```
from flask import Flask,render_template,request,redirect,session,Blueprint
from db import pool
import psycopg
import traceback
from random import randint

app_user = Blueprint("user", __name__)

@app_user.route('/user/')
def user():
    current_user = session["current_user"]
    print(current_user)
    if current_user == "admin":
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT username FROM login where username != 'admin';")
                records = cur.fetchall()
                cur.close()
                conn.close()
                return render_template("user_manager.html", l = records,current_user = current_user)
    else:
        return "You are not admin<br/>"


@app_user.route("/user/del", methods=['POST', 'GET'])
def del_user():
    current_user = session["current_user"]
    print(current_user)
    username = request.form["d_un"]
    print("uname",username)
    if current_user == "admin":
        with pool.connection() as conn:
            with conn.cursor() as cur:
                try:
                    sql = """DELETE FROM login WHERE username=%s"""
                    t = (username,)
                    cur.execute(sql,t)
                    conn.commit()
                    cur.close()
                    conn.close()
                except Exception:
                    print(traceback.print_exc())
                    cur.close()
                    conn.close()
                    return  username + " deletion failed"
                else:
                    return redirect("/user")
    else:
        return "You have no right to delete!"

@app_user.route("/user/dels", methods=['POST', 'GET'])
def del_users():
    users = request.form.getlist("users")
    current_user = session["current_user"]
    if current_user == "admin":
        with pool.connection() as conn:
            with conn.cursor() as cur:
                try:
                    sql = """DELETE FROM login WHERE username=%s"""
                    for user in users:
                        t = (user,)
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
                    return redirect("/user")
    else:
        return "del users failed!"


@app_user.route("/user/add", methods=['POST', 'GET'])
def user_add():
    current_user = session["current_user"]
    if current_user != "admin":
        return "you dont have right to add user"
    username = request.form["username"]
    password = request.form["password"]
    print(username)
    conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
    with psycopg.connect(conninfo) as conn:
        with conn.cursor() as cur:
            try:
                sql = "INSERT INTO login(username, password) VALUES(%s, %s)"""
                t = (username,password)
                cur.execute(sql,t)
                conn.commit()
            except Exception:
                print(traceback.print_exc())
                return "add " + username + " failed!"
            else:
                return redirect("/user")


def get_random_str():
    s = ""
    for i in range(10):
        s += chr(randint(0x61,0x61+27))
    return s

@app_user.route("/user/add_users", methods=['POST', 'GET'])
def add_users():
    current_user = session["current_user"]
    if current_user != "admin":
        return "you are not allowed to add users"
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                for i in range(200):
                    sql = "INSERT INTO login(username, password) VALUES(%s, %s)"
                    username = get_random_str()
                    password = get_random_str()
                    l = [username, password]
                    print("l==========", l)
                    cur.execute(sql,l)
                conn.commit()
                cur.close()
                conn.close()
                redirect("/user")
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  "add user failed!"
            else:
                return redirect("/user")

@app_user.route("/user/prepareUpdate", methods=['POST', 'GET'])
def prepare_update():
    current_user = session["current_user"]
    username = request.args.get("username")
    if current_user != "admin":
        return "you cannot update " + username
    print("now in prepare update" + username)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = "SELECT * FROM login WHERE username=%s"
                t = (username,)
                detail = cur.execute(sql,t).fetchone()
                user = detail[0]
                password = detail[1]
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  "failed to get " + username
            else:
                return render_template("user_detail.html", user = user, password = password)

@app_user.route("/update", methods=['POST', 'GET'])
def update():
    current_user = session["current_user"]
    old_username = request.form.get("old_username")
    if current_user != "admin":
        return "you cannot update user" + old_username
    username = request.form.get("username")
    password = request.form.get("password")
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = """UPDATE login SET username=%s,password=%s where username=%s"""
                t = (username,password,old_username)
                cur.execute(sql,t)
                conn.commit()
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return "update " + username + "failed!"
            else:
                return redirect("/user")

@app_user.route("/user/search", methods=['POST', 'GET'])
def search():
    current_user = session["current_user"]
    username = request.form.get("s_usr")
    user_order = request.form.get("user_order")
    if current_user != "admin":
        return "you cannot update user" + username
    username_pattern = "%" + username + "%"
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = "SELECT * FROM login WHERE username LIKE %s AND username != 'admin' ORDER BY username " + user_order
                t = (username_pattern,)
                cur.execute(sql,t)
                records = cur.fetchall()
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                if user_order == "asc":
                    user_order = "desc"
                else:
                    user_order = "asc"
                return render_template("user_manager.html", l = records,current_user = current_user, s_user = username,user_order = user_order)
```

- 执行结果如何呢？

### 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676713047540)

- 用户数量就这样多了起来
- 正好验证一下搜索是否好用

### 搜索

- 搜索验证

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676713091808)

- 逆序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676713124362)

## 总结

- 用户多了之后
- 需要分页显示
- 如何分页呢？🤔
- 下次再说!