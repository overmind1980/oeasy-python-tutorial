---
show: step
version: 1.0
enable_checker: true
---

# 减法运算

## 回忆

- 上次学习了
	- 减去
	- minus
	- 来自词根min-

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230806-1691311824062)

- 正数 直接使用
	-  数字的 二进制形式 存储在字节中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230823-1692799138318)

- 想要查看 负数 存储形式的时候
	- 爆出了错误
		- OverflowError
		- 溢出错误
- 负数 是
	- `怎么` 用 二进制形式 
		- 存储在字节中的 呢？🤪
- 查帮助

### 尝试

- 由于i_difference类型是 int

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230827-1693110343431)

- `help(int.to_bytes)`
  - 查询 int 类 to_bytes 函数的帮助手册

### 参数1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230827-1693110452327)

- 第一个参数是长度
    - 说明要用几个字节
    - 1、2还是4

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230801-1690886638500)

- 如果数字 超过 字节的表示范围

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230827-1693110541600)

- 就会显示溢出
	- 什么是 溢出(overflow) 呢？

### 溢出

- 由于容器的 容积有限
	- 如果 注入的液体 超过 容器容积
	- 就会发生溢出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230827-1693147059998)

- 这时候 存上的
	- 就不是当时 给的值了

- 甚至发生错误
	- OverflowError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230827-1693147135305)

- 256 就超过 了 
	- 一个字节 的 容积
	- 无法将其存储进字节

### 参数2

- 第二个参数是字节序
    - 要选 big 还是 little
    - big 就是大端字节序
    - little 就是小端字节序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220910-1662795643237)

### 参数3

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230801-1690886595725)

- 函数第3个参数
	- 意味着 是否可以
		- 有符号
- 有符号 signed = True
	- 就可以 表示负数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230801-1690886736353)

- 给函数不同的参数
	- 函数 给我们返回 不同结果

### 再试

- 看起来确实是
	- 可以得到-1 的二进制形式了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230801-1690886893413)

- 这个字节
	- 怎么表示正负呢？
- 而且这个 to_bytes 每次都要输入"big"或者"little"
	- 有点麻烦啊
- 有什么简单方法吗？

## pack 打包

- 首先引入 struct 这个 module

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210819-1629374715411)

- 看一下这个函数 pack
	- 把数字打包成字节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631571553665)

- 我们可以看到
	- 这个数字存储
	- 其实用的是 小端序
		- little-endian
	- 不过两个字节毕竟还是多
- 我可以简化成
	- 1 个字节么？

### pack 细节

- `help(struct.pack)`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230827-1693110721283)

- 更多细节还得help
	- struct 这个 module

### struct

- `help(struct)`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210819-1629375021433)

- 可以看到 `<>` 可以区分 大小端字节序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230825-1692971195289)

- 还可以看到具体的数据类型
  - h 
	- signed short 
		- 有符号 2字节
  - B 
	- unsigned char 
	  - 无符号 1字节
  - b 
	- signed char 
	  - 有符号 1字节
- 要找的应该是b
	- 有符号1字节

### 负数打包 

- 尝试打包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230801-1690887018834)

- 可以列出所有 打包格式吗?
	-	http://docs.python.org

## 网页搜索

- python的打包类型 和 C语言 是一一对应的
	- 看不到具体的类型名
		- 是因为 python 封装得比较好
	- 但内部肯定还是这些东西

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210819-1629375211058)

- 有封装(pack)就有解封(unpack)

### 逆运算

- 有打包就有解包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631571553665)

- 就像有加就有减一样
	- 去 struct 查找一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210819-1629375412945)

## 总结

- 这次学习了
	- 负数在计算机中 存储方法
- 数字
  - 可以 用 struct.pack
	- 打包 成字节状态
  - 也可以 struct.unpack 
	- 解包 回整数形式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230801-1690894018371)

- 不过 `为什么` 偏偏 要用 
	- 二进制字节 b'\xff' 来表示 -1 呢？🤔
	- 别的形式 不行吗？
- 下次再说 👋

