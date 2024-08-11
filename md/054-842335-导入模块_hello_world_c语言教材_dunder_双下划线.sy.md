---
show: step
version: 1.0
enable_checker: true
---

# Hello World!

## 回忆上次内容

- 上次了解了 try 的完全体
  - try
	- 尝试运行
  - except
	- 发现异常时运行的代码块
  - else
	- 没有发现异常时运行的代码块
  - finally
	- 无论是否发现异常最终都要运行的代码块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672366714550)

- 上图就是python连接数据库的类库psycopg中
	- try的具体应用
		- 如果成功就提交commit
		- 如果失败就回滚rollback
		- 无论成功失败都要断开连接
- python是如何引入外部类库的呢？🤔

### 回忆过去

- 为什么 python
	- 能认识print？
	- 而不认识pront？？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663383962521)

- 具体帮助细节怎么查呢？

### help(print)

- 什么不会 就help什么
	- `help(print)`
	- 把函数名 作为参数 传进去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646288588886)

- 发现print是builtins内建的函数
- 按<kbd>q</kbd>可以退出帮助

### 类似

- 类似的 还可以
	- help(quit)
	- help(help)
	- help(licence)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418149974)

- 都是 in module builtins
	- builtins 具体是什么呢？


### 内置 函数

- 首先运行 python3(游乐场)
	- 在游乐场中 键入 `dir()`
	- 可以看到 游乐场的自带模块

- dir() 这个函数 
	- dir的意思是 
		- directory文档目录
	- 这里列出的是 
		- 已经导入模块的目录

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700830344959)

- 调用 这个函数 
	- 可以知道 当前游乐场的scope(作用域)中
		- 载入了哪些模块
		- 定义了那些变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677417942228)

- 比如 `__builtins__`这个模块
	- 显然就是builtins模块
	- 读作 dunder builtins
- dunder 是什么意思q呢？

### dunder来历

- dunder 
	- Double UNDERscore

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

- 这 `__builtins__`模块里面 
	- 又有些`什么`呢？


### `help(__builtins__)`

- 什么不会 
	- 就help什么

- `help(__builtins__)`
	- 注意 内置模块builtins左右
		- 还是 有dunder(两个下划线)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211211-1639232283926)

- 可以查询到`__builtins__`模块的帮助文件
	- 返回的 这些函数和子模块
		- 都隶属于 `__builtins__` 这个模块
		- 属于内置的模块
- 这模块里有些什么？

### 翻阅

- 按方向键可以对于文档进行翻阅
	- 找到熟悉的东西

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699438103505)

- <kbd>ctrl</kbd> + <kbd>f</kbd>
	- 向前翻阅
	- forward
- <kbd>ctrl</kbd> + <kbd>b</kbd>
	- 向后翻阅
	- backward
- 操作方法与vim相同

### 查找函数

- 按下<kbd> / </kbd>
	- 再键入print 
- 注意左下角
	- 回车

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699438539471)

- <kbd>n</kbd>
	- 下一个匹配单词
	- next
- <kbd>N</kbd>
	- 上一个匹配单词

### 找到位置

- 通过不断next
	- 找到 print的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699438886260)

- 这和help(print)很类似

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699439381889)

- print就是builtins里面的内建函数
	- 其中.(点)的意思就是里面的
- 可以查询出模块中的函数名吗？

### dir()

- `dir(__builtins__)`
	- 注意builtins前后都是两个下划线
		- 两个下划线叫做dunder
		- `__builtins__` 念作 `dunder builtins`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700831131031)

- `__builtins__` 是 游乐场自带的
	- 这里面 有好多内置的函数
	- 包括
		- exit()
		- dir()
		- help()
		- print()
- 所以游乐场
	- 认识print
	- 不认识pront
- 如果我想要查询`__builtins__`模块
	- 更详细的信息 应该如何来着？

### 详查模块

```
help(__builtins__)
```

- 详细查看帮助

```
dir(__builtins__)
```

- 只查函数名目录
- 可以导入模块吗？

### 导入 外部模块

- 导入命令 是
	- import
		- port是港口 
			- import 是进口 是导入
			- export 是出口 是导出
	- import 后面`接空格`
- 被导入的模块 是
	- `__hello__`
		- `dunder hello`
	- 注意hello两边 
		- 都有dunder(两个下划线)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418325769)

- 把`__hello__`模块 导入到游乐场
	- 可以 输出那句程序员的浪漫

### 变化

- 注意！重进一次游乐场
	- 观察导入前后变化
- 导入 `__hello__`模块后
	- 游乐场中的模块 增加了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418465935)

- 想要深入了解 `__hello__`
	- 应该怎么办呢？

### 什么不会就 help什么

```
help(__hello__)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933594048)

- 非常简单的 一个模块
	- 练手用的

## 总结

- 模块 就是 封装好功能的一个部件
	- 比如一个 wifi模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700645381698)

- 游乐场里面 已经装备了一些函数
	- help
	- dir
	- quit
	- print
	- chr
	- ord
	- 这些函数 位于 `__builtins__` 模块
	- 所以都是 内建函数
- 可以导入 `__hello__` module模块
	- 输出`hello world!`

- 可以在py程序里面导入模块吗？？🤔
- 我们下次再说！👋