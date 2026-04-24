---
show: step
version: 1.0
enable_checker: true
---

# 实验标题

## 回忆

- 上次 通过骨骼 控制对象了
	- 骨骼 就是 父子关系 
	- 把对象挂接到骨头上 就可以控制对象了

- 但是 这是 将对象作为一个整体 控制呢?
	- 如何控制具体的点呢？

### 顶点组的概念

![图片描述](../0743/uid1190679-20250217-1739784384341.png) 

- 先有一个Plane平面

![图片描述](../0743/uid1190679-20260102-1767306658687.png) 

- 然后设置细分曲面

![图片描述](../0743/uid1190679-20250217-1739784516955.png) 

- 分割数 为 3

### 新建顶点组

- 选择对象数据属性
	- 添加顶点组

![图片描述](../0743/uid1190679-20250217-1739784789139.png) 

### 为顶点组指定顶点

![图片描述](../0743/uid1190679-20250217-1739785077656.png) 

- 指派之后怎么用呢?

### 选择顶点

![图片描述](../0743/uid1190679-20250217-1739785169700.png)

- 可以恢复顶点组的选择状态
	- 然后可以对选中的顶点组 操作

![图片描述](../0743/uid1190679-20250217-1739785201615.png) 

- 可以有多个顶点组
	- 不同程度低控制顶点

### 制作mesh

```
制作一个圆柱体，圆面 6 顶点，直径和高度比一比 2.
```

![图片描述](../0743/uid1190679-20250217-1739799499651.png) 

### 生成圆柱体

```
import bpy
import bmesh

# 回到对象模式
bpy.ops.object.mode_set(mode='OBJECT')

# 删除场景中所有对象，保持干净
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# 创建圆柱体
bpy.ops.mesh.primitive_cylinder_add(
    vertices=6,  # 横截面6个顶点 (六棱柱)
    radius=2, 
    depth=4, 
    location=(0, 0, 0)
)
obj = bpy.context.active_object
obj.name = "RingCutCylinder"

# 回到对象模式
bpy.ops.object.mode_set(mode='OBJECT')
```

### 环切圆柱

- 选择建模(modeling)工作区
	- 编辑模式(Edit Mode)
	- 环切工具(Loop Cut)
	- 在圆柱上切下
	- 找到环切选项

![图片描述](../0743/uid1190679-20250217-1739800010405.png) 

- 将圆柱切成八段

![图片描述](../0743/uid1190679-20250217-1739800093895.png) 

### 代码实现 

```
import bpy
import bmesh

# 回到对象模式
bpy.ops.object.mode_set(mode='OBJECT')

# 删除场景中所有对象，保持干净
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# 创建圆柱体
bpy.ops.mesh.primitive_cylinder_add(
    vertices=6,  # 横截面6个顶点 (六棱柱)
    radius=2, 
    depth=4, 
    location=(0, 0, 0)
)
obj = bpy.context.active_object
obj.name = "RingCutCylinder"

# 进入编辑模式
bpy.ops.object.mode_set(mode='EDIT')

# 获取 BMesh 数据
me = obj.data
bm = bmesh.from_edit_mesh(me)

# 寻找垂直边 (Z轴方向)
# 逻辑：两个顶点的 X 和 Y 坐标非常接近，但 Z 坐标有差异
vertical_edges = []
for edge in bm.edges:
    v1 = edge.verts[0].co
    v2 = edge.verts[1].co
    
    # 判断是否为垂直边 (允许微小误差)
    if abs(v1.x - v2.x) < 0.001 and abs(v1.y - v2.y) < 0.001 and abs(v1.z - v2.z) > 0.001:
        vertical_edges.append(edge)

print(f"找到垂直边数量: {len(vertical_edges)}")

# 如果找到了垂直边，进行细分 (环切)
if vertical_edges:
    # cuts=8 表示切8刀
    bmesh.ops.subdivide_edges(bm, edges=vertical_edges, cuts=8, use_grid_fill=True)
    print("已执行环切")

# 更新网格数据
bmesh.update_edit_mesh(me)

# 回到对象模式
bpy.ops.object.mode_set(mode='OBJECT')
```

