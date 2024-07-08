---
show: step
version: 1.0
enable_checker: true
---

# 输出时间

## 回忆上次内容

- `print`函数
  - 有 `end参数`
	  - `end参数` 的值 可以是任意字符串
	  - `end参数` 的值 会输出到结尾位置
	  - `end参数` 的默认值 是 `\n`
  - 如果`end参数`的值 是 空串(`end=""`)
    - 意味着输出后 不自动换行
	- 可以手动在 输出字符串的末尾
		- 加上 换行符(`\n`)
- 这样
    - 不但可以 控制输出时 
    	- 结尾 是否换行
	- 还能控制
		- 具体 在`哪`换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674205435395)

- 我想 输出点 别的🤔
	- 比如 用python 输出当前时间？⏰

### 搜索代码

- 百度`python3 + 输出时间`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613827429497)

- 寻找例程

### 抄写代码

- 找到 一个网页 
	- 这网页 告诉我们
		- 如果想要 输出时间 
		- 需要 这段代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613861789161)

- 第1句 
  - `#`号后面的都是注释
- 第2句
	- `import time`
	-  去游乐场试试

### 具体使用

- 先键入python3
	- 进入游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681306768659)

- `import` 就是导入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664114503398)

- 导入模块 之后
	- 就会在 全局变量中出现 这个模块的Name
- `time` 就是被导入的 模块`module` 的名字
  - 导入了模块`module`
	- 就能用 
  - 没导入的模块`module`
    - 就不能用 
	- 就NameError
- import 是什么意思来着？

### import

- import 是导入一个 module 模块包
	- `import time`
- 除了time模块之外
	- 还可以导入其他的模块吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230418-1681825429614)

- import 这个单词怎么来的呢？
- port是港口 
  - import 原意是导入、进口
  - export 是导出、出口
  - 感觉和航海历史有关
- port 的词源如何呢？

### port 词源

- port
	- 港口
- disport 
	- 在港口海边玩
- sport 
	- 在港口海边运动
- portage 
	- 两河港口之间运输
-  deport [dɪˈpɔːt]
	- 驱逐 
- portfolio [pɔːrtˈfoʊlioʊ]
	- 文件夹
	- 作品集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674213108310)

- import 
	- 导入
- python3如何理解import呢？

### 游乐场的理解

- 在游乐场中help()
	- 进入帮助模式
- 键入keywords
	- 查询所有关键字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230418-1681825843722)

- 在帮助模式下
	- help>下
		- 键入import
		- 查询import关键字的帮助

### import

- 导入的东西 是模块(modules)
	- 那什么 又是模块(modules)?

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681304687117)

- 按<kbd>q</kbd>退出import的帮助
- 再按下回车退回到游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230418-1681826098916)

### 啥是modules？

- help

- 在帮助模式下
	- help>下
  - 先查一下 都有些什么 topic

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230418-1681826372290)

- 键入大写的MODULES查询
	- 关于模块的帮助

### 模块

- import m
	- 就是导入m模块
- 导入了m模块
	- 就可以使用m模块中的函数和变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230418-1681826417575) 

- 有些模块是解释器内建的模块
- 还有些模块位于在文件中
- 能否查询所有的module呢？

### modules

- 在游乐场中键入小写的modules
	- 查看所有的 modules

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613862532753)

- 这里面有很多现成的模块
	- 一个模块就像一个工具箱
		- 封装了很多相关的工具
			- time包 封装了 时间的函数
			- requests包 封装了 http请求的函数
			- random包 封装了 随机的函数

- python 之所以强大
	- 就是因为 各种 模块(modules) 好用
	- 各种模块 有统一的 包管理器
	- 直接import 就可以 调用库的接口
	- 所有复杂的实现细节 都被藏了起来
- 就像我们曾经导入的
	- `__hello__`
	- 导入了就会自动输出hello world
- 啥 都不用想
	- 调用 就完事了

### 找寻

- 这次的 time
	- 确实可以 在modules中找到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220311-1646959538999)

- 根据 例程
	- 直接打上time.time()
- 可以用吗？

### 例程结果

- 程序可以跑通

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681304955999)

- 但是结果是小数
	- 看不懂
- time 这个module里面还有什么函数吗？

### 找到函数

- 输入time.
	- 键入<kbd>tab</kbd>可以列出
		- time模块中所有的函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681305119771)

- 其中的asctime是什么意思？
- 去试试

### time.asctime

- 尝试调用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681305283797)

- 以字符串的形式展现时间日期

- help(time.asctime)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681305223474)

- 这回的结果
	- 可以看懂了
	- asctime 就是 
	- ascii形式的 时间
	- 时间字符串

### 编辑 show.py

- quit()从游乐场退出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681306836755)

- vi show.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681306939292)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681306950007)

## 总结

- 通过 搜索
	- 学会 `import` 导入 `time` 了
- 并且 输出时间日期
  - time.asctime()
  - 体会到 第一次跑出时间的成就感 了吗？
  - 自己动手打出来的啊！😁😁😁

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230412-1681307056623)

- 可以让python 持续报时吗？🤔
- 下次再说！👋
