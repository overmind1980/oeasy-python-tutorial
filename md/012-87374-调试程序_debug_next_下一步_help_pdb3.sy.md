---
show: step
version: 1.0
enable_checker: true
---

# 调试程序 🥊

## 回忆上次内容

- `py` 的程序是 按照顺序执行的
	- 是一行行 挨排解释执行的
    - 程序并不是 数量越多越好

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220705-1656991419814)

- kpi也在 不断演化
	- 写的代码 越多
	- 可能 出现的bug 就越多
- 那什么是`bug`呢？

### 尝试调试

- 想要 调试程序 找bug
	- 首先 得`有`一个程序
		- 有这个`guido.py`
- 如果 上次运行的 guido.py 没有了
	- 就复制 下面这个 

```python
print("1982------Guido in cwi")
print("1995------Guido in cnri")
print("2000------Guido in beopen")
print("2005------Guido in google")
print("2012------Guido in dropbox")
print("2020------Guido in microsoft")
```

- 然后放到网上系统的剪贴板上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220927-1664286061599)

### 准备环境

- 在shell中 键入
	- `vi guido.py `

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677245628962)

- :reg
	- 执行底行命令reg
		- 观察寄存器register的状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677245712607)

- 系统寄存器"*中
	- 存储着程序的源代码

### 粘贴代码

- 回车
	- 从底行命令模式
		- 回到正常模式

- 键入"*
	- 观察窗口底行
		- 出现"*字样
		- 强调 使用系统剪贴板寄存器
			- "*

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677245896699)

- 然后键入p
	- paste 粘贴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677246023019)

- :wq
	- 保存并退出vim
	- 回到shell

### 运行程序

```
python3 guido.py
```

- 原来 是一下子 运行到底
	- 现在可以 逐行 `调试`运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677246074464)

### 调试程序
- 调试的意思是 
	- 一行行地执行 
		- 看有没有错误(bug)

```shell
pdb3 guido.py
```

- 使用`pdb3`来进行调试
  - `pdb`的意思是`p`ython's `d`e`b`ugger

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220825-1661397068105)

- bug 是 虫子
	- 在编程中 指的是错误
-  debug 是 祛除虫子
	- 在编程中 指的是找出错误
	- 逐行进行调试
- 为什么 要`逐行`调试呢？

### 逐步调试

- 由于程序 不知道 哪里出的问题
	- 所以才 `逐步`来执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677246242685)

- `逐步`调试运行的目的 
	- 找到 bug所在的位置
	- 也就是 `debug`
- 我们这就去 `debug`

### help

- 进入 `pdb3 guido.py`后
	- 不知道 怎么办
		- 就要 求助(help)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677246425905)

- help 给了很多的 `命令主题`(topic)
	- 还说 可以`help` 一下具体 `命令主题`
		- 查看哪个`命令主题`呢？

### 具体帮助

- 查看 帮助的帮助

- 没有参数 的 话
	- 显示 `所有`命令
- 有 `一`个参数
	- 显示 `这`个参数的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663313776371)

- h(elp) 的缩写是 h
	- elp可以省略

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677246593209)

- 以上四句
	- 都可以查看
		- help 这个主题命令 
- 这并不难 h h
	- 再看看 其他命令

### list

- l(ist) 
	- 可以列出 上下文11行的程序
	- 缩写是l

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314411013)


### 使用命令

- 当前行前面 有个箭头 ->

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314543612)

- 确实可以 看到上下文
	- ->代表着 当前程序`当前行`的位置
		- 怎么 往下`走` 呢？

### next

- n(ext)
	- 可以 往下走一句
		- 缩写是n

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314715619)

- 试一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314773281)

- 把1982年输出了
	- 然后`当前行`来到了1995年
		- 如何判断 1995年
			- 在 整个程序中的位置 呢？

### 执行

- l(ist)
	- 可以列出 `当前行` 的上下文
		- 找到 当前行的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677246773289)

- 在 第2行 
	- 执行 next 命令
		- 就会 跳转到 第3行
- 当然 也可以
	- `一路next` 下去

### 一路next

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663314933265)

- `一路next`

### 完成调试

- `一路next` 下去
	- python 解释器 就是
		- 这样 一步步地 `解释执行`py程序 的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210924-1632464724387)

- 是`顺序`执行的
	- 一行行 挨排儿执行的
- 我们就一步步地 把bug找出来
	- 像找`凶手`一样！

### 最真实的解谜游戏

- debug是 我见过最真实的 解谜游戏 了
	- 比什么 剧本杀 好玩多了
		- 一步步地分析

- 找不到凶手的 时候
	- 需要冷静地分析
- 找到凶手的 时候
	- 那种快乐太真实了！！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220722-1658495439185)

- 终于来到 最后一行
	- 如果 到这里 再next
		- 会发生什么呢？

### 最后一步

- 执行完 最后一句之后
	- 就会 --return--

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663315251931)

- 这个时候 
	- 已经到了 程序的尽头
	- 再`next` 会发生什么呢？

### 绕圈

- 到头了 就又重来
	- 就会重新执行 这个文件
	- 就`圜道`了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663315397294)

- 可是为什么 把程序错误
	- 叫做 `bug` 🪰 呢？
		- `bug`和虫子(bug) 有`什么`关系呢？

### 第一个错误 bug

- 历史上 第`一`个程序错误 是
	- 这只虫子`bug`🪰 
		- 飞进继电器(relay)计算机(computer)里面 来
		- 导致 当时的继电器 短路

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613775864374)

- 所以 后来
	- 管错误 叫做bug
	- 管调试程序错误 叫做 `debug`

### 如影随形

- 有程序
	- 就会有bug

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230227-1677498037477)

- 如果程序真的出了错误
	- 调试的时候会发生什么呢？

### 退出pdb3

- 查询帮助
	- pdb3 的帮助系统
		- 可以实时互动
- 什么不会了
	- 可以直接和pdb3交互
	- 现场就可以给出某个命令的解释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677246956269)

- q退出pdb3
	- 回到shell

### 观察错误

- 把第2行 故意改错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677247078708)

- 进入调试程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230227-1677498178860)

### 调试程序

- 运行到第二行的时候
	- 系统报了错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677247189136)

- 我们就知道了
	- 错误的位置
	- 错误的类型
- 甚至可以观察
	- 当时的现场

### 观察犯罪现场 

- 如果是python3 guido.py
	- 直接就退回shell

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677247267746)

- pdb3 oeasy.py
	- 可以在错误发生的现场
		- 观察当时环境中的变量和状态

### 一个小笑话

- 程序员在公司写代码
	- 老婆要他回来
	- 不回来就离婚
	- 结果他来了句
	- 等我修完这个bug就跟你离婚

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675911173810)

- 全部门的人都愣住了
	- 领导让他赶紧回家
	- 他说死也不回家

- 女的听完后
	- 安心的挂上了电话
	- 再也没有比这个更加海枯石烂的爱情诺言！


## 总结

- `py文件` 是 按照顺序
  - 一行行 挨排 解释执行的
  - 可以 `pdb3 hello.py` 调试程序
- 顺序执行
	- 程序 在文本中 从上到下 是 
		- 一行行写的
	- 解释器 从上到下 是 
		- 一行行解释的
	- 调试 也是 从头到尾
		- 一行行调试的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220825-1661397382365)

- 但这一行行的 实在 有点慢啊
- 毕竟 都经历过 万行代码 了
	- 那得 按10000次的n 才能执行完 啊？
- 有`快点`的方法吗？🤔
- 我们下次再说！👋
