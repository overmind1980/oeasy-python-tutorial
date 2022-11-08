---
show: step
version: 1.0
enable_checker: true
---

# 变量定义

## 回忆上次内容

- 上次讲了什么是变量
  - 可以变的量就是变量
- 各种系统、游戏就是由变量所组成的


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658631277985)

- 我们声明了变量并且定义了变量
- 但是如何理解变量的定义和赋值呢？
- 这个可以尝试反编译观察一下么？

### 反编译

- 看起来还挺明确的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659149439876)

- 把一个数字常量(CONST)1
- 存储(STORE)在a这个变量名(NAME)里面
- 具体二进制代码(opcode)什么样的呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659152228762)

### opcode

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659152184477)

- 可以看到那个数字常量1(红框)
- 前面的0x64是什么意思呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659152208864)

- 如果声明并赋值两个变量呢？

### 继续

- 2 句 python语句
	- a = 1
	- b = 2
- 各对应两条指令码(opcode)
	- LOAD_CONST(装载常量)
	- STORE_NAME(在变量名中存储)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659149658669)

- 我们尝试调试一下吧

### 尝试调试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658633855234)

- 我们一行行来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658634127074)

- 第1行执行之前(红色)
	- a,b都不存在
- 第2行执行之前(绿色)
	- a为1，b不存在
- 第2行执行之后(蓝色)
	- a为1，b为2
- 可以看得清清楚楚
	- 这个不难啊
	- 字符串类型呢?

### 字符串变量声明与赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659150416185)

- 还是1条python语句对应2条指令码(opcode)
- 具体长啥样呢？

### 编译

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659150674110)

- oeasy几个字母
- 在字节码里面写得明明白白
- ascii编码
- 如果是加法运算如何理解呢？

### 加法运算

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659234454056)

- 这个1+1怎么就变成2了呢？
- 去ast(抽象生成树)看看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659249863715)

- 词流组成生成树的时候还看得出来
	- 1 + 1
- 为什么生成字节码的时候直接就变2了呢？

### 代码优化(optimize)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659250413069)

- 在真正编译之前
- 先进行了一下常量加法的运算
- 算出1+1=2
- 就不用每次都算了
- 如果相加的是变量呢？

### 变量加法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220731-1659256725199/wm)

- 这次的变量加法没法优化(optimize)了
	- 真正完成加的是BINARY_ADD

- 我们总结一下吧

## 总结

- 这次我们调试和反编译了数据的定义
- 字符型和数字型变量的定义和赋值对应两句指令
	- LOAD_CONST
	- STORE_NAME
- 数据在声明和赋值之前是不能被引用的
	- 因为那个变量没有被声明
	- 也就没有生命
	- 不能in the name of 那个变量
- 如果重新对于变量赋值
	- 会发生什么呢？🤔
- 我们下次再说！👋