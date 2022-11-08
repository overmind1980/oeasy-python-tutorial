---
show: step
version: 1.0
enable_checker: true
---

# 十六进制(hexadecimal)

## 回忆上次内容

- 上次数制可以转化
  - bin(n)可以把数字转化为 `2进制`
	- binary 
	- 接收一个整数(int)
	- 得到一个二进制数形式的字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220927-1664285596111)

- 数字在计算机中是用二进制存储的
	- 但是展示给我们的时候用的是十进制

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663464213194)

- 也就是0-9这10个字符的形式
- 都说字节是计算机存储的最小单位
- 这些数字在字节里面长什么样子呢？🤔

### 字节

- 首先明确字节长什么样子？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662859314078)

- 1 个 字节(byte)
  - 正好 8 个 位(bit)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220326-1648282566592)

- 如果我们用一个数字来表示一个字节的话
- 需要表示[0,2<sup>8</sup>-1]
- 至少需要3位数字
- 我想要用2位数字得到字节状态
- 有可能吗？

### 一分为二

- 把8位分成两块
	- 前4位
	- 后4位
- 每一块是从多少到多少呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1663991097055)

- 4位都是0 
	- 数值为0
- 4位都是1
	- 数值为15

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664001766470)

- 从0到15总共16个数字
- 所以我们需要的是16进制

### 16进制

- 进入 python3 帮助模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210917-1631859393894)

- 我们可以查询 hex
	- hex 对应 hexadecimal 十六进制
- help(hex)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809571245)


### 动手

```python
#得到a的序号
ord("a")
#输出97对应的十六进制形式
hex(97)
#找到a对应的数字对应的十六进制形式
hex(ord("a"))
```

- `0x61`就是十六进制的`61`
	- `0x`是十六进制的前缀标志
    - 正如`0b`是 2 进制数的前缀标志

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809987083)

- 那这个0x61是怎么得到的呢？

### 16进制数

- 字符 `a` 对应
	- (`97`) <sub> `10进制数` </sub> 
	- (`0x61`) <sub>`16进制数`</sub>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663466137427)

- 4 位二进制数 对应 1位 十六进制数
- 8 为二进制数 对应 2位 十六进制数
- 8 位(bit) 刚好一个字节(byte)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663466037148)

- 我们会用 hex、bin 把 10 进制数转化为
	- 十六进制形式、二进制形式
- 不过16进制怎么能出现16个数字呢？

### 回忆

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664004546438)

- 16进制有多少根手指呢？

### 十六进制

- 16进制需要16根手指

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663494822294)

- 这有点可怕啊！！！
- 我们真的需要16根手指头吗？
- 会做噩梦的...
- 不过落实到计数上...

###  不怕

- 我们为什么用10进制
	- 因为我们有10根手指

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663495550786)

- 数树的结果和手指头的数量没有关系
	- 2 根 手指头
	- 10 根 手指头
	- 16 根 手指
- 都不会影响数出来的树的数量
- 树还是那么多树
- 只是表示的方式不同
- 可以有比9大的数字吗？
- 超出我们对于数字的认知了
- 具体怎么表示?

### 比9大的数字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664004859165)

- 可以把所有的数字列出来吗？

### 所有16进制数字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663494710478)

- 那些字母对应这些超过9的数字呢？

### 16进制

- 在ascii编码中的小写字母`a`
	- 对应着(`97`)<sub>`10进制数`</sub> 
	- 对应着(`0b1100001`)<sub>`2进制数`</sub>
	- 对应着(`0x61`)<sub>`16进制数`</sub>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664005115077)

- 我们满16的时候才进1
- 从0到9都用原来的符号
- 后面没有符号了
- 用a到f
- "j" 这个字符对应 
	- (`6a`)<sub>`16进制数`</sub> 
- 这怎么理解？

### 对应关系 

- 1个字节(byte)有8位(bit)
- 1个16进制数(hexadecimal)有4位(bit)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663495749992)

- 这样2位16进制数
- 正好1个字节
- 可以用vim看到abcd这些字母的字节状态吗?

