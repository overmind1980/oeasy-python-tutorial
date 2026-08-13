---
show: step
version: 1.0
enable_checker: true
---

# 主控程序

## 回忆上次内容

- 上次把 fruit.py 拆分成了
	- 输入模块 get_fruits.py
	- 主模块 output.py
- 引用模块中变量的时候
	- from 模块(module)的名字空间(namespace)
	  - import 了 a和b
- 最终 
	- 拆分代码 成功！
- 拆成
	- 输入模块
	- 输出模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230529-1685370373197)

- 可以将程序 `再拆分` 吗？
	- 拆成 主控、输入、输出三部分
	- 可以吗？🤔

- 什么是主控模块呢？

### 主控模块

- 就像一个电视遥控器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240208-1707383497272)

- 或者说 一个核心的中控室

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230618-1687046321895)

- 就像 主神经中枢
	- 汇总信息
	- 驱动运动

### 建立主控

- 在vim中 
	- 建立 主控程序
	- 

```
:e main.py
``` 

- 新建一个 main.py 文件
	- 导入 get_fruits、output 两个包
	- 然后运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700661767535)

### 运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231126-1701005564179)

- 运行成功

- 我们跳出具体文件
	- 去观察文件夹结构

### 文件结构

- 可以看到
	- 出现了两个被引用包的 pyc 文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700661868789)

- 位于`__pycache__`文件夹中
	- pyc是什么意思？

### 问ai

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727522632658)

- c的意思是
	- compiled
	- 编译后的
- pyc文件
	- 会作为二进制文件
	- 导入到python虚拟机的

### 顺序过程

- 被引用的功能代码 
	- 可以再细分 
	- 成三块
	  - 输入(数据抓取获得)
	  - 处理(数据清洗处理)
	  - 输出(数据呈现展示)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210816-1629054611474)

- 这是个 
	- `面向过程`的 程序
  - Procedure Oriented Program
- 按部就班 
	- 把复杂的过程
		- 分解成 相对简单明确的模块
    - 每个模块 做自己简单明确的事情
    - 专业分工
    - 提高效率
### 分工明确

- 编程名言 “不要想着怎么重新发明轮子”
	- 轮子有现成的
	- 拿来用就完事了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211020-1634736291247)

- 接下来
	- 我们要把模块分成三块

| 功能 | 作用 | 模块名 |
| --- | --- | --- |
| 输入 | 接收到什么信号 |  get_fruits |
| 处理 | 怎么处理信号 | process |
| 输出 | 最终输出什么信号 | output |

### 整体结构

- 这个结构就是
	- 典型的`面向过程`程序设计方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211018-1634557282787)

- 主控的模块 main.py
	- 其他三个模块 由主控来调用

### 具体步骤

- 三步走

```
vi main.py get_fruits.py process.py output.py
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700662068689)

|文件名|功能|
|---|---|
| get_fruits | 输入水果数量|
| process | 对水果数量求和 | 
|output|  输出最终结果 |


### 主控程序

- main 
	- 主控程序
	- 需要导入 3 个 包
	- 然后依次执行

```python
import get_fruits
import process
import output
```

### 输入模块

- get_fruits 
	- 输入模块
	- 虽然 被main和process 导入了两次
	- 但是 输入数值的部分
		- 只被执行一次
	- 分别对a、b捕获异常
		- 明确 问题所在

```python
try:
    a = input("How many apples do you have?\n")
    a = int(a)
    print("You got " + str(a) + " apples!")
except ValueError:
    print("\33[41merror\33[0m",end="")
    print("your input is invalid!")
    quit()
try:
    b = input("How many bananas do you have?\n")
    b = int(b)
    print("You got " + str(b) + " bananas!")
except ValueError:
    print("\33[41merror\33[0m",end="")
    print("your input is invalid!")
    quit()
```

### 处理模块

- process 
	- 导入 get_fruits 模块后
	- 进行对 模块中的a和b 
		- 进行求和操作

```python
try:
    from get_fruits import a, b
    
    total = a + b
except:
    print("\33[41merror\33[0m",end="")
    print("something wrong with addition!")
    quit()
```

### 输出模块

- output 
	- 不需要导入 get_fruits 模块
	- 导入 process 模块 
		- 得到 求和的结果 process.total 

```
try:
    from process import total
    
    print("You got " + str(total) + "fruits!")
except:
    print("Total is not valid")
    quit()
```

### 测试结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231126-1701005772902)

- 这 思维模式 
	- 就像流水线

### 工业化

> 以福特公司为代表的建立在流水线分工基础上的劳动组织方式和大批量生产模式，极大地提高了劳动生产率，也部分地提高了工人的工资水平和福利待遇，从而使整个社会的消费水平有了大幅度提高。

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230614-1686749636264)

> Workers in a Ford Motor Company factory construct a Model T engine on an assembly line about 1914.

- 铁路警察
	- 各管一段

### 工业化体系

- 分工细化 造就了 
	- 摩登时代
	- 学科体系
	- 医院科室

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230614-1686749648241)

- 人开始有了职业
	- 然后按照职业来训练自己
- 也带来了问题

### 职业化之后

- 接生 本是 非职业的 工作
	- 所有接生婆 都是在实践中摸索
	- 并 最终掌握 接生技术

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727523533257)

- 职业化的 接生医生
	- 没有 原生的 摸索过程
	- 将 摸索过程 具象为 课程体系
	- 完成 培训框架
	- 同时 排斥 没有经过 课程体系认证的 稳婆

### 职业化

- 任何职业 都有类似问题
	- 职业 经理
	- 职业 程序员
	- 职业 摔跤手

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188730/uid1190679-20241128-1732788607833) 

- 实战技击
	- 可能 套路化
	- 成为 职业表演
- 当然 
	- 分工明确 
	- 也 很大好处

## 总结

- 我们细化了主控程序(main.py)
	- 将程序分成三个具体模块

| 功能 | 作用 | 模块名 |
| --- | --- | --- |
| 输入 | 接收到什么信号 |  get_fruits |
| 处理 | 怎么处理信号 | process |
| 输出 | 最终输出什么信号 | output |

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230710-1688949895944)

- 这几个py文件 应该如何调试呢？
- 下次再说！👋
