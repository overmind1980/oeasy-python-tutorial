---
show: step
version: 1.0
enable_checker: true
---

# global 全局

## 回忆

- 上次了解到函数参数的一些细节
- 全局变量和函数局部变量同名时
	- 在函数内部
	- 局部变量会屏蔽(shadow)全局变量
- 如果想要在函数内部访问重名全局变量
	- 可以把同名局部变量声明为global
- 函数内部声明global的局部变量
	- 不会在函数结束时消失
	- 而是会作为全局变量存在
- 函数内部没有声明global的局部变量
	- 在主程序部分不可见
- 主程序也有变量
- 子函数也有变量
- 应该如何理解呢？🤔

### 简单函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661134641394)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661134666872)

- fun是一个函数(function)类的对象
- 地址在尾号8280的位置
- 那这个对象里面有什么属性呢？

### dir

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661134810182)

- 这里面有些属性好像看得懂
	- `__name__`
	- `__str__`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661134816530)

- 去看看

### 查看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661135017729)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661135023735)

- `__name__` 是函数对象的函数名字
- `__str__` 是函数对象的字符串输出形式
- 还有个 `__globals__` 什么意思

### 全局(globals)变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661135295178)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661135304611)

- 得到的是一个字典
- 我添加一些变量
- 再去观察

### 查看全局变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661135532568)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661135541483)

- 函数的全局变量中确实可以找到global_temp
- 但是局部变量local_temp去哪里找

### 代码对象

- dir(fun)的结果中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661136159176)

- 有个code对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661135157250)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661135164356)

- 代码对象里面有些什么呢？

### 观察

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661136298789)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661136448419)

- 这都什么意思呢？
- 去手册那里搜一下

### 手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661136720506)

- 有一个inspect模块
- 里面有各种属性
- 尝试用导入(import)

### 导入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661137083043)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661137090550)

- 结果是一个列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661137200676)

- 尝试分行输出

### 分行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661137737276)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661137814542)

### 手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661136720506)

- 找到里面和局部(local)变量相关的
- co_nlocals
- co_varnames

### 显示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661138423928)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661138431780)

- 此函数有一个局部变量
- 叫做local_temp
- 如果再来一个局部变量呢？

### 改变

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661138605618)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661138579728)

- 确实跟着改变
- 还可以查看什么呢？

### 字节码和反汇编

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661138909832)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661138917766)

- 这就是这个函数对应的字节码
- 还有通过dis找到的对应的反汇编
- 函数其实是对应着一个code object
- 各种东西都放在这个object里面

### 总结
- 函数(fun)是一个套路
	- 但是落实到代码上是一个对象
	- 这个fun对象里面有个`__code__`对象
	- 这就是code object
- code object里面有这个函数的各种信息
	- 函数名
	- 内部变量数量和元组
	- 字节码
- 既然函数本质上是一个对象
- 那么可以把函数作为实参来传递么？🤔
- 我们下次再说👋

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220827-1661588227276)

