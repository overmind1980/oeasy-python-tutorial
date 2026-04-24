---
show: step
version: 1.0
enable_checker: true
---

#  print函数_字符串_display_电传打字机_程序员的浪漫 🥋

## 回忆上次内容

- [视频总结](https://www.bilibili.com/video/BV1jv421i7P8)
- 上次 想输出
	- Hello world！
	- 据说是程序猿的浪漫

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240107-1704573718609)

- 那该 选哪种引号呢？🤔

### 引号的`选择`

- 注意⚠️
	- 双引号 是一个单独的字符
	- 而不是 两个单引号️
- 在python3中
	- 用 `单引号` 或 `双引号` 引起来的
		- 都是字符串
		- 是 `没有` 区别的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240110-1704842857939)

- 用谁都行！

### 惯用方式

- 在 python 中
	- 一般 用 `单`引号
- 毕竟
	- 单引号 比 双引号 
	- `少`按下一个<kbd>shift</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240110-1704843206513)

- 但oeasy的 python教程
	- 选用 `双`引号 引用字符串
- 这是为什么呢？

### 模仿c语言

- 在`c语言`中
	- `单引号` 表示 `单个字符`
		- 'o'
	- `双引号` 表示 `字符串`
		- "oeasy"
	- `单字符的字符串` 也还 `字符串`
		- "a"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704695748994)

- python语言 和 c语言 
	- 有什么关系呢？

### 源源

- c语言
	- 出现时间 在1969年
- 可以说 c语言 是 python的师傅


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704695762934)

- python3 这个游乐场
	- 就是用 c语言 编写的

### 半角符号

- 注意引号 
	- 一定 要使用 英文`半`角 模式
	- 而不能用 中文`全`角 模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704695813758)

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

- 如果就想要 
	- 俩单词 都完整
		- "hello" 和 "world" 
		- 都不带空格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662708964500)

- 如何拼出 
	- "hello world" 呢？

### 连加

- 中间 加上1个空格 
	- 就可以😄

- 但是
	- `hello world`两边 还有引号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662709098823)

- 我的输出 就想不要引号
	- 就想要 输出纯文字
		- Hello world
	- 该 怎么样做 呢？🤪

### 直接输出

- 按常理来说
	- 游乐场里 应该有个 `显示输出`函数
- `显示输出` 对应的英文 是什么？
  - `display` 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704695786435)

- display
  - 词根来自于
	- dis 不
	- plicare 折叠

### 不折叠

- 不折叠 
	- 就是 展示的意思

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704695834341)

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
	- 得让游乐场 识别 这个Name
- 输出函数 不是 display
	- 那究竟是`什么` 呢？

### 输出

- 输出函数的英文是
  - `print`
	- 这不是 `印刷` 么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210916-1631760771502)

- 回车结果
	- 没有出现`NameError`
	- 说明 游乐场 认识 print 这个Name

### 内建函数

- 游乐场 认为
	- print 是一个内建(built-in) 的 函数(function)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704695848469)

- built-in 内建
	- 就是 游乐场里面已经建好的
	- 可以直接用的 
- 真的能输出程序猿的浪漫吗？
	- 先去总结一下

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704695860913)

- print 指的不是 `印刷` 吗？
	- 真 能够输出 程序员的浪漫吗？？🤔
- 我们下次再说！👋

- [视频总结](https://www.bilibili.com/video/BV1jv421i7P8)
