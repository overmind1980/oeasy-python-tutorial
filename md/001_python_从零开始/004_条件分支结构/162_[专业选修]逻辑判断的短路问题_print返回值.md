---
show: step
version: 1.0
enable_checker: true
---

# 逻辑判断的短路问题

## 回忆

- 上次学习了 and

> and 是一个逻辑与运算符

- 两个操作数 都是 True 的时候
	- 才返回 True 
	- 其余都返回 False

- 一旦出现 False
	- 就返回逻辑值 False 对应的变量

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203381/uid1190679-20260407-1775534085591) 

- 问题来了
	- 如果 前面 出现了 False
	- 还会 继续判断吗？🤔

### and 的短路

- 如果 先输出

```
print("o") and False
```

- 是可以输出o的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775909254477) 

- 如果上来 就是个False

```
False and print("o")
```

- 左边 是 False
	- and 右边 
	- 右边 直接被屏蔽了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775909225657) 

- 官方文档如何介绍这种屏蔽呢？

### 官方文档

```
help()
BOOLEAN
```

- 蓝框中介绍了 and规则

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775907789378) 

- x and y
	- x 是 False
	- 直接返回 False
	- y 就根本不算了
- 这种 屏蔽规则 叫做 短路

### 短路

- 在有水的时候
	- 电路走的是水滴这条路
	- 灯泡被短路
	- 电池被烧坏
	- 这就是短路

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676448440390)

- and 左边已经是False了
	- 右边就不管了 
	- 直接短路了
- 如果 操作数
	- 不是 布尔类型
	- 而是 数字类型
	- 也会屏蔽吗？

### 数字 and

```
0 and print("o")
```

- 如果 前面有 0 
	- 就直接返回 0
	- 不输出 o

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775909814741) 

- 如果 前面 不是零

```
1 and print("o")
1 and 2
```

- 就要看 后面的
	- 后面是啥 就返回啥

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775910425028) 

- 后面 是零
	- 整体为假
- 后面 不是零
	- 就返回 后面的值

### 数字 and 逻辑

- 逻辑运算的 最终结果
	- 一般还是 用来判断的
	- 布尔类型的
		- 全真为真
		- 有假为假

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632100144120)

- 字符串如何呢？

### 字符串 and

```
bool("")
```

- 空串的 逻辑值 为 False

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775910644213) 

- 如果 左边上来就是 空串的话

```
"" and print("o")
```

- 返回 空串
	- 直接把后面短路

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775910709504) 

- 如果 上来 不是空串

```
"oeasy" and print("o")
```

- 返回 后面的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775910833090) 

- 不过 后面的这个到底是啥呢？

### 观察

```
result = print("o")
type(result)
```

- 观察 print返回值类型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775911048703) 

- 明确 具体值

```
result is None
bool(result)
```

- 确实 是 None
- 布尔值 为 False

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775911094950) 

- 带入 原来的 表达式

```
bool("oeasy" and print("o"))
```

- 最终 返回值 为 False

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775911170020) 

### 字符串规律

- bool判断的依据 是
	- 是否为 空串
	- 空串 则为假
		- 有假为假
		- 全真为真

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775911300229) 

- 如果 上来就是空串
	- 后面就不看了
	- 直接就是假

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775911308843) 

- 如果 上来不是空串
	- 就看后面
	- 后面是啥就是啥

### 核心要点

- 看的就是 字符串 空不空
	- 和 字符串 内容 无关

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775911387835) 

- 如果 想要判断内容
	- 就用 eval 判断

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775911399195) 

- 还有什么数据类型呢？

### 容器 and

- 上来就是 空容器

```
[] and [1]
```

- 直接短路

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775911480811) 

- 上来 不是空容器
	- 就返回 后面的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775911516738) 

- 如果是 
	- 两个`不同`类型的 空容器呢？

### 容器

- 其实返回什么空容器
	- 不是很重要

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632100531738)

- 判断 还是 得看 布尔值
	- 核心在于容器类的布尔值计算

### 观察说法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632100401806)

- 回忆真值
	- 以下 都是 False

| 类别   | 具体内容                     |
|--------|------------------------------|
| 常量   | None、False                  |
| 数字   | 0、0.0、0j、Decimal(0)       |
| 容器   | 空字符串 ''、空元组 ()、空列表 []、空字典 {}、空集合 set() |

###  拒绝猜测

```
not True and False
not (True) and False
```

- 逻辑运算像 四则运算 一样
	- 可以 连续 计算

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775911945725) 

- 上图中 第二种表述 加了括号
	- 逻辑含义 更明确
	- 符合禅意

> In the face of ambiguity, refuse the temptation to guess.

> 面对不明确的 语义时 拒绝猜测

- 可以放心加括号
	- 越明确清晰越好
	- 拒绝猜测

### 总结

- 这次了解了 and 的短路规则
	- 从左到右 进行计算
	- 如果 and左边 是False
		- and右边 被短路

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775913873819) 

- and运算符 可以操作的 变量有
	1. 数字
	2. 字符串
	3. 容器类
	- 零、空串、空容器 在and时
		- 对应 False

- 生活中 有哪些 判断呢？🤔
- 下次再说 👋
