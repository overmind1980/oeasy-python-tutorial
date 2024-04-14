---
show: step
version: 1.0
enable_checker: true
---

# Hello World!

## 回忆上次内容

- 通过help()可以从python命令行模式进入到帮助模式，通过q退出
- ord(c)和chr(i)
	- 这是俩函数
	- 这俩是一对儿
	- ord通过字符找到对应的数字
	- chr通过数字找到对应的字符
	- 相反相成的
- `python`里面的字符对应着一些数字
	- `a`对应97
	- `b`对应98
	- `c`对应99
	- `字符`的本质是`数字`
- 为什么是这样的对应关系，谁规定的，必须的么？🤔

### 小写字母

```python
#输出a，b，c
ord("a")
ord("b")
ord("c")
#输出z-a的数字差距
ord("z")-ord("a")
```

- a、b、c这些字符是挨着的
- 对应数字也是挨着的
- 从a-z应该都是挨着的
- 26个英文字母之间，数值差距是25，说明都是挨着的
- 除了小写字母之外、大写字母、数字、符号他们都是如何的分布的呢？


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613807537604)

### ascii码表

- 所有的数据在存储和运算时都要使用二进制数表示
- 因为计算机用高电平和低电平分别表示1和0
- 字符和二进制数映射关系如果不一致
	- 面对同一个二进制数01010101
	- 就会对应不同的字符
	- 我们看起来就会产生乱码
- 最早的时候美国的工程师定义了一套编码规则
- `ASCII`=`A`merican `S`tandard `C`ode for `I`nformation `I`nterchange
- 美国信息交换标准代码 
- 这标准是美国信息交换标准代码是由美国国家标准学会(American National Standard Institute , ANSI )制定的
- 最初是美国标准，但这玩意具有排他性，欧洲也没有必要另起炉灶
- 国际标准化组织（International Organization for Standardization, ISO）定为国际标准，称为ISO 646标准

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809097080)

### 解码ascii

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809233687)

- 我们找到小写的`a`
	- 向上找到`110`这是他的`765`位
	- 向左找到`0001`这是他的`4321`位
	- 在前面加一个`0`
	- 得到（`01100001`）<sub>2进制数</sub>
	- 对应着（97）<sub>10进制数</sub>
	- 也就是（`0x61`）<sub>16进制数</sub>
	- 刚好对应一个字节
- 听起来找到了对应关系
- 我们能在程序上验证一下吗？

### hex(number)


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809571245)

- 进入python3帮助模式
- 我们可以查询hex
- hex对应hexadicimal十六进制


```python
#输出97对应的16进制形式
hex(97)
#找到a对应的十六进制形式
hex(ord("a"))
```

- `0x61`就是十六进制的`61`
- `0x`是十六进制的前缀标志

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809987083)

### bin(number)



![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809843683)

- 这次我们来试试转化为二进制
- 查询bin
- bin对应binary二进制


```python
#输出97对应的16进制形式
bin(97)
#找到a对应的十六进制形式
bin(ord("a"))
```

- `0b1100001`是二进制数`1100001`
- `0b`是2进制数的前缀标志
	- 正如`0x`是16进制数的前缀标志 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809905812)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809233687)

- 验证成功
- 我们用的确实是ascii表
- 废话！

### 转化为是10进制数int(number)

- 我们会用hex、bin把10进制数转化过去
- 也应该能转化的回来
- 用的是int

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613810362879)

- 这个int什么来历？
- 我们help()里面去找找

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613810392455)

### ascii码表趣事

- `0x41-0x5A`这个范围是大写字母
- `0x61-0x7A`这个范围是小写字母
-  大写字母和小写字母相差32，正好是0x20


```python
#输出a的ascii吗
ord("a")
#输出A的ascii吗
ord("A")
#输出大小写之差
ord("a")-ord("A")
#差值的16进制形式
hex(ord("a")-ord("A"))
#差值的2进制形式
bin(ord("a")-ord("A"))
```
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809097080)

- 其实最初不是相差0x20
- 这个0x20正好是一个二进制位
- 对应b6这个位
- 有了这个东西，做大小写敏感的字符串匹配就容易多了
- 这个0x20发生在1963年5月
	- The X3.2.4 task group voted its approval for the change to ASCII at its May 1963 meeting.Locating the lowercase letters in columns 6 and 7 caused the characters to differ in bit pattern from the upper case by a single bit, which simplified case-insensitive character matching and the construction of keyboards and printers. 

### ascii码表范围

- `0x41-0x5A`这个范围是大写字母
- `0x61-0x7A`这个范围是小写字母
- `0x30-0x39`这个范围是数字
	- 数字的编码减去`0x30`正好得到数字本身
- `0x20-0x7F`之间有各种符号
- `0x00-0x1F`之间的东西是什么？
- 目前还不知道

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613818605287)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809097080)


### 更早之前的摩斯电码

- ascii也不是从无到有的
- 在ascii之前就有摩斯电码
- 《oeasy》教您玩转电路基础第18话介绍过
- 下图是他的编码表
- 分成长和短两种信号，就是嘀和嗒


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210222-1613991303914)

- 下图是他的通信规则
- 三个断确认本字符结束了
- 三个断也就是字符之间的分隔符
- 录入状态并不是0、1两种状态
- 而是长、短、暂停三种状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210222-1613991040485)

- 为什么这样编码呢？

### 效率问题

- 编码的规则是常用的字符点击次数少
- 本质上是一棵霍夫曼树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210222-1613991449293)

- 当时完全由人进行发射和接收
- 每个人发送数据的速度是不固定的
- 每个人接收数据的速度取决于发送人的发送速度
- 现查表是来不及的
- 需要熟悉编码表和常用缩写
- 这就是早期使用电来进行编码的过程
- 我们现在回到ascii码

## 总结

- 数制可以转化
	- bin(n)可以转化为2进制
	- hex(n)可以转化为16进制
	- int(n)可以转化为10进制
- ascii码表范围
	- `0x41-0x5A`这个范围是大写字母
	- `0x61-0x7A`这个范围是小写字母
	- `0x30-0x39`这个范围是数字
		- 数字的编码减去`0x30`正好得到数字本身
	- `0x20-0x7F`之间有各种符号
	- `0x00-0x1F`之间的东西是什么？🤔
- 我们下次再说！👋