---
show: step
version: 1.0
enable_checker: true
---

# 设置段落

## 回忆

- 上次了解了
	- 页脚元素
	- footer
- footer 会出现在 
	- 当前section中
	- 每一页的下方
	- 一般用来放置页码
- 页码 
	- 可以标记页数
	- 让 书籍更有效
- 可以页脚footer在下面
	- 上面 可以有 什么元素吗？🤔

### 页眉元素

```
import docx
from docx import Document
from docx.shared import Pt

document = Document() # 新建docx文档
section = document.sections[0]
header = section.header
paragraph = header.paragraphs[0]
paragraph.text = "I am header"
document.save('header.docx')
```

- 查看效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240406-1712395781701)

- 媒体添加分页符后
	- 都会出现在页面上方
- 页眉一半放点什么呢？

### 章节域

- 先把
	- 标题域
	- Chapter Field
	- 插入到正文

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240406-1712393312597)

- 根据大纲级别(outline lever)的不同
	- 可以有 两种标题域
	- 1级 章标题 - 古诗两首
	- 2级 节标题 - 咏鹅

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240406-1712393482997)

- 第一页 
	- 没有 节标题
	- 都是 章标题

- 可以把标题
	- 添加在页眉吗？

### 插入页眉

- 将chapter这个域插入标题后
	- 再解压docx
	- 得到header.xml

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240406-1712396694147)

- 这个结构 跟页脚很像
- 都是 第一个段落里 插入一个域

### 代码实现

```python
import docx
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from docx import Document
from docx.enum.section import WD_ORIENTATION, WD_SECTION_START
from docx.shared import Pt
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT

document = Document() # 新建docx文档
document.add_heading("古诗两首")
section = document.sections[0]
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
for section in document.sections:
    heading = ""
    for paragraph in section.iter_inner_content():
        if paragraph.style.name == "Heading 1":
            heading = paragraph.text
            break
    header = section.header
    paragraph = header.paragraphs[0]
    paragraph.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER  # 设置居中对齐
    run2 = paragraph.add_run('')
    fldChar2 = OxmlElement('w:fldChar')
    fldChar2.set(qn('w:fldCharType'), 'begin')
    run2._element.append(fldChar2)
    run3 = paragraph.add_run('')
    fldChar3 = OxmlElement('w:instrText')
    fldChar3.text = r'STYLEREF 1 \* MERGEFORMAT'
    run3._element.append(fldChar3)
    run4 = paragraph.add_run('')
    fldChar4 = OxmlElement('w:fldChar')
    fldChar4.set(qn('w:fldCharType'), 'separate')
    run4._element.append(fldChar4)
    run5 = paragraph.add_run(heading)
    run6 = paragraph.add_run('')
    fldChar5 = OxmlElement('w:fldChar')
    fldChar5.set(qn('w:fldCharType'), 'end')
    run6._element.append(fldChar5)
footer = section.footer
paragraph = footer.paragraphs[0]
paragraph.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER  # 设置居中对齐
run2 = paragraph.add_run('')
fldChar2 = OxmlElement('w:fldChar')
fldChar2.set(qn('w:fldCharType'), 'begin')
run2._element.append(fldChar2)
run3 = paragraph.add_run('')
fldChar3 = OxmlElement('w:instrText')
fldChar3.text = 'PAGE'
run3._element.append(fldChar3)
run4 = paragraph.add_run('')
fldChar4 = OxmlElement('w:fldChar')
fldChar4.set(qn('w:fldCharType'), 'separate')
run4._element.append(fldChar4)
run5 = paragraph.add_run('')
fldChar5 = OxmlElement('w:fldChar')
fldChar5.set(qn('w:fldCharType'), 'end')
run5._element.append(fldChar5)
document.save('oeasy.docx')
```

### 生成效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240406-1712397974069)

- 页眉部分 插入了 域

### 生成目录

- 菜单 Insert- Table of Contents and Index
	- 插入 表格内容和索引

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240406-1712376935495)

- 选择 根据索引生成目录

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240406-1712376994117)

### 结果

- 可以生成 目录
	- 还可以点击页码跳转

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240406-1712377024776)

## 总结🤔
- 这次我们研究的是
	- 页眉 header
- 页眉
	- 位于页面的上方
	- 每个页面 都会出现页眉
- 页眉、页脚
	- 都隶属于 section
	- 不同的section可以设置 
	- 不同页眉页脚
- docx还可以 
	- 做些什么呢？🤔
- 我们下次再说！👋🏻