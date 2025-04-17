---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次网景公司的上市
	- 解决了版权问题
	- 占领了市场
	- 赢得了注意
	- 赚取了利润
- 网景公司 
	- 终于 顺利上市	
	- 资本的推波助澜
	- 媒体的热炒
	- 一时风头无两
- 这一切的基础
	- 就是网景的平台战略
	- 平台的基础就是javascript
- javascript 研究过了
	- 变量类型
	- 数学运算
- 为什么alert天生就能弹出对话框呢？
- 有没有关于alert的官方文档呢？

### alert

- 开启火狐
	- 查看器 -> 控制台
	- 输入alert

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723034329448)

- 提示我alert是一个函数
	- 回车之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723034353242)

- 可以看到一些函数的细节
- 还有什么函数呢？

### help

- 输入help
	- 看看效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723037937763)

- 弹出了标签页
	- 网址mozilla.org
	- 有点耳熟

### mozilla

- mozilla就是
	- mosaic kill gozilla
	- 网景公司著名吉祥物
	- 火狐和网景好像还有点关系呢？！🙂‍↕️

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723037992282)

- mozilla中如何查询alert呢？

### mdn

- develope.mozilla.org
	- 火狐开发者网络
	- MDN
	- mozilla developer network

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723038191924)

- 搜索alert

### 搜索结果

- alert是
	- window.alert

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723038348738)

- window是什么？

### window

- 当前的位置是
	- Window.window
- window是一个全局变量
	- 指的是当前窗口
- window中有函数
	- alert
	- open

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723038568554)

- 去游乐场试试

### window

- window.alert
	- 其实就是alert
	- 效果一致

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723038651951)

- 试试open

### open

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723038745250)

- 试着open这个网址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723038776116)

- 确实能在新标签页中
	- 打开lanqiao
- window中还有什么函数呢？

### window

- 向上找到window
	- 查看试试方法
	- 找到Window.prompt
	- 这不是提示符的意思吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723039062283)

- 怎么用呢？

### window

- 点开函数
	- 可以有2参数
		- 提示词
		- 默认值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723039185231)

- 这个提示符能用吗？

### 看看例子

- 可以将提示的结果
	- 赋给一个变量
	- 这样就可以存住了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723039160446)

- 试试去！

### 直接尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723039338791)

- 这次弹出的对话框里面可以输入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240807-1723039369825)

- 输入结果也可以存住

### 总结 🤔

- 这研究了alert函数的来由
	- 找到火狐关于js的帮助网站
	- MDN
	- Mozilla Developer Networks
- alert的本质是
	- window.alert
- window就是
	- 当前窗口
	- window中除了alert
	- 还有很多函数
	- 比如prompt
	- 可以从对话框中传递参数
- 可以拿到参数然后做一些判断吗？🤔
- 下次再说！👋