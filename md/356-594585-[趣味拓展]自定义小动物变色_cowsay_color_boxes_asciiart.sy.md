---
show: step
version: 1.0
enable_checker: true
---

# 修改颜色

## 回忆上次内容

- 上次搞的是 `颜色`
	- 前景颜色
		- 总共有 7 种基本色
- 还有什么 好玩的 么？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210924-1632457941215)

- 可以 给小动物 上色 吗？🤔


### 配合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230727-1690424771518)

- 先将 cowsay结果
	- 输出重定向 到 t.py

```bash
sudo apt install cowsay
cowsay -f turtle "oeasy" > t.py
```

- 我想要
  - 更换 所说话的颜色
  - 可能么？


### 修改文件

- 先输出重定向
	- 然后封进三引号
	- 再加上开头和结尾

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230727-1690424874342)

- 但是这样输出的大海龟是垮掉的

### 续行符问题

- 解决 行尾续行符`\`
	- (line continuation character)
- `:%s/\\$/\\\\/g`
	 - `:` 执行命令行模式
	 - `%` 对所有行执行命令
	 - `s` 执行的是替换命令
	 - `\\$` 代表结尾处的一个反斜杠
	 - `\\\\` 换成两个反斜杠

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666694438761)

- 回车之后 直接替换
	- 观察效果
- 然后 给乌龟所说的话
	- 修改 颜色

### 输出效果

- 如果 还想让海龟变色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220306-1646569974454)

- 而且 海龟颜色 和话语颜色 还不一样!
- 应该`如何`修改呢？🤔

### 都变色

- 动物是一种颜色
	- 说的话是另一种颜色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220421-1650545835278)

- 如果感觉 cowsay 输出文字范围有点窄
- 可以试试这个
	- boxes
	- 可以输出很宽的字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230201-1675257791501)

- 再找个 `好玩`的角色

### 小恶魔(daemon)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651150511109)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651150521727)

- 这种字符艺术还可以怎么玩呢？

### asciiart

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666695151717)

- http://patorjk.com/software/taag/#p=display&h=0&v=0&f=Ghost&t=oeasy%0A
- 可以自己画个 asciiart 么？

### ascii art

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220421-1650546793442)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220421-1650546800094)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220421-1650546807954)

- 可以让这些艺术字变色么？

### 循环变量

- 将复制的内容放到蓝桥云系统的剪贴板
- 在vi中"*p

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666694747765)

- 这样可以持续输出0-7之间的整数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666694759668)

### 变色

- 不但能变色
	- 还能变几种颜色
- 不但能变几种颜色
	- 还能无限循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666695477452)

- 持续输出 很乱
- 加个 清屏效果 
	- 就更好了

### 清屏

- print("\33[2J")

```
import time
num = 0
while True:
    print("\\33[2J\\33[10;0H")
    num = num + 1
    num = num % 8
    csi = "\\33["
    color = csi  + "3" + str(num) + "m"
    reset = csi + "0m"
    print(color)
    print("""
                    ('-.      ('-.       .-')
              _(  OO)    ( OO ).-.  ( OO ).
 .-'),-----. (,------.   / . --. / (_)---\_)   ,--.   ,--.
( OO'  .-.  ' |  .---'   | \-.  \  /    _ |     \  `.'  /
/   |  | |  | |  |     .-'-'  |  | \  :` `.   .-')     /
\_) |  |\|  |(|  '--.   \| |_.'  |  '..`''.) (OO  \   /
  \ |  | |  | |  .--'    |  .-.  | .-._)   \  |   /  /\_
   `'  '-'  ' |  `---.   |  | |  | \       /  `-./  /.__)
     `-----'  `------'   `--' `--'  `-----'     `--'      """)
    print(reset)
    time.sleep(0.2)
```

### 自定义小动物

- 如果再把报时也放进去...

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665497879185)

- 让她们 在终端
	- 变化颜色吧！！
- 发个 动态 
	- 纪念 这五彩斑斓的一刻！

### 总结

- 这次 将asciiart和颜色 配合起来玩
	- 7种 基本色
	- 变化多端
- 不过到 目前为止
	- 改的 都是`前`景色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674911360310)

- 可以自己定制小动物吗？
- 我们 下次再说！👋
