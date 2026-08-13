---
show: step
version: 1.0 
enable_checker: true
---


# python_blender

## 开始

- 上次做了很多c919
	- 每个飞机都有自己的机身、机翼...
- 这个Cube对象里面
	- 怎么还有个绿色的Cube呢?

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240518-1716040401696)

### 切换窗口

- 两个Cube不光颜色不同
	- 类型也不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240518-1716040562082)

| 颜色 | 类型 |方式 |
|---|---|---|
| 黄色 Cube |  Object 对象  | 前端显示 |
| 绿色 Cube | Mesh 网格 | 后台数据存储|

### 得到mesh对象 

- 第一步
	- 获取网格数据 'Cube'
	- 将其指定给变量mesh（自定义的名称，也可以是别的）

```
mesh = bpy.data.meshes['Cube'] 
```

- 如何 根据 网格 
	- 生成对象呢?

### 生成对象 

```
obj = bpy.data.objects.new(
```

- 按下 <kbd>Tab</kbd> 得到提示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240518-1716040930377)

- 参数需要两个
	1. 对象的名字
	2. 对象的数据

```
obj = bpy.data.objects.new("oeasy",mesh)
```

### 链接对象

- 此时Scene Collection调版里面没有obj
	- 但是文件调版里面已经有了
	- 此时需要把obj 链接到 场景

```
bpy.context.collection.objects.link(obj) 
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240518-1716041269350)

- obj进入场景

```
import bpy
# 获取网格数据，赋给变量mesh
mesh = bpy.data.meshes['Cube']
# 生成新的对象数据，赋给变量object
obj = bpy.data.objects.new('oeasy',mesh)
# 将对象数据链接到场景中，从而显示对象
bpy.context.collection.objects.link(obj) 
```

- 为什么分别用
	-  bpy.data.objects
	-  bpy.context.collection.objects

### 对象

-  bpy.context.collection.objects
	- 对应 当前场景 上下文中
	- 只有collection集合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716072008123)

-  bpy.data.objects
	- 对应文件调版里面
	- 对象 更多

### mesh的修改

```
import bpy
bpy.data.objects["Cube"].data.vertices[0].co.x += 1.0
```

- 可以修改第一个点的x坐标

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716072050026)

### 使用点的方式

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685809/uid1190679-20241102-1730552720837) 


```import bpy
import bmesh

# 创建新的网格数据对象
mesh = bpy.data.meshes.new(name="TriangleMesh")

# 创建物体对象并关联到网格数据
obj = bpy.data.objects.new("TriangleObject", mesh)

# 将物体添加到场景中
bpy.context.collection.objects.link(obj)

# 使用 bmesh 操作网格
bm = bmesh.new()

# 添加三个顶点
v1 = bm.verts.new((0, 0, 0))
v2 = bm.verts.new((1, 0, 0))
v3 = bm.verts.new((0.5, 1, 0))

# 添加三条边连接三个顶点形成三角形
bm.edges.new([v1, v2])
bm.edges.new([v2, v3])
bm.edges.new([v3, v1])

# 将 bmesh 的数据更新到 Blender 的网格数据中
bm.to_mesh(mesh)
bm.free()
```

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685809/uid1190679-20241102-1730552963511) 

- 3个点、3条边、没有面

### 使用点的方式生成面

```
import bpy
verts = [(0,0,0),(0,1,0),(1,1,0),(1,0,0)]
edges = []
faces = [(0,1,2,3)]
mesh = bpy.data.meshes.new('Mesh')
mesh.from_pydata(verts,edges,faces)
new_object = bpy.data.objects.new('Object',mesh)
bpy.context.collection.objects.link(new_object) 
```

- 最终效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716072187114)

### 编辑和观察

- 选中方片
	- 按下 <kbd> tab</kbd> 
	- 切换编辑模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240519-1716072321657)

### 金字塔

```
import bpy
import math

bpy.ops.object.select_all(action='DESELECT')
bpy.ops.object.select_by_type(type='MESH')
bpy.ops.object.delete()

verts = [
    (1, 1, 1),
    (-1, 1, 1),
    (0, -1, 1),
    (0, 0, -1)  
]
faces = [
    (0, 1, 2),
    (0, 1, 3),
    (1, 2, 3),
    (0, 2, 3)
]
mesh = bpy.data.meshes.new("PyramidMesh")
mesh.from_pydata(verts, [], faces)
obj = bpy.data.objects.new("Pyramid", mesh)
scene = bpy.context.scene
scene.collection.objects.link(obj)

mat = bpy.data.materials.new(name="PinkMaterial")
mat.diffuse_color = (1, 0.5, 0.5, 1)  # RGBA颜色
obj.data.materials.append(mat)

bpy.ops.object.light_add(type='SPOT', radius=1, location=(6.27,-3.4,2.83))
spot_light = bpy.context.object
spot_light.data.energy = 1000
spot_light.rotation_euler = (1.172,0,0.907)

camera_data = bpy.data.cameras.new(name="Camera")
camera_obj = bpy.data.objects.new(name="Camera", object_data=camera_data)
scene.collection.objects.link(camera_obj)
camera_obj.location = (13.6, 5, 10.5)
camera_obj.rotation_euler = (-2.233,3.14,-1.047)
scene.camera = camera_obj

scene.render.engine = 'CYCLES'
scene.render.image_settings.file_format = 'PNG'
scene.render.filepath = '/tmp/render2.png'
scene.render.resolution_x = 640
scene.render.resolution_y = 480
scene.render.resolution_percentage = 50

bpy.ops.render.render(write_still=True)
```

### 随机平面

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2685809/uid1190679-20250211-1739246613234)

- 边缘部分会过渡到边界

```
import bpy
import random
import math

def create_modified_grid(size=5, subdivisions=10, height_variance=1):
    # Clear existing objects
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
    
    # Create base grid
    bpy.ops.mesh.primitive_grid_add(
        size=size,
        x_subdivisions=subdivisions,
        y_subdivisions=subdivisions
    )
    grid = bpy.context.active_object
    grid.name = "Terrain"
    
    # Add noise to vertices
    mesh = grid.data
    for v in mesh.vertices:
        # Use perlin noise or similar for more natural terrain
        distance = math.sqrt(v.co.x ** 2 + v.co.y ** 2)
        height = random.uniform(-height_variance/2, height_variance/2)
        # Reduce height at edges for smoother borders
        edge_factor = 1 - (distance / (size/1.5))
        v.co.z += height * max(0, edge_factor)
    return grid

if __name__ == "__main__":
    terrain = create_modified_grid(size=10, subdivisions=20, height_variance=2)
```

### 总结 🤔
- 我们下次再说！👋
