---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 可迭代对象 - iterable

## 回忆

- 上次了解了eval函数
	- 根据本地和全局的变量
	- 将 source 
	- 衡量 (evaluate)出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231227-1703684635657)

- 如果有一个字符串“oeasy”
	- 能把这个字符串拆分成两个吗？🤔

### 切分

- 让字符串
	- 调用自身的 split 方法
	- 返回的就是一个 list

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630125084974)

- 一般可以用 \n(换行符)
	- 将一个字符串切分成多个行
- 这听起来很像读写文件

### 构造环境

- 首先要
	- 写一个oeasy.txt

```txt
oeasy
o2z
o3z
```

- 写完之后保存并退出


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231227-1703684992028)

- 具体怎么读取这个文件呢？

### 文件

```python
with open("oeasy.txt") as f:
    l = list(f)
    print(type(l))
    print(l)
```

- 保存并运行 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705021405854)

- 为什么文件f、字符串、range函数返回的结果
	- 都可以转化为 列表类型呢？
- 究竟应该如何理解 列表类型 呢？

### 查看说明文档

- 列表是可变的序列

- list构造函数如果没有接收到参数
	- 就构造一个空列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668495496298)

- 如果list构造函数接收到参数
	- 那这个参数必须得是iterable的
- 什么是iterable呢？

### iterate

- iterate
	- 迭代

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701570452880)

- 来自于
	- 反复说某话
	- 反复做某事

### iterative

- iterative
	- 迭代的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701569904613)

### iteration

- iteration
	- 循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701572317259)

- 年复一年

### iterable

- iterable
	- 就是可以循环遍历的东西
	- 叫做可迭代对象
	- iterable object

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701570679803)

- 文件对象里面
	- 有很多行
	- 读出来的结果是一个行的列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668478997139)

### 字符串

- 字符串对象里面有
	- 很多字符
	- 是可以迭代的
	- iterable

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231227-1703685665570)

### range

- range函数返回
	- 很多数字
	- 是可以迭代的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231227-1703685742328)

### split函数

- split函数的返回对象
	- 是 字符串切分后的结果列表
	- 也是可迭代的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231227-1703685822215)


### 总结

- 这次了解了
	- 通过可迭代对象生成列表
- 字符串序列 s
  - 可以把每个字符转化为列表项
  - split 切分出 若干可迭代字符串
  - 作为 列表项
- 可迭代对象还包括
	- 文件对象
	- 字符串对象
	- range函数返回结果对象
- 如何选择每一个列表项呢？🤔
- 下次再说 👋