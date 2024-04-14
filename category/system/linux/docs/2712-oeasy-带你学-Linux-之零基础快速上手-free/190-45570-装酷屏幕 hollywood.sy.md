---
show: step
version: 1.0
enable_checker: true
---

# 本章回顾

## 我们来回顾一下 😌

**上一部分我们都讲了什么？**🤔

- 屏幕故障风格的软件包 bb，可以设置音频

我们这次装一个酷，下个 hollywood 软件包：🎭 

```shell
apt show hollywood
apt search hollywood
```

## hollywood🎭

**这软件可以模拟出好莱坞情景剧中的黑客电脑的样子，不过为了下载最新的软件包，我需要更新一下源**

#### 为什么更新源？😳

- 不用改变源 `sources.list` 的配置（服务器地址没变）
- 更新源是为了把源（sources.list 上对应的 url）的最新信息同步到本地
- 如果软件包有更新的话
- 会发布更新到主服务器对应的发行版版本的位置
- 主服务器内容六小时之内同步到镜像服务器。

### 下载 hollywood 🎭

```shell
sudo apt update
apt show hollywood
sudo apt install hollywood
```

- `sudo` 是用管理员面具 👺 执行
- `apt` 是高级软件包管理程序
- `update` 更新的内容包括
  - 把最新的软件包信息从镜像同步到本地
  - 在本地记录软件包列表信息
  - 在本地分析软件包依赖关系树
  - 在本地读取状态信息
- 然后我们去跑一下 hollywood🎭

### 执行

```shell
hollywood
```

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/hollywood.png)

### 总结 🤨

- 这个东西真的很酷
- 👻 退出的话用 <kbd>ctrl</kbd>+<kbd>c</kbd>
- 回到原来的 shell 用命令 zsh
- 下面的关于 cpu、日期等信息仍然保留
- 用这个当做屏保，无意中让 MM 看看，哈哈！
- 目前我们只会安装软件包，如何删除软件包呢？🤔 
- 下次再说！👋
