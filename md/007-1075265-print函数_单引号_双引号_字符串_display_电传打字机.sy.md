---
show: step
version: 1.0
enable_checker: true
---

# 你好世界 🥊

## 回忆上次内容

- 上次 想输出
	- Hello world！

| 键盘按键 | 作用 |
|---|---|
| <kbd>↑</kbd> |  上一条指令 |
| <kbd>↓</kbd> |  下一条指令 |
| <kbd>←</kbd> |  光标 向左移动 一格 |
| <kbd>→</kbd> |  光标 向右移动 一格 |
|  <kbd>ctrl</kbd> + <kbd>a</kbd>|  光标 移动到开头 |
| <kbd>ctrl</kbd> + <kbd>e</kbd> |  光标 移动到结尾 |

- 了解到 `字符串` 
	- 就是 给一串字符 两边加引号
		- 可以 是 `单`引号
		- 也可以 是 `双`引号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230905-1693922806866)

- 那该 怎么选呢？🤔

### 引号的`选择`

- 在python3中
	- 用 `单引号` 或 `双引号` 引起来的
		- 都是字符串
		- 是 `没有` 区别的
		- 用谁都行！

- python的例子
	- 一般 用 单引号
- 毕竟
	- 单引号 比 双引号 少按下一个<kbd>shift</kbd>
- 但我们这个教程
	- 选用 双引号 引用字符串

### 模仿c语言

- 在`c语言`中
	- `单引号` 表示 `单个字符`
		- 'o'
	- `双引号` 表示 `字符串`
		- "oeasy"
	- `单字符的字符串` 也还 `字符串`
		- "a"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231010-1696923007502)

- python语言 和 c语言 
	- 是什么关系呢？

### 选择

- c语言
	- 出现时间 在1969年
	- 可以说是 python的师傅

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231011-1697015371084)

- python3这套程序
	- 是用c语言编写的

### 半角符号

- 注意引号 
	- 一定要使用英文半角
	- 而不能用 中文全角 模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231011-1697014554645)

- 字符串 可以 加减 吗？

### 字符串加法

- 字符串相加 相当于
	- `拼合`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662708938747)

- 想要"hello world"
	- 单词之间 可以加`空格`么？

### 加上空格

- hello 或者 world
	- 都可以 加上`空格` 

| 键盘按键 | 作用 |
|---|---|
| <kbd>↑</kbd> |  上一条指令 |
| <kbd>↓</kbd> |  下一条指令 |
| <kbd>←</kbd> |  光标 向左移动 一格 |
| <kbd>→</kbd> |  光标 向右移动 一格 |
|<kbd>ctrl</kbd> + <kbd>←</kbd> |  光标 向左移动 一词 |
|<kbd>ctrl</kbd> + <kbd>→</kbd> |  光标 向右移动 一词 |
|  <kbd>ctrl</kbd> + <kbd>a</kbd>|  光标 移动到开头 |
| <kbd>ctrl</kbd> + <kbd>e</kbd> |  光标 移动到结尾 |

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662708964500)

- 如果就想要 
	- 俩单词 都完整
		- "hello" 和 "world" 
		- 都不带空格
- 如何拼出 
	- "hello world" 呢？

### 连加

- 中间 加上1个空格 
	- 就可以😄

- 但是
	- `hello world`两边 还有引号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662709098823)

- 我的输出 不想要引号
	- 就想要 Hello world
	- 该 怎么样做 呢？🤪

### 直接输出

- 按常理来说
	- 游乐场里 应该有个 `显示输出`函数
- `显示输出` 对应的英文 是什么？
  - `display` 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230213-1676294250805)

- display
  - 词根来自于
	- dis 不
	- plicare 折叠

### 不折叠

- 不折叠 
	- 就是 展示的意思

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694396888025)

- 键入display会发生什么？

### 键入display

- 系统又报了错 ❌

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662706179627)

- 每次回车 
	- 无论对错 都会有反应
	- 这次的反应 是什么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230213-1676294396743)

- NameError
	- python3游乐场 根本不认识 display 这个`Name`
	- 所以报了 `NameError`
- python3编程 
	- 和我们说话 不一样
	- 不是 把意思说清楚了就行
	- 而是 需要按照python3的规则 来说话
- 输出函数 不是 display
	- 那究竟是`什么` 呢？

### 输出

- 输出函数的英文是
  - `print`
	- 这不是 `印刷` 么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210916-1631760771502)

- 没有出现`NameError`
	- 说明 游乐场 认识 print 这个Name

### 内建函数

- 游乐场 认为
	- print 是一个内建(built-in) 的 函数(function)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230213-1676294683819)

- built-in 内建
	- 就是 游乐场里面已经建好的
	- 可以直接用的 

## 总结

- 这次 继续在游乐场里 玩耍

| 键盘按键 | 作用 |
|---|---|
| <kbd>↑</kbd> |  上一条指令 |
| <kbd>↓</kbd> |  下一条指令 |
| <kbd>←</kbd> |  光标 向左移动 一格 |
| <kbd>→</kbd> |  光标 向右移动 一格 |
|<kbd>ctrl</kbd> + <kbd>←</kbd> |  光标 向左移动 一词 |
|<kbd>ctrl</kbd> + <kbd>→</kbd> |  光标 向右移动 一词 |
|  <kbd>ctrl</kbd> + <kbd>a</kbd>|  光标 移动到开头 |
| <kbd>ctrl</kbd> + <kbd>e</kbd> |  光标 移动到结尾 |

- 了解到 `字符串` 
	- 就是 给一串字符 两边加引号
	- 单引号 双引号 都可以 
-  `单`引号
	- 可以 用于单个字符
- `双`引号
	- 用于 多个字符的字符串
- 输出的函数 叫 `print`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230905-1693923358057)

- print 指的不是 `印刷` 吗？
	- 真 能够输出 程序员的浪漫吗？？🤔
- 我们下次再说！👋

