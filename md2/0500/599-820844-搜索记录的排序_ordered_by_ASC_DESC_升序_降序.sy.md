# cookie效果

## 回忆上次

- 上次 完成了 
	- 对于用户名的搜索
	- 可以对搜索结果进行排序吗？

### 整理网页结构

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
    if (u.value == "desc" || u.value == ""){
        u.value = "asc";
    }
    else{
        u.value = desc;
    }
    f.submit();
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
            <input id="user_order" name="user_order" value="{{user_order}}">
            <input id="s_usr" name="s_usr" type="input" value="{{ s_user}}">
            <input type="submit" value="search">
        </form>

        <form id="d2" method="POST" action="/user/dels">
            <input type="checkbox" onclick="all_users();" id="select_all">select all
            <input type="checkbox" onclick="none_users();" id="select_none">select none
            <input type="submit" value="del selected!">   
            <div class="row">
                <span class="sel">select</span>
                <span class="user" onclick="change_order()">username({{order}})</span>
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
        {% else %}
        <h1>You dont have permission</h1>
        {% endif %}
    </body>
</html>
```

### 点击username()之后

![图片描述](../0599/uid1190679-20230209-1675950092955.png)

- 将user_order 传递进入/user/search

### 整理后效果

![图片描述](../0599/uid1190679-20230209-1675949545749.png)

- 点击username标题
- 会提交表单

### 构造sql

![图片描述](../0599/uid1190679-20230129-1675000291030.png)

### 处理函数

```
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

### 最终网页模版

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
        {% else %}
        <h1>You dont have permission</h1>
        {% endif %}
    </body>
</html>
```

- 这样就可以点击标题来进行排序了

## 总结

- 这这次完成了排序工作
- 但是人数太少
- 想来个函数 批量添加出200个用户
- 可以吗？🤔
- 下次再说!