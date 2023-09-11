---
show: step
version: 1.0
enable_checker: true
---

# Hello World!

## 回忆上次内容

- `hello world` 不是 从来就有的
	- 来自于 `unix`和`c`
	- 最初是Thompson的个人项目
	- 后来逐步发展成了操作系统的源头

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1675993994490)

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

### 商业背景

- unix 是 Thompson 的个人项目
	- Thompsom 是 贝尔实验室的员工
	- 贝尔实验室是 AT&T的 下属机构
	- AT&T 被诉垄断禁止进入计算机行业
- 软件本身的特性 就是 免费拷贝
	- unix的源代码 扩散到 各个大学和研究机构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1675993397507)

- 这种文化 是 自由软件运动的基础
	- 自由地共享源码
	- 分散的方式合作开

### 流传

- unix 和 c语言 一直流传到今天

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230303-1677806312850)

- 除了 商业机构 还没有意识到 
	- 软件版权 可以盈利 之外
- 还有 一个重要的原因

### 成书

- 有了教材 就有 更多人学
	- 有更多人学 就有 更多人参与其中
	- 就像《说文解字》、《约翰逊字典》一样
	- 成为解释依据的源头

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613787632360)

- 正反馈 逐渐成型

### 教材风格

- 1978 年
	- `Kernighan`和`Ritchie` 出版了 这本书
		- 很薄
		- 轻松的语言风格
	- 因为 `c`的目的 就是让人 像玩一样编程
	- 而不是 记忆各种cpu汇编指令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677417377645)

- 蓬勃发展 的 计算机技术
	- 使得 `c`语言成为 系统语言的老大
	- `python`的源代码 就是用纯c编的
	- `linux`内核 也是用纯c编的
	- 所以`c` 是非常核心的

### python

- 虽说 `python` 是用纯`c` 编写的
	- 不过`python`一旦出现之后 
		- 就可以 简化好多东西
	- 比如 我们的python3(游乐场)里面
		- 有 很多的函数和模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663383962521)

- 为什么 python能认识print？
	- 而不认识pront？

### 内置 函数

- 首先运行 python3(游乐场)
	- 在游乐场中 键入 `dir()`
	- 可以看到 游乐场的自带模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677417942228)

- dir() 这个函数 
	- dir的意思是 
		- directory文档目录
	- 这里列出的是 
		- 已经导入模块的目录
- 调用 这个函数 
	- 可以知道 当前游乐场 
		- 载入了哪些模块
- 比如 `__builtins__`这个模块
	- 这 `__builtins__`里 又有些`什么`呢？

### dir()

- `dir(__builtins__)`
	- 注意builtins前后都是两个下划线
		- 两个下划线叫做dunder
		- `__builtins__` 念作 `dunder builtins`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933416018)

- `__builtins__` 是 游乐场自带的
	- 这里面 有好多内置的函数
	- 包括
		- exit()
		- dir()
		- help()
		- print()
- 为什么print() 
	- 直接就能用？

### `__builtins__`

- 因为`print`在 
	- 这个`__builtins__`模块中 
		- 内建的 模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646289345700)

- 如果我 想要查询
	- print函数 更详细的信息 
		- 应该如何呢？

### help(print)

- 什么不会 就help什么
	- `help(print)`
	- 把函数名 作为参数 传进去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646288588886)

- 类似的 还可以
	- help(quit)
	- help(help)
	- help(dir)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418149974)

- 如果我想要查询`__builtins__`模块
	- 更详细的信息 应该如何呢？

### `help(__builtins__)`

- `help(__builtins__)`
	- 注意 内置模块builtins左右
		- 还是 有dunder(两个下划线)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211211-1639232283926)

- 可以查询到`__builtins__`模块的帮助文件
	- 返回的 这些函数和子模块
		- 都隶属于 `__builtins__` 这个模块
		- 属于内置的模块
- 除了内置模块之外
	- 还可以导入 外部模块

### 导入 外部模块

- 导入命令 是
	- import
		- port是港口 
			- export 是出口 是导出
			- import 是进口 是导入
	- import 后面接空格
- 导入的模块 是
	- `__hello__`
		- `dunder hello`
	- 注意hello两边 
		- 都有dunder(两个下划线)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418325769)

- 把`__hello__`模块 导入到游乐场
	- 可以 输出那句经典的话

### 变化

- 注意！
	- 导入 `__hello__`模块后
		- 游乐场中的模块 增加了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418465935)

- 想要深入了解 `__hello__`
	- 应该怎么办呢？

### 什么不会就 help什么

```
help(__hello__)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933594048)

- 非常简单的 一个模块
	- 练手用的
- 文件不在硬盘上
	- 直接嵌入(built-in)在python3(游乐场) 

## 总结

- 商业机构 
	- 一开始没有意识到 
		- 可以对版权收费
- 代码在最开始的时候
	- 就是开放免费的
- unix源代码大规模扩散、变种、传播
	- 经典的教材 也让 c语言 成为 编程入门经典
	- 其中的 `hello world梗` 一直用到今天

- 1979年
	- AT&T公司 开始声明unix的版权
- 所以 1979年 hello 的 world
	- 已经不是 1969年 hello 的 world 了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933793795)

- 等等！
	- 计算机里面 不都是二进制的 0和1 吗
	- `hello`中的 `字母h` 是从哪里来的呢？🤔
- 我们下次再说！👋