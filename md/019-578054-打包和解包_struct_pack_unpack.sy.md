---
show: step
version: 1.0
enable_checker: true
---

# 打包和解包

## 回忆上次内容

- ASCII 由这样几类字符构成	
	- 英文大写字符
	- 英文小写字符
	- 数字
	- 符号

- 电报时代对于英文、数字的编码
	- 使用的是摩斯电码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669029736552)

- 这摩斯电码是3进制的编码方式
	- 长短空
- 怎么演化成ascii这种0101的二进制编码的呢？🤔

### 回到 ASCII 码

- 电报传过来的信号需要记录下来
	- 于是有了电传打字机(tele-typewriter)
	- 电传打字机需要统一的编码字母和数字
- ASCII的第一个商业用途
	- 是作为一个七位电传打字机(tele-typewriter)代码


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668918418383)

- 要把滴、答、停的电报信号
	- 变成0和1的二进制信号

### ASCII的演化(evolve)

- 1960年10月6日
	- 美国标准协会（ASA）X3的首次会议
	- ASCII标准的工作开始了
	- 美国标准协会
		- 现为美国国家标准协会
		- American National Standards Institute
		- 简称ANSI
	- 开始敲定ASCII具体编码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662888484663)

- 贝尔公司主要经营电报电话

### 编码来源

- 第一次(ASA X3.4-1963)就明确
	- 大小写字母之间只差一个位
	- 这很重要

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220319-1647656000060)

- 否则错误编码一旦成为标准
	- 所有应用这种错误编码的文件
		- 就都废掉了  

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

- 这输出靠的是
	- 把序号转化成字符的函数
		- chr
- 但是没有看到0
	- 理论上在1之前
	- 仿佛被黑暗森林所吞没
- 我能否将字节解码(decode)来干这个事？

### struct

- 首先是要获得从0到127的字节状态
- struct 是一个包(module)
	- 导入struct包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221005-1664939119845)

- struct是结构的意思
	- 来自于c里面常用类型的存储结构
	- 这个struct怎么用呢？

### pack

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664026684316)

- 把数字变成字节的形态
	- 把0x61这个数字变成字节的形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664026612093)

- "a" 不是字符吗？🤔
	- 怎么成了字节了？

### 字节表示法

- 注意细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668918744528)

- 注意"a"前面还有一个b
	- "a"是字符 
	- b"a" 是字节 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668918810324)

- 这两类型完全不同
- 字节b"a"是什么呢？

### 字节形态

- 字节状态可以用两个16进制数来表示
	- b"a"	
		- 相当于b"\x61"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221013-1665649794369)

- b"a" 和 b"\x61" 是同样的一个字节
	- 就是字符"a"在字节里的样子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221013-1665649899181)

- 为了清楚起见
	- 把b"\x61"表示为b"a"
	- 这样也就直接看到了字符😂
	- 刚好ord("a") 就是 0x61
- 如何理解struct.pack呢？

### 封包pack

- 按要求把东西封进规定的封装里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221005-1664939686827)

- 把数字封在1个Byte里面
	- 观察他的字节状态

### 遍历

```
import struct
for n in range(0,128):
    b = struct.pack("b",n)
    print(b,end=",")
```

- 把从0-127的数字都封到字节里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662890803376)


- 可以把数字转化成字节状态
	- 然后可以再把字节解码了

### 遍历结果

- 好多的字节呀~😄

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662890871479)

- 从字节状态可以看到已经有
	- 0、1、2、3
		- 这里很明显能看到0
		- 还有0前面的一堆符号
	- A、B、C
	- a、b、c
- 还有
	- \r、\n、\t
	- 这是啥意思？🤔
	- 怎么还能有两个字符呢？
	- 不管他
- 先加上换行

### 换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662891263863)

- 从0数到7
	- 换1行
	- 再从0数到7

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662891272463)

- 隐约看到了ascii码的结构
	- 我不想看字节状态呢
		- 我想看字符状态
- 需要对字节状态解码(decode)
	- 也就是解包
		- struct.unpack

### 解包

- 这又是一圈
	- pack
	- unpack

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221005-1664939759175)

- 解包出来是序号
- 先把0-127的数字都变成字节

### 封包再解包

```
import struct
for n in range(0,127):
    b = struct.pack("b",n)
    c = struct.unpack("b",b)[0]
    print(chr(c),end="")
    if n % 16 == 0:
        print()
```

- 依然要面对黑暗森林

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669030754675)

### 封包再解码

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
- 上面那片依然是全黑的？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664026920986)

- 和原来chr方法得到的结果差不多
- 但是没有看到字符0
	- 仿佛被上面那片黑暗森林所吞没
	- 这可真可怕！
- 我们先去总结一下吧


### 总结

- struct包可以让我们使用封包格式
	- 把数字封包到字节里
		- pack函数负责封包
		- unpack函数负责解封
	- 我们通过封到不同的字节状态
		- 遍历了一次ascii码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664026920986)

- 还是有那片黑色的区域
	- 好像是一片黑暗森林！
	- 那里面到底有些什么秘密？🤔
- 我们下次向黑暗森林区域进发！！👊
- 去准备行装吧👋🏻