---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 类型

## 回忆

- 上节 实验内容 比较`杂`
	- 类型转化
	- 进制转化
	- 捕获异常
	- 版本控制
	- 生成帮助文档
	- 变量的常用类型

- 数据类型主要研究了两个
	- 字符串  str
	- 整型数字 int
	- 彼此可以相互转化的
- 加法运算逻辑 
	- 会根据操作变量的不同 而不同
		- 整型变量的加法 是真的加
		- 字符串的加法 是字符串拼接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727598195374)

- 除了这两种类型之外
	- python还有什么样的数据类型呢？？？🤔

### 分类

- 首先得明确

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727598527744)

-	什么 是 `类型`呢？

### 分类

- 比如 超市里
	- 商品 需要分类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699882427666)

- 超市的产品 是 分好类型的
	- 粮油区 放 粮油类产品
	- 杂粮区 放 杂粮类产品
	- 糖果区 放 糖果类产品
- 具体到 某个区域

### 水果区

- 水果区放各种水果
	- 香蕉区 放 香蕉类(banana class)
	- 苹果区 放 苹果类(apple class)
	- 橘子区 放 橘子类(orange class)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699882700184)

- 那具体的某个橘子
	- 和橘子类 是什么关系呢？

### 具体的橘子

- 具体的橘子
	- 是橘子类(orange class)的
		- 一个实例对象
		- instance object

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699882805202)

- 另一个具体的橘子
	- 也是橘子类(orange class)的
		- 另一个实例对象 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716470725968)

### 汽车

- 汽车
	- 是一个抽象的
		- 类型 
		- class

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699884181668)

- 具体的汽车
	- 是隶属于汽车类(car class)的
	- 一个实例对象 汽车乙

### class

- python如何理解class呢？
	- https://docs.python.org/3/faq/programming.html#what-is-a-class

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701522597563)

- 来看看整型类变量

### 整型类

- int 
	- 就是 整数类型
	- class int

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701177495285)

- i、j是int类的 实例对象

```
help(int)
```

- class int  的帮助手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701177609367)

- 再来看看字符串

### 字符串

- str 就是
	- 字符串类型
	- class str

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701177974559)

- s1、s2是str类的 
	- 实例对象
	- instance object

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716471610393)

- str 是另一种类型
	- 不同于 int

### 查询帮助

```
help(str)
```

- class str 的 帮助手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701178038693)

- 我们来看一个新的类型

### 中括号

- 一对中括号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701178141391)

- 属于 class list
- class list 该如何理解呢？

### help(list)

- help(list)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668479343917)

- list 是一个抽象的类型
	- built-in mutable sequence

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231129-1701263995342)

- 内建可修改的序列

### 排队

- 序列
	- 有顺序的排列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659704520417)

- 有前有后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630118329745)

- 一个一个来

### 空列表

- 观察定义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230321-1679391118484)

- 如果没有给list参数
	- 那么这就是一个空列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230321-1679391155427)

- 如果我直接写
	- l = [ ]
- 会如何呢？ 

### 直接赋值

- [ ]好像也可以
	- 直接得到一个空列表
	- 并赋给l

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668481796520)

- 列表可以不为空吗？

### 非空列表

- 将字符串用逗号隔开
	- 放到中括号里面
	- 可以得到列表类对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701521736343)

- 这列表类型 和
	- 之前的整数类型、字符串类型
	- 有什么不同吗？

### 数字变量

- 先看变量赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210829-1630209240049)

- 数字变量
	- 也都能在帧栈空间上看见
	- 这些变量在帧栈空间上都有自己的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220903-1662158557838)

- 那么列表 list 变量呢？

### 列表变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220903-1662163960956)

- 可以看到 l 变量在栈帧上有一个位置
	- 或者说l 在 globals() 里面
	- 全局可见

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220706-1657092248699)

- 注意那条带箭头的线
	-  global frame 中 可见的 l
	-  l在帧栈上的位置尾号0536
	-  指向一个堆空间中 list对象
- 帧上只能看见 l 
	- 但无法访问 列表中的具体元素 刘关张
	- 只能通过l[0]这种下标索引的方式来访问到l[0]
	- 得到l[0] 里面存着一个str 对象
	- 值为"刘备"

### 总结🤔

- 这次理解了 
	- 类 与 对象
- 类 class
	- 是 抽象的类型
- 具体的变量
	- 是 某个类的 
		- 实例对象
		- instance object

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701179696336)

- l 是列表类的实例对象
	- 可以向l中追加列表项吗？
- 下次再说 👋
