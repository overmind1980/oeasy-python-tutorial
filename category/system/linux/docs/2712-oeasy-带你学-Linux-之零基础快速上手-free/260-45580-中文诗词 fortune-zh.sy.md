---
show: step
version: 1.0
enable_checker: true
---

# 本章回顾

## 我们来回顾一下 😌

**上一部分我们都讲了什么？**🤔

- 下载 fortune
- 输出重定向到 cowsay
- 多重输出重定向
- fortune 的细节

## 那有没有中 🀄️ 文的 fortune 呢？

```shell
# 搜索一下 fortune
apt search fortune chinese
```

搜索到了，让我们去下载吧～

#### 下载中文 fortune

```shell
sudo apt install fortune-zh
fortune-zh
```

- /usr/share/games/fortunes/{tang300,song100}这两个是中 🀄️ 文的是词库
- tang300 唐诗三百首
- song100 一百首宋词
- 输出重定向到 cowsay

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/shi.png)

```shell
fortune-zh tangb300 | cowsay -f beavis.zen 
```

### 彩色 🎨 的原理‼️

```shell
#进入fortunes-zh的素材文件夹
cd /usr/share/games/fortunes/
#查看素材
vi tang300
```
![tang300](https://labfile.oss.aliyuncs.com/courses/2712/tang300.jpg)
![Image text](https://labfile.oss.aliyuncs.com/courses/2712/caise.png)

- ^[[32m《感遇·其一》^[[m
- 30~37 都可以设置并修改颜色 🎨
- 也可以建立自己的彩色俗语库

#### 总结 🤨

- 下载了中 🀄️ 文谚语
- 输出重定向了中文谚语
- 理解词典和颜色
- 下次讲什么？🤔
- 下次再说！👋
