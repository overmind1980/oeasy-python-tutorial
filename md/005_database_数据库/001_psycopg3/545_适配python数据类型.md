---
show: step
version: 1.0
enable_checker: true
---

# psycopg3

## 回忆

- 上次主要是研究了PrepareStatement
- 通过sql的statement直接执行就好
	- 为什么还要prepare呢？
- preparedStatement有4点好处
	1. 解决转义字符问题
	2. 解决sql 注入问题
	3. 变量更加明确
	4. 可以传递二进制参数
- 这些变量类型究竟应该如何理解呢？

### 布尔类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672405270243)

- pg内部

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672405287635)

- 通过代码应该什么情况呢？

### 通过代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672405331163)

- python的布尔类型
	- 会转化为true或者false

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672405363142)

- 注意得到的确实是布尔类型
	- 而不是带引号的字符串
- 为什么会这样转化呢？

### postgres 数据类型

- python语言的查询中使用了布尔类型的变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672406099725)

- python的中的布尔类型 刚好对应postgres中的boolean类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672405958647)

- 其他类型是如何对应的呢？

### 数字类型适配

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672406140755)

- python中的int 
	- 根据大小对应pg中的smallint、integer、bigint、numeric

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672406208778)

- python中的float 
	- 对应 pg中的 float8
	- 8字节
	- 双精度浮点数
- python中的精确浮点数Decimal
	- 对应pg中用户定义精度数值numeric
- 从pg到python的时候
	- 单精度浮点会变成float
	- 双字节、四字节整数会变成int

### 字符串类型适配

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672406562851)

- python中的str 
	- 转化成 pg中的字符串
- pg中的text和varchar	
	- 转化成 python中的字符串

### 编码格式问题

- pg数据库有两个编码格式
	1. pg是本身的编码
	2. 连接时候会话(session)的编码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672406837354)

### 读取字节流

- 观察文档

- 可以
	1. 设置客户端编码
	2. 然后读到的就是字节序列
	3. 然后再解码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672408932064)

- 准备环境

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672408997598)

### 读取文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672409788872)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672409810774)

- 确实可以得到字节流
- 并且解码

### 总结🤔
- 下次再说！👋并且解码