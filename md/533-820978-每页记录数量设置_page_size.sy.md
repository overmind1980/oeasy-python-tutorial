---
show: step
version: 1.0
enable_checker: true
---

# 分页功能细节

## 回忆上次

- 上次完成了分页功能的细节调整
- 目前分页基本正常了
- 可以控制每页有多少条记录吗

### 添加表单

- 首先在网页中添加表单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230131-1675136348428)

### 处理函数

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
                limit = 10
                offset = 0
                pages = list(range(0, 10))
                sql = "SELECT * FROM login" \
                            + " WHERE username != 'admin' " \
                            + " LIMIT " + str(limit) \
                            + " OFFSET " + str(offset)
                cur.execute(sql)
                records = cur.fetchall()
                cur.close()
            conn.close()
        return render_template("user_manager.html", l = records, current_user = current_user, pages= pages)
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
    page = int(request.form.get("page"))
    first_page = int(page)
    page_size = request.form.get("page_size")
    print(page_size,"-------------")
    if page_size == None or page_size == "":
        page_size = "10"
    if current_user != "admin":
        return "you cannot update user" + username
    username_pattern = "%" + username + "%"
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = "SELECT count(*) FROM login WHERE username LIKE %s"
                t = (username_pattern,)
                cur.execute(sql,t)
                count = cur.fetchone()
                count = int(count[0])
                print("count====",count)
                if count <= 100:
                    first_page = 0
                    last_page = count // int(page_size)
                else:
                    if page < 5:
                        first_page = 0
                        last_page = 10
                    elif count//10 - page < 5:
                        last_page = count//10 + 1
                        first_page = last_page - 10
                    else:
                        first_page = page - 5
                        last_page = page + 4
                sql = "SELECT * FROM login WHERE username LIKE %s ORDER BY username " + user_order + " LIMIT " + page_size + " OFFSET " + str(int(page) * 10)
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
                print(page,"====")
                return render_template("user_manager.html", l = records,current_user = current_user, s_user = username,user_order = user_order, pages=list(range(first_page, last_page)),current_page = page,page_size = page_size)

```

- 结果页如何将每页记录数保留呢？

### 接受页处理

```
<!DOCTYPE html>
<html>
    <head>
        <style>
    .row{
        display: block;
        width: 330px;
        height: 20px;
    }
   .sel,.user,.del{
       width: 60px;
       border: 1px solid black;
       margin: 0;
       display: block;
       float: left;
   } 
   .user{
       width: 200px;
   }
   .page{
        text-decoration: underline;
        margin-left: 10px;
        color: blue;
    }
    .page:hover{
        cursor: pointer;
    }
        </style> 
        <script>
        function delete_user(name){
            f = document.getElementById("f");
            u = document.getElementById("d_un");
            u.value = name;
            f.submit();
        }

        function all_users(){
            document.getElementById("select_none").checked = false;
            objs = document.getElementsByName("users");
            for(var i=0;i<objs.length;i++){
                if (objs[i].type == "checkbox" && objs[i].disabled==false){
                    objs[i].checked = true;      
                }           
            }
        }

        function none_users(){
            document.getElementById("select_all").checked = false;
            objs = document.getElementsByName("users");
            for(var i=0;i<objs.length;i++){
                if (objs[i].type == "checkbox" && objs[i].disabled==false){
                    objs[i].checked = false;      
                }           
            }
        }

        function change_order(){
            f = document.getElementById("search");
            user_order = document.getElementById("user_order");
            
            if (user_order == "asc"){
                document.getElementById("user_order") = "desc"
            }
            else{
                user_order = "asc"
            }
            f.submit();
        }

        function change_page(page){
            f = document.getElementById("search");
            p = document.getElementById("page");
            p.value = page
            f.submit()
        }
        </script>
    <title>Hello from Flask</title>
    </head>
    <body>
        <form action="/user/add" method="POST">
            username:<input name="username"/><br/>
            password:<input name="password"/><br/>
            <input type="submit" name="regist" value="regist"><br/>
        </form>

        <form id="f" method="POST" action="/user/del">
            <input id="d_un" name="d_un" type="hidden">
        </form>
        {% if current_user == "admin" %}
        <h1>Hello {{ current_user }}!</h1>

        <form id="search" method="POST" action="/user/search">
            <input type="hidden" id="user_order" name="user_order" value="{{user_order}}">
            <input type="hidden" id="page" name="page" value="0">
            {{page_size}} ---- 
            <select name="page_size">
                {% for num in ("10", "15", "20") %}
                <option value="{{num}}"
                    {% if (page_size == num) %}
                        selected
                    {% endif %}
                >
                {{num}}/page
                </option>
                {% endfor %}
            </select>
            <input id="s_usr" name="s_usr" type="input" value="{{ s_user}}">
            <input type="submit" value="search">
        </form>

        <form id="d2" method="POST" action="/user/dels">
            <input type="checkbox" onclick="all_users();" id="select_all">select all
            <input type="checkbox" onclick="none_users();" id="select_none">select none
            <input type="submit" value="del selected!">   
            <div class="row">
                <span class="sel">select</span>
                <span class="user" onclick="change_order()" >username({{user_order}})</span>
                <span class="del">delete</span>
            </div> 
            {% for record in l %}
            <div class="row">
                <span class="sel">
                    <input type="checkbox" value="{{ record[0] }}" name="users">
                </span>
                <span class="user">
                    <a href="./prepareUpdate?username={{record[0]}}"> {{ record[0] }}</a>
                </span>
                <span class="del">
                    <input type=button value="del" onclick="delete_user('{{record[0]}}')"/>
                </span>
            </div>
            {% endfor %}
        </form>
        <div class="row">
        {% for page in pages %}
            <span class="page" onclick="change_page({{page}})"
                {% if current_page == page %}
                style="font-size:30px"
                {% endif %}
            >
            {{page}}
            </span>
        {% endfor%}
        </div>
        {% else %}
        <h1>You dont have permission</h1>
        {% endif %}
    </body>
</html>
```

## 总结

- 这次 把分页的内容	
	- 彻底搞定了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685268819649)

- 目前这个项目放在
	- https://github.com/overmind1980/my_flask_web
- 可以翻页
- 也可以搜索
- 还可以设置页内记录数量
- 还有什么好玩的吗？ 🤔
- 下次再说!