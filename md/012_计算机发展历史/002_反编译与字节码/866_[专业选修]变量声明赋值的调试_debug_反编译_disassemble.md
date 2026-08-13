---
show: step
version: 1.0
enable_checker: true
---

# 变量定义

## 回忆上次内容

- 上次把py源文件
	- 词法分析 得到 词流(token stream)
	- 语法分析 得到 抽象语法树(Abstract Syntax Tree)
		- 这里确立了优先级
	- 编译 得到 字节码 (bytecode)
- 字节码我们看不懂
	- 所以反编译 得到 指令文件(opcode)
		- 指令文件是基于python虚拟机的虚拟cpu的指令集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628992691650)

- 先从 python3最基础的 
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


- 如果赋值的字符串是一个中文呢？
- 可以在反汇编指令层面中看到utf-8编码么？😄

### 反编译

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659233757666)

- :%!xxd
	- 转化为字节码状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659233792439)

- 汉字确实可以在字节码状态中观察到

- 如果通过变量对变量赋值呢？

### 指向

- 声明变量a 并赋值为1
	- 是个数字变量
	- 是一个容器
	- 指向地址的值为1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659153020848)

- 声明b变量
	- 并且把a所指向的地址
	- 赋给容器b
- 这样a和b指向同一个地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659152729317)

- 如果再把2赋给a呢?

### 再赋值

- 当对a重新赋值的时候
	- a指向一个新的地址
	- b仍然指向原来的地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658633203622)

- 从汇编角度呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659153116902)

- 那可以 在一行快速对两个变量 进行赋值 么？
	- 连等 赋值 可以吗？
		- a = b = 3

### 连等赋值

- 可以一次赋值 好几个变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658633592267)

- 确实可以
	- 这样 也可以 提高效率

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681562807934)

- 其实这两个等号相当于两次声明并赋值
	- 先算的是左边的
		- b = 3
	- 再算的是右边的
		- a = b

### 汇编角度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659153262091)


- DUP_TOP是什么意思呢

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659153382969)

- 把栈顶的值(存储着1的地址)复制一份
	- 不但交给a
	- 同时也交给b
- 能否同时给两个变量赋不同的值？

### 一行赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667037463353)

- 这种情况经过一个解包过程
	- UNPACK过程
	- 将(3, 5)进行解包
- 然后分别STORE进a, b



### 汇编层面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659271723024)

- 观察pyc文件的字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659271746661)

- 他用的是小端法
- 为什么呢？

### 查询cpu架构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659272121830)

- x86-64属于复杂指令集CISC


## 总结

- 这次我们反编译和调试了数据的定义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658928941006)

- 变量的声明和赋值对应两句指令
	- LOAD_CONST
	- STORE_NAME
- 变量在声明和赋值之前是不能被引用的
	- 没有被声明的变量
	- 也就没有生命
	- 不能in the name of 那个变量

- 导入模块是怎么一个过程呢？🤔

- 我们下次再说！👋






