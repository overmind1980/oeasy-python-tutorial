---
show: step
version: 1.0
enable_checker: true
---

# 设置断点 🥊

## 回忆上次内容

- `py文件` 是 
	- 按照顺序一行行执行的
- 可以通过until命令
	- 直接跳转到某行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680953763730)

- 还可以使用breakpoint()
	- 在程序中 设置断点
	- 然后配合continue
	- 一下子跳到断点位置

- 但是在debug的时候
	- 看不到 断点breakpoint 位置
- 可以在调试过程中
	- 动态设置 或者 取消断点吗？🤔

### 恢复环境

- 我们要把一行行执行的代码
	- 变成一段段执行的代码
- 如果 上次运行的 guido.py 没有了
	- 就复制 下面这个
		- 然后放到网上系统的剪贴板上

```python
print("1982------Guido in cwi")
print("1995------Guido in cnri")
print("2000------Guido in beopen")
print("2005------Guido in google")
print("2012------Guido in dropbox")
print("2020------Guido in microsoft")
```

- 注意其中第4行 
	- 没有breakpoint()
	- 如果有的话需要删除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220927-1664286061599)

- vi guido.py
	- 进入底行命令模式
		-  "+p
			- 从系统剪贴板粘贴  
- 按下<kbd>i</kbd>进入插入模式
	- 调整 工作流 细节

### 编辑、调试一条龙

- 这次 在vim里面 
	- 直接运行pdb3

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663316179521)

- :w|!pdb3 %
	- : 进入底行命令模式
		- w 保存
		- | 并且
		- !pdb3 %
			- 用 外部命令pdb3 
			- 运行 当前文件 %
- 这和 保存并运行 
	- :w|!python3 %
	- 很像
- 连调试带修改 `一条龙` 了

### 回忆命令

- 进入pdb3之后
	- 可以用help查看已经学习的命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230225-1677330779678)

- h(elp)
	- 查询帮助
- q(uit)
	- 退出debug环境
- n(ext)
	- 执行本行
	- 跳转到下一行
- l(ist)
	- 列出当前执行位置
- 一行行执行代码 太慢
- 如何将 代码分段 呢？

### 查询帮助

- 查询帮助
	- 找到 有分段作用的命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230225-1677330953823)

- break在英文中是打断的意思
	- 可以用这个break命令
		- 把代码打成一段段的吗
- 去查查 break的帮助
	- h break

### 设置断点

- break 的缩写 是 b

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663316426529)

- 可以 对于py文件的行号
	- 设置`断点`

### 动手

- 给第5行
	- 添加了一个`断(break)点(point)`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663316737970)

- next 一下
	- 向下执行了一行

- 那怎么 快速让流程 流到断点 呢？
	- 不会了 就查帮助
		- 看看哪个命令好使

### 求助帮助

- 不同于next
	- 一行行地执行
- 回忆起上次的命令
	- `continue`
- continue 可以缩写为
	- cont
	- c

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663316971884)

- 真的可以
	- 让 流程快速流转 到 `断点` 吗？
- continue一下

### continue

- continue 让程序
	- 输出`3`行
	- 直接流到断点
		- 当前行为第5行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663317086358)

- 为什么流程
	- 不往下 `继续`流 了呢？

### 断(break)点(point)

- 因为`断`点 
	- 就是 `截断`流程的点
	- 流程流到这里`必须断` 的 点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663318588293)

- 断点 就像 一个阀门(valve)
- 如果 流到断点 后
	- 我想让 流程继续流(continue)
		- 会如何呢？🤔

### continue 

- 由于 第五行后面`没有`断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663318649919)

- 流程会 一直流到py程序结尾
	- 把 后面两行 都输出完成
	- 然后 重新开始
		- 又 圜道 了
- 如果这个时候 `再`c 呢？

### 流到 断点

- 从头开始后
	- 还是会 流到断点
	- 只要 断点存在
	 - continue 就会到断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663318731454)

- 遇到断点 必须要 停下来
- 能否 取消断点 呢？
- 求助一下help

### clear

