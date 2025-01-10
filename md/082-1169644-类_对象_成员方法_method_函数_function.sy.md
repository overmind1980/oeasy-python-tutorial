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
	- 变量类型

- 变量类型主要研究了`两`个
	- 字符串  str
	- 整型数字 int
	- 彼此可以相互转化的
- 加法运算逻辑 
	- 会根据操作变量的不同 而不同
		- 整型变量的加法 是真的加
		- 字符串的加法 是字符串拼接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727598195374)

- 除了这两种类型之外
	- python还有`啥`数据类型呢？？？🤔

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

- 类 是 
	- 一种 特殊的对象类型
	- 通过 类的语句 描述出来
	- 可以用来产生 实例 
	- 实例 包括 数据和方法
- 先来 看看 
	- 整型类变量
	- int class

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
	- 对应类型 是 list

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701178141391)

- list 该如何理解呢？

### help(list)

- help(list)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668479343917)

- list 是一个抽象的类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231129-1701263995342)

- built-in mutable sequence
	- 内建的 
	- 可修改的
	- 序列

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

- 如果 没有 给list参数
	- 那么 这就是 一个 空列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250106-1736169011952) 

- 将空列表 赋给 一个 变量
	- 这 列表变量
	- 起 `什么`名字 好呢？

### 变量名注意

- pep-8 建议不用
	- 大写O
		- 怕 和0 混淆
	- 大写I，小写l
		- 怕 和1 混淆
	- https://peps.python.org/pep-0008/#prescriptive-naming-conventions

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20241208-1733618692070) 

- 我们使用lst作为变量名

### lst

```
lst = list()
lst
type(lst)
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20241208-1733618828500) 

- 如果我直接写
	- l = [ ]
- 会如何呢？ 

### 直接赋值

- [ ]好像 也可以
	- 直接得到一个空列表
	- 并赋给lst

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20241208-1733618917037) 

- 这两句等价

```
lst = list()
lst = []
```

- 列表 可以 
	- `不`为空吗？

### 非空列表

```
list1 = ['刘备', '关羽','张飞']
list1
type(list1)
```

- 将字符串用逗号隔开
	- 放到中括号里面
	- 可以得到列表类对象

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20241208-1733618993249) 

- 这列表类型 和
	- 之前的整数类型、字符串类型
	- 有什么不同吗？

### 数字变量

- 先看变量赋值
	- https://pythontutor.com/visualize.html#mode=edit

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210829-1630209240049)

- 数字变量
	- 也都能在帧栈空间上看见
	- 这些变量在帧栈空间上都有自己的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220903-1662158557838)

- 那么列表变量  list1 呢？

### 列表变量

```
list1 = ['刘备', '关羽','张飞']
```

- 可以看到 list1 在栈帧上有位置
	- 或者说list1 在 globals() 里面
	- 全局可见


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20241208-1733619076292) 

- 注意那条带箭头的线
	-  global frame 中 可见的 list1
	-  l 在 帧栈上的位置尾号2432
	-  指向 堆空间中 一个列表对象

### 访问

- 栈帧上 
	- 只能看见 list1 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20241208-1733619166024) 

- 但无法 直接
	- 访问 列表中的 具体元素 
	- 三个字符串
		- 刘备
		- 关羽
		- 张飞
- 想要访问怎么办呢？

### 询问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250106-1736169913793) 

```
list1 = ["刘备", "关羽", "张飞"]
liubei = list1[0]  # 获取索引为0的元素，即“刘备”
print(liubei)  # 输出: 刘备
```

- 能通过list1[0]
	- 这种 下标索引的方式
		- 来访问到list1[0]
	- 得到list1[0] 里面 第0个对象
	- 值为"刘备"
- 这索引 之前好像见过？🤔

### 索引方式

- 索引index 
	- 来自于 食指

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231129-1701255108751)

- 可以按照元素的编号
	- 访问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701168701386)

- 注意编号 从零开始 ～

### 总结🤔

- 这次理解了 
	- 类 与 对象
- 类 class
	- 是 抽象的类型
- 具体的 对象
	- 是 某个类的 实例对象
	- instance object

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20241208-1733618917037) 

- lst 是 列表类的实例对象
	- 可以调用什么方法 吗？
- 下次再说 👋
