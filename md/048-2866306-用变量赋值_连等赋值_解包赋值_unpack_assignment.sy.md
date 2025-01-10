---
show: step
version: 1.0
enable_checker: true
---

# 变量名标识符

## 回忆上次内容

- 上次我们 了解了 `id 函数`
	- id函数 可以得到 
	- 变量对象 所引用的 `唯一内存地址`

```
s1 = "oeasy"
A = 10
```

- 现在都是 
	- 用 字面量(literal) 
	- 给变量 `赋值`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701171596499)

- 可以 
	- 用 `变量`
	- 给变量 `赋值` 吗? 🤔

### 变量赋值

```
s1 = "oeasy"
s2 = s1
print(id(s1))
print(id(s2))
print(id(s1) == id(s2))
```

- 将s1的值 
	- 赋给s2
- s2 所指向的 内存地址
	- 就是s1 所在的内存地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241102-1730531133742)

### 图解

- 地址是 `同一个`
	- 两个变量 都指向了 `这个` 地址
	- 完成了 变量的`复制`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2686345/uid1190679-20241027-1729996500670) 

- 为什么要
	- 用 变量 
	- 对 `另`一个变量 赋值 呢？

### 指向

- 比如 要让 
	- 香蕉 和 苹果 价格`相同`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2866306/uid1190679-20241024-1729775666499) 

- 可以 将 苹果的价格
	- `赋给` 香蕉
	- 价格就`一样`了

- 如果 此时
	- 对s2 再赋`新`值 呢？

### 重新赋值

```
s1 = "oeasy"
s2 = s1
print(id(s1))
print(id(s2))
print(id(s1) == id(s2))
s2 = "o2z"
print(id(s1))
print(id(s2))
print(id(s1) == id(s2))
```

- 将 'o2z' 赋给 s2 后
	- s2引用的 内存地址 `变`了
	- s1引用的 `没`变

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2866306/uid1190679-20241102-1730531162820) 

### 再图解

- 用变量 给变量赋值
	- 就和 用字面量 给变量赋值一样

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2686345/uid1190679-20241028-1730104853387) 

- 变量复制 真的很`神奇`！！！
	- 也许 您 问了 
	- 这 神奇在 `哪儿`呢？🥸

### 自我复制

- 生命的基本特征
	- 就是 `自我复制`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727405234160)

- 从 `变量` 的 自我复制
	- 到 `程序` 的 自我复制
	- 再到 `硬件载具` 的 自我复制

- 机器 逐渐 具有生命
	- 变成 具身智能
	- Embodied Artificial Intelligence

### 速度

- 而且 通过软件
	- 完成复制
	- 速度 比 生物快太多了
- 很快就会有
	- 100个副本
	- 可以干活了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727405357477)

- 甚至 矩阵 
	- 完成 交互和融合
	- 速度惊人

### 声明变量

- 声明 a 是个 变量 
	- 并赋值为1
- a 是个 
	- 数字类型 变量 
		- 引用地址 
			- 9788960
		- 通过 id(a)得到
	- 地址里 
		- 存的值 是1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659153020848)

- 声明 b变量
	- 并且把 a所指向变量 的 地址
	- 赋给 容器b
- 变量b 
	- 类型 与a`相同`
	- 引用地址 也与a`相同` 
- a 和 b
	- 引用 `同`一个 地址
	- 此地址 存的值 是1
- 如果 把2 
	- 再赋给a 呢?

### 重新赋值

- 对a重新赋值后 
	- a 引用了 `新`地址 (9788992)
	- b 依然引用 `老`地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658633203622)

- 可以 对两个变量 
	- 一起 赋值 吗？

### 试一试

- 动手试一试

```
a = b = 3
```

- 可以吗？

### 连等赋值

- 一行之中
	- 可以给 
	- 多个变量赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658633592267)

- 这就相当于 `两次赋值`
	1. 先算`右`边的等号
		- b = 3
		- 将 3 赋给 b
	2. 再算`左`边的等号
		- a = b
		- 将 b 赋给 a

- `两`个等号
	- `两`次 赋值
- 如果 所赋的值 `很大` 呢？

### 两个等号

- 这次 
	- 所赋的值 `很大`
	- 不在 常用地址范围 中 
	- 属于 `边远`地址
- 但是 
	- a和b 所指向的地址 
	- 仍然 是 `同一个`地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681562807934)

- 逗号分隔 
	- 输出两个变量的方式叫做
	- pack
	- 打包

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2866306/uid1190679-20241029-1730169752936) 

- 能否 给
	- 打好包 `两个` 变量
	- 赋 `不同`的 值 ？

### 同一行 赋不同值

- 在 等号`两`边 `都`加上逗号
	- 变量名 加上逗号
	- 要赋的值 `也`加上 逗号  

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230513-1683983355859)

- 这种情况 要经过 
	- unpack
	- 解包过程
	- 将(4, 5)进行解包
		- 解成 4和5
		- 分别赋给 a和b

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2866306/uid1190679-20241029-1730169832874)
 
- 除了 `变量` 之`外`
	- 导入的模块 `也`有`地址`吗?

### 模块类型

```
import time
type(time)
```

- time的类型是
	 - module
	 - 模块


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2866306/uid1190679-20241028-1730109678092) 

- 模块 也有`地址`吗？

### 模块地址

- import time之后
	- 观察 id(time) 

```
id(time)
```

- 模块
	- module
	- 模块 也有自己的地址

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2866306/uid1190679-20241028-1730109752257) 

- 除了 变量 和 模块
	- 函数(function) 有 `地址` 吗?

### 函数 地址

```
id(print)
id(ord)
id(chr)
id(id)
```

- 函数 也有 地址
	- 唯一标识

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716248870845)

- 还有什么也有地址吗？

### 更多

```
id(range)
id(type)
id(int)
id(str)
```

- 为什么 这哥几个
	- 数值 这么小?

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716248927065)

- 他们 属于 `什么`类型 呢？

### class 类型

```
type(type)
type(int)
type(str)
type(range)
```

- 他们本身就是
	- 类型
	- type

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716252223228)

- 回忆一下 
	- 这个 range怎么
	- 输出ASCII码表？

### 黑暗森林

```python
for num in range(0, 128):
    if num % 8 == 0:
        print()
    print(chr(num), end="\t")
```

- 遍历了ascii码表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695095058569)

### 总结

- 这次我们 了解了 
	- `变量`赋值
	- `连等`赋值
	- `解包`赋值
- 所有对象 
	- 变量 variable
	- 模块 module
	- 函数 function
	- 类 class
	- 都有 自己所属的 类型
	- 也都 在内存中 引用 唯一位置(id)
	- 这些数字 组成了 python系统

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240924-1727170867043)

- 现在 已经声明了 `哪些`变量 ?🤔
	- 可以 `查` 吗?🤔
- 我们下次再说！👋
