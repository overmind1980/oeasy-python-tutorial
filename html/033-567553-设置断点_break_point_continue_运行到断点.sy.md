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

- 但是这样 在debug的时候
	- 看不到 断点breakpoint 位置
- 可以 在调试过程中
	- `动态地设置` 或者 `取消`断点吗？🤔

### 恢复环境

- 我们要把一行行执行的代码
	- 变成一段段执行的代码
- 如果 上次运行的 guido.py 没有了
	- 就复制 下面这个
		- 然后放到网上系统的剪贴板上

```python3
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
			- 运行 % 当前文件 
- 就像 :w|!python3 %
	- 保存并运行 
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
	- 如何快速跳转

### 快速跳转

- unt(il)
	- 跳转到某行
- c(ont(inue))
	- 一直向前
	- 直到遇到断点
		- breakpoint 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231031-1698728389569)

- 如何动态 打断点 呢？

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
- 回忆上次的命令
	- `continue`
- continue 可以缩写为
	- cont
	- c

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663316971884)

- 真的可以
	- 让 流程快速流转 到 `断点` 吗？
- continue一下

### continue

- continue 本该
	- 直接流到 程序结尾
- 但是第5行 
	- 有断点
- continue 让程序
	- 直接流到 断点处

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663317086358)

- 为什么流程
	- 不往下 `继续`流 了呢？

### 断(break)点(point)

- 因为`断点` 
	- 就是 `截`断流程的`点`
	- 流程流到这里 必须`断`开 的 点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663318588293)

- 断点 就像 一个阀门(valve) [vælv]
	- 会让水流停止
- 如果 流到断点 后
	- 我想让 流程继续(continue)向下流
- 该如何呢？🤔

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
	- 还是会 一直流到 断点
- 只要 断点存在
	 - continue 就会 流到断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663318731454)

- 遇到断点 
	- 必须要 停下来
- 能否 取消断点 呢？
- 求助一下help帮助

### clear

- clear 清除 断点
	- cl 是clear的缩写

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663318874663)

- 有`两`种清除方法
	 - clear 文件名:行号
	 - clear 断点编号
- 要删除哪些断点呢？

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

- 被调试程序(debug) 可能非常大
	- 可能 有 万行😏
- 想要 找到程序中的问题
	- 一步一步next 太慢

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663320209428)

- 所以 只有通过断点
	- 才能 直接跳到 某个位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685514206613)

- 就像排除线路故障
	- 需要 在中间位置 建立观测点
	- 尽快对bug定位 


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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613775864374)

- 话说回来 
	- 最早那只 活的`bug`🪰
	- 是`谁`找出来的 呢？🤔
- 我们下次再说！👋