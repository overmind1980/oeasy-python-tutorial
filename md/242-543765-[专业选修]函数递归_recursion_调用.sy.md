---
show: step
version: 1.0
enable_checker: true
---

# 嵌套调用

## 回忆

- 上次了解函数
- 函数确实可以对自身进行嵌套调用
- 把函数的返回值作为参数传给函数
- 再次调用
- 函数可以在函数自身里面再调用函数么?
- 自己调自己...

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660617075433)

### 阶乘(factorial)

- factorial
	- factor 因数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660553455001)

- factorial, in mathematics, the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point. Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial zero is defined as equal to 1
	- 阶乘，在数学中，小于或等于给定正整数的所有正整数与感叹号的乘积。因此，阶乘7被写成7！，意味着1×2×3×4×5×6×7。阶乘零定义为等于1。

- Factorials are commonly encountered in the evaluation of permutations and combinations and in the coefficients of terms of binomial expansions (see binomial theorem). Factorials have been generalized to include nonintegral values (see gamma function).
	- 阶乘通常出现在排列和组合的计算以及二项式展开项的系数中（参见二项式定理）。阶乘已被推广到包括非整数值（参见伽马函数）。

### 阶乘结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660562843630)

### 思路

- 如果，当num==1时
	- factorial(1) = 1
- 否则，当num!=1时
	- factorial(num) = num*factorial(n-1)

- factorial(4) 
- = 4 * factorial(3)
- = 4 * (3 * factorial(2))
- = 4 * (3 * factorial(2))
- = 4 * (3 * (2 * factorial(1)))
- = 4 * (3 * (2 * 1))

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660698619331)

- 这有点像数学归纳法

### 数学归纳法

- 验证自然数求和公式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660616912065)


- 验证的基础P(0)
- 验证当n成立的时候，n+1也成立
- 于是公式成立
- 递归的程序也是一样的原理

### 构建

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660565165741)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660565179837)

- 具体怎么跑的呢？

### trace(跟踪)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660565597133)

- 设置断点

### 层层深入

- 函数调用的时候
	- num是8

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660565717165)

- factorial(8)会调用factorial(7)
	- num是7
- 然后一层层深入进去
- 这个函数掉进去之后不断地深陷
- 仿佛就没再出来

### 到达底层

- 当num==1时
	- 终于到达底部了
	- 进入第3行if语句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660566024047)

- 这层层嵌套的函数什么样子呢？

### 函数堆栈

- 这就是一个函数堆栈(stack)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660566593501)

- 一层层自我调用
- 再一层层地返回
- 这就是
	<h1> 递归(recursive)调用(call)</h1>

### 递归过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660566951229)

- 不过函数中的形式参数(formal parameter)都叫num

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/543765/uid1190679-20250110-1736518032002)

- 不会互相影响么？

### 压栈过程

- 在最开始进入函数的时候
	- num=8
	- 然后函数中调用factorial(7)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660567115015)

- 这些局部变量不会互相影响
- 就像套娃的感觉

### 堆栈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660725514376)

- 一层一层地压(push)栈(stack)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660725677973)

### 保护现场

- 每一层的都有各自的num变量
- 被保存在栈帧(stack frame)上
- 遇到递归调用先保存环境
- 然后继续往下探

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660699258182)

- 直到factorial(1)可以得到相应的结果返回
- 将返回的结果和帧栈上的东西相乘再返回
- 从汇编角度如何理解呢？

### 汇编角度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660568075426)

- 播放头运行到主程序字节码第14行的时候
	- 执行CALL_FUNCTION指令
		- 保护现场
		- 保存好当前这次调用中的num的值8
		- 这个局部变量num的值为8
		- 保存在栈上的这一帧里面
	- 播放头跳转到factorial函数字节码第2行
		- 继续执行下去
- 播放头执行到factorial函数字节码14行的时候
	- 执行CALL_FUNCTION指令
		- 保存现场
		- 保存好当前这次调用中的num的值7
		- 这个局部变量num的值为7
		- 保存在栈上的这一帧里面
	- 播放头跳转到factorial函数字节码第2行
		- 继续执行下去
- 这一层层深入都是汇编代码的解释器自动完成的


### 历史

- 在1940、1950年代
	- 编程主要用汇编语言
	- 最多写一些宏(macro)
	- 是一段段的指令
	- 当出现高级语言后
	- 函数自身调用自身充满数学哲学意味
	- 就像[衔尾蛇](https://www.bilibili.com/video/BV13s411N7Ha?p=8)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660721033780)

### 哥德尔机(Gdel Machine)

- 一台计算机可以虚拟出一台计算机
- 这台虚拟计算机也可以虚拟出一台虚拟计算机
- 虚拟系统相对于真实机器来说就是数据
- 数据总是被动地由更加“真实”的机器所操纵
- 当一台机器具备了内嵌虚拟层还不够
- 它还需要完成模拟自我的过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660724190367)

### 机器自我意识觉醒

人 | 机器 | 哥德尔机
--- | :--- |:---
表示自我 | 内嵌虚拟机 | 搜索器
体验自我 | 机器中除去虚拟机的其他软件部分 | 求解器
身体 | 硬件 | 输入输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660724651933)

- 这个道理就像照镜子
- 当你和你的虚拟重合为一
- 人类的自我意识就是这样觉醒的
- 从而出现智能爆炸
	- 哥德尔机自己能造哥德尔机
	- 指令集、操作系统、编译器、程序不断自我优化
- 目前真的可以无穷无尽地执行下去么？

### 无穷递归

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660616139261)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660616178543)

- 感觉有点死循环的味道
- 报错了
- 提示说递归错误(RecursionError)
	- 超过了最大的递归深度
	- 函数栈溢出了
	- stack overflow
	- 盘子摞满了
	- 没法子再摞了
	- 物理内存限制了递归的层级

### 总结

- 这次我们了解了递归
	- 递归就是函数自己调用自己
	- 这确实很方便
- 有点像数学归纳法
	- 一层层往源头走
	- 直到可以得到返回值的最初位置
	- 就是归纳开始的地方
- 自己调自己也不是无限调用的
	- 收到内存大小的限制
	- 超出了函数栈会溢出(stack overflow)
- 函数就是这么一个函数
- 函数接受新参数num的时候
- 原来的参数为什么不消失呢？
- 不应该覆盖了么？🤔
- 我们下次再说👋
