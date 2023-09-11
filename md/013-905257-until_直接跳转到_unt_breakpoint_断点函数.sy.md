---
show: step
version: 1.0
enable_checker: true
---

# 调试程序 🥊

## 回忆上次内容

- `py文件` 是 按照顺序
  - 一行行 挨排 解释执行的
  - 可以用 `pdb3 hello.py` 
	- 来调试程序
- 顺序执行
	- 程序 在文本中 从上到下 是 
		- 一行行写的
	- 解释器 从上到下 是 
		- 一行行解释的
	- 调试 也是 从上到下
		- 一行行 调试的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220825-1661397382365)

- 这种方式 真的有利于改bug 吗？

### 退出pdb3

- 查询帮助
	- pdb3 的帮助系统
		- 可以实时互动
- 什么不会了
	- 可以直接和pdb3交互
	- 现场就可以给出解释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677246956269)

- q退出pdb3
	- 回到shell

### 故意改错


- 如果程序真的出了错误
	- 调试的时候会发生什么呢？

```
vi guido.py
```

- 把第2行 故意改错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677247078708)

### 先直接运行

- 如果是python3 guido.py
	- 会报错之后 
		- 直接退回shell

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685494464538)

- 犯罪现场的各个变量的值都无法取得
	- 只是知道有这个报错结果
- 再进入调试程序

### 调试程序

- 运行到第二行的时候
	- 系统报了错误
- 发现错误是好事
	- 发现错误 不是 我们无能的证明
	- 发现错误 是 我们进步的阶梯

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677247189136)

- 我们就知道了
	- 错误的位置
	- 错误的类型
- 甚至可以观察
	- 当时的现场的状态

### 观察犯罪现场 

- 在错误发生的现场
	- 观察当时环境中的变量和状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685512930088)

- 但这一行行的 
	- 实在 有点慢啊
- 毕竟 都经历过 万行代码 了
	- 得 按10000次的n 才能执行完 啊？
- 有`快点`的方法吗？🤔
- 可以直接跳到某一行吗？

### until 直接跳到

- 查询 until 的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680952622118)

- 我们去试试

### until 使用

- until 5
	- 可以直接跳到第5行
- 这样
	- 如果有问题
		- 就会爆出来
	- 如果没有问题
		- 就等待后续继续
			- next 
			- until

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680953047525)

- 这样可以
	- 快速找到bug

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
- 除了 until之外
	- 还可以 让流程 更快速地 流动吗？

### continue

- 快速流动这个命令叫做 `continue`
- continue 可以缩写为
	- cont
	- c

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663316971884)

- continue就是一路向前
- 直到遇到断点才停下来

### 一路向前

- 由于没有断点
	- continue 会直接
		- 从第一句直行到最后一句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685495332967)

- 如何让他在第3句之后停下来呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685513095569)

- q命令退出pdb
- 然后去编辑guido.py

### 指定 断点位置

- 在第四行添加了一个函数
	- breakpoint()
- 并且 修改了
	- 第二行pront的错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680953451536)

- 保存并退出vim
- 重新用pdb3 运行 guido.py
- 再试试 continue  

### 调试过程

- 这c的一下
	- 执行了三行代码
	- 直接continue 到了断点(breakpoint)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685513338428)

- 这样就把断点位置
	- 写到程序里了

### 再继续

- 再continue以下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685513432878)

- 就直接又绕道开头了

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
- 我们下次再说！👋
