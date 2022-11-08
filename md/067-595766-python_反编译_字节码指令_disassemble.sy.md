---
show: step
version: 1.0
enable_checker: true
---

# 解释运行程序 🥊

## 回忆上次内容

- 我们把python源文件
	- 词法分析 得到 词流(token stream)
- 确实可以把文本文件分析出词来了 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658908295275)

- 分析出词来之后呢？
- 怎么把这些词组成可执行的程序呢？

```python
print("1982------Guido in cwi")
print("1995------Guido in cnri")
print("2000------Guido in beopen")
print("2005------Guido in google")
print("2012------Guido in dropbox")
print("2020------Guido in microsoft")
```

- python怎知道如何执行呢？
- cpu需要的是能执行的一条条字节码指令

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

- 我可以看看这个编译过程么？

### compile

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658928804149)

### 编译结果

- 编译(compile)之后得到是字节码指令文件
	- 所以扩展名是pyc
	- 其中c代表compiled
	- pyc是字节码(bytecode)文件
	- python虚拟机的虚拟cpu就可以直接执行了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663325761999)

- 先看看这个pyc文件
	- 注意他在`__pycache__`文件夹下
	- cache的意思是缓存
	- pycache两端各有2条下划线(_)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663325657861)

- 进这个文件夹看看

### 进入`__pycache__`文件夹

- 打开pyc文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658926059958)

- 得到的字节码看起来完全是乱码
	- 可以想办法看懂这些字节码么？
- vi打开这个这个pyc文件

### 二进制形态

- :set wrap设置换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658926113875)

- 这样看到了他的字符串形态
- 可以看到他的二进制字节形态么？

### 机器语言

- :%!xxd 
	- 把文件转化为字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664325310404)

- 这纯纯的机器语言字节形态
	- 实在是看不懂啊😭
	- 这真的是指令么？
- 究竟什么是指令呢？

### 指令

- instruction

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663326226931)

- 最早指的是教的行为或者过程
- 计算机领域里面特指指令
	- 比如加法指令
	- 减法指令
	- 可以让cpu做特定运算的指令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664335748946)

- 由于计算机只认识0和1 
- 所以要把这些加加减减的指令
- 对应到0和1的二进制形态上去
- 0和1的二进制形态我们记不住
- 于是有了汇编助记符
- 助记符告诉我们这条0和1的二进制形态
- 到底对应什么指令
- 助记符的语言就是汇编语言

### 汇编assemble

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663326075415)

- assemble指的是收集、集结
	- assembler指的是装卸工
- 在计算机中特指汇编语言
	- 可以让我们把0和1的机器指令
	- 收集起来形成的助记符集合
	- 就是汇编语言指令集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663326547015)

- 这就是汇编语言和0101的对应关系

### 反编译

- disassemble
- 这个词由两部分组成
	- dis (反着来的)
		- dislike
		- disgrace
		- disagree
	- assembler (汇编语言)
		- disassemble 反编译

- 把py源文件编译成的字节码(指令)我们人类看不明白
	- 把这些字节码(指令)反编译(disassemble)成汇编语言助记符
	- 有了助记符我们就知道指令的含义了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658926333940)

- 这可以用么？
	- 去试试！

### 反编译(dis)

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
- 总共6句
	- 对应6组字节码
	- 每组两个字节
- 那具体这个 LOAD_NAME 是要做些什么呢？

### 指令

- LOAD_NAME
	- 把一个值压入堆栈co_names
	- 把print这个函数名压入了堆栈
	- 一会儿就要调用这个被压入堆栈的print函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658926684921)

- 但是LOAD_NAME这条指令
	- 具体对应什么二进制字节状态呢？
- 这个去哪里找呢？

### python源头

- python是从哪里来的呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663293848481)

- python 是开源编程语言
- 整个的源代码都是开放的
- 我们可以去github找到他的源代码
	- https://github.com/python/cpython

### 二进制状态

- 搜索LOAD_NAME并且排查
	- 找到字节码状态位置

- 指令对应着一个字节码状态值
	- https://github.com/python/cpython/blob/main/Lib/opcode.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658926770489)

- 这样我们能否找到
- 4条指令分别对应的字节状态值

### 4条指令

|  指令助记符   |指令含义 | 十进制状态 | 十六进制状态 |
|  ----  | ----  | ---- | ---- |
| LOAD_NAME | 装载函数名称  | 101 | 0x65 |
| LOAD_CONST | 装载参数 | 100 | 0x64 |
| CALL_FUNCTION  |调用函数| 142 | 0x8e |
| POP_TOP | 弹栈返回 | 1 | 0x01 |

- 可以找到源代码的对应关系么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658928133492)

- 好像找到了
- 64XX
	- 64 00是从表中的00号位置取得字符串"Guido in cwi"
	- 64 01是从表中的01号位置取字符串"Guido in cnri"
	- ... 
	- 以此类推，直到05 83取出字符串"Guido in microsoft"
- 0x83 对应的是 GET_AWAITABLE
	- 可等待地调用
- 那这些二进制代码究竟是什么指令集的呢？
- 首先什么是指令集呢？

### 指令集

- 指令集 就是
	- 指令的集合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663326785642)

- 上图是arm的指令集
- 也常被称作arm架构
- 那什么又是架构呢？

### architect

- architect原本的英文含义是
	- 建筑

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663335173868)

- architecture
	- 造房子的人
	- 就是建筑师

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663335079170)

- 在cpu领域
	- architect
	- architecture
- 指的是什么呢？

### 架构师

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663335291565)

- 架构师
	- 软件开发行业从业者的终极形态
	- 非常硬核的存在

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663336418386)

- 那python的字节码用的是什么架构呢？
	- arm
	- 还是x86呢？

### 虚拟机的虚拟cpu

- pyc的这些字节码(bytecode)
	- 对应的是python虚拟机上面虚拟cpu的指令集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658928591441)

- 我们先把这节课总结一下

### 总结

- 我们把python源文件
	- 词法分析 得到 词流(token stream)
	- 编译 得到 字节码 (bytecode)
	- 字节码我们看不懂
	- 所以反编译 得到 指令文件(opcode)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658928941006)

- 指令文件是基于python虚拟机的虚拟cpu的指令集
- python虚拟机就是我们的python3.8
- 既然他能把Guido.py变成指令集
	- 放在虚拟cpu上执行
- 那可以把纯文本的字符串给执行出来吗？🤔
- 我们下次再说👋
 