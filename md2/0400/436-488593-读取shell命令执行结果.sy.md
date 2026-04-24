---
show: step
version: 1.0
enable_checker: true
---

# 命令行参数

## 回忆
次研究了 
	- 执行的当前目录
	- 修改当前目录
	- 命令行参数
	- 还通过命令行参数从文件读取人名
	- 然后让人名变红
	- 解决 print 中分隔符加空格式的时候用
		- sep = ""
- 可以读出cowsay中所有的动物么？🤔
- 先拿pwd试试

### pwd

- 首先通过输出重定向
- 把命令输出到一个文本文件
- 然后读出这个文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651799719463)

- 确实是可以的
- 我们再试试ls

### ls

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651799847802)

- 方法类似
- 这样我们确实可以得到文件和文件夹列表
- 但是cowsay的动物在哪里呢？

### cowsay

- 首先得确保安装了cowsay

```
sudo apt install cowsay
```
- 然后查看cowsay资源

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651800876758)

- 只要让ls的语句的输出结果
- 流到一个文本就可以了

### 重定向

- 先找到所有的文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651801025079)

- 这样确实得到了所有的动物名称
- 类似的还能干什么呢？
- 比如figlet中所有的字体

### figlet

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651801099804)

- 还能查询什么呢？

### 进程

- 列出所有进程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651801614409)

### 用户

- 列出所有用户


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220506-1651801626856)

- 其实是任何东西
	- 只要shell能得到的东西
	- 就可以让输出结果流到文件
- 文件呢 
	- 又能用python读出来
	- 这样工作流就形成了

### 总结

- 这次读取了外部命令的结果
- 可以得到
	- cowsay的动物
	- figlet的字体
	- 当前的进程
	- 所有的用户
	- 你还能想到什么？
- 只要是shell能输出的东西
	- 就可以流到文件里
	- 然后用python给open了
	- 读取出来
- open 函数
	- 除了目标文件之外 
	- 还有没有什么参数呢？？🤔
- 下次再说 👋