### 查看状态

```
vi ascii.txt
```

- :%!xxd

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220218-1645166781622)

- 可以看到文件是用 `2进制` 方式存储的
  - 0x61 - a
  - 0x62 - b
  - 0x63 - c
  - 0x64 - d
  - 最后加了个0a字节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221003-1664805232779/wm)

- 总共5个字节
- 那可以看看我们的py文件么？

### py文件

- 再写经典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664005705485)

- 这段特别熟
- 仿佛写过2万多遍

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221003-1664805878552/wm)

- 可以看到这个纯文本py文件的字节状态吗？
- 是真的30个字节吗？

### 字节状态

- 虽然只有两行
- 不过能够看到字符和字节之间的关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664005801532)

- 差2个字节到达(20)<sub>16</sub>
	- 也就是0x20-2
	- 确实是0x1e
	- 就是30
- 我们看看稍微大一点的东西

### 安徒生童话

```
git clone https://github.com/overmind1980/oeasy-python-tutorial.git
```

- 下载之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664108951470)

- 这个纯文本318K
- 打开之后什么样呢？

### 打开文本文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664109266044)

- 转化为字节模式
	- %!xxd

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664109465307)

- 可以想象txt文本
	- 总共318K个字符
	- 甚至能想到每个字符的状态
- 那我们的python3.8呢？

### 回忆一下

- 这个文件和本机的cpu架构相关
- 都是一些x86-64指令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663378673001)

- 就像我们在程序本质那个实验里面看到的那样
- 十六进制数刚好很适合输出字节状态
- 为什么hex对应着16进制呢？

### hexa-decimal

- hexa - 对应着六
	- 其实就是六的北方方言发音落实到字母的状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646313056225)

- hexa 我们理解了 
	- 对应着 six
- 那么decimal如何理解呢？

### decimal

- deci- 对应着十分之一
	- decigram 十分之一克：deci（十分之一）+gram（克）→decigram（十分之一克）
	- decimeter 十分之一米：deci（十分之一）+meter（米）→decimeter （十分之一米）
	- decilitre 十分之一升：deci（十分之一）+liter/litre(升）→decilitre（ 十分之一升)
	- decibel 十分之一贝尔：deci（十分之一）+bel (升）→decibel（ 十分之一升) db 分贝 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646317866384)

- 这些词根来自于什么呢？

### decimal

- 这些单词开始于原始印欧语词根*dekm

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646318118418)

- 隐约可感觉到越往北边鼻音越重
	- 可能是因为需要更长的鼻腔
	- 空气经过更长时间的加温过程来润肺
	- 鼻腔共鸣引发的共振也可以让血液比较容易上头
		- 似不似泳意丧头
		- 嗯呐
	- dec+ade 十年
		- decennium 十分之一世纪
	- december(古罗马历的十月)
- 类似的还有
	- decagon十角形（deca+gon角）
	- decameter十米（deca+meter米） 
- 落实到函数就是hex()
- 怎么用呢？

### 转化回十进制

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221003-1664805325276)

- 和二进制是相同的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221003-1664806627902/wm)

- 二进制是0b开头
	- 0 代表数字
	- b 代表二进制(<span style="font-size:24px">`b`</span>inary)
- 十六进制是0x开头
	- 0 代表数字
	- h 代表十六进制(he<span style="font-size:24px">`x`</span>adecimal)

## 总结

- 这次找到了字符和字节状态之间的映射对应关系
	- 字符对应着二进制字节
	- 二进制字节也对应着字符
- 这种字节状态是用2位16进制数来表示的
- hex(n)可以把数字转化为 `16进制`字符串
	- hexadecimal
- bin(n)可以把数字转化为 `2进制`字符串
	- integer
- 我们根据ascii中的字符序号
- 能够把字符存储进计算机的字节当中了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809097080)

- 终于知道字符对应的字节到底长啥样了
- 但是说到底
- 为啥要把字符对应成字节呢？🤔
- 我们下次再说！👋