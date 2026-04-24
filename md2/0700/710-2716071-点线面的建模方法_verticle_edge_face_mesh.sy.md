
 ![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2716071/uid1190679-20250120-1737344060703) 

```
import bpy
import bmesh

# 创建一个新的网格数据
mesh = bpy.data.meshes.new("NewMesh")
# 创建一个新的物体并关联到新的网格数据
obj = bpy.data.objects.new("NewObject", mesh)
# 将新物体添加到当前场景
bpy.context.scene.collection.objects.link(obj)

# 进入编辑模式
bpy.context.view_layer.objects.active = obj
bpy.ops.object.mode_set(mode='EDIT')

# 创建一个Bmesh对象
bm = bmesh.from_edit_mesh(mesh)

# 创建三个顶点
v1 = bm.verts.new((0, 0, 0))
v2 = bm.verts.new((0, 1, 0))
v3 = bm.verts.new((1, 0, 0))

# 创建一个面
face = bm.faces.new([v1, v2, v3])

# 更新Bmesh对象到网格数据
bmesh.update_edit_mesh(mesh)

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')

```

### 多棱锥、金字塔

```
import bpy
import math

def create_triangular_pyramid(base_radius=1, height=1):
    vertices = [(math.cos(math.radians(angle)) * base_radius, math.sin(math.radians(angle)) * base_radius, 0)
                for angle in range(0, 360, 120)]
    vertices.append((0, 0, height))
    faces = [(0, 1, 2),  # 底面
             (0, 1, 3),  # 侧面1
             (1, 2, 3),  # 侧面2
             (2, 0, 3)]  # 侧面3

    mesh = bpy.data.meshes.new("TriangularPyramid")
    mesh.from_pydata(vertices, [], faces)
    obj = bpy.data.objects.new("TriangularPyramid", mesh)
    bpy.context.collection.objects.link(obj)
    bpy.context.view_layer.objects.active = obj
    return obj


triangular_pyramid = create_triangular_pyramid()
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240611-1718108716515)


### 上材质

```
import bpy
import math

def create_triangular_pyramid(base_radius=1, height=1):
    vertices = [(math.cos(math.radians(angle)) * base_radius, math.sin(math.radians(angle)) * base_radius, 0)
                for angle in range(0, 360, 120)]
    vertices.append((0, 0, height))
    faces = [(0, 1, 2),  # 底面
             (0, 1, 3),  # 侧面1
             (1, 2, 3),  # 侧面2
             (2, 0, 3)]  # 侧面3
    mesh = bpy.data.meshes.new("TriangularPyramid")
    mesh.from_pydata(vertices, [], faces)
    obj = bpy.data.objects.new("TriangularPyramid", mesh)
    bpy.context.collection.objects.link(obj)
    bpy.context.view_layer.objects.active = obj
    mat = bpy.data.materials.new(name="ColoredMaterial")
    mat.diffuse_color = (1, 1, 0.3, 1)  
    bpy.context.object.data.materials.append(mat)
    return obj

triangular_pyramid = create_triangular_pyramid()
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240611-1718108983172)

### 灯光、摄影机、渲染

