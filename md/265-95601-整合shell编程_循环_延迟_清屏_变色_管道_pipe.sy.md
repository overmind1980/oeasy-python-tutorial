---
show: step
version: 1.0
enable_checker: true
---

# 整合shell编程

## 回忆上次内容

- 如果想要的是 大字符效果
  - 需要使用 figlet 和 lolcat

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682298949782)

- 可以让自己的名字
	- blingbling闪烁起来吗？

### 建立 脚本

- 得熟悉一下 `shell`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230402-1680443257901)

- python3和vi都是
	- shell上面的应用
- 想要调用python3 show_time.py
	- 就需要在shell中键入命令
	- 或者编写shell中的批处理程序

### 编写shell中的批处理程序

- 首先回到用户文件夹(~)
	- cd ~

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682299412144)

- 先新建 一个test.sh
	- vi test.sh

```shell
echo "oeasy" | figlet | lolcat
echo "oeasy" | figlet | lolcat
echo "oeasy" | figlet | lolcat
```

- 看起来 就是
	- 把时间 输出了 3 次

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682300096557)

- :wq
	- 保存并退出

### 尝试运行

- test.sh无法直接运行
	- 需要使用sh 来运行 test.sh

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682300145055)

- 确实执行了三次
- 可以在vim中执行test.sh吗？

### 直接执行

- :w|!python3 %
	- 保存 并用python3执行当前文件
- :w|!sh %
	- 保存 并用sh执行当前文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682300182180)

- 可以执行么？

### 尝试执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682300212388)

- 注意 执行细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682300182180)

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


- 确实 输出了 三次时间
- 这里面的逻辑是什么呢？

### figlet变大

- 在shell中
	- `echo "oeasy"` 的输出字符串
		- 直接通过 `管道|` 给到 `figlet` 
		- 再通过 `管道|` 给到 `lolcat` 
- 其中
	- `echo "oeasy"` 命令
		- 只负责输出字符串
		- `echo "oeasy"` 命令 输出的结果 
		- 通过`管道|`给 `figlet`
	- `figlet`
		- 负责变大
		- `figlet` 变大后的结果 
		- 通过`管道|`给 `lolcat`
	- `figlet`
		- 负责变色
		- `lolcat` 变色后的结果 
		- 最终流到 屏幕

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682300854109)

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
	- `shell程序` 如何 进行 循环？

### 搜索一下！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993080980)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644582835237)

- 尝试 根据这个 修改

### shell循环

- 在shell中
	- :e loop.sh
		- 新编辑 一个`loop.sh`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682301087011)

- 回车之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230419-1681903312398)

- 输入 以下内容

```bash
for a in {1..10}
do
    echo $a | figlet | lolcat
done
```

- 尝试 运行此文件

### 保存 并运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682301193786)

- `:w` 
	- 保存 当前文档
- `:!sh %` 
	- 运行 当前程序
- `:w|!sh %` 
	- 保存 并运行 当前程序

### 运行结果

- 执行的结果 如下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682301221550)

- 成功 循环了10次
- 光是循环 还不够
	- 还需要 延迟
- 怎么 办？

### 搜索 shell+延迟

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230419-1681903379972)

```bash
for a in {1..10}
do
	echo $a | figlet | lolcat
	sleep 1s
done
```

- `:w|!sh %` 
	- 保存并运行 当前程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682301308459)

- 延迟 成功

### 总结

- 这次 我们研究了 shell脚本的编程
- 并且 在shell中 实现了
	- 循环 语句
	- 延迟 命令
	- figlet命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665302645886)

- 想要用彩色字体循环报时可以吗？🤔
- 下次再说👋
