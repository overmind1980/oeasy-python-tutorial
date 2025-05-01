---
show: step
version: 1.0
enable_checker: true
---

# 字符(character)

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV11JtpeiEJa)
- 上次了解了ord函数
	- ord 的意思是 ordinal(序号)
	- ord函数 可以
		- 根据字符 
		- 得到序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663940957383)

- 那么 可以 
	- 反过来 吗？
- 根据序号 
	- 得到字符 
	- 可以 吗？🤔

### ord的逆运算

- 首先进入游乐场
	- ord 根据参数"h"
		- 得到序号104

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679469334219)

- chr 根据参数 104
	- 得到字符 "h"

- 注意 
	- 参数是 数字104
    - 而不是 字符串"104"
		- 没有引号
- 引号
	- 是干什么用的来着？

###  单双引号

- 引号引号 引用的符号
	- 引号引起来的 
		- 就是字符串

- 可以发现 
	- `数字104` 和 `字符'h'` 是有关联的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230301-1677661094069)

- 单双引号没有区别

### 新函数

- chr也是
	- 内建函数
	- built-in function

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710726549161)

- 就像
	- ord 
	- print

```
help(chr)
```

- 具体帮助手册呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710726668903)

- chr 对应什么单词呢？

### character

- `chr` 对应 `character`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646291851811)

- character的意思是
	- 角色
	- 字母
	- 个性
	- 来自于希腊语
		- 雕刻的标记
		- 灵魂的印记
	- 总之都是有鲜明性格特征的事物

- 没有任何 两个字符 长得一样
	- a 和 b 长得 完全不同

### cp形成

- `chr(i)`是一个函数调用
  - `chr` 是函数名
  - `i` 是函数`chr` 的参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663941417517)

- ord 和 chr
	- 这俩是一对⚖️
		- 相反相成
		- 相爱相杀⚖️
		- 有来有回
- 可以绕一个圈么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663941547024)

### 开始玩耍

- chr(ord("h"))
	- 先求序号
	- 再根据序号
		- 查字符 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679469871675)

- 可以反方向绕圈吗？

### 反方向

- ord(chr(104))
	- 先查字符
	- 再根据字符
		- 对应序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679470251877)

- 绕了一圈 又回来了 么
  - 操作一轮猛如虎
  - 低头一看原地杵
- 这括号应该 如何理解 呢？

### 有括号的要优先

- 先算 括号里面的
	- 算出结果后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685523444483)

- 再将结果 
	- 当做 运算或函数的参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679470448358)

- 反之也一样吗？
	- 动手试试 

### 短信原理

- 输入 短信
	- 通过键盘输入字符
	- 本质上是输入字符的二进制信息
- 发送 短信
	- 信息字符串 被 编码为 二进制字节流
	- 通过app进行发送

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231119-1700356815443)

- 接收 短信
	- 通过app接收到网络来的二进制字节流
- 显示 短信
	- 将二进制字节流 解码为 字符串
	- 通过app 逐个显示 字符的字形
- 中文也有序号吗？

### 中文序号

- 中文也有序号

```
ord("中")
```

- 也可以根据序号得到字符

```
chr(20013)
chr(20014)
chr(20015)
```

- 可以试试你名字对应的序号！

- emoji也是字符吗？

### 尝试验证

- 😊也有序号ordinal

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231119-1700357388886)

- emoji表情也对应符号
	- 可以转化

## 总结

- `ord(c)`和`chr(i)`
  - 这是俩函数
  - 这俩函数是一对
	 - 相反相成的⚖️
    - `ord` 通过 `字符` 找到对应的 `序号`
    - `chr` 通过 `序号` 找到对应的 `字符`

- 为什么ord后面括弧里的参数
	- 一定 `要`加引号
	- 不加不行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695031609188)

- 而chr后面括弧里的参数
	- 又一定 `不`加引号
	- 加了不行呢？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695031981785)

- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV11JtpeiEJa)


