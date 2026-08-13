---
show: step
version: 1.0
enable_checker: true
---

# 类型提示(type hint)

## 回忆

- 上次我们研究了最大公约数
	- gcd(greatest common divisor)
	- 这次合起来的优势比上次还明显
	- 而且大数字的时候效率高得多
- 限于动态语言的缘故
	- 实参的类型是不确定的
		- 可以是整型
		- 也可以是字符串
	- 如果要进行类型转化又有额外的开销
	- 而且还要加上字符try...exception...
- 这两难的局面如何破解呢？

### 类型提示(type hint)

- PEP484
	- Python Enhancement Proposals

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220824-1661335787700)

- 观察最后2行
	- 语法看起来挺简单
- 我们去试试

### 重写

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220824-1661344343859)

- 函数运行没有问题
- 局部变量可以声明类型么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220827-1661560839269)

### 局部变量

```
def get_factor_set(num: int) -> set:
    s: set = {1}
    for i in range(2, num + 1):
        if num % i == 0:
            s.add(i)
    return s

def gcd(n1: int, n2: int) -> set:
    s1: set = get_factor_set(n1)
    s2: set = get_factor_set(n2)
    gcd: set = s1.intersection(s2)
    return max(gcd)

print(gcd(3600,4096))
```

- 看起来确实是可以声明类型的
- 我们可以声明
	- num: int = 5
- 而不是
	- i_int = 5

- 不过如果我们把int改成str也没事
	- 这些只是类型提示
	- 并不影响编译运行
- 这个类型还有什么讲究么？

### 自定义类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220827-1661571683393)

- 类型名首字母大写
- 类型名用的是大驼峰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661688053938)


### 层层深入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220827-1661571773957)

- 可以有一些基于基本类型的复合类型

### 可调用

- 函数也可以做实参
- 可以声明究竟是什么样的函数么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220827-1661571886137)


- 需要明确函数三要素
	- 函数名
	- 参数列表
	- 返回值类型




### 总结
- 这次发现了类型提示(type hint)
	- 这样我们就可以直接"声明"对象类型了
	- 至少可以明确类型
	- python某种意义上成为了静态类型的语言

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661654995637)


- 其实只是表面的类型注释
	- 并不能限制变量的类型
	- 什么检查都没有的
	- 如果我想让他进行检查限制
- 怎么办呢？🤔
- 我们下次再说👋