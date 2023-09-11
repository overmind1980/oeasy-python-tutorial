---
show: step
version: 1.0
enable_checker: true
---

# Hello World!

## 回忆上次内容

- 上次 设置了 断点
	- 断点 可以把代码 
		- 切成一段一段的 
		- 可以 更快地调试
  - 调试的目的 是 去除 `bug`
- 别害怕 `bug`
  - 一步步 总能找到 `bug` 
  - 这 就是 程序员基本功
	- 调试 `debug` 
- 这个bug 这个词🕷
	- 是有历史渊源的
	- 就像Hello World 一样
- 为什么写程序
	- `都`从hello world开始？🤔
	- 这里面也有什么历史渊源吗？

### 为啥总是 `Hello World`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786932296)

- 各种语言都从 `Hello World` 开始

### 奇怪🧐

- 不论学习 什么编程语言
	- 总是从 `Hello World` 开始

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786792262)

- 这种习惯是从什么时候开始的呢？

### c语言

- 这还要从
	- `c语言` 和`unix` 的故事说起

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685515780436)

- `linux` 系统的前辈是 `unix`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786951642)

- `unix` 上 主力的开发语言
	- 是`c`语言

### 出现

- 1960年以前
	- 计算机 都是以独占的方式执行
		- 批处理命令
- 1960年
	- Dartmouth 出现另一种 
		- `cpu分时系统`
			- `C`ompatible `T`ime-`S`haring `S`ystem
	- 可以让主机 同时 面对多个终端
	- 以非独占的方式 进行使用`cpu时间片`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1675991184059)

- 贝尔实验室、通用电气、MIT 心动了
	- 想要制作 基于分时系统 的 超级主机
- 多任务、多用户的`操作系统`
	- 由`此` 诞生

### multics

- 计划开发的系统
	- 叫做multics

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663936998908)

- multics很注重`多`
	- 多用户
	- 多任务	
	- 多层次
- 但是
	- 多则惑
	- 想要得越多 
	- 越不容易聚焦

### 暴风雨

- 1969 年
	- 发生金融动荡
	- 这个商业项目 
		- 由于进度不可控

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230601-1685624374014)

- 项目部最终被裁撤

### multics模拟器

- 今天我们还可以去模拟multics

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230303-1677805119584)

### 两人

- 项目组被裁撤后
	- 贝尔实验室中 无所事事的两人
	  - `Kenneth Thompson`
	  - `Dennis Ritchie`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663935942818)

- 怀念他们 在 multics项目专用主机Ge635上
	- 自制游戏的 《space travel》

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937098438)

- 这下子 主机都没了
	- 游戏也没法玩了

### 新的希望

- Thompson希望能搞到一个PDP系列主机
	- 好继续玩`star travel`

- 他写报告 申请买一个PDP-10
	- 大概需要12万美元
	- 结果是请求被驳回

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
- 制作的目标 很简单
	- 只为了 玩游戏
	- 少则得

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230601-1685624310751)

- 这个系统 
	- 被戏称为 unics
	- 和multics项目的`多`相比
	- 最大的特点就是 `一`
	- 非常简单
	- 抱一为天下式

- 如何 和这些文件进行互动呢？

### 三周做了 一个操作系统 

- `Thompson` 太太
	- 休了三周假
	- 带着1岁的儿子回娘家
- `Thompson` 
	- 有了三周不受打扰的工作时间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685517389208)

- 三周目任务
	1. 第1周 实现了 shell
	2. 第2周 实现了 editor
	3. 第3周 实现了 assembly compiler

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937020742)

- 怎么让 这个系统更通用呢？

### c语言 

- `Thompson`  和 `Ritchie`
	- 创造了 
		- `c`语言 
		- 还有 `c`语言的 编译器

- 当时
	- `c` 本来是 为了开发 `unix`应用
		- 而制作的语言
	- `unix` 是为了 能玩`star travel` 
		- 制作的系统

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685518132864)

- 后来 实验室需要 处理大量的专利文书
	- `Thompson` 洞悉到管理层需求之后
	- 以制作一个专利文书管理系统的名义
	- 申请购买一台 PDP-11
