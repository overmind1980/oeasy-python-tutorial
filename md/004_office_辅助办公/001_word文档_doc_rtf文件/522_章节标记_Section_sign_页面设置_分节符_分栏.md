---
show: step
version: 1.0
enable_checker: true
---

# 设置段落

## 回忆

- 上次了解了 页面的属性
	- 上右下左边距
	- 横竖版式
- 根据
	- 页面大小
	- 页面边距
	- 段落边距
	- 基本可以将文字进行定位

- 页面的属性 
	- 放在 section[0] 中
- 这个 section
	- 如何理解呢?🤔

### 原来的结构

- document文档 是 顶级元素
	- document文档 包含 多个 prargraph段落
	- prargraph段落 包含 多个 run文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240313-1710336759716)

- 现在新加了一个容器 section
- 而且看起来 paragraphs 也是可以放到 section中的

### 观察

```
from docx import Document
doc = Document()
sect = doc.sections[0]
sect.
```

- sect有点像个容器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711854354089)

- paragraph 应该是
	- 隶属于 某个section的
- 可以去试试吗？

### 构造代码

```
from docx import Document
from docx.shared import Pt
from docx.enum.section import WD_ORIENTATION, WD_SECTION_START

doc = Document()
doc.add_paragraph("oeasy")
sect2 = doc.add_section()
doc.add_paragraph("o2z")
doc.save('oeasy.docx')
```

- 观察结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711859478232)

- section 和 paragraph 是如何隶属的呢？

### 观察

```
from docx import Document
from docx.shared import Pt
from docx.enum.section import WD_ORIENTATION, WD_SECTION_START

doc = Document()
doc.add_paragraph("oeasy")
sect2 = doc.add_section()
doc.add_paragraph("o2z")
for num in range(len(doc.sections)):
    section = doc.sections[num]
    print("in section",num)
    for c in section.iter_inner_content():
        print(c.text)
doc.save('oeasy.docx')
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711859540768)

- 一开始 的段落
	- 插入在 默认的section[0]中
- 在插入 新section[1] 之后
	- 新的paragraph 
	- 就 插入在 新section中了
- 这个section和分页符有何不同呢？

### 节 的 纸张朝向

```
from docx import Document
from docx.enum.section import WD_ORIENTATION, WD_SECTION_START # 导入节方向和分解符类型
document = Document() # 新建docx文档
document.add_paragraph() # 添加一个空白段落
section = document.add_section(start_type=WD_SECTION_START.CONTINUOUS) # 添加横向页的连续节
section.orientation = WD_ORIENTATION.LANDSCAPE # 设置横向
page_h, page_w = section.page_width, section.page_height
section.page_width = page_w # 设置横向纸的宽度
section.page_height = page_h # 设置横向纸的高度
document.add_paragraph() # 添加第二个空白段落
section = document.add_section(start_type=WD_SECTION_START.CONTINUOUS) # 添加连续的节
section.orientation = WD_ORIENTATION.PORTRAIT # 设置纵向
page_h, page_w = section.page_width, section.page_height # 读取插入节的高和宽
section.page_width = page_w # 设置纵向纸的宽度
section.page_height = page_h # 设置纵向纸的高度
document.save('oeasy.docx')
```

- 不同的节 
	- 可以设置不同的 纸张朝向
	- 可以设置不同的 页面边距

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711859879578)

- 章节 这个概念 是怎么来的呢？

### sek总结

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695088502663)

- section 就是一个 部门

### 章节

- § 是一个 字符
	- 叫做 silcrow
	- 或 section mark 章节标记
	- 或 double s 双s
	- 用在 章节 标题上
- 类似于 
	- pilcrow (¶)
	- 段落标记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711860441237)

- §§ 13–21
	- sections 13 through 21
	- 13章 21节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711860773002)

- chapter 1 
	- section 2

### 建立多个节

```
from docx import Document
from docx.enum.section import WD_ORIENTATION, WD_SECTION_START # 导入节方向和分解符类型

