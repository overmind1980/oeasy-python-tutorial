---
show: step
version: 1.0
enable_checker: true
---

# 查看进程

## 回忆上次内容


- 进程查询
	- `ps -elf` 查看所有进程信息
	- `ps -lf` 查看本终端相关进程信息
	- `kill -9 PID` 给进程发送死亡信号
- 进程前后台切换
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 把当前进程切换到后台并暂停
	- `jobs` 查看所有作业
- 运行多个 `python3 sleep.py` 的话
	- 各个进程独立
	- 各占内存
	- 每个进程大概 10+M 内存

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674825130894)

- 怎么会占那么多内存呢？？🤔

### 观察 
```
cat  /proc/进程的PID/maps  
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674827859172)

- 一直到最后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674827884543)

- 这个细节好多
	- 可以汇总起来吗？

### 实际分配

```bash
ps -o pid,ppid,sz,vsz,rss,cmd
```

- SZ 是欲分配的 内存
	- 用 页(4K) 来当单位
- VSZ 是欲分配的内存
	- 用 K 来当单位

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210313-1615642537014)

- RSS 非交换区的内存 用 K 来当单位
	- 也就是说 实际这个东西 也就 8+M

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674819693419)

### 后台 多任务查询jobs

- 可以用jobs 查看当前的任务

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674819729029)

- 用`jobs`来看 后台的任务
	- 可以 切换任务 到前台 吗

### 将任务切换到前台

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674820218715)

- fg 可以
	- 将 待切换的任务
		- 前面有+号的 3#job
	- 切换到 前台
- 可以切到 2#job 吗？

### 指定任务 进行切换

- 可以用 fg 加参数的方式
	- 把 指定编号的进程 恢复到前台
	- 注意前面的 367、375、383 分别是他们的 pid

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674820540198)

- 其中的+、-号
- 是什么意思呢？

### +、-号
- +(加号)
	- fg默认的 下一个job
- -(减号)
	- 刚从前台退出的 job
- 空白
	- 其他的 job

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674820374139)

- 如果 不想让 进程
	- 挂起(suspended)
- 而是 希望 进程
	- `后台`(background) 继续运行 呢？

### bg

- bg 和 bg %1
	- 可以 让进程在后台 继续运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674820995335)

- 这就是 `前后台`切换
	- 用 <kbd>ctrl</kbd> + <kbd>z</kbd> 
		- 把当前进程切换到后台
	- 用 jobs
		- 查询当前shell的后台任务
	- 用ps
		- 查看进程
	- 用kill
		- 结束进程
	- 用 <kbd>ctrl</kbd> + <kbd>c</kbd> 
		- 结束当前进程
- jobs这个词怎么来的呢？

### jobs

- 词源字典
	- 来自 凯尔特语（gob）、（gop）
		- 感觉到 凯尔特人 选择的工作
			- 只能是 比较边缘化 的

- 中古英语 就变成(jobbe)
	- 一堆(lump)
	- 一口(mouthful)
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
  - 进程与进程之间是相互隔离
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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674828058484)

## 总结

- 进程 前后台切换
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 把当前进程 切换到后台 并暂停
	- `jobs` 查看 所有作业
	- 用 `fg` 可以把后台进程 再切回前台
		- `fg %1` 可以 把指定的任务 切回前台
	- 用 `bg` 可以让进程 在后台运行
		- `bg %1` 可以让指定的任务 回到后台
- 进程查询
	- `ps -elf` 查看所有进程信息
	- `ps -lf` 查看本终端相关进程信息
	- `kill -9 PID` 给进程发送死亡信号
	- `pstree -h` 可以查看进程树
- 运行多个 `python3 sleep.py` 的话
	- 各个进程独立
	- 各占内存
- 切进程 很好用
	- 不过 运行进程的时候
		- 总是 满屏刷时间
- 可以 `固定位置`
	- 刷时间 吗？🤔
- 我们下次再说！👋
