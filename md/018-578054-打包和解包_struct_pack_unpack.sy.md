---
show: step
version: 1.0
enable_checker: true
---

# 解码 decode

## 回忆上次内容

- decode
	- 就是解码
- 解码和编码可以转化
	- encode 编码
	- decode 解码
	- 互为逆过程
- 大小写字母之间序号全都相差(`32`)<sub>`10进制`</sub>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221005-1664938405378)

- 这是为什么呢？🤔

### 差距

- 大写字母和小写字母相差(`32`)<sub>`10进制`</sub>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809097080)

- 为什么不多不少
- 就差 0x20 呢？
- 怎么那么寸呢？🤔
- 正好是(`0x20`)<sub>`16进制`</sub>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221006-1665023360907)


- 恰好是自己里面的一位(bit)
- 这是偶然的吗？

### ASCII 码表趣事

- 其实最初不是相差 0x20
	- 这个 0x20 正好是一个二进制位
	- 对应 b6 这个位
	- 之前 ibm 的 EBCDIC 编码并不是这样的
- 那为什么要改成这样子呢？
- 有了这种对应关系之后
	- 做大小写不敏感的字符串查找就快多了
	- 这个 0x20 发生在 1963 年 5 月
		- The X3.2.4 task group voted its approval for the change to ASCII at its May 1963 meeting.
		- Locating the lowercase letters in columns 6 and 7 caused the characters to differ in bit pattern from the upper case by a single bit, which simplified case-insensitive character matching and the construction of keyboards and printers.
- 当时的目的是	
	- 降低搜索大小写不敏感字符串匹配的难度
	- 降低打字机键盘的构造成本
- 如果搜索中遇到的是小写字母
	- 修改1位之后
		- 小写就都变成大写
		- 不用查找对应关系表匹配
	- 然后直接查找就好了
- 除了小写字母、大写字母之外
	- 数字字符又是如何表示的呢？

### ASCII 码表范围

- `0x41-0x5A`这个范围是大写字母
- `0x61-0x7A`这个范围是小写字母
- `0x30-0x39`这个范围是数字
  - 数字的编码减去`0x30`正好得到数字本身

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210916-1631769985863)

- 我们再来看看 ASCII 除了字母和数字还有什么？

### ASCII

- `0x20-0x7F`之间有各种符号
- `0x00-0x1F`之间的东西是什么？
	- 就是那片神秘黑色区域中
	- 目前还不知道
	- 感觉离那里越来越近了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809097080)


- ASCII中的字符本来英语里面就有
- 但是编码解码的关系是如何建立的呢？

### ASCII由来 

- ASCII码是由电报代码发展而来的
	- 第一个商业用途是作为一个七位电传打字机(tele-typewriter)代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662886966127)

- 由贝尔数据服务公司推广

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662887439117)

- 那最初的电报码是什么样子呢？

### 更早之前的摩斯电码

- 下图是他的编码表
  - 分成长和短两种信号，就是嘀和嗒

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210222-1613991303914)

- [《oeasy 教您玩转电路基础》第 18 话](https://www.bilibili.com/video/BV1Es411Z7MH?p=18) 里面有介绍
  - 欢迎您有机会来看看oeasy电学、科学史那几个系列


- 还记得encode/decode中的code么？
	- 曾经一度指的就是各种电报编码汇编
	- 后来统一到摩斯电码

### 摩斯电码通信规则

- 下图是他的通信规则
	- 三个断确认本字符结束了
	- 三个断就是字符之间的分隔符
	- 录入状态并不是 0、1 两种状态
	- 而是长、短、暂停三种状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210222-1613991040485)

- 编码的原则是什么呢？

### 效率问题

- 编码的规则是常用的字符点击次数少
	- 按照字符出现概率分配对应点击数量
		- `T`、`E` 出现频率最高
		- 所以用一次点击电键的数量
	- 本质上是一棵霍夫曼树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210222-1613991449293)

- 当时完全由人进行发射和接收
	- 每个人发送数据的速度是不固定的
	- 每个人接收数据的速度取决于发送人的发送速度
	- 现查表是来不及的
	- 需要熟悉编码表和常用缩写
- 这摩尔斯电报编码个ascii有什么关系呢？

### 回到 ASCII 码

- 电报传过来的信号需要打出来
	- 于是有了电传打字机(tele-typewriter)
	- 电传打字机需要统一的编码字母和数字
	- 要把滴答停的电报信号
	- 变成0和1的时序信号

- 1960年10月6日
	- 美国标准协会（ASA）X3的首次会议
	- ASCII标准的工作开始了
	- 美国标准协会现为美国国家标准协会(American National Standards Institute，简称ANSI)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662888484663)

- 贝尔公司主要经营电报电话

### 编码来源

- 第一次(ASA X3.4-1963)就明确
	- 大小写字母之间只差一个位
	- 这很重要

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220319-1647656000060)

- 否则错误编码一旦成为标准
	- 再改前面的话
	- 已经使用这些编码的文件就都废掉了  

- 我想把所有 ASCII 字符 0-127 全都打出来
	- 可以么？

### 回忆show.py

- 回忆编写show.py

```
for n in range(0xff):
    print(chr(n),end="")
    if n % 16 == 0:
        print()
```

- 确实可以出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662859423836)

- 这输出靠的是把序号转化成字符的函数chr
- 我能否靠decode来干这个事？

### struct

- 首先是要获得数字的字节状态
- struct 是一个包(module)
- 导入struct包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221005-1664939119845)

- struct是结构的意思
- 来自于c里面常用类型的存储结构
- 这个struct怎么用呢？

### pack

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664026684316)

- 把数字变成字节的形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664026612093)

- "a" 不是字符吗？
- 怎么成了字节了？

### 字节表示法

- "a"是字符
- 注意前面还有一个b
- b"a" 是字节 
	- 相当于b"\x61"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221013-1665649794369)

- b"a" 和 b"\x61" 是同样的一个字节
- 就是字符"a"在字节里的样子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221013-1665649899181)

- 为了清楚起见
	- 把b"\x61"表示为b"a"
	- 这样也就直接看到了字符😂
- 如何理解pack呢？

### 封包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221005-1664939686827)

- 按要求把东西封进规定的封装里面
- 当然有封包就有解封

### 解包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221005-1664939759175)

- 这又是一圈
	- pack
	- unpack
- 先把0-127的数字都变成字节

### 遍历

```
import struct
for n in range(0,128):
    b = struct.pack("b",n)
    print(b,end=",")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662890803376)


- 可以把数字转化成字节状态
- 然后应该可以把字节解码了

### 遍历结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662890871479)

- 可以看到已经有
	- 1、2、3
	- a、b、c
- 加上换行

### 换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662891263863)

- 满8换1行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662891272463)

- 隐约看到了ascii码的结构
- 当然我们还需要解码(decode)

### 解码

```
import struct
for n in range(0,127):
    b = struct.pack("b",n)
    s = b.decode("ascii")
    print(s,end="")
    if n % 16 == 0:
        print()
```

- 运行一下
- 上面那片怎么是全黑的？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664026920986)

- 和原来chr的方法结果差不多
- 编程其实也就是各种格式的转化
- 我们先去总结一下吧

### 总结

- struct包可以让我们使用c语言的封包格式
	- pack函数就是封包
	- unpack函数就是解封
	- 我们通过字节的方式便利了一次ascii码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664026920986)

- 还是有那片黑色的区域
	- 好像是一片黑暗森林！
	- 那里面到底有些什么秘密？🤔
	- 我们下次向黑色区域进发！！
- 去准备行装吧👋🏻