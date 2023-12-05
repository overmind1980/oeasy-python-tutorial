---
show: step
version: 1.0
enable_checker: true
---

# sqlalchemy

## 回忆

- 次安装了
	- postgres数据库
	- sqlalchemy包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672301482275)

- sqlalchemy如何对postgresql数据库点石成金呢？

### 确认环境

- 确认服务、库、表都ok

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672302420100)

- 开始编辑py文件
	- 尝试连接

### 观察文档

- https://docs.sqlalchemy.org/en/20/tutorial/engine.html#tutorial-engine

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672302569858)

- 什么是引擎呢？

### 引擎

- engine

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672302950652)

- 自己能够跑起来的东西
- 带动整个车船运动的核心

### 照猫画虎

```
from sqlalchemy import create_engine
engine = create_engine("sqlite+pysqlite:///:memory:", echo=True)
```

- 这个代码会建立一个在内存中的引擎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672302791173)

- 可以建立一个postgresql的引擎吗？

### 搜索

- 貌似可以建立一个pg的引擎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672304189611)

- 使用postgres+psycopg2作为驱动
- 字符串好长
- 这都什么含义呢？

### 具体含义

- 驱动
- 用户名
- 密码
- 主机地址和端口
- 数据库名称

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672304541431)

- postgres的密码还得修改一下

### 修改密码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672304786412)

- 运行时报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672304823368)

### 安装psycopg2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672304858178)

- 运行不报错
- 说明引擎已经可以发动起来了


### 总结
- 我们下次再说