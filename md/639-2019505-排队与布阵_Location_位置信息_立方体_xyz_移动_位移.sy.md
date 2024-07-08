---
show: step
version: 1.0 
enable_checker: true
---


# python_blender

## 开始

- 上- blender背后的机制
- 表面上
	- 添加对象、删除对象、修改对象
- 本质上 都是在后面 
	- 控制台 去调用 一些函数 完成的
- 也可以直接 
	- 调用函数完成功能
- 调用函数时
	- 不使用参数也可以
	- 函数会使用默认的函数参数 
- 可以拿这些Mesh对象排队布阵吗？🤔

### 准备环境

- 从终端启动blender

```
blender
```

- 先把模式切换为脚本模式
	- Script

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716432672322)

### 尝试运行

- 将语句粘贴到python面板

```
bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete() 
bpy.ops.mesh.primitive_monkey_add()
```

- 回车运行
	1. 清空场景 
	2. 添加猴子
- 可以把程序写到一个文件里面吗?

### 新建Text文本

- 点击新建(New)按钮
	- 新建一个文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716432962145)

- 在下面的文本区域输入

```
print("hello blender")
```

- 输入完成后点击<kbd>run script</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716433063201)

### 运行结果

- 运行后
	- 在信息调板中
	- 看到信息
	- bpy.ops.text.run_script()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716434307400)

- 但是输出的结果去哪儿了?

### 寻找输出

- 选中终端后
	- 发现 输出到了 终端窗口

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716434475933)

- 可以把程序保存起来吗?

### 保存程序

- 在文本调板 点击
	- Text - Save As
	- 文本 - 另存为

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716434673145)

- 存成 t.py
	- 在Code文件夹中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716434917568)

- 这样也方便下载

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716435004894)

- 可以在终端里面编辑文件吗?

### 终端编辑

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716435947598)

- 选中新标签页
	- 并键入命令

```
vi Code/b1.py
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716436089568)

### 编辑py文件

- <kbd>d</kbd><kbd>d</kbd>
	- 删除当前行

```
import bpy
bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete() 
bpy.ops.mesh.primitive_monkey_add()
bpy.data.objects["Suzanne"].location = (1,2,3)
bpy.data.objects["Suzanne"].rotation_euler = (0.2,0.4,0.6)
bpy.data.objects["Suzanne"].scale = (1,1,1.5)
```

- 复制代码
	- "+p 
	- 粘贴代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716436333226)

- :w
	- 保存代码

### 重新加载

- 回到blender中
	- 在文本调板中 点击
	- Text - Reload
	- 文本 - 重新载入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716436456301)

- 确认重新载入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716447646762)

### 再次运行

- 点击Run Script 运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716447754530)

- 成功生成猴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716447792115)

- 属性符合预期

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716447818005)

### 设置location

- 将代码复制进入vim编辑器
	- 保存成 Code/b1.py
- 文本 窗口 
	- 重新加载

```
import bpy
bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete() 
bpy.ops.mesh.primitive_cube_add(location=(0,0,0))
bpy.ops.mesh.primitive_cube_add(location=(0,0,3))
bpy.ops.mesh.primitive_cube_add(location=(0,0,6))
```

- 代码作用
	1. 清空场景
	2. 新建 三个立方体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709210265960)

- 可以让他们拍成一排吗?

### 相切

```
import bpy
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()
for num in range(13):
    bpy.ops.mesh.primitive_cube_add(size = 1)
    bpy.context.object.location = (0,num,0)
```

- 13张麻将牌 
	- 码上了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716448259202)

- 体型不像麻将牌

### 麻将牌

```
import bpy
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()
for num in range(13):
    bpy.ops.mesh.primitive_cube_add(size = 1)
    bpy.context.object.location = (0,num,0)
    bpy.context.object.scale = (0.5,1,2)
```

- 这样就更像了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716448389731)

- 可以做成楼梯吗?

- 不要翻页
	- 自己试试

### 阶梯

```
import bpy
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()
for num in range(13):
    bpy.ops.mesh.primitive_cube_add(size = 1)
    bpy.context.object.location = (0,num,num/2)
    bpy.context.object.scale = (30,1,num+1)
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716448826094)

