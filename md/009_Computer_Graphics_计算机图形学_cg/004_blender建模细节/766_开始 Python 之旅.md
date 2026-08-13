### 灯光的细节


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2552168/uid1190679-20250209-1739074550396) 


```
import bpy
import math

bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()

def create_girl():
    # 脸
    bpy.ops.mesh.primitive_uv_sphere_add()
    face = bpy.context.active_object
    face.name = 'face'
    face.location = (1.0041, 0, 1.5142)
    face.rotation_euler = (0, math.radians(-21.291), 0)
    face.scale = (2.924, 2.924, 3.408)
    # 脸部上色（改用节点材质的Base Color）
    mat_face = bpy.data.materials.new(name="mat_skin")
    mat_face.use_nodes = True  # 启用节点树
    # 获取Principled BSDF节点
    principled_bsdf = mat_face.node_tree.nodes["Principled BSDF"]
    # 设置Base Color（inputs[0]和Base Color等同，这里用名称更易读，也可以用inputs[0]）
    principled_bsdf.inputs['Base Color'].default_value = (1, 0.8, 0.7, 1)
    face.data.materials.append(mat_face)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 左眼
    bpy.ops.mesh.primitive_uv_sphere_add()
    left_eye = bpy.context.active_object
    left_eye.name = "left_eye"
    left_eye.location = (3.2349, 1.6486, 2.6092)
    left_eye.scale = (0.987, 0.987, 0.987)
    # 左眼材质
    mat_left_eye = bpy.data.materials.new(name="mat_left_eye")
    mat_left_eye.use_nodes = True
    principled_bsdf = mat_left_eye.node_tree.nodes["Principled BSDF"]
    principled_bsdf.inputs[0].default_value = (1, 1, 1, 1)  # 用inputs[0]表示Base Color
    left_eye.data.materials.append(mat_left_eye)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 右眼
    bpy.ops.mesh.primitive_uv_sphere_add()
    right_eye = bpy.context.active_object
    right_eye.name = "right_eye"
    right_eye.location = (0.49529, 2.6653, 1.8264)
    right_eye.scale = (0.987, 0.987, 0.987)
    # 右眼材质
    mat_right_eye = bpy.data.materials.new(name="mat_right_eye")
    mat_right_eye.use_nodes = True
    principled_bsdf = mat_right_eye.node_tree.nodes["Principled BSDF"]
    principled_bsdf.inputs['Base Color'].default_value = (1, 1, 1, 1)
    right_eye.data.materials.append(mat_right_eye)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 眼球一
    bpy.ops.mesh.primitive_uv_sphere_add()
    eyeball_1 = bpy.context.active_object
    eyeball_1.name = "eyeball_1"
    eyeball_1.location = (3.0586, 2.4932, 2.3628)
    eyeball_1.rotation_euler = (0, 0, 0)
    eyeball_1.scale = (0.379, 0.379, 0.379)
    # 眼珠上色
    mat_eye = bpy.data.materials.new(name="mat_eye")
    mat_eye.use_nodes = True
    principled_bsdf = mat_eye.node_tree.nodes["Principled BSDF"]
    principled_bsdf.inputs[0].default_value = (0, 0, 0, 1)  # inputs[0] = Base Color
    eyeball_1.data.materials.append(mat_eye)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 眼球二
    bpy.ops.mesh.primitive_uv_sphere_add()
    eyeball_2 = bpy.context.active_object
    eyeball_2.name = "eyeball_2"
    eyeball_2.location = (0.3044, 3.4789, 1.4464)
    eyeball_2.rotation_euler = (0, 0, 0)
    eyeball_2.scale = (0.379, 0.379, 0.379)
    eyeball_2.data.materials.append(mat_eye)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 嘴巴
    bpy.ops.mesh.primitive_torus_add()
    mouth = bpy.context.active_object
    mouth.name = "mouth"
    mouth.location = (2.5287, 2.1049, 0.037622)
    rot_x_rad = math.radians(459.94)
    rot_y_rad = math.radians(25.548)
    rot_z_rad = math.radians(-3.1105)
    mouth.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    mouth.scale = (0.398, 0.398, 0.398)
    # 嘴巴上色
    mat_mouth = bpy.data.materials.new(name="mouth_mat")
    mat_mouth.use_nodes = True
    principled_bsdf = mat_mouth.node_tree.nodes["Principled BSDF"]
    # 处理十六进制颜色
    hex_color = "#FF9085FF"
    r = int(hex_color[1:3], 16) / 255
    g = int(hex_color[3:5], 16) / 255
    b = int(hex_color[5:7], 16) / 255
    a = int(hex_color[7:9], 16) / 255 if len(hex_color) > 7 else 1
    principled_bsdf.inputs['Base Color'].default_value = (r, g, b, a)
    mouth.data.materials.append(mat_mouth)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 鼻子
    bpy.ops.mesh.primitive_cube_add()
    nose = bpy.context.active_object
    nose.name = "nose"
    nose.location = (0.89424, 0.25606, 1.7764)
    rot_x_rad = math.radians(-27.674)
    rot_y_rad = math.radians(-28.233)
    rot_z_rad = math.radians(72.527)
    nose.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    nose.scale = (2.504, 0.391, 2.301)
    # 鼻子上色（复用脸部材质）
    nose.data.materials.append(mat_face)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 身体
    bpy.ops.mesh.primitive_cone_add(
        radius1=0.75,
        radius2=0,
        depth=1,
        location=(0, 0, 0),
        rotation=(0, 0, 0)
    )
    body = bpy.context.active_object
    body.name = "body"
    body.location = (-0.97461, 0.39741, -4.7028)
    rot_x_rad = math.radians(0)
    rot_y_rad = math.radians(11.246)
    rot_z_rad = math.radians(0)
    body.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    body.scale = (6.229, 5.976, 11.435)
    # 身体上色（同时设置金属度）
    mat_body = bpy.data.materials.new(name="body_mat")
    mat_body.use_nodes = True
    principled_bsdf = mat_body.node_tree.nodes["Principled BSDF"]
    principled_bsdf.inputs['Base Color'].default_value = (1, 1, 0, 1)
    principled_bsdf.inputs['Metallic'].default_value = 0.2  # 节点材质的金属度设置
    body.data.materials.append(mat_body)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 头巾1
    bpy.ops.mesh.primitive_torus_add(
        major_radius=0.8,
        minor_radius=0.3,
        major_segments=64,
        minor_segments=28,
        location=(0, 0, 0),
        rotation=(0, 0, 0)
    )
    head1 = bpy.context.active_object
    head1.name = "head1"
    head1.location = (-0.11899, -0.11103, 3.5504)
    rot_x_rad = math.radians(14.17)
    rot_y_rad = math.radians(-30.224)
    rot_z_rad = math.radians(-3.1316)
    head1.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    head1.scale = (3.206, 2.867, 4.894)
    # 头巾1颜色（设置金属度）
    mat_head1 = bpy.data.materials.new(name="head1_mat")
    mat_head1.use_nodes = True
    principled_bsdf = mat_head1.node_tree.nodes["Principled BSDF"]
    principled_bsdf.inputs[0].default_value = (0.2, 0.2, 0.8, 1)  # inputs[0] = Base Color
    principled_bsdf.inputs['Metallic'].default_value = 0.2
    head1.data.materials.append(mat_head1)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 头巾2
    bpy.ops.mesh.primitive_torus_add(
        major_radius=0.8,
        minor_radius=0.28,
        major_segments=50,
        minor_segments=28,
        location=(0, 0, 0),
        rotation=(0, 0, 0)
    )
    head2 = bpy.context.active_object
    head2.name = "head2"
    head2.location = (-1.0917, 0, 5.2587)
    rot_x_rad = math.radians(-0.00001)
    rot_y_rad = math.radians(508.49)
    rot_z_rad = math.radians(-345.94)
    head2.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    head2.scale = (2.540, 2.540, 2.540)
    # 头巾2上色（设置金属度）
    mat_head2 = bpy.data.materials.new(name="mat_head2")
    mat_head2.use_nodes = True
    principled_bsdf = mat_head2.node_tree.nodes["Principled BSDF"]
    r = 255 / 255
    g = 165 / 255
    b = 75 / 255
    a = 1
    principled_bsdf.inputs['Base Color'].default_value = (r, g, b, a)
    principled_bsdf.inputs['Metallic'].default_value = 0.25
    head2.data.materials.append(mat_head2)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 头巾3
    bpy.ops.mesh.primitive_torus_add(
        major_radius=0.3,
        minor_radius=0.28,
        major_segments=50,
        minor_segments=28,
        location=(0, 0, 0),
        rotation=(0, 0, 0)
    )
    head3 = bpy.context.active_object
    head3.name = "head3"
    head3.location = (-1.5653, -0.13797, 5.5947)
    rot_x_rad = math.radians(-156.55)
    rot_y_rad = math.radians(339.48)
    rot_z_rad = math.radians(-42.454)
    head3.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    head3.scale = (2.993, 2.993, 2.993)
    # 头巾3上色（复用头巾2材质）
    head3.data.materials.append(mat_head2)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 头发一
    bpy.ops.mesh.primitive_cube_add(
        size=2,
        location=(0, 0, 0),
        rotation=(0, 0, 0)
    )
    hair1 = bpy.context.active_object
    hair1.name = "hair1"
    hair1.location = (-3.4088, 0.65458, 0.26983)
    rot_x_rad = math.radians(15.567)
    rot_y_rad = math.radians(-16.959)
    rot_z_rad = math.radians(98.798)
    hair1.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    hair1.scale = (1.275, 0.419, 5.412)
    # 头发1上色
    mat_hair1 = bpy.data.materials.new(name="hair1_mat")
    mat_hair1.use_nodes = True
    principled_bsdf = mat_hair1.node_tree.nodes["Principled BSDF"]
    r = 1
    g = 0.549
    b = 0.275
    a = 1
    principled_bsdf.inputs['Base Color'].default_value = (r, g, b, a)
    hair1.data.materials.append(mat_hair1)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 头发2
    bpy.ops.mesh.primitive_cube_add(
        size=2,
        location=(0, 0, 0),
        rotation=(0, 0, 0)
    )
    hair2 = bpy.context.active_object
    hair2.name = "hair2"
    hair2.location = (-4.9848, 1.8083, -4.4724)
    rot_x_rad = math.radians(15.567)
    rot_y_rad = math.radians(-16.993)
    rot_z_rad = math.radians(98.798)
    hair2.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    hair2.scale = (1.572, 0.384, 0.892)
    # 头发2上色
    mat_hair2 = bpy.data.materials.new(name="white")
    mat_hair2.use_nodes = True
    principled_bsdf = mat_hair2.node_tree.nodes["Principled BSDF"]
    principled_bsdf.inputs[0].default_value = (1, 1, 1, 1)
    hair2.data.materials.append(mat_hair2)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 项链
    bpy.ops.mesh.primitive_torus_add(
        major_radius=0.74,
        minor_radius=0.28,
        major_segments=41,
        minor_segments=28,
        location=(0, 0, 0),
        rotation=(0, 0, 0)
    )
    neck = bpy.context.active_object
    neck.name = "neck"
    neck.location = (-0.44936, -0.05798, -1.9714)
    rot_x_rad = math.radians(0)
    rot_y_rad = math.radians(19.741)
    rot_z_rad = math.radians(0.000003)
    neck.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    neck.scale = (2.035, 1.997, 2.015)
    # 项链上色（设置金属度）
    mat_neck = bpy.data.materials.new(name="diamond_mat")
    mat_neck.use_nodes = True
    principled_bsdf = mat_neck.node_tree.nodes["Principled BSDF"]
    principled_bsdf.inputs['Base Color'].default_value = (0.95, 0.95, 0.95, 1)
    principled_bsdf.inputs['Metallic'].default_value = 0.5
    neck.data.materials.append(mat_neck)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()

    # 围巾
    bpy.ops.mesh.primitive_torus_add(
        major_radius=0.74,
        minor_radius=0.28,
        major_segments=41,
        minor_segments=28,
        location=(0, 0, 0),
        rotation=(0, 0, 0)
    )
    scarf = bpy.context.active_object
    scarf.name = "scarf"
    scarf.location = (-0.70716, 0, -3.0568)
    rot_y_rad = math.radians(198.95)
    scarf.rotation_euler = (0, rot_y_rad, 0)
    scarf.scale = (2.851, 2.851, 2.851)
    # 围巾上色（复用头巾2材质）
    scarf.data.materials.append(mat_head2)
    # 添加平滑着色
    bpy.ops.object.shade_smooth()
    
    bpy.ops.object.select_all(action="SELECT")
    # 获取所有选中的对象
    selected_objects = bpy.context.selected_objects
    # 设置父级关系
    collection = bpy.data.collections["Collection"]
    girl = bpy.data.objects.new("girl", None)
    collection.objects.link(girl)
    for obj in selected_objects:
        obj.parent = girl

def create_lights():
    # 添加面光1
    bpy.ops.object.light_add(type='AREA', location=(4.985, 10.665, 6.5565))
    light1 = bpy.context.active_object
    light1.name = "面光1"
    light1.data.color = (1, 1, 1)
    light1.data.energy = 1000
    light1.data.shape = 'RECTANGLE'
    light1.data.size = 0.0407
    light1.data.size_y = 0.158
    light1.data.use_shadow = True
    rot_x_rad = math.radians(39.209)
    rot_y_rad = math.radians(1.045)
    rot_z_rad = math.radians(-220.32)
    light1.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    light1.scale = (68.056, 68.056, 68.056)
    
    # 添加面光2
    bpy.ops.object.light_add(type='AREA', location=(-9.0634, 2.1085, 8.3061))
    light2 = bpy.context.active_object
    light2.name = "面光2"
    light2.data.color = (1, 1, 1)
    light2.data.energy = 800
    light2.data.shape = 'SQUARE'
    light2.data.size = 13.1
    light2.data.use_shadow = True
    rot_x_rad = math.radians(11.408)
    rot_y_rad = math.radians(-36.517)
    rot_z_rad = math.radians(-3.0989)
    light2.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    light2.scale = (1, 1, 1)
    
    # 创建点光
    bpy.ops.object.light_add(type='POINT', location=(-9.4335, -7.0529, 8.5036))
    light3 = bpy.context.active_object
    light3.name = "点光"
    light3.data.color = (1, 1, 1)
    light3.data.energy = 1000
    light3.data.use_shadow = True
    rot_x_rad = math.radians(56.512)
    rot_y_rad = math.radians(-1.7875)
    rot_z_rad = math.radians(-40.276)
    light3.rotation_euler = (rot_x_rad, rot_y_rad, rot_z_rad)
    light3.scale = (1, 1, 1)

def create_camera():
    # 摄像机
    bpy.ops.object.camera_add(
        location=(3.2865, 25.415, 0.25036),
        rotation=(math.radians(450.59), math.radians(-2.3207), math.radians(170.82))
    )
    camera = bpy.context.active_object
    bpy.context.scene.camera = camera
    camera.data.lens = 50.55
    camera.data.clip_start = 0.1
    camera.data.clip_end = 100

create_girl()
create_lights()
create_camera()
```
