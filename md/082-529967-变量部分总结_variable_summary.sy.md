---
show: step
version: 1.0
enable_checker: true
---

#  变量部分总结_variable_summary 

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV13aZsY3ELm)
- 人 需要 明确目标
	- 拆分 步骤
	- 确认 结果
	- 向前 推进
- ai 负责	
	- 落实 代码
	- 进行 解释
	- 提供 建议

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3649020/uid1190679-20250221-1740147271226) 

- ai时代 
	- 编程 不会 被终结
	- 一切 都会变成 编程 

### 变量的定义、声明和赋值

- 什么是变量？
	- variable
	- 能变的量

```
apple_price
```

- 变量 
	- 只有声明和赋值了之后 
	- 才能用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250224-1740381567205)

- 否则 就会出现
	- `NameError`
	- `名字错误`

### 声明和赋值

```
apple_price = 6
```

- 声明和赋值 让变量
	- 从`无`到`有`
	- 可以 对变量 重新赋值 吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250224-1740381649513)

### 变量的重新赋值

```
apple_price = 6
id(apple_price)
apple_price = 7
id(apple_price)
```

- 已经声明了的变量 
	- 重新赋值的时候
		- 会重新申请一个 
		- `新`空间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250224-1740381680469)

- 然后
	- 让变量 指向 `新`空间
	- 如何查看 本地现在 都有`哪些`变量？

### 查看本地

```
locals()
```

- 查看本地所有变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250224-1740381736065)

- 怎么让变量
	- 从`有`到`无` 呢？

### 删除变量

- 变量apple_price的一生

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529967/uid1190679-20250224-1740381769862) 

- del 删了
	- 就没了

- 没了 
	- 也就不能`再`删了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250224-1740381805134)

- 变量命名 有 什么规则吗?

### 命名惯例

- 命名惯用法 
	- NamingConvention
	- 主要有三种
		1. 小驼峰
		2. 蛇形
		3. 大驼峰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658636947931)

- python用的是哪种呢?

### python命名

- 不同类型 
	- 使用 不同的 惯用法

|英文名|类型|
|---|---|
| NameError | 异常|
|NewCustomer|类|
|CERTAIN_VALUE|常量|
| name_error|对象变量|

- 一看名字
	- 就知道类型
	- 就知道该怎么用
- 变量怎么`变`？
	- 动态输入 input

### 接收输入

- 输入的函数
	- 是input()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211021-1634787289662)

- 输入的内容 不符合要求
	- 怎么办?？

### 发现异常

```
apple_price = float(input("请输入苹果价格:"))
```

- 发现了错误
	- 一定要处理

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529967/uid1190679-20250224-1740382040511) 

- 需要try

### try

- 试着运行

```
try:
	apple_price = float(input("请输入苹果价格"))
except:
	print("输入错误")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250224-1740382102202)

- 不写 except:pass 

### 处理异常

```
import this 
```

- 错误不应被悄悄传递
	- 除非你确定需要这样做

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230715-1689427823731)

- try 语句块的 完整形式
	- 是什么呢？

### try 完整形式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210816-1629057399059)

- 都有 什么 `数据类型` 呢？

### 字符串

- 字符串 就是 
	- 字符的串
	- string

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630144191964)

- 变量类型是
	- `str`

- 另一种常见类型是什么呢？

### 整数

- 另一种 常见类型是
	- `整型数字`
	- `int`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667138305238)

- 根据 进制类型
	- 可以有不同的 表示方法
- 为什么 会有 不同的 `数据类型` 呢？

### 运算

- `不同`的 变量类型
	- 对应着 `不同`的 加法运算方式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658885589423)

- 整型 和 字符串
	- 不能相加
- 否则会发生
	- `TypeError`
	- `类型错误`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230715-1689427636366)

- 如果  数据类型 不合适
	- 又想相加
- 怎么办？

### 转化

- str型 和 int型
	- 无法 直接 相加
- 这就需要
	- `类型转化`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658885662327)

- 转化 之后
	- 就 可以 相加 了
- 程序 多了 
	- 可以 拆分 吗？

### 自定义模块

- 可以自己定义一个模块my_file

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529967/uid1190679-20250106-1736127308793) 

- 但如何导入呢？

### 导入自定义模块

- 导入自定义的模块
	- 但要注意 本地变量名 撞车
	- local variable crush

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650972937)

- 如何导入系统模块呢?

### 如何导入模块

```
import math
```

- 导入math模块

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529967/uid1190679-20241224-1735035167357) 

- 导入 之后
	- 模块 就可以用了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529967/uid1190679-20241224-1735035203387) 

- 模块里面 有`什么`呢？

### dir

```
dir(math)
```

- 查看math模块目录

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529967/uid1190679-20241224-1735035288652) 

- 查看random模块目录

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529967/uid1190679-20241224-1735035259089) 

- random如何得到随机数

### 随机数字

- 通过random中的randint函数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529967/uid1190679-20241224-1735035328073)

- 如何使用ai配合编程

### 稳步推进

- 使用ai辅助编程 有3个结论
	1. 和程序逻辑无关的 可以不说
	2. 复杂的流程 一次说不清 不期待一次成功
		- 可以 拆解成 若干步骤
		- 单一步骤 用简单 话语描述清楚
		- 对自己、对ai都好
	3. 对于已经完成的代码
		- 能够确认 他可行👍
		- 并且 将可行部分巩固好
		- 再向下继续编码
		- 小步快跑 快速迭代

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3649020/uid1190679-20250222-1740202739281) 

- ai时代的编程
	- 需要先整理好 自己的需求
	- 再将需求 合理拆分成几个 小部分
	- 然后 逐步巩固 已经实现的需求
	- 并 向前推进

### 总结

- 本章节 实验内容 比较`杂`
	- 捕获异常 try-except-else-finally
	- 进制转化 
	- 变量类型
	- 类型转化

- 变量类型 主要有`两`个
	- 字符串  str
	- 整型数字 int
	- 彼此可以相互转化的

- 加法
	- 会根据 变量类型的不同 而不同
		- 整型的 加 是 `数字求和`
		- 字符串 加 是 `字符串拼接`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727598195374)

- 除了这两种类型之外
	- python还有`啥`数据类型呢？？？🤔
- 下次再说👋
- [配套视频](https://www.bilibili.com/video/BV13aZsY3ELm)



