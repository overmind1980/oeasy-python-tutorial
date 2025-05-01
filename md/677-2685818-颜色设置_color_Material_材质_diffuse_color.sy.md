---
show: step
version: 1.0 
enable_checker: true
---


# python_blender

## 开始

- 上次做了很多c919
	- 每个飞机都有自己的机身、机翼...

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240616-1718546181954)

- 如何修改物体的颜色呢?🤔

### 修改颜色


- 选择Script工作区
	- 选择3d视图中的立方体
	- 选择Material 材质调板
	- 修改颜色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240528-1716857540631)

- use node 默认高亮 选择
	- 点击后 高亮消失
	- 取消了 节点 材质方式

### 修改颜色

- 将颜色修改为绿色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240528-1716857868801)

- 并将材质名称修改为green

### 效果

- 立方体对应颜色修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240528-1716857915066)

- 信息调板观察到操作所对应的代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240528-1716857953936)

- 粘贴到游乐场

```
bpy.context.object.active_material.diffuse_color = (0,1,0,1)
bpy.context.object.active_material.name = "green"
```

### 复制代码并修改

```
bpy.context.object.active_material.diffuse_color = (1,0,0,1)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716079011903)

- 前三位 看起来是RGB
	- 每种颜色 取值范围 ∈ [0, 1]
- 最后一位是什么呢?

### 观察效果

```
bpy.context.object.active_material.diffuse_color = (1,0,0,0.3)
```

- 最后一个变量 
	- 确实是不透明度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716079361326)

- 最后一位A 对应
	- alpha 不透明度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716079397747)

- 做变色的阵列

### 渐变的球

```
import bpy

for i in range(10):
    for j in range(10):
        bpy.ops.mesh.primitive_ico_sphere_add(radius=0.5,location=(i,j,0))

        #获取小球对象并新建材质数据
        icosphere = bpy.context.active_object
        mat = bpy.data.materials.new('mat_icosphere')

        red = i / 10
        green = j / 10
        blue = 0
        alpha = 1.0
        color = (red, green, blue, alpha)

        #设置材质颜色并指定给小球对象
        mat.diffuse_color = color
        icosphere.data.materials.append(mat)
```

- 渐变效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716102153769)

### 随机的球

```
import bpy
import random

for i in range(10):
    for j in range(10):
        bpy.ops.mesh.primitive_ico_sphere_add(
        radius=0.5,location=(i,j,0))

        #获取小球对象并新建材质数据
        icosphere = bpy.context.active_object
        mat = bpy.data.materials.new('mat_icosphere')

        #设置随机颜色
        red = random.random()
        green = random.random()
        blue = random.random()
        alpha = 1.0
        color = (red, green, blue, alpha)

        #设置材质颜色并指定给小球对象
        mat.diffuse_color = color
        icosphere.data.materials.append(mat) 
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716101930304)

- 如何查看目前所有的颜色呢？

### 打开大纲视图

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20241103-1730606630034) 

- 找到blender文件

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20241103-1730606609394) 

- 所有的Materials都在这里了
- 能用python遍历吗？

### 遍历颜色

```
import bpy
import random

for i in range(10):
    for j in range(10):
        bpy.ops.mesh.primitive_ico_sphere_add(
        radius=0.5,location=(i,j,0))

        #获取小球对象并新建材质数据
        icosphere = bpy.context.active_object
        mat = bpy.data.materials.new('mat_icosphere')

        #设置随机颜色
        red = random.random()
        green = random.random()
        blue = random.random()
        alpha = 1.0
        color = (red, green, blue, alpha)

        #设置材质颜色并指定给小球对象
        mat.diffuse_color = color
        icosphere.data.materials.append(mat)

for material in bpy.data.materials:
    print(material)
```

- 出现了多于100种颜色

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20241103-1730606798675) 

- 为什么？

### 删除颜色

- 每次运行都添加100种材质
	- 如何删除材质？

```
import bpy
import random

for material in bpy.data.materials:
    bpy.data.materials.remove(material)

for i in range(10):
    for j in range(10):
        bpy.ops.mesh.primitive_ico_sphere_add(
        radius=0.5,location=(i,j,0))

        #获取小球对象并新建材质数据
        icosphere = bpy.context.active_object
        mat = bpy.data.materials.new('mat_icosphere')

        #设置随机颜色
        red = random.random()
        green = random.random()
        blue = random.random()
        alpha = 1.0
        color = (red, green, blue, alpha)

        #设置材质颜色并指定给小球对象
        mat.diffuse_color = color
        icosphere.data.materials.append(mat)

for material in bpy.data.materials:
    print(material)
```

- 先删后添加
	- 总共100种材质

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20241103-1730607009525) 

- 除了材质之外
- 对象也可以这样控制吗？

### 对象

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20241103-1730607108981) 

```
for obj in bpy.data.objects:
	print(obj)
```

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20241103-1730617312886) 

- 也可以像删除材质一样
	- 删除所有对象

```
for obj in bpy.data.objects:
	 bpy.data.objects.remove(obj)
```

- 类似的还有什么呢？

### 各种对象

- blender文件大纲中的一切都可以
	- Scenes 场景
	- Meshes 网格
	- Cameras 摄影机
	- Lights 灯光

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20241103-1730617425111) 

- 这个灯光到底怎么用？

### 总结 🤔

- 这次我们制作了
	- 渐变颜色的球
	- 随机颜色的球

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240528-1716858925397)

- 想做个晴天娃娃
	- 怎么做呢？🤔
- 我们下次再说！👋
