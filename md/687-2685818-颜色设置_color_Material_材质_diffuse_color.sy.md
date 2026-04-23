---
show: step
version: 1.0 
enable_checker: true
---


# 颜色设置_color_Material_材质_diffuse_color 

## 开始

- [配套视频](https://www.bilibili.com/video/BV1qgkpBAE9X)
- 上次做了很多c919
	- 每个飞机都有自己的机身、机翼...

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240616-1718546181954)

- 如何修改物体的颜色呢?🤔

### 修改颜色

- 选择Script工作区
	- 选择3d视图中的立方体
	- 选择Material 材质调板
	- 修改颜色

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766148895603) 

- 选择着色器
	- Material Preview
	- 材质预览

### 效果

- 立方体对应颜色修改
- 信息调板观察到操作所对应的代码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766150143751) 

- 粘贴到游乐场

```
import bpy

bpy.data.materials["Material"].node_tree.nodes["Principled BSDF"].inputs[0].default_value = (0, 1, 0, 1)
```

- input[0] 怎么理解？

### 输入端口


- Blender Principled BSDF节点输入项
	- 索引与命名对应表

| 索引（inputs[X]） | 命名标识（inputs['名称']） | 说明（简要）|
|-------------------|----------------------------|---------------------------------|
| inputs[0]         | Base Color                 | 完全等同，均指向基础颜色输入项  |
| inputs[1]         | Subsurface                 | 次表面散射强度                  |
| inputs[2]         | Subsurface Radius          | 次表面散射半径（红、绿、蓝）|
| inputs[3]         | Subsurface Color           | 次表面散射颜色                  |
| inputs[4]         | Metallic                   | 金属度（0~1）|
| inputs[5]         | Specular                   | 镜面反射强度                    |
| inputs[6]         | Specular Tint              | 镜面反射色调                    |
| inputs[7]         | Roughness                  | 粗糙度（0~1）|
| inputs[8]         | Anisotropic                | 各向异性强度                    |
| inputs[9]         | Anisotropic Rotation       | 各向异性旋转角度                |
| inputs[10]        | Sheen                      | 光泽强度                        |
| inputs[11]        | Sheen Tint                 | 光泽色调                        |
| inputs[12]        | Clearcoat                  | 清漆强度                        |
| inputs[13]        | Clearcoat Roughness        | 清漆粗糙度                      |
| inputs[14]        | IOR                        | 折射率                          |
| inputs[15]        | Transmission               | 透射强度（透明度相关）|
| inputs[16]        | Transmission Roughness     | 透射粗糙度                      |

### 总结
1. `inputs[0]`和`Base Color`**完全等同**，前者是按顺序的索引访问，后者是按名称的标识访问。
2. Principled BSDF节点的所有输入项都支持**索引访问**和**命名访问**，表格中列出了常用的对应关系。
3. 命名访问更具可读性（如`Base Color`），索引访问更简洁，但索引顺序固定，若节点更新调整顺序会失效，实际开发中建议优先使用命名访问。

### 新对象属性总结

- 在原来基础属性基础上
	- 添加了 数据、材质

| 属性名          | 所属类别       | 说明（简要）|
|-----------------|----------------|-------------------------------------------|
| `location`      | 空间变换       | 坐标，格式为(x,y,z)浮点三元组     |
| `rotation_euler`| 空间变换（旋转）| 欧拉角，弧度制(x,y,z)|
| `scale`         | 空间变换       | 缩放比例        |
| `name`          | 基础标识       | 定义对象名称                |
| `parent`        | 层级关系       | 设置父对象，子对象继承父对象变换          |
| `data`          | 几何/材质关联  | 指向几何数据块，空对象为None              |
| `data.materials`| 材质管理       | 存储对象材质列表，可append添加材质        |



### 选择颜色

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766149661729) 

### 修改材质名称

- 把材质名称修改为green

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766149727283) 

### 代码修改材质名称

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766150345463) 

### 渐变的球

```
import bpy

# 清除场景中所有对象
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()

# 循环创建10x10的ico球体并赋予颜色材质
for i in range(10):
    for j in range(10):
        # 添加ico球体，设置半径和位置
        bpy.ops.mesh.primitive_ico_sphere_add(radius=0.5, location=(i, j, 0))
        
        # 获取当前激活的小球对象
        icosphere = bpy.context.active_object
        # 新建材质数据，命名为mat_i_j
        mat_name = f"mat_{i}_{j}"
        mat = bpy.data.materials.new(name=mat_name)
        
        # 启用材质的节点树（Blender新建材质默认关闭节点树）
        mat.use_nodes = True
        # 获取材质的Principled BSDF节点
        principled_bsdf = mat.node_tree.nodes["Principled BSDF"]
        
        # 根据i和j计算颜色（红随i变化，绿随j变化，蓝为0）
        red = i / 10.0  # 用10.0确保浮点运算，避免整数除法
        green = j / 10.0
        blue = 0.0
        alpha = 1.0
        color = (red, green, blue, alpha)
        
        # 设置Principled BSDF的基础颜色
        principled_bsdf.inputs['Base Color'].default_value = color
        
        # 将材质赋予小球对象（先清空原有材质，再添加）
        if icosphere.data.materials:
            icosphere.data.materials[0] = mat
        else:
            icosphere.data.materials.append(mat)
```

