---
show: step
version: 1.0
enable_checker: true
---

# 本章回顾

## 我们来回顾一下 😌

**上一部分我们都讲了什么？**🤔

- dpkg 本地包管理
- apt 高级包管理

#### 我们搜搜使用 linux logo 能否在源上找到软件包

```shell
# 注意这里 linux 和 logo 有空格
apt search linux logo
# 查到两个文件 但是我们只看 linuxlogo 的信息
apt show linuxlogo
```

那我们怎么安装他呢？查一下手册，📕 应该是这样：

```shell
apt install linuxlogo
```

**但是系统提示权限不够，如何提权限呢？**🤔

## 戴上面具 👺

**权限不够的问题如何解决？** 🤫

比如就我目前的用户身份，不能执行这条命令。root 用户是系统最根本的用户，最重要的用户，所以 root 用户有权限执行任何命令。所以如果我们戴上了 root 用户的面具 👺，我们就是 root 用户了，那么我们 👺 也就能执行任何命令啦～那什么应该使用什么命令呢？

**`sudo` 命令可以让我带上 root 的面具，像这样：**👺

```shell
sudo apt install linuxlogo
```

我们使用 sudo 戴上了面具，然后 apt 成功从源下载软件包并下载到硬盘里，那么这个东西能用吗？🤪 我们来试试：

```shell
linuxlogo
```

**真的可以看到发行版的 logo!🍥 包括了：**

- 内核版本
- 发行版版本
- 编译日期
- cpu 速度

那么这个文件放在哪里了呢？

### 灵魂三问 🤔

我们通过之前学的“灵魂三问”来查询：

```shell
whatis linuxlogo
whereis -b linuxlogo
which linuxlogo
```

- 大家还记得Python版本选择吗？

### 运行起来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210629-1624976863533)

- 我们可以查看到 linuxlogo 的硬盘位置
- 想要更多细节可以查询手册～📕
- 可以下载吗？🤪可以灵魂三问吗？
- 🤪可以手册吗？
- 🤪玩起来吧！🎲

```shell
man linuxlogo
linuxlogo -F oeasy
```

- 为什么能够彩色呢？
- 查看一下源代码吧

### 找到源头
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210910-1631261818922)

- 找到他的homepage
- 然后进去

### 下载
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210910-1631261843641)

- 下载那个红色的linux.tar.gz文件

### 解压

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210910-1631261928110)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210910-1631261907189)

- tar -zxvf ./下载/ <kbd>Tab</kbd>

### 源码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210910-1631262481224)

### 名字文件
- cat 打开名字文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210910-1631262497840)

### 细节
- vi打开名字文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210910-1631263133305)

- 看不懂
- 但是隐约感觉到那就是控制颜色的东西
- 以后也许能懂

### 遍历所有的logo

```
for i in {1..30};do linux_logo -f -L $i;sleep 0.5;done
```

- 暗中观察

### 类似命令

- 这个screenfetch 和 linuxlogo有点像

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210629-1624976928030)

### 总结

- 这次研究的是linuxlogo
- **还有什么好玩的命令吗？**🤔
- 我们下次再说！👋