- 有时候因为旋转当前视角
	- 结果会看不清楚

### The Odessa Steps

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716448789550)


### 视图菜单

- 在View视图菜单
	- 点中Frame All
	- 框取 全部对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716449029888)

- 显示效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716449062931)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709210530328)

### 随机因素的引入

```
import bpy
import random
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()
for num in range(10):
    r = random.random()
    bpy.ops.mesh.primitive_cube_add(size = 1)
    bpy.context.object.location = (r,num,0)

```

- 编辑好之后保存
	- 在blender中Reload
	- 再RunScript

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716449333255)

### 不断Run

- 不断点击文本面板中的
	- Run Script

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716449460622)

- 长队 不断在扭动
- 可以改成方阵吗？

### 方阵

```
import bpy
import random

bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete() 
for x in range(10):
    for y in range(10):
        r = random.random()
        bpy.ops.mesh.primitive_cube_add(size=1,location=(x,y,r))
```

- 保存并重新加载b1.py
	- 再运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716449602578)

- 执行后 更新视图角度
	- Frame All

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706608175568)

- 再不断点击
	- 观察随机变化
- 可以做成魔方吗？

### 魔方制作

```
import bpy
import random

bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete()
for x in range(3):
    for y in range(3):
        for z in range(3):
            bpy.ops.mesh.primitive_cube_add(size=1,location=(x,y,z))
```


- 总共27个小方块
	- 被放置到了合适的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706613454119)

- 同样的Cube
	- 不同的location
	- 形成了一个魔方
- 可以旋转一圈吗?

### 环绕一圈

```
import bpy
from math import pi,cos,sin
bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete()
for i in range(10):
    theta = i * pi * 2/10
    pos = (2*cos(theta), 2*sin(theta), 0)
    bpy.ops.mesh.primitive_cube_add(size=0.6,location=pos) 
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716449812564)

### 更复杂的环绕

```
import bpy
from math import pi,cos,sin
r = 3
n = 24
for i in range(n):
    theta = i * pi * 2/n
    pos = (r*cos(theta), r*sin(theta), 0)
    bpy.ops.mesh.primitive_cube_add(size=0.6,location=pos)
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716449869316)

### 尝试更加通用

```
import bpy
from math import pi,cos,sin
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()
num = 36
for i in range(num):
    theta = i * pi * 2/num
    pos = (2*cos(theta), 2*sin(theta), 0)
    bpy.ops.mesh.primitive_cube_add(size=0.3,location=pos)
```

- 动态数量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240527-1716787418229)

### 双层效果

```
import bpy
from math import pi,cos,sin
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()
num = 36
for i in range(num):
    theta = i * pi * 2/num
    pos = (2*cos(theta), 2*sin(theta), 0)
    bpy.ops.mesh.primitive_cube_add(size=0.3,location=pos)
num = 108
for i in range(num):
    theta = i * pi * 2/num
    pos = (4*cos(theta), 4*sin(theta), 0)
    bpy.ops.mesh.primitive_cube_add(size=0.1,location=pos)
```

- 很像放花

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240527-1716787508952)

### 螺旋效果

```
import bpy
from math import pi,cos,sin
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()
num = 720
for i in range(num):
    theta = i * pi * 4/num
    i_radius = 0 + i * 0.1
    pos = (i_radius*cos(theta), i_radius*sin(theta), 0.3*i)
    bpy.ops.mesh.primitive_cube_add(size=0.2,location=pos)
```

- 蚊香

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240527-1716787709147)


### 总结
- 这次研究了location参数的设置
	- (<span style="color:red">1</span>,<span style="color:green">2</span>,<span style="color:blue">3</span>) 代表着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个轴数值
	- 分别是(<span style="color:red">1m</span>,<span style="color:green">2m</span>,<span style="color:blue">3m</span>) 
	- 定义了对象的位置


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240618-1718705376645)


- 除了location参数之外
	- primitive_cube_add 函数
	- 还有一个 rotation参数
	- 这个参数怎么用呢？🤔
- 我们下次再说！👋