- 渐变效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766151383863) 

### 随机的球

```
import bpy
import random  # 导入随机数模块

# 清除场景中所有对象
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()

# 循环创建10x10的ico球体并赋予随机颜色材质
for i in range(10):
    for j in range(10):
        # 添加ico球体，设置半径和位置
        bpy.ops.mesh.primitive_ico_sphere_add(radius=0.5, location=(i, j, 0))
        
        # 获取当前激活的小球对象
        icosphere = bpy.context.active_object
        # 新建材质数据，命名为mat_i_j
        mat_name = f"mat_{i}_{j}"
        mat = bpy.data.materials.new(name=mat_name)
        
        # 启用材质的节点树（Blender新建材质默认关闭节点树）
        mat.use_nodes = True
        # 获取材质的Principled BSDF节点
        principled_bsdf = mat.node_tree.nodes["Principled BSDF"]
        
        # 生成随机的RGB颜色（范围0.0到1.0），alpha固定为1.0
        red = random.random()    # 随机生成0.0~1.0的浮点数
        green = random.random()
        blue = random.random()
        alpha = 1.0
        color = (red, green, blue, alpha)
        
        # 设置Principled BSDF的基础颜色
        principled_bsdf.inputs['Base Color'].default_value = color
        
        # 将材质赋予小球对象（先清空原有材质，再添加）
        if icosphere.data.materials:
            icosphere.data.materials[0] = mat
        else:
            icosphere.data.materials.append(mat)
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766151701614) 

- 如何查看目前所有的颜色呢？

### 打开大纲视图

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20241103-1730606630034) 

- 找到blender文件

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766151740480) 

- 所有的Materials都在这里了
- 能用python遍历吗？

### 遍历颜色

```
import bpy

for material in bpy.data.materials:
    print(material)
```

- 出现了好多种颜色

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766151793150) 

- 为什么？

### 删除颜色

- 每次运行都添加100种材质

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251218-1766025196519) 

- 如何删除材质？

### 删除材质

```
import bpy

for material in bpy.data.materials:
    bpy.data.materials.remove(material)
```

- 先删材质

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251218-1766025314913) 

### 再添加材质

```
import bpy

# 清除场景中所有对象
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()

# 循环创建10x10的ico球体并赋予颜色材质
for i in range(10):
    for j in range(10):
        # 添加ico球体，设置半径和位置
        bpy.ops.mesh.primitive_ico_sphere_add(radius=0.5, location=(i, j, 0))
        
        # 获取当前激活的小球对象
        icosphere = bpy.context.active_object
        # 新建材质数据，命名为mat_i_j
        mat_name = f"mat_{i}_{j}"
        mat = bpy.data.materials.new(name=mat_name)
        
        # 启用材质的节点树（Blender新建材质默认关闭节点树）
        mat.use_nodes = True
        # 获取材质的Principled BSDF节点
        principled_bsdf = mat.node_tree.nodes["Principled BSDF"]
        
        # 根据i和j计算颜色（红随i变化，绿随j变化，蓝为0）
        red = i / 10.0  # 用10.0确保浮点运算，避免整数除法
        green = j / 10.0
        blue = 0.0
        alpha = 1.0
        color = (red, green, blue, alpha)
        
        # 设置Principled BSDF的基础颜色
        principled_bsdf.inputs['Base Color'].default_value = color
        
        # 将材质赋予小球对象（先清空原有材质，再添加）
        if icosphere.data.materials:
            icosphere.data.materials[0] = mat
        else:
            icosphere.data.materials.append(mat)

for material in bpy.data.materials:
    print(material)
```

- 后添加

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766151963597) 

- 总共100种材质
- 可以看看材质的详细信息吗？

### 遍历材质细节

```
import bpy

for mat in bpy.data.materials:
	for v in  mat.node_tree.nodes["Principled BSDF"].inputs['Base Color'].default_value :
		print(v, end=",")
	print()
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685818/uid1190679-20251219-1766152069003) 

- 除了材质之外		
	- 对象也可以这样控制吗？

### 总结 🤔

- 这次我们制作了
	- 渐变颜色的球
	- 随机颜色的球

```
import bpy

for material in bpy.data.materials:
    bpy.data.materials.remove(material)
```

- 对象也可以像材质一样remove吗？🤔
- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV1qgkpBAE9X)


