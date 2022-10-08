---
show: step
version: 1.0
enable_checker: true
---

# Hello World!

## 回忆上次内容

- `python3` 的程序是一个 5.3M 的可执行文件
  - `python3` 里面全都是 cpu 指令
  - 可以执行的那种
  - 我们可以把指令对应的汇编找到
	- `objdump -d ~/python3 > python3.asm`
- 汇编语句是和当前机器架构的指令集相关的
	- `uname -a`可以查询指令集
- 我们执行的过程其实就
  - 系统执行`python3`这个可执行文件
  - 给了`python3`一个参数`hello.py`
  - `python3`对于`hello.py`一句句的解释执行
  - 在显示器输出了`hello world`
  - `python3`执行完毕
  - 把控制权交回给 shell
- 这就是我们执行`hello.py`的过程
- 为什么我们学编程总是从`hello world`开始呢？🤔

### 为啥总是`Hello World`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786932296)

### 奇怪🧐

- 不论学习什么编程语言
	- 总是从`Hello World`开始

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786792262)


- 为什么呢？🤔


### 起源

- 这一切都要从头说起
	- `linux` 操作系统的老祖宗 `unix`
	- 和 `unix` 对应的编程语言 `c`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786951642)


- 那是一切开始的地方

### 两人

- 1969 年，由于所在 `at&t` 贝尔实验室的 `Multics` 项目失败

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663936998908)

- 无所事事的两人
  - `Kenneth Thompson`
  - `Dennis Ritchie`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663935942818)

### 游戏

- 希望能在 PDP 机器上继续玩一个游戏
	- 这个游戏是 `Multics` 下的 `star travel`


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937098438)

- 为了玩这个游戏
	- 他们想要做一个操作系统 `unix`
- 为了制作操作系统
	- 他们创造了 `c` 语言的编译器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937020742)

- 当时
	- `c` 是他们为了开发 `unix` 而制作的语言
	- `unix` 是为了能玩 `star travel` 而制作的系统 

### hello world！

- `c` 和 `unix` 只能运行在当时的机器上
  - 没有文档
  - 没有书籍
  - 甚至没有人知道

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613787540042)

- 与他们同在 bell 实验室的 `Brian Wilson Kernighan` a.k.a `bwk`
  - 开始写 c 语言的类似于文档说明书的东西

### 手稿

- 主体的函数叫做 `main`函数
  - 里面输出函数叫做 `printf`函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613787458918)

- 不管是`main`函数，还是`printf`函数都有`小括号`
	- `小括号` 从那个时候就和函数相关
- 为什么输出字符要用`printf`来当做函数名呢?

### print 来历

-  1974 年的手稿😱
  - 写在打字机用纸的上面
  - 侧面的空洞是向上送纸用的
	 - 是不是很像胶片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663383261312)


- 打字机就是当时的显示器
  - 所以用 `print` 来表示输出
  - `f` 的意思是 `format` 格式
  - `printf` 是按格式输出

### 细节

- `printf函数` 后面有 `小括号`
  - `小括号` 里面放的是 `函数` 的 `参数`
  - `print("hello world")` 中 
	- `函数print` 的 `参数` 是 `"hello world"`
- `双引号` 引起来意味着`hello world` 是 `字符串`
	- 输出的内容就是这个字符串 `("hello world")`
- 小括号和双引号的风格延续到了 `python`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663932020080)

- 从 `c语言` 开始
	- 最早的入门教学程序都做一个`hello world`
	- 习惯成自然之后
  - 所有的编程语言第一个例子都是`hello world`
  - 是一种规矩或者文化
- 这个梗一直流传到今天
	- 除了时间因素之外
	- 还有一个重要的原因

### 成书

- 有了教材就有更多人学
	- 有更多人学就有更多人参与其中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613787632360)

- 正反馈在逐渐成型

### 教材风格
- 1978 年，`Kernighan`和`Ritchie`出版了这本书
	- 不厚，很薄
	- 轻松的语言风格
	- 因为 `c` 的目的就是让人像玩一样编程
	- 而不是记忆各种 cpu 汇编指令
- 蓬勃发展的计算机技术
	- 使得 `c` 语言成为系统语言的老大
	- `python` 的源代码就是用纯 c 编的
	- `linux` 内核 也是用纯 c 编的
	- 所以`c`还是非常核心的啊
- 虽说 `python` 是用纯 `c` 编写的
	- 不过 `python` 一旦出现之后就可以简化好多东西
	- 比如我们的游乐场里面有很多的函数和模块
- 我们为什么能认识print？
	- 而不认识pront？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663383962521)

### 内置函数

- dir()
	- 可以看到游乐场上来就自带的模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211211-1639232145671)

- 比如 dir() 这个函数 
	- dir的意思是directory 文档目录
	- 这里列出的是已经导入模块的目录
- 调用这个函数可以知道当前游乐场载入了哪些模块
- 比如 `__builtins__` 这个模块
- 这 `__builtins__` 里面又有些什么呢？

### dir()

- `dir(__builtins__)`
	- 注意前后都是两个下划线

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933416018)

- `__builtins__` 意思是在里面构建好的
	- 这里面有好多内置的函数
	- 包括我们熟悉的
		- exit()
		- print()
		- dir()
		- help()
- 为什么print直接就能用
	- 因为他在默认的这个`__builtins__`模块中 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646289345700)

- 如果我想要查询print函数更详细的信息应该如何呢？

### help(print)

- 什么不会就help什么
	- `help(print)`
	- 把函数名作为参数传进去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646288588886)

- 类似的还可以查询
	- help(quit)
	- help(dir)
	- help(help)
- 如果我想要查询__builtins__模块更详细的信息应该如何呢？

### `help(__builtins__)`

- `help(__builtins__)`
	- 注意内置模块builtins左右各有两个下划线

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211211-1639232283926)

- 我们可以查询到`__builtins__`模块的帮助文件
	- 返回的这些函数和子模块都隶属于 `__builtins__` 这个模块
	- 除了内置的、这些不用引入就可以用的模块之外
		- 还可以引入外部模块

### 导入外部模块

- 就像我们上次导入ast一样
	- 这次我们导入的是`__hello__`
	- 注意hello两边都有两个下划线

```python
import __hello__
```

- import
	- port是港口 来自于海洋文化
	- import 是进口 是导入
	- export 是出口 是导出
	- import 后面接空格 
	- 然后是被导入的外部模块名称 `__hello__`
	- `hello`左右也是两个下划线
- 把`__hello__`模块导入到游乐场
	- 可以输出经典的一句话
- 注意！
	- 导入 `__hello__` 模块前后游乐场中的模块增加了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646290025831)

- 想要深入了解 `__hello__` 应该怎么办呢？

### 什么不会就help什么

```
help(__hello__)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933594048)

## 总结

- `hello world` 不是从来就有的
	- 来自于`unix`和`c`
	- 虽然我们今天有各种先进的学习手段
	- 最早的高级语言学习是从最早的那张打字机用纸的手写代码起源的
- 输出用的函数名是 `print` 打印	
  -	也是从那个时候来的 
- 最早输出的是字符串是 `"hello world"`
	- 也是从那个时候来的 
- 这就成了一个迷因
- 等等！
	- 计算机里面不都是二进制的 0 和 1 吗
	- 哪里来的`hello` 中的 `h` 之类的字符呢？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933793795)

- 我们下次再说！👋
