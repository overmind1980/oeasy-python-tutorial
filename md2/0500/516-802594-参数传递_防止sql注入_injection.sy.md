---
show: step
version: 1.0
enable_checker: true
---

# psycopg3

## 回忆

- 上次使用了psycopg3的标准模式
	- 如果成功的话
		- 就提交
	- 否则就回滚
	- 最终关闭数据库连接
- 关于传递参数有什么推荐吗？

### 查看文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672368143232)

- 要插入
	- 整型
	- 日期型
	- 字符串
- 首先得有这么一个表

### 观察现有表格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230203-1675427220613)

- 尝试插入

### 先将代码写死

```
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    sql = "INSERT INTO test(num, data) VALUES (200, 'abc')"
    print(sql)
    conn.execute(sql)
    conn.commit()
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680779607149)

- 到数据库查询

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680779624988)

- 这语句是可以插入记录的
- 但是这种直接给定参数
- 容易产生sql注入

### sql Injection

- 尝试在不知道John Smith的密码时
	- 使用其id登录

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680778228131)

- 原理就是
	- -- 在sql语句中属于注释标记
	- 相当于python中的#

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680778859344)

- 真的会发生这样的事情吗？

### 构造问题函数

```
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    with conn.cursor() as cur:
        id = "2';--"
        data = "abcd"
        sql = "SELECT * FROM test WHERE id = '" + str(id) + " AND data='" + str(data)+ "';"
        print(sql)
        cur.execute(sql)
        for record in cur.fetchall():
            print(record)
        cur.close()
        conn.close()
```

- 上面的代码中
	- 并不知道data应为abc
		- 而是给出了abcd

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680779025137)

- 但是仍然能够查询到这条记录
	- 这种问题怎么解决呢？
- 尝试使用参数形式

### 元组参数

- 使用元组参数的形式

```
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    with conn.cursor() as cur:
        t = ("2","abc")
        sql = "SELECT * FROM test WHERE id=%s AND data=%s;"
        print(sql)
        cur.execute(sql, t)
        for record in cur.fetchall():
            print(record)
        cur.close()
        conn.close()
```

- 错误的sql语句
	- 无法进行注入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680779833190)

- 正确的呢？

### 正常查询

```
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    with conn.cursor() as cur:
        t = ("2","abc")
        sql = "SELECT * FROM test WHERE id=%s AND data=%s;"
        print(sql)
        cur.execute(sql, t)
        for record in cur.fetchall():
            print(record)
        cur.close()
        conn.close()
```

- 正常的数据
	- 可以正常的查询

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680779254500)

- 当前数据库确实有2，abc这条记录

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680778477000)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680778512001)

- 确实可以查到

### 字典参数

- 除了元组参数之外
	- 还可以使用字典参数

```
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    sql = "INSERT INTO test(num, data) VALUES (%(num)s, %(data)s);"
    print(sql)
    d = {
        'num': 100,
        'data': 'oeasy'
    }
    conn.execute(sql, d)
    conn.commit()
```

- 插入成功
- 但是由于语句中使用了百分号和括号
	- 这需要特别注意

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230203-1675428168220)

- 需要注意
	- % 通配符
	- () 括号

### % 通配符

- 这三个符号 不要用在字典的键(key)当中
	- %百分号
	- (左括号 
	- )右括号 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672371963702)

- 百分号的本意是
	- 取余数 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672373189701)

- 需要使用两个%表示通配符%

### 尝试运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672373997053)

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672374019300)

### 注意事项

- 这是preparedStatement需要注意的点
	- 不要使用字符串占位符 %
	- 不要使用 + 拼合字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672402911581)

- 原始字符串中的占位符无需引号引用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672403217660)

- 表名和列名 不能动态指定
- 一般都是指定待插入的值、待查询的值

### sql 注入

- 单引号 必须要 经过转义
	- 否则 % 会引起错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672403504911)

- 为了避免 sql注入
	- 使用参数的方式 构成sql语句
- 使用逗号的方式

### 二进制 传参

- 提示 可以用二进制方式 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672404189334)

- 这里根据id可以得到图片的二进制数据

### 总结
- 这次主要研究
	- PrepareStatement
- 通过sql的statement直接执行就好
	- 为什么还要prepare呢？
- preparedStatement有4点好处
	1. 解决转义字符问题
	2. 解决sql 注入问题
	3. 变量更加明确
	4. 可以传递二进制参数
- 每次都要自己连接数据很麻烦
- 可以有一个数据库连接池吗？🤔
- 下次再说！👋