- 很快的
	- 他们把unix移植到了PDP-11上
	- 这台PDP-11 有多强呢？

### PDP-11配置

- PDP-11配置
	- 24KB的物理内存
	- 500K 磁盘空间


- 1969年
	- `c` 和 `unix` 运行 PDP-11 上
	  - 没有 文档
	  - 没有 书籍
	  - 甚至 没有人 知道

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685518355726)

### 文章

- `Ritchie` 于1974年7月的 the Communications of the ACM发表
	- 《The UNIX Time Sharing System》

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230601-1685621304279)

- https://archive.org/details/UNIX-Time-Sharing-System/mode/2up?view=theater

- 这是UNIX与外界的首次接触
	- 结果引起了学术界的广泛兴趣并对其源码索取

### 进阶

- Unix第五版就以“仅用于教育目的”的协议
	- 提供给各大学教学用
	- 成为当时操作系统课程中的范例教材

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1675993994490)

- 各大学公司开始通过Unix源码
	- 进行了各种各样的改进和扩展
		- Unix开始广泛流行

### 从无到有

- unix 伴随着 多用户多任务操作系统 
	- 从无到有
- 这两个贝尔实验室的大牛
	- 也自然成为这个领域的明星 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230303-1677805284462)

- 在当时的环境中
	- 对于教科书的要求非常迫切

### 教科书

- 与二人同在 bell实验室的 
	- `Brian Wilson Kernighan` 
	- a.k.a `bwk`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613787540042)

- 开始和Ritchie一起
	- 写 c语言的说明书

### 成书

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230303-1677805520953)

- 书中有一个非常经典的例子

### 入门 

- 从 `c语言`开始
	- 编程语言 的入门教学
		- 都是`hello world`
		- 习惯成自然之后
			- 所有的编程语言第一个例子都是`hello world`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677416973646)

- 是一种文化

### 出处

- hello world 出现在
	- 原书13页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230303-1677805675869)

- 当然最开始这个案例
	- 还是手写的

### 手稿

- 主函数 叫做 `main`函数
  - 里面输出函数 叫做 `printf`函数
	- 输出的内容就是
		- <span style="font-size:36px">Hello, world!</span>
		- 这句`hello，world!`他们也是引用的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613787458918)

- 不管是`main`函数
	- 还是`printf`函数
		- 都有`小括号`
		- `小括号` 从那个时候 就和函数相关
- 为什么 输出字符
	- 要用`printf` 来当`函数名` 呢?

### print 来历

-  1974 年的手稿😱
  - 写在 `打字机`用纸上面
  - 侧面的孔洞 是向上`送纸`用的
	 - 是不是 很机械 很像胶片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663383261312)

- 打字机 就是 
	- 当时的显示器
- 所以用 `print`来表示输出
  - `f`的意思是 `format`格式
  - `printf`是 按格式输出

### 细节

- `printf函数` 后面有`小括号`
  - `小括号`里面放的是 `函数`的`参数`
  - `print("hello world")` 中 
	- `print函数` 的 `参数` 是 `"hello world"`
- `双引号` 引起来意味着
	- `hello world` 是 `字符串`
	- 输出的内容就是
		- 这个字符串 `"hello world"`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663932020080)

- 小括号 和 双引号的风格 
	- `延续`到了python

## 总结

- `hello world` 不是 从来就有的
	- 来自于 `unix`和`c`
	- 最初是Thompson 为了游戏而制作的个人项目
	- 后来逐步发展成了操作系统的源头

- 最早的 编程语言学习 
	- 是从那张打字机用纸的手写代码 起源的
- 输出用的函数名 `printf`(打印)	
  -	也是 从那个时候来的 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685518717156)

- 最早输出的是字符串 是 `"hello world"`
	- 也是 从那个时候来的 
	- 这就成了一个梗
- 都说计算机科技日新月异
	- hello world这个梗 
		- 为什么能一直流传到今天？🤔
- 我们下次再说！👋

