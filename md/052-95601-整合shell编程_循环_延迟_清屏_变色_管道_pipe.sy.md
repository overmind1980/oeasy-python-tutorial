---
show: step
version: 1.0
enable_checker: true
---

# 整合shell编程

## 回忆上次内容

- 用`\r`
  - 可以 让输出位置 回到行首
  - 原位 刷新 时间
- 如果想要的是 大字符效果
  - 需要使用 figlet
  - 并且把
	- 循环
	- 延迟
	- 都去掉

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665302645886)

- 还想要 刷新大时间
	- 这可能吗？🤔

### 建立 脚本

- 得熟悉一下 `shell`
- 先新建 一个test.sh
	- vi test.sh

```shell
python3 show_time.py
python3 show_time.py
python3 show_time.py
```
- 看起来 就是
	- 把时间 输出了 3 次

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672316158139)

- 可以执行么？

### 尝试执行

- 注意 执行细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672316158139)

- 在vim的正常状态下
- 用`:w|!sh %`执行
	- `:w` 保存
	- `|` 并且执行
	- `!sh %` 用外部命令`sh` 执行`test.sh`
- 注意!sh %
	- 这里使用的外部程序不是python
	- 而是sh
		- sh 就像 python3 
			- 是外部命令名
		- % 代指test.sh 
			- 就像以前的sleep.py 
			- 是文件名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665303547261)

- 确实 输出了 三次时间
- 但我还想 把字变大 怎么办 呢？

### figlet变大

- `show_time.py` 的输出字符串
	- 直接通过 `管道|` 给到 `figlet`
- 其中
	- `show_time.py`程序 
		- 只负责输出时间
	- 输出的结果 
		- 通过`管道|`给 `figlet`
	- figlet
		- 负责变大

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644581971033)

- 如果想要 输出 
	- 三个 变大之后的 时间
- 应该 如何 呢？


### 三次 输出

- 修改test.sh
	- vi test.sh
	- 编写 以下文件

```shell
python3 show_time.py | figlet
python3 show_time.py | figlet
python3 show_time.py | figlet
```

- 尝试 运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672316434078)

- 运行 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672316575884)

- 确实 变大了
	- 而且 输出了三次
- 现在需要 不只输出三次
	- 而是 无限多次
		- 不断刷新
	- 应该 怎么办 呢？

### 尝试循环

- 无限多次 肯定需要循环！
- 原来 放在`python文件`中的 循环和定时功能
	- 现在 都需要放在 `sh脚本`文件里
	- 由 `shell` 来 控制 延迟的 节奏
- 那 问题来了
	- `sh脚本文件` 如何 进行 循环？

### 搜索一下！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993080980)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644582835237)

- 尝试 根据这个 修改

### shell循环

- 在shell中
	- 新编辑 一个`loop.sh`
	- `vi loop.sh`
- 输入 以下内容

```bash
for a in {1..10}
do
	echo $a
done
```

- 尝试 运行此文件

### 保存 并运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644547239326)

- `:w` 
	- 保存 当前文档
- `:!sh %` 
	- 运行 当前程序
- `:w|!sh %` 
	- 保存 并运行 当前程序
- 执行的结果 如下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644582900899)

- 成功 循环了起来
- 光是循环 还不够
	- 还需要 延迟
- 怎么 办？

### 搜索 延迟

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993141917)

```bash
for a in {1..10}
do
	echo $a
	sleep 1s
done
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993196629)

- `:w|!sh %` 
	- 保存并运行 当前程序
- 延迟 成功
	- 接下来 需要输出时间 了 
	- 而且是 通过管道给  `figlet`的时间 

### 整合 python

- 把原来数字的部分换成执行命令
	- `python3 show_time.py | figlet`

```bash
for a in {1..10}
do
	python3 show_time.py | figlet
	sleep 1s
done
```

- 输出 成功！
	- 确实 可以刷新
	- 但是 一屏幕 里面
	- 有 两个时间
- 很乱！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993460194)

- 我想 只要一个！
	- 少则得 多则惑！
- 可以 清一下屏幕 么？

### 尝试清屏

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993562436)

```bash
for a in {1..10}
do
	clear
	python3 sleep.py | figlet
	sleep 1s
done
```

- 先去 总结一下

### 总结

- 这次 我们研究了 shell脚本的编程
- 并且 在shell中 实现了
	- 循环 语句
	- 延迟 命令
	- 清屏 命令
	- python命令
	- figlet命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644585817010)

- 还能 整点`什么` 呢？🤔
- 下次再说👋
