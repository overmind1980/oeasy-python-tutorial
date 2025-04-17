---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次给网页添加了icon
- 用的是一句话

```
<head>
	<link rel="shortcut icon" href="/favicon.ico" />
</head> 
```

- head中添加link元素
	- rel属性为 "shotrcut icon"
	- href属性指向icon的位置
- icon元素是一种特殊的图像
	- 出现在特殊的位置
- 除了图像之外 
	- 网页中的音乐怎么嵌入呢?

### 想要播放mp3

- 这里有一个mp3
	- https://labfile.oss.aliyuncs.com/courses/3781/oeasy.mp3

- 尝试在火狐里面打开这个mp3

```
firefox https://labfile.oss.aliyuncs.com/courses/3781/oeasy.mp3 &
```

- 浏览器中出现播放器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240704-1720100727358)

### 检查代码

- body中的代码比较简单
	- 想办法复制

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240704-1720100916278)

```
<audio src=""https://labfile.oss.aliyuncs.com/courses/3781/oeasy.mp3 autoplay="" controls="" style="height: 40px; width: 66%;">
```

- 尝试运行

###  运行网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240704-1720101087231)

- 使用的是audio元素
	- src
	- autoplay
	- controls
	- style
- 这些属性什么意思?

### 查看文档

- audio元素
	- https://html.spec.whatwg.org/multipage/media.html#the-audio-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240704-1720101159212)

|属性|含义|
|---|---|
|src|素材来源|
|autoplay|自动播放|
|controls|控制器|

- style属性怎么没有?

### global attribute

- style在哪?
	- 点开
	- global attribtue
	- 全局属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240704-1720101806059)

### style

- style 是一个
	- global attribute
	- 全局属性
	- 所有元素 `都`有的 属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240704-1720101856724)

- 好像设置了
	- 高度
	- 宽度

```
<audio src="https://labfile.oss.aliyuncs.com/courses/3781/oeasy.mp3" autoplay="" controls="" style="height: 40px; width: 66%;">
```

- 此音频 使用的是 `绝对链接`
	- 可以换成相对链接吗?

### 相对链接

```
wget https://labfile.oss.aliyuncs.com/courses/3781/oeasy.mp3
```

- 然后再次编辑网页文件

```
<audio src="oeasy.mp3" autoplay="" controls="" style="height: 40px; width: 66%;">
```

### 浏览器正常显示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240705-1720145601426)

- 但是网络里面却没有传输mp3

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240705-1720145677277)

- 因为访问方式 是 本地方式(file://)
- 如何切换到 网络方式(http://) 呢?

### 拷贝内容

```
sudo cp *.* /usr/share/nginx/html/
sudo service nginx start
firefox http://localhost/a.html & 
```

- 将文件 复制到nginx根目录
	- 使用网络方式访问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240705-1720145954092)

- oeasy.mp3 就会由网络传输了

### 总结 🤔
- 这次了解了
	- audio元素
	- 音频
	- 主要属性是
		- src 音频文件
		- controls 播放器
		- autoplay 自动播放
- 除了audio之外
	- 有没有video呢?

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2746049/uid1190679-20241125-1732492094210) 

- 下次再说！👋