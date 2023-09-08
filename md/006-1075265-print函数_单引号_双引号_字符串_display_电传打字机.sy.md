---
show: step
version: 1.0
enable_checker: true
---

# 你好世界 🥊

## 回忆上次内容

- 上次 在游乐场里 玩耍
- 了解到 `字符串` 
	- 就是 给一堆字符 两边加引号
		- 可以 是 `单`引号
		- 也可以 是 `双`引号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230905-1693922806866)

- 那究竟应该如何选择呢？🤔

### 引号的`选择`

- 在python3中
	- 使用 `单引号` 或 `双引号`
		- 都是字符串
		- 是`没有` 区别的
- 但 在`c语言`中
	- `双引号` 表示 `字符串`
		- "oeasy"
	- `单引号` 表示 `单个字符`
		- 'o'
	- `单字符的字符串` 也算是 `字符串`
		- "a"
- python3  
	- 如果是 您学习的 `第一门`编程语言
	- 我建议您 养成个 习惯
		- 字符串 默认使用`双引号`
- 这样 以后学习c语言 
	- 也会很方便
- 字符串 可以有 
	- 加减法 吗？

### 字符串加法

- 字符串相加 就是 字符串拼合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662708938747)

- 中间 可以有`空格`么？
	- 想要"hello world"

### 加上空格

- 前面或者后面 的 单词
	- 加上`空格` 都可以
- <kbd>↑</kbd>、<kbd>↓</kbd>
	- 可以进行 搜索历史命令
- <kbd>←</kbd>、<kbd>→</kbd>
	- 可以移动光标
- <kbd>ctrl</kbd> + <kbd>←</kbd>、<kbd>→</kbd>
	- 可以进行 以单词为单位左右移动
- <kbd>ctrl</kbd> + <kbd>a</kbd> 
	- 移动到行头
- <kbd>ctrl</kbd> + <kbd>e</kbd> 
	- 移动到行尾

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662708964500)

- 如果就想要用
	- "hello" 和 "world" 
		- 不带空格的单词
	- 如何拼出 "hello world"呢？

### 连加

- 中间 加上1个空格 
	- 就可以😄

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662709098823)

- 但是
	- `hello world`两边 总有引号
- 我想要的是
	- 直出 `hello world`
		- 两边 没有引号

- 应该 怎么样做 呢？
- 胡乱 尝试 一下🤪

### 直接输出

- 按常理来说
	- 游乐场里 应该有个 输出函数
- `显示输出` 对应的英文 是什么？
  - `display` 就是 显示输出
  - 词根来自于
	- dis 不
	- plicare 折叠、编结
	- 不折叠 
  - 就是 展示的意思

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230213-1676294250805)

- 那display 真的是 `输出`函数 吗？
	- 键入display会发生什么？

### 键入display

- 系统又报了错 ❌

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662706179627)

- 每次回车 
	- 无论对错 都会有反应
	- 这次的问题 是什么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230213-1676294396743)

- NameError
	- python3游乐场 根本不认识 display 这个`Name`
	- 所以报了 `NameError`
- 输出函数 不是 display
	- 那究竟是`什么` 呢？

### 输出

- 输出函数的英文是
  - `print`
- 这不是 `打印` 么？
  - 我们 用的是 `显示器` 啊
  - 不用 `打印机`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210916-1631760771502)

- 没有出现`NameError`
	- 说明 游乐场 认识 print 这个Name
- 游乐场 认为
	- print 是一个内建(built-in) 的 函数(function)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230213-1676294683819)

- built-in 内建
	- 是 游乐场里面已经建好的
	- 可以直接用的 
- 为什么python
	- 要用print作为函数名字呢？

## 总结

- 这次 在游乐场里 玩耍
- 了解到 `字符串` 
	- 就是 给一堆字符 两边加引号
		- 可以 是 `单`引号
			- 用于单个字符
		- 也可以 是 `双`引号
			- 用于 多个字符的字符串
- 字符串 可以用`print函数` 
	- 进行输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230905-1693923358057)

- print 指的不是属鸡的印刷吗？
	- 和屏幕输出有什么关系呢？🤔
- 我们下次再说！👋

