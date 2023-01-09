---
show: step
version: 1.0
enable_checker: true
---

# 自制包内容

## 回忆上次内容

- 我们上次导入了外部的py文件
	- import xxx
		- 先编译xxx.py成pyc文件
		- 然后导入pyc文件进入pvm执行
	- 可以使用xxx中的变量
		- 不能直接使用xxx.py文件中的变量
		- 要加xxx.作为前缀就可以
- 直接导入导入变量、函数
	- from xxx import yyy
		- 可以导入xxx.yyy并作为yyy变量使用
	- from xxx import yyy as zzz
		- 导入变量并重命名
- 现在
	- 能把我们以前做的苹果香蕉统计程序
	- 封装成文件模块
- 然后再导入么？🤔
- 我们来改造原始的 apple.py

### 建立文件夹

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667052076581)

- 进入文件夹
	- 准备编辑

- 我想要把原来的apple.py拆成立两个py文件
	-  input.py 
		-  负责输入两个数字数字
		-  分别是苹果的数量和香蕉的数量
	-  output.py
		- 负责计算水果总量
		- 并进行输出最终水果总数 
- 那python里面有没有现成的input和output模块呢？	

### 尝试修改

- 别重名了！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220214-1644817997994)

- 看起来没有默认的input和output模块
	-  不怕模块重名了
-  不过input好像是很重要的函数的名字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220214-1644818767055)

- output.py 这个名字可以放心用
- input 这个名字修改为 get_fruits.py

### 拆分文件

- vi -o get_fruits.py output.py
- 进入vim后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667052338279)

- `:windo r ../apple.py`
	- 在两个窗口中都读取
	- ../apple.py
		- 上一层目录之下的apple.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667052388644)

### 编辑

- <kbd>ctrl</kbd>+<kbd>j</kbd>、<kbd>ctrl</kbd>+<kbd>k</kbd>
	- 可以切换当前活动(active)窗口

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667052502424)

- 注意这里是`:wa|!python3 %`
	- `:wa`的意思是`w`rite `a`ll changed buffers
	- 把所有修改了的缓存都存盘
	- 然后再用python3来运行

### 运行结果

- 运行输入部分的环节时
	- 没有问题 
- 运行输出部分的环节时
	- 出错了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667052539345)

- 输入没有问题
- 但是参数a、b
	- 从get_fruits.py到output.py的传递过程
	- 是否有问题？

### 调试程序

- 到底 `a` 是多少呢？
- 输出看看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220520-1653042189982)

- 给正确数据

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667052674349)

- a 根本没有被声明！

### 找到a

- a 不认
	- a 是 getfruit 这个模块(module)里的变量
	- 给a加上namespace
- get_fruits.a 认么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220214-1644819876216)

- 上码
- 再战

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629037305503)

- 这次认了
- 现在需要的就是赋值了

### 最终

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220520-1653042476643)

- 录入数据

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629037417277)

- 成功
	- 我们真的自制了一个输入模块
- 我们为什么要把一个完成的程序拆成两个模块呢？

### 复用性Reusability

- get_fruits.py作为被导入的模块
	- 可以导入统计程序中计算水果总量
	- 也可以导入计价程序中计算水果价格
	- 还可以导入比较程序中比较哪种水果更多

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667092305260)

- 代码可以在不同的模块之间复用
- 我们以前用过什么可复用的代码吗？


### 复用的模块

- 有两个模块我们经常使用
	- time
	- random

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667092402956)

- 我们可以感觉到 python 的可扩展性
	- 从各种 python 程序
	- 到底层的 python 各种辅助模块
	- python 代码复用就是这么容易
	- 这才是打一场人民战争的基础
- 如今我们也写了自己的python模块
- 这两个py文件
	- get_fruits.py
	- output.py
	- 之间是什么关系呢？

### 结构

- 总共两个python文件
	- output.py 是主模块
	- get_fruits.py 是被引用的模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220214-1644820554863)

- 运行output.py主模块的时候
	- 导入了被引用的get_fruits.py
	- 先录入
	- 然后输出
- 如何理解导入呢？
- 英文
	- import 导入
	- export 导出
	- 词根port来源于盎格鲁撒克逊语
	- 也就是英语的前身

### 总结

- 这次把 apple.py 拆分了
- 拆成了输入和输出两部分
  - import 可以导入本地的 python 文件
  - 而且被导入的文件还被变成了看不懂的字节码文件
  - 放在**pycache**里面
  - 看起来像一个缓存
- 使用变量的时候
- 要使用上包名
  - get_fruits.a
  - get_fruits.b
- 最终拆分代码成功
	- import、export来自英语
	- 英语、英国的是如何成为今天这样的呢？🤔
- 下次再说👋🏻
