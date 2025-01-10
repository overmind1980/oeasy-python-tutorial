---
show: step
version: 1.0
enable_checker: true
---

# 将图片转化为字符画艺术(asciiart)

## 回忆上次内容

- 上次我们
	- diy了 自己的小动物
	- 这很亚文化
		- 很酷炫的 亚文化
		- 不是吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692104435694)

- 能否将图片 
	- 转化为asciiart 呢？？

### 准备环境 aview 🅰️

```shell
sudo apt update
sudo apt install aview
sudo apt install imagemagick
```

- 下载 字符画软件
	- aview
	- imagemagick

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230103-1672708464737)

### 准备图片 

- 在本机 下载图片
	- 之后 上传到蓝桥云

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211118-1637204997511)

- 注意 上传的图片 在Code文件夹中
	- `cd Code` 
	- 可以 进入Code文件夹

- 最好选择用 png-8格式
	- 成功率高

### 运行程序

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/asciiview.png)

- 使用 asciiview 可以
	- 将图片 转化为 asciiart

```shell
asciiview panda.jpg
```

### 存储字符画

- 字符画 可以
	- 保存为文本、网页等形式
- 在运行
	- asciiview xxx.png之后
	- 出现了 字符画面
- 注意 图片中的 纯黑部分 
	- 是以空格形式 来出现的
- 按下 快捷键<kbd>s</kbd>
	- 会 出现一个菜单
	- 如 下图

![Image text](https://labfile.oss.aliyuncs.com/courses/2712/saveImage.png)

- 然后选择<kbd>1</kbd>
	- Text格式
	- 后面 再设置路径和字体大小
	- 一路下一步

### 保存过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665495993965)

- 到这一步 选<kbd>8</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665496013025)

- 提示问是否保存当前文本
	- 然后按<kbd>y</kbd>
	- 确认 保存
- 小窗自动关闭

### 观察文件

- ls 可以看到文件了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230107-1673083733719)

- 字符画 长什么样子 呢？

### 国画风

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651151365586)

- cat horse.txt

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651151346390)

### 表情风

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651151395424)

### 甲骨文风

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651151417466)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651151429870)

### 线稿风格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665496088819)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665496102295)

- cat 打开 这个xxx.txt
	- 观察效果 
- 可以 把这个小动物 变成 
	- cowsay可以用的 小动物吗？

## 总结

- 这次我们
	- 将图片做成了 asciiart
	- 这依然很亚文化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674912364746)

- 但是这个asciiart
	- 可以放到cowsay里面吗？
- 我们下次再说！👋
