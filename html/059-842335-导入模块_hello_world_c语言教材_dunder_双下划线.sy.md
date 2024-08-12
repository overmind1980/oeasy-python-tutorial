---
show: step
version: 1.0
enable_checker: true
---

# Hello World!

## 回忆上次内容

- 上次了解了 try 的完全体
  - try
	- 尝试运行
  - except
	- 发现异常时运行的代码块
  - else
	- 没有发现异常时运行的代码块
  - finally
	- 无论是否发现异常最终都要运行的代码块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672366714550)

- 上图就是python连接数据库的类库psycopg中
	- try的具体应用
		- 如果成功 就 提交commit
		- 如果失败 就 回滚rollback
		- 无论成功失败 都要 断开连接
- python 是 
	- 如何引入 外部类库的 呢？🤔

### 回忆

- 我们为了输出完整的报错信息
	- 引入了traceback 这个模块(module)

```
import traceback
try:
	a
except:
    print("in except---------")
    traceback.print_exc()
    print("in except=========")
```

- 于是我们可以使用
	- traceback.print_exc()
	- traceback 模块(module) 的
	- print_exc 函数(function)
- 为什么 python 
	- 不用引入任何 模块
	- 就能直接调用 print 函数？

### 回忆过去

- 为什么 python
	- 能认识 print？
	- 而不认识 pront？？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663383962521)

- 具体的 帮助细节
	- `怎么`查呢？

### help(print)

- 什么不会 就help什么
	- `help(print)`
	- 把函数名 作为参数 传进去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646288588886)

- 发现print是
	- builtins模块 
	- 内建的函数
- 按<kbd>q</kbd> 
	- 退出帮助

### 类似

- 类似的 还可以
	- help(quit)
	- help(help)
	- help(ord)
	- help(chr)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418149974)

- 都是 in module builtins
	- builtins 具体是什么呢？

### 内置 函数

- 首先运行 python3(游乐场)
	- 在游乐场中 键入 `dir()`
	- 可以看到 游乐场的自带模块

- dir() 这个函数 
	- dir的 意思 是 
	- directory文档目录
	- 列出的是 
		- 已经 导入的 模块 
		- 已经 声明的 变量 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700830344959)

- 调用 这个函数 去看看 
	- 当前游乐场的 scope(作用域)中
	- 载入了 哪些模块
	- 定义了 哪些变量

### 内建模块

- 比如 `__builtins__`这个模块
	- builtins 两边 
	- 都加双下划线
- 下划线
	- <kbd>shift</kbd> + <kbd>-</kbd>
	- 得到 <kbd>_</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240326-1711415655588)

-  `__builtins__` 
	- 是不是 是内建模块呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677417942228)

- 模块里面 有些`什么`呢？

### `help(__builtins__)`

- 什么不会 
	- 就help什么

- `help(__builtins__)`
	- 注意 内置模块builtins左右
	- 还有 两个下划线

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211211-1639232283926)

- 可以查询到`__builtins__`模块的帮助文件
	- 返回的 这些函数和子模块
	- 都隶属于 `__builtins__` 这个模块
- 这模块里有些什么？

### 翻阅

- 按方向键 
	- 可以翻阅文档
	- 内容 真的很多 啊
	- 找找 我们 熟悉的东西

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699438103505)

- <kbd>ctrl</kbd> + <kbd>f</kbd>
	- 向前翻阅
	- forward
- <kbd>ctrl</kbd> + <kbd>b</kbd>
	- 向后翻阅
	- backward
- 操作方法 与vim 相同

### 查找函数

- 按下<kbd> / </kbd>
	- 再键入print 
- 注意左下角
	- 回车

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699438539471)

- <kbd>n</kbd>
	- 下一个匹配单词
	- next
- <kbd>N</kbd>
	- 上一个匹配单词

### 找到位置

- 通过不断next
	- 找到 print的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699438886260)

- 这和help(print)一摸一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699439381889)

- print 是 builtins里面的 内建函数
	- 其中.(点)的意思就是里面的
-  `__builtins__` 这个模块 就是 内建模块
- 为什么 要在 builtins 两边 各加 两个下划线呢？

### dunder来历

- 两个下划线 
	- Double UNDERscore
	- 省略读法 dunder 

- `__builtins__` 
	- 读作 dunder builtins
	- dunder 是 `什么`意思呢？
- 最初提议

