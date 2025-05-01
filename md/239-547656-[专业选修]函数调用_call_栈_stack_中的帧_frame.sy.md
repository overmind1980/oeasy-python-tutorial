---
show: step
version: 1.0
enable_checker: true
---

# 函数调用(call)栈(stack)中的帧(frame)

## 回忆

- 上一次我们理解了工业化
	- 工业化追求的是效率和利润
	- 工业化确实可以大幅度提高利润
	- 工业化是时代发展趋势
- 各行各业都在工业化
	- 制造业
	- 建筑
	- 厨师
- 工业化、信息化大潮下
	- 厨师这个古老的行业如何自我变革
	- 适应变化
	- 以今之道以御今之有
- 还是要回答一个问题
- 函数究竟是如何实现层层调用的呢？

### 调用

- 经常听说函数调用是用的帧栈
- 我们到系统(sys)里面搜一下帧(frame)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661152049090)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661152056530)

- 在f内部可以查看到一个帧(Frame)对象
- 这个对象有什么属性呢？

### 帧的属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661152147294)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661152220733)

- 再搜索属性名

### 找到手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661152256559)

- 这个东西也是可以inspect的一个code object
- 就像
	- 函数(function)
	- 模块(module)

### 查看帧细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661152770370)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661152777166)

### 上一帧

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661153462505)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661153468142)

- 可以看到当前帧对象
	- 帧位于尾号8dd0
- 当前帧的代码对象(code object)
	- 位于尾号cc90
	- 写于于stack.py的第2行
- 当前帧对象的代码对象是不是就是函数f的代码对象呢？

### 验证

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661153580336)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661153586520)

- 确实是
- 那么我可以通过当前帧得到
	- 函数的代码对象
	- 函数代码对象的属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661154006495)

### 获得函数属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661154178185)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661154163355)

- 这些属性可以通过帧对象直接获得么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661154276774)

### 直接获得

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661154527807)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661154535985)

- 可以从帧(frame)对象上直接获得函数信息
- 甚至可以获得局部(local)变量的值

### 代码位置信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661155155829)

- 这俩属性有啥区别

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661155221139)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661155228920)

- lineno是源代码的位置
- lasti是字节码指令的索引
- 如何理解24

### 汇编级理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661155378643)

- 上次的位置
- 其实就在当前帧这里
- 所以就是本句的位置24
- 还有个属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661155502403)

### 试试
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661155587098)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661155594405)

- 调用f()的位置
- 可不就是第7行么
- 还可以往前捯么？

### 往前捯

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661155696188)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661155703342)

- 捯到头了
- 不过可以继续往深了调用(call)

### 结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661155996786)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661156223440)

- 这调用结构像什么？

### 调用(call)结构

- 这个调用结构像一层层摞起来的盘子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661156368968)

- 所以也叫做调用(call)栈(stack)
- 栈有什么特点呢？
	- 新来的放上面
	- 新走的从上面拿
	- 最先放进去的最后拿出来
	- First In Last Out
- 那么盘子对应什么呢

### 帧(frame)
- 盘子对应栈(stack)上的的帧(frame)
- 什么是帧(frame)呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661159116892)

- 为建筑准备木材
- 一个画框就是一帧
- 所以也被描绘为一帧画面


### 栈(stack)帧(frame)

- 调用(call)栈(stack)上的的帧(frame)
	- 分成三块
	- 局部变量
	- 返回地址
	- 形参变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661159173083)

- 蓝色的画矩形函数
- 调用了绿色的划线函数
- 具体返回地址啥意思呢？

### 汇编

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661159739970)

- 输出g函数调用帧的上一帧的上次指令位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661159697508)

- 20
- 观察f函数指令(instructions)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661159869468)

- 上次执行到了20行
- 调用g函数去了
- 现在返回了个None
- 22行弹栈
- 然后24行继续打印

### 总结
- 我们这次研究了调用(call)栈(stack)的帧(frame)
	- 调用函数是一层层调用的
	- 函数的帧(frame)被放到了一个栈(stack)结构中
- 调用的时候建立一个
	- 参数(parameter)
	- 返回地址(return address)
	- 局部(locals)变量
- 放在栈上
- 然后去执行函数的代码对象
- 执行完了返回的时候
	- 回到调用函数(caller)调用的位置
	- caller的局部变量、形式参数(parameter)都还在自己的帧上
	- 继续执行caller的指令
	- 直至结束
- 我们就是这样
	- 一层层地完成抽象和封装
	- 然后层层嵌套调用的
- 究竟应该如何理解抽象和封装呢？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659945591290)

- 我们下次再说👋

