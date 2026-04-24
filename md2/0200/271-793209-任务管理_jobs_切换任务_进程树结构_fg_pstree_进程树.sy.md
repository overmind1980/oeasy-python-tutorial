---
show: step
version: 1.0
enable_checker: true
---

# 查看进程

## 回忆上次内容

- 除了 基础部分(内建 模块函数)之外
  - print()
  - ord()、chr()
  - int()、hex()、bin()
- 还有 新加载的部分
  - `show.py`
  - `import` 进来的 `time` 这个 `module`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674825310755)

- time属于内建(built-in)的module

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681551649658)

- 能看看内存里面具体长什么样子吗？？🤔

### 恢复show.py

```
vi show.py
```

- 恢复show.py

```python
#!/usr/bin/python
i = 0
import time
while True:
    i = i + 1
    print(i, "===", time.asctime())
    time.sleep(1)
```

### 观察pid

- 运行show.py

```
python3 show.py >> s.log &
```

- 观察pid


```bash
ps -o pid,ppid,sz,vsz,rss,cmd
```

- 观察到第一列的pid


 ![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753181001182/wm) 


### 观察 

```
cat  /proc/进程的PID/maps  
```

- 具体位置

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250721-1753107849647) 

- 如果再开一个show.py呢？

### 两个进程

```
python3 show.py >> s2.log &
```

- 我们开两个 `show.py`
	- 都是 后台运行
	- PID 分别是 
		- 367
		- 408

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753181243194) 

- 然后观察到
  - 2个 python进程 内存分配差不多 
	- 都是 9M(RSS)
  - 相互之间是独立的兄弟进程
  - 进程与进程之间是相互隔离
- 如果 再开个终端
	- 再跑几个 show.py
	- 情况又是如何呢？

### 进程层次关系

- 新开终端	
	- 再新开 show.py

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753181422125) 

- 可以看看这些进程关系吗？

### 观察

```
ps -elf
```

- 拉到最后
	- 找zsh和上级的xfce4

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712065320498)

- 祖父是xfce4-terminal
	- 大伯是zsh(252)
		- 家里三个兄弟
	- 二伯是zsh(405)
		- 家里也是三兄弟
- 就像一棵树
	- 可以用树的形式观察吗？

### pstree

```
pstree -h 
```

- 用命令查看这棵进程树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665301722921)

- 可以看到清晰地父子兄弟关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712065700228)

- 原来程序从硬盘读到内存之后
	- 是这样运行的！
- 如果 父进程 挂断
	- 子进程 还存在吗？

### 观察

- 关掉所有的终端窗口

```
ps -elf
```

- 之前的python进程 
	- 都消失了
	- 皮之不存 毛将焉附

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753181705384) 

- 想要 python 进程 不消失
	- 该怎么做呢？

### nohup

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240404-1712190697925)

- 前面加上 nohup 再运行 

```
nohup python3 show.py >> s.log &
```

- 后台运行进程

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753182030055) 

- 关闭当前终端

### 关闭

- 开一个 新终端

```
ps -elf
```

- 新开一个终端 
	- 查看进程

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753182341637) 


- 373 进程(python3 show.py) 
	- 依旧存在
	- 父进程ppid 为 1
	- 没有挂断


- nohup 是什么意思呢？

### nohup

- 没有挂断
	- 不因为 所在终端窗口的关闭 而关闭

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240404-1712190669983)

- nohup运行时候的提示怎么理解？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753182030055) 

- 错误信息输出被忽略了
	- 怎么才能不被忽略呢？

### 错误信息

- nohup 不会挂断
	- >> s.log 标准输出流 追加输出到s.log
	- 2>&1 错误信息 输出到标准输出流
	- & 后台运行

```
nohup python3 show.py >>s.log 2>&1 &
```

- 可以有什么更好 控制进程的方法吗？

### 后台 多任务查询jobs

- 重启 整个蓝桥环境
	- 开三个进程 都在后台运行

```
jobs
```

- 可以用jobs 
	- 查看当前终端后台的任务

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712064017699)

- 可以 把任务 
	- 切换到前台 吗

### 将任务切换到前台

- fg 可以
	- 将 待切换的任务
		- 前面有+号的 3#job
	- 切换到 前台

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753183078894)

- 屏幕卡住了 想把这个进程挂起

### 挂起

- <kbd>ctrl</kbd> + <kbd>z</kbd>

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753183209524) 

- 终端 又回到 可以输出的状态了

```
jobs
```

- 3任务 挂起


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753183287104) 

- 可以切 1#job 到前台 吗？

### 指定任务 进行切换

```
fg %1
```

- 可以用 fg 加参数的方式 切换进程
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 挂起进程

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753183363708) 

- 2号进程 还没挂起

### 挂起

```
fg %2
```

- 三个进程都挂起了 suspended

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/793209/uid1190679-20250722-1753183487411) 

- 其中的+、-号
	- 是什么意思呢？

### +、-号
- +(加号)
	- fg默认的 下一个job
- -(减号)
	- 刚从前台退出的 job
- 空白
	- 其他的 job

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712064975808)

- 如果 不想让 进程
	- 挂起(suspended)
- 而是 希望 进程
	- `后台`(background) 继续运行 呢？

### bg

- bg 和 bg %1
	- 可以 让进程在后台 继续运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712065231553)

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
- 运行多个 `python3 show.py` 的话
	- 各个进程独立
	- 各占内存
- 切进程 很好用
	- 不过 运行进程的时候
		- 总是 满屏刷时间
- 可以 `固定位置`
	- 刷时间 吗？🤔
- 我们下次再说！👋
