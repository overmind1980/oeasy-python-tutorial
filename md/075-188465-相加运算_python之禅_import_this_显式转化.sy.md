---
show: step
version: 1.0
enable_checker: true
---

# 变量类型 相加运算

## 回忆上次内容

- 上次讲的是
	- 从键盘`输入`变量
- input 函数
  - 可以有 提示字符串(prompt)
  - 输入的字符串
	  - 作为函数返回值 
		- 被赋给 变量
- 输入单个变量没有问题
	- 但是 输入两个变量之后
	- 一相加 就非常离谱

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667041913775)

- 怎么办呢？🤔

### 复现问题

```python3
a = input("How many apples do you got?\n")
print("You got " + a + " apples!")
b = input("How many bananas do you got?\n")
print("You got " + b + " bananas!")
total = a + b
print("You got " + total + " fruits!")
```

- :w|!python3 %
	- 保存并运行当前文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230519-1684500514411)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667041913775)

### 基本实验

- 在vim中执行底行命令
	- :!python3 
		- 注意这次没有 %
			- % 指代的是当前缓存的文件名
- :!python3 
	- 相当于在shell中 运行python3
	 	- 进入 游乐场
	- 先去 做实验
	
- 两个`整数` 相加 
	- 结果是`求和`
- 两个`字符串` 相加 
	- 结果是`字符串拼接`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667041983654)

- 变量类型不同
	- 导致运算的逻辑不同
- 首先要做的就是
	- `确定类型` 

### 确定类型

- type()函数
	- 可以确定变量的类型
	- 比如 type("1")
- 那么
	- 能把接收 input()的变量类型
		- 输出出来么?

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230613-1686661671083)

- input()函数
	- 返回的类型是字符串型

### 转化函数

- 从 input()返回的
	- 是 字符串类型的变量
	- 需要 转化为 数字类型
	- 然后 再相加

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667042052812)

- 好了
	- 思路有了
- <kbd>ctrl</kbd> + <kbd>d</kbd> 退出游乐场
	- 返回vim
	- 整合到原来的 py 程序中吧

### 整合到一起

- input 得到的是字符串 a,b
- 需要做加法的是数字
  - 要数字相加
  - 不要字符拼接

```python3
a = input("How many apples do you got?\n")
print("You got " + a + " apples!")
b = input("How many bananas do you got?\n")
print("You got " + b + " bananas!")
total = int(a) + int(b)
print("You got " + total + " fruits!")
```

- 所以要把字符串 a、b 转化为 int 数字
  - 所以 total = int(a) + int(b)

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230423-1682259193114)

- 第7行出了问题
	- 字符串类型变量 和 数字类型变量
		- 不能相加

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667042564449)

- 如何理解这个错误呢？

### 复现错误

- :!python3
	- 继续去游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230517-1684315552616)

-  int 型(数字型)的变量 `total` 
	- 不能 `implicitly` 隐式转化为 str型(字符串类型)
- `隐式转化`
	- 所谓隐式转化
	- 就是隐晦地转化
	- 悄悄地转化
	- 自动地转化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667042564449)

- 但是int型变量不能
	-  `隐式转化`怎么办?

### 显示转化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230613-1686661723867)

- 既然不能悄悄自动 `隐式转化`
- 就只能明确地进行 `显式转化`

- int函数
	- 将字符串 转化为 整数
- str函数 
	- 将整数 转化为 字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230517-1684315665697)

- 问题的核心还是
	- 变量类型的转化

### 转化之后

```python3
a = input("How many apples do you got?\n")
print("You got " + a + " apples!")
b = input("How many bananas do you got?\n")
print("You got " + b + " bananas!")
total = int(a) + int(b)
print("You got " + str(total) + " fruits!")
```

- 这个东西终于成功了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043171330)

- 这也是` python之禅` 里面的一句话
  - Explicit is better than implicit
- 怎么理解呢？

### plicare

- plicare是
	- 拉丁语词根折叠
- ex往外折叠
	- explicit 
		- 展开了
		- 掰开了
		- 揉碎了
		- 说清楚了
- im往里折叠
	- implicit
		- 折叠了
		- 遮盖了
		- 掩藏了
		- 暗示了
- Explicit is better than implicit 
  - 明了胜于晦涩

### "1" + 2

- "1" + 2
  - 报错了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043028745)

- 不接受 隐式的 类型转化
	- 字符串加法后面必须得是字符串
- 如果 要用整数加法 就要把前面
	- `显示地` 转化 为 整数类型
- `明了` 胜于 晦涩
	- `Explicit` is better than implicit

### 1 + "2"

- 这次说的更明确

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043045467)

- +号的两端不能分别是 int 和 str 
	- 要么转前面
	- 要么转后面
	- 两边应该是同样类型的
- 明了胜于晦涩
	- 这句话确实
		- 真有禅机

- 这 python之禅 还说了些什么？
	- 这些都是谁写的呢？

### python 之禅

- python之禅 是 Tim Peters写的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629020881552)

- 在游乐场
	- `import this`

### 翻译

- python 之禅 by Tim Peters
  - 优美胜于丑陋（Python 以编写优美的代码为目标）
  - 明了胜于晦涩（优美的代码应当是明了的，命名规范，风格相似）
  - 简洁胜于复杂（优美的代码应当是简洁的，不要有复杂的内部实现）
  - 复杂胜于凌乱（如果复杂不可避免，那代码间也不能有难懂的关系，要保持接口简洁）
  - 扁平胜于嵌套（优美的代码应当是扁平的，不能有太多的嵌套）
  - 间隔胜于紧凑（优美的代码有适当的间隔，不要奢望一行代码解决问题）
  - 可读性很重要（优美的代码是可读的）
  - 即便假借特例的实用性之名，也不可违背这些规则（这些规则至高无上）
  - 不要包容所有错误，除非你确定需要这样做（精准地捕获异常，不写 except:pass 风格的代码）
  - 当存在多种可能，不要尝试去猜测而是尽量找一种，最好是唯一一种明显的解决方案（如果不确定，就用穷举法）
  - 虽然这并不容易，因为你不是 Python 之父（这里的 Dutch 是指 Guido ）
  - 做也许好过不做，但不假思索就动手还不如不做（动手之前要细思量）
  - 如果你无法向人描述你的方案，那肯定不是一个好方案；反之亦然（方案测评标准）
  - 命名空间是一种绝妙的理念，我们应当多加利用（倡导与号召）
- 这些并不是挂在墙上的名言
	- 而是可以指导实践的

### 突发奇想
- 这最后一句不是要字符串么？

```python3
a = input("How many apples do you have: \n")
print("You have got " + a + " apples!")
b = input("How many banana do you have: \n")
print("You have got " + b + " bananas!")
total = int(a) + int(b)
print("You have got  + str(total) + fruits in all!")
```

- 我是不是可以去掉这双引号
	- 直接把 str(total)放进去？
- 可以运行么？

### 尝试

- 事实证明不行
	- 哈哈哈
	- 加号就是用来拼接的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043204887)

- 写在里面就原样输出了
	- "You got " + a + " apples!" 中的 + 号不是装饰
		- 而是 进行拼接`运算` 的
	- 把变量 `a` 融到字符串里面去的

## 总结

- 变量相加
	- 整型数字变量可以相加
	- 字符串变量可以拼接
- 但是
  - 字符串 和 整型数字
  - 整型数字 和 字符串
  - 不能相加
- 怎么办？
	- 转格式
  - int("1")
  - str(2)
- 可是
	- 如果输入的苹果数量是
		- 字符串"z"
  - int("z")会发生什么？？😱
- 我们下次再说！👋
