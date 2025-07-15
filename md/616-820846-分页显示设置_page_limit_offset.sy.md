---
show: step
version: 1.0
enable_checker: true
---

# cookie效果

## 回忆上次

- 上次添加用户之后
- 需要分页显示
- 如何分页呢？

### 分页基础

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230130-1675034401238)

- 从100开始 
	- 得到10个记录

### 修改

```python
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
```

### 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676714149849)

### 修改模版页

- 在尾部增加导航条

```
        <div class="row">
        {% for page in pages %}
            <a href="#">{{page}}</a>
        {% endfor%}
        </div>      
```

### 显示结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676714331622)

### 修改网页

- 将页面
	- 作为一个参数
		- 提交给后台

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
        cursor: hand;
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
            u = document.getElementById("user_order");
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
            <input type="hidden" id="page" name="page">
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
            <span class="page" onclick="change_page({{page}})">{{page}}</a>
        {% endfor%}
        </div>
        {% else %}
        <h1>You dont have permission</h1>
        {% endif %}
    </body>
</html>
```

### 提交结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676714789808)

- 后台接收参数之后
	- 如何处理呢？

### 后台处理

```
@app.route("/search", methods=['POST', 'GET'])
def search():
    username = request.form.get("s_usr")
    page = request.form.get("page")
    first_page = int(page)
    print("un:", username)
    username_pattern = "%" + username + "%"
    user_order = request.form.get("user_order")
    print("uo==============", user_order)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = "SELECT * FROM login WHERE username LIKE %s ORDER BY username " + user_order + " LIMIT 10 OFFSET " + str(int(page) * 10)
                l = [username_pattern, ]
                print("l==========", l)
                print("sql:-----",sql)
                cur.execute(sql,l)
                records = cur.fetchall()
                print("debug============")
                u2 = ""
                if (user_order == "desc"):
                    u2 = "asc"
                else:
                    u2 ="desc"
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                return render_template("show_data.html", l = records, search_user = username, user_order = u2,pages = list(range(first_page, first_page + 10)))
```

### 前台效果

- 翻页会翻到未知领域

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676715865825)

- 还需要进行调整

## 总结

- 这次完成了 分页和翻页功能
	- 可用 
- 但页码显示逻辑
	- 还有瑕疵
- 如何调整呢？🤔
- 下次再说!👋