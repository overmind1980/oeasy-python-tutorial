---
show: step
version: 1.0
enable_checker: true
---

# 换行字符

## 回忆上次内容

- struct包可以让我们使用c语言的封包格式
- pack函数就是封包
- unpack函数就是解封
- 我们通过字节的方式便利了一次ascii码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664026920986)

- 还是有那片黑色的区域
- 那里面到底有些什么秘密？🤔
- 我们这次向黑色区域进发！！
- 先去我们熟悉的字符区域建立营地

### chr

- 先看看"oeasy"这个字符串是如何存在的🤔


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651841667687)

- 字符都对应着一个数字
- 这个数字在计算机中是用二进制形式存储的
- 可以看看这个二进制形式么？
- 数字在计算机上究竟是如何存储的呢？

### chr

- 8bit 构成 byte

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651844734810)

- 上图的字节为
	- (0011 0101)<sub>2</sub>
	- (35)<sub>16</sub>
	- 对应着字符'5'

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651845915629)

- 那字母呢？
- abcd在内存什么情况？

### 文件编码

- 编写一个文件
  - 写下 abcd
  - 用 `:%!xxd`
  - `:%!xxd -r` 变回来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220218-1645166781622)

- 可以看到文件是用 `2进制` 方式存储的
  - 0x61 - a
  - 0x62 - b
  - 0x63 - c
  - 0x64 - d

- 不论是内存、硬盘还是网络传输
	- a 对应
	- (0b01100001)<sub>2</sub>
	- (0x61)<sub>16</sub>
- 图中最后的那个 0x0a 对应什么字符？？？

### 善用函数

- 使用chr得到相关字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664530744930)

- 0x0a对应的是'\n'这个字符
- 这个字符好像在哪里见过

### 回到最初

- 想要了解这个'\n'
	- 我们还得回到最初
- 我们回到开始的时候

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613818969577)

- 前面介绍的 c 语言的第一个程序

### \n

- 注意到`hello world`后面的`\n`了么？
  - 注意到`hello world`后面的`\n`了么？
  - 特别注意斜杠的方向
	- 这个方向`\`叫反斜杠
	  -  键盘位置在回车键附近

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221007-1665144024805/wm)

- 那`\n`到底是什么？？🤔

### 输出"\n"

- `\n`整体作为一个字符的话
  - 序号是(`10`)<sub>`10进制`</sub>
  - 也就是(`0x0a`)<sub>`16进制`</sub>
  - 这就是在开篇时的`abcd`后面的字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664105452201)

- 我们直接把他输出看看
- 好像换了 `2` 行
	- 如果没`\n`的话，只换 `1` 行
	- 如果有`\n`的话, 就换 `2` 行


```python
#输出\n
print("\n")
#直接print
print()
#查看序号
ord("\n")
#查看十六进制的序号
hex(ord("\n"))
```

- 我们看看ascii码表是如何定义的

### 找到位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613819540402)

- 十进制的`10` 就是 十六进制的 `0x0A`
	- 这个数值在 `ascii` 码表中意思是 `LF`
- 啥意思？

### 搜索

- 搜索`\n`得到的结果是这样的
  - LF 意味着 Line Feed 
  - 喂行
  - 喂一行纸

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664106259312)

- 那我真的可以用这个`\n`在字符中间换行嘛？

### 尝试换行

```python
#输出字符串中带有\n
print("Hello\nWorld")
```

- 在游乐场中尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613824459904)

- 中途换行成功！
- 可以多来几个换行符吗？

### 多来几个

- 就往里面加`\n`

```python
#输出字符串中带有\n
print("He\nllo\nWor\nld")
```

- 显然这个 `\n` 就是一个换行
  - 字符串里面有个 `\n` 就意味着需要换 1 行
  - 他的英文是 `Line Feed`
  - 意思就是 `新换1行`
  - 这个东西其实比 ascii 的历史还要悠久
  - 从打字机的时代就有了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613824638913)

- 为什么要有换行符呢？

### 换行符

- 最最开始的时候分段落都是靠输出空格然后换行
  - 自从有了这个`L`ine`F`eed
  - 一个键就直接换行了
  - 所以`L`ine`F`eed 极大地提高了效率

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664531333906)
 
- 两个换行符就换两行
- 可以使用chr函数么？

### 使用序号得到换行符

```python
#输出ascii值为10的字符
chr(10)
#把这个字符放在print里面输出
print("hello"+chr(10)+"world")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664531394392)


