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

- 声明变量、导入模块
	- 都会 让变量 从无到有
- 能让 变量 
	- 从有到无 吗?🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658882883586)

### 有生就有死

- 万物 有生就有死
	- 所谓 出生入死

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727400188067/wm)


- 一出生的 时候
	- 失去了 无的状态
	- 就注定着 往死亡去了

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
	- 具体数值为整数1
	- 存在一个具体地址里
- 后来
	- a重新赋值之后
	- 就不再是整数1了
	- 变成了浮点数1.0
- 类型 从 原来的int型
	- 变成了 float型了
- 能否删除变量呢？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727401344074)

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
	- 既不是变量
	- 也能查询
- 那他是到底什么？

### 直接帮助

- 此外还可以在游乐场直接进帮助


```python
#查看帮助
help()
```

- 使用help()函数
	- 寻求帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939697394)

- 注意提示符变了
	- 不再是>>>
	- 而是help>

### 关键字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939863099)

- del 是一个
	- keyword
	- 关键字
- 关键字
	- 也叫保留字
	- 有专门用处的字符串

### del的帮助

- 定义好的变量 
	- 本来可见

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939982441)

- del 之后
	- 从本地活着全局的明子空间中移除 
	- 就再也不可见了

### 退回游乐场

- 可以<kbd>quit</kbd>退回到游乐场帮助
	- 从游乐场帮助状态 help>
	- 回到游乐场状态>>>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663940053334)

- 本地 目前 都 
	- 有些什么变量 呢？

### del前后

- del之前
	- 有个a

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716254442423)

- del之后 
	- 再找a就是NameError了

- del 能删除模块吗?

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
	- 在dna的驱动下
	- 孕育生长

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240602-1717290926214)

- 也在dna的驱动下
	- 衰老死亡

### 模型迭代

- 人脑也是一个深度学习的神经网络
	- 方生方死 
	- 方死方生

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240602-1717291006029)

- 感知的痕迹一直还在
	- 需要新的六根刺激
	- 产生关联

### Guido在python

- 从最初的孤军奋战
	- 到后来的燎原大火

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240602-1717291271348)

- Guido现在已经交出了
	- 大部分文件夹的所有权
	- https://github.com/python/cpython/pull/119611

### 功成身退

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727401845943)

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
		- del
		- 手动给变量 赐死
- del a 赐死之后
	- locals() 
		- 在 当前作用域(scope)内
		- 就 找不到 这个变量 了
	- 也就是 说a死了😱
- 当然 我们还可以 
	- 让a重生
	- 感觉 自己成 
	- 变量造物主 了
- 变量名 是 `随便`起的吗?🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727403445406)

- 下次再说👋
