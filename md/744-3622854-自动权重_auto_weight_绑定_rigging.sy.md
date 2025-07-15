---
show: step
version: 1.0
enable_checker: true
---

# 实验标题

## 回忆


### 顶点组的概念

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739784384341) 

- 先有一个Plane平面

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739784468942) 

- 然后设置细分曲面

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739784516955) 

- 分割数 为 3

### 新建顶点组

- 选择对象数据属性
	- 添加顶点组

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739784789139) 

### 为顶点组指定顶点

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739785077656) 

- 指派之后怎么用呢?

### 选择顶点

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739785169700)

- 可以恢复顶点组的选择状态
	- 然后可以对选中的顶点组 操作

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739785201615) 

- 可以有多个顶点组
	- 不同程度低控制顶点

### 制作mesh

```
制作一个圆柱体，圆面 6 顶点，直径和高度比一比 2.
```


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739799499651) 


### 执行代码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739799551750) 

- 生成圆柱体

```
import bpy

bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete() 

# 创建圆柱体
bpy.ops.mesh.primitive_cylinder_add(
    radius=1,
    depth=4,
    enter_editmode=True,
    location=(0, 0, 0),
    vertices=6
)

# 获取新创建的圆柱体对象
cylinder = bpy.context.active_object

# 执行 Loop Cut
bpy.ops.mesh.loopcut_slide(
    MESH_OT_loopcut={
        "number_cuts":8,
        "object_index":0, 
        "edge_index":6
    }
)

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')
```

### 环切圆柱

- 选择建模(modeling)工作区
	- 编辑模式(Edit Mode)
	- 环切工具(Loop Cut)
	- 在圆柱上切下
	- 找到环切选项

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739800010405) 

- 将圆柱切成八段

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739800093895) 

### 代码实现

- 此代码能在blender4.3.2运行
	- 但是在蓝桥的blender2.8 失效

```
import bpy

bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete() 

# 创建圆柱体
bpy.ops.mesh.primitive_cylinder_add(
    radius=1,
    depth=4,
    enter_editmode=True,
    location=(0, 0, 0),
    vertices=6
)

# 获取新创建的圆柱体对象
cylinder = bpy.context.active_object

# 执行 Loop Cut
bpy.ops.mesh.loopcut_slide(
    MESH_OT_loopcut={
        "number_cuts":8,
        "object_index":0, 
        "edge_index":6
    }
)

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')
```

### 添加骨架

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739800829709) 

- 添加骨架

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739800960969)

- 如何看到这个骨架呢?

### 骨架

- 切到四视图

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739801006353)

- 还是被遮挡

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739801128981)

### 着色和景别

- 控制
	- 着色为线框wireframe
	- 景别为全景Frame_Al

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739801229448) 

- 骨架 里面 只有一根 骨骼
	- 骨骼看起来像 飞镖

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739801485311) 


### 移动骨架

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739801506241) 

- 控制骨架的移动和景别

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739839304980) 

- 可以在solid着色下
	- 看到骨骼吗?

### 控制骨骼渲染次序

- 选中骨架armature
	- 对象数据属性 Object Data Property
	- 找到 视窗显示 ViewPort Display
	- 在最前 In Front	

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739801699803) 

### 挤出骨骼

- 选择骨骼
	- 选择编辑模式
	- 挤出骨骼

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250217-1739802860875) 

### 骨架变化

- 观察大纲视图中的骨架
	- 产生了 新的骨骼
	- 并设定了 父子关系

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739839581256) 

### 显示名称

- 仅限blender4.3.2或以上版本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250218-1739840278594)

### 改名

- 仅限blender4.3.2或以上版本

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739840585928) 

- 骨架(armature) 改名为 手臂(arm)
	- Bone 改名为 大臂(upper_arm)
	- Bone.001 改名为 小臂(forearm)

### 模式

- 设置模式 为 
	- 对象模式
	- Object Mode

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739844781551) 

- 先选中骨架armature
	- shift 加选 圆柱 Cylinder
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
![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739845011700) 

- 如何使用骨骼 修改 圆柱体 呢?

### 摆pose

- 选中小臂 forearm
	- 进入 姿态模式
	- Pose Mode
- 旋转小臂骨骼
	- 圆柱体 上面的Mesh随之而动

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739845304655) 

- 为什么圆柱体 会随着 骨骼的 旋转而变化呢?

### 前臂还原

- 姿态模式 Pose Mode 中
	- 选中前臂
	- 找到骨骼属性 Bone Properties
	- 找到变形 Transform
	- 找到 z轴数值
	- 清零

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739846619871) 

- 骨骼还原
	- 圆柱体 还原

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739846749000) 

### 观察顶点组

- 选中圆柱体的网格 Cylinder Mesh
	- 模式为 编辑模式 Edit Mode
	- 找到 对象数据特性 Object Data Properties
	- 选择 顶点组 Vertex Group
	- 选择 前臂 forearm
	- 点击 选择 Select

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739845861563) 

- 可以看到 前臂骨 的控制范围

### 观察权重配置

