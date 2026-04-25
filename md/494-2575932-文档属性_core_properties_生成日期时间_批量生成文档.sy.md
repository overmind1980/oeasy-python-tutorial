# 设置段落

## 回忆

- 上次我们研究了 
	- 格式
	- 样式
- 格式 是  
	- 灵活的、一次性的 设置
- 样式 是
	- 有预谋的、重复性的 设置
- 在 设置了 样式的run上 
	- 可以设置格式
	- 格式 会覆盖 样式
- 我们尝试制作一个有用的文档吧！

### 工作日志

```
from docx.shared import Pt
from docx import Document
from docx.enum.style import WD_STYLE_TYPE
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT
from docx.oxml.ns import qn
import time
doc = Document()
title = doc.add_paragraph()
title.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER
title_run = title.add_run("工作日志")
title_run.font.size = Pt(22)
title_run.font.name = "Times New Roman"
title_run.element.rPr.rFonts.set(qn('w:eastAsia'),"文泉驿正黑")
temperature = doc.add_paragraph()
temp_run = temperature.add_run("温度:15℃")
humidity = doc.add_paragraph()
humidity_run = humidity.add_run("湿度:40%")
writer = doc.add_paragraph()
writer_run = writer.add_run("oeasy")
writer.alignment = WD_PARAGRAPH_ALIGNMENT.RIGHT
date = doc.add_paragraph()
current_date = time.strftime("%Y-%m-%d", time.localtime())
date_run = date.add_run(current_date)
date.alignment = WD_PARAGRAPH_ALIGNMENT.RIGHT
doc.save(current_date + ".docx")
```

- 可以得到
	- 当前日期对应的文档

### 结果

- 其中的数据可以
	- 通过爬虫来得到
	- 进一步提高效率
- 我们后面会有爬虫的内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240430-1714442699333)

- 这里面提到了作者是oeasy
- 但是文档也有个属性是关于作者的

### 文档属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240430-1714443568258)

### 更多属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240430-1714443580767)

- 这些属性怎么设置呢？

### 查询文档

- https://python-docx.readthedocs.io/en/latest/dev/analysis/features/coreprops.html?highlight=properties

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240430-1714443612604)

### 设置属性

```
core_properties = doc.core_properties
core_properties.keywords = "oeasy,"+ current_date
```

- 生成关键字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240430-1714444096718)

- 还可以生成什么呢？

### 事假证明

```
from docx.shared import Pt
from docx import Document
from docx.enum.style import WD_STYLE_TYPE
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT
from docx.oxml.ns import qn
import time
doc = Document()
title = doc.add_paragraph()
title.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER
title_run = title.add_run("事假申请")
title_run.font.size = Pt(22)
title_run.font.name = "Times New Roman"
title_run.element.rPr.rFonts.set(qn('w:eastAsia'),"文泉驿正黑")
run_list = list()
name = "oeasy"
id = "20240101001"
date = "2024/10/8"
event = "北京电影节活动布置接待"
body = doc.add_paragraph()
body.add_run("玆证明，")
run_list = body.add_run(name + "(" + id  + ")")
body.add_run(",于")
run_list = body.add_run(date)
body.add_run(",参加")
run_list = body.add_run(event)
body.add_run("。该活动属于学院重大任务。该同学完整参与了活动，因此耽误了课程，请相关课程老师按照规定调整考勤。特此证明。")
doc.add_paragraph()
writer = doc.add_paragraph()
writer_run = writer.add_run("电视学院团委")
writer.alignment = WD_PARAGRAPH_ALIGNMENT.RIGHT
date = doc.add_paragraph()
current_date = time.strftime("%Y-%m-%d", time.localtime())
date_run = date.add_run(current_date)
date.alignment = WD_PARAGRAPH_ALIGNMENT.RIGHT
doc.save(name + ".docx")
```

### 结果

- 按照学生的名字
	- 将文档存储在相应的docx文件中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240430-1714445204192)

- 如果有多个学生 
	- 可以将信息存储于csv或者excel文档中
	- 然后对文档行进行遍历
	- 得到多个文档

## 总结

- 字体的大小 
	- 可以是 格式 
	- 也可以是样式
	- 为什么单位是 Pt 呢？
- 我们下次再说！👋🏻
