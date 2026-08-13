---
show: step
version: 1.0
enable_checker: true
---
# 图形界面计算器

## 一、实验介绍

#### 1.1 实验内容

本项目介绍如何使用Python最基本的GUI（图形用户界面）库`tkinter`实现一个具备操作界面的计算器。

#### 1.2 实验知识点

+ `tkinter`基础编程
+ `eval`对表达式进行求值

#### 1.3 实验环境

+ python 3.5
+ xfce 终端
+ python3-tk 3.5.1

#### 1.4 适合人群

本课程难度为一般，属于初级级别课程，适合具有Python基础的用户，熟悉 python 基础知识加深巩固。

## 二、实验原理

实现上与上一项目最大的不同是有了GUI，并且计算表达式的过程不再使用复杂的表达式树，直接用 Python 的`eval`语句。因此，本项目要比上一个项目实现更简单。

## 三、实验步骤
本节将通过实践操作，带领大家实现图形界面计算器。

首先，我们安装需要用到的tkinter模块：
```
$ sudo apt-get update
$ sudo apt-get install python3-tk
```

### 3.1 tkinter 简介

`tkinter`是Python的GUI库，提供了一个快速构建GUI应用程序的面向对象的工具包。除此之外，Python还有`PyQT`，`PyGTK`，`wxPython`等常用的GUI库。

`tkinter`由各种控件构成，多个GUI控件共同构成了界面。每个控件具备若干属性来设置控件的行为和展示效果，常用的属性包括颜色`colors`，字体`fonts`。完整的控件列表请参考`tkinter`的官方文档，常用的控件包括按钮`Button`，标签`Label`，文本框`Text`以及框架`Frame`等，本项目中我们只需要用到`Button`和`Label`。

界面布局是一个很复杂的概念，如何让每个控件放到指定的位置，同时又可以让控件之间相互关联，当界面变化时能自动调整。`tkinter`常用的布局方式有很多种，对于计算器需要多个按钮组件的情况，我们选择网格`Grid`布局。

几种布局方式的不同：

1. `Grid`将控件放置到一个二维的列表区域，区域被分割成几行和几列，每个控件需要设置行和列的值，从而放到指定的单元。
2. `Pack`方式将控件按行或列的方式进行排列，可以使用`fill`填充，`expand`扩展等方法来进行控件位置的控制，从而能保证多个控件组合后达到期望的效果。
3. `Place`方式是最简单的，直接设置控件的绝对位置和大小。

### 3.2 tkinter 示例

`tkinter`创建一个应用的方式很简单，包括下述步骤：

1. 首先导入`tkinter`库
2. 创建主窗口并将所需的控件按照一定的布局放置到主窗口中
3. 执行主循环从而显示窗口并等待操作事件

最简单的例子：

```
#!/usr/bin/python3

from tkinter import *

# 创建主窗口
mainUI = Tk()

# 添加其他控件到mainUI
# 例如按钮，标签等

# 进入主循环
mainUI.mainloop()
```

运行上面的代码可以看到下图所示。

