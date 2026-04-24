---
show: step
version: 1.0
enable_checker: true
---

# 函数

## 回忆

- 上次我们分析了函数中参数赋值的过程
	- 在调用参数的时候
	- 完成了一个赋值的过程
	- 是把实参(arguement)赋给形参(parameter)的过程
	- 赋值还是比较麻烦的
- 我想直接在函数里面使用my_temp
	- 可以么？

### 在函数中访问主程序变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660915555001)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660915573927)

- 运行结果是这样的
- 说明在test函数中
- 可以看得到形参 `para_temp` 接收到实参 `global_temp` 的值
	- 可以访问到`para_temp`这个变量
- 但如果反过来呢？
	- 在主程序中访问子函数的形参可以么？

### 在主程序中访问函数形参

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660915707006)

- 出现了NameError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660915720448)

- 也就是说子函数里面的形式参数
- 主程序在外面
- 访问不了
- 如果是子函数里面定义的变量呢？

### 在主程序中访问函数本地变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660915788669)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660915799465)

- 这其实就把整个程序分成两块
	- 主程序部分
	- 子函数部分

### 两部分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660915876601)

- 红框中的是test函数部分
- 绿框中的是主程序部分
- 变量的可见性如何呢？

### 可见性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660916291076)

- 直行到第6行的时候
	- global_temp在本地变量字典locals()中可以找到
	- global_temp在全局变量字典globals()中也可以找到
	- 什么是本地变量、什么又是全局变量呢?



### 名字空间

- 这就涉及到名字空间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220726-1658833351878)

- 我们为什么能够随便使用print函数呢？
- 因为print是个内建的函数
- 内建就是python里面自己就有的
- 首先我们看看builtins和global的关系

### global和builtins

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220726-1658834272888)

- 总共三个层次
	- `local` 函数内部的
	- `global`是模块全局的dict
	- `__builtins__`是内建的dict
- 内建的一定是全局可见度的
	- 比如print、int、str等内建函数
- 模块全局的不一定是内建的
	- 比如我们自己建立的模块内部的变量
	- 别的模块就不能直接用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660916558295)

- 那些是全局但不是内建的呢？

### 纯全局

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660916634202)

- 具体是什么值呢？
- 这是两个global的变量
	- 一个是float型
	- 另一个是函数类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660916679454)

- 都是全局可见

### 全局变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660916772505)

- 这两个全局变量
	- test是全局的函数的名字
	- my_temp是全局的变量的名字
- 先把这两个变量的名字都加上global的前缀

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660916981100)

- 那locals怎么理解呢？

### locals()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660917217577)

- 在主程序中(绿色部分)
- locals()和globals()是相同的字典
- 在test子函数中又如何呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660917363103)

- 首先要step进入函数

### 子函数中(红色部分)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660917371933)

- 在子函数中的时候
	- 全局(global)变量和主程序一样的
	- 还是可以看到global的函数名和变量名
	- 函数内部可以看见局部(locals)变量

- 在函数内部确实可以看到与主程序不同的局部变量
	- para_temp 作为形参(parameter)可见
	- local_temp 作为内部定义的局部(local)变量可见


- 我们总结一下变量的可见性

### 可见性总结

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220819-1660917947951)

- test函数(红色范围)
	- 全局变量和函数内部参数都可见
	- 函数内部定义局部(local)变量，定义后可见
- 主程序中除了test函数定义的代码(黄色范围)
	- 只有全局变量可见
	- 包括全局的函数和变量
	- 函数内部变量和形参不可见


### 总结
- 我们变量的作用域(scope)有两种
	- 主程序定义的是全局变量(global)
		- 全局变量全局可见
		- 全局变量在子函数中也可见
		- 全局变量可见性的作用域是主程序从头到尾包括子函数内部
	- 子函数定义的是形式参数(parameter)、局部变量(local)
		- 这两种变量在子函数内部可见
		- 而在主程序中不可见
		- 局部变量的可见性的作用域是子函数内部
- 但是如果子函数局部变量和主程序中的全局变量同名
- 会发生什么呢？🤔
- 我们下次再说👋