- 纯文本中也会有回车符么？
- 我们去看看纯文本文件

### 打开文本文档

```
https://github.com/overmind1980/oeasy-python-tutorial.git
vi oeasy-python-tutorial/samples/000016/anderson_fairy_tales.txt
```

- 首先下载这个仓库

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664542671566)

- 我们发现这个东西是318K
- 那他有多少字符呢？

### 字符数量

- 1个英文字符占一个字节
	- 318k大概有318000个字节
	- 大概是31.8万个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664109266044)

- 这就是文本文件的形式
- 第一行的Andersen后面有应该有两个换行符
- 是不是呢真有换行符呢？

### 字节形式

- 所有行转化为字节形式
	- %!xxd
- 查找0a
	- /0a

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664542902104)

- 确实能够找到那两个换行符(0a)
- 这可以和纯文本方式对应起来吗？

### 纯文本方式

- 文本中的换行其实就是我们看到的换行符产生的效果
- 在文本观看模式下是换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664543068068)

- 在字节观看模式下是0a

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664543076624)

### 落实

- 文档当中就是用0和1来表示字符的
- 如下图所示
	- 文字是蓝色的
	- 字节是黑色的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220507-1651884661271)

- 为什么\n会用来表示换行(Line-Feed)呢?

### 追溯历史

- 最早`c语言` 中的 `\n` 来自于什么呢？
	- 来自于 `B语言`
	- `B语言` 是里奇和汤普逊最早开发 `unix` 的语言
	- `B语言` 1969 年 就 运行在`bell实验室` 的 `PDP-8` 上
- 1971 年里奇和汤普逊开始对于 `B语言` 进行改造
	- 在新买的 `PDP-11` 上用 `B语言` 给 `B语言` 写扩展，称之为 `NewB`
	- 1973 年 `NewB` 基本主体完成
		- 改名叫 `c语言`
	- 所以 `c` 其实是 `NewB`
- 他们用手头的编译器和`c语言`给 `PDP-11` 重写了一个 `Unix Kernel`
	- 机器语言和汇编语言本来不具有移植性
	- 就像x86的二进制程序不能直接运行在arm上
	- 需要移植
- `c语言` 程序却可以在 `很多架构` 的处理器上编译运行
	- 只要那种架构的处理器具有对应的 `c语言编译器和库`
	- 那就能顺利编译成针对该处理器架构的二进制程序
	- 甚至能实现跨平台编译
		- 也就是今天所说的交叉编译
	- 这就是 `c语言` 在当时能够发展的原因

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614253994886)

- `c语言`  源自 `B语言`
- `B语言` 也不是凭空创造的
	- 源自什么呢？

### Basic Combined Programming Language(BCPL)

- `B语言` 源自`BCPL(Basic Combined Programming Language)`
	- 1967 年由剑桥大学的 `Matin Richards` 制作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664111285170)

- 在同样由剑桥大学开发的 `CPL语言` 上改进而来
	- `BCPL` 最早被用做牛津大学的 `OS6操作系统` 上面的开发工具

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664111268767)

- 后来通过美国贝尔实验室的改进和推广成为了 `UNIX` 上的常用开发语言
	- 最早 `BCPL` 语言的样子就有个类似于l(ine)f(eed)的符号
	- 这是关于换行符表示法 最早的记录
	- 当时的换行符长什么样呢？

### BCPL的换行符

- 当时的换行符长成这样
  - !\*n

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664111516272)

- 上述程序的目是
	- 输出 hello,world
	- 然后再来个回车 
- 所以hello world
	- 并不是c语言的发明
	- 而是从c语言的爷爷那时候就有了
	- 在bcpl时代就已经作为迷因开始了

- python虚拟机的可执行文件
- 也就是pyc文件是如何理解换行符的呢？

### 反汇编(disassemble)

- 观察一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664543457272)

- \n出现在字符串常量中
- 能在pyc中找到这个常量么？

### 先编译

- 将py文件编译成pyc文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664543550332)

- 再观察

### pyc文件 

- 打开pyc文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664543652382)

- 确实能够找到a和s之间的\n
- 任务完成！！！

## 总结

- `\n` 就是换行
	- 他对应着 `ascii` 字符的代码是(`10`)<sub>`10进制`</sub>
	- 他的英文是 LF，意思是`Line Feed`
- 这样我就可以自由的控制哪里换行了！
- 可以做下面这个框架标题吗？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210307-1615080578652)

- 我们下次再说！👋
