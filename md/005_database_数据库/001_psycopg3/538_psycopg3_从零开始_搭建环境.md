---
show: step
version: 1.0
enable_checker: true
---

# psycopg3

## 准备环境

- 先装数据库

```
sudo apt update
yes | sudo apt install postgresql
```

- 安装 postgresql数据库

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672299781292)

### 建库建表

- 可以参考[oeasy教您玩转postgres](https://www.lanqiao.cn/courses/2782?tab=labsList)

```
sudo service postgresql start
```

- 开启数据库服务

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230323-1679566975236)

- 以postgres身份	
	- 进入psql

```shell
sudo -u postgres psql
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230323-1679567005240)

### 具体代码

- 先建库

```
CREATE DATABASE oeasydb;
```

- 再进库


```
\c oeasydb;
```

- 然后建表


```
CREATE TABLE login(
	username varchar(20),
	password varchar(20)
);
```

- 具体效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230323-1679567161832)

### 官网帮助

- 找到帮助手册
	- https://github.com/psycopg/psycopg2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672306709515)

### 帮助文档

- 文档位置
	- https://www.psycopg.org/docs/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672306810415)

- 其实还有一个 psycopg3 可以安装

### 观察版本

- https://www.psycopg.org/psycopg3/docs/basic/usage.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672310600221)

- 找到Documentation

### 安装步骤

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672310652554)

### 照猫画虎

- \q从pg退回到shell

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230323-1679567246152)

- 安装psycopg3的库

```
pip install --upgrade pip
pip install psycopg[binary]
python3

```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672310773721)

- 安装这个包
	- 安装后进入游乐场
		- 查看版本

### 查看版本

```
import psycopg
psycopg.__version__

```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672310744554)

- 这个psycopg3什么意思呢？

### 词源分析

- psycopg是
	- 最流行的postgres的适配器(adapter)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672307352651)

- psycopg3 = psyco + pg + 3

### psyco

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672307392816)

- 最早是 一个项目
	- 目的是 
	- 提高python的执行效率

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672307656418)

- 但是这个项目
	- 在2012年终止
- 临终 推荐pypy

### 后续

- pypy属于 
	- 民间编译器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672307761626)

- 运行速度比cpython快4.8倍

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672307872877)

- 可见 技术过硬

### psycopg3

- 是目前最流行的postgres适配器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672307944212)

- 3是最新版本

### 总结

- 这次安装了
	- postgres数据库
	- psycopg3 适配器 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672308400769)

- psycopg3 如何适配 postgres 呢？
- 我们下次再说