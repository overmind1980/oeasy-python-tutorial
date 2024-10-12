---
show: step
version: 1.0
enable_checker: true
---

# fstring

## 会议

- 上次了解的是 
	- bitwise 运算符

|效果|英文|符号|操作数|
|---|---|---|---|
|按位与|bitwise and|& | 2 |
|按位或|bitwise or| \| | 2 |
|按位非|bitwise not | ~ | 1 |
|按位异或|bitwise exclusive or | ^ | 2 |

- 这一切都是从str.format引发出来的
- str.format 可以使用 上下文 中的 变量吗？🤔

### pep-498

- https://peps.python.org/pep-0498/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676605955886)

- 与format函数不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676606267295)

- f-string可以
	- 直接访问上下文变量
- 可以控制
	- 宽度
	- 精度
	- 正负号
	- 这些吗？

### 格式控制

- 回顾format

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676607345144)

- f-string的格式语法
	- 完全一致

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676607376368)

### 动手改改

```
import math
print(f"{math.e:8.3f}")
print(f"{math.e:^8.3f}")
print(f"{math.e:_^8.3f}")
print(f"{math.e:_^+8.3f}")
print(f"{math.e*1000:_^+16,.5f}")
print(f"{math.e*1000:_^+16,.5f}")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240202-1706876854417)

- 可以显示 不同进制形态吗？

### 整数格式控制

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676607584480)

- 整数格式控制
	- 也与format一致

|符号|来源|含义|
|---|---|---|
|e|exponent of 10 | 科学计数法|
|E|Exponent of 10 | 大写科学计数法|
|f|float | 浮点小数 |
|F|Float | 大写浮点小数 |
|g |general  | 通用格式|
|G |General  | 大写通用格式|
|n|number  | 数字格式|
|% |percent  | 百分比|
|None |   | 默认格式|

- 一通百通
- 上下文的变量都能被找到吗？

### 例子

- 有的时候可能找不到
	- 比如下图中inner函数
	- 找不到outer的x变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676612092848)

- 除非
	- 在子函数里面声明了x
	- x 引用outer中的 参数x
	- 就可以用了
- 如果就想在f-string里面
	- 使用大括号怎么办呢？

### 使用大括号

- 两个{括号 合成一个{
- 两个}括号 合成一个}
- 很像转义字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676612886594)

- f-string 有什么用吗?

### 数字精确位数

- 以前研究过的
	- 0.1 + 0.2 == 0.3

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231210-1702181742797)

- 在二十位小数的情况下就清清楚楚了

### 处理函数

- 看起来

|  符号 | 作用 |
|---|---|
|!a | 对目标调用ascii函数|
|!r | 对目标调用repr函数|
|!s | 对目标调用str函数|

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676612941158)


- 具体效果如何呢？

### 具体效果

- 确实有这样的对应关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676613035896)

| !a | !s | !r |
| --- | --- | --- |
| ascii()| str() | repr() |

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676613106339)

- 具体怎么应用呢？

### 具体应用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240202-1706878574355)

### 总结

- 之前有 两种处理字符串的方式
	- % modulo 取模
	- str.format()

- 我们这次研究了f-string
	- f-string的意思是 
	- 格式化后的字符串
	- formatted string
- 格式化的过程中
	- 可以 引用 上下文中的变量
	- 从而 得到相应的 最终值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676613676557)

- 除了f-string之外
	- 好像还有一种r-string
- 这r-string怎么用呢？🤔
- 下次再说👋🏻