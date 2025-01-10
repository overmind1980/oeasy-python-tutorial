---
show: step
version: 1.0
enable_checker: true
---

# Hello World!

## 回忆上次内容

- 新函数 dir
	- 可以查询
	- 模块中的成员

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241122-1732282899499)

- 游乐场里面 已经有了一些函数
	- help
	- dir
	- quit
	- print
	- 这些函数 位于 `__builtins__` 模块
	- 所以都是 内建函数

- 可以把 这个`__builtins__`删除掉吗?

### 删除结果

- 按<kbd>q</kbd> 
	- 退出帮助

```
del __builtins__
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2690366/uid1190679-20241122-1732274341359) 

- 内建模块
	- 可以删除
	- 没有报错
	- 瞬间重生

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2690366/uid1190679-20241122-1732274367817) 

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

```
import __hello__
```

- 把`__hello__`模块 导入到游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418325769)

- 可以 输出那句 hello world

### 变化

- 注意！
	- 观察导入前后变化
- 导入 `__hello__`模块后
	- 游乐场中的模块 增加了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677418465935)

- 导入 对应关键词 
	- import
	- 怎么 理解 来着？

### import

- 进口(import)
	- 导入模块
	- 可以导入 各种模块 来增强功能

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659145701621)

- 想要深入了解 `__hello__`
	- 应该怎么办呢？

### 喊救命

- 什么不会就 help什么

```
help(__hello__)
```

- 使用help函数 查询手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933594048)

- `__hello__` 是
	- 非常简单的 
	- 一个模块
	- 里面有个成员变量
		- initialized
- 可以看看吗？

### 观察模块

```
dir(__hello__)
```

- 观察模块

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/842335/uid1190679-20241126-1732600118339) 

- 确实如help所说
	- 有个成员initialized 
	- 值为True
- `为什么` 要引入 模块 呢？

### 引入模块的意义

- 我们可以通过
	- 引入`__hello__`
		- 完成输出 `Hello world!`
	- 引入 `traceback`
		- 使用跟踪调试
	- 引入 `time`
		- 查看时间 
		- 设置延时

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240524-1716512211350)

- time模块里面有个asctime函数
	- 可以得到当前时间
- asctime 中的 asc 什么意思来着?

### ascii

- asc的意思是ascii
	- 是 7-bit的 
	- 字符和序号的固定对应关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695094443680)

- 黑暗森林 上半区
	- 至今还是黑的

- 可以导入多个文件吗？😱

### 导入多个文件

- 根据 下图建议
	- 不同模块 
	- 分行导入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660099251335)

- 各种 模块 	
	- 各自身怀绝技
	- 可以配合起来使用
- 有什么 好玩的 模块 吗？

### 反重力

- 在vim的正常模式下
	- 键入:!python3 
	- 进入游乐场
- 在游乐场中键入
	- import antigravity

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685281777708)

- 玩完了之后
	- <kbd>ctrl</kbd> + <kbd>d</kbd> 退出游乐场
	- 回到vim

### 观察LICENSE

- 可以通过vim
	- 看到 python的 许可证

```
vi /usr/lib/python3.8/LICENSE.txt
```

- 这段历史 
	- 我们见证过
	- Guido的个人简历

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240326-1711416359744)

- 我想把 许可证 的 文本
	- 做成 词云图 

### 代码

- 尝试 加载
	- 分词模块 jieba
	- 词云模块 WordCloud
	- 画图模块 matplotlib

```python
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

### 新开窗口

```
:term
```

- 在上面开启 shell终端窗口

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/842335/uid1190679-20241125-1732508497709) 

### 安装模块

- 上面的shell中
	- 粘贴命令

```shell
pip install wordcloud
pip install matplotlib
pip install jieba
```

- 在shell中安装类库

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241125-1732508573707)

### 退出shell

- 在上面的shell中exit退出

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/842335/uid1190679-20241125-1732508659467) 

### 运行

- 安装类库后
	- 再运行当前程序
	- 成功展示了 词云 图


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240326-1711417465440)

- 可以考虑修改
	- 高度
	- 宽度
	- 背景颜色
- 这都是细节
	- 问ai就能解决

## 总结

- 模块 就是 封装好功能 的 部件
	- 如 wifi模块

- 导入 `__hello__` module模块
	- 可以 输出`hello world!`
	- 看起来很简单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700645381698)

- 我想要做个 `自己的`模块
	- 能行吗？？🤔
- 我们下次再说！👋