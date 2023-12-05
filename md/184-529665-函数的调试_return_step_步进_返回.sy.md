---
show: step
version: 1.0
enable_checker: true
---

# 函数

## 回忆

- 上次我们 调试了 函数定义和调用
	- 可以使用step 命令 
	- 步进 进入 函数内部
	- 进行调试
- 函数一旦定义好
	- 可以进行多次调用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658670017235)

- 可以在函数里面
	- 做一些输出 
		- 明示 运行流程么？

### 改写

- 我们改写一下代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658670373240)

- 加上输出语句
	- 在调用函数前后
	- 在进入函数时、退出函数前
- 尝试运行

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658670502883)

- 运行过程和你想象的一样么？
- 这个应该怎么理解呢？

### 流程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220725-1658714995625)

- 前面只是定义函数并不执行
- 主程序从第7行往下执行
- 遇到sorry函数调用
- 跳转到第1行
	- sorry函数定义的位置
	- 然后顺序执行sorry函数
	- 执行完成后跳转回调用程序的位置
- 继续第9行
- 然后程序全部执行完毕


- 我们可以debug进去么？

### debug

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658670772201)

- 首先是定义函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220726-1658829676142)

- 一开始没有定义的时候
- 不认sorry函数
- def之后
- 就认了
- 函数究竟是什么？

### 观察

- 函数名也是一个对象的引用
- 是一个function类对象的引用
- 也有相应的地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220726-1658829860031)

- 然后我们继续

### 继续 

- 一路n下去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658670795355)

- 在执行程序的时候
- 把函数作为一个整体
- 没有一步步地调试
- 一次性把sorry()都执行完成了
- 可以进入到函数内部一步步地执行么？

### 设置断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658671022821)

- 但是这个断点好使么？

### 断点效果

- 一路continue到断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658671132144)

- 确实可以进入到sorry函数内部了
- 但是走到第5句之后会如何呢？

### 跳出

- 跳出函数
	- 注意那个return

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658671277368)

- 第一个return是从sorry函数结束后
	- 从sorry函数中return出来
	- 回到主程序
- 第二个return是主程序结束
	- 除此之外，还有什么关于函数跳转的命令么？

### 查看帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658671510376)

- 我们去试试

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

- 这次重新定义 了 函数sorry
	- 通过输出 明确程序执行过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680919161710)

- 调试的时候
	- 还有哪些命令呢？？🤔
- 我们下次再说！👋
