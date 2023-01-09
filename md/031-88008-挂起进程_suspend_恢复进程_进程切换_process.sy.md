---
show: step
version: 1.0
enable_checker: true
---

# 查看进程

## 回忆上次内容

- 上次修改了 `$PATH` 路径
    - 把当前用户(shiyanlou)的宿主文件夹(`~`) 
    	- 添加到 `$PATH` 中
    - 这样文件夹中的 `sleep.py` 就可以被找到
    - 于是就可以被执行了
- 还可以把配置 `$PATH` 的脚本
   - 放到 `zsh`的配置文件(`~/.zshrc`) 中
   - 配置 `~/.zshrc` 就可以
		- 设置 `zsh` 环境下默认的 `$PATH`
- 在当前路径运行 `sleep.py`
  - 在 `python` 程序第 1 行
	- 声明打开方式为 python3
  - 在 `/usr/bin` 找到 `python3`  
	- 从硬盘调用到内存
	  - 成为一个进程
		- 不断输出时间
	  - <kbd>ctrl</kbd>+<kbd>c</kbd>结束进程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665299270427)

- 我想看到 `python3` 这个进程
	- 可能吗？🤔

### 进行搜索

- 如果我想查看进程
	- 也需要运行相应的进程查看命令`ps`
	- 但是如果 `sleep.py` 持续输出时间
	- 我是没有办法运行`ps`命令的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613901469592)

- 我需要把 `sleep.py` 转到后台运行
	- 然后查询进程信息

### 切到后台

- 切换的方法比较简单
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 
		- 把`当前进程` 从 `前台` 
		- 切换到 `后台`并暂停
	- 简单来说就是不给他用cpu了
	- suspended(挂起了)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613901550053)

- 可以把后台进程切换回前台吗？

### 前后台切换 

- 所谓把 `进程` 切换到`后台` 
	- 就是停止不断把时间输出到标准输出流
		- sleep.py这个进程从前台切换到后台并暂停
	- 而且把控制权交回给shell
		- 可以继续输入命令了
- 那能否反过来？
	- 把进程从 `后台`(background) 
	- 切换到 `前台` (foreground)呢？ 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613901683816)

- `fg` 
	- 怎么理解fg呢？

### fg

- foreground的意思就是
	- 离观察者更近的前景

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221221-1671629388932)


- fore的意思是前面的
	- before 在前面的
	- first 最前面的第一个
	- former 曾经的
	- forth 向前
	- forward 向前进
	- far 前进的太多了就远了
	- further 比远还要进一步的
	- 象声词
	- 词根来自*per

### *per

- 象声词
	- 来自于投掷

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221221-1671629678882)

- pro-词根
	- prohibit = pro + forbid 事先禁止
	- provide = pro + view 事先看过
	- promise = pro + mission 事前承诺使命
	- promote 促进
	- profit 利润
	- project 投影
	- process 步骤、进展


- 在计算机中
	- process也指进程
	- 内存里面的一段空间

### foreground

- `f`ore`g`round(前台)
	- `fg` 命令把 `后台` 进程放回 `前台`
	- 把挂起的进程重新又放到前台
	- cpu又可以给这个进程用了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221221-1671630856221)

- 但是这个我怎么知道他到后台是否暂停了呢？

### 挂起

- 将show_time.py挂起后
	- 重新编辑show_time.py
	- 每行输出一个数字
	- 数字自增

```python
#!/usr/bin/python
i = 0
import time
while True:
	i = i + 1
    print(i, "===", time.asctime())
    time.sleep(1)
```

- 保存并退出

### 恢复

- 恢复刚才放到后台并暂停的show_time.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665457056222)

- 没有在前面加上标号数字
- 这是为什么呢？🤔
- 明明已经保存修改了呀？🤔

### 进程

- 因为我们启动 python3 show_time.py 的时候
	- 是在修改之前
	- 从硬盘读取 show_time.py 
		- 放入内存的时候
	- 还没有被修改成
		- 要输出数字编号	
	- 这个进程在内存中
		- 始终还是原来调用时的样子
		- 也就是修改前的样子
- 我们在硬盘上文件的修改
	- 对已经运行了的进程不起作用
- 那怎么办？

### 重启进程

- 先将进程放回前台
	- 再<kbd>ctrl</kbd> + <kbd>c</kbd> 
	- 结束这个进程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665457225703)

- 最后重新运行
	- python3 show_time.py
- 这样硬盘中修改了的python文件
	- 就会被作为新进程重新载入内存
	- 新修改就生效了
- 这个<kbd>ctrl</kbd> + <kbd>z</kbd> 
- 真的会暂停进程吗？

### 暂停

- 运行程序后
	- 挂起进程
	- 等待一段时间
	- 恢复进程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665457508870)

- 还是从5开始	
	- 没有在后面偷偷跑
- 如果我就想让这个进程
	- 在后台偷偷跑呢？

### bg

- 先<kbd>ctrl</kbd> + <kbd>z</kbd> 挂起进程
	- 然后运行 bg 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665458219534)

- 程序继续跑起来
- 而且不断输出到标准输出流
- 甚至连<kbd>ctrl</kbd> + <kbd>c</kbd> 都无法结束进程了
- 这可怎么办呢？

## 总结

- 进程前后台切换
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 把当前进程切换到后台并暂停
	- 用 `fg` 可以把进程再切回前台
	- 用 `bg` 可以让进程在后台持续运行
- 但是问题就是根本停不下来！
- process 真的就 
	- 不断pro - pro - pro
	- 或者说foreword - foreword - foreword 跑起来了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221221-1671631515885)

- 我想让他后台悄悄跑，可以吗？🤔
- 我们下次再说！👋