### 添加骨架

![图片描述](../0743/uid1190679-20250217-1739800829709.png) 

- 添加骨架

![图片描述](../0743/uid1190679-20250217-1739800960969.png)

- 如何看到这个骨架呢?

### 骨架

- 从布局工作区
	- 切到四视图

![图片描述](../0743/uid1190679-20250217-1739801006353.png)

- 还是被遮挡

![图片描述](../0743/uid1190679-20250217-1739801128981.png)

### 着色和景别

- 控制
	- 着色为线框wireframe
	- 景别为全景Frame_Al

![图片描述](../0743/uid1190679-20250217-1739801229448.png) 

- 骨架 里面 只有一根 骨骼
	- 骨骼看起来像 飞镖

![图片描述](../0742/uid1190679-20250217-1739801485311.png) 


### 移动骨架

![图片描述](../0743/uid1190679-20250217-1739801506241.png) 

- 控制骨架的移动和景别

![图片描述](../0743/uid1190679-20260102-1767310208093.png) 

- 可以在solid着色下
	- 看到骨骼吗?

### 控制骨骼叠放次序

- 选中骨架armature
	- 对象数据属性 Object Data Property
	- 找到 视窗显示 ViewPort Display
	- 在最前 In Front	

![图片描述](../0743/uid1190679-20260102-1767310419195.png) 

### 挤出骨骼

- 选择骨骼
	- 选择编辑模式
	- 挤出骨骼

![图片描述](../0743/uid1190679-20260102-1767310584009.png) 

### 骨架变化

- 观察大纲视图中的骨架
	- 产生了 新的骨骼
	- 并设定了 父子关系

![图片描述](../0743/uid1190679-20250218-1739839581256.png) 

### 显示名称

![图片描述](../0743/uid1190679-20260102-1767310743038.png) 

### 改名

![图片描述](../0743/uid1190679-20250218-1739840585928.png) 

- 骨架(armature) 改名为 手臂(arm)
	- Bone 改名为 大臂(upper_arm)
	- Bone.001 改名为 小臂(forearm)

- 可以用代码 完成吗?

### 建立骨骼

![图片描述](../0743/uid1190679-20250218-1739852107749.png) 

```
import bpy

# 创建一个新的Armature数据块
armature_data = bpy.data.armatures.new("arm")

# 创建一个新的Armature对象并将其链接到场景
armature_obj = bpy.data.objects.new("arm", armature_data)
bpy.data.collections["Collection"].objects.link(armature_obj)

# 进入编辑模式
bpy.context.view_layer.objects.active = armature_obj
bpy.ops.object.mode_set(mode='EDIT')

# 获取编辑模式下的骨骼对象
edit_bones = armature_data.edit_bones

# 创建第一个骨骼
upper_arm = edit_bones.new("upper_arm")
upper_arm.head = (0, 0, -2)  # 骨骼的起点
upper_arm.tail = (0, 0, 0)  # 骨骼的终点，在Z轴方向上延伸1个单位

# 创建第二个骨骼，以第一个骨骼的终点为起点
forearm = edit_bones.new("forearm")
forearm.head = upper_arm.tail
forearm.tail = (0, 0, 2)  # 第二个骨骼在Z轴方向上再延伸1个单位
forearm.parent = upper_arm

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')
```

### 模式

- 设置模式 为 
	- 对象模式
	- Object Mode

![图片描述](../0743/uid1190679-20250218-1739844781551.png) 

- 先选中 圆柱 Cylinder(亮黄色)
	- ctrl 加选 骨架armature
		- 此时 
			- 骨架 (亮黄色active)
			- 圆柱子 (暗黄色selected)
	- 对象 Object
	- 父级 Parent
	- 自动权重 With Automatic Weights 

### 父子关系

- 圆柱体Cylinder 成为 
	- 骨架arm 的 子对象
	
- 圆柱体Cylinder 增加了 两个子对象
	1. 修改器 Modifier
		- 基于骨架arm
	2. 两个顶点组 Vertex Group
		1. forearm 小臂
		2. upper_arm 大臂

