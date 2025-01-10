---
show: step
version: 1.0
enable_checker: true
---

# 查看进程

## 回忆上次内容

- 进程查询
	- `ps -lf` 查看 本终端相关的 进程信息
	- `ps -elf` 查看 所有进程的 信息
- 杀死 进程
	- `kill -9 PID` 给进程发送死亡信号
- 后台 运行
	- `nohup python3 show.py>>s.log &`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671714081126)

- 这些进程之间 是什么关系呢？🤔

```python
#!/usr/bin/python
i = 0
import time
while True:
    i = i + 1
    print(i, "===", time.asctime())
    time.sleep(1)
```

### 具体查询

```
python3 sleep.py >> s.log &
```

- zsh进程相关的 3 个进程
  - zsh
    - 当前的 shell环境
	- zsh进程
  - python3 sleep.py
	- 输出时间的python程序
  - ps -lf
	- 查询进程的ps进程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712063821729)

- 先 输出重定向到process
	- 再打开process

```
ps -lf > process
vi process
```
- 可以查看到
	- 这进程之间有父子关系


### 父子关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671712744001)

- `pid` 是指进程的 `id`
  - **p**rocess **id**
- `ppid` 是指 **父**进程 **id**
  - **p**arent **p**rocess **id**
- `ppid` 是 `pid` 的爸爸 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674823224324)

- 进程有多大呢？

### 进程大小

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671712744001)

- `ps` 和 `python3` 
	- 都是 `zsh`的子进程
- python3这个进程 
	- 占内存大小(SZ)
       - 4860 个 Page
       - 每个 page 大概 1K
	   - 总共 4.8M+ 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210311-1615454528781)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681551427153)

- python3.8 这个文件
  - 不是本身 已经 5.8M 了
  - 内存 里面 4.3M

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674825130894)

- 对了
	- 还导入了time模块(module)

### time

- 除了 基础部分(内建 模块函数)之外
  - print()
  - ord()、chr()
  - int()、hex()、bin()
- 还有 新加载的部分
  - `sleep.py`
  - `import` 进来的 `time` 这个 `module`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674825310755)

- time属于内建(built-in)的module

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681551649658)

- 这多出来的字节从哪里来的呢？

## 总结

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
	- 每个进程大概 4M+ 内存

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230127-1674825130894)

- 内存里面长什么样子呢？？🤔
- 我们下次再说！👋
