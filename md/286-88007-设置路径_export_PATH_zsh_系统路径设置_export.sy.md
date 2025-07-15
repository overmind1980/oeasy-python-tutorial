---
show: step
version: 1.0
enable_checker: true
---

# 放入路径

## 回忆上次内容

- 想要在任意路径下直接执行 `show.py`
	- 把 `show.py` 放在 `/usr/bin/` 下面
	- 最终 可以在 任意位置 执行程序`show.py` 
- 但是
	- `/usr/bin` 里面放的
		- 一般都是 二进制命令文件
	- 而且 命令已经 太多太乱
	- 不想把 show.py放在那里了
		- 先删除了 show.py
- 我想
	- 把宿主目录(~) 
	- 添加到 系统路径变量`$PATH` 中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664549610079)

- 这样有可能吗？🤔

### 先回忆🤔

- 为什么 
	- 无论 当前路径 在哪里
	- ls 都能执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712053674955)

### 路径

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648105545833)

- ls所在的路径(/usr/bin)
	- 是在 系统变量$PATH中的

```python
#!/usr/bin/python3
import time
while True:
	print(time.asctime())
	time.sleep(1)
```

- 现在只要把`show.py`
	- 所在的位置
		- `/home/shiyanlou`
	- 也放到`$PATH`中
	- 就可以 随时执行
		- 其中的 show.py 了

### 修改 PATH

- 查看当前$PATH
	- echo $PATH
- 设置$PATH，注意不要加空格
	- export PATH=~:$PATH
- 查看更新后的$PATH
	- echo $PATH

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210923-1632365852073)

- export PATH=$PATH:~
  - 前面的PATH 不需要$
  - 后面的~是当前用户(shiyanlou) 的用户文件夹
	- 也就是/home/shiyanlou
  - :是 分隔符号

### 具体效果

```
pwd
echo $PATH
export PATH=$PATH:~
echo $PATH
```

- 注意！！！
	- `PATH`必须大写
		- `$PATH`和`$Path`是两回事
	- 输入的时候 千万注意
		- 不能使用 中文标点！！！
		- 包括<kbd>:</kbd><kbd>~</kbd> 都必须是 英文半角

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648116848920)

- 修改后主要是
	- 在老$PATH(黄色)之后
	- 增加了~(红色)
	  - 当前用户文件夹(~)
		  - 也就是shiyanlou的用户文件夹
	  - /home/shiyanlou 
  - 增加后的结果 就是新$PATH
	- 就在 蓝色方框内
- /home/shiyanlou 下有 show.py
	- 这回 能运行么

### 尝试运行

- 原来系统是
	- 找不到 show.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712053898759)

- 现在能找到啦

### 权限问题

- 如果这是最新编辑的show.py
	- 可能 权限不够

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712054032493)

- 这说明
	- shiyanlou的宿主目录(~)
		- 已经进入 系统路径$PATH了
	- 只是 权限不够
	- 还需要 给当前用户 执行权限

- chmod u+x show.py
	- show.py的owner就是shiyanlou
	- shiyanlou也是当前用户
	- 给当前用户增加执行权限(e`x`ecute)
- 然后再尝试运行python.py

### 成功运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712054096485/wm)

- show.py确实直接运行了！
	- 换个路径也可以么？🤔

###  执行过程

- 换个路径
	- 也能找到 show.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712054153241)

- 在内存中运行了python3
  - 解释执行 `show.py`
  - 每隔 1s 输出一次时间
  - <kbd>ctrl</kbd>+<kbd>c</kbd>结束进程

### 问题

- 但是如果关了当前终端
	- 重新打开新的 `xfce终端` 
	- 新$PATH就 失效了
	- show.py 也找不到了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712054242120)

- 这可怎么办呢？

### 总结

- 在当前路径运行 `show.py`
  - 在 `python` 程序第 1 行
	- 声明打开方式为 python3
- chmod u+x show.py
	- 为 show.py 的所有者 添加 执行权限
	- show.py就可直接执行了
- 这次修改了 `$PATH`路径
    - 把当前用户(shiyanlou)的宿主文件夹(`~`) 
	- 添加到 `$PATH` 中
- 这样 `show.py` 就可以
	- 在任意路径下被找到
	- 在哪里都可以被执行了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665299270427)

- 但是 一旦 重启终端
	- $PATH 就被还原
	- 这怎么办呢？🤔
- 下次再说👋