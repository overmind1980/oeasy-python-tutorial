---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次讲到
	- 在Marc和NCSA的努力下www大爆炸
	- 但是果实却被NCSA窃取
	- Marc愤而出走
	- 毕业证都不要了
- 他能复仇吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240801-1722487939564)

- 若干年后
	- 如何让伊利诺伊大学竖起自己的牌子
	- 为自己正名！
	- 他是如何做到的？
- 我们先总结一下所有的嵌入式元素？🤔

### 首先是网站的图标

- 网站图标 的
	- 制作和设置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240704-1720091849911)

- https://www.bitbug.net/

### 查看文档

- 我们所学的是
	- https://html.spec.whatwg.org/multipage/
	- Embedded content
	- 嵌入的内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240706-1720259135653)

|元素|内容|
|---|---|
|img|图像|
|audio|音频|
|video|视频|
|iframe|嵌入网页|

- 这些元素有什么共性吗?

### 共性一

- 都有一个
	- src属性
		- https://html.spec.whatwg.org/multipage/media.html#attr-media-src
	- 属性值是一个url

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240706-1720260201514)

### 共性二

- 都是在网页中嵌入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240706-1720258406284) 

- 如果将iframe和文字都放到一个p中
	- 会如何呢?

### 嵌入网页

- 修改网页

```
<p>before iframe
<iframe width=330 height=86 src="https://baidu.com"></iframe>
after iframe</p>
```

- 刷新效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240706-1720259452307)

- 这种嵌入式的元素
	- 真的是嵌入进来的
	- 像字符一样嵌入进字符流

### 共性三
- 但是这个嵌入的元素
	- 具有高度、宽度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240706-1720260424772)

- 但是上次好像有个例外

### audio元素的例子

- audio元素 
	- 没有 高度宽度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240706-1720260595881)

- 但是如果 要播放器
	- 就要有个外轮廓了

### audio元素

```
<audio src=""https://labfile.oss.aliyuncs.com/courses/3781/oeasy.mp3 autoplay="" controls="" style="height: 40px; width: 66%;">
```

- 当时是通过style元素里面
	- 设置值来完成的

### 总结 🤔
- 这次总结一下本节内容
- 我们学习了
	- emmbeded content
	- 嵌入式内容

|元素|内容|
|---|---|
|img|图像|
|audio|音频|
|video|视频|
|iframe|嵌入网页|

- 这些嵌入式元有三个特征
	- 通过src设置源头
	- 像字符一样嵌入在字符流中
	- 具有高度、宽度
- 但是audio元素 与众不同
	- 高度宽度 不是属性
	- 而是在style中设置的

```
<audio src="https://labfile.oss.aliyuncs.com/courses/3781/oeasy.mp3" autoplay="" controls="" style="height: 40px; width: 66%;">
```

- 这个style元素怎么理解呢??🤔
- 下次再说！👋