---
show: step
version: 1.0
enable_checker: true
---

# psycopg3

## 回忆

- 上次安装了
	- postgres数据库
	- psycopg3 适配器 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672308400769)

- psycopg3 
	- 如何适配 postgres 呢?

### 直接psql连接

- 我们先看看 客户端psql 是如何连接数据库的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672308861162)

- 构造连接字符串

### 字符串

```shell
psql -d oeasydb -h localhost -p 5432 -U postgres -W 
```

- 密码不对
	- 需要去pg里面改密码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672309154434)

### 修改密码

- 先进入pg

```
ALTER USER 
    postgres 
WITH PASSWORD 
    'oeasypg'
;
```

- 修改完成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240524-1716536873655)

### 尝试登陆

- 修改postgres密码后
	- 退出pg
	- 再尝试登录

```zsh
psql -d oeasydb -h localhost -p 5432 -U postgres -W 
```

- 输入刚才修改的密码oeasypg
	- 注意输入密码时
		- 终端不显示任何字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240524-1716536935267)

- 确实可以连接到指定库oeasydb
- 尝试用psycopg3

### 查看文档

- https://www.psycopg.org/psycopg3/docs/basic/usage.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672319733771)

- 有关于connect函数的说明

### connect

- https://www.psycopg.org/psycopg3/docs/api/connections.html#psycopg.Connection

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672319913490)

- conninfo很重要

### conninfo

- https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672320149228)

- 尝试做一个

### 照猫画虎

- 具体代码 包括
	- 用户名
	- 密码
	- 主机地址
	- 端口号
	- 数据库名

```
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    print("connect!")
```

- 点击右上角复制按钮后
- 键入 vi c.py
- 依次按下 "*p 三个按键

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674441091796)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672320357814)

- 可以连到库里面
	- 直接查询吗？

### 总结

- 这次研究了psycopg这个包
	- pg最流行的python适配器
	- 有了他就可以用python对数据库读写！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672309582787)

- 具体怎么读写呢？🤔
- 下次再说！👋