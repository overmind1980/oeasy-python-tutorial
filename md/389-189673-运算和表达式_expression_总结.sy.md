---
show: step
version: 1.0
enable_checker: true
---

# 表达式

## 回忆

- 上次主要是增强运算符
	- += 之类的
	- 先运算再赋值
	- 效率比原来高
	- 能用+=
	- 就不用先+再=
- 算术运算符我们学了不少了
  - 用运算符把两个操作数组合起来
  - 这个组合叫什么有名字吗？🤔

### 回顾运算

- 总共有什么样的运算呢？
- 加减乘除乘方指数对数等等
- 总共分两类
- 用运算符的
- 用函数的
- 我们先看看函数
  - abs
  - pow
  - log、log2、log10
  - ceil、floor、round
- 运算符有什么呢？

#### 运算符

- 加减乘除乘方
- 回顾加法运算过程
  - 首先明确运算是加法
  - 确认左右有操作数类型
    - int、float、Fraction、complex 各有各的加法过程
  - 真的相加
  - 结果放在内存里
  - 如果没有赋值给谁就丢了
- 如果左右操作数不一致怎么办？
- 转化格式

#### 基本类型转化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210822-1629601961035)

- 其他类型转整型用 int
- 转 float 用 float
- 转 string 用 str

### 作用

- 运算符的作用是什么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210822-1629602321024)

- 运算符可以用来建构表达式
- 表达式可以用来计算具体的值
- 具体什么是表达式？
- 有定义吗？

#### 表达式

- An expression is a construct made up of variables, operators, and method invocations, which are constructed according to the syntax of the language, that evaluates to a single value.

- 表达式是由变量运算符和函数调用组成的
- 根据具体语言的语法
- 可以得到唯一的值

### 举例

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210822-1629602598856)

- $1+1$ 就是一个加号构成的表达式
- 他返回唯一的值 2
- 最后我们把这个值赋给了变量 iNum
- $iNum = 1 + 1$
- 也是一个表达式
- 赋值表达式
- 他先计算等号右边表达式的值
- 然后再赋给左边的变量 iNum
- 表达式是由变量和运算符组成的

#### 再举例

```python
a = 9
b = 12
c = 3
x = a - b / 3 + c * 2 - 1
y = a - b / (3 + c) * (2 - 1)
z = a - (b / (3 + c) * 2) - 1
print("X = ", x)
print("Y = ", y)
print("Z = ", z)
```

#### 优先级

- 先乘除
- 后加减
- 有括号的要优先
- 乘方优先级最高
- 表达式是由变量、常量和运算符一起组成的
- 会在内存中生成一棵树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632026645268)

- 这棵树是什么表达式生成的呢？

#### 生成树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632026645268)

**$a / (b - c) + d$：**

- 表达式的目标是把这些运算符连接的变量按照优先级连接起来
- 最终生成一棵树
- 通过这个树计算出一个唯一的值
- 俗称表达式求值
- 观察一下ast树

### ast

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659276393400)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659276385133)

- 可以有缩进么？

### 结合顺序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659276798021)

- 下面有个难题
	- 让你求值

#### 表达式求值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210822-1629613728592)

- $\frac {1.2+3.4} {5.6/7.8+\sqrt{2}}-\ln(3+4^5)$
- 请对上面的表达式求值

### 总结

- 这次研究了运算符和操作数构成的表达式
- 表达式可以非常复杂
- 但是也有自身的优先级关系
  - 先乘除后加减
  - 有括号的要优先
 
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661646491640)

- 可以有赋值运算符
  - 对应赋值表达式
  - 还有增强赋值运算符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230202-1675325256053)

- 背后的存储方式和运算方式
	- 都是二进制的
- 生活中我们更常用 10个数字
	- 但是 计算机中 用二进制
- 日常计数的十进制数 
	- 最初是如何存储进计算机的呢?🤔
- 下次再说 👋