![2-3.2-1](https://doc.shiyanlou.com/document-uid13labid1453timestamp1446280408171.png)

### 3.3 界面实现

界面设计，我们的界面可以模仿最新的MIUI计算器，如下图所示：

![2-3.3-1](https://doc.shiyanlou.com/document-uid13labid1453timestamp1446280616150.png)

根据上图的设计，我们需要一个内容显示栏，若干个按钮。内容显示栏我们使用`Label`来实现，而按钮则为`Button`。

界面实现的步骤如下：

1. 创建并配置主窗口
2. 设置`Label`类型的显示栏目
3. 设置所有的操作按钮并绑定到指定的操作函数

首先创建主窗口，并设置窗口名字及大小，`210x200+300+400` 前两个值分别为窗口的长和宽，中间用字母x连接，后两个值为窗口在屏幕上出现的位置：


为了让内容能够根据按钮操作进行实时变化，我们使用`tkinter`中的`StringVar`类型，在界面编程的时候，有时需要跟踪变量值的变化，以保证值的变更随时可以显示在界面上。python无法直接做到，所以定义了一系列新的对象，例如`StringVar`、`BooleanVar`、`DoubleVar`、`IntVar`。

```
# 设置显示内容，默认显示0
display = StringVar()
display.set('0')
```

然后添加内容显示栏`textLabel`，使用Label，并设置背景颜色，宽度，高度及位置。这里需要注意`width`和`height`宽度及高度的单位，如果你在Label中显示文本，那么这些选项将以文本的单位定义按钮的尺寸，比如`28`则可以显示28个字符。如果你替而代之显示图象，那么按钮的尺寸将是像素（或其它的屏幕单位）。`anchor`表示文字在`textLabel`中显示的位置，默认为居中，`SE`表示`southeast`东南方向，想象下地图位置就知道是右下角。最后我们把`display`绑定到`textLabel`的显示上。

```
# 添加计算器显示区域
textLabel = Label(mainUI)
textLabel.config(bg='grey', width=28, height=3, anchor = SE)
textLabel['textvariable'] = display
```

我们将`textLabel`按照界面设计放到最上面，在`Grid`中属于第一排第一列的位置，使用参数`row=0, column=0`，参数`columnspan=4`表示横向占用4列，在当前的界面中一共就只有4列，所以这个参数让显示区域横向占满。

```
# 设置显示区域在Grid布局中的位置
textLabel.grid(row=0, column=0, columnspan=4)
```

添加各种不同的按钮及配置按钮的布局，首先设置清空按钮，其中text为按钮上的文字，fg为按钮的字体颜色（bg为文字背景的按钮颜色），width为按钮宽度，command参数为按钮事件绑定函数，绑定到clear()函数，按钮按下时触发。

```
clearButton = Button(mainUI, text = 'C', fg = 'orange', width = 3, command = clear)
```

设置清空按钮放到界面第二排第一列：

```
clearButton.grid(row = 1, column = 0)
```

其他按钮类似，你可以尝试根据界面自行添加并设置位置。

### 3.4 操作处理函数

在这个计算器中，我们需要为不同的按钮绑定不同的操作处理函数。所有的操作函数目标只有一个，就是更新显示内容`display`，包括下面几个：

1. 根据数字及操作符更新显示内容，即调整`display`变量的值让新的内容附加到老的内容后面，可以看作是表达式输入的过程，示例代码中我们定义为`updateDisplay()`并绑定到所有数字和操作符按钮上。
2. 清空操作，示例代码中我们定义为`clear()`绑定到清空按钮上。
3. 删除操作，删除最后一个输入的字符，示例代码中我们定义为`backspace()`绑定到`DEL`按钮上。
4. 计算结果操作，这里不再使用表达式树遍历的方法来计算结果，直接使用`eval()`来计算表达式，所以可以很轻松的支持加减乘除。示例代码中我们定义为`calculate()`绑定到`=`按钮上。

操作处理函数示例代码：

```
# 更新显示内容函数，由按钮事件触发，将按钮内容添加到已显示内容后
def updateDisplay(buttonString):
    content = display.get()
    if content == "0":
        content = ""
    display.set(content + buttonString)

# 计算表达式的结果，表达式即为显示的内容，并将结果显示出来（需要换行并添加等于号）
def calculate():
    result = eval(display.get())
    display.set(display.get() + '=\n' + str(result))

# 清空操作，由清空按钮事件触发
def clear():
    display.set('0')

# 删除操作，由删除按钮事件触发，删除前一个字符
def backspace():
    display.set(str(display.get()[:-1]))
```

通过上面几步关键步骤的示例代码，请依次实现所有的部分并完成界面按钮的布局及事件绑定。

完成所有代码后我们只需要进入到界面的主循环就可以启动计算器并开始测试：

```
# 进入主循环
mainUI.mainloop()
```

### 3.5 完整代码
在 `/home/shiyanlou/Code/gui_calculator.py`文件中写入如下代码：

```
#!/usr/bin/python3

# 引入tkinter库
from tkinter import *

# 操作事件绑定的函数，这些函数中都会对显示的内容进行更新，因此显示内容display作为全局变量

# 更新显示内容函数，由按钮事件触发，将按钮内容添加到已显示内容后
def updateDisplay(buttonString):
    content = display.get()
    if content == "0":
        content = ""
    display.set(content + buttonString)
	
# 计算表达式的结果，表达式即为显示的内容，并将结果显示出来（需要换行并添加等于号）
def calculate():
	result = eval(display.get())
	display.set(display.get() + '=\n' + str(result))
	
# 清空操作，由清空按钮事件触发
def clear():
	display.set('0')

# 删除操作，由删除按钮事件触发，删除前一个字符
def backspace():
	display.set(str(display.get()[:-1]))

# 定义主窗口，设置窗口名称和大小200×320，并设置屏幕坐标为(300,300)
mainUI = Tk()
mainUI.title('Calculator')
mainUI.geometry('200x210+300+300')

# 设置显示内容，默认显示0
# 这里使用StringVar属于tkinter库，在界面编程的时候，有时需要跟踪变量值的变化，
# 以保证值的变更随时可以显示在界面上。python无法直接做到，所以定义了一系列新的的对象，
# 例如StringVar、BooleanVar、DoubleVar、IntVar。
display = StringVar()
display.set('0')

# 添加计算器显示区域，使用Label，并设置背景色及大小
textLabel = Label(mainUI)
# 这里需要注意width宽度的单位，如果你在Label中显示文本，
# 那么这些选项将以文本的单位为定义按钮的尺寸。
# 如果你替而代之显示图象，那么按钮的尺寸将是像素（或其它的屏幕单位）。
textLabel.config(bg='grey', width=28, height=3, anchor = SE)
textLabel['textvariable'] = display

# 设置显示区域在Grid布局中的位置
textLabel.grid(row=0, column=0, columnspan=4)

# 添加按钮并放置到适当的区域
# 清空按钮，其中text为按钮上的文字，fg为按钮的字体颜色（bg为文字背景的按钮颜色），width为按钮宽度
# command参数为按钮事件绑定函数，绑定到clear()函数，按钮按下时触发
clearButton = Button(mainUI, text = 'C', fg = 'orange', width = 3, command = clear)
# 设置清空按钮的位置，行号为1，列号为0，即第二行第一列
clearButton.grid(row = 1, column = 0)

# 其他按钮位置，由于与清空按钮类似不再注释，请自行查看Grid中的位置，有的按钮采用lambda来生成匿名函数，原因是需要处理传入的参数
Button(mainUI, text = 'DEL', width = 3, command = backspace).grid(row = 1, column = 1)
Button(mainUI, text = '/', width = 3, command = lambda:updateDisplay('/')).grid(row = 1, column = 2)
Button(mainUI, text = '*', width = 3, command = lambda:updateDisplay('*')).grid(row = 1, column = 3)
Button(mainUI, text = '7', width = 3, command = lambda:updateDisplay('7')).grid(row = 2, column = 0)
Button(mainUI, text = '8', width = 3, command = lambda:updateDisplay('8')).grid(row = 2, column = 1)
Button(mainUI, text = '9', width = 3, command = lambda:updateDisplay('9')).grid(row = 2, column = 2)
Button(mainUI, text = '-', width = 3, command = lambda:updateDisplay('-')).grid(row = 2, column = 3)
Button(mainUI, text = '4', width = 3, command = lambda:updateDisplay('4')).grid(row = 3, column = 0)
Button(mainUI, text = '5', width = 3, command = lambda:updateDisplay('5')).grid(row = 3, column = 1)
Button(mainUI, text = '6', width = 3, command = lambda:updateDisplay('6')).grid(row = 3, column = 2)
Button(mainUI, text = '+', width = 3, command = lambda:updateDisplay('+')).grid(row = 3, column = 3)
Button(mainUI, text = '1', width = 3, command = lambda:updateDisplay('1')).grid(row = 4, column = 0)
Button(mainUI, text = '2', width = 3, command = lambda:updateDisplay('2')).grid(row = 4, column = 1)
Button(mainUI, text = '3', width = 3, command = lambda:updateDisplay('3')).grid(row = 4, column = 2)
Button(mainUI, text = '=', width = 3, bg = 'orange', height = 3,command = lambda:calculate()).grid(row = 4, column = 3, rowspan = 2)
Button(mainUI, text = '0', width = 10, command = lambda:updateDisplay('0')).grid(row = 5, column = 0, columnspan = 2)
Button(mainUI, text = '.', width = 3, command = lambda:updateDisplay('.')).grid(row = 5, column = 2)

# 进入主循环
mainUI.mainloop()
```

```checker
- name: check if gui_calculator.py exist
  script: |
    ls /home/shiyanlou/Code/gui_calculator.py
  error:
    还没有在 /home/shiyanlou/Code 目录下新建 gui_calculator.py 文件
```
最终的运行结果如下图所示：

![1-3.5-1](https://doc.shiyanlou.com/document-uid600404labid3867timestamp1531115878898.png)

## 四、项目扩展

本实验只实现了一个具备GUI界面的计算器。基于本节课学习，大家可以在此代码基础上实现扩展：

1. 支持连续计算，比如前一次计算结果再输入新的计算内容（需要对`eval()`处理的内容进行预处理）
2. 支持扩展的计算操作，比如增加乘方，开方等计算
3. 支持括号的输入和处理

## 五、小结

通过本节实验的学习，我们开发了两种不同的计算器。一种虽然只支持加减法操作，但却使用表达式树来进行运算，涉及到树的数据结构及算法知识。另一种基于`Tkinter`开发具备界面的计算器，主要知识点在`Tkinter`的GUI开发。



