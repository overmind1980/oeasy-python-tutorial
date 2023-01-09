---
show: step
version: 1.0
enable_checker: true
---

# 牛说(cowsay)

## 回忆上次内容

- 上次我们研究了shell脚本的编程
- 并且在shell中实现了
	- 循环语句
	- 延迟命令
	- 清屏命令
	- python命令
	- figlet命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644585817010)

- 还能整点什么呢？🤔
- 还想要让小动物报时

### cowsay

- 首先要安装 cowsay

```bash
sudo apt install cowsay
```

- 装完之后
	- cow 就可以 say 了吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993917284)

- 怎么say呢？

### 利用管道

- 利用管道(pipe)来say

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993957714)

- 如何与报时函数整合呢？

### 整合

- 这如何和我们的报时程序整合呢？

```
#!usr/bin/python3
import time
print(time.asctime())
```
- 一步一步来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221012-1665552184723)

- figlet的结果再通过管道送cowsay

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221012-1665552226279)


### 管道原理

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/pipe.png)

- 然后尝试循环起来

### 把 cowsay 整合进来


- 把figlet的输出结果再送到cowsay -f moose -n
	- 其实就是一步步通过管道流淌的过程

```bash
for a in {1..10}
do
	clear
	python3 show_time.py | figlet ｜cowsay -f moose -n
	sleep 1s
done
```

- 看起来有点复杂
	- -f moose 
		- 使用驼鹿
	- -n 
		- 保留转义字符`\n`
		- 避免屏幕混乱

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614994076733)

- 这确实有点亚文化😓
- 可以来点更亚的文化吗？😄

### 彩色效果

```bash
#安装彩色程序
sudo apt install lolcat
#实验
echo oeasy | lolcat
```

- 这样就可以输出彩色效果了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665485149853)

- 这个可以！
	- 真的很亚☺
- 可以再把报时整合进来吗？

### 整合报时

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210812-1628752388506)

- 有的时候会因为宽度问题
- 感觉很乱
- 我想把时间简化为时分秒

### 整合时间

- 整合进入原来的loop.sh
- 循环中
	- 清屏后
	- 输出这个效果
	- 再延时

```
for a in {1..100}
do
    clear
    python3 sleep.py | figlet | cowsay -f moose -n | lolcat
    sleep 1s
done
```

- 输出时间太长
	- 其实我只想输出时分秒

### 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614994224934)

- 这个就得修改最初的生成时间的源头
- 修改 show_time.py 文件

### show_time.py

```python
#!/usr/bin/python3
import time
localtime = time.strftime(' %H:%M:%S',time.localtime())
print(localtime,end="")
```

- 这个东西应该如何理解呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220331-1648711364409)

### 具体理解

- strftime 函数
  - str 是字符串 string 的意思
  - f 是 format
- strftime 函数 把一个 time.localtime() 
	- 格式化为一个字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220331-1648711485748)


- 缺省参数就是当前时间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221231-1672449502716)

```python
#!/usr/bin/python3
import time
print(time.strftime('%H:%M:%S'),end="")
```

- 格式如何理解呢？

### 理解格式

- 格式化成 ` %H:%M:%S` 这个格式
	- 这个格式选取了三个时间元组项
		- %H是小时
		- %M是分钟
		- %S是秒钟
		- 中间用:分割

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220331-1648711587529)

- 试验走起来

### 直接运行 sh

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649377873706)

- 这两个搭配起来确实可以运行了！
- 但是循环次数还是受限制
- 可以做一个永远循环的吗？

### 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665310670472)

- 看起来是把
	- for i in {0..100}
- 换成
	- while true

### 替换效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221231-1672449767743)

- 效果还行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210812-1628752817259)

### 更多效果

- 哈哈 火鸡turkey也能说话
	- 也许我们也可以用fortune-zh
	- 把偈语打到时钟旁边？？？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649378017159)

- 如果我想直接运行 `loop.sh` 呢？
	- 而不是`sh loop.sh`可以么？

### 直接运行

- 直接运行的话
- `loop.sh`没有执行权限
- 给他提权
  - chmod 改变模式
  - u+x 给当前用户增加执行权限

```shell
chmod u+x loop.sh
./loop.sh
```

- 然后再运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644585241380)

- 绿色说明可以运行了
- 不过前面还是需要当前路径`./`
	- 如果就想要 `loop.sh` 直接运行
	- 不要当前路径 `./` 呢？

### 设置路径

```
export PATH=$PATH:.
```

- 注意$的位置
	- 前面的是`PATH`没有$
	- 后面的`$PATH`有$ 
- `.(点)` 指的是当前的路径

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644586410528)

- 这样
	- 就可以直接运行当前路径下的程序了
	- 不用在程序前面加上`./`了
- 不过如果关了当前的shell
	- 还是不能直接运行
- 怎么办来着？🤔

### ~/.zshrc

- 编辑当前zsh的配置文件 ~/.zshrc
	- 每次进入zsh都会执行这个配置文件的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644586721011)

- 这样重开一个shell
	- 还是可以直接运行loop.sh
	- 跳出循环可以用<kbd>ctrl</kbd>+<kbd>c</kbd>
	- 把循环放到后台用<kbd>ctrl</kbd>+<kbd>z</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644586816899)

- 这就是我们之前都接触过的内容了！
	- 啊~终于完成了
	- 不容易！！！
	- 可以自己做一个小动物吗？
- 还是先来总结一下吧！

## 总结

- 我们狂飙了一路
  - 从用shell `直接`执行 python程序
  - 到用shell `循环`执行 python程序
- 循环体中
  - 把 `python`的 输出结果 
	- 用管道 交给了 `figlet` 
  - 把 `figlet`的 输出结果 
	- 用管道 交给了 `cowsay`
  - 把 `cowsay`的 输出结果
	- 用管道 交给了 `lolcat`
- 最后
	- 提权 `直接`运行 shell程序
- 这一路真的好远啊!
	- python3 是脚本解释器
	- shell 也是脚本解释器
- 其实我们是 
	- 在shell中 利用 python3的 输出结果
	- 用shell 把 python和figlet等程序 粘了起来 
	- 不过这一路 真的好绕
		- 要是能在 py文件里 直接调用 shell中的命令 就好了
- 那个时候 
	- python 就成了胶水的主体
		- 完成粘合的工作
	- 也许有一天可以做到
- 可以自己 `diy`一个小动物 来报时吗？🤔
- 我们下次再说程序！👋
