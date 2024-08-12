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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240613-1718283755717/wm)
