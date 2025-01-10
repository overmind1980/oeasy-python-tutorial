---
show: step
version: 1.0
enable_checker: true
---

# 牛说(cowsay)

## 回忆上次内容

- 上次搞的是 `颜色`
	- 前景颜色
		- 总共有 7 种基本色
- 还有什么 好玩的 么？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210924-1632457941215)

- 可以 用字符做出 `小动物` 吗？🤔

### cowsay

- 还想要 让小动物报时！
- 首先要安装 cowsay

```bash
sudo apt install cowsay
```

- 装完 之后
	- cow 就可以 say 了吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993917284)

- 还可以怎么 `say`呢？

### 利用 管道

- 利用 管道(pipe)来say

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614993957714)
 
- 这里的
	- -n
	- -f moose
- 都是什么意思呢？

### 找到所有小动物

- 查询帮助

```
man cowsay
```

- -n 是
	- 用来控制换行的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240418-1713407507466)

- -f moose呢？

### -f moose

-  -f 之后 跟上moose
	- 指的是 使用 驯鹿
	- moose.cow 这个文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240418-1713407561970)

- 还有什么具体的小动物吗？

### 观察

```
cowsay -f 
```
- 按下<kbd>Tab</kbd>
	- 可以列出所有的小动物
	- 比如 驼鹿moose
	- 野牛gnu 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681949323297)

- 如何 与报时函数 `整合`呢？

### 整合

- 制作 show_time.py

```
import time
print(time.asctime())
```

- 引入time包
	- import time

- 并输出 当前时间
	-print(time.asctime())

### 使用管道

- 一步一步 来
- python3 show_time.py 输出的时间
	- 通过管道 送figlet

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221012-1665552184723)

- figlet输出的大字时间结果 
	- 再通过管道 送cowsay

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221012-1665552226279)


### 管道原理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230424-1682302726134)

- 然后 尝试`循环`起来


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614994076733)

- 这确实 有点`亚`文化😓
- 可以来点 更`亚`的文化 吗？😄

### 彩色效果


- 安装彩色程序

```bash
sudo apt install lolcat
```

- 实验

```
echo oeasy | figlet | lolcat
```

- 这样 就可以
	- 输出 `彩`色效果 了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665485149853)

- 这个 可以！
	- 真的 很`亚` ☺
- 可以 再把 报时
	- 整合 进来 吗？

### 整合 报时

- 有时 会因为 文字长度问题
	- 显得 很乱

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210812-1628752388506)

- 想要 把时间
	- 简化为 时分秒



## 总结

- 循环体中
  - 把 `python`的 输出结果 
	- 用管道 交给了 `figlet` 
  - 把 `figlet`的 输出结果 
	- 用管道 交给了 `cowsay`
  - 把 `cowsay`的 输出结果
	- 用管道 交给了 `lolcat`

- 可以 给小动物上颜色吗？🤔
- 我们下次再说！👋
