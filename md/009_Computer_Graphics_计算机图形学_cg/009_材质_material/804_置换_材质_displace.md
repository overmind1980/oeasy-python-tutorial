![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4113400/uid1190679-20250718-1752810483093) 


```
import bpy
import math

# 清空场景
def clear_scene():
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)

# 创建基础材质
def create_material(name, color, roughness=0.5, subsurface=0.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    bsdf = nodes.get("Principled BSDF")

    # 设置材质属性，使用 safer 的方式访问节点输入
    bsdf.inputs[0].default_value = color         # Base Color
    bsdf.inputs[7].default_value = roughness     # Roughness
    bsdf.inputs[1].default_value = subsurface    # Subsurface

    return mat

# 分配材质
def assign_material(obj, mat):
    if obj.data.materials:
        obj.data.materials[0] = mat
    else:
        obj.data.materials.append(mat)

# 上面包
def create_top_bun():
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1, location=(0, 0, 3))
    obj = bpy.context.object
    obj.scale[2] = 0.5
    obj.name = "TopBun"
    mat = create_material("TopBunMat", (0.85, 0.6, 0.3, 1), roughness=0.6, subsurface=0.2)
    assign_material(obj, mat)
    return obj

# 下面包
def create_bottom_bun():
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1, location=(0, 0, 0))
    obj = bpy.context.object
    obj.scale[2] = 0.3
    obj.name = "BottomBun"
    mat = create_material("BottomBunMat", (0.8, 0.5, 0.25, 1), roughness=0.5, subsurface=0.2)
    assign_material(obj, mat)
    return obj

# 牛肉饼
def create_patty():
    bpy.ops.mesh.primitive_cylinder_add(radius=1.1, depth=0.3, location=(0, 0, 1))
    obj = bpy.context.object
    obj.name = "Patty"
    mat = create_material("PattyMat", (0.2, 0.1, 0.05, 1), roughness=0.9)
    assign_material(obj, mat)
    return obj

# 芝士
def create_cheese():
    bpy.ops.mesh.primitive_plane_add(size=1.8, location=(0, 0, 1.4))
    obj = bpy.context.object
    obj.name = "Cheese"
    bpy.ops.object.modifier_add(type='SOLIDIFY')
    obj.modifiers["Solidify"].thickness = 0.05
    mat = create_material("CheeseMat", (1.0, 0.7, 0.2, 1), roughness=0.3, subsurface=0.1)
    assign_material(obj, mat)
    return obj

# 番茄
def create_tomato():
    bpy.ops.mesh.primitive_torus_add(location=(0, 0, 1.6), major_radius=1.1, minor_radius=0.1)
    obj = bpy.context.object
    obj.scale[2] = 0.3
    obj.name = "Tomato"
    mat = create_material("TomatoMat", (1.0, 0.2, 0.2, 1), roughness=0.4, subsurface=0.3)
    assign_material(obj, mat)
    return obj

# 生菜
def create_lettuce():
    bpy.ops.mesh.primitive_plane_add(size=2.2, location=(0, 0, 2))
    obj = bpy.context.object
    obj.name = "Lettuce"

    # 进入编辑模式细分
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.subdivide(number_cuts=20)
    bpy.ops.object.mode_set(mode='OBJECT')

    # 添加 Displace
    tex = bpy.data.textures.new('LettuceDisplace', type='CLOUDS')
    disp = obj.modifiers.new("Displace", type='DISPLACE')
    disp.texture = tex
    disp.strength = 0.2

    mat = create_material("LettuceMat", (0.3, 0.8, 0.3, 1), roughness=0.6, subsurface=0.4)
    assign_material(obj, mat)
    return obj

# 添加主灯光
def setup_lighting():
    bpy.ops.object.light_add(type='AREA', location=(5, -5, 5))
    light = bpy.context.object
    light.data.energy = 1500
    light.data.size = 5
    light.name = "MainLight"

# 添加相机
def setup_camera():
    bpy.ops.object.camera_add(location=(5, -5, 3), rotation=(math.radians(75), 0, math.radians(45)))
    cam = bpy.context.object
    cam.name = "BurgerCam"
    bpy.context.scene.camera = cam

# 设置渲染引擎为 Cycles（更真实）
def set_cycles():
    bpy.context.scene.render.engine = 'CYCLES'
    bpy.context.scene.cycles.device = 'GPU'

# 主流程
clear_scene()
set_cycles()
top_bun = create_top_bun()
bottom_bun = create_bottom_bun()
patty = create_patty()
cheese = create_cheese()
tomato = create_tomato()
lettuce = create_lettuce()
setup_lighting()
setup_camera()

# 所有汉堡层，从下往上
layers = ["BottomBun", "Patty", "Cheese", "Tomato", "Lettuce", "TopBun"]

# 动画参数
start_frame = 1
peak_frame = 6
end_frame = 12
jump_height = 0.6

# 初始高度间距
base_z = 0.0
initial_gap = 1.0
final_gap = 0.3  # 更紧凑的最终高度

# 设置每层对象初始高度
z_positions_initial = []
z_positions_final = []

for i in range(len(layers)):
    z_init = base_z + i * initial_gap
    z_final = base_z + i * final_gap
    z_positions_initial.append(z_init)
    z_positions_final.append(z_final)

# 应用动画关键帧
for i, name in enumerate(layers):
    obj = bpy.data.objects.get(name)
    if not obj:
        print(f"未找到对象: {name}")
        continue

    # 起始位置：拉开间距
    obj.location.z = z_positions_initial[i]
    obj.keyframe_insert(data_path="location", frame=start_frame)

    # 跳起
    obj.location.z = z_positions_initial[i] + jump_height
    obj.keyframe_insert(data_path="location", frame=peak_frame)

    # 落下：更靠近压缩状态
    obj.location.z = z_positions_final[i]
    obj.keyframe_insert(data_path="location", frame=end_frame)

# 设置动画范围
bpy.context.scene.frame_start = start_frame
bpy.context.scene.frame_end = end_frame + 10
```