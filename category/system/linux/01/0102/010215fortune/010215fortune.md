---
show: step
version: 1.0
enable_checker: true
---

# 本章回顾

## 我们来回顾一下😌

#### 上一部分我们都讲了什么?🤔

- 把图像转化为了ascii🅰️字符画
- 并且修改了cowsay的图像素材的位置💡
- 我们想要让牛讲一个随机的笑话
- 首先我们要有个说笑话的软件包
 
```shell
# 下载fortune
sudo apt install fortune
#使用fortune
forture
```

#### 输出重定向📥

```shell
# 把本该输出到屏幕的fortune的结果,输出到cowsay
forture | cowsay
```

## 深入重定向
```shell
# 把本该输出到屏幕的fortune的结果,输出到cowsay
forture | cowsay
```
- fortune输出重定向到figlet
- figlet输出重定向到cowsay
![Image text](https://labfile.oss.aliyuncs.com/courses/2712/fortune_pipe.png)


## fortune的细节📒
- 文件在/usr/share/games/fortunes
- 可以用cat 查看相应的字典dat📒文件
- 攻击性笑话在/usr/share/games/fortunes
/off
- 想删除某类的笑话,就删除相应的dat文件
- 可以用-f列出所有列表
- 可以用百分比控制笑话来源

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/fortune.png)



### 总结🤨
- 如果想来点中文的笑话或者诗歌可以么?🤔
- 怎么来呢?下次再说!👋