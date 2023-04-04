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
	- 这个bug虫子🕷
		- 是有历史渊源的
- 为什么写程序
	- `都`从hello world开始？🤔

### 为啥总是 `Hello World`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786932296)

- 各种语言都从 `Hello World` 开始

### 奇怪🧐

- 不论学习 什么编程语言
	- 总是从 `Hello World` 开始

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786792262)

- 那我们来看看
	- `c语言`和`hello world`的故事

### c语言

- `linux`系统的老祖宗是 `unix`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786951642)

- `unix`对应的编程语言 `c`语言

### 出现

- 1960年
	- Dartmouth 出现另一种`分时系统`
	- 可以让主机同时面对多个终端
	- 以非独占的方式进行使用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1675991184059)

- 贝尔实验室、通用电气、MIT 心动了
	- 想要制作类似的操作系统

### multics

- 计划的系统叫做multics

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663936998908)

- multics很注重多
	- 多用户
	- 多任务	
	- 多层次
	- 多则惑
- 1969 年
	- 发生金融动荡
	- 这个商业项目由于进度不可控
	- 最终被裁撤

### multics模拟器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230303-1677805119584)

### 两人

- 项目组被裁撤后
	- 无所事事的两人
	  - `Kenneth Thompson`
	  - `Dennis Ritchie`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663935942818)

- 他俩曾在 multics项目专用主机Ge635上
	- 自制游戏了 《space travel》
- 这下子主机没有了
	- 游戏也没法玩了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937098438)

### 新的希望

- Thompson希望能搞到一个PDP系列主机
	- 好继续玩`star travel`

- 他写报告 申请买一个PDP-10
	- 大概需要12万美元
	- 结果是请求被驳回

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230108-1673150396048)

- Thompson 发现了意外之喜

### unix

- Thompson 在实验室角落发现
	- 有一台几乎全新的PDP-7
		- 1964年生产的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1675990891672)

- Thompson 利用multics中积累的经验
	- 三周做了 一个操作系统 `unix`
	- 但是 新系统上 怎么做应用 呢？

### c语言

- `Thompson` 和 `Ritchie`
	- 创造了 
		- `c`语言 
		- `c`语言的 编译器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937020742)

- 当时
	- `c` 是他们为了开发 `unix`应用
		- 而制作的语言
	- `unix` 是为了 能玩`star travel` 
		- 制作的系统
- 后来 实验室 
	- 新买了一台 PDP-11
	- 他们把unix移植到了PDP-11上

### hello world！

- `c` 和 `unix` 运行 PDP-11 上
  - 没有 文档
  - 没有 书籍
  - 甚至 没有人 知道

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613787540042)

- Ritchie 在ACM通讯上
	- 写了一篇文章

### 文章

- Ritchie于1974年7月的 the Communications of the ACM发表
- 这是UNIX与外界的首次接触
	- 结果引起了学术界的广泛兴趣并对其源码索取
- Unix第五版就以“仅用于教育目的”的协议
	- 提供给各大学教学用
	- 成为当时操作系统课程中的范例教材

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1675993994490)

- 各大学公司开始通过Unix源码对Unix进行了各种各样的改进和扩展
	- Unix开始广泛流行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230303-1677805284462)

- 在当时的环境中
	- 对于教科书的要求非常迫切
- 与二人同在 bell实验室的 
	- `Brian Wilson Kernighan` 
	- a.k.a `bwk`
    	- 开始和Ritchie一起
    		- 写 c语言的说明书

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

### 成书

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230303-1677805520953)

### 入门 

- 从 `c语言`开始
	- 最早的入门教学
		- 都是`hello world`
		- 习惯成自然之后
			- 所有的编程语言第一个例子都是`hello world`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677416973646)

- 是一种文化

### 出处

- hello world 出现在
	- 原书13页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230303-1677805675869)

- 都说计算机科技日新月异
	- `hello world`这个梗 
		- 为什么能一直流传到今天？

## 总结

- `hello world` 不是 从来就有的
	- 来自于 `unix`和`c`
	- 最初是Thompson的个人项目
	- 后来逐步发展成了操作系统的源头

- 最早的 高级语言学习 
	- 是从那张打字机用纸的手写代码 起源的
- 输出用的函数名`print`(打印)	
  -	也是 从那个时候来的 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677417086830)

- 最早输出的是字符串 是 `"hello world"`
	- 也是 从那个时候来的 
	- 这就成了一个梗
- - 都说计算机科技日新月异
	- hello world这个梗 
		- 为什么能一直流传到今天？🤔
- 我们下次再说！👋

