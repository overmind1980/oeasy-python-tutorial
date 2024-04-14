---
show: step
version: 1.0
enable_checker: true
---

# 本章回顾

## 我们来回顾一下😌

#### 上一部分我们都讲了什么?🤔

- 讲了火狐🦊
- 火狐的位置
- 用命令行打开多个网址
- 火狐🦊的升级
- 火狐🦊桌面建立快捷方式
- 我们可以知道桌面快捷方式文件的名称么?

## 从文件管理器🗂到命令行📟

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/file)

- 按住文件
- 拖动到terminal📟上面
- 这样我们就知道文件的绝对路径了
- 文件夹也可以拖动
- 我们也可以先打上命令
- 然后把文件作为参数拖动过来


![Image text](https://labfile.oss.aliyuncs.com/courses/2712/fileAsArguement )


## 从命令行📟到文件管理器🗂
- 我们在命令行的位置输入pwd
- 把路径复制到剪贴板
![Image text](https://labfile.oss.aliyuncs.com/courses/2712/filepath.png)

- 把路径粘贴到文件管理器的地址栏
- 然后可以到达命令行所在的位置了

####也可以用nautilus命令打开文件管理器

## nautilus


```shell
sudo apt update
sudo apt install nautilus
nautilus .
nautilus /etc
```



- nautilus . 打开当前路径
- nautilus /etc 打开根下的etc文件夹
- <kbd>ctrl</kbd>+<kbd>c</kbd>结束进程



### 总结🤨
- 这次了解了gui(图形用户界面)和cli(命令行界面)之间关系
- 可以把文件从gui拖到cli
- 也可以吧cli的路径在gui中打开
- 了解了桌面上的快捷方式的本质是个文件
- 图形用户界面还有什么可玩的呢?
- 下次再说!👋