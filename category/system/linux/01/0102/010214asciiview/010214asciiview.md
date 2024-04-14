---
show: step
version: 1.0
enable_checker: true
---

# 本章回顾

## 我们来回顾一下😌

#### 上一部分我们都讲了什么?🤔

- 下载安装✏输入法️
- 输出中文
- 找到cowsay的图形位置
- 我们还想把一些画面变成字符画


### 下载aview🅰️

- 字符画软件包aview、imagemagick

```shell
sudo apt install aview
sudo apt install imagemagick
```
- aview只接受专门的格式
- 使用asciiview可以转化格式
- bmp格式更容易被接受⚠️

```shell
asciiview panda.jpg
```

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/asciiview.png)

###存储字符画

- 通过查询帮助📕,发现字符画可以保存
- 可以把字符画保存为文本、网页等形式
- 快捷键是s,然后一路下一步
- 最后存在工作文件夹pwd


![Image text](https://labfile.oss.aliyuncs.com/courses/2712/saveImage.png)



### 结合cowsay🐄
```shell
# 在确认cowsay已经安装的情况下
cd /usr/share/cowsay/cows
# 复制一个cow文件
sudo cp apt.cow oeasy.cow
#是用编辑器编辑
sudo gedit oeasy.cow ~/Code/ooo.txt 
```

- 把原来的字符画删除
- 配合上自己的字符画
- 然后输出

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/ooo.png)

### 总结🤨
- 把图像转化为了ascii🅰️字符画
- 并且修改了cowsay的图像素材的位置💡
- 我们能让cowsay随机讲讲笑话吗?
- 下次再说!👋