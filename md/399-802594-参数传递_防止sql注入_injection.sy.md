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
    sql = "INSERT INTO test(num, data) VALUES (200, 'test')"
    print(sql)
    conn.execute(sql)
    conn.commit()
```

- 复制sql语句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230203-1675427555016)

- 到psql中粘贴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230203-1675427632352)

- 这语句是可以插入记录的

### 直接运行py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672369958864)

- 也可以插入记录

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672370094648)

- 尝试使用参数形式

### 元组参数

- 使用元组参数的形式

```
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    sql = "INSERT INTO test(num, data) VALUES (200, 'test')"
    conn.execute(sql)
    conn.commit()
```

- 可以运行成功！

### 字典参数

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230203-1675428168220)

- % 通配符需要注意

### % 通配符

- %, (, ) 这三个符号不要用在字典的键(key)当中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672371963702)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672373189701)

- 需要使用两个%表示通配符%

### 尝试运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672373997053)

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672374019300)

### 注意事项

- 这是preparedStatement需要注意的点
	- 不要使用字符串运算符 %
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

### 二进制 传参

- 提示 可以用二进制方式 传参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672404189334)

- 编码验证

```
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    with conn.cursor() as cur:
        sql = "SELECT * FROM test WHERE id < %s;"
        print(sql)
        t = (5,)
        cur.execute(sql, t)
        for record in cur.fetchall():
            print(record)
        cur.close()
        conn.close()
```

- 确实可以

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230203-1675428898447)

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