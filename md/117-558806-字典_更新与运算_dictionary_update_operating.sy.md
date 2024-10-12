---
show: step
version: 1.0
enable_checker: true
---

# 字典类型

## 回忆

- 上次学习了字典dictionary的词根
	- dict 说
	- diction 词汇选择
	- dictionary 和词汇选择相关的


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240202-1706837510237)

- 字典可以运算么？🤔

### 查询文档

- 我想手动给字典添加键值对(key-value pair)
	- 可以么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661863573759)

- 有个update
	- 可以用一本字典更新另一本


### 字典更新

- 字典的合并使用 update
	- 两本字典放在一起
	- 合成一本字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631608478627)

- 这个函数名字是 update
  - 就和集合的update是一样的
  - 集合的update就是
	- 先求并集
	- 再赋值
- 但是如果两个字典对于同一个 key = a 的值不一致
  - 会如何呢

### 字典更新

- 试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631608534953)

- 以后面的为准
	- 用d2更新d1么
- 相当于
	- d1["a"] = 2
	- 一个key只能有一个值
	- 所以这个字典项被更新了
	- 毕竟update就是更新的意思
- 这其实也就是可以让字典添加元素了
- 还有其他方法么？

### 快速写法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661863724891)

- 直接更新
	- 这和update有什么不同么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661863791017)

- update把更新后的字典赋给调用他的的d1对象
	- 这个时候d1改变了
- 而merge_dict = {**d1, **d2}是返回一个值
	- 结果交给新字典merge_dict
	- d1、d2都没有改变

### 添加

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631608626758)

- 这个dict(b=2)
	- 究竟是什么呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663544814817)

- dict(b = 2) 是一个字典

### 直接设置字典项

- 甚至可以把构造函数dict()省略

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663545049745)
 

- 调用了函数update

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220801-1659325345342)

- 把key的元组中加上'z'
- d1["z"]的值设置为4
- 除了 update
	- 还有一个 setdefault 命令
	- 也可以添加字典项

### setdefault

- 设置默认值怎么理解呢
	- 查看帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631609246349)

- 试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663545287800)

- 设置默认值首先是设置
- 那怎么理解默认呢？

### 默认 default

- 如果以前没有设置过这个key的默认值
	- 设置这个key的默认值
		- 就插入这个字典项
	- 并返回这个默认值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631609226776)


- 如果以前这个 key 设置过默认值的话
	- 再想设置新的默认值是不行的
	- 就返回原来的默认值
- 设置默认值之后不能再设置默认值(setdefault)
- 那我就想更新怎么办呢？

### 赋值

- 有两种方式可以直接更新字典的
	- update
	- =赋值
	- 这两种都是强制设置字典项

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220706-1657094255127)

- 这和setdefault不同
	- setdefault是试着设置字典项
- 那有没有试着获取呢？

### 问题

- 我们用传统的dict[key]获取

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661860499424)

- 如果我们用传统方法
	- 就会出现KeyError😱
- 去查文档

### 查询

- help(dict)
	- 查询dict帮助手册
- /get
	- 查询手册中的get
- <kbd>n</kbd>
	- 下一个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661860416357)

- 有这个字典项
	- 返回相应的值
- 没有的话
	- 返回default的值
	- default 默认值为None

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220920-1663641456898)

- default参数如何理解？

### default

- setdefault是试着设置字典项
- get是试着返回字典项
- 都是试着来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220920-1663641549832)
 
- 返回不了就返回默认值default
	- default参数为默认返回值
- 下面交给你一个例子

### 武将排名

- 1吕2赵3典韦

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220706-1657095124010)

- 需要添加
	- 4关5马6张飞

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661859872889)

- 如果我想把马超和张飞位置互换应该如何？
- 这个排名使用字典或者列表
	- 各自优劣是什么？
- 最后我们总结一下

### 新单词总结

- dictionary 字典
- key 键
- value 值
- item 项
- mapping 映射

### 总结

- 这次学习了字典
- 字典可以更新
	- update
	- {**d1,**d2}
- 可以试着来
	- 试着设置字典项
		- setdefault
	- 试着获取字典项
		- get
  - 字典还可以直接赋值
- 字典
	- 本质上是键值对的集合
- 还是总结一下各种容器吧😱
- 这还真是一个大总结呢😱
- 下次再说！👋
