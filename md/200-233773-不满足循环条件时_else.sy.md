---
show: step
version: 1.0
enable_checker: true
---

# else 不满足循环条件时

## 回忆

- 这次做了猜数字
  - 猜中了就 break 出来
  - 没猜中就继续猜
- 然后复习了防御式编程
  - 对于各种错误有自己的预估和处理
- 最后可以自制猜丁壳小游戏
- 还可以做什么呢？🤔

### 循环十个数

- 我们首先先从一个简单的循环开始

```
i = 1
while i < 10:
    print(i)
    i = i + 1

```

- 从 1 到 10
	- 前闭后开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633482911046)

- 这个while循环 
	- 可以接一个else

### 接入else

```
i = 1
while i < 10:
    print(i)
    i = i + 1
else:
   print("final ===", i)

```
- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250614-1749881862718)

- if else 
	- 如果那么
	- 好理解
- while 怎么也能 接else呢？

### 循环条件

- 把else删了

```
i = 1
while i < 10:
    print(i)
    i = i + 1
print("final ===", i)

```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250614-1749881862718)

### 加一个 if 语句

- 循环的条件是 i<10
	- 跳出循环
	- 肯定不满足循环条件了
	- 或者说 满足 循环条件取反 了

```
i = 1
while i < 10:
    print(i)
    i = i + 1
if not i < 10:
	print("final ===", i)

```

- 条件取反 是 not i<10
	- 对循环条件进行进行`反向`判断


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633483169904)

- 这个循环条件的取反
	- 用 else 来替代

### else

- 这个 else 就相当于循环条件取反

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633483250677)

- 我们看看帮助手册里面怎么说

### 帮助手册

- 根据循环条件判断
	- 如果满足
	- 执行循环体
- 如果不满足
	- 执行 else
- 然后循环语句结束

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633483565139)

- 如果循环条件根本就不满足呢？

### 天生 false

- 如果循环条件上来就是假的
  - 那就一次都不循环
  - 然后直接执行 else 一次
  - 然后结束

```
i = 1
while i < 10:
    print(i)
    i = i + 1
else:
	print("final ===", i)

```

- 这不是一个死循环 
	- 而是一个不死循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633483693673)

- 如果是 break 退出循环呢？
  - else 还会被执行么？

### break 退出

- 把循环条件修改一下

```
i = 1
while i < 10:
    print(i)
    i = i + 1
    if i == 5:
    	break
else:
	print("final ===", i)

```

- i = 5 时 
	- 跳出循环
	- 直接结束

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633483911343)

- 手册是如何描述这个的？

### 手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633484018717)

- without 指的就是不执行
- 不执行 else 子句中的语句

### 总结

- 这次了解了 else
- 当循环条件不满足时
  - 执行一次 else 子句中的语句
  - 然后退出整个循环
- 如果循环体中有 break
  - 那就直接跳出整个循环语句 statement

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211006-1633484217904)

- 这个手册里面提到了 continue 是什么意思？🤔
- 下次再说 👋
