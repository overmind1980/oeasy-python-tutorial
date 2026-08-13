---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次研究了 jinja2模版
	- 可以 直接导入模板
	- 也可以有 一个 父类模板
		- 然后 使用子模版 对父模板 进行填充
		- 而且 可以 把参数 传递进去
- 可以把 网页传递的参数
	- 存储进 数据库吗？

### 新文件夹结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230207-1675766315997)

- 主要有两个文件
	- `templates/show_data.html`
	- `application/__init__.py`

### `templates/show_data.html`

```html
<!doctype html>
<title>Hello from Flask</title>
{% for name in l %}
  <h1>Hello {{ name }}!</h1>
{% endfor %}
```

- 这里面需要一个列表l

### `main.py`

```
from flask import render_template
from flask import request
from flask import Flask

app = Flask(__name__)

@app.route('/')
def login():
    return render_template("show_data.html", l = range(5))

if __name__ == "__main__":
    app.run(debug=True)
```

- 将l传入模版

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230206-1675690286340)

- 现在需要从数据库得到数据集

### 参照数据库教程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674446918471)

- 进入oeasydb数据库
	- 确保test表中
		- 有两条以上数据

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674447138493)

### 修改代码

```python
from flask import Flask
from flask import render_template
import psycopg

app = Flask("__name__")

@app.route('/')
def hello():
    conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
    with psycopg.connect(conninfo) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM test;")
            records = cur.fetchall()
    return render_template("show_data.html", l = records)

if __name__ == "__main__":
    app.run(debug=True)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230526-1685103783181)

- 可以在前端的网页中
	- 访问后端 数据库里面的信息了
- 可以在访问自己创建的表吗？
	- 首先准备数据库

### 数据库的准备

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674464596177)

- 准备login表

```
CREATE TABLE IF NOT EXISTS login(
	username VARCHAR(20),
	password VARCHAR(20)
);
```

- 并插入一些数据

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674469696092)

- 这些数据准备
	- 是属于后端的准备

### 后厨

- 大师傅根据食材来产出内容
- 使用psql查询数据一点问题没有

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220521-1653122140253)

- 不过重启之后我这些数据库啥的都没了
- 我可以自己把这个流程做个批处理么？
- 以后只要运行这个批处理一下子就都能恢复了

### sql文件

```
ALTER USER postgres WITH PASSWORD 'oeasypg';
CREATE DATABASE oeasydb;
CREATE TABLE IF NOT EXISTS test(id serial PRIMARY KEY, num integer, data text);
INSERT INTO test(num, data) VALUES (123, 'abc');
INSERT INTO test(num, data) VALUES (456, 'ooo');
```

- 专门做一个负责数据库初始化的文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230526-1685104120665)

- 让数据库自己恢复出来 
	- 这一切靠的是数据库引擎

```
sudo -u postgres psql -d oeasydb -f ./db/pg.sql
```

### 引擎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220501-1651358775158)

- 引擎(engine)也叫发动机
- 能够让一个火车动起来的主动力来源
- 各种引擎
	- 搜索引擎
	- 游戏引擎
	- 渲染引擎
- 玩引擎的人是什么人呢？

### 工程师

- engineer

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220501-1651357965424)

- 这些搞engine的人
	- 数据库工程师
	- 系统工程师
	- 电气工程师

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220501-1651359321990)

- 他们玩的是不同的engine
	- 形成了专业术语、行业
	- 甚至是俗语

### steam成语

- run out of steam
	- to suddenly lose the energy or interest to continue doing what you are doing
	- 精疲力竭，丧失热情
	- 当锅炉的火太低时，就可能难以产生蒸汽了，因此蒸汽机就会逐渐减速直至停止
	- 后来人们把这句习语引申到人身上，比喻人像蒸汽机这种情况一样，没有精力，精疲力尽
	- 甚至变成了铅字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660721929033)

- let off steam
	- to do or say something that helps you to get rid of strong feelings or energy
	- 释放精力，发泄怒气，宣泄感情

### 不同工程专业

- 各种engineering
	- 电子工程
	- 车辆工程
	- 软件工程
	- 数据工程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220501-1651359804781)

- 如何理解通过servlet链接postgres

### engine

- 我们现在就是数据库工程师
- 需要选择一个数据库引擎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220501-1651360247590)

- 我们选择postgresql数据库
- 然后就要想办法让这个引擎运行起来
- 也就是找这个引擎(engine)的驱动(driver)
- 使用这个驱动driver就可以驱动postgres数据库这个数据库引擎
- 让这个程序能跑起来

## 总结

- 这次直接使用psycopg访问pg数据库
- 并且查询到了相应的数据
- 可以通过表单注册用户吗？🤔
- 下次再说!