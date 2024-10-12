---
show: step
version: 1.0
enable_checker: true
---

# 字典类型

## 回忆

- 上次学习了字典
- 字典是用来查的
  - 根据一个 key
  - 可以查到相应的 value

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671068161732)

- 究竟什么是字典呢?？🤔

###  帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220801-1659323567709)

- 去游乐场玩玩

### 查询字典

- 根据这个 key
	- 就能查到这个 value
	- 所用的运算符是索引运算符[]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630318940523)


- 注意中括号在这里
	- 有点像列表的索引
- 列表是有序的序列
	- 根据序号数字进行索引
		- 通过序号数字找到列表项返回
	- 超出列表范围报IndexError
		- 索引错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671068617061)

- 那字典呢？

### 字典特性

- 字典是键值对的集合
	- 根据唯一的键(key)进行索引
		- 通过键来找到相应的字典项
	- 不存在的列表项报出KeyError
		- 键错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630318940523)

- 根据这个 key
	- 就能查到这个 value
	- 或者说 map 映射到这个 value 上
- 反过来，根据value
	- 就不能查到这个key
- 所以说索引的东西必须是key
	- key很重要！！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630318953375)

### 字典大小

- 字典里面有几个记录呢
	- 用 len 看看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671071490245)

- 有3条字典项
	- 怎么看呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671074044627)

- 依次按下
	- <kbd>d</kbd>
	- <kbd>.</kbd>
	- <kbd>tab</kbd>
- 好像有个函数可以查看
	- 字典的keys

### keys

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671074181420)

- 这好像一个列表
	- 列表里都是可以查的东西

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671074229667)

- 实际上类似于集合
	- 是无序的
	- 可以查看字典里面的keys

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671071420679)

### 遍历keys

- 转化为集合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671074396978)

- 列出keys

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671074338131)

- keys确实可以都列出来
	- 通过key就可以找到相应的value吗？

### 遍历key，根据key找value

- 尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671074508439)

- 确实可以
	- 这就是字典的意义
	- 知道每个单词对应的数字
- 可以直接找所有value吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671074568014)

### 所有的values

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671075641573)

- 确实可以将value全部遍历出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671075674128)

- value可以相同吗？

### value可以相同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671075778964)

- value 是可以相同的
- key 可以相同吗？

### key不可以相同

- 如果相同的话
	- 后面的会更新前面的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671075893811)

- 所以keys()返回的是一个set类型的对象
- set两个特点
	1. 无序
	2. 唯一性
- keys就有这个特点
	- 字典中key是唯一的
	- 字典其实就是key的集合
		- 每个key都有自己的value
- 可以一下子把key和value都查出来吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671076323100)

### items

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671076485067)

- items()返回的是一个集合类的对象
	- 集合中的内容是字典项
	- 字典项是键值对的元组

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671076565435)

- 字典是一个键值对的集合
- 我们去遍历一个真实的字典

### 遍历字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659423823433)

- 是items方法
- 这样我们就可以得到python中的各种默认模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659423882074)

- 可以根据包(module)名来的得到包的相关信息
	- 有的是内置的(built-in)
	- 也有的是对应一个python文件

### 字典(dict)的结构

- list、tuple、dict 和 int、str 一样
	- 都是最最基本的存储变量的数据结构类型
	- 是 python 的基础！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630319745741)

- 本质上来说
  - keys 是一个键的集合
  - values 是一个值的列表
  - 这俩列表是有对应关系的
- 可以通过两个有关系的列表构建字典么？

### 总结

- 这次学习了字典
- 字典是用来查的
  - 根据一个 key
  - 可以查到相应的 value
- 字典项就是 key-value 键值对
- 字典的本质就是键值对的集合
	- set of key-value pair
- 可以将两个序列类变量
	- 比如说两个元组
	- 压缩成一套字典吗？🤔
- 下次再说 👋
