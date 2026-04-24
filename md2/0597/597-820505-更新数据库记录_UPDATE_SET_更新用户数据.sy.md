---
show: step
version: 1.0
enable_checker: true
---

# cookie效果

## 回忆上次

- 上次把插入数据 整合进入了模块当中
- 可以对于已经存在的数据进行更新吗？🤔

### 修改网页

```
<!DOCTYPE html>
<html>
	<head>
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
		</script>
	<title>Hello from Flask</title>
	</head>
	<body>
		<form action="/user/add" method="POST">
			username:<input name="username"/><br/>
			password:<input name="password"/><br/>
			<input type="submit" name="regist"><br/>
		</form>

		<form id="f" method="POST" action="/user/del">
			<input id="d_un" name="d_un" type="hidden">
		</form>
		{% if current_user == "admin" %}
		<h1>Hello {{ current_user }}!</h1>
		<form id="d2" method="POST" action="/user/dels">
			<input type="checkbox" onclick="all_users();" id="select_all">select all
			<input type="checkbox" onclick="none_users();" id="select_none">select none
			<input type="submit" value="del selected!">   
			{% for record in l %}
			<p> 
			<input type="checkbox" value="{{ record[0] }}" name="users">
			<a href="./prepareUpdate?username={{record[0]}}"> {{ record[0] }}</a>
			<input type=button value="del" onclick="delete_user('{{record[0]}}')"/>
			</p>
			{% endfor %}
		</form>
		{% else %}
		<h1>You dont have permission</h1>
		{% endif %}
	</body>
</html>
```

### 页面添加链接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675940619637)

- 数据是可以传递过去的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675941072260)

### 接收数据处理函数

- 在传递过程中
	- 只传递用户名

```
@app_user.route("/prepareUpdate", methods=['POST', 'GET'])
def prepare_update():
    current_user = session["current_user"]
    username = request.args.get("username")
    if current_user != "admin":
        return "you cannot update " + username
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
```

- 最后提交到user_detail.html模版
- 接收参数
- 并准备处理

### show_detail.html

```
<!DOCTYPE html>
<html>
<head>
<title>Hello from Flask</title>
</head>
<body>
<form id="d2" method="POST" action="/update">
    <input type="hidden" value="{{ user }}" name="old_username"><br/>
    username:<input type="text" value="{{ user }}" name="username"><br/>
    password:<input type="text" value="{{ password }}" name="password"><br/>
	<input type="submit">
</form>
</body>
</html>
```

- 表单中出现了
	- 选中的用户名和密码

### 具体的更新语句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230125-1674645436097)

- 现在需要在py文件中完成更新功能

### 更新语句



```
@@app_user.route("/update", methods=['POST', 'GET'])
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
```

- 确实可以更新记录


## 总结

- 这次更新了login表中用户的记录
- 可以对login表进行搜索吗？🤔
- 下次再说!