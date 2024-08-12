---
show: step
version: 1.0 
enable_checker: true
---


# python_blender

## 开始

- 上次我们用代码
	- 实现了动画
- 代码动画有两种
	1. 每次进入帧的时候 计算数值
	2. 在时间轴上插入关键帧 
- 我们实践了两种动画
	- 都能用
	- 但是具体帧上数值不同
- 这是为什么呢?🤔

### 上次代码

### 对比参照

```
import bpy

def frame_handler(scene):
    current = bpy.context.scene.frame_current
    distance = - current
    bpy.data.objects["red_ball"].location[1] = distance
    str_dis = "{:.2f}".format(distance)
    bpy.data.objects["red_text"].data.body = "Frm:" + str(current) + "\n"\
                                       + "Dis:" + str_dis
    str_dis = "{:.2f}".format(bpy.data.objects["blue_ball"].location[1])
    bpy.data.objects["blue_text"].data.body = "Frm:" + str(current) + "\n"\
                                       + "Dis:" + str_dis

def init():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()

    bpy.ops.object.text_add()
    bpy.context.object.data.size = 3
    bpy.context.object.name = "red_text"
    mat = bpy.data.materials.new('red_text')
    color = (0.5, 0, 0, 1)
    mat.diffuse_color = color
    bpy.context.object.data.materials.append(mat)

    bpy.ops.mesh.primitive_plane_add(size=20)
    mat = bpy.data.materials.new('mat_plane')
    color = (0, 1, 0, 1)
    mat.diffuse_color = color
    bpy.context.object.data.materials.append(mat)
    bpy.context.object.location = (0,0,-0.5)
    bpy.context.object.scale = (10,10,1)

    bpy.ops.mesh.primitive_ico_sphere_add()
    bpy.context.object.name = "red_ball"
    mat = bpy.data.materials.new('mat_red')
    color = (1, 0, 0, 1)
    mat.diffuse_color = color
    bpy.context.object.data.materials.append(mat)
    bpy.context.object.location = (3,10,0)

    bpy.ops.object.light_add(type='SPOT', radius=1)
    bpy.context.object.data.energy = 20000
    bpy.context.object.location = (0,0,35)

    camera = bpy.data.cameras.new('Camera')
    camera_obj = bpy.data.objects.new('Camera', camera)
    bpy.data.collections["Collection"].objects.link(camera_obj)
    camera.lens = 50  # Focal length in millimeters
    camera.sensor_width = 36  # Sensor width in millimeters
    camera.sensor_height = 24  # Sensor height in millimeters
    camera_obj.location = (0,-5,40)  # X, Y, Z coordinates
    camera_obj.rotation_euler = (0,0,0)
    bpy.context.scene.camera = camera_obj
    bpy.app.handlers.frame_change_pre.clear()
    bpy.app.handlers.frame_change_pre.append(frame_handler)
    
    bpy.ops.mesh.primitive_ico_sphere_add()
    mat = bpy.data.materials.new('mat_text')
    color = (0, 0, 1, 1)
    mat.diffuse_color = color
    obj = bpy.context.object
    obj.data.materials.append(mat)
    obj.location = (-3,-1,0)
    obj.keyframe_insert('location',frame=1)
    obj.location =  (-3,-10,0)
    obj.name = "blue_ball"
    obj.keyframe_insert(data_path="location",frame=10)
    
    bpy.ops.object.text_add()
    bpy.context.object.data.size = 3
    bpy.context.object.name = "blue_text"
    bpy.context.object.location = (-15,0,0)
    mat = bpy.data.materials.new('blue_text')
    color = (0, 0, 0.5, 1)
    mat.diffuse_color = color
    bpy.context.object.data.materials.append(mat)

def render():
    bpy.context.scene.frame_end = 10
    bpy.context.scene.render.resolution_x = 200
    bpy.context.scene.render.resolution_y = 150
    bpy.context.scene.render.engine = 'CYCLES'
    bpy.context.scene.render.filepath = "/tmp/o"
    bpy.ops.render.render(animation=True)

init()
render()
```

### 设置差值方式

- 选中
	- 动画工作区
	- Animate worksapce
- 3d-view中 选中
	- 蓝色小球
- 时间轴中
	- 选中 蓝色小球
	- location.y

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240610-1718025591313)

- 鼠标右键

### 右键

- 右键选择
	- 第一帧的 关键帧
	- 弹出 菜单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240610-1718025966113)

- 将 插值算法 模式
	- interpolation mode
	- 修改为 
		- 线性
		- liner

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240610-1718026022579)

