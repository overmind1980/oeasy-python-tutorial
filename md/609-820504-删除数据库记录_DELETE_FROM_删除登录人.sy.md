---
show: step
version: 1.0
enable_checker: true
---

# cookie效果

## 回忆上次

- 上次制作了用户管理模块
	- 如果当前用户是admin的话
	- 就展示所有用户的信息
- 其实没有必要展示密码
- 而且没有必要展示admin的信息
- 这些可以调整吗？🤔

### 调整

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675913798074)

- 调整sql语句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675913812878)

- 并调整展示页面

### 构件模版

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
    {% for record in l %}
        <p> 
            {{ record[0] }}
            <input type=button value="del" onclick="delete_user('{{record[0]}}')"/>
        </p>
    {% endfor %}
{% else %}
    <h1>You dont have permission</h1>
{% endif %}
</body>
</html>

```

### 模版效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675914072476)

- 点击按钮后提交到/user/del
- 添加动态路由

### 动态路由

```
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
```

- 处理之后
	- 可以批量删除用户了

## 总结

- 这次研究了删除用户
	- 单个删除
- 可以批量删除多个用户吗？🤔
- 下次再说!