- 选中 圆柱体(Cylinder) 网格(Mesh)
	- 选择 权重涂抹模式 (Weight Paint)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739846969939) 

- 每个顶点都有相应的权重
	- 权重是 一个 从0到1 的数值
		- 红色 就是 1
		- 蓝色 就是 0
		- 中间的 黄到绿 是 从0到1

### 切换顶点组

- 可以在 大臂(upper_arm) 和 小臂(forearm) 切换
	- 观察 不同骨骼 对应的 不同顶点组
	- 权重 如何 变化

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739847343868) 

- 如何修改权重呢?

### 修改权重

- 选择 顶点组 Vertex Group
	- 其实 就是选择 骨骼 Bone

- 设置画笔
	- 模式
	- 权重
	- 半径
	- 力度

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739848176470) 

- 画笔细节
	- 权重基于点(Vertex)
	- 显示的时候 使用 点模式

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739848765852) 

- 画笔(Brush)
	- 取消勾选 
	- 只绘制 前面上点的 权重
	- Front Face Only
	- 可以 绘制 后面的 被Mesh遮挡的点的权重

### 绘制结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250218-1739848901630)

- 将 过渡区域 
	- 极化(polarized)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739849342820) 

### 观察效果

- 选择	小臂(forearm)
	- 进入 姿态模式(Pose Mode)
	- 小臂骨 对应的 顶点组 更明确
	- 对小臂 影响 更深 
	- 对大臂 影响 更浅

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739849552435) 

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

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739851038738) 

- 可以用代码 完成吗?

### 建立骨骼

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739852107749) 

```
import bpy

#清场
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete() 

# 创建一个新的Armature数据块
armature_data = bpy.data.armatures.new("arm")

# 创建一个新的Armature对象并将其链接到场景
armature_obj = bpy.data.objects.new("arm", armature_data)
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

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')
```

- 配合之前的圆柱体建模

### 圆柱体建模

```
import bpy

# 创建圆柱体
bpy.ops.mesh.primitive_cylinder_add(
    radius=1,
    depth=4,
    enter_editmode=True,
    location=(0, 0, 0),
    vertices=6
)

# 获取新创建的圆柱体对象
cylinder = bpy.context.active_object

# 执行 Loop Cut
bpy.ops.mesh.loopcut_slide(
    MESH_OT_loopcut={
        "number_cuts":8,
        "object_index":0, 
        "edge_index":6
    }
)

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')
```

- 此代码在2.8下无法完成环切

### 手动环切

- 手动环切后

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739852598789) 

- 进入 脚本工作区
	- 观察绑定代码

### 绑定

- 先选中骨架armature
	- shift 加选 圆柱 Cylinder
	- 对象 Object
	- 父级 Parent
	- 自动权重 With Automatic Weights 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739857921408) 

- 手臂弯曲

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739858764435) 

- 可以代码化完成吗?



### 全代码完成

- blender4.3.2可以全部完成
	- blender2.8 环切需要手动执行

```
import bpy
import math

# 清场
bpy.ops.object.mode_set(mode='OBJECT')
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete() 

# 创建一个新的Armature对象并将其链接到场景
# 创建一个新的Armature数据块
armature_data = bpy.data.armatures.new("arm")
armature_obj = bpy.data.objects.new("arm", armature_data)

# 确保 Armature 对象被链接到指定的集合
collection = bpy.data.collections.get("Collection")
collection.objects.link(armature_obj)
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

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')

# 创建圆柱体
bpy.ops.mesh.primitive_cylinder_add(
    radius=1,
    depth=4,
    enter_editmode=True,
    location=(0, 0, 0),
    vertices=6
)

# 获取新创建的圆柱体对象
cylinder = bpy.context.active_object

# 执行 Loop Cut
bpy.ops.mesh.loopcut_slide(
    MESH_OT_loopcut={
        "number_cuts":8,
        "object_index":0, 
        "edge_index":6
    }
)

# 退出编辑模式
bpy.ops.object.mode_set(mode='OBJECT')

# 将圆柱体绑定到骨架上
cylinder.select_set(True)
armature_obj.select_set(True)
bpy.context.view_layer.objects.active = armature_obj
bpy.ops.object.parent_set(type='ARMATURE_AUTO')

# 进入姿势模式
bpy.ops.object.mode_set(mode='POSE')
# 获取第二节骨骼的姿势骨骼
forearm = armature_obj.pose.bones["forearm"]
# 将骨骼绕 X 轴旋转 45 度（这里以弧度制表示，45 度转换为弧度是 math.pi / 4）
forearm.rotation_quaternion[3] = 1
# 退出姿势模式（可选，根据你的需求决定是否退出）
bpy.ops.object.mode_set(mode='OBJECT')
```

- Rigging 这个词怎么来的?

### Rigging

- 来自于 北欧的挪威语言
	- 意思 是 绑、系

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739851208033) 

- 捆绑固定 风帆
	- 控制航向

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739851492412) 

### 操纵

- 后来有了操纵的意思

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739851699558) 

- 在blender中
	- 意思是 绑定

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3594697/uid1190679-20250218-1739851787928) 