- 两个球的location.y
	- 同步了
- 可以用代码实现
	- 线性插值吗?

### 观察 python-tip

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240610-1718026270492)

- 将时间线调板
	- 修改为曲线编辑器调板

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240610-1718026677500)

### 设置关键帧的插值方法

- 把蓝色小球locaition的x、z锁定

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240610-1718026709274)

- 选中关键帧
	- 找到key菜单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240610-1718027929709)

- 如何理解这许多种插值算法?

### 插值算法


- 也就是说
	- 原来的蓝色小球
	- 并不是线性插值
- 

### 封装运动

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240616-1718536103576)

```
import bpy
from math import radians
import os

def create_simple_Cat_with_ears():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)

    bpy.ops.mesh.primitive_uv_sphere_add(radius=1, location=(0, 0, 1))
    body = bpy.context.object
    body.scale = (1, 0.5, 0.5)
    bpy.ops.object.transform_apply(scale=True)
    body.name = "CatBody"

    bpy.ops.mesh.primitive_uv_sphere_add(radius=0.5, location=(1.2, 0, 1.2))
    head = bpy.context.object
    head.name = "CatHead"

    leg_locations = [(-0.5, 0.3, 0), (0.5, 0.3, 0), (-0.5, -0.3, 0), (0.5, -0.3, 0)]
    for loc in leg_locations:
        bpy.ops.mesh.primitive_cylinder_add(radius=0.1, depth=1, location=(loc[0], loc[1], 0.5))
        leg = bpy.context.object
        leg.name = "CatLeg"

    bpy.ops.mesh.primitive_uv_sphere_add(radius=0.2, location=(-1.2, 0, 1))
    tail = bpy.context.object
    tail.name = "CatTail"
    tail.scale = (1.2, 0.2, 0.2)
    tail.rotation_euler = (0.7854, 0, 0)
    bpy.ops.object.transform_apply(scale=True, rotation=True)

    bpy.ops.mesh.primitive_cone_add(vertices=20, radius1=0.15, depth=0.5, location=(1.4, 0.25, 1.7))
    ear1 = bpy.context.object
    ear1.rotation_euler = (0, 0, 0.785)
    ear1.name = "CatEar1"

    bpy.ops.mesh.primitive_cone_add(vertices=20, radius1=0.15, depth=0.5, location=(1.4, -0.25, 1.7))
    ear2 = bpy.context.object
    ear2.rotation_euler = (0, 0, -0.785)
    ear2.name = "CatEar2"

create_simple_Cat_with_ears()

def create_material(name, hue, saturation, value, alpha):
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    nodes = material.node_tree.nodes

    for node in nodes:
        nodes.remove(node)

    output = nodes.new(type="ShaderNodeOutputMaterial")
    output.location = (300, 0)

    bsdf = nodes.new(type="ShaderNodeBsdfPrincipled")
    bsdf.location = (0, 0)

    bsdf.inputs['Base Color'].default_value = (hue, saturation, value, alpha)
    material.node_tree.links.new(output.inputs['Surface'], bsdf.outputs['BSDF'])

    return material

def apply_material(obj, material):
    if obj.data.materials:
        obj.data.materials[0] = material
    else:
        obj.data.materials.append(material)

body_material = create_material("BodyMaterial", 0.058, 0.997, 0.800, 1.000)
leg_material = create_material("LegMaterial", 0.065, 0.965, 0.800, 1.000)
head_material = create_material("HeadMaterial", 0.091, 0.854, 0.800, 1.000)
ear_material = create_material("EarMaterial", 0.083, 0.854, 0.800, 1.000)

body = bpy.data.objects.get("CatBody")
head = bpy.data.objects.get("CatHead")
legs = [
    bpy.data.objects.get("CatLeg"),
    bpy.data.objects.get("CatLeg.001"),
    bpy.data.objects.get("CatLeg.002"),
    bpy.data.objects.get("CatLeg.003")
]
tail = bpy.data.objects.get("CatTail")
ears = [
    bpy.data.objects.get("CatEar1"),
    bpy.data.objects.get("CatEar2"),
]

if body:
    apply_material(body, body_material)
if tail:
    apply_material(tail, body_material)
for leg in legs:
    if leg:
        apply_material(leg, leg_material)
if head:
    apply_material(head, head_material)
for ear in ears:
    if ear:
        apply_material(ear, ear_material)

# 创建摄像机
bpy.ops.object.camera_add()
camera = bpy.context.object
camera.location = (5.9, -4.17, 4.23)
camera.rotation_euler = (radians(60), 0, radians(46.682))
bpy.context.scene.camera = camera
camera.data.type = 'PERSP'
camera.data.lens = 19
camera.data.clip_start = 0.1
camera.data.clip_end = 1000

# 添加地面
bpy.ops.mesh.primitive_plane_add(size=10, location=(0, 0, 0))
ground = bpy.context.object
ground.name = "Ground"

# 确保使用Cycles渲染引擎
bpy.context.scene.render.engine = 'CYCLES'

# 创建聚光灯（示例位置）
bpy.ops.object.light_add(type='SPOT', location=(7.04, 6.24, 6.18))
spot_light = bpy.context.object
spot_light.rotation_euler = (radians(-35), radians(54), radians(-4))
spot_light.data.spot_size = radians(45)
spot_light.data.spot_blend = 0.641
spot_light.data.energy = 1000  # 调整光源亮度

# 设置聚光灯的阴影属性
spot_light.data.use_shadow = True
spot_light.data.cycles.cast_shadow = True
spot_light.data.shadow_buffer_clip_start = 0.05
spot_light.data.shadow_buffer_bias = 1.0

# 添加环境光
world = bpy.context.scene.world
world.use_nodes = True
nodes = world.node_tree.nodes
links = world.node_tree.links

# 清除现有节点
for node in nodes:
    nodes.remove(node)

# 添加背景节点
background = nodes.new(type="ShaderNodeBackground")
background.inputs['Color'].default_value = (0.2, 0.2, 0.2, 1)  # 暗灰色环境光
background.inputs['Strength'].default_value = 0.5  # 减弱环境光强度

# 添加世界输出节点
world_output = nodes.new(type="ShaderNodeOutputWorld")

# 连接背景节点到世界输出节点
links.new(background.outputs['Background'], world_output.inputs['Surface'])

# 设置地面材质以接收阴影
ground_material = bpy.data.materials.new(name="GroundMaterial")
ground_material.use_nodes = True
nodes = ground_material.node_tree.nodes
links = ground_material.node_tree.links

# 清除现有节点
for node in nodes:
    nodes.remove(node)

# 添加Diffuse BSDF节点
diffuse = nodes.new(type="ShaderNodeBsdfDiffuse")
diffuse.inputs['Color'].default_value = (0.8, 0.8, 0.8, 1)  # 灰色地面

# 添加Material Output节点
material_output = nodes.new(type="ShaderNodeOutputMaterial")

# 连接节点
links.new(diffuse.outputs['BSDF'], material_output.inputs['Surface'])

# 将材质赋予地面
ground.data.materials.append(ground_material)

def combine_parts(parts):
    # 选择所有部分
    bpy.ops.object.select_all(action='DESELECT')
    for part in parts:
        part.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]

    # 合并选中的部分
    bpy.ops.object.join()
    combined_object = bpy.context.object
    combined_object.name = "Cat"
    return combined_object

def create_jump_animation(cat, start_frame, end_frame):
    # 设置初始位置关键帧
    cat.location = (0, 0, 1)
    cat.keyframe_insert(data_path="location", frame=start_frame)

    # 设置中间位置关键帧（跳跃最高点）
    mid_frame = start_frame + (end_frame - start_frame) // 2
    cat.location = (3, 0, 3)
    cat.keyframe_insert(data_path="location", frame=mid_frame)

    # 添加额外的关键帧，模拟下落过程
    landing_frame = start_frame + int((end_frame - start_frame) * 0.8)  # 假设在跳跃时间的80%处落地
    cat.location = (6, 0, 1)
    cat.keyframe_insert(data_path="location", frame=landing_frame)

# 合并所有部分成为一个猫对象
cat_parts = [body, head] + legs + [tail] + ears
cat = combine_parts(cat_parts)

# 创建跳跃动画，持续4秒（100帧，假设帧速率为25帧/秒）
create_jump_animation(cat, start_frame=1, end_frame=100)

# 设置输出文件夹路径
output_folder = "/tmp/output"
os.makedirs(output_folder, exist_ok=True)

# 设置渲染参数
bpy.context.scene.render.resolution_x = 240
bpy.context.scene.render.resolution_y = 180
bpy.context.scene.render.image_settings.file_format = 'PNG'

# 渲染每一帧并导出为图像文件
for frame_num in range(1, 101):  # 从第1帧到第125帧
    bpy.context.scene.frame_set(frame_num)
    bpy.context.scene.render.filepath = os.path.join(output_folder, f"frame_{frame_num:03}.png")
    bpy.ops.render.render(write_still=True)
```

### 总结 🤔
- 我们下次再说！👋