![图片描述](../0743/uid1190679-20250218-1739845011700.png) 

- 代码如何实现

### 代码实现


```
import bpy
import bmesh

# 回到对象模式
bpy.ops.object.mode_set(mode='OBJECT')

# 删除场景中所有对象，保持干净
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# 创建圆柱体
bpy.ops.mesh.primitive_cylinder_add(
    vertices=6,  # 横截面6个顶点 (六棱柱)
    radius=2, 
    depth=4, 
    location=(0, 0, 0)
)
obj = bpy.context.active_object
obj.name = "RingCutCylinder"

# 进入编辑模式
bpy.ops.object.mode_set(mode='EDIT')

# 获取 BMesh 数据
me = obj.data
bm = bmesh.from_edit_mesh(me)

# 寻找垂直边 (Z轴方向)
# 逻辑：两个顶点的 X 和 Y 坐标非常接近，但 Z 坐标有差异
vertical_edges = []
for edge in bm.edges:
    v1 = edge.verts[0].co
    v2 = edge.verts[1].co
    
    # 判断是否为垂直边 (允许微小误差)
    if abs(v1.x - v2.x) < 0.001 and abs(v1.y - v2.y) < 0.001 and abs(v1.z - v2.z) > 0.001:
        vertical_edges.append(edge)

print(f"找到垂直边数量: {len(vertical_edges)}")

# 如果找到了垂直边，进行细分 (环切)
if vertical_edges:
    # cuts=8 表示切8刀
    bmesh.ops.subdivide_edges(bm, edges=vertical_edges, cuts=8, use_grid_fill=True)
    print("已执行环切")

# 更新网格数据
bmesh.update_edit_mesh(me)

# 回到对象模式
bpy.ops.object.mode_set(mode='OBJECT')

# 创建一个新的Armature数据块
armature_data = bpy.data.armatures.new("arm")

# 创建一个新的Armature对象并将其链接到场景
armature_obj = bpy.data.objects.new("arm", armature_data)
bpy.data.collections["Collection"].objects.link(armature_obj)

# 进入编辑模式
bpy.context.view_layer.objects.active = armature_obj
bpy.ops.object.mode_set(mode='EDIT')

# 获取编辑模式下的骨骼对象
edit_bones = armature_data.edit_bones

# 创建第一个骨骼
upper_arm = edit_bones.new("upper_arm")
upper_arm.head = (0, 0, -2)  # 骨骼的起点
upper_arm.tail = (0, 0, 0)  # 骨骼的终点，在Z轴方向上延伸1个单位

# 创建第二个骨骼，以第一个骨骼的终点为起点
forearm = edit_bones.new("forearm")
forearm.head = upper_arm.tail
forearm.tail = (0, 0, 2)  # 第二个骨骼在Z轴方向上再延伸1个单位
forearm.parent = upper_arm

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')

print("骨架创建完成！")

bpy.context.view_layer.objects.active = armature_obj
obj.select_set(True)
bpy.ops.object.parent_set(type="ARMATURE_AUTO")
```
- 如何使用骨骼 修改 圆柱体 呢?

### 摆pose

- 选中小臂 forearm
	- 进入 姿态模式
	- Pose Mode
- 旋转小臂骨骼
	- 圆柱体 上面的Mesh随之而动

![图片描述](../0743/uid1190679-20250218-1739845304655.png) 

- 为什么圆柱体 会随着 骨骼的 旋转而变化呢?

### 前臂还原

- 姿态模式 Pose Mode 中
	- 选中前臂
	- 找到骨骼属性 Bone Properties
	- 找到变形 Transform
	- 找到 z轴数值
	- 清零

![图片描述](../0743/uid1190679-20250218-1739846619871.png) 

- 骨骼还原
	- 圆柱体 还原

![图片描述](../0743/uid1190679-20250218-1739846749000.png) 

### 具体顶点权重配置

- 进入编辑模式
	- 点中(不是框选) 某个顶点

![图片描述](../0743/uid1190679-20260102-1767342078795.png) 

- 按下<kbd>n</kbd>可以看到
	- 当前顶点收到哪些骨骼的影响
	- 以及 影响的百分比
