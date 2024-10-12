---
show: step
version: 1.0
enable_checker: true
---

# 可迭代 iterable 对象

## 回忆

- 上次我们进化了 \33 控制字符串
	- 可以清屏
	- 也可以指定光标位置进行输出
- 在此基础上
- 可以让hello kitty
	- 横向移动
	- 纵向移动
	- 斜着移动
	- 报时移动
	- 随机乱动
- for循环还能干什么？
  - 只要是 iterable 的对象就可以
- iterable 的对象都有什么？🤔

### 容器类型

- 容器类型很多
	- 最常用的就是  列表 (list)

| 类型名称   | 描述      | 是否可变类型 | 是否有顺序 | 举例                         |
| ---------- | --------- | ------------ | ---------- | ---------------------------- |
| 列表       | list      | 是           | 是         | [1,2,3]、["a","b"],list(1,2) |
| 元组       | tuple     | 否           | 是         | (1,2)                        |
| 字符串     | str       | 否           | 是         | "oeasy"                      |
| 字节序列   | bytes     | 否           | 是         | b"oeasy"                     |
| 集合       | set       | 是           | 否         | {1, 2, 3}                    |
| 不可变集合 | frozenset | 否           | 否         | frozenset([1,2,3])           |
| 字典       | dict      | 是           | 否         | {'a':1,'b':2}                |

- 我们从 list 开始

### 观察手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633523705913)

- list 列表可以用可迭代对象当做构造函数的参数
- iterable 的词源是什么呢？

### iterable
- iterable 的意思就是
  - 可以迭代的
  - 可以遍历的
  - 可以循环的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633826870506)

- 怎么判断某类的对象是不是 iterable 的呢？
- 如果类实现了**iter**方法
  - 他的对象是 iterable 的对象

### list

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633523730699)

- list 类实现了**iter**方法
- 所以 list 类对应的对象
- 就是可迭代对象
- 具体用起来

### 遍历列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633523884948)

- 那这个就不能用 while 做么？

### while 与 for 比较

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633523884948)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633524067753)

- while 也能做
  - 但是比较麻烦
- 如果我在循环体中改变列表会发生什么？

### 重新判断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633524393579)

- 循环体会改变列表
- 每次会重新进行判断
- 如果我想让列表不能改变怎么办？
- 命令行的参数本质上也是一个列表
- 我可以遍历这个参数列表么？

### 命令行参数


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644563158564)

```python3
import sys
for element in sys.argv:
    print(element)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644563169806)

- 列表大概就是这样了
- 除了列表之外
- 还有序列类的容器还有元组
- 元组可迭代么？

### 元组

- 元组对象可以迭代么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633526287022)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633526294918)

- 可以迭代

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240820-1724152382497)

- 可以用debug的方式跑一遍么？

### debug

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658646697343)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658646712558)

- 元组能修改么？

### 修改

- 元组和列表都是可迭代对象(iterable)
	- tuple 就是不可变的 list
	- list 就是可变的 tuple

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633526073733)

- 元组对象是不能修改的
- 元组根本没有 append 方法
- 但是 for 循环条件那里是一个可迭代对象啊
- 可以把元组转化为列表再修改么？

### 转化

1. 可以把元组转为列表
2. 列表进行append
3. 把新list转化为tuple

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651797988751)

- 根据这个原理修改源代码

### 替换

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633526493039)

- 元组本身还是不能修改的
- (1,2,3,4)是一个新元组
- 还是不能修改的
- 这不是修改元组
- 而是替换元组

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651798531890)


### 转化

- 元组和列表是可以转化的
- 可变和不可变是可以转化的
- 阴中有阳
- 阳中有阴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633526625846)

- 再来做个实验
- 把所有的cowsay遍历一边


### 重定向

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651801025079)

- 这样确实得到了所有的动物文件
- 尝试输出所有动物

### 输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651802396520)

-  动物名没有问题
-  尝试输出

### 输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651803133732)

- 输出的内容把后面当做了一个整体
- 需要用引号

### 转义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651803199188)

- 命令拼接正确
- 下面准备执行

### 执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651803293492)

- 执行是没有问题的
- 这样我们可以试试
	- 只输出"e"开头的动物	
	- 输出"oeasy"中任意一个开头的动物
	- 输出名字长度是5的动物
- 还可以试试遍历figlet中字体
- 如果遍历的列表是空的怎么办呢？

### 空列表

- 空
	- 可能真的是空的
	- 也可能是不存在的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633522987323)

- 空列表可以用
- 但是不会执行循环体
- 如果是非可迭代的变量
- 就会爆出 TypeError
- 说这个对象不是 iterable 可迭代的

### 总结

- 这次主要了解的是 for 循环语句
- for 循环可以遍历
  - range 对象
  - list 列表对象
  - tuple 元组对象
  - 只要是 iterable 的对象就可以
- 如果我要求列表不能重复插入可以么？🤔
- 下次再说 👋