> Dunder (Double UNDERscore) Alias

>> Mark Jackson was the first to suggest dunder as a speech shorthand for double underscores (__) in a reply to a query from Pat Notz. Ned Batchelder later stressed the need for a way of pronouncing __:

>> An awkward thing about programming in  Python : there are lots of double underscores. [snip] My problem with the double underscore is that it's hard to say. How do you pronounce __init__? "underscore underscore init underscore underscore"? "under under init under under"? Just plain "init" seems to leave out something important. I have a solution: double underscore should be pronounced "dunder". So __init__ is "dunder init dunder", or just "dunder init".


- 在发明 dunder 之前
	- `__init__` 要念作 double underscore init
		- 其中的double underscore 
			- 有17个字符
			- 发音是6声
		- 而dunder 
			- 只有6个字符
			- 发音是2声
- 从此 dunder 这个单词
	- 就被发明出来了
- 可以查询出
	- 内建模块中的 函数名 吗？

### dir()

- `dir(__builtins__)`
	- builtins 前后 都有 双下划线
	- 双下划线 叫做 dunder
	- `__builtins__` 念作 `dunder builtins`

- `__builtins__` 是 
	- 内建模块
	
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700831131031)

- 内建模块里 有好多 老熟人
	- exit()
	- dir()
	- help()
	- print()
- 所以 游乐场
	- 认识print
	- 不认识pront
- 如果我想要查询`__builtins__`模块
	- 更详细的信息 应该如何来着？

### 详查模块

- 只查函数名目录

```
dir(__builtins__)
```

- 详细查看帮助

```
help(__builtins__)
```

- 可以 导入 
	- 外部模块 吗？

### 导入 外部模块

- 导入命令 是
	- import
		- port是港口 
		- import 是进口 、 导入
		- export 是出口 、 导出
	- import 后面`接空格`
- 被导入的模块 是
	- `__hello__`
	- 读作 `dunder hello`
	- 注意 hello 两边 
		- 都有dunder(双下划线)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418325769)

- 把`__hello__`模块 导入到游乐场
	- 可以 输出那句程序员的浪漫

### 变化

- 注意！重进一次游乐场
	- 观察导入前后变化
- 导入 `__hello__`模块后
	- 游乐场中的模块 增加了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418465935)

- 想要深入了解 `__hello__`
	- 应该怎么办呢？

### 什么不会就 help什么

```
help(__hello__)
```

- 使用help函数 查询手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933594048)

- `__hello__` 是
	- 非常简单的 
	- 一个模块
	- 练手用的
- 各种 模块 	
	- 各自身怀绝技
	- 可以配合起来使用

### 观察LICENSE

```
cat /usr/lib/python3.8/LICENSE.txt
```

- 可以看到 python的 许可证

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240326-1711416359744)

- 除了中间几个版本 
	- 不兼容 gpl 协议
	- 原因是 Stallman 的律师 
	- 明确和 CNRI的律师说的 
- 我想把 许可证 
	- 做成 词云图 

### 代码

- 尝试 加载
	- 分词模块 jieba
	- 词云模块 WordCloud
	- 画图模块 matplotlib

```
import jieba
from wordcloud import WordCloud
import matplotlib.pyplot as plt

# 读取文件
with open('/usr/lib/python3.8/LICENSE.txt') as file:
    text = file.read()

# 使用jieba进行中文分词
words = ' '.join(jieba.cut(text))

# 生成词云
wordcloud = WordCloud(font_path='/usr/share/fonts/truetype/wqy/wqy-microhei.ttc', # 指定中文字体路径
                      width=800, height=600,
                      background_color='white').generate(words)

# 使用matplotlib展示词云
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.show()
```

- 执行结果
	- ModuleError
	- 找不到模块

### 安装模块

```
pip install wordcloud
pip install matplotlib
pip install jieba
```

- 安装后运行python

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240326-1711417465440)

- 成功展示了 license的 图

## 总结

- 模块 就是 封装好功能的一个部件
	- 比如一个 wifi模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700645381698)

- 游乐场里面 已经装备了一些函数
	- help
	- dir
	- quit
	- print
	- chr
	- ord
	- 这些函数 位于 `__builtins__` 模块
	- 所以都是 内建函数
- 可以导入 `__hello__` module模块
	- 输出`hello world!`

- 可以在py程序里面
	- 导入 `自定义`模块吗？？🤔
- 我们下次再说！👋