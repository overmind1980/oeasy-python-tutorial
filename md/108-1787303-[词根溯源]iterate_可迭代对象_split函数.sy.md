---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 可迭代对象 - iterable

## 回忆

- 上次我们了解了定点插入
	- 相对原来的追加append
- 排好序之后定点插入很有用
	- 定点插入insert
	- 定点删除pop

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/763909/uid1190679-20250107-1736256466572) 

- 可以在定点切开吗？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1787303/uid1190679-20250107-1736256540629) 

- 有没有什么函数或方法可以实现呢？

### 在提问箱

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1787303/uid1190679-20250112-1736673976008) 

- 得到str.split

### 切分

```
help(str.split)
```

- 含义

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1787303/uid1190679-20250112-1736674058871) 

- 让字符串
	- 调用自身的 split 方法
	- 返回的就是一个 list

### split

```
"oeasy".split("a")
```

- 可以切开
	- 两段 放入列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630125084974)

- 如果有多个位置可以切开呢？

### 多次切开

```
s = "oeasyo2zo3z"
s.split("o")
```

- 效果


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669121319284)

- str.split
	- 可以 把字符串 切成列表
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
	- 读出来的结果是什么类型呢？

### 文件读取

```
with open("oeasy.txt") as f:
    lines = f.readlines()
    print(type(lines))
    print(lines)
```

- 读取出来的类型是
	- 列表
	- list
- 属于是 
	- 一行一行地 
	- 迭代
	- iterate

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1787303/uid1190679-20241023-1729674949175) 

- 字符串可以迭代吗？

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

### 具体应用

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1787303/uid1190679-20250216-1739692528000) 



### 总结

- 这次了解 
	- 通过 可迭代对象 生成 列表
- 字符串序列 s
  - 可以把每个字符 转化 为列表项
- split 切分出 若干 `可迭代`字符串
  - 也 可以 作为 列表项
- `可迭代`对象还包括
	- 文件对象
	- 字符串对象
	- range函数返回结果对象
- 如何 `选择` 列表项呢？🤔
- 下次再说 👋