# 二进制(binary)数数

## 回忆上次内容

- 可以看到
	- 希腊语对于罗马帝国的影响在于
		- 文书、外交
	- 拉丁语作为 理性的概念的存在
		- 平衡、二进制
	- 日耳曼语 关联到日常生活方面
		- 数数、计次

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673752205171)

- 这其实就是
	- 二进制(binary) 词源由来

- 2进制 也能数数 吗？
	- 究竟应该怎么数呢？ 

### 十进制

- 先看看 十进制 数数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230920-1695173828119)

- 十进制 是 满十进一

### 二进制

- 二进制 满二进一

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230920-1695173935721)

- 可以列出 他们之间的 对应关系吗？

### 列出对应关系

```
for i in range(0,0b10000):
    print(i,bin(i),sep=" | ")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230920-1695174098376)

- 有点错位
- 可以让他们对齐吗？

### 对齐

```
for i in range(0,0b10000):
    binary = f"{i:04b}"
    decimal = f"{i:02d}"
    print(binary, decimal, sep=" | ")
```

- 循环里体中 有三句话
	1. 声明一个变量 binary 
		- 并赋值
		- 值的格式为 
			- 4列宽的二进制形式 前面补零
	2. 声明一个变量 decimal
		- 并赋值
		- 值的格式为 
			- 2列宽的十进制形式 前面补零
	3. 输出 这两个变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230920-1695174787182)

### 执行结果

- 可以看到 
	- 10进制 可以数数
	- 2进制 也可以数数
- 进制表现形式 
	- 并不影响 数出来的数字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230920-1695174811853)

- 他们之间 有 
	- 一对一的 关系
- 可以把ascii 对应的数字 
	- 全都用 2进制 和 10进制 表现出来吗？

### 回忆 ASCII码表

- 序号范围
	- [0b0,0b1111111]
	- [0,127]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809097080)

- 可以把这个序号范围 遍历一遍吗？

### 列出 ascii的二进制、十进制、字符状态

```python
for n in range(0, 2 ** 7):
    char = chr(n)
    binary = f"{n:07b}"
    decimal = f"{n:03d}"
    print(decimal, binary, char, sep=" | ")
```

- 结果展示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230920-1695175765151)

###  总结
- 这次我们 使用二进制形式 数数
	- 和 十进制数数 类似
	- 只不过是 满二进一
- 我们了解了 两种进制

| 中文名 | 英文名 |
|---|---|
| 二进制 | binary |
| 十进制 | decimal |

- 这个 decimal 和 ten 有什么关系吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230920-1695176043907)

- 我们下次再说！👋