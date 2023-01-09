---
show: step
version: 1.0
enable_checker: true
---

# 变量定义

## 回忆上次内容

- 上次讲了是从键盘输入变量
- input 函数
  - 可以有提示字符串
  - 需要有具体的变量接收输入的字符串
- 输入单个变量没有问题
	- 但是输入两个变量之后
	- 一相加就非常离谱

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667041913775)

- 怎么办呢？🤔

### 基本实验

- 我们回到游乐场
- 做个基本实验

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667041983654)

- 两个整数相加结果是求和
- 两个字符串相加结果是字符串拼接
- 目前的拼接结果显然来自于
- input()进来的东西都是字符串
- input()进来的东西真的是字符串么？

### 确定类型

- type()函数
	- 可以确定变量的类型
	- 比如 type("1")
- 那么
	- 能把接收 input()的变量打印出来么?

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629019410067)

### 转化函数

- 从 input()来的
	- 肯定是字符串类型的变量
	- 我们需要转化为数字类型
	- 然后再相加

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667042052812)

- 好了
	- 思路有了
- 整合到原来的 py 程序中吧

### 整合到一起

- input 得到的是字符串 a,b
- 需要做加法的是数字
  - 要数字相加
  - 不要字符拼接
  - 所以要把字符串 a、b 转化为 int 数字
  - 所以 total=int(a)+int(b)

```python
#!/usr/bin/python
a = input("How many apples do you got?\n")
print("You got " + a + " apples!")
b = input("How many bananas do you got?\n")
print("You got " + b + " bananas!")
total = int(a) + int(b)
print("You got " + total + " fruits!")
```

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667042197236)

- 第7行出了问题
	- 字符串和数字不能相加
- 最终要使用字符串连接
  - 但是 total 是个数字
  - 所以要 str(total)把它转化为字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667042564449)

- 不能把 int 型(数字型)的变量 `total`
	- `implicitly`隐式地 转化为 str 型(字符串类型)
- 怎么办?
- <kbd>ctrl</kbd>+<kbd>z</kbd>撤到游乐场

### 字符串转化为数字

- 先试试能否 explicit 显示 转化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667042651835)

- 这样就可以把整型数字变量转化为字符串变量
- 然后就可以和字符串拼接了
- 这也是` python之禅` 里面的一句话
  - Explicit is better than implicit
- 怎么理解呢？

### plicare

- plicare是拉丁语词根折叠
	- ex往外
		- explicit 
			- 展开了
			- 掰开了
			- 揉碎了
			- 说清楚了
	- im往里
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

- 不接受隐式地类型转化
	- 要显示地转化
- 明了胜于晦涩
	- Explicit is better than implicit

### 1 + "2"

- 这次说的很明确

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043045467)

- +号的两端不能分别是 int 和 str 
	- 要么转前面
	- 要么转后面
	- 两边应该是同样类型的
- 明了胜于晦涩
- 确实
	- 这句话真禅机

- 这个 python 之禅还有些什么？
	- 明了胜于晦涩
	- 还挺有道理
	- 是名人名言么？

### python 之禅

- 这是Tim Peters写的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629020881552)

- 在游乐场
	- `import this`
- 谁给翻译翻译？

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
	- 而是可以用的
	- 怎么用呢？

- `fg` 回到 `vim`



### 转化之后

```txt
#!/usr/bin/python
a = input("How many apples do you got?\n")
print("You got " + a + " apples!")
b = input("How many bananas do you got?\n")
print("You got " + b + " bananas!")
total = int(a) + int(b)
print("You got " + str(total) + " fruits!")
```

- 这个东西终于成功了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043171330)


- 突发奇想
	- 这最后一句不是要字符串么？
- 我是不是可以去掉这双引号
	- 直接把 str(total)放进去？

### 转化之后

```python3
#!/usr/bin/python3
a = input("How many apples do you have: ")
print("You have got " + a + " apples!")
b = input("How many banana do you have: ")
print("You have got " + b + " bananas!")
total = int(a) + int(b)
print("You have got  + str(total) + fruits in all!")
```

- 可以运行么？

### 尝试

- 事实证明不行
	- 哈哈哈
	- 加号就是用来拼接的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043204887)

- 写在里面就原样输出了
	- "You got " + a + " apples!" 的 + 号不是装饰
	- 而是进行拼接运算的
	- 把变量 `a` 融到字符串里面去
## 总结

- 变量相加
	- 整型数字变量可以相加
	- 字符串变量也可以相加
- 但是
  - 字符串和整型数字
  - 整型数字和字符串
  - 不能相加
- 怎么办？
	- 转格式
  - int("1")
  - str(2)
- 可是是如果输入的数量是字符串"abc"
  - int("abc")会发生什么？
  - 怎么办？😱
- 我们下次再说！👋
