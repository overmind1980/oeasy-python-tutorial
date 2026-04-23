---
show: step
version: 1.0
enable_checker: true
---

# 查看进程

## 回忆上次内容

- 上次了解了suspend挂起的含义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701491570142)

- 我们最初想要的是进程在后台
	- 悄悄运行
	- 可以吗？🤔

### 后台运行

- 直接加一个&
	- 就是后台运行
	- 进程pid为450

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230405-1680704047042)

- 这个程序在后台持续运行
	- 并且持续输出
- 如何结束 这个进程呢？

### 新开终端

- 新开终端
	- 找到这个process的id
	- pid

```
ps -elf
```

- 在新开的终端中执行
	- kill -9 450
	- 可以将进程结束掉

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712061340432)

- 可以让进程后台运行
	- 而且 不输出到屏幕 吗？

### 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671713609483)

- 搜索结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230414-1681437861960)

### 查询手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671713656985)

- lanqiao.cn用的是简版
- 没有manual
- 可以去哪里查询呢？

### 网络查询

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681550839983)

- https://manpages.debian.org/testing/coreutils/nohup.1.en.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681550853617)

### no hang up

- hang up
	- 挂断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240404-1712189979495)

- no hang up
	- 不要挂断 
	- 持续运行

### 后台运行

- 后台运行 不输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712062627314)

- 没有输出 怎么知道
	- 进程在后台持续运行
	- 还是在后台挂起暂停了呢？

### 输出重定向到日志

```
cat s.log
python3 show.py >> s.log &
cat s.log
bg
jobs
cat s.log
```

- `>>` 是
	- 用追加方式 进行输出 重定向
	- 将 原本输出到标准输出流的 文本内容
		- 重定向后输出到s.log

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-17120617218)

- 好像 日志里面没有东西
- 输出重定向失败了？
- 为什么呢？

### 输出的缓存问题

- 默认输出是 
	- 输出到缓存中的

- python3 -u show.py 就可以
	- 不使用缓存
	- 直接输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712062922314)

- 强制 标准输出流 也 同标准错误 一样
	- 不通过缓存 直接输出到 屏幕


### 后台输出

```
python3 -u show.py >> s1.log &
python3 -u show.py >> s2.log &
python3 -u show.py >> s3.log &
cat s3.log
```

- 多个进程 在后台运行
	- 并输出 到日志

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712063038279)

### 拿到前台挂起

```
jobs
fg %2
jobs 
bg %2
jobs
```

- 看到三个进程 
	- 都在后台运行
- 把二号进程 切换到前台

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712063150525)

- <kbd>ctrl</kbd> + <kbd>z</kbd>
	- 将二号进程 切到后台
	- 并挂起
- bg %2
	- 让 二号进程
	- 在后台继续运行

### 总结

- 我们是如何
	- 把程序从前台切到后台
	- 又从后台切回前台的
- 进程控制
  - <kbd>ctrl</kbd>+<kbd>z</kbd>
	- 把当前进程切换到后台运行并暂停
  - jobs
	- 查看当前有多少在后台运行的进程
  - ps
	- 查看更详细的进程信息
  - kill -9 PID
	- 杀死进程
  - fg %1
	- foreground 把后台进程移回到前台
	- %1 把jobs 里面第一个进程移回到前台 
  - bg %1
	- background 让后台进程继续运行
	- bg %1 把jobs 里面第一个进程放到后台运行

### 后台输出

- 这样就可以直接输出文件
	- 不会受到缓存的影响了
- 确实解决了输出的问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712063352623)

- 但 什么是 `标准输出`	
	- 什么 又是 `标准错误输出` 呢？

### stdio

- stdio
	- 0 – stdin (standard input，标准输入)
    - 1 – stdout (standard output，标准输出)
    - 2 – stderr (standard error，标准错误输出) 
	- 2>&1 解释：
		- 将标准错误 2 重定向到标准输出 &1 
		- 标准输出 &1 再被重定向输入到 s.log 文件中
	- 最后的&表示后台运行

### 输出报错信息

```
python -u show.py>test.log 2>&1 &
```

- 红框
	- 将标准输出流 
	- 追加输出到 
		- s.log 
- 绿框
	- 将标准错误流
	- 也输出到 
	- 标准输出流
- 蓝框
	- 当前进程 在后台继续执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712063587062)

- 可以在后台再开几个进程吗？

### 后台进程

```
python3 -u show.py >> s.log &
```

- 方向键<kbd>↑</kbd>可以找到上一条命令
	- 由于没什么错误
		- 所以 2>&1 省略了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712063738676)

- 这些进程 之间
	- 是 什么关系 呢？😜

## 总结

- 进程查询
	- `ps -lf` 查看 本终端相关的 进程信息
	- `ps -elf` 查看 所有进程的 信息
- 杀死 进程
	- `kill -9 PID` 给进程发送死亡信号
- 后台 运行
	- `python3 show.py>>s.log &`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671714081126)

- 这些进程之间 是什么关系呢？🤔
- 我们下次再说！👋
