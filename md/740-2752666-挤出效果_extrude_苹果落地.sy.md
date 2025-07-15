### 苹果落地

```
import bpy
import random
import math

# 创建树的函数
def create_tree():
    # 创建树干的函数
    def add_branch(R, V, Torsion, Dec, L, Steps, Th_x, Th_y, Th_z, Echelle, Pos_x, Pos_y, Pos_z):
        # 三角函数角度
        Pi = 3.14159
        O_x = ((2 * Pi) / 360) * Th_x
        O_y = ((2 * Pi) / 360) * Th_y
        O_z = ((2 * Pi) / 360) * Th_z
        
        # 添加一个圆形网格
        bpy.ops.mesh.primitive_circle_add(vertices=V, radius=R, fill_type='NOTHING', location=(Pos_x, Pos_y, Pos_z))
        bpy.ops.object.mode_set(mode='EDIT')
        
        # 创建树枝的循环
        for alpha in range(Steps):
            x = random.random() * Torsion - Torsion / 2
            y = random.random() * Torsion - Torsion / 2
            z = random.random() * L + 0.5
            S = random.random() * Dec + (1 - Dec)
            
            bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value": (x, y, z), "constraint_axis": (True, True, True)})
            bpy.ops.transform.resize(value=(S, S, S))
        
        bpy.ops.object.mode_set(mode='OBJECT')
        
        # 旋转
        bpy.ops.transform.rotate(value=O_x, orient_axis='X')
        bpy.ops.transform.rotate(value=O_y, orient_axis='Y')
        bpy.ops.transform.rotate(value=O_z, orient_axis='Z')
        
        # 缩放
        bpy.ops.transform.resize(value=(Echelle, Echelle, Echelle))
    
    # 创建主树干的参数
    R = 2          # 圆的半径
    V = 20         # 圆的顶点数（决定了圆的细分程度）
    Torsion = 1.6  # 扭曲程度
    Dec = 0.25     # 分支的缩放随机因子
    L = 5          # 分支的长度
    Steps = 15     # 分支的步数
    Th_x = 0       # 绕X轴的旋转角度
    Th_y = 0       # 绕Y轴的旋转角度
    Th_z = 0       # 绕Z轴的旋转角度
    Echelle = 1    # 缩放比例
    Pos_x = 0      # 分支的X坐标位置
    Pos_y = 0      # 分支的Y坐标位置
    Pos_z = 0      # 分支的Z坐标位置
    
    # 设置初始部分不生成分支的步数
    initial_steps_without_branches = 5
    
    # 创建主树干
    add_branch(R, V, Torsion, Dec, L, Steps, Th_x, Th_y, Th_z, Echelle, Pos_x, Pos_y, Pos_z)
    
    # 创建额外的树枝
    Nb_Branch_Circle = 4
    Intervalle_V_branch = int(V / Nb_Branch_Circle)
    
    # 额外树枝的参数
    branch_L = 8     # 分支的长度（比主干更长）
    branch_Steps = 20 # 分支的步数（比主干更多步）
    
    for i in range(Nb_Branch_Circle * Steps):
        Pos_x = bpy.data.objects[0].data.vertices[Intervalle_V_branch * i].co.x
        Pos_y = bpy.data.objects[0].data.vertices[Intervalle_V_branch * i].co.y
        Pos_z = bpy.data.objects[0].data.vertices[Intervalle_V_branch * i].co.z
        
        # 在初始部分减少分支的生成数量
        if i < initial_steps_without_branches:
            continue
        
        Th_x = 50 + random.random() * 40 - 20
        Th_y = random.random() * 20 - 10
        Th_z = i * 360 / Nb_Branch_Circle + random.random() * 60 - 30
        
        Echelle = 0.4 / pow((i + 1), 0.2)
        
        add_branch(R, V, Torsion, Dec, branch_L, branch_Steps, Th_x, Th_y, Th_z, Echelle, Pos_x, Pos_y, Pos_z)
    
    # 获取所有名字以 'circle' 开头的网格对象
    circle_meshes = [obj for obj in bpy.data.objects if obj.type == 'MESH' and ( obj.name.startswith('Circle') or obj.name.startswith('圆环') ) ]

    if circle_meshes:
        # 第一个网格命名为'树干'
        trunk = circle_meshes.pop(0)
        trunk.name = '树干'
        
        # 如果还有其他网格，将它们合并并命名为'树枝'
        if circle_meshes:
            # 选择所有剩下的网格
            bpy.ops.object.select_all(action='DESELECT')
            for mesh in circle_meshes:
                mesh.select_set(True)
                bpy.context.view_layer.objects.active = mesh
            
            # 合并选中的网格
            bpy.ops.object.join()
            
            # 将合并后的网格命名为'树枝'
            bpy.context.object.name = '树枝'
            
    # 给树干和树枝上色
    def set_material(obj_name, color):
        mat = bpy.data.materials.new(name="TreeMaterial")
        mat.diffuse_color = color
        bpy.data.objects[obj_name].data.materials.append(mat)
    # 棕色颜色
    brown = (0.36, 0.25, 0.20, 1)
    
    set_material("树干", brown)
    set_material("树枝", brown)

# 创建苹果的函数
def create_apple():
    # 创建红色的苹果果实（球体）
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1.0, location=(0, 0, 0))
    apple_obj = bpy.context.object

    # 添加红色材质
    mat_red = bpy.data.materials.new(name="Red")
    mat_red.diffuse_color = (1, 0, 0, 1)  # 红色材质
    apple_obj.data.materials.append(mat_red)

    # 在顶部创建绿色的苹果叶子（柱体）
    bpy.ops.mesh.primitive_cylinder_add(radius=0.5, depth=1.0, location=(0.2, 0.2, 1.2))
    leaf_obj = bpy.context.object

    # 缩小叶子对象沿着 Z 方向到 0.01，沿着 X 方向到 0.5
    leaf_obj.scale.z = 0.01
    leaf_obj.scale.x = 0.5

    # 添加绿色材质
    mat_green = bpy.data.materials.new(name="Green")
    mat_green.diffuse_color = (0, 1, 0, 1)  # 绿色材质
    leaf_obj.data.materials.append(mat_green)

    # 旋转叶子对象45度
    leaf_obj.rotation_euler = (math.radians(45), 0, 0)

    # 向 Z 方向移动叶子对象0.2个单位，向 Y 方向移动叶子对象0.2个单位
    leaf_obj.location.z += 0.2
    leaf_obj.location.y += 0.2

    # 将叶子对象连接到苹果对象上
    bpy.ops.object.select_all(action='DESELECT')
    apple_obj.select_set(True)
    leaf_obj.select_set(True)
    bpy.context.view_layer.objects.active = apple_obj
    bpy.ops.object.join()

    # 切换回对象模式
    bpy.ops.object.mode_set(mode='OBJECT')

    return apple_obj

# 在树枝上分布苹果
def distribute_apples(branch, apple_count=10):
    # 选择树枝并进入编辑模式
    bpy.ops.object.select_all(action='DESELECT')
    branch.select_set(True)
    bpy.context.view_layer.objects.active = branch
    bpy.ops.object.mode_set(mode='EDIT')

    # 获取树枝的顶点位置
    bpy.ops.mesh.select_all(action='SELECT')
    bpy.ops.object.mode_set(mode='OBJECT')
    vertices = [v.co for v in branch.data.vertices if v.select]

    # 随机选择一个顶点并记录坐标
    def get_random_vertex():
        return random.choice(vertices)

    # 创建苹果并分布在树枝上
    for i in range(apple_count):
        apple = create_apple()
        location = get_random_vertex()
        apple.location = location
        apple.select_set(True)
        branch.select_set(False)
        bpy.context.view_layer.objects.active = apple
        if i == apple_count - 1:
            # 将最后一个苹果设置为刚体
            bpy.ops.rigidbody.object_add()
        apple.select_set(False)

    # 退出编辑模式
    bpy.ops.object.mode_set(mode='OBJECT')

# 创建地面并设置为碰撞体
def create_ground():
    bpy.ops.mesh.primitive_plane_add(size=50, location=(0, 0, -1))
    ground = bpy.context.object
    ground.name = "Ground"

    # 设置地面颜色为深棕色
    mat_ground = bpy.data.materials.new(name="GroundMaterial")
    mat_ground.diffuse_color = (0.2, 0.15, 0.10, 1)
    ground.data.materials.append(mat_ground)

    # 设置地面为碰撞体
    bpy.ops.rigidbody.object_add()
    ground.rigid_body.type = 'PASSIVE'

# 创建树
create_tree()

# 确保已选择树枝和树干对象
tree_branch = bpy.data.objects.get("树枝")
tree_trunk = bpy.data.objects.get("树干")

if tree_branch and tree_trunk:
    # 应用树干的所有变换
    bpy.context.view_layer.objects.active = tree_trunk
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

    # 应用树枝的所有变换
    bpy.context.view_layer.objects.active = tree_branch
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)


if tree_branch:
    # 设置树枝为活动对象
    bpy.context.view_layer.objects.active = tree_branch
    
    # 添加碰撞体修饰器
    bpy.ops.object.modifier_add(type='COLLISION')
    
    # 在树枝上随机分布10个苹果
    distribute_apples(tree_branch, 10)

# 创建地面
create_ground()

bpy.context.scene.frame_set(0)
bpy.context.scene.frame_end = 70

def create_camera():
    bpy.ops.object.camera_add()
    camera = bpy.context.object

    
    camera.location = (25.962495803833008, 70.0, 50.0)
    camera.rotation_euler = (-4.862020492553711, 0.04667312651872635, -3.545203685760498)
    camera.data.lens = 100
    bpy.context.scene.camera = camera
    camera.keyframe_insert(data_path="location", frame=0)
    camera.keyframe_insert(data_path="rotation_euler", frame=0)
    camera.data.keyframe_insert(data_path="lens", frame=0)
    
    camera.location = (25.962495803833008, 70.0, 15.0)
    camera.rotation_euler = (-4.862020492553711, 0.04667312651872635, -3.545203685760498)
    camera.data.lens = 100
    bpy.context.scene.camera = camera
    camera.keyframe_insert(data_path="location", frame=70)
    camera.keyframe_insert(data_path="rotation_euler", frame=70)
    camera.data.keyframe_insert(data_path="lens", frame=70)
  
  

create_camera()


def create_spot():
    bpy.ops.object.light_add(type='SPOT')
    spot = bpy.context.object
    spot.location = (50.0, 0.0, 70.0)
    spot.rotation_euler = (0.0, 0.7743462920188904, 0.0)
    spot.data.energy = 10000

create_spot()





```
