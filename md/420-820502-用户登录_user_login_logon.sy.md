---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次使用了数据库连接池
- 注册了之后
- 可以用用户名和密码进行登录吗？

### 修改login.html

```html
<!DOCTYPE html>
<html>
	<head>
		<script>
			function login(){
				var f = document.getElementById("f");
				var login = document.getElementById("login"); 
				f.action = "/login";
				f.submit();
			}
		</script>
	</head>
	<body>
		<form action="/regist" method="POST" id="f">
			username:<input name="username"/><br/>
			password:<input name="password"/><br/>
			<input type="submit" name="regist" value="regist">
			<input onclick="login()" type="button" value="login">
			</input>
			<br/>
		</form>
	</body>
</html>
```

### 点击登录login

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675816291553)

- post请求到/login
- 但是没有相应的接收函数

### 接收函数

```
from flask import Flask,render_template,request,redirect
import traceback
import psycopg
from db import pool

app = Flask("__name__")

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
                cur.close()
                conn.close()
                return user + "is logon!"
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

### 观察日志发现报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675817703647)

- 错误来源于数据类型

### 观察类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675818140505)

- 输出user的类型type

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675818165084)

- 确认类型为tuple
- 使用下标方式得到用户名
- 可以得到相应的sql语句吗？

### 输出sql语句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675818282627)

- 输出sql语句、元组

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675818373433)

- 将结果手工合成sql语句
- 并放到pg里面执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675818437092)


## 总结

- 这次添加了 登录功能
	- 通过查询数据库
	- 确定用户名和密码
	- 最终确认用户可以登陆
- 登陆之后
	- 就只是登录而已
	- 没有浏览器再访问服务器
	- 还是无状态
	- 还是从零开始
- 能否在他们两个之间建立联系呢？🤔
- 下次再说!