---
show: step
version: 1.0
enable_checker: true
---

# 放入路径

## 回忆上次内容

- 上次把 `./show.py` 直接执行了
  - show.py文件头部 
	- `#!/usr/bin/python3`
	- 声明了 自身的 打开方式
		- 用 `python3` 来打开
- 修改 `show.py`的 权限
  - 给当前用户 增加 执行(e`x`ecute)权限
	- chmod u+x show.py
- `./show.py`运行成功
	- 总带着当前路径`./` 还是麻烦
- 想要 只输入`show.py`回车
	- 就自动运行
- 这可能么?🤪

### 进行搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613894555384)

- 搜索结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674689634791)

### 按图索骥

```bash
#显示当前路径
echo $PATH
```

- echo $PATH
  - echo 
	- 显示
  - `$` 
	- 说明PATH是一个 `系统变量`
  - `PATH` 
	- 变量的名字
	- 意思是能直接运行程序的`路径`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647609341731)

- $PATH 里面有什么？
  - 这是一个路径列表
	- 有很多`路径`
	- 路径之间 用`:`分隔开
- 这些路径下的 命令
	- 无需 输入路径 
		- 就能 直接运行
- 比如 我们最熟悉的ls

### 执行路径

- 回忆一下
	- 无论我们 在哪个目录下
	- 都能执行 ls 命令

- ls 是 /usr/bin下面的一个可执行文件
	- 大小为139K

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648105545833)

- 因为 `/usr/bin` 在 `$PATH` 系统路径列表 里
  - 所以 `/usr/bin`下 的 `ls` 能直接执行
  - 不需要 在前面附加路径 `/usr/bin/`
  - 只用文件名 `ls` 就能 直接执行
- 而且 不论当前路径 在哪里
  - `ls` 命令都能直接执行
- 但是
  - 如果环境变量 `$PATH` 中没有`/usr/bin`
  - 也就找不到 `ls` 了
- 那么 `ls` 还能执行吗？

### 迷失路径

- 将PATH清空
	- export PATH=

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220328-1648418704798)

- 没有了$PATH
  - 真的连ls都找不到了😱😱😱
  - 什么都干不了了
  - 你说 环境变量 重不重要 ？！🙆🏻‍♀️

### 重开终端
- 到桌面上 
	- 新开 一个新的xfce终端(terminal)
	    - 再echo 一下$PATH 观察
- 路径就 恢复了 

- 命令所在路径 又在`$PATH`里面
	- 命令 就又`可以`直接执行了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665286620130)

- 执行路径 为什么有那么多 呢？

### 执行路径作用

- 比如 我有两个不同版本的mc服务器
	- 都在 我的硬盘里
	- 我怎么知道 启动的是哪个版本呢？
- 两个启动文件的 位置不同
	- 更明确说
		- 就是 两个可执行文件的 路径不同
	- $PATH中 谁靠前 就执行谁下面的命令

- 类似的需求 很多
	- 比如 有两个不同版本的 tomcat 
	- 或者 两个不同版本的 java
	- 或者 不同版本的python3环境
- 都各自 位于不同的目录目录
- 现在用的这个 python3
	- 到底在哪呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648105667493)

### python3的位置

- `python3` 就在`/usr/bin/`下面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647609917569)

- `python3` 和 `ls` 都在 `/usr/bin/`下面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673752205171)

- `/usr/bin` 的含义
	- usr 
		- unix software resources 
		- unix软件资源
	- bin 
		- binary  
		- 二进制可执行文件

### 分析路径

- $PATH中 包含`python3` 所在的路径吗？
  - `/usr/bin`
     - 见下图红框

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613896706330)

- 无论当前路径 在什么位置
  - 只要输入 `python3`
	- 系统就去 `$PATH`里面
		- 从前 往后 找
	- 在 `/usr/bin` 中 找到了python3
		- 就不 再往后找了
	- 然后执行 `/usr/bin` 里找到的 `python3`
- 只要 `/usr/bin` 在 `$PATH` 中
	- 系统在执行`python3` 时
	- 就会去 `/usr/bin` 目录中找到`python3` 
- `/usr/bin` 里面的程序都能直接执行
	- 那我们把 `show.py` 拷贝到 `/usr/bin` 不就能被找到了么？
- 首先得明确
	- 当前这个 `show.py` 在哪里呢？

### 当前位置

- pwd
	- present working directory
	- 当前工作路径

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712052102216)

- 当前路径为 `~`
	- 就是 当前用户shiyanlou的 `用户文件夹`
		- 就是 `/home/shiyanlou`
- 当前路径下
	- 有个show.py 是上次编辑过的

### 如果因为重启丢失了文件

- 如果没有了 
	- 需要补上

