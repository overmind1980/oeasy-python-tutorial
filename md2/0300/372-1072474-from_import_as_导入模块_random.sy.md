本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# 乘法运算

## 回忆

- 上次了解到 complement 补码的词根

![图片描述](../0371/uid1190679-20230831-1693445320240.png)

- plus、minus 都来自于
	- 中世纪的商业语言
		- 除了加减之外 
		- 还有乘除运算
- 乘除 是 如何完成(complete)的 呢？🤔

### 乘法

>There are four basic operations of Mathematics – these are addition, subtraction, multiplication, and division. 

>So, multiplication is one of the elementary operations of computation in Mathematics. 

>In the process of multiplication, the number to be multiplied is termed the multiplicand and the number with which we multiply is called the multiplier. 

>Product is the result of multiplication. 

![图片描述](../0372/uid1190679-20230802-1690988879348.png)

>In the given example, the multiplication of 8 and 11 is performed where 11 is the multiplier, 8 is multiplicand, and 88 is the product. There is a ‘*’sign(asterisk) that is used to represent multiplication.

## 乘法

- 乘法 本质上 是 连加

![图片描述](../0372/uid1190679-20230903-1693747103209.png)

- 乘法符号是 <kbd>\*</kbd>
	- 输入法是 <kbd>shift</kbd> + <kbd>8</kbd>

![图片描述](../0372/uid1190679-20230903-1693747137138.png)

- 左右操作数 
	- 可以是整数
- 乘法运算的结果
	- 叫做 积
- 积 也是整数类型
	- 这就是 整数的乘法

### 随机乘法

- 被乘数
	- multiplicand
	- [ˌmʌltəplɪ'kænd] 
- 乘数
	- multiplier
	- ['mʌltɪplaɪə(r)] 

![图片描述](../0372/uid1190679-20230803-1691047357681.png)

- 这个东西能否
	- 简化一下呢？
- 由于现在已经导入了random
	- 需要 重启一下python3 解释器
		- 清空 游乐场
		- <kbd>ctrl</kbd> + <kbd>d</kbd>
			- 重新进入一下游乐场

### 简化

- 重启之后 
	- 游乐场就不认识 random包了
	- 重新来导入

![图片描述](../0372/uid1190679-20230903-1693747329487.png)

- 使用 from random import randint 的方式
	- 导入了 randint函数
	- 而没有导入 random包

![图片描述](../0372/uid1190679-20230903-1693747697948.png)

- 这样可以
	- 只引入这个 randint 这个函数
	- 而不引入整个 random 这个模块(module)

- 引入之后 怎么用呢？

### 引入之后

- 直接调用randint函数
	- 就可以可以得到随机数

![图片描述](../0372/uid1190679-20230903-1693747844822.png)

- 对比原来 
	- 确实简化了一些

![图片描述](../0372/uid1190679-20230903-1693747885268.png)

- 还可以再简化么？

- <kbd>ctrl</kbd> + <kbd>d</kbd>
	- 退出
- 再次重新进入游乐场

### 再简化
```
from random import randint as r
```

- 将random包中的 
	- randint函数 
		- 改名为r

![图片描述](../0372/uid1190679-20230903-1693748149426.png)

- 这样 导入
	- 无法识别 
		- random包 
		- randint函数
	- 但是 可以识别 
		- randint函数的 别名r

![图片描述](../0372/uid1190679-20230903-1693748302780.png)

- r写起来 
	- 比 randint 又简单了一些

### 完成乘法

- r函数 确实好用了

![图片描述](../0372/uid1190679-20230827-1693124519479.png)

- random 和 randint 都不认识了
	- 发生NameError
- 还想要系统
	- 再认识randomint 怎么办？

### 导入函数 不改名

- 将 randint 这个函数
	- 再导入一遍

- 这样 游乐场 
	- 既认识 randint函数
	- 又认识 r这个别名

![图片描述](../0372/uid1190679-20230903-1693748559918.png)

## 总结

- 这次复习了 函数的导入
	- import ... 导入包
	- from ... import ... 从包导入函数或变量
	- from ... import ... as ... 从包导入函数或变量并改名
- 导入的是随机函数 
	- 可以得到随机的整数(integer)

![图片描述](../0372/uid1190679-20230903-1693748735143.png)

- 负数 也可以进行乘法吗？？🤪
- 下次再说 👋

