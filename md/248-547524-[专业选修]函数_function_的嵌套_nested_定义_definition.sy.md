---
show: step
version: 1.0
enable_checker: true
---

# 嵌套调用

## 回忆

- 上次研究了函数的缓存(cache)
	- 有些函数反复运行
	- 如果算法、参数都不变的话
	- 可以直接从缓存中取得运行结果
- 我们用的是functools中的lru_cache
	- lru指的是Least Frequently Used
	- 最不常穿的衣服被新衣服替换掉
- 不过查看源代码我们发现
- 函数里面还可以有函数？？
- 这怎么理解？？

### 构造

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660958076167)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660958085206)

- 运行没有报错
- 但是如何调用inner呢？

### 层次

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660958266506)

- 红色的是主程序
	- outer是主程序中的定义(defined)的函数
	- 主程序中可见
	- 所以第6行可以调用
- 绿色的是子函数outer
	- inner是子函数outer中定义(define)的函数
	- outer函数内部可见
	- 理论上可以在outer内部调用

### 汇编理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661072240118)

- inner函数是outer函数的一个局部(local)变量

### 调用
- 可以调用inner这个局部函数变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660958624451)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660958632952)

- 调用成功
- 那么这个outer、inner到底是什么呢？

```
def outer():
    print("in outer()--0")
    def inner():
        print("in inner() --1")
    inner()

outer()
```

### 查看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660958748152)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660958756762)

- 从地址可看出现有的inner后有的outer
- 而且inner是函数(function)outer的局部函数(local)
- inner和outer都能访问到全局(global)变量么？

### 作用域(scope)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660958960769)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660958970414)

- 确实可以全局(global)变量么？
- 必须全局可见
- inner能访问到outer的变量么？

### 外层函数的内层可见性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660959128902)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660959138890)

- 那out能访问到inner中的局部变量么？

### 内层函数的外层可见性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660959264849)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660959273265)

- inner不能访问outer的可见性

### 总结

- 我们这次学习了嵌套的函数定义
	- 在outer里面又定义了一个函数inner
	- 可以在outer里用程序调用inner

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660958266506)

- 变量的作用域(scope)是这样的
	- 红色区域是主程序
		- 主程序中定义的变量(包括函数变量)
			- 全局(global)可见
	- 绿色区域是outer函数
		- outer函数中定义的变量(包括函数变量)
			- outer函数的程序(包括子程序inner中)中可见
			- 主程序中不可见
	- 蓝色区域是outer函数内的inner函数
		- inner函数中定义的变量(包括函数变量)
			- inner函数的程序中可见
			- outer函数的程序不可见
			- 主程序中不可见
- 这个嵌套层次可能有很多很多层
- 简单来说就是
	- 外部定义的内部可见
	- 内部定义的外部不可见
- 如果我就想让外部的out程序访问inner函数里面定义的变量
- 应该如何呢？🤔
- 我们下次再说👋



