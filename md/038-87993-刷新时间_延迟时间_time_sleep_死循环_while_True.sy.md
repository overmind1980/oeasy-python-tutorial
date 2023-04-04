---
show: step
version: 1.0
enable_checker: true
---

# 刷新时间

## 回忆上次内容

- time 是一个 `module`
	- import time 可以做 和时间相关的 事情
	- time.time() 
		- 得到 当前时间戳
	- time.localtime() 
		- 得到 本地时间元组
		- local为本地
	- time.asctime() 
		- 得到 时间日期字符串
		- asc 为 ascii
- 简略的写法为
    - asc_time = time.asctime()
- 在`time.asctime()`中
	- time 是导入的module
	- asctime 是 time这个module里的 函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674221782677)

- 现在 想要自动刷新时间
	- 怎么办？🤔

### 写 py 文件

- 要自动延迟
	- 首先新建一个 `show_time.py`

```shell
#编辑文件
vi show_time.py
```

- 把 输出时间的语句
	- import time
	- print(time.asctime())
- 写进 show_time.py 文件 中
- 尝试 运行

### 保存并运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670402398268)

- `:w|!python3 %`
	- 保存并执行当前文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647606865254)

- 报时 是 可以执行的
- 怎么 才能刷新 呢？

### 搜索`python+延迟时间`

- 立即行动
	- Now is better than never.

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613828880628)

- 不断
	- 寻找
	- 打开
	- 尝试

### 观察代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613828968027)

- 搜到的例子 
	- 有点小错误
	- 错误主要是 while后面的 条件

### 抄写并修改

- 新建一个sleep.py
	- 先抄下来
1. 引入了 `time` 包
2. i 是 一个数字变量
    - 让 i 等于 `1`
3. 注意 `while` 这一行
	- `while` 的循环条件是` i<=3`
    - 行尾 有半角冒号
		- 缩进的部分 是循环体
		- 要 循环运行三次
		- 下面的3行 
			- 都用<kbd>tab</kbd>进行缩进
			- 都是 while 要执行的循环体
			- 注意 每行的缩进
				- 4 个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670403053132)

- time.sleep(1) 如何理解？

### 延迟函数

- time.sleep(1)
  - time 是 time 包
  - sleep(1)是函数调用
	- sleep是函数名 
		- 小括号对应函数调用
		- 参数是 1
	- 应该是愣(sleep) 1 秒的意思

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674222867831)

- 可以 让循环
	- 无穷无尽 吗？

### 死循环

- 把原来 i <= 3 中的 i
	- 修改为 2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665479090973)

- 确实 实现了
	- 无限 循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665479143076)

- 不过 2 < 3 怎么理解呢？

### 直接问

- 直接去游乐场问问python

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665479234266)

- Python说是True
	- 是真的
	- 2 < 3 可不就是 `真`的 么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665479267929)

- 也确实
	- 可以 实现无限循环


### 进行改造

- 把 2 < 3  直接修改为 True:
	- 注意T大写
	- 开启无限循环

```python
i = 1
while True:
	print(i)
	i = i + 1
	time.sleep(1)
```

- 原来 只能循环 3 次
  - 现在 无限循环
- 主要原因就是 while 的条件
	- 改成了 True
- while 后面缩进的3句话
	- 将无限循环
- `:w|!python3 %`开始循环
  - <kbd>ctrl</kbd>+<kbd>c</kbd>跳出循环回 vim
- 再查sleep帮助呢？

### 再查帮助

- help(time.sleep)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664547050943)

- 延迟 一个秒数
	- 秒数 是 浮点型的数字
	- 可以 把sleep的时间 改成`i`么？

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

- 现在 需要把两个py文件 整合到一起
  - 上面的sleep.py
	- 提供一个 延时循环结构
  - 下面的 test.py 
	- 得到 当前时间并输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221007-1665148472369)

- 想要 每隔一秒 输出时间一次...
	- 具体怎么整合 
	- 看你的了！！！

## 总结

- 通过搜索发现
	- time中有延迟函数
	    - `time.sleep`
	- 还可以让程序无限循环
	  - `while True:`
- 现在需要 整合两个程序
	- 循环延迟输出时间 = 循环延迟 + 输出时间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664547170898)

- 怎么整合？🤔
- 下次再说！👋