- 每个顶点 以多大的权重跟随哪根骨骼
	- 这些信息就构成了权重数据

### 观察顶点组

- 选中圆柱体的网格 Cylinder Mesh
	- 模式为 编辑模式 Edit Mode
	- 找到 对象数据特性 Object Data Properties
	- 选择 顶点组 Vertex Group
	- 选择 前臂 forearm
	- 点击 选择 Select

![图片描述](../0743/uid1190679-20250218-1739845861563.png) 

- 可以看到 前臂骨 的控制范围

### 观察权重配置

- 选中 圆柱体(Cylinder) 网格(Mesh)
	- 选择 权重涂抹模式 (Weight Paint)

![图片描述](../0743/uid1190679-20250218-1739846969939.png) 

- 每个顶点都有相应的权重
	- 权重是 一个 从0到1 的数值
		- 红色 就是 1
		- 蓝色 就是 0
		- 中间的 黄到绿 是 从0到1

### 切换顶点组

- 可以在 大臂(upper_arm) 和 小臂(forearm) 切换
	- 观察 不同骨骼 对应的 不同顶点组
	- 权重 如何 变化

![图片描述](../0743/uid1190679-20250218-1739847343868.png) 

- 如何修改权重呢?

### 修改权重

- 选择 顶点组 Vertex Group
	- 其实 就是选择 骨骼 Bone

- 设置画笔
	- 模式
	- 权重
	- 半径
	- 力度

![图片描述](../0743/uid1190679-20250218-1739848176470.png) 

- 画笔细节
	- 权重基于点(Vertex)
	- 显示的时候 使用 点模式

![图片描述](../0743/uid1190679-20250218-1739848765852.png) 

- 画笔(Brush)
	- 取消勾选 
	- 只绘制 前面上点的 权重
	- Front Face Only
	- 可以 绘制 后面的 被Mesh遮挡的点的权重

### 绘制结果

![图片描述](../0743/uid1190679-20250218-1739848901630.png)

- 将 过渡区域 
	- 极化(polarized)

![图片描述](../0743/uid1190679-20250218-1739849342820.png) 

### 观察效果

- 选择	小臂(forearm)
	- 进入 姿态模式(Pose Mode)
	- 小臂骨 对应的 顶点组 更明确
	- 对小臂 影响 更深 
	- 对大臂 影响 更浅

![图片描述](../0743/uid1190679-20250218-1739849552435.png) 

- 小臂骨 对应的 顶点组范围 更明确
	- 对小臂 影响 更深 
	- 对大臂 影响 更浅

### 自动绑定(Auto-Rigging)过程

- 对象(object) 由网格(Mesh) 构成
	- 网格(Mesh) 由 顶点(Vertex) 构成
	- 默认 没有顶点组(Vertex Group)

- 将 对象 自动绑定到 骨架 上
	- 每根骨骼 自动对应 设定自己周围的顶点 权重(Weights)
	- 各个顶点 权重(Weights) 形成 顶点组
	- 与 骨骼 对应

- 为 骨架 摆姿态(Pose)
	- 姿态(Pose) 设置 每根骨骼的 变型(Transform)信息
	- 骨骼 通过 权重(Weights) 影响 顶点(Vertex)
	- 各个 顶点(Vertex) 形成了 网格(Mesh) 的最终状态

![图片描述](../0743/uid1190679-20250218-1739851038738.png) 

- Rigging 这个词怎么来的?

### Rigging

- 来自于 北欧的挪威语言
	- 意思 是 绑、系

![图片描述](../0743/uid1190679-20250218-1739851208033.png) 

- 捆绑固定 风帆
	- 控制航向

![图片描述](../0743/uid1190679-20250218-1739851492412.png) 

### 操纵

- 后来有了操纵的意思
	- 在blender中
	- 意思是 绑定

![图片描述](../0743/uid1190679-20250218-1739851699558.png) 

- 绑定之后
	- 如何控制关键帧呢？

### 控制关键帧

- 选中骨架
	- 选择姿势模式
	- 按下<kbd>a</kbd> 全选骨骼
	- 姿势 - 动画 - 插入关键帧
	- 选择位置旋转缩放

