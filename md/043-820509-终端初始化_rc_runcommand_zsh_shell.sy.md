---
show: step
version: 1.0
enable_checker: true
---

# 终端初始化

## 回忆上次内容

- 上次修改了 `$PATH`路径
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

### 终端初始化

- 研究 一下
	- 终端的 初始化过程

- 当我们 启用某个shell 的时候	
	- 首先会运行 这个shell的rc文件
		- rc文件 也就是 
			- run command 配置文件
- shiyanlou的 默认shell 是 zsh
	- 对应的 rc文件 
		- 就是 ~/.zshrc
- 试着编辑他
	- vi ~/.zshrc
	- <kbd>G</kbd>到最后一行
		- <kbd>o</kbd> 在下方插入一个新行并进入编辑模式
		- 试着加一行输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220315-1647346246251)

### 再新开终端

- 然后重新打开 一个xfce终端

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220310-1646914501998)

- 新开终端的时候
	- 确实会执行
		- ~/.zshrc
	- 因为我们默认的shell是zsh
- 如果默认的shell不是zsh
	- 而是bash
- 会如何呢？

### ~/.bashrc

- zsh对应的 rc文件是
	- ~/.zshrc
- bash对应的 rc文件是
	- ~/.bashrc
	- 试着编辑他
	- vi ~/.bashrc
		- <kbd>G</kbd>到最后一行
		- <kbd>o</kbd> 在下方插入一个新行并进入编辑模式
		- 试着再加一行输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220313-1647175420184)

- 切换shell的时候
	- 会有相应的提示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220310-1646914662083)

- 既然如此
- 我们可以把export PATH=$PATH:~这句话 
	- 放在默认shell(zsh)的配置文件
		- ~/.zshrc
- 这样 每次运行zsh终端的时候
	- 就自动 完成路径配置
	- 把~ 加入到 $PATH的路径 列表中

### ~/.zshrc

```bash
# 编辑zsh的配置文件rc(run command)
vi ~/.zshrc
```

- 编辑这个配置文件
	- 在尾行下面加一句话
	- `export PATH=$PATH:~`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220313-1647175309737)

- 以后 只要是进 zsh
	- $PATH 列表
		- 就会包含用户文件夹~(/home/shiyanlou)
- 可是
	- 这个 `~/.zshrc` 到底是啥意思

### 理解rc文件

- ~/.zshrc
  - `~` 指的是 当前用户的 宿主文件夹
    - 此配置 只对 当前用户(shiyanlou) 有效
  - 首字母`.` 说明这文件 是个隐藏文件
    - ls 看不见
    - ls -a 才能看见

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647611406002)

- .zshrc
	- zsh 指的是 当前shell 
		- 是 zsh
    	- 而不是 bash
    - bash 就得用 ~/.bashrc 进行配置
- 这个rc是什么意思呢？

### rc

- rc 指的是 `run commands` 的缩写
    - 运行 程序
    - 批处理 设置配置
    - 不用 重复 手动运行
    - 写到 rc里面
    - 启动 shell或者软件的时候 就可以批量处理了
      - ~/.zshrc
      - ~/.vimrc
      - ~/.bashrc

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210812-1628740962094)

- 这个 初始化 程序 
	- 对于 新建的终端窗口 是好用的
	- 但是 还得重启一下zsh 才能应用
- 我想要 就在当前的zsh下
-	 运行一把~/.zshrc
- 可以么？

### 运行当前zsh的初始化文件

```
source ~/.zshrc
```

- 运行~/.zshrc配置文件
	- 这就是 手动执行~/.zshrc
- 或者
	- 直接运行zsh也可以

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647611729922)

- 执行 之后
	- 路径就 设置好了

### 总结

- 这次 把配置 `$PATH` 的脚本
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
- 下次再说👋