- clear 清除 断点
	- cl 是clear的缩写

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663318874663)

- 有`两`种清除方法
	 - clear 文件名:行号
	 - clear 断点编号
- 我们先试试第i种
	- clear 文件名:行号

### 清除断点

- b后面不加参数
	- 可以显示所有断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663319565055)

- clear guido.py:5
	- 清除 guido.py第5行的 断点
	- 清除 之后
- 原来的断点 消失了
- 还有一种 清除断点的方式 是如何的 呢？
	-  clear断点编号

### 清除某个断点

- 再在guido.py第5行
	- 建立 一个断点
		- b 5
		- 这个断点 是2号断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685514048063)

- 1号断点 已经被clear了
	- 现在 断点 从2开始 编号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663319919972)

- clear 2 
	- 可以 清除 这个2号断点
- 断点都清空了
	- q 命令退回到vim
- 为什么 `要有`断点 呢？

### 断点的意义

- 我们想要 找到程序中的问题
	- 被调试程序(debug) 可能非常大
	- 可能 有 万行😏

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663320209428)

- 一步一步next 太慢
	- 所以 只有通过断点
	- 才能 直接跳到 某个位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685514206613)

- 就像排除线路故障
	- 需要 在中间位置 建立观测点

### bug

- 话说回来 
	- 最早那只 活的`bug`🪰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613775864374)

- 是`谁`找出来的 呢？

### 计算之母

- 找到 `bug` 的第一个程序员 是一位女性
	- 名字叫 `Grace Murray Hopper`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210811-1628645970342)


- 和现在 程序员大多是男性不同
	- 当时 程序员大多都是女性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664364729621)

- 因为当时 线缆很容易 变得一团乱麻
	- 程序员的工作 就是检查线路
	- 像 `绣花` 一样

### 编程和编织

- 编程和编织很像
	- 都是`编`
	- 所以 需要很细心、 有条理的人👩🏼‍🦱
	- 毕竟计算机 源自提花织布机

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220927-1664229114586)

- 今天仍能 从男性程序员身上 看到
	- 当初 提花织布机的 影响

### 故障

- 当时格蕾丝和她的同事们 
	- 正艰难地 想要 搞清楚
		- 正在使用的 马克II 
			- 到底 出了`什么`问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210916-1631788883985)

- 最后 发现
	- 一只活蛾 
		- 被困在控制电路的电子开关 中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685514354044)

- 这个问题 就被 
	- 命名为`bug`

### bug

- 不要害怕 `bug`
	- 因为 `bug` 是程序员存在的基础

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685514839103)

- 如果没有了`bug`
	- 那也就不需要程序员了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685514872422)

- 程序员本身就是 `bug` 一般的存在 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230227-1677498225167)

- 让我们再来 debug 一下！🐥
- :w|!pdb3 %

### 设置3个断点

- 这次 要设置 `更多`断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663320478722)

- 1, 3, 6行
	- 各一个断点

### 更多断点

- 断点 可以把万行程序 分几段
	- 从而 分段排查问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663320754424)

- 尝试删除 第2个断点

### 删除第2个断点

- 先 b 列出所有的断点
	- 要删除 2号断点
		- 位于guido.py的第3行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663320815015)

- 删除 成功
	- 还剩 两个断点
		- 断点就是 这样玩的
- 可以依据行号删除断点吗？

### 依据行号删除度断点

- 查看帮助文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685497676889)

- 可以根据行号删除断点
- 现在 可以更快速地 调试了！！😁

## 总结

- 这次 设置了 断点
	- 断点 可以把代码 
		- 切成一段一段的 
		- 可以 更快地调试
  - 调试的目的 是 去除 `bug`
- 别害怕 `bug`
  - 一步步 总能找到 `bug` 
  - 这 就是 程序员基本功
	- 调试 `debug` 
- 这个bug 这个词🕷
	- 是有历史渊源的
	- 就像Hello World 一样
- 为什么写程序
	- `都`从hello world开始？🤔
	- 这里面也有什么历史渊源吗？
- 我们下次再说！👋