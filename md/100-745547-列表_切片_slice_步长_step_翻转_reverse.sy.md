#  列表_切片_slice_步长_step_翻转_reverse 

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1oWWRzZEjm)
- 上次 对切片 赋了值
	- 新切片 
		- 可以 接到 头上
		- 也可以 接到 尾巴上
		- 还可以 接到 中间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1795665/uid1190679-20250328-1743127010464) 

- 字符串 也可以 进行切片 吗？？🤔

### 字符串的切片

```
s = "i love python very much!"
s 
s.index("python")
len("python")
s.index("python") + len("python")
s[7:13]
```

- 先来看看
	- 字符串的切片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669103328374)

- 可以配合
	- len
	- index
	- slice
- 综合使用

### 实际演练

- `右键`单击 左上角的小房子
	- 点击 检查

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231206-1701830867802)

- 右键检查器中的img标签
	- 复制 - 整体html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701608180362)

### 字符串切片练习

- 将复制出来的代码
	- 粘贴到 系统剪贴板

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701608271336)

- 进入游乐场

```
s = ''''''
```

- 在六个引号的正中间
	- 粘贴代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701608404702)

- 目标是 找到小房子图片 的 网址

### 具体操作

```
html = '''<img data-v-6a0832fb="" data-v-a41ffba8="" src="https://static.shiyanlou.com/lanqiao/frontend/dist/img/home-icon.1aa68c2.png">'''
s = "src=\""
start = html.index(s)
word_len = len(s)
start = start + word_len
end = html.index("\"",start)
url = html[start:end]
url
```

- 过程
	- 先找到`src=\"`的位置作为开始
		- 注意双引号需要转义 
	- 然后找到这个位置后面引号的位置
	- 最后通过这两个位置确定图片网址

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736388276790) 

- 这图片能找到吗？

### 打开链接

- 在链接上右键
	- 打开链接

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736388325637) 

- 火狐打开图片
	- 右键连接地址打开链接
	- 检查图片

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736388392299) 

- 确实找到了home
- 文本处理的第一步 
	- 就是`分词`

### 分词到语法树

- py文件 经过tokenize的过程
	- 纯文本 变成 一个个的词(token)

``` 
array[index] = (index + 4) * (2 + 6)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631578760581)

- 看来 简单的 一个赋值
	- 也要 分词
- 切片(slice)还有什么细节吗？

### 查看文档

- https://docs.python.org/3/library/stdtypes.html#mutable-sequence-types

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669102603850)

- 而且 stop 后面 还 有冒号
	- 后面 再跟 一个step
- step 以前见过

### range

- step 步长
	- 我们在range里面见过

```
help(range)
```

- 查看帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669102715743)

- 三个参数
  - 开始值 包括
  - 结束值 不包括
  - 步长值 递增的大小

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701612067871)

- 怎么玩来着？

### 步长 step

```
list(range(0, 10 ,3))
list(range(0, 10 , 4))
list(range(5, 10 , 4))
```

- 步长步长
	- 这一步有多长

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250331-1743384131208) 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669102942723)

- 我们现在来深入研究slice的三个参数

### slice三个参数

```
nlist = list(range(10))
nlist
nlist[::1]
nlist[::2]
nlist[1::2]
nlist[1:8:2]
nlist[1:8:3]
nlist[3::3]
```

- slice三个参数也是
  - 开始值 包括
  - 结束值 不包括
  - 步长值 递增的大小

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250323-1742736775976) 

- 步长可以为 0 么？

### 步长为 0

```
nlist = list(range(10))
nlist
nlist[1:5:]
nlist[1:5:0]
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250323-1742736983062) 

- 出现了 ValueError 
	- 切片步长不能为 0
- 那步长可以是负数么？🤔

### 步长为负

- 步长为-1 
	- 无法 从1到5 

```
nlist = list(range(10))
nlist
nlist[1:5:]
nlist[1:5:1]
nlist[1:5:-1]
```

- 但可以 
	- 从5到1

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250323-1742737061406) 

- 想要 步长为-1

### 倒序

```
nlist[5:1:-1]
```

- 依然 是 前闭后开
	- 依然 不包括 stop 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250323-1742737110481) 

- 这倒序 怎么理解？

### 倒着走

- 步长为负 
	- 就是  倒着走起来😄
	- 从5到1
		- 开始位置 是 高索引
		- 结束位置 是 低索引
		- 步长为负数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669103576755)

- 步长 可以省略 么？

### 省略

```
nlist
nlist[::]
```

- 步长缺省值为1

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736389694343) 

- 如果设置step为-1呢？

### 反转

```
nlist
nlist[::-1]
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250323-1742737167554) 

- 开始结束缺省时
	- 步长为-1为翻转列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701612113506)

- 这怎么理解？

### 向后转

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669714598104)

- 向后转
	- 队头变队尾
	- 队尾变队头

```
nlist[::-1][::-1]
```

- 两次向后转
	- 就转回来了


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250323-1742737211802) 

- 列表 有专门方法 可以反转吗？？🤔

### reverse方法

```
help(list.reverse)
```

- 列表类 有 reverse方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669103981742)

- 具体怎么用呢？

### 代码

```
nlist = list(range(10))
nlist
nlist.reverse()
nlist
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250323-1742737256860) 

- reverse 
	- 就 翻转着来
	- 就是步长为-1
	- 倒着走
- reverse方法 和 [::-1] 有什么区别呢？

### 区别

```
nlist = list(range(10))
nlist
nlist.reverse()
nlist
```

- reverse 方法
	- 直接 改变 调用他的 原列表对象

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250323-1742737316296) 

### 对比

```
nlist = list(range(10))
nlist[::-1]
nlist
```

- [::-1] 不改变 原列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250323-1742737358134) 

- 除非将其赋给原列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250323-1742737385638) 

- 这个reverse单词
	- 如何理解呢？

### 词源

- reverse 来自于 vert

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674863105270)

- turn 和 vert 是同源的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674859170802)

- 总结去

### 总结🤔
- 这次 我们研究了列表的 步长step
	- 步长步长 就是 步子有多长
- 步长 和 range的参数很像
	- 开始值start
	- 结束值stop
	- 步长值step
	- 也是前闭后开
- 步长-1 可以 倒着走

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669104330115)

- 倒着走 `好玩`吗？？😄
- 下次再说 👋
- [配套视频](https://www.bilibili.com/video/BV1oWWRzZEjm)

