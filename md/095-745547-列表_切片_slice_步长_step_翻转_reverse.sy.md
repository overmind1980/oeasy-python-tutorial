---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 切片 - slice - 步长 - step

## 回忆

- 上次我们了解了
	- 切片操作
- 切片和索引有点像
	- 索引得到的是一个列表项
	- 切片得到的是一个列表
		- 里面有很多列表项
- 切片主要有2个端点
  - 这两个端点本质上都是索引值
  - 开始 包括在内
  - 结束 不包括在内
  - 前闭后开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669101884732) 

- 列表切片 有什么具体应用呢？🤔

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

```
html = """<img data-v-6a0832fb="" data-v-a41ffba8="" src="https://static.shiyanlou.com/lanqiao/frontend/dist/img/home-icon.1aa68c2.png">"""
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

### 提取域名

- 可以将下句复制进入剪贴板

```
s = """<a href="http://oeasy.org">oeasy</a>"""
```

- 粘贴到游乐场 并赋给 s_anchor
	- 然后进行切片
	- 把超链接提取出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220414-1649940855107)

- 先找到`http://`的位置
  - 9
- 然后找到`http://`的位置后面的引号的索引
  - 25

- 这样我们就获得了超链接网址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220414-1649940878106)

- 可以通过协议名http
	- 提取 网址 吗？

### 继续切片

- 其中 7 来自 http://
	- 总共 7 个字符
	- 这样可以分离出协议 Protocol 和网址 url

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631578538762)

- 不止这样
	- 所有的字符串都可以通过切片来切分开
	- 整个 py文件 就是 通过词法分析器
	- 切分单词

### 分词到语法树

- 经过tokenize的过程
	- 纯文本变成一个个的词(token)
- array[index] = (index + 4) \* (2 + 6)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631578760581)

- 看来简单的一个赋值
	- 也要从分词开始
- 切片(slice)还有什么细节吗？

### 查看文档

- https://docs.python.org

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669102603850)

- 而且 stop 后面还可以跟冒号
	- 后面再跟变量
	- 变亮叫做step
- 这step有点耳熟

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669102835721)

- 步长步长
	- 这一步有多长

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669102942723)

- 我们再回来看看slice

### slice三个参数

```
num_list = list(range(10))
num_list
num_list[::1]
num_list[::2]
num_list[1::2]
num_list[1:8:2]
num_list[1:8:3]
num_list[3::3]
```

- slice三个参数也是
  - 开始值 包括
  - 结束值 不包括
  - 步长值 递增的大小

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736389192371)

- 步长可以为 0 么？

### 步长为 0

```
num_list = list(range(10))
num_list
num_list[1:5:]
num_list[1:5:0]
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736389253734) 

- 出现了 ValueError 
	- 切片步长不能为 0
- 那步长可以是负数么？🤔

### 步长为负

```
num_list = list(range(10))
num_list
num_list[1:5:]
num_list[1:5:1]
num_list[1:5:-1]
```

- 步长为-1 
	- 是无法从 1 到 5 的
	- 但是可以从 5 到 1

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736389472836) 

- 怎么倒着走呢？

### 倒着走

- 步长为负就是倒着走
	- 开始位置是高索引
	- 结束位置是低索引
	- 步长为负 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669103576755)

```
num_list[5:1:-1]
```

- 真的可以倒着走

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736389572957) 

- 依然 是 前闭后开
- 步长 可以省略 么？

### 省略

```
num_list
num_list[::]
num_list[::-1]
```

- 步长缺省值为1

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736389694343) 

- 如果设置step为-1呢？

### 反转

```
num_list
num_list[::-1]
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736389851156) 

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
num_list[::-1][::-1]
```

- 两次向后转
	- 就转回来了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736389967918) 

- 有专门函数干这个吗？

### 函数

```
help(list.reverse)
```

- 列表翻转有一个专门的函数
	- reverse

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669103981742)

- 具体怎么用呢？

### 代码

```
num_list = list(range(10))
num_list
num_list.reverse()
num_list
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736390228872) 

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
- reverse方法 和 [::-1] 有什么区别呢？

### 区别

```
num_list = list(range(10))
num_list
num_list.reverse()
num_list
```

- reverse 方法
	- 直接 改变 调用他的 原列表对象

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736390573763) 

```
num_list = list(range(10))
num_list[::-1]
num_list
```

- [::-1] 不改变 原列表

```
num_list = num_list[::-1]
num_list
```

- 除非将其赋给原列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745547/uid1190679-20250109-1736390643247) 

- 总结去

### 总结🤔
- 这次 我们研究了列表的 步长step
	- 步长步长 就是 步子有多长
- 步长 和 range的参数很像
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
