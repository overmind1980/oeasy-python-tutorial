---
show: step
version: 1.0
enable_checker: true
---

# 嵌套调用

## 回忆

- 上次比较了递归(recursion)和循环(loop)
- 一般来讲循环所用时间较少
- 递归可能会有大量重复的函数调用
- 查看调用过程和时间可以用viztrace
- 不过这个有点太重了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660745972644)

- 有没有快速查看函数运行时间的方法呢？

### 循环计时

- 我们以前用过这个
	- time.time()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660786890820)

- 重写代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660786920230)

- 运行结果为
	- e-6
	- μs（microsecond)
	- 微秒

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660787005546)

### 递归计时

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660787181043)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660787187888)

- 这两个差多少倍呢？

### 倍数计算

- 先把两个py文件导入进来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660787311889)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660787556048)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660787564061)

- 速度翻了35倍
- 有没有更快速的计时方式呢？

### 计时函数timeit

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660789117569)

- 尝试构造代码

### 构造代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660789225468)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660789233605)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660789205783)

- 为什么每次执行时间不一样？

### 分析

- 具体运行的时候
	- 会和很多因素相关
		- 当时的cpu内存状况等
		- 当前内存情况



- 怎么时间这么长呢？
- 1s以上

### 原始模块

- 以下为循环

```python
import timeit
def fibo_loops(n):  # return Fibonacci series up to n
    """Return a list containing the Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)    # see below
        a, b = b, a+b
    return result

fibo_loops(10000)
```

- 以下为递归

```
import time
def fibo_recursive(n):    # write Fibonacci n
    """Return nth element of the Fibonacci series up to n."""
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibo_recursive(n-1) + fibo_recursive(n-2)

def fibo_get_series(n):
    """Return a list containing the Fibonacci series up to n."""
    i = 0
    result = 0
    l = []
    while result<n :
        l.append(result)
        i += 1
        result = fibo_recursive(i)
    return l

fibo_get_series(10000)
```

- 查看手册 

### 查看手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660789546266)

- timeit有个参数(parameter)number
- 有个默认值(default value)
- 1000000

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660789617782)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660789625741)

### 再接再厉

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660789807658)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660789815278)

- 这是计算100以内的斐波那契数列
- 如果计算10000以内的会有什么区别么？


### 10000以内

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660816403932)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660816445484)

- 好像差距在扩大😱

### 总结
- 这次研究了计时函数timeit.timeit()
	- 可以把一段代码的文本作为参数传进来
	- 然后重复执行number次
	- 把这个时间记录下来
	- 这样就可以比较递归和循环的运行时间
- 实践出真知
- 得出哪个函数更好
- 或者说得出哪个算法更好
- 很明显是循环比递归快很多
- 关键递归有很多重复的内容
	- 我可以把这些重复的部分给优化了么？🤔
- 我们下次再说👋


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220818-1660811378276)
