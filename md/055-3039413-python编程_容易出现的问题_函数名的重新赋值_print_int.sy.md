---
show: step
version: 1.0
enable_checker: true
---

#  python编程_容易出现的问题_函数名的重新赋值_print_int 

## 回忆上次内容
- [配套视频](https://www.bilibili.com/video/BV1rQ64YWEeB)

- 上次 了解了 
	- `关键字`列表
	- keywords list

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241103-1730642843248)

- 关键字 不能做 标识符

- 除了 关键字(keywords)之外
	- 还有啥 `不适合` 做标识符 吗?🤔

### 三问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241109-1731120962810) 

- 试试这个

### print

```
print
print = 1
print
```

- print 本是 内建的函数
	- 重新赋值后 
	- 成为1了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241109-1731120997608) 

- 还能输出吗？

### 尝试输出

```
print("hello")
```

- 不能输出了
	- 整形数字 不能被调用

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241109-1731121109586)

- 为啥会这样呢？

### 错位

- 相当于
	- 把整形数字
	- 当成 函数来调用了

```
1("hello")
```

- 把1 直接当做函数来 调用
	- 那哪儿成啊？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241109-1731121166952)

- 除了 `函数名`
	- 还有啥 最好别当 变量名 吗？

### 常见错误

- int 是 整数类
	- 可以完成 类型转化

```
b = int("6")
c = int(7.1)
```

- int类型
	- 能用来转化变量类型


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241109-1731121312581) 

- int 可以 被声明成 `变量`吗？

### 重新赋值后

```
int = 5
a = int(6)
```

- 将 5 赋给 变量 int

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716263651528)

- int 一旦被 重新 赋值
	- 就 `不`能 完成类型转化 了 
	- 和 print 一样

### 观察

- 重启 游乐场
	- 观察 类型 变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727419855719)

- 这个赋值过程
	- 从 类型(type) 
	- 到 整型(int)


- 模块名 呢？
	- 也能 这么乱赋值吗？👹

### 赋值

```
import os
os
locals()
```

- 引入os
	- 本地就有了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039413/uid1190679-20241112-1731391736048) 

### 覆盖

```
os = 1
os
locals()
```

- 覆盖之后
	- os就不再是 
	- 导入的 那个模块了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039413/uid1190679-20241112-1731391812496) 

- 那 删了 之后 
	- 还能 `恢复` 吗？

### max

- max 也是
	- 内建的函数
	- builtin-function
	- 和 print一样

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039413/uid1190679-20241111-1731294267546) 

- 将 1 赋给 max 之后
	- 再调用 max

```
max = 1
max(1, 2)
```

- TypeError
	- max 不再是 内建的函数
	- 而是整数 无法调用了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039413/uid1190679-20241111-1731294820474) 

- 这max 能 在本地 看到 吗？

### locals

```
locals()
```

- max 此时
	- 是一个 整形变量名
	- 不是 函数名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716256199892)

- 那我 要是 
	- 把 max 这个变量 
	- 删了呢？

### 删除max

```
del max
```

- 在本地 
	- 删除 max 变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716256326024)

- 本地变量 max 消失
	- `__builtins__`.max 从新被识别为 
	- 还是 内建函数 
	- builtins-function
	- 就恢复了！😄

- 去总结吧！

## 总结

- 这次 了解到 
	- 已有的函数名、类名、模块名
	- 不适合 覆盖了 赋新值
	- 会 失去`原有`功能
	- 比如 max

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039413/uid1190679-20241109-1731148663698) 

- 如果我 `就`想
	- 让 max 当 变量名 表示 `最大`值
	- 想让 max函数 可以继续被调用
	- 又该 `怎么` 做呢？🤔
- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV1rQ64YWEeB)








