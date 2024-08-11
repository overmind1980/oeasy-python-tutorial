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

- 点击use node
	- 取消节点材质方式

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

- 看起来前三位是RGB
- 最后一位是什么呢?

### 观察效果

```
bpy.context.object.active_material.diffuse_color = (1,0,0,1)
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

- 画点好玩的

### 晴天娃娃

- 想做个晴天娃娃

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240528-1716858925397)

### 制作三个球体

- 白色的为头部
- 黑色的为眼球

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716079897637)

- 眼球 参数
	- 一会儿要用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716079933923)

- 如何使用代码生成?

### 代码生成头部

```
import bpy

bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete() 
head = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "head"
```

- 生成头部

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716080296272)

### 生成左眼

```
import bpy

bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
head = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name  = "head"

r_eye = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "r_eye"
bpy.context.object.location = (0.7, 0.5, 0.3)
bpy.context.object.scale = (0.3, 0.3, 0.3)
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716081739529)

- 准备上色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716081891814)

### 上色

```
import bpy

bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete()
head = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name  = "head"

r_eye = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "r_eye"
bpy.context.object.location = (0.7, 0.5, 0.3)
bpy.context.object.scale = (0.3, 0.3, 0.3)
mat = bpy.data.materials.new('mat_eye')
color = (0, 0, 0, 1)
mat.diffuse_color = color
bpy.context.object.data.materials.append(mat)
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716083834390)

### 另一只眼睛

```
import bpy

bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete() 
head = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name  = "head"

r_eye = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "r_eye"
bpy.context.object.location = (0.7, 0.5, 0.3)
bpy.context.object.scale = (0.3, 0.3, 0.3)
mat = bpy.data.materials.new('mat_eye')
color = (1, 0, 0, 1)
mat.diffuse_color = color
bpy.context.object.data.materials.append(mat)


l_eye = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "l_eye"
bpy.context.object.location = (0.7, -0.5, 0.3)
bpy.context.object.scale = (0.3, 0.3, 0.3)
bpy.context.object.data.materials.append(mat)
```

- 红眼睛的效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716084510596)

- 可以控制层次结构吗?

### 层次结构

- 左右眼对象
	- 隶属于 脑袋 

```
import bpy

bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete() 
bpy.ops.mesh.primitive_uv_sphere_add()
head = bpy.context.object
bpy.context.object.name  = "head"

r_eye = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "r_eye"
bpy.context.object.location = (0.7, 0.5, 0.3)
bpy.context.object.scale = (0.3, 0.3, 0.3)
mat = bpy.data.materials.new('mat_eye')
color = (1, 0, 0, 1)
mat.diffuse_color = color
bpy.context.object.data.materials.append(mat)
bpy.context.object.parent = head

l_eye = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "l_eye"
bpy.context.object.location = (0.7, -0.5, 0.3)
bpy.context.object.scale = (0.3, 0.3, 0.3)
bpy.context.object.data.materials.append(mat)
bpy.context.object.parent = head
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716084834691)

- 左眼、右眼 两个对象
	- 成为 head 的字对象

### 增加一个身体

- 添加一个圆锥体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240528-1716858961196)

- 并修改参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716085007598)

- 将添加 身体圆锥 的操作
	- 转化为 代码

### 代码化

```
import bpy

bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete() 
bpy.ops.mesh.primitive_uv_sphere_add()
head = bpy.context.object
bpy.context.object.name  = "head"

r_eye = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "r_eye"
bpy.context.object.location = (0.7, 0.5, 0.3)
bpy.context.object.scale = (0.3, 0.3, 0.3)
mat = bpy.data.materials.new('mat_eye')
color = (0, 0, 0, 1)
mat.diffuse_color = color
bpy.context.object.data.materials.append(mat)
bpy.context.object.parent = head

l_eye = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "l_eye"
bpy.context.object.location = (0.7, -0.5, 0.3)
bpy.context.object.scale = (0.3, 0.3, 0.3)
bpy.context.object.data.materials.append(mat)
bpy.context.object.parent = head

bpy.ops.mesh.primitive_cone_add()
body = bpy.context.object
body.name  = "body"
body.location = (0,0,-1)
body.scale = (1,1,2)
```

- 可以加上 双手和双脚吗?
- 可以带上 帽子 或者 眼镜吗?
- 可以 添加 鼻子和耳朵吗?
- 这个任务就交给你了

### 再封装

- 现在场景中有两个对象
	- head
	- body

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240605-1717566178766)

- 可以把身体和头部	
	- 整合成一个 角色 吗?	 

### 再封装

- 把head、body
	- 封装进 character

```
import bpy

bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete()  
bpy.ops.mesh.primitive_uv_sphere_add()
head = bpy.context.object
bpy.context.object.name  = "head"

r_eye = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "r_eye"
bpy.context.object.location = (0.7, 0.5, 0.3)
bpy.context.object.scale = (0.3, 0.3, 0.3)
mat = bpy.data.materials.new('mat_eye')
color = (0, 0, 0, 1)
mat.diffuse_color = color
bpy.context.object.data.materials.append(mat)
bpy.context.object.parent = head

l_eye = bpy.ops.mesh.primitive_uv_sphere_add()
bpy.context.object.name = "l_eye"
bpy.context.object.location = (0.7, -0.5, 0.3)
bpy.context.object.scale = (0.3, 0.3, 0.3)
bpy.context.object.data.materials.append(mat)
bpy.context.object.parent = head

bpy.ops.mesh.primitive_cone_add()
body = bpy.context.object
body.name  = "body"
body.location = (0,0,-1)
body.scale = (1,1,2)

character = bpy.data.objects.new("character", None)
bpy.data.collections["Collection"].objects.link(character)
head.parent = character
body.parent = character
```

- 封装成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716105840478)

### 总结 🤔

- 这次我们制作了
	- 渐变颜色的球
	- 随机颜色的球
	- 一个人
- 可以控制摄像机 
	- 从不同角度拍摄他吗?
- 我们下次再说！👋
