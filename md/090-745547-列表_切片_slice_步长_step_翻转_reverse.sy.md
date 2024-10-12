---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 切片 - slice - 步长 - step

## 回忆

- 上次我们了解了切片操作
	- 切片和索引有点像
	- 索引得到的是一个列表项
	- 切片得到的是一个列表
	  - 里面有很多列表项
- 切片主要有2个端点
  - 这两个端点本质上都是索引值
  - 开始 包括在内
  - 结束 不包括在内

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669101884732) 

- 切片具体有什么应用呢？

### 字符串的切片

- 先来看看
	- 字符串(str)上的应用
- 字符串也是容器
	- 也支持切片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669103328374)

- 可以配合
	- len
	- index
	- slice
- 综合使用

### 实际演练

- 右键单击 左上角的小房子
	- 点击检查

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231206-1701830867802)

- 右键检查器中的img标签
	- 复制
		- 整体html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701608180362)

### 字符串切片练习

- 将复制出来的代码粘贴到系统剪贴板

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701608271336)

- 进入游乐场

```
s = ''''''
```

- 在六个引号的正中间粘贴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701608404702)

- 想要从中找到src的地址

### 具体操作



![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701608920752)

- 过程
	- 先找到`src=\"`的位置作为开始
		- 注意双引号需要转义 
	- 然后找到这个位置后面引号的位置
	- 最后通过这两个位置确定图片网址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701608999299)

- 验证
	- 打开火狐
	- 右键连接地址打开链接
	- 检查图片

### 提取连接中的域名

- 可以将下句复制进入剪贴板

```
<a href=\"http://oeasy.org\">oeasy</a>
```

- 粘贴到游乐场 并赋给 s_anchor
	- 然后进行切片
	- 把超链接提取出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220414-1649940855107)

- 先找到`http://`的位置
  - 9
- 然后找到`http://`的位置后面的引号的索引
  - 25

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220414-1649940878106)

- 这样我们就获得了超链接网址
- 我们也可以把协议和网址分离

### 继续切片

- 其中 7 来自 http://
	- 总共 7 个字符
	- 这样可以分离出协议 Protocol 和网址 url

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631578538762)

- 不止这样
	- 所有的字符串都可以通过切片来切分开
	- 整个 python 就是通过词法分析器
	- 切分为一个个的单词的

### 分词到语法树

- 经过tokenize的过程
	- 纯文本变成一个个的词(token)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631578760581)

- array[index] = (index + 4) \* (2 + 6)
	- 看起来简单的一个赋值表达式
	- 其实也要从单词到语法进行分析
- 才能执行
- 切片(slice)还有什么细节吗？

### 查看文档

- https://docs.python.org

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669102603850)

- 而且 stop 后面还可以跟冒号
	- 后面再跟变量
	- 变亮叫做step
- 这step有点耳熟

### range

- 查看帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669102715743)

- 三个参数
  - 开始值 包括
  - 结束值 不包括
  - 步长值 递增的大小

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701612067871)

- 怎么玩来着？

### 步长 step

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669102835721)

- 步长步长
	- 这一步有多长

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669102942723)

- 我们再回来看看slice

### slice三个参数

- slice三个参数也是
  - 开始值 包括
  - 结束值 不包括
  - 步长值 递增的大小

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669103413149)

- 步长可以为 0 么？

### 步长为 0

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631576294168)

- 出现了 ValueError 切片步长不能为 0
- 那步长可以是负数么？🤔

### 步长为负

- 步长为负就是倒着走

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669103576755)

- 开始位置是高索引
- 结束位置是低索引
- 步长为负

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631577940680)

- 步长为-1 
	- 是无法从 1 到 5 的
	- 但是可以从 5 到 1
- 前闭后开
- 步长可以省略么？

### 省略

- 步长缺省值为1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669103871660)

- 开始结束缺省时
	- 步长为-1为翻转列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701612113506)

- 列表翻转有一个专门的函数
	- reverse

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669103981742)

- 具体怎么用呢？

### 查询文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669714598104)

- 向后转
	- 队头变队尾
	- 队尾变队头

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669104021751)

- 这个reverse如何理解呢？

### 词源

- reverse 来自于 vert

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674863105270)

- turn 和 vert 是同源的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674859170802)

- reverse 
	- 就 翻转着来
	- 就是步长为-1
	- 倒着走
- 步长还可以怎么用呢？

### 步长应用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631578216063)

- 总结去！

### 总结🤔
- 这次 我们研究了列表的 步长step
	- 步长步长 就是 步子有多长
	- 和 range的参数很像
		- 开始值start
		- 结束值stop
		- 步长值step
		- 也是前闭后开
- 步子可以倒着走
	- 倒着走有什么意思呢？
	- 可以翻转列表
	- 可以逆序切片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669104330115)

- 可以 根据切片
	- 删除 列表项 吗？🤔
- 下次再说 👋
