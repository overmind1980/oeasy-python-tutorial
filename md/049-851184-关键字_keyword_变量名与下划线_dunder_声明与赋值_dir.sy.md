---
show: step
version: 1.0
enable_checker: true
---

# 变量名下划线

## 回忆上次内容

- 上次了解了
	- hello world是怎么来的
	- 1969年的c语言 
	- 开启了很多的习惯

|标志| 含义|
|---|---|
| 括号 | 代表函数 |
| print | 输出|
| 单引号 | 单个字符|
| 双引号 | 字符串|
| main| 主函数|


- c语言时代 形成的
	- 标识符命名规则
	- 影响到 今天python中的命名规则

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710762334835)

- 是不是 满足了 规则
	- isidentifier() 为 True
	- 就`一定`可以作为标识符呢?


### 尝试

- 可以将 import当 变量名吗？
	-  import  是否是
		-  合法标识符
	- isidentifier

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230511-1683780899494)

- import 
	- 是合法标识符
	- 但不能 被声明为 变量 !😠
- isidentifier函数 
	- 不灵 了吗？🤔

### 翻看文档

```
import keyword
keyword.kwlist
```

- import 属于关键字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230511-1683781094482)

- 找出我们用过的关键字

### 关键字

- 新模块 module
	- 可以列出关键字列表

```
keyword.kwlist
```

- 关键字	
	- keyword 关键的字
	- python能写出程序 
	- 全靠他们

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727409397001)

- 回忆一下

### 那片黑暗森林

```python
for num in range(0, 128):
    if num % 8 == 0:
        print()
    print(chr(num), end="\t")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695095058569)

### True

- 从标识符命名规则来说
	- 字符串"True"`符合`命名规则

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230512-1683897556438)

- 但是True 
	- 有特殊含义
	- 不能被 声明 为变量
	- 属于`关键字`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230512-1683897663480)

- 什么是关键字？

### 关键字

- python编程过程中
	- 有些单词我们用来组织语法
	- 这些字很关键

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727421000991)

- 所以叫做关键字
	- keywords

### 保留字

- 这次重要的关键字
	- 被保留起来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727421072791)

- 所以也叫
	- 保留字
	- reserved words

- 再试试 del 这个 keyword
	- 能否被定义为变量？

### 观察

- del 是不是 
	- 合法标识符
	- identifier

```
"del".isidentifier()
```

- 是

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710763219956)

- 确实是合法标识符
- 但是他能被 赋值吗？

### 尝试 

```
del = 1
```

- 尝试 对 del 声明并赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710763281277)

- 失败了	
	- 因为 del 是 关键字
	- 所以发生了 语法错误
	- SyntaxError

- 除了 关键字 keywords 之外
	- 还有哪些 不适合 做 变量标识符的 呢?

### 常见错误

```
int = 5
a = int(6)
```

- 将 5 赋给 变量 int

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716263651528)

- int 一旦被 重新 赋值
	- 就不能够完成类型转化了 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727419855719)

- 这个赋值过程
	- 将int从class类型
	- 转化为整型变量
- 还有什么类似的吗？

### max

- max是
	- 内建的函数
	- builtin-function

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716255952490)

- 将 1 赋给 max 之后
	- max 不再是 内建的函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716256138857)

- TypeError
	- 整数 对象无法调用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716256199892)

- max 此时
	- 是一个 整形变量名
	- 不是 函数名

### 删除max

```
del max
```

- 在本地删除 max 变量之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716256326024)

- 本地变量 max 消失
	- `__builtins__`.max 从新被识别为 
	- 内建函数 
	- builtins-function
- 如果我就想
	- 使用max变量名
	- 表示最大值
	- 还不想破坏max函数
- 怎么办?

### 变量

- 班里面 有个张伟
	- 新来一个 就不能 还叫张伟
	- 只能叫 大张伟 或者 小张伟

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676467043077)

- 如果使用max 作为变量名
	- 会把max函数 屏蔽掉
- 使用max_
	- 不会屏蔽 max函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240326-1711415655588)


- 下划线
	- <kbd>shift</kbd> + <kbd>-</kbd>
	- 得到 <kbd>_</kbd>



### 两端双下划线(dunder)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676467102637)

- 系统定义的标识符
	- 模块名
	- 函数名
	- 变量名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716261074769)

- dunder变量都是系统内部的
	- 不要轻易破坏


### dunder来历

- 两个下划线 
	- Double UNDERscore
	- 省略读法 dunder 

- `__builtins__` 
	- 读作 dunder builtins
	- dunder 是 `什么`意思呢？
- 最初提议

> Dunder (Double UNDERscore) Alias

>> Mark Jackson was the first to suggest dunder as a speech shorthand for double underscores (__) in a reply to a query from Pat Notz. Ned Batchelder later stressed the need for a way of pronouncing __:

>> An awkward thing about programming in  Python : there are lots of double underscores. [snip] My problem with the double underscore is that it's hard to say. How do you pronounce __init__? "underscore underscore init underscore underscore"? "under under init under under"? Just plain "init" seems to leave out something important. I have a solution: double underscore should be pronounced "dunder". So __init__ is "dunder init dunder", or just "dunder init".


- 在发明 dunder 之前
	- `__init__` 要念作 double underscore init
		- 其中的double underscore 
			- 有17个字符
			- 发音是6声
		- 而dunder 
			- 只有6个字符
			- 发音是2声
- 从此 dunder 这个单词
	- 就被发明出来了

- 如果只有一个下划线
	- 也是变量吗？

### 上次的值

- 在游乐场里
	- _下划线 意味着上次的值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727420327982)

- _可以被定义为变量吗？

### _定义为变量

- _ 符合标识符的命名规则

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727420491260)

- _ 不是关键字 
	- 可以被定义为变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727420485809)

- 定义了之后
	- _ 就不再是上一次的值了
	- 和 变量a 的性质相似

### 细节

- `a` 是 变量标识符
  - 而不是 字符串
- 如果 a 加了双引号 
	- 就是字符串了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230512-1683898843406)

- 在等号两端 都保留 有一个`空格`
  - 可是 `为什么`要 加空格呢？

### 可读性

- 增加文档的可读性
  - 这`不会` 影响程序的执行速度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628995013547)

- 这两句话从何说起

### 加空格的原因

```python3
import this
```

- 这两句话也来自于
	- python之禅
	- The Zen of Python

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667036051528)

- 现在 到底 
	- 有`多少`变量呢？

### 回忆 locals函数

- locals()
	- 返回的 是 
	- 包含 当前域中 所有变量的
	- 字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629012206686)

- 声明和赋值 都使用等号
	- 声明并赋值 变量a 之后
	- 变量a 在内存里真的有位置了么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230613-1686656737313)

- del之后 
	- 就会消失

## 总结

- 这次 了解了 命名规则
- 有两类 不适合做 标识符
	1. 关键字
	2. 已有的函数名、类名、模块名

- 关于 下划线

|位置和数量|作用|
|---|---|
|一个放后面 | 避免名字冲突 |
| 两个放两边 | 系统变量 |

- 变量命名还有什么规则吗？？🤔
- 我们下次再说！👋
