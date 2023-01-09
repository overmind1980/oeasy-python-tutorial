---
show: step
version: 1.0
enable_checker: true
---

# 输出时间

## 回忆上次内容

- `print`函数
  - 有个默认的 `end参数`
	  - `end参数` 的值可以是任意字符串
	  - `end参数` 的值会输出到结尾位置
	  - `end参数` 的默认值是 `\n`
  - 如果`end`是空串(`end=""`)
    - 意味着输出后不自动换行
	- 我可以手动在输出字符串的末尾加上换行符(`\n`)
- 这样的话
    - 我不但可以控制输出时结尾是否换行
	- 还能控制具体在哪里换行
- 我还想输出点别的
- 比如说当前⏰时间？🤔

### 搜索代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613827429497)

- 百度`python3 输出时间`

### 抄写代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613861789161)

- `#`号 后面的都是注释
  - 注释的是文件的默认打开方式
  - 并不执行的
  - 可以忽略的
- 第2句是`import time`
  - import 是什么意思来着？
  - 可以在游乐场里找到吗？

### 搜索

- 先进如 help()帮助模式
- 进入之后提示符从>>>
- 变成了help>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633663659846)

- 然后搜索 import

### 查找帮助
- 在 python3 解释器环境查找帮助
- import 是导入一个 module 模块包
	- port是港口 
	  - import 原意是导入、进口
	  - export 是导出、出口
	  - 感觉和航海历史有关

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613862028290)


- 导入的东西是模块(modules)
	- 那什么又是模块(modules)?

### 啥 是modules？

- modules 就是导入的模块
	- time 是一个具体模块(module)的名称
- 我们可以
  - <kbd>q</kbd>退出import的帮助回到帮助模式
  - 先查一下都有些什么 topics

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664114145750)

- import(导入) 其实是一个 topic(主题)
- modules(模块) 也是一个topic(主题)
- 输入主题的名字 
	- 就能 查到主题 相关的帮助手册
- 在帮助模式下输入 modules

### modules

- 查看所有的 modules

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613862532753)

- python 之所以强大就是因为各种 模块(modules) 好用
	- 各种模块有统一的统一的包管理器
	- 直接import就可以调用库的接口
	- 所有复杂的实现细节都被藏在了背后
- 就像我们曾经导入的
	- `_hello_`
- 啥都不用想
	- 用就完事了

### 照抄

- 比如我们这次要用到的 time
	- 确实可以在modules找到
	- 如下图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220311-1646959538999)

- 根据例程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664114320442)

- 直接按照例程打上
- 这个time.time()可以用吗？

### 啥是 time

- `import` 就是导入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664114503398)

- 导入了模块之后
	- 就会在全局变量中出现这个模块的Name
- `time` 就是被导入的 `module` 的名字
  - 导入了的`module`
	- 作用域(scope)有这个模块的Name
	- 就能用
  - 不导入的`module`
    - 作用域(scope)没有这个模块的Name
    - 就不能用
	- 就NameError

- time包导进来了
	- 如何调用函数方法呢？

### 方法

- 首先看看这个模块中都有什么方法
- 还是用dir函数
- 不过这次给dir一个参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647596799322)

- <span style="color:red;border:1px solid  red">time</span>模块(module)里面
	- 有很多函数(function)
	- 确实有这么一个叫<span style="color:green;border:1px solid green">time</span>的函数

### 函数调用 

- time.time()
  - 就是调用<span style="color:red;border:1px solid  red">time</span>这个`module`里面的<span style="color:green;border:1px solid green">time</span>这个函数方法
  - 可以输出当前时间
- 前提是导入了time这个包
	- 导入了<span style="color:red;border:1px solid  red">time</span>这个`module`之后
	- 才可以使用<span style="color:red;border:1px solid  red">time</span>.<span style="color:green;border:1px solid green">time()</span>这个方法得到时间戳

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647596628222)

- 为什么以前我们用的 `print()` 这个函数方法
	- 啥 `module` 都不用导入
	- 直接就能用呢？

### 内置函数
- print 是 builtins 这个包(module) 的 builtin(内置) function(函数)
  - builtins 这个包(module) 天生就已经被导入了
	- built-ins么？！
  - 内置就是本来就搁在里面了
  - 什么都不用导入就能用的里面的函数
  - 我们已经学过哪些内置函数了呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613862803990)

- 不要翻页
- 需要你回忆一下
- 看你能回忆出几个？

### 内置函数列表

- 函数不少
	- help()
	- int()
	- chr()
	- bin()
	- hex()
	- ord()
	- print()
- 找一找都是内置的函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221007-1665145744185)

- 这些都
	- 不需要`import` 任何 `包(module)`
	- 直接就能用的
- 好像还遗漏了一个重要的函数
	- 是哪个？

### time 包(module)怎么用

- 我们先查询官方帮助
	- 没有发现可行的例子
	- 什么不会就help什么
	- help(time)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613863270165)

- 这个模块的帮助实在太长了
	- 去网上搜索一下例程
	- 就在例程基础上照猫画虎

### 照猫画虎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613827550285)

- 这个语句有点复杂
- 新建一个show_time.py
- 一点点打，别打错了
  - 这是很好的最初锻炼
  - 也是锻炼自信的方法
  - 注意这个下划线

### 代码

- 也可以复制到剪贴板，粘贴过去
  - 这是堕落的开始
  - 最初的省事儿
  - 会让你感到失控
  - 不像自己一个个打出来的那么踏实

```python
#引入一个包叫time
import time
#得到当前时间的asctime形式字符串
ascii_time = time.asctime(time.localtime(time.time()))
#进行输出
print (ascii_time)
```

- 确实可以运行
- 可以注意到
	- 小括号的两两配对的关系

- 错误也是一种锻炼
  - 会锻炼找错改错的能力
  - 都熟悉之后再复制粘贴
  - 不要上来就图省事儿
  - 流汗之后的快乐才真实！
 
- 我们先去总结一下

## 总结

- 通过搜索
	- 我们学会 `import` 导入 `time` 了
- 完整写法为
  - asc_time = time.asctime( time.localtime( time.time()))
  - 体会到第一次跑出时间的成就感了吗？
  - 自己手打出来的啊！😁😁😁

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221007-1665146302633)

- 内部函数是在`__builtins__`这个包里面的自带的
  - 比如 quit()
  - 这就是前面遗漏的函数
- 这一大长串的函数究竟应该如何理解呢？？🤔
- 下次再说！👋
