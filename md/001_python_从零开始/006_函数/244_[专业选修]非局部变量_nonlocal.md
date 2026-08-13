---
show: step
version: 1.0
enable_checker: true
---

# 非局部变量(nonlocal)

## 回忆

- 上次学习了嵌套的函数定义
	- 在outer里面又定义了一个函数inner
	- 可以在outer里用程序调用inner

- 这个嵌套层次可能有很多很多层
- 简单来说就是
	- 外部定义的内部可见
	- 内部定义的外部不可见
	- 内外同名的内层屏蔽外层
- 如果我就想让inner函数读写outer函数中的局部变量
- 应该如何呢？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660967646106)

### 简化函数

- 内部优先
	- 如果内部有同名变量
	- 就把外部的给shadow了
- 在inner中
	- 其中g是全局的
	- l是inner本地的
	- c既不是全局的
	- 也不是inner本地的
	- 而是上层函数闭包 (closure)的

```
g = 0

def outer():
    c = 1
    def inner():
        l = 2
        print(g,c,l)
    inner()

outer()
```

| 变量名|类型|英文|简称|
|---|---|---|---|
|global_temp|全局|global|g|
|outer_temp|闭包|closure|c|
|inner_temp|局部|local|l|


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240907-1725720114800)

- 如果c变成一个全局的呢？

### 运行

```
g = 0
c = 1
l = 2

def outer():
    c = 3
    l = 4
    def inner():
        l = 5
        print("inner====",g,c,l)
    inner()
    print("outer====",g,c,l)

outer()
print("global====",g,c,l)
```

- 在inner中
	- c是闭包的
	- 能影响到outer
- 在outer中
	- c是局部的
	- 不能影响到全局

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725765863151)


### 结果

```
g = 0
c = 1
l = 2

def outer():
    c = 3
    l = 4
    def inner():
        c = 5
        l = 6
        print("inner====",g,c,l)
    inner()
    print("outer====",g,c,l)

outer()
print("global====",g,c,l)
```

- 这个时候
	- c其实成了inner中的local
	- 影响不到 outer
	- 更影响不到global

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725763157702)

- 但我就想让他影响到？

### 查找

- 这个应该离着global的帮助文档不远

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660963839490)

- nonlocal声明的变量
- 必须是上一层函数中
	- 已经存在的局部(local)变量

### 正确用法

```
g = 0
c = 1
l = 2

def outer():
    c = 3
    l = 4
    def inner():
        nonlocal c
        c = 5
        l = 6
        print("inner====",g,c,l)
    inner()
    print("outer====",g,c,l)

outer()
print("global====",g,c,l)
```

- 这时候
	- inner中的c 
	- 不是 inner的局部(local)变量 
	- 而是outer中的闭包(closure)变量 
- 简单说就是inner中的c
	- 可以影响到outer

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725763237341)

- 如果在outer中修改
	- 全局变量g呢？

### 嵌套函数里面的权限

```
g = 0
c = 1
l = 2

def outer():
    g = 3
    c = 4
    l = 5
    def inner():
        nonlocal c
        g = 6
        c = 7
        l = 8
        print("inner====",g,c,l)
    inner()
    print("outer====",g,c,l)

outer()
print("global====",g,c,l)
```

- outer中的g
	- 是outer局部的
	- 影响不到全局的g
	- 作用域就在outer里面
- inner中的g
	- 是inner局部的
	- 影响不到outer的g
	- 更影响不到全局的g

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725763392128)

- 如何让inner访问到outer的的g呢？

### 访问

- 和刚才一样
	- 在inner里面
	- 将g声明为nonlocal

```
g = 0
c = 1
l = 2

def outer():
    g = 3
    c = 4
    l = 5
    def inner():
        nonlocal c
        nonlocal g
        g = 6
        c = 7
        l = 8
        print("inner====",g,c,l)
    inner()
    print("outer====",g,c,l)

outer()
print("global====",g,c,l)
```

- inner中的g
	- 是nonlocal
	- 可以访问outer中的g

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725763632379)


- 想要在outer里面控制
	- 最外面的全局变量
	- 该怎么办呢？？


### 回忆global

- 说outer函数里的g
	- 是global的

```
g = 0
c = 1
l = 2

def outer():
    global g
    g = 3
    c = 4
    l = 5
    def inner():
        nonlocal c
        g = 6
        c = 7
        l = 8
        print("inner====",g,c,l)
    inner()
    print("outer====",g,c,l)

outer()
print("global====",g,c,l)
```

- 这下outer中的g
	- 不再是本地(local)的了
	- 是 全局的(global)的g了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725764314711)

- 如果想要
	- outer中的g是内部的
	- inner中的g是全局的呢？

### 修改

- 删掉outer中对于g是global的声明
	- 放到inner里

```
g = 0
c = 1
l = 2

def outer():
    g = 3
    c = 4
    l = 5
    def inner():
        global g
        g = 6
        c = 7
        l = 8
        print("inner====",g,c,l)
    inner()
    print("outer====",g,c,l)

outer()
print("global====",g,c,l)
```

- 现在
	- inner中的g是global的
	- outer中的g是outer本地的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725764542578)

- 可以让inner、outer中的g
	- 都变成 全局的(global)的 吗？

### 尝试

```
g = 0
c = 1
l = 2

def outer():
    global g
    g = 3
    c = 4
    l = 5
    def inner():
        global g
        g = 6
        c = 7
        l = 8
        print("inner====",g,c,l)
    inner()
    print("outer====",g,c,l)

outer()
print("global====",g,c,l)
```

- 可以的outer和inner中的g
	- 都是global的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725764593225)

- 如果inner里面的g是nonlocal的呢？

### nonlocal

```
g = 0
c = 1
l = 2

def outer():
    global g
    g = 3
    c = 4
    l = 5
    def inner():
        nonlocal g
        g = 6
        c = 7
        l = 8
        print("inner====",g,c,l)
    inner()
    print("outer====",g,c,l)

outer()
print("global====",g,c,l)
```

- 不能访问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240908-1725760400671)

- inner里想要访问 
	- outer中的闭包的g
- 但是out中的g
	- 不是闭包(closure)变量
	- 而是全局(global)的 
	- 根本找不到closure的g

### global

- nonlocal不能声明已经声明为全局(global)的变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1660964368332)

- 三个作用域
	- 类型！！！
local 本地可见 (默认)
	- global 全局可见
	- nonlocal 非本地可见(上一层函数也可见)

| 变量名|类型|英文|简称|
|---|---|---|---|
|global_temp|全局内|global|g|
|outer_temp|闭包内|closure|c|
|inner_temp|本地内|local|l|

### 总结
- 我们研究了nonlocal




