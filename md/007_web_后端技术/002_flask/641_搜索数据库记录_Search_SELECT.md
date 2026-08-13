---
show: step
version: 1.0
enable_checker: true
---

# cookie效果

## 回忆上次

- 次更新了login表中用户的记录
- 可以对login表进行搜索吗？🤔

### 添加表单

- 在show_data.html中
	- 添加如下代码

```html
        <form id="search" method="POST" action="/user/search">
            <input id="s_usr" name="s_usr" type="input">
            <input type="submit" value="search">
        </form>
```

- 尝试提交

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675948023937)

- 可以提交表单数据
- 准备编辑/user/search对应的处理函数

### 处理函数

```
@app_user.route("/user/search", methods=['POST', 'GET'])
def search():
    current_user = session["current_user"]
    username = request.form.get("s_usr")
    if current_user != "admin":
        return "you cannot update user" + username
    username_pattern = "%" + username + "%"
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = "SELECT * FROM login WHERE username LIKE %s AND username != 'admin'"
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
                return render_template("user_manager.html", l = records,current_user = current_user, s_user = username)
```

- 处理之后
	- 能否让 文本框
		- 保留上次搜索的内容

### 搜索字符串保留

- /templates/show_data.html

```html
<form id="search" method="POST" action="/user/search">
    <input id="s_usr" name="s_usr" type="input" value="{{ s_user}}">
    <input type="submit" value="search">
</form>
```

## 总结

- 这次 完成了 
	- 对于用户名的搜索
	- 可以对搜索结果进行排序吗？🤔
- 下次再说!