```python
#!/usr/bin/python3
import time
while True:
	print(time.asctime())
	time.sleep(1)
```

- 什么是`用户文件夹`呢？

### 用户文件夹

- 现代系统都是多用户系统
	- linux系统里有好多用户

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648115610783)

- 好多用户 意味着
	- 可以有 不同用户 登录使用
	- 每个用户 都有自己的一套东西

### 多用户系统

- windows下的用户

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648115574111)

- windows用户也有自己的文件夹
- 每个用户都有自己的
	- 桌面
	- 下载
	- 链接
	- ...

### mac

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648115595297)

- mac用户也有自己的文件夹

### 放入路径


``` 
cp show.py /usr/bin
sudo cp ./show.py /usr/bin
ls -lh /usr/bin/show.py
show.py
chmod u+x /usr/bin/show.py
sudo chmod u+x /usr/bin/show.py
ls -lh /usr/bin/show.py
show.py
```

- 把文件拷贝过去
	- cp show.py /usr/bin
- 用管理员权限给拷过去
	- sudo cp ./show.py /usr/bin
- 尝试执行
	- show.py
- 为show.py的所有者增加可执行权限
	- chmod u+x /usr/bin/show.py
- 使用管理员权限提权
	- sudo chmod u+x /usr/bin/show.py
- 尝试执行
	- show.py
- 尝试用管理员执行
	- sudo show.py

### 执行过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712052608328)

- 最后 show.py 
	- 是可以执行的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712052637507)

- 但前提还是需要
	- 在最前面 打一个 sudo 
	- 进行 提权
	- 才能 执行


- 如果 我想不用sudo
	- 想 就直接运行 show.py 呢

### ls的参数

- 如果不清楚ls参数作用的话
	- 可以查询一下帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660095772721)

- 在python之外
	- oeasy也有linux教程
	- 学完python之后可以去[《oeasy教您玩转linux》](https://www.lanqiao.cn/courses/2712)
	- 看看一些shell命令的细节

### 分析

- /usr/bin/show.py
	- 拥有者(owner) 是root
	- 用户组(group) 是 root

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712052946661)

- 当前用户shiyanlou
	- 不能直接执行
	- 只有 root 才能执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660096098201)

- 因为root代表着 最高的权限
	- 所以 必须要加上`sudo` 才可以执行
- 那为什么 原来的show.py
	- 可以`直接`执行呢？

### 所有者来源

- 最初的 show.py
	- 位于 用户文件夹(/home/shiyanlou)
	- 所有者是 shiyanlou

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712053017283)

- 那 为什么
	- 拷贝到/usr/bin下面之后
- 所有者 
	- 就从 shiyanlou
	- 变成 root 了呢？

### 回忆拷贝过程

- 回忆一下 拷贝的过程
	- 直接拷贝失败了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712053084832)

- 只能 提权进行拷贝
	- sudo cp
	- 这时候 cp执行用户
	- 就不是shiyanlou了
	- 而是root

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712053136986)

- 此后 show.py
	- 就被拷贝进了`/usr/bin`
	- 并且所有者为 root
- 所以 只能被 root执行
- 想让 普通用户shiyanlou
	- 也能 show.py
- 可以吗？

### 提权

- 尝试再提权

- 使用管理员权限提权
	- sudo chmod a+x /usr/bin/show.py

- a+x 意思是
  - `a`ll users 都增加
  - e`x`ecute ch的权限

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712053294623)

- 不同位置的x含义不同
	- 蓝色对应 文件拥有者(owner) - (root)
	- 红色对应 文件拥有者用户组(group) - (root)
	- 黄色对应 其他用户用户 (other) - 包括shiyanlou
- 目前所有用户 都能执行 show.py了

### 问题

- 可是 如果 各种命令
	- 都放到 `/usr/bin`下面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648116508052)

- 就像鸡蛋 都放在 同一个篮子 里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220324-1648116515379)

- 目录之下 非常杂乱

### 调整

- `/usr/bin`下面 
	- 文件很多
	- 而且很乱
	- 还很不安全
- 先把 `show.py` 从 `/usr/bin` 中删除掉

```
rm /usr/bin/show.py
sudo rm /usr/bin/show.py
```


- 先把/usr/bin下面的 show.py 删掉
	- rm /usr/bin/show.py
- 不让删就用管理员权限删
	- sudo rm /usr/bin/show.py

### 确认删除

- 确认删除
	- ls -lah /usr/bin/show.py

```
ls -lah /usr/bin/show.py
```

- 确认删除之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712053541978)

- 我希望 `show.py `
	- 还放在当前用户文件夹(~)
	- 不动
- 最终还能在任意路径下执行
- 可能实现吗？🤔

## 总结

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
- 我们下次再说！👋