![图片描述](../0743/uid1190679-20260102-1767344328953.png) 

- 在时间轴上观察

![图片描述](../0743/uid1190679-20260102-1767344427935.png) 

- 插入了关键帧

### 继续

- 把 结尾位置 修改为 5
	- 选中 第5帧
	- 选中 上臂 
	- 选择 姿势 菜单

![图片描述](../0743/uid1190679-20260102-1767344972779.png) 

- 姿势 - 动画 - 插入关键帧

![图片描述](../0743/uid1190679-20260102-1767345165533.png) 

### 动画代码

```
import bpy
import bmesh
import math

# 回到对象模式
bpy.ops.object.mode_set(mode='OBJECT')

# 删除场景中所有对象，保持干净
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# 创建圆柱体
bpy.ops.mesh.primitive_cylinder_add(
    vertices=6,  # 横截面6个顶点 (六棱柱)
    radius=2, 
    depth=4, 
    location=(0, 0, 0)
)
obj = bpy.context.active_object
obj.name = "RingCutCylinder"

# 进入编辑模式
bpy.ops.object.mode_set(mode='EDIT')

# 获取 BMesh 数据
me = obj.data
bm = bmesh.from_edit_mesh(me)

# 寻找垂直边 (Z轴方向)
# 逻辑：两个顶点的 X 和 Y 坐标非常接近，但 Z 坐标有差异
vertical_edges = []
for edge in bm.edges:
    v1 = edge.verts[0].co
    v2 = edge.verts[1].co
    
    # 判断是否为垂直边 (允许微小误差)
    if abs(v1.x - v2.x) < 0.001 and abs(v1.y - v2.y) < 0.001 and abs(v1.z - v2.z) > 0.001:
        vertical_edges.append(edge)

print(f"找到垂直边数量: {len(vertical_edges)}")

# 如果找到了垂直边，进行细分 (环切)
if vertical_edges:
    # cuts=8 表示切8刀
    bmesh.ops.subdivide_edges(bm, edges=vertical_edges, cuts=8, use_grid_fill=True)
    print("已执行环切")

# 更新网格数据
bmesh.update_edit_mesh(me)

# 回到对象模式
bpy.ops.object.mode_set(mode='OBJECT')

# 创建一个新的Armature数据块
armature_data = bpy.data.armatures.new("arm")

# 创建一个新的Armature对象并将其链接到场景
armature_obj = bpy.data.objects.new("arm", armature_data)
bpy.data.collections["Collection"].objects.link(armature_obj)

# 进入编辑模式
bpy.context.view_layer.objects.active = armature_obj
bpy.ops.object.mode_set(mode='EDIT')

# 获取编辑模式下的骨骼对象
edit_bones = armature_data.edit_bones

# 创建第一个骨骼
upper_arm = edit_bones.new("upper_arm")
upper_arm.head = (0, 0, -2)  # 骨骼的起点
upper_arm.tail = (0, 0, 0)  # 骨骼的终点，在Z轴方向上延伸1个单位

# 创建第二个骨骼，以第一个骨骼的终点为起点
forearm = edit_bones.new("forearm")
forearm.head = upper_arm.tail
forearm.tail = (0, 0, 2)  # 第二个骨骼在Z轴方向上再延伸1个单位
forearm.parent = upper_arm

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')

print("骨架创建完成！")

bpy.context.view_layer.objects.active = armature_obj
obj.select_set(True)
bpy.ops.object.parent_set(type="ARMATURE_AUTO")

# ==============================================================================
# 动画代码 (新增部分)
# ==============================================================================

# 1. 切换到 Pose Mode
bpy.ops.object.select_all(action='DESELECT')
armature_obj.select_set(True)
bpy.context.view_layer.objects.active = armature_obj
bpy.ops.object.mode_set(mode='POSE')

# 获取所有 PoseBone
pose_bones = armature_obj.pose.bones

# 2. 第1帧：为所有骨骼设置初始关键帧
bpy.context.scene.frame_set(1)

for bone in pose_bones:
    # 确保旋转模式为 XYZ，方便控制
    bone.rotation_mode = 'XYZ'
    # 插入旋转关键帧
    bone.keyframe_insert(data_path="rotation_euler", frame=1)

print("第1帧：已为所有骨骼添加初始关键帧")

# 3. 第5帧：弯曲小臂并设置关键帧
bpy.context.scene.frame_set(5)

# 获取小臂骨骼
p_forearm = pose_bones["forearm"]

# 设置弯曲 (沿 X 轴旋转 45 度)
p_forearm.rotation_euler.x = math.radians(45)

# 为所有修改了姿态的骨骼设置关键帧 (这里我们统一为所有骨骼打帧，确保动画稳定)
for bone in pose_bones:
    bone.keyframe_insert(data_path="rotation_euler", frame=5)

print("第5帧：小臂已弯曲，关键帧已添加")

# 设置动画播放范围
bpy.context.scene.frame_start = 1
bpy.context.scene.frame_end = 5

# 回到第1帧
bpy.context.scene.frame_set(1)
```

