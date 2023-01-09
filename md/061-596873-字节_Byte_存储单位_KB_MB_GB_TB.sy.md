---
show: step
version: 1.0
enable_checker: true
---

# 编码进化

## 回忆上次内容

- 上次回顾了字符大战的结果
  - ibm 曾经的 EBCDIC 由于字符不连续
	  - 导致后续出现无数问题
  - 7bits 的 ASA X3.4-1963 
	  - 字母序号是连续的
		  - 做字符和字符串比较的时候就非常直接和容易
		  - 判断字符是否是字母也很容易
	  - 获得了绝大多数公司的支持
- 为什么ASA X3.4-1963 是7-bit 的编码？
- 8-bit不是正好一个字节吗？🤔

### ASA X3.4-1963 文档

- 注意这篇文档
	- 通篇提到6-bit、7-bit
	- 但是没有提到byte

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667358627226)

- byte这个词并不是一个通用的技术词汇

### bite

- 1956年
	- ibm内部工程师Werner Buchholz
	- 第一次使用了bite这个词汇来描述8bits

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667360554702)

- 这个词太过超前时代

### 时代

- 毕竟当时的计算机还处于从模拟到数字的过程
- 计算机的输出设备是
	- 指示灯
	- 电压表
	- 示波器 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667360407312)

- bite这个词流传于Rand, MIT, 和IBM
- 后来为了和bit区分
	- bite演化成byte

### 编码进化

- BCD码 4bit
- 发展到BCDIC 6bit

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667361531177)

- 1964年ibm发布System/360 
	- 存储容量单位为Byte (8-bit)
		- 首款20机型 4096 Byte
		- Byte 这个单词作为
			- 营销话语中的一个单位
			- 开始向外界传播
- 为了配合着8bit的System/360 
	- 从6bit的BCDIC 直接使用 8bit 的 EBCDIC
	- 这步子有点大
- ASA X3.4-1963 编码诞生

### ASA X3.4-1963 发布 

- 最终统一到ASA X3.4-1963 7bit
	- 各大公司跟进

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667361061275)

- 两年之后1965年
	- ibm最新机器使用的字符编码转为为ASA X3.4-1963
	- 编码大战统一到了 7-bit的 ASCII
- 可是为什么ASCII字符7-bit
- 1个字节却要 8-bit？
	- 7-bit不是刚好放下吗？

### 1个字节8位

- 为什么1个字节8-bit?

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667357946432)

- 我们来看看Bemer的个人网站
- 介绍字符编码进化过程
	- 5bit的博多码
	- 6bit的BCDIC
	- 7bit的ASCII
	- 8bit的EBCDIC
- 为什么字节是8-bit
	- 而不是7-bit呢？
- 他的说法是2次幂的魔法
	-  8 = 2<sup>3</sup>

### 计算机 基于 2次幂的魔法

- 计算机只有两根手指
- (1)<sub>2进制</sub>根手指
	- 可以代表(10)<sub>2进制</sub>种状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663471107059)

- 就像电路只有
	- 通
	- 断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663474212477)

- 电灯只有
	- 亮
	- 灭

### 手指增多

- (10)<sub>2进制</sub>根手指
	- 可以代表(100)<sub>2进制</sub>种状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221103-1667432095655)

- 这就是 2-4 译码器(decoder)
- 如果有更多手指头呢？

### 3-8 译码器

- (11)<sub>2进制</sub>根手指
	- 可以代表(1000)<sub>2进制</sub>种状态
- 这就是3-8译码器(decoder)
	- 或者说是解码器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221103-1667433307399)

- 再往后呢？

### 4-bit的寻址空间

- (100)<sub>2进制</sub>根手指
	- 可以代表(10000)<sub>2进制</sub>种状态
	- 16种状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221103-1667433518877)

- 再往上呢？😁

### 8-bit的寻址空间

- (1000)<sub>2进制</sub>根手指
	- 可以代表(100000000)<sub>2进制</sub>种状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221103-1667433694230)

- 8-bit的cpu
	- 直接寻址空间可达256个Byte
- 16-bit的寄存器
	- 直接寻址空间64KByte
- 随着计算机字长的增加
	- 存储单位也在进化

### 更多存储单位

- 1 KB = 1024 Byte
- 1 GB = 1024 KB
- 1 TB = 1024 GB

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221103-1667436745498)

- 这些都是基于Byte的更大单位
- Byte 就是 8-bit
- 但是7-bit的ASCII字符
	- 怎么放入8-bit 的 Byte呢？

### 8-bit

- ascii 的位置
	- `ascii`大小写字母之间只差 `1` 位(bit)
	- 这 `1` 位(bit) 在字节的最前面
	- 被叫做标志位

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221021-1666359398445)

- 如果标志位是0
	- 那么这个字符就是ascii的字符
	- ascii的字符范围是0-127
- ascii 也从 ASA X3.4-1963 进化到了 65 

## 总结

- 这次回顾了计算机存储单位的演变
	- 最小的读写单位是 bit
	- 1 Byte = 8-bit
	- 1 KB = 1024 Byte
	- 1 GB = 1024 KB
	- 1 TB = 1024 GB
- 字节这个单位随着8-bit的cpu而诞生
- 1个字节 8-bit
- 存储字符的话
	- 第一位是标志位
	- 7-bits 的 ascii 可以用 1Byte 存储
- 计算机之间需要有更多的通信
	- 编码的统一为的更好地通信
- 计算机之间怎么开始通信的呢？？🤔
- 我们下次再说！👋