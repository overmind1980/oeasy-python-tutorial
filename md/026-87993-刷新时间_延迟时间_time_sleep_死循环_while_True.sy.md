---
show: step
version: 1.0
enable_checker: true
---

# 刷新时间

## 回忆上次内容

- time 是一个 `module`
	- import 他可以做和时间相关的事情
	- time.time() 
		- 得到当前时间戳
	- time.localtime() 
		- 得到本地时间元组
		- local为本地
	- time.asctime() 
		- 得到时间日期字符串
		- asc为ascii
- 简略的写法为
    - asc_time = time.asctime()
- 在`time.asctime()`中
	- time是导入的module
	- asctime 是 time 这个 module 里面的函数
- 现在我还想要自动刷新时间
	- 怎么办？🤔

### 写 py 文件

- 要自动延迟
	- 首先新建一个 `show_time.py`

```shell
#编辑文件
vi show_time.py
```

- 写文件并运行
	- 把输出时间的语句
		- import time
		- print(time.asctime())
	- 写进 show_time.py 文件 中

### 保存并运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670402398268)

- `:w|!python3 %`
	- 保存并执行当前文件
	- 是可以执行的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647606865254)

- 怎么才能刷新呢？

### 搜索`python+延迟时间`

- 立即行动
	- Now is better than never.
	- 做好过不做

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613828880628)

- 不断
	- 寻找
	- 打开
	- 尝试

### 观察代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613828968027)

- 搜到的例子有点小错误
	- 主要是 while 后面的条件
	- 修改后的正确代码在下一页

### 抄写并修改

- 新建一个sleep.py
	- 先抄下来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670403053132)

1. 引入了 `time` 包
2. i 是一个数字变量
    - 一开始的时候等于 `1`
3. 注意 `while` 这一行
	- `while` 的循环条件是` i<=3`
    - 行尾有个半角冒号
		- 缩进的部分是循环体
		- 要循环运行三次
		- 下面的3行都用<kbd>tab</kbd>空了 4 个字符
		- 这3行都是 while 要执行的循环体
		- 注意每行的缩进一定是 4 个字符
- time.sleep(1)
  - time 是 time 包
  - sleep(1)是函数调用
	- sleep是函数名 
		- 小括号对应函数调用
		- 参数是 1
	- 应该是愣(sleep) 1 秒的意思
- 可以让他死循环吗？

### 死循环

- 把原来 i <= 3 中的 i
	- 修改为 2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665479090973)

- 确实实现了死循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665479143076)

- 不过 2 < 3 怎么理解呢？

### 直接问

- 直接去游乐场问问python

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665479234266)

- Python说是True
	- 是真的
	- 2 < 3 可不就是真的么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665479267929)

- 也确实可以实现死循环


### 进行改造

- 把 2 < 3  直接修改为 True:
	- 相当于开了一个死循环

```python
i = 1
while True:
	print(i)
	i = i + 1
	time.sleep(1)
```

- 原来只能循环 3 次
  - 现在无限循环
- 主要原因就是 while 的条件改成了 True
  - while 后面缩进的3句话将无限循环
  - 注意 `True` 的首字母大写
- `:w|!python3 %`开始循环
  - <kbd>ctrl</kbd>+<kbd>c</kbd>跳出循环回 vi
- 如何理解这个sleep呢？

### 查看帮助

- help(time.sleep)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664547050943)

- 延迟一个秒数
- 秒数是浮点型的数字
- 可以把sleep的时间改成i么？


### 进行改造

```python
i = 1
while True:
	print(i)
	i = i + 1
	time.sleep(i)
```

- 可以看看延迟时间的变化
	- 😄
- 看起来还是sleep(1)更合适

### 整合代码

- 现在我们就需要把两个py文件整合到一起
  - 上面的sleep.py能够提供一个能延时的循环结构
  - 下面的 test.py 能够得到当前时间并输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221007-1665148472369)

- 可以让他每隔一秒输出一下时间么？
	- 具体怎么整合看你的了！！！

## 总结

- 通过搜索发现
	- time中有函数可以延迟
	    - `time.sleep(1)`
	- 还可以让程序无限循环
	  - `while True:`
- 现在需要两个程序的整合
	- 循环延迟 + 输出时间 = 循环延迟输出时间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664547170898)

- 怎么整合？🤔
- 我们下次再说！👋
