---
show: step
version: 1.0
enable_checker: true
---

# 可迭代 iterable 对象

## 回忆

- 这次主要了解的是 for 循环语句
- for 循环可以遍历
  - range 对象
  - list 列表对象
  - tuple 元组对象
  - 只要是 iterable 的对象就可以
- 如果我要求列表不能重复插入可以么？🤔

### 编程

- 直接的想法是靠 if 判断
- 如果插入的元素 in 列表 list 就不插入
- 如果 not in 就插入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633584769822)

- 当然也能用别的容器来实现
- 回忆一下，哪个容器要求不可重复

### set 集合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633585415393)

- 集合元素是可以去除重复的
- 集合元素是可迭代的么？

### 集合元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633585454914)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633585465308)

- 集合元素是可迭代的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233828/uid1190679-20241108-1731027710482) 

- 集合元素是不可重复的
	- 所以没不能改变
- 试试插一个不在集合中的元素

### 集合的特性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633585746299)

- 集合 确实 有无序性
- 容器 可以划分
	- 有序、无序
	- 可变、不可变

### 四个象限

- 其实列表、元组、集合可以从有序性和可变性来划分出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633586983263)

- 这个四个象限分别是什么类的对象？

### 转化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633587153607)

- 列表可以转化为集合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633587172725)

- 集合可以转化为列表
- 列表是有序的，但如果我想让他按照大小排序呢？

### 排序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633587279694)

- 可以用列表类的 sort 方法进行排序
- 但是如果我想要的是逆序呢？
- 从大到小

### 逆序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633587405787)

- 可以调用列表类的 reverse 方法
- 这样就从大到小了
- 可是这也改变了列表本身的次序
- 我希望能够不改变列表本身的次序
- 可能么？

### sorted 方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633587563670)

- sorted 方法不会改变列表 l 本身的次序
- 只是返回一个排好序的新列表
- 这怎么理解呢？

### sorted 细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633588024912)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633587996529)

- sorted 还可以加上 key
- key 这个参数是什么意思？

### key

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633690115841)

- 小写后的字符串大小排序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633690122833)

- 根据字符串长度排序
- 如果列表项是一个容器呢？

### 选择排序依据

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633690651209)

- 按第一项排序和按第二项排序
- 结果完全不同
- 如果列表项是字典呢？

### 按照 key 来排序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633691436908)

- 其实和列表、元组一样
- 只不过列表元组索引的是数字
- 字典里索引的是字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633691528875)

- 那我们可以返回一个逆序的新列表么？

### reversed 方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633588100361)

- reverse 看起来返回一个迭代器 iterator
- 我们要的是排好逆序
  - 第一步排序
  - 第二部逆向
  - 第三部转化为列表
- 这些都不会影响列表 l 本身的排序
- 我们来看看帮助

### reversed 细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633588278293)

- reversed 是一个类
- 返回一个可迭代的对象
- 这个可迭代的对象可以被转化为列表
- 我们可以再分一下象限

### 比较

| 表               | sort         | reverse      | sorted   | reversed       |
| ---------------- | ------------ | ------------ | -------- | -------------- |
| 所属             | 列表成员函数 | 列表成员函数 | 内建函数 | 内建的类       |
| 是否会影响原列表 | 会           | 会           | 不会     | 不会           |
| 返回类型         | None         | None         | 新列表   | 新可迭代类对象 |
| 排序方式         | 正序         | 逆序         | 正序     | 逆序           |

- 正序和逆序都属于排序
- 其实最好用的还是 sorted
- 因为 sorted 可以有一个 reverse 的参数
- 此外还有个乱序

### 乱序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633588847741)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211007-1633588856143)

### 总结

- 这次用 for 遍历了 set 集合
- set 集合的特点
  - 不可重复
  - 无序的
- list 是有序的，可以
  - 排序
  - 逆序
  - 乱序
- 那为什么他们还可以相互转化呢？
  - 因为他们都是 iterable 的对象
- 还有什么是可迭代 iterable 的对象呢？🤔
- 下次再说 👋
