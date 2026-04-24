---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次 次通过表单注册用户
	- 还是比较简单的
- 数据库连接语句比较重复

![图片描述](uid1190679-20230123-1674471803521.jpg)

- 可以提取出来吗🤔

### 安装库
```
pip install psycopg_pool
```

- 安装之后
	- 在网站根目录下建立db.py


- db.py里面到底有什么呢呢？

### db.py

```
from psycopg_pool import ConnectionPool

conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
pool = ConnectionPool(conninfo)
```

### 网站结构

![图片描述](uid1190679-20230526-1685105118174.png)

### .gitignore

- 设置了 这些之后
	- 提交git的时候
	- 就可以不提交相应的文件了
	- 避免数据库连接信息泄露

```
*.pyc
__pycache__/
db.py
```

- 但是数据库的用户名密码仍然是明文放在py文件中的
- 复制项目文件夹的时候
	- 也可能泄露
- 有没有更加隐藏的方法呢？

### 使用环境变量·

- 把数据库连接字符串放到本地变量中

![图片描述](uid1190679-20230727-1690418558344.png)

- 然后再读取
	- 我们在这里就不详细展开了

### main.py
- 在`main.py`中

```from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
from flask import url_for
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
if __name__ == "__main__":
    app.run(debug=True)
```

### 相关帮助

- https://www.psycopg.org/psycopg3/docs/api/pool.html#psycopg_pool.ConnectionPool.wait

![图片描述](uid1190679-20230123-1674477531946.png)


- 这里面提到了一个connection pool的概念
	- 也就是数据库连接池
- 什么是数据库连接池的概念呢？
	- 我们先来看看什么是池(pool)

### 水池

- 池的概念我们经常听说
	- 流量池
	- 艺人池
	- 资金池

![图片描述](uid1190679-20220616-1655338141396.png)

- 这有点抽象啊
- 池来自于什么呢？

## pool

![图片描述](uid1190679-20220504-1651670572324.png)

- 把水先蓄起来
- 想要用的时候直接就能用
- 就是水池

### 酒池

![图片描述](uid1190679-20220504-1651672985356.png)

- 把酒先蓄起来
- 想要用的时候直接就能用
- 就是酒池

### 电池

![图片描述](uid1190679-20220504-1651670830918.png)

- 把电先蓄起来
- 想用的时候直接就能用
- 就是电池

### 小便池

![图片描述](uid1190679-20220522-1653183199629.png)

- 把小便蓄起来
- 想用的时候直接就能用
- 就是小便池
- 啊，并不是...😶

### 数据库连接池

![图片描述](uid1190679-20230207-1675777764761.png)

- 把数据库连接先蓄起来
- 想用的时候直接就能用
- 就是数据库连接池

![图片描述](uid1190679-20230207-1675777779052.jpg)

- 可是 蓄数据库连接 有什么用呢？

### 数据库连接

- Connection是一个类的对象
	- 每次实例化都要分配内存
	- 使用之后就要释放内存
	- 频繁的分配释放反而浪费系统资源
- 干脆先蓄着100个数据库连接
- 没有人来
	- 也先把内存分配了
	- 先占着位置
- 有人来
	- 就从池子里面拿一个现成的
	- 用完了放回到池子
	- 省的来回来去申请释放内存
- 这种预先蓄起来的方式
	- 就是池化
	- 类似的还有
		- 线程池
		- 字符串常量池

![图片描述](uid1190679-20230526-1685105340395.png)

## 总结

- 这次使用了数据库连接池
- 注册用户之后
- 可以用用户名和密码进行登录吗？🤔
- 下次再说!