---
show: step
version: 1.0
enable_checker: true
---

# 修改颜色

## 回忆上次内容

- m 可以改变字体样式
  - 0-9 之间设置的都是字体效果
  - 0 重置为默认
  - 1 变亮
  - 2 变暗
  - 3 斜体
  - 4 下划线
  - 5 慢闪
  - 6 快闪
  - 7 前景背景互换
  - 8 隐藏
  - 9 中划线
- 叠加效果
  - \33[1;3moeasy
  - ;分割
- 取消效果
  - 21 取消 1
  - 22 取消 2
  - 23 取消 3
  - 一直到 29
  - 0 是全部取消，回到默认

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661868302576)

- 最后发现
	- 真的可以 设置颜色？？？👁

### 颜色是重要的

- 不同	颜色
	- 可以提示出 信息重要性的级别

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1615035947673)

- 颜色本身也是信息
  - OFF_INT = 2147483647
  - ERROR_INT = 40000
  - WARN_INT = 30000
  - INFO_INT = 20000
  - DEBUG_INT = 10000
  - RACE_INT = 5000

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220212-1644673289111)

- 现在
	- 就来试一下！

### 设置前景

```python3
print("\33[31moeasy")
print("\33[31moeasy\33[0m")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614229099255)

### 具体设置

- FG foreground 前景色
- BG background 背景色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614227808523)

- fg  好眼熟

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230201-1675249103597)

### 回忆一下
- 我们是如何把程序从前台切到后台
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

### 切换回去

- \33[30m 
	- 是黑色前景
		- 看不见
		- 黑背景下黑色前景
			- 等于是隐身效果
	- 跳过去
- \33[31m 
	- 是红色
	- 可以看见
	- 但后面字体颜色都被修改
	- 回不来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614228070105)

- \33[0m 
	- 重置为默认形态
	- 后面字体使用默认白色

### 更多颜色

- 遍历一下
- 30 是黑色
- 从 31-37 红绿黄蓝紫青灰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614228204847)

### 结合字体样式

- \33[31;1;4moeasy
  - 31 红色前景
  - 1 高亮
  - 4 下划线
- \33[1;4;33moeasy
  - 1 高亮
  - 4 下划线
  - 31 红色
- \33[2;9;36moeasy
  - 2 暗淡
  - 9 中划线
  - 36 青色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614228417361)


- 前景颜色
	- 可以和字体样式 混合在一起
	- 分隔符还是;
	- 相对次序 没有要求
- 那 shell 可以支持
	- 这种 颜色模式 吗？

###搜索一下

- 好像可以

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210307-1615082195339)

- 动手试试

### echo 颜色

```shell
echo "\033[31moeasy"
```

- 回忆 python3 输出带颜色的字符
	- 如果配合 cowsay

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220910-1662794508601)

- 命令echo确实可以使用控制序列改颜色
- 这原理是什么来着？

### 转义字符

- 转义转义 转化含义
	- 进入 控制序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230201-1675249883252)

- 还是回python游乐场
	- 玩颜色吧！
	- 可以给cowsay上色吗？

### 总结

- 这次搞的是 `颜色`
	- 前景颜色
		- 总共有 7 种基本色
- 还有什么 好玩的 么？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210924-1632457941215)

- 可以 给小动物 上色 吗？🤔
- 我们下次再说！👋
