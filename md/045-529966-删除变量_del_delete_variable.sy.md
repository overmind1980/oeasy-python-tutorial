---
show: step
version: 1.0
enable_checker: true
---

# 删除变量

## 回忆上次内容

- 上次我们了解了 
	- locals函数()
	- 本地的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701171596499)

- 声明变量、导入模块
	- 都会 让变量 从无到有
- 能让 变量 
	- 从有到无 吗?🤔

### 有生就有死

- 万物 有生就有死
	- 所谓 出生入死
	- 一出生的 时候
	- 就注定着 往死亡去了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658882883586)

### 同理

- 变量也是
	- 声明赋值的 时候
	- 也就注定了他会释放

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230715-1689428603206)

- 怎么释放呢？

### 声明和赋值

- 一个变量
	- 在声明之前 是不存在的
	- 声明给变量a了生命
	- 并给变量a 赋了初始值1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658883093145)

- 这样a 
	- 就从无到有了
	- 有了之后
	- 会有什么变化呢？

### 变化 

- `有`生于无
	- 但`有`了 之后
	- 一切就具体了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658883269174)

- 一开始
	- a是一个int型的变量
	- 有个一个具体地址
- 后来
	- a重新赋值之后
	- 就不再是1了
	- 变成了1.0
- 类型 也从 原来的int型
	- 变成了 float型了
- 能否删除变量呢？

### 删除

- del a
	- 就可以 把a从`有`变回到`无`
	- 这个时候 就找不到a了
	- a这个名字 从此不在名字空间中
	- 也就没法 以a的名字 进行编程了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658883391308)

- 这怎么 理解 呢？
	- 什么不会 就 help什么

### 查询手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939601839)

- del
	- 既不是模块
	- 也不是类
	- 更不是函数
- 那他是到底什么？

### 直接帮助

- 此外还可以在游乐场直接进帮助


```python
#查看帮助
help()
```

- 使用help()函数

### 进入游乐场帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939697394)

- 注意提示符变了
- 不再是>>>
- 而是help>

### 关键字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939863099)

- del 是一个关键字
	- keyword

### del的帮助

- 定义好的变量 
	- 本来可见

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939982441)

- del 之后
	- 就再也不可见了

### 退回游乐场

- 可以按<kbd>q</kbd>退回到游乐场帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663940053334)

- 在游乐场帮助中
	- quit()回到游乐场

- 本地 眼下 都 
	- 有些什么变量 呢？

### del前后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716254442423)

- 往生之后 
	- 再找a就是NameError了

- del 删除模块吗?

### 删除模块

1. 原本没有os

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716254565385)

2. import后 就有了os

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716254607288)

3. del后 又没有os了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716254639771)

- 自然规律

### 自然生灭

- 人类个体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240602-1717290926214)

### 模型迭代

- 人脑也是一个深度学习的神经网络
	- 方生方死 
	- 方死方生

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240602-1717291006029)

- 感知的痕迹一直还在

### Guido在python

- 从最初的孤军奋战
- 到后来的燎原大火

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240602-1717291271348)

- Guido现在已经交出了
	- 大部分文件夹的所有权
	- https://github.com/python/cpython/pull/119611
- 好了
	- 去总结吧

### 总结 

- 这次 我们 研究了 
	- 变量的死
	- 有生就有死
	- 原本的死 
		- 是在程序退出的时候
		- 自动执行的
	- 也 可以在运行过程中
		- 手动给变量 赐死
		- del
- del a 赐死之后
	- locals() 
		- 在 当前作用域(scope)内
		- 就 找不到 这个变量 了
	- 也就是 说a死了😱
- 当然 我们还可以 
	- 让a重生
	- 感觉 自己成 
	- 变量造物主 了
- 变量可以随便起名字吗🤔
- 下次再说👋
