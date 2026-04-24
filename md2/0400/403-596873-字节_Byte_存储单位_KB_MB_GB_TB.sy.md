---
show: step
version: 1.0
enable_checker: true
---

# 编码进化

## 回忆上次内容

- 上次 回顾了 字符大战的结果
  - ibm 曾经的 EBCDIC 由于字符不连续的隐患
	  - 导致后续 出现 无数问题
	  - 无法补救
- 7-bit 的 ASA X3.4-1963 
  - 字母序号连续
	  - 比较字符时 效率高
	  - 判断字符 是否是字母 也很容易
  - 获得了 IBM以外公司的 支持

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667358627226)

- 为什么 ASA X3.4-1963 是 7-bit 编码？
	- 8-bit 不是才 `正好`一个字节 吗？🤔

### ASA X3.4-1963 文档

- 注意这篇文档
	- 通篇提到6-bit、7-bit
- 但是 
	- `没有`提到Byte

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667358627226)

- 那时候 
	- 还有没有 Byte这个词

### bite

- 1956年
	- ibm工程师 Werner Buchholz
	- 第一次 使用了`bite` 来描述8-bit
	- 开音节读作[bait]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667360554702)

- `bite` 在1956年 太过超前

### 时代

- 毕竟 当时的计算机
	- 还处于 从模拟 到数字 的过程中
- 计算机的 输出设备是
	- 指示灯
	- 电压表
	- 示波器 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667360407312)

- bite这个词
	- 流传于Rand、 MIT、IBM
- 为了 和bit 区分
	- bite 的拼写 
		- 演化成 `Byte`

### ASA X3.4-1963 发布 

- IBM 编码演化
	- BCD码 4-bit
		- 发展到BCDIC 6-bit
			- 包含了字符

- 网络通信 让 计算机 不再是 孤岛 
	- IBM之外的其他公司 想要统一通信标准
		- 到 7-bit的 ASA X3.4-1963 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667361061275)

- IBM 之外的公司 从产品层面跟进
	- IBM `仍`想要 主导标准

### 词汇出现

- 1964年
	- ibm 发布 System/360 
	- 存储容量单位 为 Byte (8-bit)
		- 首款机型 4096 Byte

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667361531177)

- Byte 这个单词
	- 作为 营销话语中的 概念
	- 开始传播

### 孤注一掷

- 为了配合 8-bit 的 System/360 
	- 编码规则 从6-bit的 BCDIC 
		- 直接跳到 8-bit的 EBCDIC

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1676021117136)

- 这是 IBM`最后的`倔强 

### 终局

- 两年之后 1965年
	- ibm最新机器
		- 也开始 使用 ASA X3.4-1963
		- 编码统一到了 7-bit的 ASA X3.4-1963
			- 也就是 后来的ASCII
			- 字符编码大战尘埃落定

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230210-1676020759391)

- 可是为什么 ASCII编码 `只`用 7-bit
	- 1个字节 却要 8-bit 呢？
		- 7-bit 不是 刚好放下 吗？

### 1个字节8位

- 我们 来看看 Bemer的个人网站
- 介绍 字符编码 进化过程
	- 5-bit的博多码
	- 6-bit的BCDIC
	- 7-bit的ASCII
	- 8-bit的EBCDIC

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221102-1667357946432)

- 为什么 字节是 8-bit
	- 而不是 7-bit 呢？
-  Bemer 的说法是
	-  `2次幂`的 魔法
	-  8 = 2<sup>3</sup>

###  2次幂的魔法

- 计算机 只有 两根手指
- 每根 手指
	- 可以代表 (10)<sub>2进制</sub>种状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663471107059)

- 就像 电路 只有
	- 通
	- 断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663474212477)

- 电灯 只有
	- 亮
	- 灭

### 手指 增多

- (10)<sub>2进制</sub>根手指
	- 2根手指
		- 可以 代表(100)<sub>2进制</sub>种状态
			- 4种状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221103-1667432095655)

- 这就是 2-4 `译码器(decoder)`
- 如果 有更多手指 呢？

### 3-8 译码器

- (11)<sub>2进制</sub>根手指
	- 3根手指
		- 可以代表 (1000)<sub>2进制</sub>种状态
			- 8种状态
- 这就是 `3-8译码器`(decoder)
	- 或者说是 `3-8解码器`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221103-1667433307399)

- 再往后呢？

### 4-bit 寻址空间

- (100)<sub>2进制</sub>根手指
	- 4根手指
		- 可以代表(10000)<sub>2进制</sub>种状态
			- 16种状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221103-1667433518877)

- 再往上呢？😁

### 8-bit 寻址空间

- 从4-bit 直接跳到 8-bit

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221103-1667433694230)

- (1000)<sub>2进制</sub>根手指
	- 8根手指
		- 可以代表(100000000)<sub>2进制</sub>种状态
			- 256种状态
- 8-bit的cpu
	- 直接寻址空间 可达256个Byte
- 16-bit的寄存器
	- 直接寻址空间  64 x 1024 Byte
		- 相当于 64KByte
- 随着 计算机字长的增加
	- 存储单位 在`指数级`增长

### 更多存储单位

- 1 KB = 1024 Byte
- 1 MB = 1024 KB
- 1 GB = 1024 MB
- 1 TB = 1024 GB

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221103-1667436745498)

- 这都是 基于Byte的单位
- Byte 就是 8-bit
- 但是7-bit的ASCII字符
	- 怎么放入 8-bit 的 Byte呢？

### 8-bit

- ascii 的位置
	- `ascii`大小写字母之间只差 `1` 位(bit)
- 最前面的 `1-bit` 
	- 是 标志位
- 后面的 `7-bit`
	- 是 ascii 字符数值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221021-1666359398445)

- 如果 标志位 是0
	- 那么 这个字符 就是ascii字符
- ascii的字符范围
	- 0 - 127
- ASA X3.4-1963 就这样
	- 成了 ASA X3.4-1965 

## 总结

- 这次 回顾了 计算机存储单位的演变
	- 最小的读写单位 是 bit

- 8-bit 固定下来 成为了字节(Byte) 

| 位数 | 容量 |
|---|---|
| 8-bit | 1Byte |
| 1024Byte	| 1 KB | 
| 1024 KB | 1 MB |
| 1024 MB | 1 GB |
| 1024 GB | 1 TB |

- 存储字符时
	- 第1位 是 标志位
	- 后7位 是 ascii具体的值
		- 可以用 1Byte 存储
- 计算机之间 有了 更多的通信
	- 编码统一 为的是 更好地通信
- 计算机之间 
	- 是`怎么` 开始通信的 呢？？🤔
- 我们下次再说！👋