---
show: step
version: 1.0
enable_checker: true
---

# cookie效果

## 回忆上次

- 上次研究了删除用户
	- 单个删除
- 可以批量删除多个用户吗？🤔

### 构建网页

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
</script>
<title>Hello from Flask</title>
</head>
<body>
<form id="f" method="POST" action="/user/del">
	<input id="d_un" name="d_un" type="hidden">
</form>
{% if current_user == "admin" %}
    <h1>Hello {{ current_user }}!</h1>
    <form id="d2" method="POST" action="/user/dels">
    <input type="submit" value="del">   
    {% for record in l %}
        <p> 
            <input type="checkbox" value="{{ record[0] }}" name="users">
            {{ record[0] }}
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

### 提交后的结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675915987463)

- 可以看到提交上来的表单有两项
- 如何在后台得到这两项呢？

### 后台python处理

```
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
```

- 处理之后就可以批量删除用户了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675916320804)

- 可以有个全选的勾吗？

### 全选 和 全不选

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
			<a href="./prepareUpdate?id={{record[0]}}"> {{ record[0] }}</a>
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

## 总结

- 这次研究了批量删除用户
	- 批量删除
- 删除用户太快了
- 可以把注册用户集成能进来吗？🤔
- 下次再说!