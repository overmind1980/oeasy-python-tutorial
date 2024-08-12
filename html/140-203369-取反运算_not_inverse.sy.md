---
show: step
version: 1.0
enable_checker: true
---

# 比较运算符

## 回忆

- 这次研究了 in
- 字符序列和字节序列只要有子序列关系的话
  - in 就是 True
- 元组和列表有这个元素的话
  - in 就是 True
  - 子序列是 False
- 集合中有这个元素关系的话
  - in 就是 True
- 字典中包含这个 key 的话
  - in 就是 True
- 这个 not in 是什么意思呢？？🤔

### 查看帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632014747857)

- inverse true value
- 真值取反
  - True 变 False
  - False 变 True
- 动手试试

### not in

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632023734152)

- 原来 in 是 True 的话
- 现在就是 False 了
- 反过来了
- 所以叫做取反
- is 可以加 not 么？

### not is

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632024383741)

- 可以不过是 a is not b
- 如果是两个 int 型的数字进行比较会有什么效果呢？

### 1 is not 2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211231-1640960360804)

- 看起来这个 is not 如果这么用的话
- 会报一个语法警告 SyntaxWarning
- 警告 Warning 不同于错误 Error
- 仍然可以得到合理的结果
- 如果想要警告都没有
- 那就用!=运算符
  - 这是对于具体值来比较的
- is 一般是对于对象来比较的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211231-1640960534209)

- not 可以加到 True 或者 False 前面么？

### not

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632024965940)

- 是可以的
- True 和 False 是通过比较运算符得到的结果
- 前面加上 not 就会取反
- 取反再取反就会回到原点
- 否定之否定等于肯定
- 负负为正
- not not True
	- 其实就是True
- 这个is not 有结合性么？
	- 如何运算的？

### is not

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220328-1648470960858)

- 这里有一个语法警告
	- SyntaxWarning 不影响运行
	- 可以看到结合性可以通过括号来明确

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220328-1648471304499)

- 这种值比较的情况最好使用==进行判断
	- 这样就避免了警告⚠️

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220328-1648471084981)

- 运算的结果
	- 可以进行 not 操作么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632025114247)

- 好像也可以？！
- 这需要如何理解呢？

### 类型

- 究竟什么 True？
- 什么是 False 呢？
- 他们都可以直接打上去
- 不用加双引号
- 是 python 语言的关键字
- 看一下他俩的数据类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632025249094)

- 都是一个 bool 类型的变量
- 究竟什么是 bool 类型呢？

### bool

- 查询一下手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632025390668)

- bool 是从 int 整型派生出来的类型
- 也就是说可以用 int 来初始化 bool

### 动手

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632025498601)

- 0 对应的布尔值为 False
- 其余都对应 True
- 0 还是最厉害的对不对？
- 空生万有
- 这也解释了 not (1 + 1) 的原理

### 容器类可以转化为 bool 型么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632025699150)

- 空元组、空列表布尔值为 False 对应整数 0
- 非空的元组、列表布尔值为 True 对应整数非零
- 空 对应 零
- 这很合理
- 也可以用 len 来处理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632025808852)

### 手册说明

- help()
- TRUTH VALUE 这个 topic

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632030868178)

### False 对应着

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220328-1648471561967)

- 常量
  - None
  - False
- 数字类型
  - 整数 0
  - 浮点数 0.0
  - 复数 0j
  - 精确十进制 Decimal(0)
  - 分数 Fraction(0)
- 容器
  - 空字符串''
  - 空元组()
  - 空列表[]
  - 空字典{}
  - 空集合 set()
  - 空数字范围 range(0)
- 为什么会这样呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220328-1648471763043)![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220328-1648471725669)

### 理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632032882941)

- 这来自于电路
- 高低电平代表通断
- 通过这个电平当做一个开关量进行控制
- 用电平高低控制电路逻辑
- 即使到今天
- 一个非常复杂的人工智能
  - 做出很复杂的判断
- 但是这个判断本质上还是个开关量
- 要么是开，要么是关
- 根源就在这里

### 转化

- bool 型变量转化为其他变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632031454442)

- 直接用相应的构造函数就可以
- bool 型不能转化 list 型
- 反过来行么？

### 转化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632031746646)

- 都可以转化为 bool 类型
- 不过字符串有个小细节

### 空串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632032147378)

- 不管字符串里面具体是什么
- bool 类型转化主要就是判断是否是空串
- 如果我还是想根据字符串内容判断
- 应该如何呢？

### 嵌套函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632032247831)

- 在他前面加一层处理函数就可以
- 记得 eval 么？
- evaluate
  - 把字符串当做表达式
  - 并且把这个表达式的值衡量出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632032317421)

- 得到具体的值的类型根绝表达式来
- 可能是 int，float 或者 bool

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220102-1641116934380)

### 基本类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632031795213)

- 以上这四个
- 其实是 python 最最基本的数据类型
- Python 世界的原子
- 复杂些的呢？
- 比如分数类型

### 分数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632031917557)

- 分数是 ok 的
- 精确十进制呢

### 精确十进制

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632032007966)

- 其实就是整型化之后判断是零还是非零
- 零就是False
- 非零就是True

### 总结

- 这次研究了 not
	- not 就是取反
	- 原来 True 的变 False
	- 原来 False 变 True

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632032534495)

- True 和 False 都是 bool 类型变量
	- bool 类型是从 int 型派生而来
	- bool 类型和其他类型之间可以相互转化
	- 如果我相对于 bool 类型判断
- 真假情况分别处理应该怎么办呢？？？🤔
- 下次再说 👋