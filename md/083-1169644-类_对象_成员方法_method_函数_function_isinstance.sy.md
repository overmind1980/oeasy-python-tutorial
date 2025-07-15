---
show: step
version: 1.0
enable_checker: true
---

# 类_对象_成员方法_method_函数_function_isinstance

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1h5f3YuE4A)
- 上章节 实验内容 比较`杂`
	- 捕获异常
	- 进制转化
	- 变量类型
	- 类型转化

- 变量类型 主要有`两`个
	- 字符串  str
	- 整型数字 int
	- 彼此可以相互转化的

- 加法
	- 会根据 变量类型的不同 而不同
		- 整型的 加 是 `数字求和`
		- 字符串 加 是 `字符串拼接`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727598195374)

- 除了这两种类型之外
	- python还有`啥`数据类型呢？？？🤔

### 分类

- 首先 得 明确

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727598527744)

-	什么 是 `类型` 呢？

### 分类

- 比如 超市里
	- 商品 需要分 `类型`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699882427666)

- 超市的产品 是 分好`类型`的
	- 粮油区 放 粮油`类`产品
	- 杂粮区 放 杂粮`类`产品
	- 玩具区 放 玩具`类`产品
- 具体到 某个区域

### 水果区

- 水果区放各种水果
	- 香蕉区 放 香蕉类(banana class)
	- 苹果区 放 苹果类(apple class)
	- 橘子区 放 橘子类(orange class)
	- 合并 同`类`项

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699882700184)

- 橘子类型 和 这个橘子 
	- 是 `什么`关系 呢？

### 具体的橘子

- 具体的橘子
	- 是橘子类(orange `class`)的
		- 一个实例对象
		- instance `object`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699882805202)

- 另一个具体的橘子
	- 也是橘子类(orange `class`)的
		- 另一个实例对象 
		- instance `object`

### 汽车

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250308-1741405117188) 

- 汽车
	- 是一个抽象的
		- 类型 
		- `class`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699884181668)

- 这辆吉普车
	- 是隶属于汽车类(car `class`)的
	- 一个 实例对象
	- `instance` object

- 先来 看看 python 里面的 
	- 类和对象

### 整型类

```
i = 3 
type(i)
```

- int 
	- 就是 整数类型
	- `class` int
	- int类

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250213-1739408458070) 

- i、 j 
	- 是同类
	- 都是 int类的 实例对象
- int类 是什么意思?

### 喊救命

```
help(int)
```

- int 这个 `class` 的帮助手册

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250213-1739408514846) 

- python如何理解class呢？

### class

- https://docs.python.org/3/faq/programming.html#what-is-a-class

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701522597563)

- 类 是 
	- 一种 特殊的 对象类型
	- 通过 类的语句 描述出来
	- 可以用来产生 实例 
	- 里面封装了 数据和方法
- 怎么判断 对象是否是 int类型呢?

### 询问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250303-1741001588340) 

### isinstance

```
isinstance
```

- 这是个内建的函数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250212-1739363459806) 

- 函数啥意思?

```
help(isinstance)
```

- 返回的是一个判断
	- 对象是否属于某个类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250212-1739363478899)

- 两个参数
	1. `对象`
	2. `类`

### 具体试试

```
isinstance(5,int)
isinstance(6,int)
```

- 这两个 都是int类的 数字 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716470725968)

- "oeasy" 是不是数字呢？

```
isinstance("oeasy", int)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250304-1741052158140)

- 如果 参数 是 整型`变量`呢？

### 变量

```
i = 7
isinstance(7, int)
```

- i这个变量
	- 是int类型的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250212-1739363693096) 

- 这样 基于`对象` 编程的方法
	- 有名字吗?

### 面向对象

- 面向对象编程
	- Object Oriented Programming

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250213-1739408666369) 

- 和 面向过程编程 相对
	- Procedure Oriented

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250303-1741007930823) 

- 除了 int类对象 之外
	- 还有 啥类型的对象?

### 字符串类

- str 就是
	- 字符串类型
	- class str

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701177974559)

- s1、s2是str类的 
	- 实例对象
	- instance object

### 类型明确

- int和str
	- 是两种完全不同的类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716471610393)

- 泾渭分明

- "abc" 是 str类的实例
	- 那这个str本身 是什么类型呢?

### 探究

```
type("abc")
type(str)
```

- 层层追问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250303-1740970063895) 

- str 是 类型 是 类型类
	- 真的很抽象

### 继续追问

```
type(type)
```

-  type是什么类型的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250303-1740970082813) 


- type是 类型的类型 
	- 还是 类型 

### type

```
help(type)
```

- type 应该是一个
	- 元类型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250212-1739364867880) 

- 是整个编程的基础
	- str类 和 int类 具体有啥不同呢？

### 查询帮助

```
help(str)
```

- class str 的 帮助手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701178038693)

- 在str封装了一些方法
	- find
	- index
- 这些方法 int类 对象有吗？

### 尝试

- 结果 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1169644/uid1190679-20250304-1741052482646) 

- index
	- 只有 str类对象 能用
	- int类对象 不能用

### 总结🤔

- 这次理解了 
	- 类 与 对象
- 类 class
	- 是 抽象的 数据类型
- 对象 object
	- 是 某个类的 实例对象
	- instance object
- 不同类型的对象
	- 有不同的运算和方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250304-1741052561296)

- 还有没有 `其他`变量类型呢 ?
- 下次再说 👋
- [配套视频](https://www.bilibili.com/video/BV1h5f3YuE4A)
