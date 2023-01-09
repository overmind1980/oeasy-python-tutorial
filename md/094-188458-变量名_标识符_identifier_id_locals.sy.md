---
show: step
version: 1.0
enable_checker: true
---

# 变量定义

## 回忆上次内容

- 这次我们调试和反编译了数据的定义
- 变量的定义和赋值对应两句指令
	- LOAD_CONST
	- STORE_NAME
- 变量在声明和赋值之前是不能被引用的
	- 没有被声明的变量
	- 也就没有生命
	- 不能in the name of 那个变量
- 变量名有什么要求吗？
	- 什么样的字符串可以被声明为变量名呢？🤔

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

- 中文字符可以作为标识符么?

### 中文标识符

- 具体实验

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629010623792)

- python3 中
	- 中文字符串可以作为变量的标识符
- 不只是中文
	- 大多数 unicode 字符都可以作为标识符
	- 不过一般不用
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
- 我们再来看看 o 这个变量标识符

### 细节

- `o` 两边并不加引号
  - 因为我们这里的 `o` 是变量
  - 而不是字符串
  - 如果加了双引号就是字符串了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628994519509)

- 在等号两端都保留有一个空格
  - 增加文档的可读性
  - 这`不会`影响程序的执行速度
  - 可是为什么要加空格呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628995013547)

- 这两句话从何说起

### 加空格的原因

- 这两句话来自于python之禅

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667036051528)

- 现在到底有多少变量呢？

### locals()

- 查询本地变量
- 有一个内置的函数叫做 locals

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629012200562)

- 可以查询关于 locals 的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629012206686)

- 返回的是一个包含当前域中所有变量的字典
- 声明和赋值都使用等号
	- 声明并赋值 变量o 之后
	- 变量o 真的在内存里有位置了么？
- 我们来看看

### 具体位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628995186862)

- id函数是什么意思？
	- help(id)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628995236339)

- o确实在内存中有了位置
	- 但是如果我们给变量新赋一个值
- 那么存储变量的位置
	- 还是那个内存地址么？

### 实践

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658632914887)

- 虽然a这个变量名没有变
	- 但是id(a)变了
	- 也就是说a所在的容器内存位置没变
- 但是a所指向的变量位置
	- 在内存中的位置变了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659152824519)

- 都是STORE到a这个NAME里面
- 第二次赋值和第一次有什么区别吗？

### 区别

- 变量的声明和赋值究竟有什么不同
  - 第一次赋值时
	- 声明和赋值是同时完成的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220208-1644304396432)

- 如果是纯赋值是如何的呢？

### 纯赋值

- 声明了之后
  - 再有等号赋值就是纯赋值了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220208-1644304691797)



## 总结

- 变量就是能变的量
- 这次讲了是变量的标识符的规则
	- 第一个字符应该是字母或下划线
	- 合法的标识符可以包括大小写字母、数字、下划线
- 我们还了解了一系列函数
	- 如何查询字符串是否为合法标识符
		- isidentifier
	- 如何查询变量所指向的地址
		- id
	- 如何查询已有的各种变量？
	  - locals
- 如果用一个变量a的值
	- 给另一个变量b赋值
	- 是什么样的过程呢？？🤔
- 我们下次再说！👋
