---
show: step
version: 1.0
enable_checker: true
---

# 函数

## 回忆

- 上次重新定义 了 函数sorry
	- 通过输出 明确程序执行过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680919161710)

- 调试的时候
	- 还有哪些命令呢？？🤔


### step

- 当播放头运行到函数调用的这一句的时候
	- 按下step或者s
	- 意思是步进

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658671653104)

- s 和 n
	- 只有在当前行有函数的时候才不一样
	- s 是
		- step into 
		- 步进 
		- 进入函数
	- n 是
		- step over
		- 步过
		- 跳过函数

- step into
	- 进入了被调用的函数当中
	- 一步步调试执行
	- 那怎么知道我究竟在哪呢？

### 查询命令

- bt和w(here) 都对应着`print_stack_trace`
	- w(here) 查询当前播放头所在位置
		- w可以告诉我，我在哪！！！
	- bt的意思是bottom 看的也是当前位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658671886609)

### 调用栈

- PrintStackTrace
	- 输出调用栈信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658672062630)

- 这个就是函数堆栈的样子
- 是一层层调用的关系
- 怎么理解呢？

### 堆栈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658672255596)

- 这个堆栈总共分成四层(红、绿、蓝、紫)
- 堆栈的顶在红色部分
	- 都是我不好
	- 是sorry函数中第4行
	- 谁调用的sorry函数呢？
- sorry.py中的第8行(绿色部分)
	- 调用了sorry函数
	- 谁调用的sorry.py呢？
- exec(cmd,globals,locals)(蓝色部分)
	- 调用了sorry.py
	- 谁调用了exec函数呢？
- pdb.py(580行)的run函数(紫色部分)
	- 是在堆栈(Stack)最底下
- 函数就是这样层层调用的
	- step进去后可以进函数内部调试
	- 出了错也是一层层地找到位置
- 比如
	- 我们打开一个不存在的文件的时候

### 出错提示

- 明明只出了一个错误
	- 为什么给我这么多行提示？
	- 因为报错输出了跟踪(Traceback)的过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220801-1659320262122)

- 错误发生在一个我们自己写的open函数调用的位置
	- 是open函数的层层调用时候执行的一句
	- 离我们对于open函数的调用很远
	- 要一层层地跟踪(Traceback)
	- 找到我们代码的错误位置和类型
- 调试的时候可以跳出函数么？

### 查询帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658672918917)

- r和return就是返回
	- 跳出当前函数
	- 返回到调用他的那一层
- 试试

### 跳出函数return

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658673097928)

- 红圈里面的r直接跳出函数
	- r代表return
	- 把345句都执行完了
	- 然后返回到第9句的位置
	- 第9句跳出后返回到调用这个sorry.py的位置
- 这样就可以
	- 深入函数
	- 跳出函数了

## 总结 

- 这次我们调试了自己定义的函数sorry
- 调试有这样一些命令
	- step
		- 步进到函数里面
			- 和 next步过 不同
			- 和 continue继续到下个断点 也不同
		- 跳入当前行所在函数
	- return 
		- 跳出当前函数回到调用的位置
	- where 
		- 告诉我现在执行到了哪里
		- 当前播放头的程序栈位置
- 有了这样一些命令
- 我们就可以更好地调试python程序了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220725-1658716072367)

- 我们生活中也会遇到这些套路吗？🤔
- 我们下次再说！👋
