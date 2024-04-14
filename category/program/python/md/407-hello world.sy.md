---
show: step
version: 1.0
enable_checker: true
---

# Hello World!

## 回忆上次内容


- `python3`的程序是一个4.3M的可执行文件
	- `python3`里面全都是cpu指令，可以执行的那种
	- 我们可以把指令对应的汇编找到
		- `objdump -d ~/python3 > python3.asm`
- 汇编语句是和当前机器架构的指令集相关的
- `uname -a`可以查询指令集
- 我们执行的过程其实就
	- 系统执行`python3`这个可执行文件
	- 给了`python3`一个参数`hello.py`
	- `python3`对于`hello.py`一句句的解释执行
	- 在显示器输出了`hello world`
	- `python3`执行完毕，把控制权交回给shell
- 为什么编程语言总是从`hello world`开始呢？🤔

### 为啥总是`Hello World`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786932296)

- 不论学习什么编程语言
- 总是从`Hello World`开始
- 为什么呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786792262)

### 起源

- 这一切都要从头说起
- 操作系统的老祖宗`unix`
- 和他对应的编程语言`c`
- 是一切的开始

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613786951642)

- 1969年，由于所在的`Multics`项目失败有些无所事事的两人
	- `Kenneth Thompson`和`Dennis Ritchie`
- 希望能在别的机器上继续玩一个游戏
- 在尝试用c制作unix
- 当时的c是他们为了开发unix制作的语言
- 只能运行在当时的机器上，没有文档，没有书籍，甚至没有人知道

### hello world！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613787540042)

- 与他们同在bell实验室的`Brian Wilson Kernighan`
	- 开始写c语言的类似于文档说明书的东西

### 手稿

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613787458918)

- 这是1974年的手稿
	- 写在打字机用纸的上面
	- 打字机就是当时的显示器
	- 所以输出就是`print`
	- 最早的程序就是`hello world`

### 成书

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613787632360)

- 1978年，`Kernighan`和`Ritchie`出版了这本书
- 不厚，很薄
- 轻松的语言风格，使得c语言成为系统语言的老大

## 总结

- `hello world`	不是从来就有的
- 来自于`unix`和`c`
- 虽然我们今天有各种先进的学习手段
- 但是都是从最早的那张打字机用纸的手写代码起源的
	- 所以输出用的是`print`
	- 最早输出的是`hello world`
- 计算机里面不都是二进制的0和1吗，哪里来的`h`之类的字符呢？🤔
- 我们下次再说！👋