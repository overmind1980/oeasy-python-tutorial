---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次直接使用psycopg访问pg数据库
- 并且查询到了相应的数据
- 可以通过表单注册用户吗？🤔

### 项目结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230207-1675767102973)

### login.html

```html
<form action="/regist" method="POST">
	username:<input name="username"/><br/>
	password:<input name="password"/><br/>
	<input type="submit" name="regist"><br/>
</form>
```

- 建立这个网页文件之后
- 准备制作对于/regist的处理函数

### 处理函数

- 注意是用的表格是login表

```python
from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
import traceback
import psycopg

app = Flask("__name__")

@app.route('/')
def hello():
    conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
    with psycopg.connect(conninfo) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM login;")
            records = cur.fetchall()
    return render_template("show_data.html", l = records)

@app.route("/regist", methods=['POST', 'GET'])
def regist():
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
                return  username + " already exists"
            else:
                return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
```

### 运行成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674470601832)

- 这样就将pg数据库驱动起来了

- 为什么可以在后台驱动数据库呢？
- 因为psycopg可以驱动postgres
- 什么是驱动呢？

### 驱动

- driver驾驶员
- 最早来自于驾驶马车

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220521-1653122800305)

### 蒸汽机车

- 后来工业革命后也指蒸汽机车

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220501-1651358573525)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220501-1651357981528)

- 仪表盘的来历
	- 仪表盘的作用是监控引擎运行情况
- driver在电脑系统中也指驱动
	- 硬件的驱动程序
	- 文件系统驱动器
	- 主动控制引擎的人

- 给用户名
	- 添加唯一性约束

### unique

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674470637765)

- 修改login表

```
ALTER TABLE login
ADD CONSTRAINT unique_user UNIQUE(username);
```

### 修改结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230207-1675768278168)

- 同样的用户名
- 无法重复插入了
- 尝试在网页中插入

### 在网页中插入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674471131600)

- 可以看到网页插入已经有的用户名
- 会报错
- 违反了唯一性约束

## 总结

- 这次 通过表单注册用户
	- 顺利完成
- 数据库 连接语句 重复执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674471803521)

- 可以提取出来吗？🤔
- 下次再说!