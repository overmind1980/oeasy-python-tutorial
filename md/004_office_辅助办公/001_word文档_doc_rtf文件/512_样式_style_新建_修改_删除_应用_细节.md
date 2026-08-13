---
show: step
version: 1.0
enable_checker: true
---

# 设置段落

## 回忆

- 上次研究了表格
	- 从零开始 生成表格
	- 在python中读取表格
- 最后 制作了九九乘法表
	- 并且为表格设置了表格样式
- 点击⚙️齿轮
	- 选择样式style

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240308-1709877822757)

- 发现各种样式style很多
- 可以用python
	- 把所有样式列出来吗？

### 列出所有样式

```
from docx import Document
document = Document()
print(document.styles)
for style in document.styles:
    print(style)
```


- 最基础的样式
	- 字体类型样式
	- CharacterStyle

- 字体样式 包括
	- 大小 
	- 颜色
	- 字体
	- 等等

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709948408405)

- 字体样式 之上
	- 是 段落 样式类型

### 段落 样式

- 首先出现的 就是 
	- 段落类型样式
	- Paragraph Style

- 段落样式 包括
	- 段前 段后 
	- 段左 段右
	- 行间距
	- 首行缩进
	- 等等

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709948364732)

- Normal 是 默认正文样式
- Header 是 默认标题样式

### 列表类型

- 列表类型
	- 有序列表 Ordered List
	- 无需列表 Unordered List

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709949684591)

- 本质上是一种 
	- 段落类型样式
	- Paragraph Style

### 表格

- 表格样式
	- Table Paragraph

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709950100052)

- 对应具体表格样式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240321-1711010364214)

- style的类型好多啊
	- 总共分几类呢？

### 样式的分类

- docx.enum.style.WD_STYLE_TYPE
	- 是枚举类型
	- enum

```
from docx.enum.style import WD_STYLE_TYPE
print(WD_STYLE_TYPE)
for style in WD_STYLE_TYPE:
    print(style)
```

- 总共四类
	- 字符
	- 列表
	- 段落
	- 表格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709954963524)

- 如何用 python 设置样式呢？

### 设置样式

- 尝试改变样式

```
from docx import Document
document = Document()
paragraph = document.add_paragraph("oeasy")
print("style_name:",paragraph.style.name)
paragraph.style = document.styles['Heading 1']
print("style_name:",paragraph.style.name)
document.save("o.docx")
```

- 输出证明
	- 从 Normal (默认正文样式)
	- 变成了 Heading 1 (标题一样式)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709955422082)

- Reload页面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709955476037)

- 确实样式更新了

### 新建样式

```
from docx.enum.style import WD_STYLE_TYPE
from docx import Document
document =Document()
styles = document.styles
style = styles.add_style('Citation', WD_STYLE_TYPE.PARAGRAPH)
print("style_name:",style.name)
print("style_type:",style.type)
paragraph = document.add_paragraph("oeasy")
paragraph.style = document.styles["Citation"]
document.save("o.docx")
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709957544152)

- 真的会出现新样式吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709957795774)

- 这个样式细节如何呢？

### 样式细节

- 点击右侧
	- 设置⚙
	- 选择Styles样式
		- ️选择新样式
		- Citation

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709957986920)

- 这个样式的细节如何呢？

### 尝试修改样式

- 右键选择新样式
	- Citation
	- 选择 修改modify

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709958079750)

- 出现了很多选项卡

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709958118869)

- 目前 Inherit from 为
	- None 
	- 没有基础样式
	- base style
- 可以从某个已有的样式
	- 派生出新样式吗？

### 基础样式

```
from docx.enum.style import WD_STYLE_TYPE
from docx import Document
document =Document()
styles = document.styles
style = styles.add_style('Citation', WD_STYLE_TYPE.PARAGRAPH)
style.base_style = styles['Normal']
print("style_name:",style.name)
print("base_style_name:",style.base_style.name)
print("style_type:",style.type)
paragraph = document.add_paragraph("oeasy")
paragraph.style = document.styles["Citation"]
document.save("o.docx")
```

- 输出base_style

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709958588704)

- File - Reload 之后
	- 查看样式细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709958603912)

- Inherit from 派生自
	- 从 None 啥都没有
	- 到 Default Style 默认样式
- 如何删除样式？🤔

### 删除样式

- 尝试
	- 先添加 样式 
	- 后删除 样式

```
from docx.enum.style import WD_STYLE_TYPE
from docx import Document
document =Document()
styles = document.styles
print(len(styles))
style = styles.add_style('Citation', WD_STYLE_TYPE.PARAGRAPH)
print(len(styles))
styles['Citation'].delete()
print(len(styles))
```

- 可以看到 
	- 功能已经实现 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709959003580)

- 总共真的有那么多种样式吗？

### 观察样式的方式

- 将观察样式的方式
	- 从 Hierarchy 层级式
	- 修改为 All 所有样式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709977562085)

- 但是快速样式中
	- 好像没有那么多？

### 快速样式

- 快速样式 
	- 貌似没有几种

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709977660795)

- 如何进入快速样式列表呢？

### 快速样式

```
from docx import Document
document =Document()
styles = document.styles
for style in styles:
	if style.quick_style == True:
		print(style)
```

- 快速样式 
	- 是 样式中的一个子集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709977990760)

- 样式 有什么属性行为呢？

### 样式 的 属性行为

- https://python-docx.readthedocs.io/en/latest/dev/analysis/features/styles/style.html?highlight=style

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240328-1711628083919)

- 可以对样式做那些操作呢？

###  操作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709979099398)

- 如何操作样式呢？

### 右键样式

- 右键样式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709979140547)

- 可以的操作
	- 以他为基础新建样式
	- 修改样式
	- 删除样式
	- 隐藏样式
- 可以用代码修改样式吗？

### 通过样式设置字体

```
from docx.enum.style import WD_STYLE_TYPE
from docx.shared import Pt
from docx import Document
document =Document()
styles = document.styles
style = styles.add_style('Citation', WD_STYLE_TYPE.PARAGRAPH)
style.base_style = styles['Normal']
font = style.font
font.name = 'Calibri'
font.size = Pt(12)
print("style_font_name:",style.font.name)
print("style_font_size:",style.font.size)
paragraph = document.add_paragraph("oeasy")
paragraph.style = document.styles["Citation"]
document.save("o.docx")
```

- 查看输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709959621721)

- 在软件中Reload

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709959645614)

- 确实可以设置
- 如果我们要
	- 提取docx中所有`标题一`样式的字体
	- 应该如何呢？

### 准备环境

- 中间添加 回车 划分段落
	- 将 Oeasy设置为标题一
	- o2z 设置为正文

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711678446997)

- 保存后 
	- 准备读取

### 读取 指定的标题

```
from docx import Document

document = Document("o.docx")
for paragraph in document.paragraphs:
    if paragraph.style.name == "Heading 1":
        print(paragraph.text)
document.save("o.docx")
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711678813178)

- 通过输出重定向
	- 就可以 给到指定的文件了

## 总结

- 这次研究了样式
	- 新增样式 add_style
	- 删除style.delete()
	- 修改样式 style.font.name = "Calibri"
- 可以通过 样式 来设置字体
	- 但有的时候 
	- 也可以直接设置文字的字体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709979714071)

- 同一个段落
	- 可以有不同的字体大小
- 这如何理解呢？🤔
- 我们下次再说！👋🏻