```
import bpy
import math

def clear_scene():
    bpy.ops.object.select_all(action="SELECT") 
    bpy.ops.object.delete() 
    bpy.ops.mesh.primitive_plane_add(size=20)


def create_triangular_pyramid(base_radius=1, height=1):
    vertices = [(math.cos(math.radians(angle)) * base_radius, math.sin(math.radians(angle)) * base_radius, 0)
                for angle in range(0, 360, 120)]
    vertices.append((0, 0, height))
    faces = [(0, 1, 2),  # 底面
             (0, 1, 3),  # 侧面1
             (1, 2, 3),  # 侧面2
             (2, 0, 3)]  # 侧面3
    mesh = bpy.data.meshes.new("TriangularPyramid")
    mesh.from_pydata(vertices, [], faces)
    obj = bpy.data.objects.new("TriangularPyramid", mesh)
    bpy.context.collection.objects.link(obj)
    bpy.context.view_layer.objects.active = obj
    mat = bpy.data.materials.new(name="ColoredMaterial")
    mat.diffuse_color = (1, 1, 0.3, 1)  
    bpy.context.object.data.materials.append(mat)
    return obj

def init():
    bpy.ops.object.light_add(type='POINT', location=(2, 3, 3))
    light = bpy.context.object
    light.data.energy = 4000 
    bpy.ops.object.camera_add(enter_editmode=False, align='VIEW', location=(0, 0, 7))
    cam = bpy.context.object
    bpy.context.scene.camera = cam

def render():
    bpy.context.scene.render.engine = 'CYCLES' 
    bpy.context.scene.render.resolution_x = 640
    bpy.context.scene.render.resolution_y = 480
    bpy.context.scene.render.resolution_percentage = 50
    bpy.context.scene.render.filepath = '/tmp/triangular_pyramid.png' 
    bpy.ops.render.render(write_still=True)

clear_scene()
triangular_pyramid = create_triangular_pyramid()
init()
render()
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240611-1718109353466)


### 多棱柱

```
import bpy
import math
bpy.ops.object.select_all(action='DESELECT')
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
def create_hexagonal_prism(radius=1, height=2):
    vertices = [(math.cos(math.radians(angle)) * radius, math.sin(math.radians(angle)) * radius, -height/2)
                for angle in range(0, 360, 60)]
    vertices += [(math.cos(math.radians(angle)) * radius, math.sin(math.radians(angle)) * radius, height/2)
                 for angle in range(0, 360, 60)]
    faces = [(0, 1, 2, 3, 4, 5),
             (6, 7, 8, 9, 10, 11),
             (0, 1, 7, 6),
             (1, 2, 8, 7),
             (2, 3, 9, 8),
             (3, 4, 10, 9),
             (4, 5, 11, 10),
             (5, 0, 6, 11)]
    mesh = bpy.data.meshes.new("HexagonalPrism")
    mesh.from_pydata(vertices, [], faces)
    obj = bpy.data.objects.new("HexagonalPrism", mesh)
    bpy.context.collection.objects.link(obj)
    bpy.context.view_layer.objects.active = obj
    return obj

hexagonal_prism = create_hexagonal_prism()
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240613-1718283755717)


### emoji

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2716071/uid1190679-20250212-1739349718266)

```
import bpy

def create_material(name, color):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = False
    mat.diffuse_color = color
    return mat

def create_emoji():
    # 清除场景
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()
    
    # 创建空物体作为父对象
    bpy.ops.object.empty_add(type='PLAIN_AXES', location=(0, 0, 0))
    emoji = bpy.context.active_object
    emoji.name = "Emoji"
    
    # 创建材质
    yellow_mat = create_material("YellowMaterial", (1, 1, 0, 1))
    black_mat = create_material("BlackMaterial", (0, 0, 0, 1))
    
    # 创建主体
    bpy.ops.mesh.primitive_uv_sphere_add(
        segments=32, 
        ring_count=16, 
        radius=1, 
        location=(0, 0, 0)
    )
    body = bpy.context.object
    body.name = "EmojiBody"
    body.scale = (1, 1, 0.5)
    body.data.materials.append(yellow_mat)
    body.parent = emoji
    
    # 创建眼睛
    for i in [-0.3, 0.3]:
        bpy.ops.mesh.primitive_uv_sphere_add(
            segments=8, 
            ring_count=8, 
            radius=0.1, 
            location=(i, 0.3, 0.4)
        )
        eye = bpy.context.object
        eye.name = f"EmojiEye{i}"
        eye.data.materials.append(black_mat)
        eye.parent = emoji
    
    # 创建嘴巴
    verts = [(0.4, 0.1, 0), (-0.4, 0.1, 0), (0.3, 0.05, 0), (-0.3, 0.05, 0)]
    edges = [(0, 1), (1, 3), (3, 2), (2, 0)]
    faces = [(0, 1, 3, 2)]
    
    mouth_mesh = bpy.data.meshes.new("EmojiMouthMesh")
    mouth_mesh.from_pydata(verts, edges, faces)
    mouth_obj = bpy.data.objects.new("EmojiMouth", mouth_mesh)
    mouth_obj.data.materials.append(black_mat)
    mouth_obj.location = (0, -0.4, 0.5)
    
    # 获取当前集合
    current_collection = bpy.context.collection
    # 将嘴巴对象添加到当前集合
    current_collection.objects.link(mouth_obj)
    # 设置父对象
    mouth_obj.parent = emoji
    
    return emoji

create_emoji()
```
