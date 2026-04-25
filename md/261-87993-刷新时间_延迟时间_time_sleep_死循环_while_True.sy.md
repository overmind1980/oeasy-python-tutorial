# 持续报时

## 回忆上次内容

- 通过 搜索
	- 学会 `import` 导入 `time` 了
- 并且 输出时间日期
  - time.asctime()
  - 体会到 第一次跑出时间的成就感 了吗？
  - 自己动手打出来的啊！😁😁😁

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681307056623)

- 可以让python 持续报时吗？🤔

### 写 py 文件

- 回忆上次的 `show.py`

```shell
#编辑文件
vi show.py
```

- 编辑show.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681306939292)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681306950007)

- 报时 是 可以执行的
- 怎么 才能持续报时 呢？

### 搜索`python+持续输出时间`

- 立即行动
	- Now is better than never.

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681998075478)

- 不断
	- 寻找
	- 打开
	- 尝试

### 观察代码

- 根据搜到的例子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681998253825)
 
- 开始编写代码

### 分析代码

- 第1句
	- 引入了 `time` 包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681998487209)

- 什么是 import来着？

### 重温import

- port
	- 港口
- disport 
	- 在港口海边玩
- sport 
	- 在港口海边运动
- portage 
	- 两河港口之间运输

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674213108310)

- import 
	- 导入
- 导入的是
	- 模块(module)
- module 应该
	- 如何理解呢？

### module词源

- mode 
	- 模式
- mold
	- 模具

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674214010187)

- module
	- 模块

### 分析代码2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681998487209)

- 第2-4句
	- 是一个while循环语句
	- 什么是while循环语句呢？

### while循环语句

- while循环
	- 一个循环执行代码的结构
	- 只要满足循环条件
	- 就会持续执行循环体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681998754698)

- 红框中的就是 循环语句
	- 循环条件 是 True
		- 这是一个 死循环
		- 会一直 循环下去
		- 除非遇到 <kbd>ctrl</kbd>+<kbd>c</kbd>
- 黄框中的是 循环体
	- 是每次循环具体执行的代码
- time.sleep(1) 
	- 是什么意思呢？

### 延迟函数

- :!python3 
	- 去游乐场查询一下time.sleep函数
	- help(time.sleep)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674222867831)

- time.sleep(1)
  - time 是 time 包
  - sleep(1)是函数调用
	- sleep是函数名 
		- 小括号对应函数调用
		- 函数的参数是 1
	- 应该是愣(sleep) 1 秒的意思
- 如果不楞这一秒会如何呢？

### 不用延时

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712034780203)

- 将延时那句用#给作为注释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681999736057)

- 1秒钟会报很多次时间

### while循环语句

- 继续观察黄框内的循环体
- time.sleep(1) 
	- 是楞1秒

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681998754698)

- print(time.asctime())
	- 输出当前的时间
- 黄框中的循环体
	- 是while语句的 循环体
	- 隶属于 while True 的
	- 要在while True的基础上
	- 向右缩进4个空格
- 这个程序可以在shell中运行吗？

### 在shell中运行

- :wq
	- 保存并退出vim

```
python3 show.py
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681999513186)

- 用<kbd>ctrl</kbd>+<kbd>c</kbd>停下来


## 总结

- 这次循环输出了当前时间
	- 循环用的是while循环
	- 延时用的是time.sleep(1)
	- 输出用的是time.asctime()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681999593246)

- python3 show.py可以运行程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664547170898)

- 想直接只输入文件名(./show.py)
  - 不输入python3
  - 就运行sleep.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230125-1674651374990)

- 可以吗？🤔
- 下次再说！👋
