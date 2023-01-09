---
show: step
version: 1.0
enable_checker: true
---

# 查看进程

## 回忆上次内容

- 上次先进程查询
	- `ps -elf` 查看所有进程信息
	- `ps -lf` 查看本终端相关进程信息
- 杀死进程
	- `kill -9 PID` 给进程发送死亡信号
- 运行多个 `python3 show_time.py` 的话
	- 各个进程独立
	- `python3 show_time.py` 大概 8+M
	- 各占内存
- 这些进程之间是什么关系呢？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671714081126)


### 具体查询

- zsh进程相关的 3 个进程
  - zsh(当前的 shell 环境)
	- zsh(shell本身)进程
  - /usr/bin/python3 /home/shiyanlou/sleep.py
	- 输出时间的python程序
  - ps -lf
	- 查询进程的ps进程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671712648561)

- 这进程之间有父子关系

### 父子关系

- `pid` 是指进程的 `id`
  - **p**rocess **id**
- `ppid` 是指 **父**进程 **id**
  - **p**arent **p**rocess **id**
- `ppid` 是 `pid` 的爸爸 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671712744001)

- `ps` 和 `python3` 都是 `zsh` 的子进程
- python3 这个进程占内存是 SZ
  - 4860 个 Page
  - 每个 page 大概 4K
	- 总共 10+M 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210311-1615454528781)

- python3 这个文件不是本身才 4.3M 么
  - 都装进内存也就是 4.3M
  - 都装进内存页没有 10+M 呀？

### 10+M 的原因

- 除了基础的部分(内建模块函数)之外
  - print()
  - ord()、chr()
  - int()、hex()、bin()
- 还有新加载的部分
  - `sleep.py`
  - 还有 `import` 进来的 `time` 这个 `module`

### 实际分配

```bash
ps -o pid,ppid,sz,vsz,rss,cmd
```

- SZ 是欲分配的内存用页(4K)来当单位
- VSZ 是欲分配的内存用 K 来当单位

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210313-1615642537014)

- RSS 非交换区的内存用 K 来当单位
- 也就是说实际这个东西也就 8+M

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671712895516)

### 后台多任务查询jobs

- 还可以用jobs查看当前的任务

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671713020577)

- `jobs` 可以看到后台的任务
	- 我们可以切换任务到前台吗

### 将任务切换到前台

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671713148329)

- fg 可以
	- 将最后一个任务(3#job)
	- 切换到前台
- 可以切2#job吗？

### 指定任务进行切换

- 我们可以用 fg 加参数的方式
	- 把指定编号的进程恢复到前台
	- 注意前面的 1193、1527、1542 分别是他们的 pid

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671714271792)


- 这就是前后台切换
	- 用 <kbd>ctrl</kbd> + <kbd>z</kbd> 把当前进程切换到后台
	- 用jobs查询当前shell的后台任务
	- 用ps可以查看进程
	- 用kill可以结束进程
	- 用 <kbd>ctrl</kbd> + <kbd>c</kbd> 结束当前前台的进程
- jobs这个词怎么来的呢？

### jobs

- 词源字典
	- 凯尔特语（gob）、（gop）
	- 原意就是口（the mouth）
	- 中古英语就变成（jobbe）
		- 一堆（lump）
		- 一口（mouthful）
	- 再演变而成一件工作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671718454772)

- work
	- 是长时期稳定的工作
	- 全日制的工作
- jobs
	- 是临时突发的工作
	- 零工
	- 偷窃也叫jobs
- 如果两个jobs的话
	- 占用内存会变小吗？

### 两个进程

- 我们开两个 `show_time.py`
- PID 分别是 422、514

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220824-1661329859382)

- 然后观察到
  - 每个 python进程 实际分配差不多都是 9M(RSS)
  - 相互之间是独立的兄弟进程
  - 但是从逻辑上都属于zsh的子进程
	- 先运行的进程在非交换区的内存占用略高
- 如果开多个xfce 进程情况又是如何呢？
- 再打开几个xfce终端

### 进程层次关系

- ps -elf
	- 拉到最后
	- 找zsh和上级的xfce4

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220325-1648159564442)

- 祖父是xfce4-terminal
	- 大伯是zsh(252)
		- 家里三个兄弟
	- 二伯是zsh(405)
		- 家里也是三兄弟
- 就像一棵树
	- 可以用树的形式观察吗？

### pstree

- pstree -h 命令查看这棵树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665301722921)

- 可以看到清晰地父子兄弟关系

## 总结

- 进程前后台切换
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 把当前进程切换到后台并暂停
	- `jobs` 查看所有作业
	- 用 `fg` 可以把后台进程再切回前台
		- `fg %1` 可以把指定的任务切回前台
	- 用 `bg` 可以让进程在后台运行
- 进程查询
	- `ps -elf` 查看所有进程信息
	- `ps -lf` 查看本终端相关进程信息
	- `kill -9 PID` 给进程发送死亡信号
	- `pstree -h` 可以查看进程树
- 运行多个 `python3 show_time.py` 的话
	- 各个进程独立
	- `python3 show_time.py` 大概 7M
	- 各占内存
- 这个切进程很好用
	- 不过运行进程的时候总是满屏刷时间
- 可以固定在屏幕的某个位置刷新时间吗？🤔

- 我们下次再说！👋
