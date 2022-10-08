---
show: step
version: 1.0
enable_checker: true
---

# 返回值

## 回忆

- 上次完成了一个多参数的函数
- 多个参数形成一个参数列表
- 调用时
	- 这些参数会依次序进行参数赋值
	- 进行相加操作
	- 把最终的和作为函数的返回值给到print
	- print完成调用过程
- add函数是将2个参数求和
- 如果我想要将2个参数求差会如何呢？🤔

### 计算(cal)

```
def cal(a, b):
    return a + b

def cal(a, b):
    return a - b

print(cal(1, 2))
```

- 结果是-1
- 应该如何理解

### 汇编理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662298804741)

- 定义了两个函数
- 都给了cal这个变量名
- 第二次把第一次给覆盖了
- 这种覆盖叫做重写(overwrite)

### 重写

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662298931834)

- 在原来变量a的值1的正上方(over)
- 写下(write)的值就是overwrite
- 重写
- 新的将原来的是覆盖(override)了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662298940409)

- 函数也是一样
- 新函数将旧函数覆盖了
- 旧函数也就消失了
- 如果函数名相同
	- 但是参数列表不同会如何呢？

### 参数数量不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662299227146)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662299245077)

- 虽然参数数量不同
- 但是新函数还是会覆盖掉原来的函数
- python可以根据参数的不同而重载(overload)函数么？

### 重载

```
pip install pyoverload pycamia
```

- 通过注释方式
- 注册这个@overload装饰器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662299717263)

- 结果正常

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662299767233)

- 实现了函数重载(overload)
- 还有什么思路么？

### 参数默认值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662300163837)

- 第三个参数默认为0
- 加与不加一个样
- 好像也行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662299767233)

### 总结

- 我们学习了两种函数的模式
- 重写(override/overwrite)
	- 函数名相同、参数也相同
	- 就是覆盖写
	- 就是新的覆盖旧的
- 重载
	- 函数名相同、参数不相同
	- 通过引入相关的包
	- 通过注释完成重载的工作
	- 调用时会根据参数进行调用
- 我们回到最最简单的add函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662300294322)

- 观察他的字节码形式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659869359889)

- print函数中调用了add函数
- 函数还可以嵌套调用么？🤔
- 我们下次再说👋

