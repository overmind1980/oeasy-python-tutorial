---
show: step
version: 1.0
enable_checker: true
---

# Hello World!

## 回忆上次内容

- 这次 了解到 
	- 计算机早期操作员 多是女性
	- 她们最早发明了 bug🕷 这个概念

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231031-1698745117237)

- 在bug出现的时候
	- 甚至还没有出现操作系统
- 那操作系统 
	- 是怎么开始有的呢？？🤔

### 出现

- 1960年以前
	- 计算机中的 任务
	- 都是 以独占的方式执行
	- 批处理 命令
	- batch

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695002059497)


### 分时算法

- 1960年
	- Dartmouth 出现分时算法
	- `cpu分时系统`
	- `C`ompatible `T`ime-`S`haring `S`ystem

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695002138410)

- 可以让主机 
	- 同时 面对多个终端
	- 以非独占的方式 
	- 轮流使用`cpu时间片`

### 操作系统

- 多任务、多用户的`操作系统`
	- 由`此` 诞生

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1675991184059)

- 贝尔实验室、通用电气、MIT 
	- 也想要制作 基于分时系统 的 超级主机


### multics

- 联合系统开发计划
	- multics
	- 启动

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663936998908)

### 两人

- 项目组里面有两个打工人
  - `Kenneth Thompson`
  - `Dennis Ritchie`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663935942818)

- 在 multics项目主机Ge635上
	- 自制游戏的 《space travel》

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937098438)

- 模拟物理环境
	- 在各个星球上着陆的游戏
	- 根据质量、周期、引力弓之类的
	- 在太阳系穿梭

### 暴风雨


- multics很注重`多`
	- 多用户
	- 多任务	
	- 多层次
- 但是
	- `多`则惑
	- 想要得越多 
	- 越不容易聚焦

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230601-1685624374014)

- 1969 年
	- 发生金融动荡
- 这个商业项目 
	- 由于进度不可控
	- 最终被裁撤

### multics模拟器

- 今天可以去模拟multics

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230303-1677805119584)


### 两人

- 项目组被裁撤后
	- 贝尔实验室中 
	- 无所事事的两人

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695002533372)

- 主机Ge635没了
	- 游戏也没法玩了

### 新的希望

- Thompson希望能搞到一个PDP系列主机
	- 好继续玩`star travel`

- 他写报告 申请买一个PDP-10
	- 大概需要 12万美元
	- 结果是 请求被驳回

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230108-1673150396048)

- Thompson 并没有放弃寻找
	- 不久之后 
	- 发现了意外之喜

### unix

- Thompson 在实验室角落发现
	- 有一台几乎全新的PDP-7
	- 1964年生产的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1675990891672)

- Thompson 利用multics中积累的经验
	- 开始做操作系统
- `Thompson` 
	- 拉上 `Ritchie`
	- 在 multics 文件系统的基础上
	- 实现了 unics 的文件读写

### unix

- 目标 
	- 只有一个
	- 为了 玩游戏
	- 少则得

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230601-1685624310751)

- 这个系统 
	- 被戏称为 unics
	- 和multics项目的`多`相比
	- 最大的特点就是 `一`
	- 非常简单
	- 抱一为天下式

- 如何 让计算机和这些文件
	- 进行互动呢？

### 三周

- `Thompson` 的妻子
	- 休了三周假
	- 带着1岁的儿子回娘家

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695003046710)

- `Thompson` 
	- 有了三周不受打扰的工作时间

### 三周做了 一个操作系统 

- 三周目任务

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937020742)

- 第1周. 实现了 shell 环境
- 第2周. 实现了 editor 编辑器
- 第3周. 实现了 assembly compiler 汇编语言 编译器

### 操作系统

- 这个世界从此上出现了
	- 一种叫 操作系统的东西
		- operating system

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231030-1698633965787)

- 操作系统
	- 在纯粹硬件 上 建立了 软件环境
	- 为 具体应用 提供 基础

## 总结

- 这次我们了解了unix系统
	- 在multics项目失败后
	- 汤普森和里奇 
		- 为了 玩游戏
		- 自制了 unix
- 但是有个疑问
	- 系统是用什么语言写的？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685517389208)

- 先有得编程语言 还是 操作系统？
	- unix这个系统 是用什么编程语言 写的呢？
	- 这编程语言 是运行在 什么系统上的呢？ 
- 咱们下次再说

