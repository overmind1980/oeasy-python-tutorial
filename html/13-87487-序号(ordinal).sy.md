---
show: step
version: 1.0
enable_checker: true
---

# 序号(ordinal)

## 回忆上次内容

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

### 字符本质

```bash
#进入python3解释器
python3
```

- 我们这次只输出一个字符'h'

```python
#直接写h
h
#直接写"h"
"h"
#直接写'h'
'h'
#输出h
print("h")
```

- 这一套在hello world里面已经玩过了

### 只有h

- 只有字母h的话
	- 游乐场不认h
	- 认为是NameError
	- 没有定义h这么一个变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210310-1615335235709)

- 单引号和双引号引起的字母效果一样
	- 因为表示同样的字符串
- 计算机里面不都是二进制的 `0` 和 `1` 吗
	- 这个字符`h` 是如何用 `0`、`1`来表示的呢？ 
	- 可以输出这个 `h`字符 的二进制形态吗？🤔

### ord 序数

```python
#直接写h
"h"
#输出h的序数
ord("h")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937292671)

- 我们通过ord函数
	- 调用字符作为函数参数
	- 从而得到字符对应的的序号
- 那这个ord到底什么意思？
	- 什么不会就help什么

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937300418)

### 查看ord帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220824-1661330518674)

- 进入ord的帮助后
	- 大致是对一个单子字符串返回一个unicode码
	- 可以按<kbd>q</kbd>退回到游乐场
- ord函数为什么叫做ord呢？

### 查看帮助

- ord 对应的单词是 ordinal

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210916-1631769581858)

- 序数词
	- 说白了就是挨个给排个号
	- 从第一开始数起来...

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663388188706)

- ordinal这个单词又是怎么来的呢？

### ordinal

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220221-1645420771322)

- 这个单词来自于order
- order这个词来自什么呢？

### order

- order 来自于 织布机里面的一横行的线
	- 这些线是有顺序的
	- 每一行对应不同的经线
	- 所以才能最终呈现定制的图案

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220221-1645421256785)

- order这个词里面也有等级的含义
	- 来自于十字军骑士的兄弟会
	- 不只是梁山好汉排座次
	- 更重要的是区分出军阶
	- 长官可以给下级命令(order)
- 客人订购货物或者菜品
	- 某种意义上也是按照客人的命令执行
	- 所以order也是点单或者订货
- 连队或者班次都是有具体序号的
	- 按序号排列就是 in order
	- 否则就是out of order
- 先去总结一下

## 总结

- 我们这次了解了ord函数
- 这个函数可以通过字符得到序号
- 那么可以反过来吗？
- 通过序号得到字符可以吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663940957383)

- 我们下次再说！👋
