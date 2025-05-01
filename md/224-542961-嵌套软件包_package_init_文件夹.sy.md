---
show: step
version: 1.0
enable_checker: true
---

# 自定义命名空间(namespace)

## 回忆

- 上次进入系统类库的位置
	- /usr/lib/python3.8
- 编写我们自己的oeasy.py
	- 这个文件就是一个模块
	- 这个模块可以在游乐场和py文件中被导入(import)
	- 导入后模块执行主程序
- 还有什么其他方式可以定义模块吗？

### 观察类库

- 用tree命令观察类库结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659922764118)

- 确实存在这种层层嵌套的文件夹
- 这方面的帮助在哪呢？

### 手册

- sound下面可以有三个子模块
	- formats
	- effects
	- filters

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659922841848)

- 模块文件夹下面 有
	- `__init__.py`
	- `__main__.py`
- 这怎么理解呢？

### 运行模块

- https://docs.python.org/3/library/__main__.html#main-py-in-python-packages

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659921903564)

- 运行模块
	- 就是运行模块文件夹下的`__main__.py`

### 文件夹的方式

- 首先在类库的位置
	- 建立文件夹o2z 并进入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709292687478)

- 在文件夹中建立`__main__.py`
	- 并且输出
	- 这样o2z文件夹就是一个模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709292781287)

- 导入的时候 执行`__main__.py`
- 那么 `__init__.py` 有什么用吗？

### 初始化

- 尝试写入`__init__.py` 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709293965125)

- 写入后 运行模块
	1. `__init__.py`  完成初始化
	2. 执行 `__main__.py` 作为主函数
- 导入的时候执行哪些呢？

### import

- 进入游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709295395940)

- 导入模块的时候 
	- 执行 初始化  `__init__.py`
	- 但不执行 主函数  `__main__.py`

- 如何理解 init呢？

### initialize

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659926318112)

- initialize 头文字大写

### 入口

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659926346756)

- 目前也泛指开始入口

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659928953764)

- 模块必须要初始化吗？

### 是否必须

- 实验验证

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240302-1709328364713)

- 貌似也不是必须的
- 什么时候初始化呢？

### 重启与初始化

- 导入的包的时候就初始化了
	- 在主函数之前

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709293965125)

- 把系统恢复到最初的状态
	- 重新进入最初状态之后就需要初始化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659929151788)

- 目前也泛指各种模块和空间
	- 初始化数组
	- 初始化对象
	- 初始化磁盘空间
	- 初始化某个模块

- 那么文件夹形式的模块
	- 做成一层层的吗? 
	- 嵌套 模块 可以么？

### 构建 

- 这种一层层的文件夹嵌套
- 就构成了 软件的 
	- 包
	- 软件包(package)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659929700846)

- 建立这样的文件结构
- 可以运行吗？

### 运行

- 确实是可以运行的
- 顺序是
	- 先初始化(initialize)org
	- 再初始化(initialize)org.oeasy
	- 最后运行org.oeasy.oeasy_module
	- 把相关的`__init__.py` 编译成了pyc文件
	- 加载到python虚拟机当中
	- 依次执行的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659929780649)

- 是一层层 从外往里 初始化的

### 游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659929917946)

- 如果我的oeasy_module不是一个py文件
	- 而是一个文件夹可以么？

### module folder(模块文件夹)

- 导入包(package)的时候会先执行`__init__.py`
- 一层层从上向下执行
- 直行到新的模块文件夹的时候
- 也是先执行模块文件夹下的 `__init__.py`初始化这个module
- 然后运行模块文件夹下的`__main__.py`作为主程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659930724746)

- 在游乐场什么情况呢？

### 游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659930935506)

- 游乐场中也是依次导入包(package)
- 依次执行`__init__.py`
- 究竟应该如何理解package呢？

### 软件包

- package就是把东西打到bag里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659931283777)

- 荷兰语也叫做baggage

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659931531630)

- 在软件领域如何理解呢？

### 软件领域中的package

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659931229572)

- 把软件分门别类
- 放到一个个文件夹中
- 就是打包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659931584921)

- 每个包都得初始化(initialize)
- 告诉python这个一个包(package)
- 包里面可以有包
- 可以嵌套多层

### 总结
- 我们这次了解了包(package)
- 一个文件夹初始化(initial)了之后就是一个包(package)
- 包(package)里面可以有更细化的包
- 模块(module)
	- 可以是一个py文件
	- 也可以是一个包
	- 包一定要有初始化
		- `__init__.py`
- 导入包的时候
	- 依次执行`__init__.py`
- 包和模块复杂了之后没有文档就很无从下手
- 可以给我们的模块做文档么？🤔
- 我们下次再说👋

