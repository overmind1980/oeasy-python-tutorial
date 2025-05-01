---
show: step
version: 1.0
enable_checker: true
---

# 回到开头

## 回忆上次内容
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

### 回到从头

- 重新去 游乐场
	- `\n` 是 老熟人了
	- 换行 转义字符
	- 先复习一下`\n`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665461729269)

- 把 `\n` 换成 `\r`
	- `\r`的作用 是 `回`到行头
		- 行头 是 本行最左侧
			- 然后 重新输出
			- 123 就覆盖了 abc
- 如果 原来\r前面的字符串 
	- 比\r后面的 长
	- 怎么办 呢？🤔

### return

- `\r`
	- 只负责 回到行头
	- 不负责 换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665461739485)

- 过程
	- 先输出abcdef
	- 然后回到行头
	- 再输出123
	- 结果就是123def
- \r是什么意思呢？

### return

- \r 的意思是
	- 回车(return) 
	- return = re- + turn

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674857106133)

- turn
	- 来自于希腊语

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674857136350)

- 在1960-1990年代
	- 使用率爬坡
- 为什么那个时代会爬坡呢？

### turn

- 第二次工业革命是电力革命
	- 很常用的词就是
	- 开关

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674857253748)

- turn
	- turn it on
	- turn it off

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674857383346)

- 怎么又是 开 
	- 还是 关 呢？

### turn 

- turn 其实是 转弯的意思

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674857566415)

- 可以
	- turn left
	- turn right
	- turn around
	- turn over
	- return 返回
- 还有什么同根词吗？

### 转悠

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674857760230)

- tour
	- 旅游

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674859170802)

- 还有什么同根词吗？

### vert

- versatile
	- 可以转动的
	- 万能的
	- 多面手的

- divert
	- 使注意力转移
	- 转移、放松、娱乐
- advertise
	- 使某人的注意力转过来
	- 正向吸引
- advertisement
	- 广告

- anniversary
	- [ænɪ'vɜːsərɪ]
	- 每年都来一次的 

- subvert
	- 从下面 翻上来
	- 颠覆、推翻


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674862139312)

- reverse
	- 翻转

### 内向外向

- extravert
	- 往外面 turn 的
	- 外向

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674858881382)

- introvert
	- 往里面 turn 的
	- 内向

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674858658214)

- 这是 turn相关的词根 vers的 内容
	- 源自 return
	- \r
- 不要翻篇
	- 自己尝试修改`sleep.py`
	- 让输出时间固定在一行

### 结合程序

- 这个程序和 sleep 的结合很简单
	- 只需要把输出的字符串前面加上`\r`
	- 并且把结尾默认的 `end="\n"` 
		- 换成 `end=""`

```python3
#!usr/bin/python3
import time
while True:
    print("\r" + time.asctime(),end="")
    time.sleep(1)
```

- 试验成功
	- 真的定在那儿刷新了

### 突发奇想

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674862367441)

- 如果 把结束符 
	- 设置为 "\r"
	- 会如何呢？

### 尝试

```python3
#!usr/bin/python3
import time
while True:
    print(time.asctime(),end='\r')
    time.sleep(1)
```

- 想到就去试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712066007708)

- 也可以刷新～

### 新问题

- 还有就是 字有点小
	- 可以 `变大` 吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221228-1672212212852)

- 要清清楚楚看报时

## 总结

- `\r`
  - 就是return
	- 回车
	- 源自于turn
	- 和 vers/vert 同源
  - 可以让输出位置回到行首
  - 原位刷新时间
- 想要 大字符效果
  - 像 下图这样的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665302645886)

- 这可能吗？🤔
- 我们下次再说！👋
