---
show: step
version: 1.0
enable_checker: true
---

# 执行shell命令字符串

## 回忆上次内容

- 乘方运算符是\*\*
  - 优先级高于乘除
  - 浮点型和整型都支持
  - 我们学了好多运算符
	- 加法是最基础的运算
	- 减法是加法的逆运算
	- 乘法是累加
	- 除法是乘法的逆运算
	- 乘方是累乘
	- 对数是乘方的逆运算
- 为什么先乘除后加减？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664360964427)

- 这就得回忆ast树生成的时候
	- 优先级
	- 结合性
- 一层层的
	- 就像套娃一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230416-1681609809534)

- 具体到py程序 也是一层层的
	- python3 是 zsh上的 应用
	- math 是 python3 里面的包

- 我想跳出这个层级
	- 在python程序中
		- 直接执行shell中的命令
- 可以吗？🤔

### 搜索内建(builtins)函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661648025198)

- 真的好多啊
- 有个exec函数
- 具体什么意思呢？

### 查询

- help(exec)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661648363573)

- 可以执行一个源(source)
- 我们去执行一下

### 例子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661648499494)

- 字符串确实能执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661648568969)

### 引号

- 如果有引号需要转义(escape)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661648519956)

- 如果里面还有引号需要转义
- 可以执行输出么？
- 动手试试

### 输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661648755633)

- 有点复杂
- 但是可以用三引号解决转义的问题么？

### 三引号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661648924714)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661648934085)

- 好像是可以的
- 可以执行多行python代码么？

### 执行多行代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661649099413)

- 确实可以！！！
- 可以自己执行自己么？

### 套娃

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661650499583)

- 这不是套娃么？
- 禁止禁止套娃！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661650558352)

- 说到底
- 什么是exec呢？

### 词源

- exec来自于execute

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661649284006)

- 执行法律的判决
- 比如死刑立即执行
- 执行之后就是executed!
- 究竟是怎么完成的呢？

### 汇编理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661649585772)

- 通过调用函数完成的
- 具体怎么做的呢？

### 源码位置

- 在github的cpython中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661650392914)

- 有个模块builtins
- 对应着开发语言是c语言

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661650400681)

- 这样就直接调用外部的shell命令了
- 不需要再写个loop.sh之类的东西
	- figlet
	- cowsay
	- lolcat
	- banner
	- 都能直接调用
- 一个py文件就全有了
- 人生苦短
- 先去总结


## 总结
- 这次学习了一个函数exec
	- 意思是执行
	- 执行的是python的代码字符串
- 可以用三引号来执行很多句	
	- 很长的程序就是很长的字符串
	- 字符串可以一把执行
	- 具体也是这么一句句执行的
- exec("a = 1") 就
	- 声明了 变量a
	- 并且 给a赋值为1
- 变量 是编程的基础
	- py程序是一行行编写的
	- python语言 也是一点点进化的
- 作为 Guido业余爱好的python
	- 是如何走向世界
	- 成为编程语言第一的呢？🤔
- 我们下次再说！👋






