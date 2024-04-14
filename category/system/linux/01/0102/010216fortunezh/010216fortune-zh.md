---
show: step
version: 1.0
enable_checker: true
---

# 本章回顾

## 我们来回顾一下😌

#### 上一部分我们都讲了什么?🤔

- 下载fortune
- 输出重定向到cowsay
- 多重输出重定向
- fortune的细节
- 有没有中🀄️文的fortune呢


```shell
# 搜索一下fortune
apt search fortune chinese
```
- 找到了,去下载

## 中🀄️文fortune
#### 下载中文fortune

```shell
sudo apt install fortune-zh
fortune-zh
```
- /usr/share/games/fortunes/{tang300,song100}这两个是中🀄️文的是词库
- tang300唐诗三百首
- song100一百首宋词
- 输出重定向到cowsay


![Image text](https://labfile.oss.aliyuncs.com/courses/2712/shi.png)

###彩色🎨的原理‼️

```shell
vi tang300
```

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/caise.png)

- ^[[32m《感遇·其一》^[[m
- 30~37 都可以设置并修改颜色🎨
- 也可以建立自己的彩色俗语库


### 总结🤨
- 下载了中🀄️文谚语
- 输出重定向了中文谚语
- 理解词典和颜色
- 下次讲什么?🤔
- 下次再说!👋