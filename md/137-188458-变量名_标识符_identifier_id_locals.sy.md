---
show: step
version: 1.0
enable_checker: true
---

# 变量定义

## 回忆上次内容

- 上次讲了什么是变量
- 变量变量 
  - 能变的量 就是变量
- 各种系统、游戏就是由变量所组成的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658631277985)

- 我们声明了变量并且定义了变量
- 声明就是 declaration
  - 可以把某些标识符和某些具体值联系起来
  - 某些标识符就是变量的标记符
  - 某些具体值就是赋给变量的值
- 赋值就是 assignment
  - 可以给他具体的值
- 变量名 有`什么`要求吗？
	- 什么样的字符串
		- 可以 被声明为 变量名 呢？🤔

### 变量名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667010281566)


- 不能是数字开头
  - 字母开头后面可以接数字
- 为什么不能是数字开头呢？


### 数字

- 数字开头一般都是数字
- 从 c 语言的时候就是这样
- 这样词法分析器便于区分标识符和数字变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652965322559)

- 变量名有没有个命名要求呢？

### 命名要求

- 变量名、函数名、模块名
	- 都属于标识符
		- identifier
	- python对于标识符的规则来自于c语言

- c语言对于标识符的要求是这样的
	- 第一个字符应该是字母或下划线
		- The first letter of an identifier should be either a letter or an underscore
	- 合法的标识符可以包括大小写字母、数字、下划线
		- A valid identifier can have letters(both uppercase and lowercase letters),digits and underscores.
- python有什么要求呢？

### 查看文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676465995059)

- 进入帮助模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676466057390)

- 找到主题

### 标识符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676466166941)

- 基本规则和c语言类似
	- 第一个字符应该是字母或下划线
	- 后面跟 字母、数字、下划线 
- 中文字符可以作为标识符么?

### 中文标识符

- 具体实验

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629010623792)

- python3 中
	- 中文字符串可以作为变量的标识符
	- 这怎么理解呢？

### PEP3131
- 不只是中文
	- 大多数 unicode 字符都可以作为标识符
	- 不过一般不用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676466289459)

- https://peps.python.org/pep-3131/
- 回忆一下什么是 unicode

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629011500986)

- 如何判断一个字符串
	- 是否是合法的标识符呢？

### identifier

- 字符串 str 有这么一个函数
	- 叫做 isidentifier()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667037014031)

- 就是看看这个字符串
	- 是否能够做 identifier 标识符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631614515513)

- 如果非要数字开头的话
	- 前面要加下划线
- 标点也属于unicode字符
	- 可以放在标识符中吗？

### 标点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631614641015)

- 标点不能进入标识符
	- 🙅🏻‍♀
- 为什么呢？

### 分别赋值

- 以逗号为例

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652965522214)

- 逗号担负这个切分的功能
	- 可以对两个变量分别赋值
- 其他符号
	- +
	- -
	- *
	- /
	- "
	- ？
- 都有各自的功能

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

- isidentifier 也有不灵的时候

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676466530747)

- 这如何理解呢？

## 总结

- 变量就是能变的量
- 这次讲了是变量的标识符的规则
	- 第一个字符应该是字母或下划线
	- 合法的标识符可以包括大小写字母、数字、下划线
- 我们还了解了一系列函数
	- 如何查询字符串是否为合法标识符
		- isidentifier
- 最后发现这个isidentifier函数失灵了？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676466530747)

- 这怎么理解呢？？🤔
- 我们下次再说！👋
