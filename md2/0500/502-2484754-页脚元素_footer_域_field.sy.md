# 设置段落

## 回忆

- 上次研究了 
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

### 分节效果

- 我们先恢复节的效果

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

![图片描述](../0501/uid1190679-20240401-1711975306191.png)

- 可以加上页脚元素吗？

### 搜索

- 搜索页脚footer

![图片描述](../0502/uid1190679-20240406-1712368966427.png)

- 有专门的部分
	- 页眉 header
	- 页脚 footer

### 页眉页脚

```
from docx import Document
from docx.enum.section import WD_ORIENTATION, WD_SECTION_START # 导入节方向和分解符类型
from docx.shared import Pt

document = Document() # 新建docx文档
document.add_heading("古诗两首")
section = document.add_section(start_type=WD_SECTION_START.NEW_PAGE) # 添加连续的节
footer = section.footer
p = footer.add_paragraph("")
run = p.add_run("I am Footer")
run.font.size = Pt(45)
print(p.runs)
#.font.size = Pt(25)
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

- 代码效果

![图片描述](../0502/uid1190679-20240406-1712370373204.png)

- 可以在页脚处插入页码吗？

### 了解页码

- 在第一页中 
	- 点击菜单Insert-Field-PageNumber

![图片描述](../0502/uid1190679-20240406-1712370582349.png)

- 插入了一个
	- 灰色背景的域
	- 内容为文本1
	- 代表 这是第1页

![图片描述](../0502/uid1190679-20240406-1712370623366.png)

- 灰色背景 打印时 
	- 会显示为 白色

### 继续

- 在第2页
	- 做同样的操作
	- 就会出现文本2

![图片描述](../0502/uid1190679-20240406-1712370973141.png)

- 在 第3页
	- 做同样的操作
	- 就会出现 文本3

![图片描述](../0502/uid1190679-20240406-1712371000376.png)

- 插入 同样的域
	- 为什么会变化呢？

### 域的本质

- 选中域
	- 右键选择 
	- Edit Fields
	- 编辑域

![图片描述](../0502/uid1190679-20240406-1712371222307.png)

- 出现对话框
	- 类型是 Page Number
	- 页码

![图片描述](../0502/uid1190679-20240406-1712371262723.png)

- 可以为页码
	- 选择不同的样式
- 因为是不同的页
	- 所以有不同的页码

### 域的类型

- 更多域的类型

![图片描述](../0502/uid1190679-20240406-1712371719664.png)

- 总页数
- 日期
- 时间
- 标题
- 第一作者
- 主题
- 更多

![图片描述](../0502/uid1190679-20240406-1712371813974.png)

- 可以在文档中找到
	- 页码
	- PageNumber
- 可以把页码插入到页脚区域吗？

### 观察xml情况

- 新建docx文件 o.docx
	- 只插入一个域(field)
	- 当前行号

```
unzip -d o o.docx
cd o/doc
firefox document.xml
```

![图片描述](../0502/uid1190679-20240406-1712376019283.png)

- 域的部分如红框所示

### 代码实现

- 在页脚插入页码

```from docx import Document
from docx.shared import Pt
from docx.oxml import OxmlElement
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT
from docx.oxml.ns import qn

# 创建一个新的 Word 文档
doc = Document()
section = doc.sections[0]
footer = section.footer
paragraph = footer.paragraphs[0]
paragraph.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER  # 设置居中对齐
run1 = paragraph.add_run('第')
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
run6 = paragraph.add_run('页')

# 保存文档
doc.save('oeasy_footer.docx')
```

- <kbd>ctrl</kbd> + <kbd>回车</kbd>
	- 多页 都有 页码
	- 而且 自动更新

![图片描述](../0502/uid1190679-20240406-1712376237066.png)

- 可以和 古诗两首 融合起来吗？

### 古诗两首

```
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
footer = section.footer
paragraph = footer.paragraphs[0]
fldSimple = OxmlElement('w:fldSimple')
fldSimple.set(qn('w:instr'), 'PAGE')
run = paragraph.add_run()
run._r.append(fldSimple)
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
section = document.sections[0]
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

- 效果

![图片描述](../0502/uid1190679-20240406-1712376494711.png)

- 书籍 有了页码
	- 也就有了次序
	- 不会像简牍时代那样 
	- 不容易整理了

## 总结🤔
- 这次了解了
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
	- 上面 可以有 什么元素吗？
- 我们下次再说！👋🏻