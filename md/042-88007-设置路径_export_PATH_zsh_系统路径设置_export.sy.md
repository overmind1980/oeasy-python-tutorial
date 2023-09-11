---
show: step
version: 1.0
enable_checker: true
---

# 放入路径

## 回忆上次内容

- 想要在任意路径下 直接执行 `sleep.py`
	- 把 `sleep.py` 放在 `/usr/bin/` 下面
	- 最终
		- 可以在 任意位置 执行程序`sleep.py` 
- 但是
	- `/usr/bin` 里面放的
		- 一般都是 二进制命令文件
	- 而且 命令已经 太多太乱
	- 不想把sleep.py放在那里了
		- 先删除了sleep.py
- 我想
	- 把宿主目录(~) 
		- 添加到 系统变量`$PATH` 中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664549610079)

- 这样有可能吗？🤔
- 先回忆🤔
	- 为什么 
		- 无论 当前路径 在哪里
	- ls 都能执行

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

- 现在只要把`sleep.py`
	- 所在的位置
		- `/home/shiyanlou`
	- 也放到`$PATH`中
	- 就可以 随时调用
		- 其中的sleep.py 了

### 修改 PATH

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210923-1632365852073)

```shell
#查看当前$PATH
echo $PATH
#设置$PATH，注意不要加空格
export PATH=~:$PATH
#查看更新后的$PATH
echo $PATH
```

- export PATH=~:$PATH
  - 前面的PATH 不需要$
  - ~是当前用户(shiyanlou) 的用户文件夹
	- 也就是/home/shiyanlou
  - :是 分隔符号

### 具体效果

- 注意！！！
	- `PATH`必须大写
		- `$PATH`和`$path`是两回事
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
- /home/shiyanlou 下有sleep.py
	- 这回 能运行么

### 尝试运行

- 原来系统是
	- 找不到sleep.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665297760691)

- 现在说的是 权限不够
	- 报错变化啦😄
	- 说明 可以找到sleep.py文件了
	- 但是由于权限问题
		- 还不能运行
- 这说明
	- shiyanlou的宿主目录(~)
		- 已经进入 系统路径$PATH了
	- 只是 权限不够
	- 还需要 给当前用户 执行权限

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648118284745)

- chmod u+x sleep.py
	- sleep.py的owner就是shiyanlou
	- shiyanlou就是当前用户
	- 给当前用户增加执行权限(e`x`ecute)
- 然后再尝试运行python.py

### 成功运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613896287421)

- sleep.py确实直接运行了！
	- 换个路径也可以么？🤔

###  执行过程

- 换个路径也能找到sleep.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648118572438)

- 在内存中运行了python3
  - 解释执行 `sleep.py`
  - 每隔 1s 输出一次时间
  - <kbd>ctrl</kbd>+<kbd>c</kbd>结束进程
- 但是如果关了当前终端
	- 重新打开新的 `xfce终端` 
	- 新$PATH就 失效了
	- sleep.py 也找不到了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664550005122)

- 这可怎么办呢？

### 总结

- 这次修改了 `$PATH`路径
    - 把当前用户(shiyanlou)的宿主文件夹(`~`) 
    	- 添加到 `$PATH` 中
    - 这样文件夹中的 `sleep.py` 就可以被找到
    - 于是就可以被执行了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665299270427)

- 在当前路径运行 `sleep.py`
  - 在 `python` 程序第 1 行
	- 声明打开方式为 python3
  - 在 `/usr/bin` 找到 `python3`  
	- 从硬盘调用到内存
	  - 成为一个进程
		- 不断输出时间
	  - <kbd>ctrl</kbd>+<kbd>c</kbd>结束进程
- 但是 一旦 重启终端
	- $PATH 就被还原
	- 这怎么办呢？🤔
- 下次再说👋