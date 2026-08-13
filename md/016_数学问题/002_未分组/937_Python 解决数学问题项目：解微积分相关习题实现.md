---
show: step
version: 1.0
---
# 解微积分相关习题实现

## 一、示例题目一
示例题目一（求极限）：

![2-1-1](https://doc.shiyanlou.com/document-uid208579labid2400timestamp1481597811787.png)

### 1.1 符号表示及方程表示

```python
from sympy import *
n = Symbol('n')
s = ((n+3)/(n+2))**n
```

### 1.2 利用limit函数求极限

在解之前通过几个例子认识一下limit函数

```python
from sympy import *
x = Symbol('x')
print(limit(1/x**2, x, 0))
#result
#oo
print(limit(x*(sqrt(x**2 + 1) - x), x, oo))
#result
#1/2
```

介绍一下结果中出现的符号：

- oo 无穷大（标识方式是两个小写字母o连接在一起）
- E e 
- pi 圆周率 

另外可以使用init_printing()来使我们的输出更美观,也可直接用pprint()函数

比如

```python
>>> from sympy import *
>>> x = Symbol('x')
>>> x*(sqrt(x**2 + 1) - x)
  /        ________\
  |       /  2     |
x*\-x + \/  x  + 1 /
```

完整代码：

```python
from sympy import *
n = Symbol('n')
s = ((n+3)/(n+2))**n
print(limit(s, n, oo))
#result
#E
```

![2-1.2-1](https://doc.shiyanlou.com/document-uid600404labid2400timestamp1529631378119.png)

## 二、示例题目二
示例题目二（求定积分）：

![2-2-1](https://doc.shiyanlou.com/document-uid208579labid2400timestamp1481597812641.png)

### 2.1 符号表示

```python
from sympy import *
t = Symbol('t')
x = Symbol('x')
```

### 2.2 方程表示与使用integrate函数求解

integrate函数用于积分问题 

例子：

```python
>>> integrate(6*x**5, x)
x**6
>>> integrate(cos(x), x)
sin(x)
```

表示 f(x) ：

```python
m = integrate(sin(t)/(pi-t),(t,0,x))
```

表示 目标积分式

```python
n = integrate(m,(x,0,pi))
```

完整代码：

```python
from sympy import *
t = Symbol('t')
x = Symbol('x')
m = integrate(sin(t)/(pi-t),(t,0,x))
n = integrate(m,(x,0,pi))
print(n)
```
![2-2.2-1](https://doc.shiyanlou.com/document-uid600404labid2400timestamp1529631980672.png)
结果为2

答案：

![2-2.2-2](https://doc.shiyanlou.com/document-uid208579labid2400timestamp1481597812856.png)

## 三、总结
上文介绍了如何解微积分相关习题，包括求极限和求定积分，当然SymPy库还有很多相关功能如函数的序列展开等，大家可以进一步学习。