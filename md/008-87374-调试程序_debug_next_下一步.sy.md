---
show: step
version: 1.0
enable_checker: true
---

# 调试程序 🥊

## 回忆上次内容
- `py` 的程序是按照顺序执行的
  - 是一行行挨排解释执行的
  - 程序并不是数量越多越好
  - kpi也在不断演化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220705-1656991419814)

- 写的代码越多
	- 出现的bug就越多
- 那什么是bug呢？
  - 如何找bug呢？


### 尝试调试

- 想要调试程序找bug
- 首先得有一个程序

```python
print("1982------Guido in cwi")
print("1995------Guido in cnri")
print("2000------Guido in beopen")
print("2005------Guido in google")
print("2012------Guido in dropbox")
print("2020------Guido in microsoft")
```

- 首先要有这个guido.py
- 然后放到网上系统的剪贴板上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220927-1664286061599)

### 尝试调试

- 粘贴到vim中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220927-1664286082745)

- 原来是一把执行
- 现在可以一步一步调试运行

```shell
pdb3 guido.py
```

- 使用`pdb`来进行调试
  - `pdb`的意思是`p`ython's `d`e`b`ugger🤖


- 为什么要逐步运行呢？

### 逐步运行

- 由于程序不知道哪里出的问题
	- 所以一步步来执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220825-1661397068105)

- 一步步调试运行的目的是去除`bug`
	- 也就是`debug`
- 可是为什么把程序错误叫做 `bug` 🪰 呢？

### help

- 不知道怎么办的时候
	- 就要求助(help)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663313484243)

- 他给了我很多的命令
- 还说可以help 一下具体 topic
- 查看你哪个topic呢？

### 具体帮助

- 查看帮助的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663313776371)

- 没有参数的话
	- 显示所有命令
- 有一个参数
	- 显示这个参数的帮助
- h(elp) 的缩写是 h
	- elp可以省略

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314205823)

- 这并不难 h h
- 再看看其他单词

### list

- l(ist) 
	- 可以列出上下文11行的程序
	- 缩写是l

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314411013)

- 当前行前面有个箭头 ->

### 使用命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314543612)

- 确实可以看到上下文
- ->代表着当前运行到了哪里
- 怎么往下走呢？

### next

- n(ext)
	- 可以往前走一句
	- 缩写是n

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314715619)

- 试一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314773281)

- 把1982年输出了
- 然后当前行来到了1995年
- 如何判断1995年在整个程序中的位置呢？

### 执行

- l(ist)
	- 可以列出当前行的上下文

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314840395)

- 在第2行
	- next就会到第3行
- 当然也可以一路next下去

### 一路next

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314933265)

- 我们一路next

### 完成调试

- 一路 `next` 下去
- python 解释器 
- 就是这么一步步地解释执行的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210924-1632464724387)

- 确实是顺序执行的
- 一行行挨排儿执行的
- 我们就一步步地把bug找出来
- 就像找凶手一样！

### 最真实的解谜游戏

- debug是我见过最真实的解谜游戏了
- 比什么剧本杀好玩多了
- 一步步地分析
- 找不到罪魁祸首的时候

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220722-1658495439185)

- 需要冷静地分析
- 找到罪魁祸首的时候
- 那种快乐太真实了！！！！
- 终于来到最后一行
- 如果到这里再next
- 会发生什么呢？

### 最后一步

- 执行完最后一句之后
	- 就会返回(return)到python
	- 然后返回(return)到shell

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663315251931)

- 如果这个时候已经到了程序的尽头
- 再next会发生什么呢？

### 绕圈

- 到头了就又重来
	- 就会重新执行这个文件
	- 就圜道了 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663315397294)

- 可是这个和虫子(bug)有什么关系呢？

### 第一个错误 bug

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613775864374)

- 历史上第一个程序错误是
	- 这只虫子`bug`🪰 
	- 飞进继电器(relay)计算机(computer)里面来
	- 导致当时的继电器短路
- 所以后来
	- 管错误叫做bug
	- 管调试程序错误叫做 `debug`

## 总结

- `py` 文件的程序是按照顺序
  - 一行行挨排解释执行的
  - 我们可以 `pdb3 hello.py` 来对程序调试
- 顺序执行
	- 程序在文本中从上到下是一行行写的
	- 解释器是从上到下是一行行解释的
	- 调试也是从头到尾一行行执行的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220825-1661397382365)

- 但是这一行行的是在有点慢啊
- 毕竟我们都是经历过万行代码的人了
- 那得按10000次的n才能执行完啊？
- 有快点的方法吗？🤔
- 我们下次再说！👋
