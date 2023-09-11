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
	- 比如 当前时间？⏰

### 搜索代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613827429497)

- 百度`python3 + 输出时间`

### 抄写代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613861789161)

- 第一句 
  - `#`号后面的都是注释
	- 注释的是 
		- 文件的默认打开方式
		- 并不执行的
		- 可以忽略的
- 第2句是`import time`
  - import 是什么意思来着？
  - 可以在游乐场里 找到吗？

### 搜索

- 先help()
	- 进入 帮助模式
- 进入之后
	- 提示符从>>>
	- 变成了help>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633663659846)

- 然后搜索 import

### 查找帮助
- 在 python3 解释器 
	- 环境查找帮助
- import 是导入一个 module 模块包
	- port是港口 
	  - import 原意是导入、进口
	  - export 是导出、出口
	  - 感觉和航海历史有关

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613862028290)

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674213108310)

- import 
	- 导入
- 导入的东西 是模块(modules)
	- 那什么 又是模块(modules)?

### 啥 是modules？

- modules 就是导入的模块
	- time 是 一个具体模块(module)的名称
- 我们可以
  - <kbd>q</kbd>退出 import的帮助
	- 回到 帮助模式
  - 先查一下 都有些什么 topic

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664114145750)

- import(导入) 其实是一个 topic(主题)
- modules(模块) 也是一个topic(主题)
- 输入主题的名字 
	- 就能 查到topic主题相关的 帮助手册
- 在 帮助模式下 输入modules

### modules

- 查看所有的 modules

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613862532753)

- python 之所以强大
	- 就是因为 各种 模块(modules) 好用
	- 各种模块 有统一的 包管理器
	- 直接import 就可以 调用库的接口
	- 所有复杂的实现细节 都被藏了起来
- 就像我们曾经导入的
	- `__hello__`
- 啥 都不用想
	- 用 就完事了

### 照抄

- 比如 这次的 time
	- 确实可以 在modules中找到
	- 如下图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220311-1646959538999)

- 根据 例程
	- 直接打上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664114320442)

- 这个time.time()可以用吗？

### 啥是 time

- `import` 就是导入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664114503398)

- 导入模块 之后
	- 就会在 全局变量中出现 这个模块的Name
- `time` 就是被导入的 `module` 的名字
  - 导入了的`module`
	- 就进入了 作用域(scope)
	- 就能用
  - 没导入的`module`
    - 就进不了 作用域(scope)
    - 就不能用
	- 就NameError

- time包 导进来了
	- 如何调用 函数方法 呢？

### 方法

- 先看看
	- 这个模块中有什么方法
- 还是用 dir函数
	- 给dir 一个参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647596799322)

- <span style="color:red;border:1px solid  red">time</span>模块(module)里面
	- 有很多 函数(function)
	- 确实有个叫<span style="color:green;border:1px solid green">time</span>的函数

### 函数调用 

- <span style="color:red;border:1px solid  red">time</span>.<span style="color:green;border:1px solid green">time()</span>
  - 调用<span style="color:red;border:1px solid  red">time</span>这个`module`里面的
	- <span style="color:green;border:1px solid green">time</span>这个函数
  - 可以 输出 当前时间
- 前提是 导入了time包
	- 导入了<span style="color:red;border:1px solid  red">time</span>这个`module`后
	- 才可以用<span style="color:red;border:1px solid  red">time</span>.<span style="color:green;border:1px solid green">time()</span> 这个函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647596628222)

- 为什么 我们以前用 `print()` 函数的时候
	- 啥 `module` 都不用导入
	- 直接 就能用 呢？

### 内置函数

- print 是 builtins 这个包(module) 里的
  - builtins 这个包(module) 天生就已经被导入了
	- built-ins么？！
  - 内置就是本来就搁在里面了
  - 里面的函数 属于 builtin(内置) function(函数)
  - 什么都不用导入 直接就能用的函数
- 现在 已经 学过
	- 哪些 内置函数 了呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613862803990)

- 不要翻页
	- 需要你回忆一下
	- 看能回忆出几个？

### 内置函数列表

- 函数不少
	- help()
	- int()
	- chr()
	- bin()
	- hex()
	- ord()
	- print()
- 都是内置的函数
	- 在下图中找一找

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221007-1665145744185)

- 这些
	- 都不需要`import` 任何 `包(module)`
	- 直接 就能用的
- 好像 还遗漏了 一个函数
	- 是哪个？🔍

### time 包(module)怎么用

- 先查询 官方帮助
	- 没有发现 可行的例子
	- 什么不会 
		- 就help什么
	- help(time)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613863270165)

- time模块的帮助 实在太长了
	- 去网上 搜索一下例程
	- 在例程基础上 照猫画虎

### 照猫画虎

- 搜到的 这个语句有点复杂

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613827550285)

- 新建show_time.py
- 一点点打
	- 别打错了
- 这是很好的 最初训练
  - 也是 锻炼自信的方法
  - 注意这个 下划线

### 代码

- 可以把代码 复制到剪贴板
	- 再粘贴 过去
- 那将是 堕落的开始
  - 最初的省事儿
  - 会让你 感到失控
  - 不像 自己一个个打出来
	- 那么 踏实

```python
#引入一个包叫time
import time
#得到当前时间的asctime形式字符串
ascii_time = time.asctime(time.localtime(time.time()))
#进行输出
print (ascii_time)
```

- 确实 可以运行
- 可以注意到
	- 小括号 两两配对的关系

- 错误 也是 一种锻炼
  - 锻炼 找错改错的能力
  - 都熟悉之后 再复制粘贴
  - 不要上来 就图省事儿
  - 流汗之后的快乐 才真实！
 
- 我们先去总结一下

## 总结

- 通过 搜索
	- 学会 `import` 导入 `time` 了
- 当前时间 完整写法为
  - asc_time = time.asctime( time.localtime( time.time()))
  - 体会到 第一次跑出时间的成就感 了吗？
  - 自己手打出来的啊！😁😁😁

- 内部函数是在`__builtins__`这个包里面的自带的
  - 比如 quit()
  - 这就是 前面遗漏的函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221007-1665146302633)

- 这一大长串的函数
	- 究竟应该 如何理解呢？？🤔
- 下次再说！👋
