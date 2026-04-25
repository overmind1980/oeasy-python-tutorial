本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# psycopg3

## 回忆

- 上次使用了psycopg3的一句话模式


```
import psycopg

conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
print(psycopg.connect(conninfo).execute("SELECT * FROM test").fetchall())
```

- 可以快速地执行sql语句
- psycopg推荐怎样的编程方式呢？🤔

### Conn 作为上下文管理器

- 原来with方式的好处
	- 是结束时会自动关闭网络连接

![图片描述](../0515/uid1190679-20221230-1672366495124.jpg)

- 红框中的代码
	- 可以将conn作为上下文的管理器
	- 从而回滚或提交代码
	- 最终关闭网络连接

### 建立环境

```
sudo /etc/init.d/postgresql start
sudo chsh --shell /bin/zsh postgres
sudo cp /home/shiyanlou/.zshrc /var/lib/postgresql
sudo pip install psycopg[binary]
sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'oeasypg';"
sudo -u postgres psql -c "CREATE DATABASE oeasydb;"
sudo -u postgres psql -d oeasydb -c "CREATE TABLE IF NOT EXISTS test(id serial PRIMARY KEY, num integer, data text);"
sudo -u postgres psql -d oeasydb -c "INSERT INTO test(num, data) VALUES (100, 'abc');"
```

### 编写代码

```
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    print("connect!")
    try:
        with conn.cursor() as cur:
            cur.execute("INSERT INTO test(num,data) VALUES('111','abc');")
            cur.execute("INSERT INTO test(num,data) VALUES('222','efg');")
            cur.close()
    except Exception:
        print("rollback")
        conn.rollback()
    else:
        print("commit")
        conn.commit()
    finally:
        conn.close()
```

- 如果 222 插入过程出错 的话
	- 不会进行 Commit
	- 111 也白插入了 要回滚

![图片描述](../0515/uid1190679-20230406-1680776235468.png)

- 数据这次
	- 是否真的插入了数据库呢？

### 观察

![图片描述](../0515/uid1190679-20230406-1680776459759.png)

- 这是怎么一个流程呢？

### 流程

- 红色部分
	- 全都顺利执行完成
- 然后进入蓝色部分
	- 输出commit
	- 并且提交

![图片描述](../0515/uid1190679-20240524-1716538324129.png)

- 如果执行过程 
	- 出了一些错误代码会如何呢？

### 错误代码

- 红色部分
	- 执行过程中出了错误
	- 停止红色部分的执行
- 进入黄色部分
	- 输出rollback
	- 并且提交

![图片描述](../0515/uid1190679-20240524-1716538324129.png)

- 执行结果

![图片描述](../0515/uid1190679-20230330-1680187146502.png)

- 报了错误
	- 进行了回滚
- 可以把报错信息输出出来吗？

### 修改代码

```
import traceback
import psycopg
conninfo = "postgres://postgres:oeasypg@localhost:5432/oeasydb"
with psycopg.connect(conninfo) as conn:
    print("connect!")
    try:
        with conn.cursor() as cur:
            cur.execute("INSERT INTO test(num,data) VALUES('123','new');")
            cur.execute("SOMETHING WRONG!")
            cur.close()
    except BaseException as e:
        print("rollback", e)
        traceback.print_exc()
        conn.rollback()
    else:
        print("commit")
        conn.commit()
    finally:
        conn.close()
```

- 运行结果

![图片描述](../0515/uid1190679-20240524-1716538783754.png)

- 如果前面的语句SQL语句能执行
- 后面报错了
- 那前面执行的还算数吗？

- IINSERT INTO test(num,data) VALUES('123','new');
	- 这句成功了吗？

### 查询数据

```
SELECT 
    *
FROM 
    test
WHERE
    data = 'new'
;
```

- 并没有插入成功！

![图片描述](../0515/uid1190679-20240524-1716538918145.png)

### rollback的含义

- 所谓rollback
	- 回滚

![图片描述](../0515/uid1190679-20230406-1680777427460.png)

- 在上一次回滚(rollback)或者提交(commit)之后
	- 会执行很多sql事物(transaction)
- 如果没有问题
	- 进入else子句
	- 执行确认commit
	- 全部确认

![图片描述](../0515/uid1190679-20230406-1680777631154.png)

- 否则的话
	- 进入except子句
	- 执行回滚rollback
	- 全部作废

### 总结

- 这次使用了psycopg3的标准模式
	- 如果成功的话
		- 就提交
	- 否则就回滚
	- 最终关闭数据库连接
- 关于传递参数有什么推荐吗？🤔
- 下次再说！👋