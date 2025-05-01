---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 嵌套 embedded

## 回忆

- 上次研究了
	- 整型数字 转化为 大写中文数字

- 元组和列表一样
	- 都属于序列(sequence)类型
- 什么是序列类型呢？
	- 序列序列有序的排列 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221201-1669900303001)

- 还有什么也属于序列类型呢？🤔

### 序列类型

- sequence 这个单词来自于*sekw-
	- 意思是跟着的to follow
- 跟着第一个的是第二个
	- second
	- 时间是一秒秒(second)过去的
	- sub 往下 
		- 随后而来的 subsequent
	- con 共同的
		- 一步步最终的结果 consequence

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221201-1669900303001)

- 结局,后果; 续集;余波 sequel

### 构成

- 跟着的这一堆人
	- 构成一个团伙 society
	- 构成一个门派 sect
	- 彼此关联 associate
	- 彼此之间要 social
	- 这些人彼此是同类suit	
		- 穿的都是那套衣服

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673765152074)

- 跟随着目光、理想
	- pursue

### 字符串

- 字符串是字符的类型是序列
	- 序列序列有序的排列
- 在 python3 的在线文档中
	- 查到了一些序列类通用的方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630294088251)

- 试试去

### in 是否存在

- 如果在里面有子串
	- 就返回 True
- 否则
	- 返回 False

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630294183932)

### 运算

- 运算主要是
	- 加法
	- 乘法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630294326883)

- 方式和列表、元组一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630294338159)

- 字符序列是常量

### 复杂运算

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221213-1670900457094)

- 其实 
	- 关于字符串还有一种拼合方式
	- 就是两个字符串常量直接拼

### 拼接字符序列常量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221213-1670900185951)

- 用空格拼接字符序列
	- 非常快速

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630296838772)

- 但是
	- 这个仅仅限于字符串常量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221201-1669900417907)

- 如果有一个操作数是字符串变量
	- 就不行了

### 索引

- 索引方式和列表、元组相同
	- 毕竟都是序列类对象 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630296928849)

- 正向索引没有问题
- 逆向呢？

### 逆向索引

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630296999031)

- 第1 是 0
	- 头尾相连后
- 倒数第1  是 -1

| 0   | 1   | 2   | 3   | 4   |
| --- | --- | --- | --- | --- |
| o   | e   | a   | s   | y   |
| -5  | -4  | -3  | -2  | -1  |

- 规律和列表、元组是一样的
- 切片呢？

### 切片

- 切片的因素
  - start
  - stop
  - 前闭后开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630297141347)

- 负数切片怎么做呢？

### 负数切片

- 先选择范围
	- 控制好开始位置 
		- start
	- 控制好结束位置
		- stop
- 果断下刀！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221213-1670897572745)

- 如何才能切到字符序列中最后一个字符呢？

### 放手

- 如果要最后一个
	- stop 就需要为空
	- 果断放手

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630297331189)

- start 也可以为空
	- 彻底放手
	- 所有字符都有
- 除此之外
	- 步长 step 也可以控制

### 切片步长 step

- 步长步长
	- 一步有多长

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630297712445)

- 步长可以为负数么？

### 切片步长为负数

- 步长为负数
	- 倒着来走路

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630297794471)

- 这个好像 reverse
- 字符串支持 reverse 么？

### 排序 倒序

- 倒序和排序都不支持

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630297859372)

- 怎么可以让字符序列倒序呢？

### 字符串倒序

- 可以用切片实现

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210905-1630833830144)


- 步长为 -1 	
	- 向后转稍息

### 倒背如流

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221201-1669901131355)

- 这样子
	- 一本书倒背如流也很简单啊

### 长度、最大最小值

- 长度 len
- 最大值 max
- 最小值 min

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630297952040)

- 这些函数都字符序列支持
	- 大小比的是 ascii 序数 
		- ord 函数
- 可以用 index 
	- 找出字符的索引位置吗？

### index 索引位置

- 找出"oeasy"中
	- "o"的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630298113314)

- "o"的位置
  - 正数 第 0
  - 倒数  -5

### 索引起始位置

- 控制索引查找的开始点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630298267805)

- 字符序列可以统计字符数量吗？

### count 计数

- 不但可以统计单字字符序列
	- 也可以统计多字字符序列


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630298327888)

- 可以看到有两个 h1 字符串
- 可以提取出h1标签的内容oeasy么？
  - `<h1>oeasy</h1>`

### 提取标签内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630298462151)

- 注意切片范围
	- 前闭后开

### 英文练习

```
for ch in "love":
	print(ch)
```

- 这个实验叫做
	- for in love

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240414-1713058206078)

- 再来试试 中文

### 中文练习

- 原始字符串是"道可道非恒道"
- 需要截取
	- "道可道"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659393311894)

- 这里面如果想要省略切片首尾的话
	- 可能么？
	- 如何省略呢？
- 可以再切点别的出来么？

### 再截

- 试试这些
	- "恒道"
	- "非恒道"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220706-1657074794030)


- 再试试
	- "道可"
	- "道非"
		- 有几种方式可以切出"道非"呢？
		- 能否步长为负截取出来呢？

### 单字

- 如果我只截取一个字符么？
	- "道"
	- 有几种截取方法呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221213-1670899306556)

- 一个字符的字符串还构成串么？

### 单字字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659393446883)

- 串上只有一个鸡排
	- 但也算一个鸡排串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659393459077)

- 单字符的字符串是一种特殊情况

### python之禅

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221201-1669901394346)

- Special cases aren't special enough to break the rules.
	- 特殊情况不足以打破规则
- 类似规则的还有平行赋值时候的结构规则

### 平行赋值(parallel assignment)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221226-1672029766284)

- 两边数量必须相等

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221226-1672029827202)

### 总结

- 这次复习了字符序列
	- 字符序列和列表、元组一样都属于序列
	- 序列的东西他全能用
		- in 
		- 加法、乘法运算
		- 索引
		- 切片
		- index
		- len
		- max
		- min
- 字符序列其实就是
	- 字符连成的序列
	- 一个个字符连起来成了串
	- 滔滔不绝、川流不息
	- 流动起来
- 字节序列就是字符串
	- 和列表、元组一样都是有序的
- 有无序的容器吗？？🤔
- 下次再说 👋
