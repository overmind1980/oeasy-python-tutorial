---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 可迭代对象 - iterable

## 回忆

- 上次了解了列表生成
	- 列表作为一个序列容器
- 可以通过range函数返回值得到
- 数值序列 range
  - start、stop、step
  - 负数
  - 前闭后开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700915693785)

- 还有其他元素可以转化为列表吗？🤔


### 字符串

- 试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630124739385)

- 直接把字符串当做 list 的参数就可以了
- 每个字符都是一个列表项
- 中文也是一样么？

### 字符串

- 中文字符串也可以被拆分为列表
- 太方便了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231227-1703682635114)

- 那能把 list 转化回 str 么？

### 尝试

- 看起来不行


- 最终 得到了
	- 一个字符串
	- 一个 内容 为列表的 字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630125028365)

- 有 什么办法 能够
	- 将 list("oeasy") 这个 列表
	- 转化回 字符串 吗？🤔

### eval

- eval 
	- 可以把字符串
	- 转化为对应的数据类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669034685309)

- 这次把 将列表转化为的字符串
	- 转化回了列表
- 如何理解 eval函数 呢？

### eval

- help(eval)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701526257688)

- eval函数的参数是 
	- 字符串source
- eval函数
	- 根据本地和全局的变量
	- 将 source 
	- 衡量 (evaluate)出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231227-1703684042259)

- 可以在字符串里面使用函数吗？

### 使用函数

- 尝试使用len函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701526344554)

- 如何理解根据全局和局部变量呢？

### 根据变量

- 根据变量a的值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231227-1703684193923)


### 总结

- 这次了解了eval函数
	- 根据本地和全局的变量
	- 将 source 
	- 衡量 (evaluate)出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231227-1703684635657)

- 如果有一个字符串“oeasy”
	- 能把这个字符串拆分成两个吗？🤔
- 下次再说 👋