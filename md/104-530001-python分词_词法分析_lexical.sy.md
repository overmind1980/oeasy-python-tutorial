---
show: step
version: 1.0
enable_checker: true
---

# 解释运行程序 🥊

## 回忆上次内容

- ibm 成为 名义上的大哥
	- 市值和销售额 都被 赶到了墙角
	- 微软 基于x86架构 构建起了 软件帝国
	- intel 依靠x86 成为cpu规则的制定者
- x86 架构几乎 统治了 整个世界
	- 成为整个 计算机领域的基础
		- 几乎是 一切软件的基础架构
		- 决定着上层系统、软件、应用的生态环境
		- 也决定着商业、投资、产业新闻、甚至生活的方方面面
- 其他架构黯然离场
	- moto-6800
	- mos-6502
- 架构新趋势
	- arm 与 android 构成了 移动设备的基础架构
	- riscv 蓄势待发

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676336406945)

- python 使用那种架构呢？
- 究竟什么是架构呢？？ 🤔

### 纯文本

- 我们的py文件是一个纯文本文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663323775469)

- 打开我们的guido.py
	- 如果没有就新做一个
- 这里面是一个个的字符

```python
print("1982------Guido in cwi")
print("1995------Guido in cnri")
print("2000------Guido in beopen")
print("2005------Guido in google")
print("2012------Guido in dropbox")
print("2020------Guido in microsoft")
```

- python怎知道如何执行呢？

### 传统文本

- 传统文本的基础也是字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663324389558)

- 在字符的基础上组织起篇章结构
	- 字组成词
	- 词组成句
	- 句组成段
	- 段组成章节
	- 最后成书

### tokenize

- 首先把一个个字符组成词
- 分析一下哪些字可以组成词
	- 术语叫词法分析(lexical analysis)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658908548205)

- 把原来的字符流
	- 变成了词的流
	- token(令牌)流

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658908295275)

- 词法分析之后输出的是一个词(token)的流
	- 啥是token呢？

### token

- token
	- 令牌

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658907723283)

- 古人说听我号令
	- 号指的是
		- 号角
		- 摔杯为号
		- 是一个信号
	- 令指的是令牌
		- 急急如律令
		- 打五十大板
		- 令行禁止
- 怎么把源文件变成一个词(token)流呢？

### python3模块

- 帮助手册里面有这个内容
- 这个tokenize是python3的一个模块(module)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658924349323)

- 具体怎么运行呢？

### token流

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658906135736)

- 我们尝试运行
	- python3 -m tokenize guido.py
		- -m 代表的是 module模块
	- 对guido.py进行词法分析
- 分析出来的词(token)流什么样子呢？
- 这个词的流怎么理解呢？

### token流

- 第0行设置了编码格式
- 第1行[0,5)字符是第1行第1个token
	- print
	- print是一个Name(名字) 
- 第1行[5,6)字符是第1行第2个token
	- (
	- (是一个Operator(操作符) 
- 第1行[6,30)字符是第1行第3个token
	- "1982------Guido in cwi"
	- 这是一个String(字符串) 
- 第1行[30,31)字符是第1行第4个token
	- )
	- )是一个Operator(操作符) 
- 第1行[31,32)字符是第1行第5个token
	- \n
	- \n是一个NewLine(换行符)
	- 换行符意味着第一行结束

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220728-1658969636778)

- 第2行...
	- 词分析出来之后呢？


### 总结

- 我们把python源文件
	- 词法分析 得到 词流(token stream)
- 确实可以把文本文件分析出词来了 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658908295275)

- 分析出词来之后呢？
- 怎么把这些词组成可执行的程序呢？🤔
- 我们下次再说👋
 