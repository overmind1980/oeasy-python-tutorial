---
show: step
version: 1.0
enable_checker: true
---

# 进程前后台切换

## 回忆上次内容


1. 我们最开始使用python3. sleep.py运行文件
2. 后来想要直接sleep.py运行
	1. 修改sleep.py首行 添加打开方式
		- `#!/usr/bin/python3 `
	2. 给程序所有者，也就是当前用户添加执行权限
		- `sudo chmod u+x sleep.py`
3. 再后来想要在任何文件夹中直接运行sleep.py
	1. 用管理员权限 将sleep.py拷入/usr/bin
	2. 控制/usr/bin/sleep.py的执行权限
	3. 但是感觉/usr/bin重文件太多
4. 想要将~(/home/shiyanlou)设置为环境路径$PATH
	1. 修改环境路径值
		- `export PATH=$PATH:~`
	2. 但是重启终端后，配置会消失
5. 先要设置~/.zshrc
	1. 在~/.zshrc最后一行写下
		- `export PATH=$PATH:~`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665299270427)

- <kbd>ctrl</kbd>+<kbd>c</kbd>会停止 进程
	- 如何才能进程继续跑呢？🤔

### 前后台切换 

- 所谓把 `进程` 切换到`后台` 
	- 将sleep.py这个进程 
		- 从前台 切换到 后台 
		- 并暂停 输出时间
- 把控制权 交回给shell
	- 可以 继续shell操作 了
- 能否把控制权切回去呢？
	- 把进程从 `后台`(background) 
	- 切换到 `前台` (foreground)呢？ 

### fg

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674785077476)

- `fg` 
	- 可以把进程 从后台 
		- 切回 前台
	- 怎么理解 fg呢？

### fg

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674783116537)

- foreground的意思是
	- 离观察者 更近的前景

### 词源

- fore的意思是前面的
	- before 在前面的
	- first 最前面的第一个
	- former 曾经的
	- forth 向前
	- forward 向前进
	- far 前进的太多了就远了
	- further 比远还要进一步的
	- foreground 前景

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221221-1671629388932)

- 象声词
	- 词根来自*per

### *per

- 象声词
	- 来自于投掷

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221221-1671629678882)

- 往前面扔

### pro

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
			- 占内存里面的一段空间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230201-1675249103597)

- 前景foreground 和 进程process
	- 都来自 象声词根
	- 在这里 又分别代表 不同含义
	- 彼此配合
	- 真的有趣

### foreground

- `f`ore`g`round(前台)
	- `fg` 命令把 `后台` 挂起(suspended)的进程 
		- 放回 `前台`(foreground)
	- cpu 又可以 跑这个进程了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221221-1671630856221)

- 但是 我怎么知道进程
	- 在后台 是否暂停了呢？

### 挂起

- 将sleep.py 再次挂起后
	- 重新 编辑sleep.py
	- 每行 输出一个数字
	- 数字 自增

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

- 将后台的sleep.py
	- 切换回 前台

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674785202733)

- 看不到新加的标号数字
- 这是为什么呢？
	- 明明已经保存修改了呀？🤔

### 进程

- 因为我们启动 python3 sleep.py 的时候
	- 是在修改之前
- 那时候 
	- 从硬盘读取 sleep.py 
		- 放入了内存
	- sleep.py 还没有被 修改成
		- 要输出 数字编号	
	- 这个进程(process)在内存中
		- 始终还是 原来调用时的样子
		- 也就是 修改前的样子
- 在硬盘上 新作的修改
	- 对已经运行了的进程 不起作用
- 那 怎么办？

### 重启进程

- 先将进程放回前台(foreground)
	- 再<kbd>ctrl</kbd> + <kbd>c</kbd> 
	- 结束这个进程(process)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665457225703)

- 最后重新运行
	- python3 sleep.py
- 这样硬盘中 修改后的sleep.py
	- 就会被作为新进程 重新从硬盘载入内存
	- 新修改 就生效了
- 这个<kbd>ctrl</kbd> + <kbd>z</kbd> 
	- 真的会 暂停进程 吗？

### 暂停

- 运行 程序后
	- 挂起 进程
	- 等待 一段时间
	- 恢复 进程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674785767877)

- 还是 从3开始	
	- 没有 在后面偷偷跑
- 如果我 就想让sleep.py
	- 在后台 偷偷跑 呢？

### bg

- 先<kbd>ctrl</kbd> + <kbd>z</kbd> 挂起进程
	- 然后运行 bg

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665458219534)

- 程序继续跑起来
	- 不断输出到 标准输出流
- 甚至连
	- <kbd>ctrl</kbd> + <kbd>c</kbd>都无法 结束进程了
	- <kbd>ctrl</kbd> + <kbd>r</kbd>都无法 挂起进程了
- 这可 怎么办 呢？

## 总结

- 进程前后台 切换
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 把当前进程切换到后台并暂停
	- `fg` 把进程 再`切`回前台
	- `bg` 让进程 在后台 持续运行
- 但问题就是 根本停不下来！
- process 真的就 
	- 不断pro - pro - pro
	- 或者说foreword - foreword - foreword 跑起来了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221221-1671631515885)

- 想让sleep 后台悄悄跑
- 可以吗？🤔
- 我们下次再说！👋
