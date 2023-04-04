---
show: step
version: 1.0
enable_checker: true
---

# 查看进程

## 回忆上次内容

- 上次 把配置 `$PATH` 的脚本
   - 放到 `zsh`的配置文件(`~/.zshrc`) 中
   - 配置`~/.zshrc` 就可以
		- 设置 `zsh` 下默认的 `$PATH`
- 在 当前路径 运行`sleep.py`
  - 在 `python`程序第 1 行
	- 声明打开方式 为python3
  - 在 `/usr/bin` 找到 `python3`  
	- 从硬盘 调用到 内存
	  - 成为 一个进程
		- 不断 输出时间
	  - <kbd>ctrl</kbd>+<kbd>c</kbd>结束 进程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665299270427)

- 我想看到 `python3` 这个进程
	- 长什么样...
	- 可能吗？🤔


### 进行搜索

- 怎么查看进程呢？
	- 运行 `ps`命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674720458570)

- 但是如果 `sleep.py` 持续输出时间
	- 怎么运行 `ps`命令呢？🤔


### sleep.py

```
#!/usr/bin/python3
import time
while True:
	print(time.asctime())
	time.sleep(1)
```

- 我需要把 `sleep.py` 转到后台运行
	- 然后查询进程信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613901469592)


### 切到后台

- 切换的方法比较简单
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 
		- 把`当前进程` 从 `前台` 
		- 切换到 `后台`并暂停
- 简单来说 
	- 就是不给他用cpu了
	- suspended(挂起了)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613901550053)

- 如何理解suspended呢？

### pend

- pend 悬挂
	- pending 悬而未决的
	- impending 
		- im 加强语气
		- impending 迫近的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674721432739)

- pendulum 钟摆

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674721536608)

### depend

- depend
	- de向下
	- 悬挂
	- 悬挂在某物下→靠...支撑→依靠

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674721750590)

- dependable 可依赖的
- dependant 靠他人生活的
- dependence 依靠依赖
- dependency 依靠
- independencen 不依赖 独立

### append

- append
	- ap 附加的
	- 附件

- appendix
	- 附加的、附录、阑尾

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674722083226)

- appendagen
	- 附加物
	- [əˈpendɪdʒ] 
- 可以把后台进程切换回前台吗？

### suspend
- suspend
	- sus- 同sub 从下面来的
	- 从下面悬挂

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674722245741)

- suspended
	- 被挂起的
- suspense
	- 悬而未决的
	- 焦虑

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674739277939)

## 总结

- 进程前后台切换
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 把当前进程
		- 切换到后台并暂停

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674723236471)

- 如何 把进程
	- 切换回 前台 呢？？🤔
- 我们下次再说！👋
