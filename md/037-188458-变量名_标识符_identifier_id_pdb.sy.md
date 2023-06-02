---
show: step
version: 1.0
enable_checker: true
---

# 变量名标识符

## 回忆上次内容

- 上次讲了 
	- 什么是`变量`
- 变量变量 
  - 能变的量 就是变量
- 各种系统、游戏就是由变量所组成的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658631277985)

- 声明了变量 
	- 并且 定义了变量
- 声明就是 declaration
  - 把标识符 和 具体值 联系起来
  - 标识符就是 变量的标记符
  - 具体值 就是 赋给变量的值
- 过程就是 赋值
	- 就是 assignment
	  - 可以给变量 具体的值
- 可以调试一下赋值语句 吗？🤔

### 尝试调试

- :w|!pbd3 %
	- 保存当前文件
	- 并用pdb3进行调试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658633855234)

- 在这里 需要进入var.py
	- 看看在这两行代码执行过程中
	- a和b的值究竟是多少

### 回忆pdb过程

- pdb的意思 是
	- python 的 debug程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230511-1683808318777)

- help 
	- 可以查看所有命令
- h p
	- 查看p命令的使用方法
- q
	- 退出 pdb环境


### 调试

- 第1行执行之前(红色)
	- a,b都不存在
- 第2行执行之前(绿色)
	- a为1，b不存在
- 第2行执行之后(蓝色)
	- a为1，b为2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230416-1681634734072)

- 结论
	- 声明、赋值之前
	- 不能使用变量
	- 声明、赋值了之后
	- 才能使用变量
	- 可以看得 清清楚楚
- 哪些字符串 
	- 可以用作 变量名呢？🤔

### 变量名

- a、a1可以作为变量名
  - 字母开头后面 可以接数字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230418-1681779762645)

- 1a 不可以 作为变量名
- 为什么呢？

### 数字
- 1a 属于是 
	- 数字开头的
- 数字开头 一般都表示 数字常量	
	- 从 c 语言的时候就是这样
	- 这样 词法分析器 便于区分 
		- 标识符
		- 数字常量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652965322559)

- 变量名 有没有个 `命名规则` 呢？

### 命名名命名规则

- 变量名、函数名、模块名
	- 都是名
	- 都是由字符串组成的
- 组成变量名的 字符串 
	- 就是 标识符
		- identifier
- 标识符 有自己的 命名规则
	- 参考 自c语言

- c语言 对于 标识符的 命名要求是 这样的
	- 第一个字符 应该是 字母或下划线
		- The first letter of an identifier should be either a letter or an underscore
	- 合法的标识符 可以包括 大小写字母、数字、下划线
		- A valid identifier can have letters(both uppercase and lowercase letters),digits and underscores.
- python具体什么要求呢？

### 查看文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676465995059)

- 进入帮助模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676466057390)

- 找到主题
	- IDENTIFIERS 

### 标识符

- python中
	- 标识符的 基本规则 
		- 和c语言类似
	- 第一个字符应该是字母或下划线
	- 后面跟 字母、数字、下划线 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681561685989)

- 中文字符可以作为标识符么?

### 中文标识符

- 具体实验

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629010623792)

- python3 中
	- 中文字符串可以作为变量的标识符
	- 这怎么理解呢？

### PEP3131

- 规则来自于
	- https://peps.python.org/pep-3131/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676466289459)

- 中文可以用作变量名
	- 不过一般不用
- 如何判断一个字符串
	- 是否是合法的标识符呢？

### identifier

- 字符串类(str) 有这么一个函数
	- 叫做 isidentifier()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667037014031)

- 就是看看这个字符串
	- 是否能够做 identifier 标识符
- "abc"这个字符串
	- 是不是合法标识符呢？
	- isidentifier()?
- 答案是True

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230512-1683896998802)

- 而字符串 "98k" 
	- 不是合法的标识符
- 如果就想要"98k"
	- 成为合法的标识符呢？

### 下划线

- 如果 `非`要 数字开头的话
	- 前面 要加下划线

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230512-1683897094859)

- 标点符号
	- 比如,或者+这些
	- 可以放在标识符中吗？

### 标点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631614641015)

- 标点不能进入标识符
	- 🙅🏻‍♀
- 为什么呢？

### 分别赋值

- 以逗号为例
- 逗号担负这个切分的功能
	- 可以对两个变量分别赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652965522214)

- 其他符号
	- +
	- -
	- *
	- /
	- "
	- ？
- 都有 各自的功能
	- 都不能 作为标识符identifier

### 练习

- 以下哪些变量名是合法的？
	- oeasy
	- o2z
	- o?z
	- o,z
	- _orz
	- 0rz
	- __0rz

- 使用函数验证一下推论

### 失灵

- isidentifier 也有 不灵的时候
- 比如 字符串"import"
	- 理论上可以作为一个标识符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230511-1683780899494)

- 但是却不能对import 
	- 进行 声明和赋值
- 这如何 理解呢？
	- 先 总结一下吧

## 总结

- 变量 就是 能变的量
- 这次研究了 变量标识符的 命名规则
	- 第一个字符 应该是 大小字母或下划线
	- 合法的标识符可以包括
		- 大小写字母
		- 下划线
		- 数字
- 还研究了字符串(str)的函数
	- isidentifier
	- 查询字符串
		- 是否为合法标识符
- 符合这个命名规则的
	- 理应 算是一个 合法标识符
- 最后发现
	- 这个isidentifier函数有时候不好使？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230511-1683780899494)

- 这怎么理解呢？？🤔
- 我们下次再说！👋
