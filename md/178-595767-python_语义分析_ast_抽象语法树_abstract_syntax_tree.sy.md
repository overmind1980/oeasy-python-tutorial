---
show: step
version: 1.0
enable_checker: true
---

# 乘方运算

## 回忆

- 上次学习了乘方运算符是\*\*
  - 优先级高于乘除
  - 浮点型和整型都支持
  - 我们学了好多运算符
	- 加法是最基础的运算
	- 减法是加法的逆运算
	- 乘法是累加
	- 除法是乘法的逆运算
	- 乘方是累乘
	- 对数是乘方的逆运算
- 运算符就是这样一步步累积起来的🤪
	- python 对于整型有着特别的优化
- 不同类型数值之间运算时
  - 默认是隐式转化
  - 也可以强制进行显示转化
- 我们运算是有优先级的
	- python究竟是如何理解优先级的呢?
	- 为什么python就会知道先乘除、后加减呢？🤔
- 这事情说来话长
	- 还是得从词法分析开始

### 纯文本


```python
print("1982------Guido in cwi")
print("1995------Guido in cnri")
print("2000------Guido in beopen")
print("2005------Guido in google")
print("2012------Guido in dropbox")
print("2020------Guido in microsoft")
```

- 从字符流生成token流

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658906135736)

### 分词

- 首先把一个个字符组成词
- 分析一下哪些字可以组成词
	- 术语叫词法分析(lexical analysis)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658908295275)

- 词分析出来之后呢？

### 组词

- 词分析出来就是怎么组词的问题
	- 哪些词和哪些词先组合
	- 哪些词和哪些词后组合
- 生成一棵抽象语法树
	- AST(Abstract Syntax Tree)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658909688937)

- 我能看看这棵ast树么？

### 引入ast模块



![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658925466556)

- 具体怎么做呢？

### 流程

- 先把这个ast模块导入(import)进来
	- 第一句就是import ast
	- 回车之后没有任何报错
	- 那就是执行成功了
	- 后面也一样
	- 没有报错就是执行成功了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658909122564)

- 然后读取guido.py并送到s
- 然后对于s进行语法分析(parse)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658925492980)

- 再把分析(parse)的结果进行转储(dump)

- 看起来有点乱
	- 可以清晰一些么？

### 升级Python

- 目前lanqiao.cn上面的python是3.8
- 这个清晰缩进的格式需要在3.9以上完成
- 需要升级

```
sudo apt update
sudo apt install python3.9
```

- 升级之后就可以使用Python3.9了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664360627007)

### 缩进换行

- 只能在本地演示一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664360866709)

- 这个就是把词组成语法树的样子
- 如何理解这棵树呢？
- 我们看一个例子

### 表达式运算

- 如果给的表达式为 1 * 2 * 3

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664360928341)

- 结合序为下图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663325108992)

- 前两个先结合
- 得到的结果作为下一个运算的左操作数
- 然后和第3个结合

### 结合序

- 如果把 第一个* 改成 + 号
- 其他什么也没加

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664360964427)

- 表达式是1 + 2 * 3 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663325011191)

- 后两个会先结合
- 得到的结果作为下一个运算的右操作数
- 然后再和1进行加法运算
- 有了语法树
	- 下一步要做什么呢？
- 这棵语法树我们能看懂
- 但是cpu需要的是能执行的一条条字节码指令

### 翻译成字节码

- 要把源程序翻译成字节码才能执行
	- 字节码对应着cpu的指令
- 怎么把ast转化为字节码(指令)呢？
	- 需要编译(compile)
- 从一种语言到另一种语言
	- 从py文件
	- 到字节码(指令)
	- 就是编译

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658925899605)

### compile

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658928804149)

- 我可以看看这个编译过程么？

### 编译结果

- 先看看这个pyc文件
	- 注意他在`__pycache__`文件夹下
- :%!xxd 
	- 把文件转化为字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664325310404)

- 这纯纯的机器语言字节形态
	- 实在是看不懂啊😭
	- 这真的是指令么？
- 究竟什么是指令呢？

### 指令

- instruction
- python3 -m dis guido.py
	- -m 代表使用模块
	- dis 代表反编译(disassemble)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658909929825)

- 我们可以看见	
	- 前面是行号
	- 每行对应4条指令
		- LOAD_NAME 装载(函数)名字
		- LOAD_CONST 装载常量
		- CALL_FUNCTION 调用函数
		- POP_TOP 弹栈

### 指令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658926770489)

- 这样我们能否找到
	- 4条指令分别对应的字节状态值

|  指令助记符   |指令含义 | 十进制状态 | 十六进制状态 |
|  ----  | ----  | ---- | ---- |
| LOAD_NAME | 装载函数名称  | 101 | 0x65 |
| LOAD_CONST | 装载参数 | 100 | 0x64 |
| CALL_FUNCTION  |调用函数| 142 | 0x8e |
| POP_TOP | 弹栈返回 | 1 | 0x01 |

- 可以找对应关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658928133492)

- 我们从头捋一下

### python3 执行过程

- 不管是python3这个游乐场
	- 还是hello.py这个python程序
	- 都在我们的硬盘上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664343253858)

- 先得把文件从硬盘读到内存

### python3 执行的过程大致是这样

- 先把python3.8这个主解释器加载到内存中
	- 然后在x86-64的cpu上执行
	- 模拟出一台python虚拟机

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210810-1628603452610)

- 准备开始对py文件解释执行

### 先编译

- 然后把参数 `guido.py` 这个需要执行的程序加载到内存
	- 词法分析 得到 词流(token stream)
	- 语法分析 得到 抽象语法树(Abstract Syntax Tree)
	- 编译 得到 字节码 (byte_code)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658928941006)

- 也就是编译后的pyc文件

### 解释执行

- 不过这个pyc指令文件
	- 是基于python虚拟机的虚拟cpu的指令集的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663382589612)

- 需要放到模拟好的python虚拟机中
- 一条条指令进行执行

### 换句话说

- 简化版的 hello.py 的执行过程是：
  - 给了 `python3` 一个参数 `guido.py`
  - 使用 `python3` 这个解释器来解释执行 `hello.py`
  - `hello.py`中的语句一句句地依次解释执行
- 全解释完成后
	- 退出python这个程序
	- 把控制权交回到shell

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613785900516)

- 这些都是基于解释器python的
	- 所谓的解释器也是
		- 先编译成python虚拟机的字节码
		- 然后用python虚拟机解释直接执行
- 而解释器(python3)是在不同系统不同架构的cpu语言上运行的 
	- 那不同的系统、cpu架构
	- python都能正确地解释么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663382966059)

### 总结

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
- 我们下次再说👋
 

