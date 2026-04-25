# 嵌套调用

## 回忆

- 上次了解了一个函数堆栈跟踪可视化工具
	- viztracer
	- 这里能看清父子兄弟关系
	- 调用的顺序
	- 用时等等
- 还能看到参数和返回值
	- 真的可以看到递归调用一层层的样子
- 不过阶乘貌似也可以用for循环来做
- 递归真的可以转化为循环么？


### 循环求阶乘

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660657183878)

- 得到相同的结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660657202349)

### VizTracer

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660657909381)

- 函数计算所用的时间很短

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660637291832)

- 貌似用循环的函数好像比用递归的函数要快

### 汇编理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660658178736)

- 循环语句使用条件跳转(`POP_JUMP_IF_FALSE`)
- 是不是所有的递归都可以转化为循环呢？

### 斐波那契数列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660727235793)

- 黄金分割数列
- 因数学家莱昂纳多·斐波那契（Leonardo Fibonacci）以兔子繁殖为例子而引入
- 故又称为“兔子数列”
- 斐波那契数列（Fibonacci sequence）
- 指的是这样一个数列：1、1、2、3、5、8、13、21、34、……

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660728524122)

### 斐波那契的递归解法

```python
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

print(fibo_get_series(100))
```
- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660741901756)

### 循环写法

```python
def fibo_loops(n):  # return Fibonacci series up to n
    """Return a list containing the Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)    # see below
        a, b = b, a+b
    return result


print(fibo_loops(100))
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660741901756)

- 结果是一样的
- 哪种好呢？

### VizTracer

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660742291011)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660742328980)

- 相差了100倍 😱
- 为什么相差这么多 倍

### 分析

- 绿色部分有太多重复计算的部分了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660742439078)

- 每次函数调用就会裂变出两个新的函数调用
- 而且一大一小
- 仿佛看到层层叠叠堆起来的堆栈(stack)

### 河内塔

- 有这么一个关于递归的游戏
	- 三个柱子(A、B、C)
	- 要把三个盘子从A移动到C
	- 任何柱子上大盘子在下小盘子在上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660743865182)

- 这个我们可以倒着看
- 挪一个(红)
	- 很简单，直接挪
- 挪两个
	- 先挪上面的一个(红)
	- 再挪下面(白)的到目标
	- 再挪上面(红)的到目标
- 挪三个
	- 先挪上面的两个(红白)
	- 再挪下面的到目标
	- 再挪上面的两个(红白)到目标

### 代码

```
def hanoi(n,A,B,C):                   
    if n==1:                           
        print(A,'-->',C,' ',n)          
    else:                              
        hanoi(n-1,A,C,B)               
        print(A,'-->',C,' ',n) 
        hanoi(n-1,B,A,C)             

hanoi(4,'A','B','C')               
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660745194448)

### 查看次数

- 能输出移动多少次么？

```
def hanoi(n,A,B,C):
    global count
    if n==1:
        count += 1
        #print(A,'-->',C,' ',n)
    else:
        hanoi(n-1,A,C,B)
        count += 1
        #print(A,'-->',C,' ',n)
        hanoi(n-1,B,A,C)

count = 0
hanoi(20,'A','B','C')
print(count)
```
- 20个的话
- 我等了半天
- 如果
	- 片的个数：64
	- 需要移动 18446744073709551615 次
	- 这表明移完这些金片需要5845.42亿年以上


### 总结 🤔
- 我们这次比较了递归(recursion)和循环(loop)
- 一般来讲循环所用时间较少
- 递归可能会有大量重复的函数调用
- 查看调用过程和时间可以用viztrace
- 不过这个有点太重了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220817-1660745972644)

- 有没有快速查看函数运行时间的方法呢？🤔
- 我们下次再说👋


