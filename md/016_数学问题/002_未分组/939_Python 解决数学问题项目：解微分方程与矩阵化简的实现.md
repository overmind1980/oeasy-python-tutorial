---
show: step
version: 1.0
---
# 解微分方程与矩阵化简的实现

## 一、解微分方程

例题：

![3-1-1](https://doc.shiyanlou.com/document-uid208579labid2401timestamp1481598434458.png)

### 1.1 符号表示与等式表示

这里与之前不同的是增加了函数的表示(用f(x)表示y)，即例题中的y还有微分表示

```python
from sympy import *
f = Function('f')
x = Symbol('x')
```

下面是表示y'

```python
diff(f(x),x)
```

这里稍微介绍一下diff函数

例子：

```python
>>> diff(sin(x),x)
cos(x)
>>> diff(x**3,x)
3*x**2
```

上面都是一阶导，你会问高阶导怎么办？好办。

```python
>>> diff(x**3,x)
3*x**2
>>> diff(x**3,x,1)
3*x**2
>>> diff(x**3,x,2)
6*x
>>> diff(x**3,x,3)
6
>>> diff(x**3,x,4)
0
```

改变第三个参数即可。

下面继续我们的解题过程。

```python
#左端
diff(f(x),x)
#看一下
print(diff(f(x),x))

#result
#d
#--(f(x))
#dx

#右端
2*f(x)*x
```

### 1.2 用dsolve函数解微分方程

dsolve函数是用来解决微分方程（differential equation）的函数。

函数的一个用法为：

```
dsolve(eq, f(x))
```

第一个参数为微分方程（要先将等式移项为右端为0的形式)。第二个参数为要解的函数(在微分方程中)

举个例子:

```python
>>> from sympy import *
>>> f = Function('f')
>>> x = Symbol('x')
>>> pprint(2*x-diff(f(x),x))
      d
2*x - --(f(x))
      dx
>>> dsolve(2*x - diff(f(x),x), f(x))
#result
#Eq(f(x), C1 + x**2)
```

这样，我们可以将我们要解的题目，用以下代码表示。

```python
dsolve(diff(f(x),x) - 2*f(x)*x, f(x))
```

结果为：

```python
Eq(f(x), C1*exp(x**2))

#即f(x) = C1*exp(x**2)
```

对比答案可以发现正确。

完整代码:

```python
from sympy import *
f = Function('f')
x = Symbol('x')
print(dsolve(diff(f(x),x) - 2*f(x)*x,f(x)))
```
![3-1.2-1](https://doc.shiyanlou.com/document-uid600404labid2401timestamp1529633223160.png)

## 二、矩阵化简

平时线性代数问题中我们会遇到化简问题，虽然不算难，但着实麻烦。而且，出一点错就会导致
结果出错。不过好运的是SymPy提供了相关的支持。

例题：

![3-2-1](https://doc.shiyanlou.com/document-uid208579labid2401timestamp1481598433687.png)

### 2.1 符号表示与矩阵表示

```python
from sympy import *
x1,x2,x3 = symbols('x1 x2 x3')
a11,a12,a13,a22,a23,a33 = symbols('a11 a12 a13 a22 a23 a33')
m = Matrix([[x1,x2,x3]])
n = Matrix([[a11,a12,a13],[a12,a22,a23],[a13,a23,a33]])
v = Matrix([[x1],[x2],[x3]])
```

注意m的表示，需要有两个中括号

### 2.2 化简实现

```python
print(m * n * v)
```

得到的是：

```python
Matrix([[x1*(a11*x1 + a12*x2 + a13*x3) + x2*(a12*x1 + a22*x2 + a23*x3) + x3*(a13*x1 + a23*x2 + a33*x3)]])
```

使用

```python
f = m * n * v
print(f[0])
```

可以进一步得到化简后的式子

也许你要问我要化简后在计算怎么办？下面我就举个例子。
如果上式中x1，x2，x3均等于1，则可这样代入。

```python
from sympy import *
x1,x2,x3 = symbols('x1 x2 x3')
a11,a12,a13,a22,a23,a33 = symbols('a11 a12 a13 a22 a23 a33')
m = Matrix([[x1, x2, x3]])
n = Matrix([[a11, a12, a13], [a12, a22, a23], [a13, a23, a33]])
v = Matrix([[x1], [x2], [x3]])
f = m * n * v
print(f[0].subs({x1:1, x2:1, x3:1}))
```

可得

```python
a11 + 2*a12 + 2*a13 + a22 + 2*a23 + a33
```
![2-2.2-1](https://doc.shiyanlou.com/document-uid600404labid2401timestamp1529633531565.png)
## 三、总结
上文介绍了如何解微分方程和如何进行矩阵化简，当然都只是非常简单的例子。但希望能给大家带来一些启发。