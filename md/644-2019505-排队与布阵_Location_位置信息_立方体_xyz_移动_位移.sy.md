---
show: step
version: 1.0 
enable_checker: true
---


# python_blender

## 开始

- 上次使用脚本工作区中的文本面板
	- 这面板可以编写python程序
	- 还可以保存、导出
	- 这样就可以将程序保留下来了


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716448789550)

- 可以制作阶梯吗？🤔

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

- 因为当前视角
	- 结果会看不完整

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725102098789)

- 如何看到完整阶梯呢？

### 视图菜单

- 在View视图菜单
	- 点中Frame All
	- 取景框	
		- 会框取 全部对象
	- 显示全部对象的全景

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716449029888)

- 显示效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716449062931)

- 如果只想框选其中一个阶梯呢？

### 选中

- 选中其中的一个阶梯
	- 黄色线框高亮显示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725102268946)

- 点击视图菜单view
	- Frame Selected
	- 框选所选

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725102320224)

- 以选中对象为主体
	- 显示全景

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725102393355)

- 如果想要自由旋转当前视角呢？

### 旋转当前视角

- 改变当前视角

|键鼠配合 | 操作| 效果 |
| --- |--- |---|
|<kbd>鼠标中键</kbd>| 滚动  | 镜头推拉 |
| <kbd> 鼠标中键</kbd>  |按住拖动 | 镜头旋转 |
| shift + <kbd> 鼠标中键</kbd> | 点击拖动 | 镜头平移 |

- 从新的角度观察

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725102517599)

- 可以来电随机因素吗？

### 随机因素的引入

- 保存到Code/b3.py

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
	- 在blender中load
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
- 这次控制了视角的变化
	- 框选所有 Frame All
	- 框选所选 Frame Selected
	- 还可以手动改变

|键鼠配合 | 操作| 效果 |
| --- |--- |---|
|<kbd>鼠标中键</kbd>| 滚动  | 镜头推拉 |
| <kbd> 鼠标中键</kbd>  |按住拖动 | 镜头旋转 |
| shift + <kbd> 鼠标中键</kbd> | 点击拖动 | 镜头平移 |

- 后面加入了随机的因素
	- 一字长蛇
	- 方阵
	- 立体魔方
	- 加入了随机性
- 最后只做了
	- 圆形
	- 螺旋形
- 目前改的都是位置position
- 如何修改旋转rotation呢？🤔
- 我们下次再说！👋