document = Document() # 新建docx文档
document.add_heading("古诗两首")
section = document.add_section(start_type=WD_SECTION_START.CONTINUOUS) # 添加连续的节
document.add_heading("悯农",2)
document.add_paragraph("锄禾日当午")
document.add_paragraph("汗滴禾下土")
document.add_paragraph("谁知盘中餐")
document.add_paragraph("粒粒皆辛苦")
section = document.add_section(start_type=WD_SECTION_START.CONTINUOUS) # 添加连续的节
document.add_heading("咏鹅",2)
document.add_paragraph("鹅鹅鹅")
document.add_paragraph("曲项向天歌")
document.add_paragraph("白毛浮绿水")
document.add_paragraph("红掌拨清波")
document.save('oeasy.docx')
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711975083859)

- 原因是 节的起始位置

### WD_SECTION_START

- 这是一个枚举类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711975142899)

- 我们不用 
	- 节起始于 连续 
	- WD_SECTION_START.CONTINUOUS
- 改为
	- 节起始于 新页面
	- WD_SECTION_START.NEW_PAGE

### 应用 

- :%s/CONTINUOUS/NEW_PAGE/

```
from docx import Document
from docx.enum.section import WD_ORIENTATION, WD_SECTION_START # 导入节方向和分解符类型

document = Document() # 新建docx文档
document.add_heading("古诗两首")
section = document.add_section(start_type=WD_SECTION_START.NEW_PAGE) # 添加连续的节
document.add_heading("悯农",2)
document.add_paragraph("锄禾日当午")
document.add_paragraph("汗滴禾下土")
document.add_paragraph("谁知盘中餐")
document.add_paragraph("粒粒皆辛苦")
section = document.add_section(start_type=WD_SECTION_START.NEW_PAGE) # 添加连续的节
document.add_heading("咏鹅",2)
document.add_paragraph("鹅鹅鹅")
document.add_paragraph("曲项向天歌")
document.add_paragraph("白毛浮绿水")
document.add_paragraph("红掌拨清波")
document.save('oeasy.docx')
```

- 每一节
	- 都从 新页面开始
	- NEW_PAGE

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711975306191)

- 节开始于 奇数页 或 偶数页
	- 是什么意思？

### 节 开始于 奇数页

- :%s/NEW_PAGE/ODD_PAGE/

- 每一节
	- 都从 奇数页面开始
	- ODD_PAGE

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711975948062)

- 上图为 
	- 书籍的正反面 打印
- 奇数页 
	- 一定出现在 
	- 阅读者 的右手侧
- WD_SECTION_START.CONTINUOUS 
	- 有什么用呢？

### 分栏

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711977355980)

- 选中这段文字
	- 菜单 Insert
		- Section

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711977400985)

### 设置栏宽

- 可以栏宽 不相等

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711977430537)

- 最后展示结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711977445799)

- 但这种 
	- 分栏操作 
	- add Columns
	- 没有编程接口
- 想要做
	- 只能 观察document.xml
	- 然后直接 相关文件

### 分栏代码

```
from docx import Document
from docx.shared import Inches
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT
from docx.oxml.ns import qn
from docx.enum.text import WD_BREAK
# Create a new Document
document = Document()

# Add a section with two-column layout
section = document.sections[0]
sectPr = section._sectPr
cols = sectPr.xpath('./w:cols')[0]
cols.set(qn('w:num'),'2')  # Set the number of columns to 2

# Add content to the first column
paragraph = document.add_paragraph('Content in the first column.'*100)
paragraph.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT

# Add column break to move to the second column
document.add_paragraph().add_run().add_break(WD_BREAK.COLUMN)

# Save the document
document.save('two_column_layout.docx')
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712017222220)

## 总结🤔

- 这次研究了 
	- 节 (section)
- 可以用 节
	- 来分栏
- 还可以 根据 不同的节
	- 设置 不同的 版式
- 节的起始位置 常用的是
	- 连续
	- 新建页
	- 奇数页
- doc 里面 还可以有些什么东西呢？🤔
- 我们下次再说！👋🏻