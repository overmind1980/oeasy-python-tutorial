---
show: step
version: 1.0
enable_checker: true
---

# 格式化字符串

## 回忆

- 我们上次学习了很多函数相关的内容
	- 函数就是套路
	- 可以让代码一次次地执行
	- 用形参来接收实参
	- 完成套路之后返回
	- 函数可以层层嵌套
	- 也就是层层套路
	- 甚至递归函数
- 通过函数我们实现了代码的复用
- 各种类型都有很多的函数作为辅助
- 这次我们看点什么？🤔

### 字符串

- 看一下 
	- 字符串的格式化输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676586017865)

- 这些 都是什么意思呢？

### 格式含义

| 格式化字符 | 含义 | 单词 |
|---|---| --- |
|d | 整数 | `d`ecimal |
|f | 浮点数 | `f`loat |
|x | 十六进制形式 | `h`exidecimal |
|X | 大写十六进制形式 | `H`exidecimal |
|o | 把进制形式 | `o`ctal |
|s | 字符串 | `s`tring |
|e | 科学计数法 | `e`xponent of 10 |
|E | 大写科学计数法 | `E`xponent of 10 |

- 可以用这个写个
	- 九九乘法表 吗？

### 初步

```
for i in range(10):
    for j in range(10):
        print(i,"*",j,"=",i*j,sep="",end="")
    print()
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676591957502)

- 这个 显示有点错乱 

### 调整

- 调整为 % 显示方法

```
for i in range(1, 10):
    for j in range(1, 10):
        print("%d" % i, "*", "%d" % j, "=", \
              "%2d" % (i * j), \
              sep="", end=" ")
    print()
```

- 显示结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676592876595)

- 这里对齐的核心是
	 - "%2d" % (i * j)
	 - 要让 (i * j) 以 decimal 的方式显示
	 - 并且 占`两`位

### 对角线

- 想加上对角线效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676593315238)

- 应该如何修改代码呢？
	- 这个任务就交给你啦

### 搜索帮助

- 这种风格源自于
	- c语言中的 printf函数
- printf函数 就是 
	- 按format 进行print
- https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240201-1706784019688)

- 可是这帮助手册也说了
	- 原来用的老方法是%(module opperator) 
	- 现在用的新方法是 str.format() 
- 这str.format怎么用呢？
	- 点击那个链接进去看看

### format函数

- https://docs.python.org/3/library/stdtypes.html#str.format

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240202-1706835884515)

- 看起来并不难

### 验证

```
"The sum of 1 + 2 is {0}".format(1+2)
```

- 去游乐场试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676596880136)

- 还可以做点什么呢？

### 两个变量

- 试试两个变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676630045834)

- 可以设置更多变量吗？

### 更多变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676630073643)

- 可以控制
	- 输出形式吗？

### 输出形式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676597996165)

- 0 的意思是 
	- 参数列表里第0个变量
- d 的意思是
	- 整型数字

- 尝试把九九乘法表用str.format重写

### 总结

- 这次了解了 按数制 输出的方法
	- 使用% (modulo) 
	- 这种方法参照于 c语言的 printf函数
	- 目前已被替代

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676586508192)

- 新方法 是 str.format
	- 可以设置各种格式
	- 也可以使用参数

- 可以 将九九乘法表用str.format重写吗？？🤔
- 下次再说👋
