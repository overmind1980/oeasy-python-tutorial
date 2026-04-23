---
show: step
version: 1.0
enable_checker: true
---

#  until_直接跳转到_unt_breakpoint_断点函数 🥋

## 回忆上次内容

- [配套视频](ttps://www.bilibili.com/video/BV1AS421d7MH)
- 上次 了解到 
	- 计算机早期操作员 多是女性
	- 她们最早发明了 bug🕷 这个概念

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231031-1698745117237)

- 到现在也没有遇到一个bug
	- 如何才能让程序里面有bug 呢？

### 故意改错

- 如果程序真的出了错误
	- 调试的时候会发生什么呢？

```
vi guido.py
```

- 把第2行 故意改错


```python3
print("1982------Guido in cwi")
pront("1995------Guido in cnri")
print("2000------Guido in beopen")
print("2005------Guido in google")
print("2012------Guido in dropbox")
print("2020------Guido in microsoft")
```

### 先直接运行

- 如果是python3 guido.py
	- 会报NameError 
		- 之后直接退回shell

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685494464538)

- 犯罪现场的各个变量的值
	- 都无法取得
	- 只是知道 这个报错结果
- 再进入 调试程序

### 调试程序

- 运行到第二行的时候
	- 系统报了错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677247189136)

- 发现错误
	- 是好事
	- 不是 我们无能的证明
	- 而是 努力的见证
	- 更是 进步的阶梯
- 我们就知道了
	- 错误的位置
	- 错误的类型
- 甚至可以观察
	- 当时的现场的状态

### 观察犯罪现场 

- 在错误发生的现场
	- 观察当时环境中的变量和状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685512930088)

- 可以在环境中观察
	- print
	- pront

- 一步步地 把bug找出来
	- 就像 把`凶手` 找出来 一样！

### 最真实的解谜游戏

- debug是 我见过最真实的 解谜游戏 了
	- 比 剧本杀 好玩多了
		- 一步步地分析

- 找不到凶手的 时候
	- 需要冷静地分析

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220722-1658495439185)

- 找到凶手的 时候
	- 那种快乐太真实了！！！

### 改回正确

- 回到vim
	- 并且 修改了
	- 第二行pront的错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230224-1677246023019)

- 但这一行行执行 
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
	- 可以直接运行到第5行
- 如果有问题
	- 就会爆出来
- 如果没有问题
	- 就等待后续
		- next 
		- until

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680953047525)

- 这样可以
	- 快速捋到犯罪现场
	- 找到出bug时的状态

- 除了 until之外
	- 还有什么命令
	- 可以 让流程 更快速地 流动吗？

### continue

- 快速流动这个命令叫做 `continue`
- continue 可以缩写为
	- cont
	- c

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663316971884)

- continue就是一路向前
	- 直到 最后一行 
	- 除非 遇到断点
	- breakpoint

### 一路向前

- 由于没有断点
	- continue 会直接
		- 从第一句 执行到 最后一句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685495332967)

- 如何让他在第3句之后停下来呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685513095569)

- q命令退出pdb
- 然后去编辑guido.py

### 指定 断点位置

- 在第四行添加了一个函数
	- breakpoint()
	- 添加一个断点
- 断点的位置
	- 不一定是 有bug的位置
	- 而是 为了找bug而设置的 观测点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680953451536)

- 保存并退出vim
- 重新用pdb3 运行 guido.py
- 再试试 continue  

### 调试过程

- c这一下
	- 执行了三行代码
	- 直接continue 到了断点(breakpoint)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685513338428)

- 断点位置
	- 是写到程序里的

### 再继续

- 再continue一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685513432878)

- 就直接又绕道开头了


### 一个小笑话

- 程序员 在公司写代码
	- 老婆 要他回来
		- 不回来 就离婚
- 结果 他来了句
	- 等我修完这个bug
		- 就跟你离婚

- 全部门的人 都愣住了
	- 领导 让他 赶紧回家
	- 他回复 死也不回家

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230209-1675911173810)

- 妻子 听完后
	- 安心地 挂上了电话
	- 再也没有
		- 比 这个更加 海枯石烂的爱情诺言！

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

- 但是这样 在debug的时候
	- 看不到 断点breakpoint 位置
- 可以 在调试过程中
	- `动态地设置` 或者 `取消`断点吗？🤔
- 我们下次再说！👋
- https://www.bilibili.com/video/BV1AS421d7MH
