---
show: step
version: 1.0
enable_checker: true
---

# psycopg3

## 回忆

- 上次研究了psycopg这个包
	- pg最流行的python适配器
	- 有了他就可以用python对数据库读写！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672309582787)

- 具体怎么读写呢？

### 确认环境

- 首先确认
	- pg是否开启
	- 是否已经新建了oeasydb这个数据库

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230330-1680174997037)

- 确定环境已经ok
- 开机之后
	- 程序会在后台执行一些命令
	- 不要着急
	- 稍等几分钟之后
	- 后台命令就会执行完毕

### 继续文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672321254236)

- 将代码整合进入py文件

### 操作数据库

```
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    print("connect!")
    conn.execute("""
        CREATE TABLE IF NOT EXISTS test(
            id serial PRIMARY KEY,
            num integer,
            data text);
    """)
    print("Table test is created!")
    conn.execute(
        "INSERT INTO test(num, data) VALUES (%s, %s)",
        (100, "abc")
    )
    print("Data is inserted!")
    conn.commit()
```

- 先将代码复制到
	- 系统剪贴板

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230330-1680168161942)

- 确认后
	- 点击一下保存

### 编写文件
- 键入vi c.py
	- 然后依次输入"*p

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230330-1680168253682)

- 连接建立起来之后
	- 先建表
	- 再插数据
- 然后通过commit提交
- 真的建表并插数据了吗？

### 直接查询

- :q退出vim
- 然后sudo -u postgres psql 进入pg

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230203-1675417021125)

- 确实
	- 建了表
	- 插了数据

### 总结

- 这次可以
	- 执行sql语句
		- create table
		- insert
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672323440515)

- 可以 通过python来进行查询吗？
	- 可以 得到select查询的结果 吗？
- 下次再说！👋