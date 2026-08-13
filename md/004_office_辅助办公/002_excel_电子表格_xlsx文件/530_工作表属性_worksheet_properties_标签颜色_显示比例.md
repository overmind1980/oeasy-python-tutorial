---
show: step
version: 1.0
enable_checker: true
---

#  基础工作流_workflow_读写单元格 

## 回忆

- 上次使用openpyxl操作了工作表
	- 找到所有工作表名字 
		- wb.sheetnames
	- 通过名字找到工作表 
		- wb["春"]
	- 删除工作表 
		- wb.remove(ws)
	- 移动工作表位置 
		- b.move_sheet("春", -1) 
	- 复制工作表
		- cp_sheet = wb.copy_worksheet(ws1)
	- 工作表改名 
		- ws1.title = "冬"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691553911873)

- 可以修改 工作表标签的颜色吗？

### 搜索 方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691555808874)

- 具体代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691555876938)

- 这里面有个ws.sheet_properties
	- 看起来是 工作表 的 属性信息
	- tabColor 是 其中一条

### 设置工作表 选项卡颜色

```
from openpyxl import Workbook
wb = Workbook()
ws = wb["Sheet"]
wb.remove(ws)
ws_spring = wb.create_sheet("春")
ws_summer = wb.create_sheet("夏")
ws_autumn = wb.create_sheet("秋")
ws_winter = wb.create_sheet("冬")
ws_spring.sheet_properties.tabColor = "00FF00"
ws_summer.sheet_properties.tabColor = "FF0000"
ws_winter.sheet_properties.tabColor = "000000"
wb.save("oeasy.xlsx")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691556225357)

- 除了 tabColor 之外
	- 工作表还有什么 属性呢？

- 有没有显示比例呢？

### 查看属性

- sheet_properties

```
from openpyxl import Workbook
work_book = Workbook()
work_sheet = work_book["Sheet"]
work_sheet.sheet_properties.tabColor = "000000"
print(work_sheet.sheet_properties)
```

- 运行结果
- 输出 sheet_properties

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691557155554)

- 貌似没有显示比例
- 什么是显示比例呢？

### 显示比例

- 命令位于
	- 视图(view)菜单
	- 或者右下角滑块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691557324666)

- 可以改变 
	- 当前工作表的显示比例
- 为什么要设置 
	- 工作表的显示比例呢？

### 比例意义

- 有的时候 数据不多 
	- 可以将 显示比例放大
		- 看着 更清晰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691558556060)

- 有的时候 数据很多 
	- 可以将 显示比例缩小
		- 可以看到 更多数据

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691558608686)

- 具体怎么用python
	- 控制显示比例呢？

### 主动搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691558243449)

- 打开结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691558257800)

- 看起来 显示比例 
	- 不属于 工作表的 属性
	- 而属于 工作表 视图的 属性

### 视图模块

- https://openpyxl.readthedocs.io/en/stable/api/openpyxl.worksheet.views.html?highlight=zoomScale#openpyxl.worksheet.views.SheetView

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691557566455)

- 参数必须是 int型

### 具体代码

```
from openpyxl import load_workbook

# 加载现有的工作簿
workbook = load_workbook("oeasy.xlsx")

# 获取特定的工作表
worksheet = workbook["春"]  # 将"Sheet1"替换为你想要操作的工作表名称

# 设置工作表的视图缩放比例
worksheet.sheet_view.zoomScale = 50  # 设置为50表示缩放比例为50%

# 保存工作簿
workbook.save("oeasy.xlsx")
```

- 重载结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240131-1706674871222)

- 确实可以设置 显示比例
- 显示比例 和 工作表 有什么关系吗？

### 蓝布棉门帘



## 总结

- 这次设置了工作表的属性
	- 工作表 标签 颜色 
	- 工作表 视图 显示比例

- 工作表可以 设置只读吗？🤔

- 下次再说！👋🏻
