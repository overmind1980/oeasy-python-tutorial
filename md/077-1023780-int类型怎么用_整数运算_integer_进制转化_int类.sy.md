---
show: step
version: 1.0
enable_checker: true
---

# 帮助手册

## 回忆上次内容

- 上次了解的是 
	- int词根溯源

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241019-1729332655472)

- 如何理解 整型变量呢？🤔

### 数字

- 下面两句 就是 `整数类型`变量的
  - 声明 
  - 赋值
  - 使用
- i_age中
	- age 代表着年龄
	- 前缀i
		- 强化类型 是 `整数类型`(integer)
		- 这种命名惯例 叫做 匈牙利命名法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667135478446)

- 怎么 才能 确认
	- i_age变量 是 `整数类型`的呢？

### 类型和地址

- introspection
	- 自省
	- 知道自己是谁
- type函数 
	- 可以看到
	- i_age是`int`类型的变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230704-1688476617500)

- 这整型变量在哪儿呢？

###  存储位置

- i_age 在内存中的地址
	- 在 id(i_age)

- 第一句的赋值过程
  - 在内存中分配一块空间 
    - 分配空间的位置 在 id(i_age)
	- 存储 整数41
    - 然后把 分配的地址 给 i_age 变量
- i_age
	- 类型 class 是 int
	- 内存地址 是 id(i_age)
	- 地址里 存的是 数字41

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667135565149)

- 整型变量
	- 也可以
	- 给`其他`变量赋值吗？

### 赋值

- 这个网站可以看到变量在内存中的情况
	-  https://pythontutor.com/

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1023780/uid1190679-20241209-1733709633724) 

- 首先选择
	- 渲染 堆上的 所有变量
	- render all objects on the heap

```
i1 = 41
i2 = 66
print(id(i1),id(i2))
i2 = i1
print(id(i1),id(i2))
```

- 他俩 在 调用(call)栈(stack)的 帧(frame)上
	- 也画出来了
	- 赋值过程 和 上次 用字符串变量赋值 类似

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1023780/uid1190679-20241209-1733709727049) 

- 为什么 会有
	- int这么一种类型呢？

### 整型数字

-  整型变量 诞生的 目的
	- 就是 为了`数字运算`
		- 加减乘除、比大小...
- 整型变量 
	- 是 直接存储 的 二进制数字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220522-1653185630666)

- 能把字符串 `转化`为 整数 吗？

### 转化


```python
s_apple = '8'
```

- 前缀s 
	- 代表着 string(字符串)
	- 还是匈牙利命名法

```python
i_apple = int(s_apple)
```

- 注意int是一个class(类)
	- 可以把字符串
		- 转化为 int 类的对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701170018127)

- int函数怎么用呢？

### 喊救命

```
help(int)
```

- 如果给出了基数(base)
	- 就 可以把 `其他进制`的数
	- 转化为 十进制数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1023780/uid1190679-20241206-1733488888774) 

- 说点实际的

### 2进制转化

```
int("111", 2)
```

- 可以将二进制的数字转化为十进制

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1023780/uid1190679-20241213-1734098166222)

- 为什么会有二进制呢？

### 2进制

- 最简单的输入
	- 开关
- 最简单的输出
	- 亮灭

- 最简单的进制
	- 二进制
	- 0和1

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1023780/uid1190679-20241213-1734098067530) 

- 还有什么其他进制吗？

### 其他进制

- 0 和 2-36进制

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210905-1630849759482)

- 当base为0时
	- 可以把字符串 
	- 转化为整型数字
- base 为 2-36时
	- 可以得到base进制数

- `为什么`我们现在都用十进制？

### 十个手指头

- 手指数量 决定我们数制的基数(base)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1023780/uid1190679-20241209-1733710034805) 

- 可以用一只手
	- 完成十二进制吗？

### 掐指一算

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230705-1688564753534)

- 中国传统十二地支手决图

### 子午流注

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230705-1688565032947)

- 一天是
	- 一个循环的圆
	- 十二个时辰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705316038015)

- 12个时辰 等于 1天
	- 这 是 十二进制

### 转化十二进制

- 2天又2个时辰
	- 总共多少个时辰？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230705-1688565176278)

- 总共26个时辰
	- 这如何理解呢？

### 转化

- 计算
	- 1天 12个时辰
	- 2天 24个时辰
	- 再加2个时辰
	- 总共26个时辰

- int函数的第二个参数
	- 代表着base(基数)
		- 所用的进制
	- 比如下图中的12

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705316298485)

- (22)<sub>12进制</sub>  等于
	- (26)<sub>10进制</sub>  

- 还有什么`其他`进制？

### 其他进制

- 八进制

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1023780/uid1190679-20241209-1733709946606) 

- 六进制

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1023780/uid1190679-20241209-1733726490268) 
- 其他进制也可以转化吗？

### 其他进制

- 下面这个就是
	- 将2进制的111 转化为十进制

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230704-1688477274355)

- 如果 将整数值 直接赋给 int 
	- 有什么问题来着？

### int 类

- int 本来是 `类名`
	- 现在 被声明为 `变量名`
	- 可能会引发问题
    - 如下图

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1023780/uid1190679-20241206-1733489526137) 

- 这个问题怎么解决呢？

### 删除

- 用到了del关键字

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1023780/uid1190679-20241214-1734184907394) 

- 还有什么关键字来着？

### 关键字 keyword

```
help("keywords")
```

- 下面是 python3.9 目前所有的关键字
	- 我们一起来捋一捋 见过的关键字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727580348429)

- 这里面我们见过
  - del
  - if/True/False
  - for/in
  - from/import/as
  - try/except/else/finally

- 很多关键字的习惯
	- 跟 `谁` 学的来着?

### 词汇来源

- 很多关键字的习惯 跟 `c语言`学的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727580522812)

- 还记得吗？
    - 最早编写 hello world 的 `c语言`
	- 也是编 python解释器 的语言

### 区别

-  python 和 c 还是有一些区别

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727580544536)

- int 在 c 里面是
	- 声明整型变量的`关键字`
- int 在 python 里面 是
	- 一个`类`(class)
		- int类型
- 还有什么类型来着？

### 总结
- 还有 字符串 类型 
	- str类型
- 这次 了解 的是
	- 整型变量
		- integer 
	- 本质上是 二进制形式 直接存储的 数字

- 两个不同类型的变量
	- i_age 
		- `整型`的 年龄变量
		- 其中i 代表 int 整数
	- s_age 
		- 字符串型的 年龄变量
		- 其中s 代表 string 字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667135622459)

- 整型 和 字符串
	- 输出 到屏幕上区别
- 这两个类型 区别在`哪`呢？？🤔
- 下次再说👋🏻
