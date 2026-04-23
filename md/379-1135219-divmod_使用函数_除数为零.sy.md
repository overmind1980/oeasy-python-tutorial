---
show: step
version: 1.0
enable_checker: true
---

# 除法运算

## 回忆

- 上次了解了
	- 余数和除法的中文词源
- 还了解了 余数
	- remainder的英文词源
- // 
	- 整除运算得到商
- %
	- 取余运算得到余数
- 有没有 一次计算就
	- 同时得到商和余数的办法呢？🤪

### divmod

- help(divmod)
	- 查询帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629442969473)

- 使用 divmod
	- 将 被除数 和 除数 作为参数 传入
	- 得到 商 和 余数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230928-1695909792818)

- 具体运算

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230928-1695909886113)

- 得到的结果怎么用呢？

### 元组 tuple

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230928-1695909921566)


- divmod的返回值类型是
	- tuple
	- 元组
- 元组就是
	- 一组元素
	- 元素之间 用逗号分割
- 元组 可以赋值吗？

### 元组赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629443122323)

- 元组可以给变量进行赋值

### divmod 结果

- divmod(3,8) 得到一个元组

- 元组 可以将赋值给
	- 商和余数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230928-1695910087845)

- 字符串可以做除法么

## 字符串除法

- 试一试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629443381137)

- 可不是么
	- 字符串除法没有什么意义
	- 除非转化为数字
- 除以 0 会如何呢?🤪

### 除数为 0
- 会报错
	- 出现一个 ZeroDivisionError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629443446252)


- 不过话说回来
	- 为什么要用`/`来进行除法运算呢？

### 缘由

- 这 还要从tty的时代说起
	- 大流行的Teletype Model-33机型
		- 键盘如下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220507-1651880179019)

### 符号选择

- 导致当时的编程语言只能
	- 用`/`代表除法
	- 用`*`代表乘法 
		- `*`是唯二能够登上电话键盘的符号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230813-1691892146462)

### 结果

- 键盘上没有 `× ÷ ⋅ ≠ ≥ ≈ π`这些符号
	- 导致`× ÷ ⋅ ≠ ≥ ≈ π`这些符号
		- 没有进入 ascii码表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220507-1651880543665)

- 最终导致今天要输入
	- 这些符号不能直接用键盘输入
- 新兴的编程语言
	- 比如 c、java、python
	- 一直延续着`/`代表除法这个惯例
	- 这一路就到了python

### 总结

- 这次了解了divmod函数
	- 函数的返回值是一个元组
		- 前面的是 整除运算的结果
		- 后面的是 取余运算的结果
- 除数不能为零
	- 那如果除数是小数呢？🤪
- 下次再说 👋
