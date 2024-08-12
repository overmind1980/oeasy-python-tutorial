---
show: step
version: 1.0
enable_checker: true
---

# 大字报时效果

## 回忆上次内容

- 上次 我们研究了 shell脚本的编程
- 并且 在shell中 实现了
	- 循环 语句
	- 延迟 命令
	- 清屏 命令
	- figlet命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665302645886)

- 想要用彩色字体循环报时可以吗？🤔

### 尝试整合

- 尝试 把sleep.py 整合进来

```python3
#!usr/bin/python3
import time
while True:
    print(time.asctime(),end='\r')
    time.sleep(1)
```

- 通过管道 流到 `figlet` 中

### 尝试整合

- 卡住 不动了
	- 尝试 失败了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230417-1681737481724)

- 先把 那个`\r`去掉
	- 结果 `还`是不行
- 为什么 会这样 呢？

### 失败原因

- 循环 和 延迟
	- `都` 阻碍着 
		- 往管道里 送东西

```python
#!/usr/bin/python3
import time
print(time.asctime())
```

- `新建` show_time.py
	- 注意show和time中间是下划线
	- 循环和延迟 都去掉
	- 只纯纯 输出时间

### 最终

- 新建show_time.py
  - 把循环、延迟
	- 都去掉

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230419-1681901530662)

- :w|!python3 %
	- 保存并运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230419-1681901571540)

- :wq
	- 保存 并退出

### 运行

- 在shell里 运行
	- `python3 show_time.py`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230419-1681901632704)

- 在shell里 输出重定向
	- `python3 show_time.py | figlet`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230419-1681901664870)

- 输出大时间	
	- 是`可以`的
- 但是 不会刷新
	- 而且 太大了
	- 超过 一行了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665302645886)

- 还想要 刷新大时间
	- 这可能吗？🤔

### 整合 python

- 把原来输出数字的部分
	- echo $a
- 换成执行命令
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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230419-1681903592883)

- 少则得 多则惑！
	- 我想 只要一个！
- 可以 清一下屏幕 么？

### 尝试清屏

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993562436)

```bash
for a in {1..10}
do
	clear
	python3 sleep.py | figlet | lolcat
	sleep 1s
done
```

- 将 cowsay 再融合进来

### 把 cowsay 整合进来

- 把 figlet的输出结果
	- 再送到 `cowsay -f moose -n`
- 其实 就是 
	- 一步步 通过管道流淌的 过程

```bash
for a in {1..10}
do
	clear
	python3 show_time.py | figlet ｜cowsay -f moose -n
	sleep 1s
done
```

- 看起来 有点复杂
	- -f moose 
		- 使用 驼鹿
	- -n 
		- 保留 转义字符`\n`
		- 避免 屏幕混乱
- 可以改变颜色吗？


### 整合 lolcat

- 整合lolcat
	- 进入 loop.sh
- 循环中
	- 清屏 后
	- 输出 时间
	- 再 延时

```
for a in {1..100}
do
    clear
    python3 sleep.py | figlet | cowsay -f moose -n | lolcat
    sleep 1s
done
```

- 输出 时间
	- 文本 长度太长
- 想要
	- 不输出 年月日
	- `只`输出 时分秒

- 先去 总结一下

### 总结

- 这次 我们研究了 
	- shell脚本
	- python
- 在shell脚本中 实现了
	- 循环 语句
	- 延迟 命令
	- 清屏 命令
	- figlet命令
	- lolcat命令
	- 调用python3 show_time.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644585817010)

- 在python脚本中 实现了
	- 报时功能
- 还能 整点`什么` 呢？🤔
- 下次再说👋
