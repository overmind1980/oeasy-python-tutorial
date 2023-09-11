---
show: step
version: 1.0
enable_checker: true
---

# 输出时间

## 回忆上次内容

- 通过 搜索
	- 学会 `import` 导入 `time` 了
- 当前时间 完整写法为
  - asc_time = time.asctime( time.localtime( time.time()))
  - 体会到 第一次跑出时间的成就感 了吗？
  - 自己手打出来的啊！😁😁😁

- 内部函数是在`__builtins__`这个包里面的自带的
  - 比如 quit()
  - 这就是 前面遗漏的函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221007-1665146302633)

- 这一大长串的函数
	- 究竟应该 如何理解呢？？🤔

### 复习代码

```python
import time
ascii_time = time.asctime( time.localtime( time.time()))
print (ascii_time)
```

- 首先要分清
	- 函数
	- 参数
- 就像要 分清
	- 工艺
	- 原料

### 原料与产品

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221010-1665379308104)

- 模型车间
	- 原料 是 木材
	- 工艺 是将木材 制作为木头模型
- 上色车间
	- 原料 是 木头模型
	- 工艺 是给木块 上色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665475725532)

- 本车间的产品 是 下一个车间的原料
	- 函数的嵌套 也是如此
	- 本函数的返回值 是 外部函数的参数

### 嵌套的函数

- 这长串东西 是 有规律的
	- 首先 什么是 time

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664114987198)

- time 是一个module(包)
	- 这个包里面 有些什么呢？

### time包中

- dir(time)
  - 这里面有time.time吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664115145674)

- 确实有的

### 翻到 最后

- 可以找到 time.time函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221010-1665379024417)

- 除了time.time()
	- 还可以 找到
		- time.localtime()
		- time.asctime()
- 这3个都是 time包里面的函数
- 可以只看 time.time的帮助吗?

### 具体函数 帮助手册

- help(time.time)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210813-1628837673343)

- 例子是 一行写成的
	-  ascii_time = time.asctime(time.localtime(time.time()))
- 函数是 一层层嵌套的
	- 可以分拆成 几行吗？

### 分开写

- time.time这个函数 不接受参数
	- 返回的是 一个浮点数

- 原来
	- 只用一行
	- 函数 嵌套调用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647597703048)

- 现在
	- 试试 把函数嵌套调用 拆开
	- 不用 嵌套
		- 分开写
- 一点点 来剖析

### 分步骤的过程

- 函数 嵌套调用
	- 首先通过调用 time.time()函数 
		- 得到了ticks
	- 然后通过调用 localtime(ticks)函数 
		- 得到了local_time
	- 最后通过调用 asctime(localtime) 
		- 得到了ascii_time

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647598144662)

- 这分步的过程 就像工厂车间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665475725532)

- 那么 这些函数
	- time
	- localtime
	- asctime
	- 都是什么意思
- 分别help一下

### <span style="color:red">time</span>.<span style="color:green">time()</span>

- help(time.time)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210813-1628837778251)

- 这里有两个time有点乱
- 我们区分一下颜色
	- 前面的是红色的 <span style="color:red">time</span>
	- 后面的是绿色的 <span style="color:green">time()</span>
- <span style="color:red">time</span>.<span style="color:green">time()</span>
  - 红色的是 <span style="color:red">time</span> 这个包(module)
  -  <span style="color:red">time</span> 包(module)里面有很多函数(function)
  - 圆括号说明绿色的 <span style="color:green">time()</span> 是函数
  - 红色绿色之间的<kbd>.</kbd>的意思是 **里面的**
  - 从<span style="color:red">time</span> 包里调用 <kbd>.</kbd>(**里面的**) <span style="color:green">time()</span> 这个函数(function)
  - 这个 <span style="color:green">time()</span> 函数 就是  <span style="color:red">time</span> 包 **里面** 的函数
- 那么 这个<span style="color:red">time</span>.<span style="color:green">time()</span>到底返回什么值 呢？

### 调用

- 调用一下<span style="color:red">time</span>.<span style="color:green">time()</span>看看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210813-1628837973195)

- 这一串长长的数字应该如何理解？

## 总结

- time 是一个 `module`
	- ascii_time = time.asctime( time.localtime( time.time()))
	- 这一长句 可以 变成一些短句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647598144662)

- 这分步的过程 
	- 就像工厂车间
	- 按部就班
- <span style="color:red">time</span>.<span style="color:green">time()</span>到底返回值 是什么意思呢？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647599035064)

- 我们下次再说！👋
