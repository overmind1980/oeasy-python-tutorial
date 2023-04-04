---
show: step
version: 1.0
enable_checker: true
---

# 变量定义

## 回忆上次内容

- 我们把python源文件
	- 词法分析 得到 词流(token stream)
	- 语法分析 得到 抽象语法树(Abstract Syntax Tree)
		- 这里确立了优先级
			- 乘方运算最靠前
			- 先乘除后加减
			- 有括号的要优先
	- 编译 得到 字节码 (bytecode)
	- 字节码我们看不懂
		- 所以反编译 得到 指令文件(opcode)
			- 指令文件是基于python虚拟机的虚拟cpu的指令集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628992691650)
- 先从 python3的最基础的 
	- 变量声明和赋值来看看 
		- python虚拟机是如何做的？🤔

### 反编译

- 看起来还挺明确的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659149439876)

0. LOAD_CONST
	- 把一个数字常量(CONST)1
	- 装载(LOAD)进来
2. STORE_NAME
	- 把刚才装载进来的1
	- 存储(STORE)
	- 在a这个变量名(NAME)里面
- 具体二进制代码(opcode)什么样的呢？

### opcode

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659152228762)

- 先把var.py反编译
- 然后在`__pycache__`中观察对应的pyc文件
	- :%!xxd 转化为字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659152184477)

- 可以看到那个数字常量1(红框)
- 前面的0x64是什么意思呢？

### 查询操作码对应助记符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667011993750)

- 具体的数字来自于哪里呢？
	- 由于a = 1 太特殊
- 我们来个不那么特殊的数字
- a = 0x23

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667015278850)

### 继续

- 2 句 python语句
	- abc = 0x23
	- efg = 0x45

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667015387664)

- 各对应两条指令码(opcode)
	- LOAD_CONST(装载常量)
	- STORE_NAME(在变量名中存储)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667015703932)

- 可以从pyc的字节码中查看到
	- 字符串类型呢?

### 字符串变量声明与赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667015884213)

- 还是1条python语句
	- 对应2条指令码(opcode)
- 具体长啥样呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667019792817)

- 在字节码里面写得明明白白
	- oeasy这个变量名
	- o2z这个字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667020089649)

- 我们总结一下吧


- 尝试调试一下吧

### 尝试调试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658633855234)

- 我们一行行来

### 调试

- 第1行执行之前(红色)
	- a,b都不存在
- 第2行执行之前(绿色)
	- a为1，b不存在
- 第2行执行之后(蓝色)
	- a为1，b为2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658634127074)

- 结论
	- 声明、赋值之前
	- 不能使用变量
	- 声明、赋值了之后
	- 才能使用变量
- 可以看得清清楚楚
	- 这个不难啊

## 总结

- 这次我们调试和反编译了数据的定义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658928941006)

- 变量的定义和赋值对应两句指令
	- LOAD_CONST
	- STORE_NAME
- 变量在声明和赋值之前是不能被引用的
	- 没有被声明的变量
	- 也就没有生命
	- 不能in the name of 那个变量
- 声明和赋值 用的就是字符串
	- "a = 1"
- 我们可以直接
	- 把字符串"a = 1" 当做参数
		- 直接执行一下吗？？🤔
- 我们下次再说！👋






