---
show: step
version: 1.0 
enable_checker: true
---


# python_blender

## 开始

- 上次我们了解了blender背后的机制
- 表面上添加对象、删除对象、修改对象
- 都是在后面 控制台去执行一些函数 完成的
- 也可以直接 调用函数完成功能
- 调用函数时，不使用参数也可以
- 函数会使用默认的函数参数 
- 我们可以根据这个函数参数来玩吗？🤔

### 准备环境

- 先把模式切换为脚本模式
	- Script

- 先把场景中的对象全选中
	- 右键删除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706604272563)

- 将语句粘贴到控制台面板

```
bpy.ops.mesh.primitive_cube_add()
```

- 回车运行

### 改善环境

- 改善环境
	- 调整 两侧调版的宽度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709209440260)

- 在终端调版处
	- <kbd>ctrl</kbd> + 滚轮
	- 调整字体大小

### 设置location

- 将参数location设置为(1,2,3)

```
bpy.ops.mesh.primitive_cube_add(location=(1,2,3))
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706604463482)

- 又出现了一个立方体
- 这(1,2,3)是什么意思呢？

### 具体参数

- 选中新创建的Cube.001
	- 再选中Object Properties
	- 可以看到 对应参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709168810337)

- (<span style="color:red">1</span>,<span style="color:green">2</span>,<span style="color:blue">3</span>) 对应着 三个坐标轴
	- 分别是 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个轴
	- 数值分别是(<span style="color:red">1m</span>,<span style="color:green">2m</span>,<span style="color:blue">3m</span>) 
	- 指的是Cube的位移

### 连续执行

```
bpy.ops.mesh.primitive_cube_add()
```

- 回车运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709169063317)

- 出现两个立方体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709169078788)

- 选中之后 键入<kbd>x</kbd>
	- 都删除
- 可以 多来几个立方体 吗？

### 设置location

```
bpy.ops.mesh.primitive_cube_add(location=(0,0,0))
bpy.ops.mesh.primitive_cube_add(location=(0,0,3))
bpy.ops.mesh.primitive_cube_add(location=(0,0,6))
```

- 执行三条语句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709210265960)

- 可以看到两个立方体有一半是重合的
	- 可以让他们相切吗？
- 把新做的这三个立方体删除

### 相切

- 由于默认的size参数为2
- 可以把size参数修改为1
- 将立方体改小

```
bpy.ops.mesh.primitive_cube_add(size=1,location=(0,0,0))
bpy.ops.mesh.primitive_cube_add(size=1,location=(0,0,1))
```

- 结果看不清楚

### 视图菜单

- 选中 两个立方体
	- 在View视图菜单
	- 点中Frame Selected

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709210530328)

- 就是 以场景中的 选中的两个立方体 为全景 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709210540384)

- 这两个立方体确实相切了
	- 可以让立方体排成一队吗？

### 排队

- 将现有对象
	- 全删除
- 在文本面板
	- 新建一个文本
	- New

```
import bpy
for num in range(10):
    bpy.ops.mesh.primitive_cube_add(size=1,location=(0,num,0))
```

- 调整中间 区域的范围
- <kbd>ctrl</kbd> + 滚轮
	- 放大字体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709210968295)

### 运行
- 点击文本面板的 Run Script
	- 注意这次 是在y轴上 不断添加对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706606298326)

- 3D视图 全景 显示所有物体
- 可以 在其中 加入 一些随机因素 吗？

### 使用vim读写py文件

- 在文本面板的菜单中
	- 找到Text文本菜单
	- 将当前文本存储为1.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706606521520)

- 然后再进入终端使用vim编辑文本

### 随机因素的引入

```
import bpy
import random
for num in range(10):
    r = random.random()
    bpy.ops.mesh.primitive_cube_add(size=1,location=(r,num,0))
```

- 编辑好之后保存

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706606624133)

- 到blender的Text面板找到
	- Text菜单
	- 点击Reload

### 再次执行

- 先清空场景中的所有对象
	- 再次执行代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706606714914)

- 立方体在x轴上有了不同程度的抖动效果
- 能否使用程序删除原场景中所有的物体呢？

### 直接搜索

- 将查询到的代码整合

```
import bpy
import random

bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
for num in range(10):
    r = random.random()
    bpy.ops.mesh.primitive_cube_add(size=1,location=(r,num,0))
```

- 不断点击文本面板中的Run Script

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706607229020)

- 长队 不断在扭动
- 可以改成方阵吗？

### 方阵

```
import bpy
import random

bpy.ops.object.select_all(action="SELECT") # 取消选择所有物体
bpy.ops.object.delete() # 删除选定的物体
for x in range(10):
    for y in range(10):
        r = random.random()
        bpy.ops.mesh.primitive_cube_add(size=1,location=(x,y,r))
```

- 保存并重新加载1.py
- 执行后 更新视图角度
	- Frame All

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706608175568)

- 可以做成魔方吗？

### 魔方制作

```
import bpy
import random

bpy.ops.object.select_all(action="SELECT") # 取消选择所有物体
bpy.ops.object.delete() # 删除选定的物体
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
- 可以做一个阶梯吗？

### 总结
- 这次研究了location参数的设置
	- (<span style="color:red">1</span>,<span style="color:green">2</span>,<span style="color:blue">3</span>) 代表着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个轴数值
	- 分别是(<span style="color:red">1m</span>,<span style="color:green">2m</span>,<span style="color:blue">3m</span>) 
	- 定义了对象的位置
- 除了location参数之外
	- primitive_cube_add 函数
	- 还有一个 rotation参数
	- 这个参数怎么用呢？🤔
- 我们下次再说！👋
