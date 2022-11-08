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
- 字典从汇编的角度如何理解？🤔

### 汇编理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220801-1659323342042)

- 字典的指令是`BUILD_CONST_KEY_MAP`
- 核心是建立映射(map)
	- 建立一个元组('o','z')
	- 到两个常量
		- 1
		- 2
	- 之间的映射
- 字典还可以怎么建立？
- 查查帮助

###  帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220801-1659323567709)

- 试试去

### 本质

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220801-1659323695298)

- 汇编层面一模一样
- 去游乐场玩玩

### 查询字典

- 根据这个 key
	- 就能查到这个 value
	- 所用的运算符是索引运算符[]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630318940523)


- 注意中括号在这里并不是表示列表
  - 而是索引运算符
  - 根据谁索引？
	- 根据这个 key
		- 就能查到这个 value
		- 或者说 map 映射到这个 value
	- 反过来，根据value
		- 就不能查到这个key
	- 所以说索引的东西必须是key
- key很重要

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630318953375)

### 字典大小

- 字典里面有几个记录呢
- 用 len 看看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630319104323)

- 字典里面总共两条记录
- 都有什么索引 keys？
- 都有什么值 values？
- 索引和值都是由列表构成的
- 但这个 keys 和 values 具体是什么类型呢？

### 列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630319195498)

- 字典的键和值都有相应数据类型
- 字典不像序列
  - 用数字来索引
- 但是可以用 key 键来找到值 value
- 当数字索引不好用的时候
  - 就可以使用字典
  - 用字符串来进行索引

### key 的含义

- list、tuple、dict 和 int、str 一样
- 都是最最基本的存储变量的数据结构类型
- 是 python 的基础！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630319745741)

- 本质上来说
  - keys 是一个键的列表
  - values 是一个值的列表
  - 这俩列表是有对应关系的
- 可以通过两个有关系的列表构建字典么？

### 构建

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630319909754)

- 可以把有关列的两个列表
- 压制成一个字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630320024717)

- 确实可以通过两个列表 zip 出一个字典
- 如何理解 zip 呢？

### zip

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631606803665)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631606793297)

- zip 把若干个元组的元素
- 按照所在位置
- 组合成新的元组
- 直到其中某个元组遍历完成
- zip 的结果可以理解为元组的序列
- 可以再构成
  - 序列类的列表、元组等
  - 或者序列类的字典
- 字典 dict 还有其他的构造方法
- 查询手册

### 构造方法

- 这次去 docs.python.org 去查
- 除了用构造函数
- 以下方法都可以
- 而且是等价的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630319375973)

### 动手试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631607410468)

- 可以把列表的列表转化为字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631607489247)

- 可以把元组的元组转化为字典
- 那么 元组的列表 或者 列表的元组呢？

### 手动

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631607708608)

- 元组的列表和列表的元组 都没有问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631607736730)

- 只要满足内层序列元素是二维的映射关系就可以
- 但是如果是3维的就不可以了
- 序列类的列表和元组可以转化为字典
- 字典可以转化回来么？

### 尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631607910268)

- 只能把 keys 或者 values 分别转化为	
	- `dict_keys`、`dict_values`类型的变量
	- 然后再用list、tuple的构造方法转化
- 遍历字典比较快的方法是什么呢？

### 遍历字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659423823433)

- 是items方法
- 这样我们就可以得到python中的各种默认模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659423882074)

- 有的是内置的(built-in)
- 也有的是对应一个python文件
- 我们先去总结一下

### 总结

- 这次学习了字典
- 字典是用来查的
  - 根据一个 key
  - 可以查到相应的 value
- 字典中有很多 key-value 构成的键值对
  - 所有的键可以转化一个可迭代对象
  - 所有的值也可以转化一个可迭代对象
  - 键值对的关系是对应的
  - 键值对能转化为可迭代对象么？
- 字典还可以怎么用呢？🤔
- 下次再说 👋