### 尝试播放

- 准备渲染

![图片描述](../0743/uid1190679-20260102-1767345249002.png) 

### 渲染设置

![图片描述](../0743/uid1190679-20260102-1767352313912.png) 

### 最终代码

```
import bpy
import bmesh
import math

# 回到对象模式
if bpy.context.object and bpy.context.object.mode != 'OBJECT':
    bpy.ops.object.mode_set(mode='OBJECT')

# 删除场景中所有对象，保持干净
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# 创建圆柱体
bpy.ops.mesh.primitive_cylinder_add(
    vertices=6,  # 横截面6个顶点 (六棱柱)
    radius=2, 
    depth=4, 
    location=(0, 0, 0)
)
obj = bpy.context.active_object
obj.name = "RingCutCylinder"

# 进入编辑模式
bpy.ops.object.mode_set(mode='EDIT')

# 获取 BMesh 数据
me = obj.data
bm = bmesh.from_edit_mesh(me)

# 寻找垂直边 (Z轴方向)
# 逻辑：两个顶点的 X 和 Y 坐标非常接近，但 Z 坐标有差异
vertical_edges = []
for edge in bm.edges:
    v1 = edge.verts[0].co
    v2 = edge.verts[1].co
    
    # 判断是否为垂直边 (允许微小误差)
    if abs(v1.x - v2.x) < 0.001 and abs(v1.y - v2.y) < 0.001 and abs(v1.z - v2.z) > 0.001:
        vertical_edges.append(edge)

print(f"找到垂直边数量: {len(vertical_edges)}")

# 如果找到了垂直边，进行细分 (环切)
if vertical_edges:
    # cuts=8 表示切8刀
    bmesh.ops.subdivide_edges(bm, edges=vertical_edges, cuts=8, use_grid_fill=True)
    print("已执行环切")

# 更新网格数据
bmesh.update_edit_mesh(me)

# 回到对象模式
bpy.ops.object.mode_set(mode='OBJECT')

# 创建一个新的Armature数据块
armature_data = bpy.data.armatures.new("arm")

# 创建一个新的Armature对象并将其链接到场景
armature_obj = bpy.data.objects.new("arm", armature_data)
if "Collection" in bpy.data.collections:
    bpy.data.collections["Collection"].objects.link(armature_obj)
else:
    bpy.context.scene.collection.objects.link(armature_obj)

# 进入编辑模式
bpy.context.view_layer.objects.active = armature_obj
bpy.ops.object.mode_set(mode='EDIT')

# 获取编辑模式下的骨骼对象
edit_bones = armature_data.edit_bones

# 创建第一个骨骼
upper_arm = edit_bones.new("upper_arm")
upper_arm.head = (0, 0, -2)  # 骨骼的起点
upper_arm.tail = (0, 0, 0)  # 骨骼的终点，在Z轴方向上延伸1个单位

# 创建第二个骨骼，以第一个骨骼的终点为起点
forearm = edit_bones.new("forearm")
forearm.head = upper_arm.tail
forearm.tail = (0, 0, 2)  # 第二个骨骼在Z轴方向上再延伸1个单位
forearm.parent = upper_arm

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')

print("骨架创建完成！")

bpy.context.view_layer.objects.active = armature_obj
obj.select_set(True)
bpy.ops.object.parent_set(type="ARMATURE_AUTO")

# =============================
# 动画代码
# =============================

# 1. 切换到 Pose Mode
bpy.ops.object.select_all(action='DESELECT')
armature_obj.select_set(True)
bpy.context.view_layer.objects.active = armature_obj
bpy.ops.object.mode_set(mode='POSE')

# 获取所有 PoseBone
pose_bones = armature_obj.pose.bones

# 2. 第1帧：为所有骨骼设置初始关键帧
bpy.context.scene.frame_set(1)

for bone in pose_bones:
    # 确保旋转模式为 XYZ，方便控制
    bone.rotation_mode = 'XYZ'
    # 插入旋转关键帧
    bone.keyframe_insert(data_path="rotation_euler", frame=1)

print("第1帧：已为所有骨骼添加初始关键帧")

# 3. 第5帧：弯曲小臂并设置关键帧
bpy.context.scene.frame_set(5)

# 获取小臂骨骼
p_forearm = pose_bones["forearm"]

# 设置弯曲 (沿 X 轴旋转 45 度)
p_forearm.rotation_euler.x = math.radians(45)

# 为所有修改了姿态的骨骼设置关键帧 (这里我们统一为所有骨骼打帧，确保动画稳定)
for bone in pose_bones:
    bone.keyframe_insert(data_path="rotation_euler", frame=5)

print("第5帧：小臂已弯曲，关键帧已添加")

# 设置动画播放范围
bpy.context.scene.frame_start = 1
bpy.context.scene.frame_end = 5

# 回到第1帧
bpy.context.scene.frame_set(1)

# ====================================================
# 渲染场景设置 (摄像机、灯光、渲染参数)
# ====================================================

# 1. 添加摄像机
bpy.ops.object.mode_set(mode='OBJECT')
bpy.ops.object.camera_add(location=(10, -10, 8), rotation=(math.radians(60), 0, math.radians(45)))
camera_obj = bpy.context.active_object
camera_obj.name = "MyCamera"

# 让摄像机指向物体中心 (简单起见，使用 Track To 约束)
track_constraint = camera_obj.constraints.new(type='TRACK_TO')
track_constraint.target = obj  # 指向圆柱体
track_constraint.track_axis = 'TRACK_NEGATIVE_Z'
track_constraint.up_axis = 'UP_Y'

# 设置为当前活动摄像机
bpy.context.scene.camera = camera_obj

print("摄像机已添加并对准物体")

# 2. 添加灯光 (日光，照亮整个场景)
bpy.ops.object.light_add(type='SUN', location=(5, 5, 10))
light_obj = bpy.context.active_object
light_obj.name = "MySunLight"
light_obj.data.energy = 5  # 设置强度

print("灯光已添加")

# 3. 设置渲染参数
scene = bpy.context.scene
scene.render.resolution_x = 320
scene.render.resolution_y = 240
scene.render.resolution_percentage = 50
scene.render.filepath = "/tmp/"

# 确保输出格式为 PNG (可选)
scene.render.image_settings.file_format = 'PNG'

print(f"渲染设置已配置: {scene.render.resolution_x}x{scene.render.resolution_y} @ {scene.render.resolution_percentage}% -> /tmp/")

# ==========================
# 执行渲染
# ==========================

print("开始渲染动画...")
# animation=True 表示渲染动画 (F12是单帧, Ctrl+F12是动画)
# write_still=True 表示如果是单帧渲染也会保存文件
bpy.ops.render.render(animation=True, write_still=True)
print("渲染完成！")
```

### 查看效果

```
sudo apt update
yes | sudo apt install feh
feh /tmp
```

![图片描述](../0743/uid1190679-20260102-1767352760020.png) 


### 总结
- 这次我们研究了 
	- 骨架的基础
	- 并且完成了渲染！

![图片描述](../0743/uid1190679-20260102-1767354159030.png) 

- 能做个人形的骨架吗？
	- 我们下次再说！



