---
show: step
version: 1.0
enable_checker: true
---

# 命令行参数

## 回忆

- 上次研究了细水长流
- 读取文件流
- 一行一行流出来
- 而且可以通过 input()函数
- 动态选择具体打开的文件
- 如果我要选择的文件不在当前目录怎么办呢？🤔

### 建立环境

- 首先要确保有个文件
	- 建立一个 o9z.txt
	- 里面写上 oeasy

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220831-1661918679425)

#### 绝对路径

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220831-1661918766432)

- 可以的
- 没有报错
- 可以使用相对路径吗？

### 相对路径

- 文件位置路径与当前位置是一样的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220831-1661918865369)

- 这样子可以打开文件
- 没有报错
- 那我怎么知道当前路径呢？
- 问呀！


### 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240917-1726536292162)

- 应该是os包里面可以查看当前的路径位置
- os是什么意思来着？？

### 应用

- os 就是
	- 操作系统
	- operating system
	- 可以获得系统信息
- 查看当前目录
  - os.getcwd()
  - Current Working Directory
  - 当前工作路径

- 切换当前目录
  - os.chdir()
  - Change Directory
  - 可以切换到指定的目录
  - 先切到下一层目录

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220831-1661919081853)

- 然后从Code中
	- 找到Code的上一层
	- 就是当前用户home文件夹
- 重开后会重置当前文件夹吗？

### 重开

- 我们重开一下游乐场
	- os的cwd会重置
	- 会回到~

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220831-1661919192975)

- 可以把文件名当做命令的参数么？
	- 就像
    - python3 open_file.py oeasy.txt

### 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240917-1726536642489)

- 做实验试试

### 测试

```python
import sys

# 第一个参数（索引为 0）是脚本的名称，后续参数是用户提供的命令行参数
if len(sys.argv) > 1:
    argument = sys.argv[1]
    print(f"读取到的命令行参数是：{argument}")
else:
    print("没有提供命令行参数。")
```

- 引入的包名为 sys
  - 意思是 system 系统
  - 通过这个包
  - 我们可以让 py 文件获得相应参数
- 比如`python3 o.py oeasy.txt`中
  - python3 是命令
  - o.py、 oeasy.txt 都是参数(argument)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240917-1726537371127)

- :w|!python3 % oeasy.txt

- 试验成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240917-1726537397361)

- 现在需要把
	- 命令行参数
	- 和读写操作
	- `整合`起来

### 整合

```python
import sys

# 第一个参数（索引为 0）是脚本的名称，后续参数是用户提供的命令行参数
if len(sys.argv) > 1:
    argument = sys.argv[1]
    s_file = sys.argv[1]
    f = open(s_file)
    s_name = f.readline().replace("\n","")
    print("Hello ",s_name,"!Welcome to file io")
    f.close()
else:
    print("没有提供命令行参数。")
```

- `:w | !python3 % oeasy.txt`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240917-1726537677182)

- 如果修改oeasy.txt内容
- 会改变程序运行结果么？

### 修改

- 修改被读取的文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240917-1726537756413)

- 真的在重新读取文件啊！！！
- 如果我要把读出来的人名变成红色
- 应该怎么办？

### 红名

```python
import sys

# 第一个参数（索引为 0）是脚本的名称，后续参数是用户提供的命令行参数
if len(sys.argv) > 1:
    argument = sys.argv[1]
    s_file = sys.argv[1]
    f = open(s_file)
    s_name = f.readline().replace("\n","")
	print("Hello \033[41m",s_name,"\033[0m!Welcome to file io")
    f.close()
else:
    print("没有提供命令行参数。")
```

- o2z 后面有一个不该有的空格
	- Hello 和 o2z 之间有两个空格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210823-1629690772352)

- 为什么？

### 分隔符 sep

- help(print)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210823-1629691377927)

- 默认的分隔符
- sep = " "
- 是空格

#### 修改

- `print("Hello \033[41m",s_name,"\033[0m!Welcome to file io"，sep="")`
- 把默认分隔符设置为没有分隔符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210823-1629691503965)

- 成功
- 如果我让这个 python 文件成为可执行文件呢？

### 可执行文件

```
#!/usr/bin/env python3
```

- 第一行加上解释方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240917-1726537468991)

- 直接运行也是可以使用的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210823-1629690135002)

### 总结

- 这次研究了 
	- 执行的当前目录
	- 修改当前目录
	- 命令行参数
	- 还通过命令行参数从文件读取人名
	- 然后让人名变红
	- 解决 print 中分隔符加空格式的时候用
		- sep = ""
- 可以读出cowsay中所有的动物么？🤔
- 下次再说 👋
