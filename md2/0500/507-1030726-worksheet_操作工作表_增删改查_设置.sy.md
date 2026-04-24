---
show: step
version: 1.0
enable_checker: true
---

#  基础工作流_workflow_读写单元格 

## 回忆

- 上次研究了
	- excel文件的建立
	- 也就是excel 工作簿的简历
- 明确了excel文件的结构
	- 整体的excel是一个工作簿
		- workbook
	- 工作簿中有一个个的工作表
		- worksheet

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230713-1689241445262)

- 可以通过代码的方式
	- 对工作表进行增删改的操作吗？
- 先看看 在软件(calc中) 如果操作工作表

### 工作表改名

- 双击工作表名称可以修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691547570393)

- 可以将工作表名称
	- 修改为 春

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691547645873)

- 如何 创建工作表呢？

### 创建 工作表

- 在 `春`这个工作表标签的位置 
	- 右键 弹出 上下文菜单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691547723822)

- 点击 Insert Sheet 
	- 插入工作表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691547784698)

- 修改工作表名称
	- 并点击 OK

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691547838412)

- 但是次序有问题

### 调整工作表位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691547838412)

- 按住 夏标签 
	- 并且 向右拖动
		- 在 春标签 的右边 松手

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691547965169)

- 完成调整位置操作

### 拷贝 工作表

- 右键单击 夏标签
	- 点击 Move or Copy Sheet
	- 移动或拷贝 工作表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548071883)

- 所有 和工作表相关的 操作
	- 都在右键的 上下文 菜单中
		- 包括 
			- 删除 
			- 隐藏
			- 保护
			- ...

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548376249)

- 设置好之后点击ok

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548457425)

- 成功建立新工作表

### 再创建工作表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548646590)

- 点击工作簿前面的加号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548670013)

- 直接添加了新工作表
	- sheet4
- 双击 sheet4 标签

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548705187)

- 修改 工作表名称 
	- 为 冬

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548751049)

- 可以设置 工作表标签 的颜色 吗？

### 设置 工作表 标签颜色

- 所有 和工作表相关的 操作
	- 都在右键的 上下文 菜单中
		- 就在 其中找 工作表颜色
		
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548815286)

- 右键单击 春标签页
	- 弹出 上下文菜单 
		- 点击 tab color 
			- 设置 标签页颜色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548892502)

- 选择Green绿色
	- 并点击 OK

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548927399)

- 设置了 春标签的颜色

### 更多标签颜色

- 依次设置其他标签页颜色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691548997666)

- 可以通过 python代码
	- 实现 以上的功能吗？

### 搜索 线索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691550662961)

- 点击 链接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691550719897)

- 使用
	- ws1 = wb.create_sheet("Mysheet")
- 其中
	- wb 是 Workbook
	- ws1 是 Worksheet

### 再搜索

- 再在openxyl中 搜索create_sheet
	- https://openpyxl.readthedocs.io/en/stable/search.html?q=create_sheet&check_keywords=yes&area=default

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691550896824)

- 这是workbook 模块中的
	- 一个函数
- 工作表 是由 
	- 工作簿对象 来创建的

### 深入研究

- 工作簿包(workbook package)中的
	- 工作簿模块(workbook module) 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691551057062)

- 里面具体都有什么呢？

### 搜索

- 在此页面中搜索
	- _sheet

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691551365380)

- 找到两个函数
	- 都是和工作表名相关的
		1. 通过表名得到工作表
			- 不推荐使用
				- ws_spring = wb.get_sheet_by_name("春")
			- 推荐使用下标方式
				- ws_spring = wb["春"]
		2. 得到所有表名列表
			- 不推荐使用
				- l_names = wb.get_sheet_names()
			- 推荐使用
				- l_names = wb.sheetnames 

### 移动和删除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691551727424)

- 移动某个工作报表的位置

```
#向前移动一个位置，正数往后，负数往前
wb.move_sheet("my_sheet111", -1)
#观察结果
print(wb.sheetnames)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691551776594)

- 从工作簿删除工作表

### 写代码

```
from openpyxl import Workbook
wb = Workbook()
ws = wb.create_sheet("春")
wb.save("test.xlsx")
```

- 保存并运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691553197088)

### 检查结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691553185351)

- 打开文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691553256551)

- 确实出现了

### 尝试删除
```
from openpyxl import Workbook
wb = Workbook()
ws = wb["Sheet"]
wb.remove(ws)
ws = wb.create_sheet("春")
wb.save("test.xlsx")
```

- reload

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691553777300)

- 删除成功

### 继续添加

- 添加 夏、秋 两个工作表

```
from openpyxl import Workbook
wb = Workbook()
ws = wb["Sheet"]
wb.remove(ws)
ws1 = wb.create_sheet("春")
ws2 = wb.create_sheet("夏")
ws3 = wb.create_sheet("秋")
wb.save("test.xlsx")
```

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691554705784)

### 工作表 复制 改名

1. 将 春标签 复制
2. 将复制标签改名 为 冬标签

```
from openpyxl import Workbook
wb = Workbook()
ws = wb["Sheet"]
wb.remove(ws)
ws1 = wb.create_sheet("春")
ws2 = wb.create_sheet("夏")
ws3 = wb.create_sheet("秋")
ws_spring = wb["春"]
ws_winter = wb.copy_worksheet(ws_spring)
ws_winter.title = "冬"
wb.save("test.xlsx")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230809-1691554989801)

## 总结
- 这一次使用openpyxl操作了工作表
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
- 下次再说！👋🏻
