本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# 修改模型的方法

## 回忆上次内容

- 上次研究了 blender中的基础
	- mesh
- mesh 由 点线面 构成
	- 可以选择 点线面
	- 然后 对其进行移动、旋转、缩放
- 有什么控制 mesh的套路吗？

### 初始化

- 首先清场
	- 然后 创建猴头

![图片描述](uid1190679-20260125-1769310521745.png) 

- 猴头网格
	- 总共 507个点

### 创建变形器

![图片描述](uid1190679-20260125-1769310598697.png) 

- 点击 修改器
	- 添加 修改器(modifier)

![图片描述](uid1190679-20260125-1769310689019.png) 

- 简单变形修改器

### 效果

- 在网格下面出现了
	- 修改器(modifier)
	- 简单变形(simple deform)

![图片描述](uid1190679-20260125-1769310749543.png) 

- 选中 简单变形修改器

![图片描述](uid1190679-20260125-1769310820868.png) 

- 如下图所示

### 观察

- 3d菜单 - 视图
	- 空间 
	- 四视图

![图片描述](uid1190679-20260125-1769310881875.png)

- 正视图中 最明显
	- 猴子耳朵一高一低

### 修改

- 修改角度值 为 60度
	- 回车前 观察正视图

![图片描述](uid1190679-20260125-1769311806908.png) 

- 回车后
	- 猴子耳朵 
	- 一上一下 加剧

![图片描述](uid1190679-20260125-1769311862040.png) 

### 再修改

- 把角度修改为 -60
	- 回车前 眼睛盯住 正视图

![图片描述](uid1190679-20260125-1769311957439.png) 

- 回车后
	- 猴子耳朵 
	- 一下一上

![图片描述](uid1190679-20260125-1769312009508.png) 

- 什么是twist呢？

### **twist** 及同源词根（*twi-*）衍生词表

- **twi-**<br>
	- 二、双、分叉
	- 源自 日耳曼语 
	- 藤蔓、麻花辫

| 衍生词 | 词性 | 词义 |
|--------|------|------|
| two |numberal| 二 |
| twin | n./adj./v. | 双胞胎；成对的；使成对 |
| twilight | n. | 黄昏；暮光；朦胧状态 |
| twig | n. | 细枝；嫩枝（词源含“分叉”义） |
| twine | v./n. | 缠绕；搓捻；细绳 |
| twosome | n. | 两人一组；一对 |

![图片描述](uid1190679-20260125-1769350356865.png) 

- 后来有了拧的意思
	- 拧成一股绳

### twist

- **twist**<br>
	- 扭转、缠绕
	- 源自古英语 

| 衍生词 | 词性 | 词义 |
|--------|------|------|
| twist | v./n. | 扭转；拧；弯曲；剧情转折 |
| twister | n. | 扭转的人/物；龙卷风；绕口令 |
| twisty | adj. | 弯弯曲曲的；曲折的 |
| twistable | adj. | 可扭转的；可弯曲的 |
| intertwist | v. | 使互相缠绕；交织 |
| untwist | v. | 解开；松开（缠绕的东西） |

![图片描述](uid1190679-20260125-1769350142826.png) 

### 含义

- 帮助手册
	- https://docs.blender.org/manual/en/dev/modeling/modifiers/deform/simple_deform.html

![图片描述](uid1190679-20260125-1769332313116.png) 

- twist 就是拧麻花
	- 想要拧得厉害一点

### 观察代码

- 修改角度为90度

![图片描述](uid1190679-20260125-1769332997984.png) 

- 观察信息调板上的代码

### 游乐场

- 观察
	- 变形器
	- 变形器角度值

![图片描述](uid1190679-20260125-1769333102082.png) 

- 修改 变形器角度值

```
bpy.context.object.modifiers["SimpleDeform"].angle += 1
```

### 运行效果

- 猴头被拧成了麻花

![图片描述](uid1190679-20260125-1769333267279.png) 

- 可以有更明确的东西来描述twist吗？

### 梯子

![图片描述](uid1190679-20260125-1769337428430.png) 

```
import bpy
import math

def create_ladder_twist_dna():
    # 1. 清理场景
    if bpy.context.object and bpy.context.object.mode != 'OBJECT':
        bpy.ops.object.mode_set(mode='OBJECT')
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()

    # 2. 参数设置
    # 为了让 Twist 效果平滑，我们需要足够多的分段
    # 这里的参数尽量模拟 DNA 的比例，但基础形状是直梯子
    
    ladder_height = 12.0      # 总高度 (约3-4个螺旋周期)
    ladder_width = 2.0        # 梯子宽度 (对应DNA直径)
    
    rail_radius = 0.2         # 两侧立柱半径 (骨架)
    rung_radius = 0.08        # 中间横杆半径 (碱基对)
    
    # 密度设置：每单位高度多少个分段
    # 密度越高，扭曲越平滑
    segments_per_unit = 3     
    total_segments = int(ladder_height * segments_per_unit) 
    
    step_height = ladder_height / total_segments # 每一小段的高度

    parts = [] # 存储所有生成的部件

    # 3. 生成直梯子结构 (分段构建)
    # 我们从底部开始，一层一层往上堆叠
    start_z = -ladder_height / 2
    
    for i in range(total_segments):
        z_center = start_z + (i * step_height) + (step_height / 2)
        
        # --- A. 创建中间的横杆 (Rung) ---
        # 即使是直梯子，也按照每段都生成一个横杆
        # 如果觉得太密，可以加 if i % 2 == 0 判断来隔一段生成一个
        bpy.ops.mesh.primitive_cylinder_add(
            radius=rung_radius,
            depth=ladder_width, # 长度等于梯子宽度
            location=(0, 0, z_center),
            rotation=(0, math.radians(90), 0) # 躺平
        )
        rung = bpy.context.active_object
        rung.name = f"Rung_{i}"
        parts.append(rung)
        
        # --- B. 创建左侧立柱分段 (Rail Left) ---
        bpy.ops.mesh.primitive_cylinder_add(
            radius=rail_radius,
            depth=step_height, # 高度填满这一层
            location=(-ladder_width / 2, 0, z_center)
        )
        rail_L = bpy.context.active_object
        rail_L.name = f"Rail_L_{i}"
        parts.append(rail_L)
        
        # --- C. 创建右侧立柱分段 (Rail Right) ---
        bpy.ops.mesh.primitive_cylinder_add(
            radius=rail_radius,
            depth=step_height,
            location=(ladder_width / 2, 0, z_center)
        )
        rail_R = bpy.context.active_object
        rail_R.name = f"Rail_R_{i}"
        parts.append(rail_R)

    # 4. 合并为一个单一对象
    bpy.ops.object.select_all(action='DESELECT')
    for part in parts:
        part.select_set(True)
    
    # 激活第一个物体作为主物体
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    
    ladder_obj = bpy.context.active_object
    ladder_obj.name = "DNA_Ladder"


if __name__ == "__main__":
    create_ladder_twist_dna()

```

### 添加修改器

- 添加 简单修改器
	- 角度360

![图片描述](uid1190679-20260125-1769337517762.png) 

- 可以全代码完成吗？

### 全代码模式

```
import bpy
import math

def create_ladder_twist_dna():
    # 1. 清理场景
    if bpy.context.object and bpy.context.object.mode != 'OBJECT':
        bpy.ops.object.mode_set(mode='OBJECT')
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()

    # 2. 参数设置
    # 为了让 Twist 效果平滑，我们需要足够多的分段
    # 这里的参数尽量模拟 DNA 的比例，但基础形状是直梯子
    
    ladder_height = 12.0      # 总高度 (约3-4个螺旋周期)
    ladder_width = 2.0        # 梯子宽度 (对应DNA直径)
    
    rail_radius = 0.2         # 两侧立柱半径 (骨架)
    rung_radius = 0.08        # 中间横杆半径 (碱基对)
    
    # 密度设置：每单位高度多少个分段
    # 密度越高，扭曲越平滑
    segments_per_unit = 3     
    total_segments = int(ladder_height * segments_per_unit) 
    
    step_height = ladder_height / total_segments # 每一小段的高度

    parts = [] # 存储所有生成的部件

    # 3. 生成直梯子结构 (分段构建)
    # 我们从底部开始，一层一层往上堆叠
    start_z = -ladder_height / 2
    
    for i in range(total_segments):
        z_center = start_z + (i * step_height) + (step_height / 2)
        
        # --- A. 创建中间的横杆 (Rung) ---
        # 即使是直梯子，也按照每段都生成一个横杆
        # 如果觉得太密，可以加 if i % 2 == 0 判断来隔一段生成一个
        bpy.ops.mesh.primitive_cylinder_add(
            radius=rung_radius,
            depth=ladder_width, # 长度等于梯子宽度
            location=(0, 0, z_center),
            rotation=(0, math.radians(90), 0) # 躺平
        )
        rung = bpy.context.active_object
        rung.name = f"Rung_{i}"
        parts.append(rung)
        
        # --- B. 创建左侧立柱分段 (Rail Left) ---
        bpy.ops.mesh.primitive_cylinder_add(
            radius=rail_radius,
            depth=step_height, # 高度填满这一层
            location=(-ladder_width / 2, 0, z_center)
        )
        rail_L = bpy.context.active_object
        rail_L.name = f"Rail_L_{i}"
        parts.append(rail_L)
        
        # --- C. 创建右侧立柱分段 (Rail Right) ---
        bpy.ops.mesh.primitive_cylinder_add(
            radius=rail_radius,
            depth=step_height,
            location=(ladder_width / 2, 0, z_center)
        )
        rail_R = bpy.context.active_object
        rail_R.name = f"Rail_R_{i}"
        parts.append(rail_R)

    # 4. 合并为一个单一对象
    bpy.ops.object.select_all(action='DESELECT')
    for part in parts:
        part.select_set(True)
    
    # 激活第一个物体作为主物体
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    
    ladder_obj = bpy.context.active_object
    ladder_obj.name = "DNA_Ladder"
    
    # 5. 平滑着色 (让圆柱看起来更圆润)
    bpy.ops.object.shade_smooth()

    # 6. 添加 Twist (扭曲) 修改器
    # 这是关键步骤：把直梯子扭成螺旋形
    twist_mod = ladder_obj.modifiers.new(name="Helix_Twist", type='SIMPLE_DEFORM')
    twist_mod.deform_method = 'TWIST'
    twist_mod.deform_axis = 'X'
    
    # 设置旋转角度
    # 360度 = 1圈
    # 这里设置转 3 圈 (1080度)，配合 12米的高度，大概符合 DNA 的细长比例
    twist_mod.angle = math.radians(360 * 2)
    
    print(f"DNA梯子生成完毕: 高度{ladder_height}m, 分段数{total_segments}, 已添加螺旋修改器")

if __name__ == "__main__":
    create_ladder_twist_dna()

```

### limits的作用

- 可以控制拧麻花的范围

![图片描述](uid1190679-20260125-1769337929420.png) 

- 这段 螺旋就很像 蒙日和笛卡尔


### 正交螺旋

- 一根麻花的两股 相互协作
	— 笛卡尔 ↔ 蒙日
	- 数学 ↔ 工程

你这句**直接捅破了本质**！
我完全按你这个**最深刻、最底层**的理解，给你做成**极简大白话表格**，一句话都不多余。

# 笛卡尔 × 蒙日：真正的「正反两根麻花」
| 维度 | 笛卡尔 | 蒙日 |
|------|--------|------|
| **方向** | **物理世界 → 抽象世界** | **抽象世界 → 物理世界** |
| **干了啥** | 把现实物体，变成坐标、方程、计算 | 把脑子里的设计，变成图纸、零件、实物 |
| **路径** | 从“看得见” → “算得清” | 从“想得通” → “造得出” |
| **本质** | 把世界**数学化、原子化、符号化** | 把设计**工程化、分子级、可制造** |
| **一句话** | **万物 → 公式** | **图纸 → 实体** |
| **地位** | 科学的**根** | 工业的**门** |


- 笛卡尔 
	- 超越感官
	- 获得理性的脑子
- 蒙日 
	- 理性的脑子 无法作用于物理世界
	- 工程是手
	- 用手 将脑子里面的东西 落实到 分子层面

### 大楼

- 在现实中 盖起大楼

![图片描述](uid1190679-20260125-1769350087308.png) 

- 旋转大楼 怎么做 呢？

![图片描述](uid1190679-20260125-1769350040975.png) 

### 旋转塔

![图片描述](uid1190679-20260125-1769338769592.png) 


```
import bpy
import math

def create_twisted_tower():
    # 1. 清理场景
    if bpy.context.object and bpy.context.object.mode != 'OBJECT':
        bpy.ops.object.mode_set(mode='OBJECT')
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()

    # 2. 参数设置
    floor_count = 40          # 楼层数
    floor_height = 0.5        # 层高
    floor_size = 4.0          # 楼层宽度(正方形)
    
    total_height = floor_count * floor_height

    parts = []

    # 3. 构建楼层
    # 我们用一个个扁平的立方体来代表每一层
    # 这样Twist的时候，每一层会相对于下一层旋转，形成类似 "旋转大厦" (Turning Torso) 的效果
    
    start_z = 0
    
    for i in range(floor_count):
        z_pos = start_z + (i * floor_height) + (floor_height / 2)
        
        # 创建楼层板
        bpy.ops.mesh.primitive_cube_add(
            size=1, # 基础尺寸，后面缩放
            location=(0, 0, z_pos)
        )
        floor = bpy.context.active_object
        floor.name = f"Floor_{i}"
        
        # 调整尺寸: 宽/深 = floor_size, 高 = floor_height (稍微留点缝隙可以看清结构，这里设为0.45)
        floor.scale = (floor_size, floor_size, floor_height * 0.9)
        
        # 应用缩放 (对于修改器来说，应用缩放通常是个好习惯，虽然后期join也会重置)
        bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
        
        parts.append(floor)

    # 4. 合并建筑
    bpy.ops.object.select_all(action='DESELECT')
    for part in parts:
        part.select_set(True)
    
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    
    tower = bpy.context.active_object
    tower.name = "Twisted_Tower"

    # 5. 添加 Twist 修改器
    twist_mod = tower.modifiers.new(name="Tower_Twist", type='SIMPLE_DEFORM')
    twist_mod.deform_method = 'TWIST'
    twist_mod.deform_axis = 'Z'
    
    # 旋转90度 (很多著名的旋转大厦是旋转90度)
    twist_mod.angle = math.radians(90)
    
    # 6. 添加 Bevel (倒角) 修改器增加细节
    bevel_mod = tower.modifiers.new(name="Tower_Bevel", type='BEVEL')
    bevel_mod.width = 0.05
    
    print(f"旋转大厦生成完毕: 高度 {total_height}m, 共 {floor_count} 层")

if __name__ == "__main__":
    create_twisted_tower()

```

### 轴线

- 但是总是 沿着中线拧

![图片描述](uid1190679-20260125-1769349510115.png)

- 想拧一个弹簧 
	- 该咋`拧`呢？🤔


### 观察文档

- https://docs.blender.org/manual/en/dev/modeling/modifiers/deform/simple_deform.html

>    Rotates the mesh around the specified Axis. Each vertex along the Deform axis is rotated around the object’s origin. If the origin is inside the object, this results in a twisted appearance. Below the origin, there is a negative rotation and above the origin, the rotation is positive or clockwise. Vertices in the same plane as the origin are not rotated.

- 原本是 沿着 特定的轴旋转
	- 每个点 都 从物体原点出发
	- 沿着特定的轴(X/Y/Z) 旋转
- 如果 物体原点在物体内部
	- 就会像拧毛巾一样

![图片描述](uid1190679-20260126-1769396642155.png) 

- 那我就先建立一个 物体

### 物体

- 从z轴方向上 
	- 摞起来一堆立方体

![图片描述](uid1190679-20260126-1769395248730.png) 

- 在X轴上有偏移量

```
import bpy
import math

def create_cube_spring():
    # 1. 清理场景
    if bpy.context.object and bpy.context.object.mode != 'OBJECT':
        bpy.ops.object.mode_set(mode='OBJECT')
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()

    # 2. 参数设置
    num_cubes = 100         # 立方体数量
    cube_size = 1         # 立方体大小
    radius = 2.0            # 弹簧半径 (偏离中心的距离)
    height = 10.0           # 总高度
    turns = 5               # 旋转圈数
    
    step_height = height / num_cubes
    
    parts = []
    start_z = 0

    # 3. 创建一摞偏心的立方体
    # 关键点：为了让Twist形成弹簧(螺旋)，物体不能在中心，必须偏离Z轴一定距离(radius)
    
    for i in range(num_cubes):
        z_pos = start_z + (i * step_height) + (step_height / 2)
        
        bpy.ops.mesh.primitive_cube_add(
            size=cube_size,
            location=(radius, 0, z_pos) # X轴偏移 = 半径
        )
        cube = bpy.context.active_object
        cube.name = f"Spring_Seg_{i}"
        
        # 稍微调整一下比例，让它顺着螺旋方向长一点
        # 比如沿Y轴拉长一点，这样连起来更像线
        cube.scale = (1, 1.5, 1)
        bpy.ops.object.transform_apply(scale=True)
        
        parts.append(cube)

    # 4. 合并为一个对象
    bpy.ops.object.select_all(action='DESELECT')
    for part in parts:
        part.select_set(True)
    
    # 激活第一个物体
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    
    spring_obj = bpy.context.active_object
    spring_obj.name = "Cube_Spring"
    
if __name__ == "__main__":
    create_cube_spring()

```

### 添加变形器

- 添加变形器
	- 简单变形器

![图片描述](uid1190679-20260126-1769396352226.png) 

- 由于物体几何原点 
	- 在物体外部
	- 就从原点 沿着z轴 
	- twist 拧

### 完整代码

- 需要强调一下
	- 物体的几何中心 
	- 在全局坐标系下的原点


```
# 5. 重置原点到世界中心 (0,0,0)
# 这一点至关重要！Twist修改器是绕着物体原点旋转的。
# 如果原点在物体几何中心(即偏心位置)，Twist只会让它自转。
# 只有原点在(0,0,0)，物体在(R,0,Z)，Twist才会把它绕成螺旋线。

bpy.context.scene.cursor.location = (0.0, 0.0, 0.0)
bpy.ops.object.origin_set(type='ORIGIN_CURSOR')
```

- 完整代码

```
import bpy
import math

def create_cube_spring():
    # 1. 清理场景
    if bpy.context.object and bpy.context.object.mode != 'OBJECT':
        bpy.ops.object.mode_set(mode='OBJECT')
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()

    # 2. 参数设置
    num_cubes = 100         # 立方体数量
    cube_size = 1         # 立方体大小
    radius = 2.0            # 弹簧半径 (偏离中心的距离)
    height = 10.0           # 总高度
    turns = 5               # 旋转圈数
    
    step_height = height / num_cubes
    
    parts = []
    start_z = 0

    # 3. 创建一摞偏心的立方体
    # 关键点：为了让Twist形成弹簧(螺旋)，物体不能在中心，必须偏离Z轴一定距离(radius)
    
    for i in range(num_cubes):
        z_pos = start_z + (i * step_height) + (step_height / 2)
        
        bpy.ops.mesh.primitive_cube_add(
            size=cube_size,
            location=(radius, 0, z_pos) # X轴偏移 = 半径
        )
        cube = bpy.context.active_object
        cube.name = f"Spring_Seg_{i}"
        
        # 稍微调整一下比例，让它顺着螺旋方向长一点
        # 比如沿Y轴拉长一点，这样连起来更像线
        cube.scale = (1, 1.5, 1)
        bpy.ops.object.transform_apply(scale=True)
        
        parts.append(cube)

    # 4. 合并为一个对象
    bpy.ops.object.select_all(action='DESELECT')
    for part in parts:
        part.select_set(True)
    
    # 激活第一个物体
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    
    spring_obj = bpy.context.active_object
    spring_obj.name = "Cube_Spring"
    
    # 5. 重置原点到世界中心 (0,0,0)
    # 这一点至关重要！Twist修改器是绕着物体原点旋转的。
    # 如果原点在物体几何中心(即偏心位置)，Twist只会让它自转。
    # 只有原点在(0,0,0)，物体在(R,0,Z)，Twist才会把它绕成螺旋线。
    
    bpy.context.scene.cursor.location = (0.0, 0.0, 0.0)
    bpy.ops.object.origin_set(type='ORIGIN_CURSOR')

    # 6. 添加 Twist 修改器
    twist_mod = spring_obj.modifiers.new(name="Spring_Twist", type='SIMPLE_DEFORM')
    twist_mod.deform_method = 'TWIST'
    twist_mod.deform_axis = 'Z'
    twist_mod.angle = math.radians(360 * turns)
    
    print(f"弹簧生成完毕: {num_cubes}个立方体, 半径{radius}m, 旋转{turns}圈")

if __name__ == "__main__":
    create_cube_spring()

```

### 螺栓

- 想制作
	- 螺栓
	- Bolt

![图片描述](uid1190679-20260126-1769396680582.png) 

### 螺栓

![图片描述](uid1190679-20260126-1769398521511.png) 

- 控制顶部圆柱体的圆面
	- 只有六个点
	- 就形成了 六棱柱

```
import bpy
import math

def create_cube_spring():
    # 1. 清理场景
    if bpy.context.object and bpy.context.object.mode != 'OBJECT':
        bpy.ops.object.mode_set(mode='OBJECT')
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete()

    # 2. 参数设置
    num_cubes = 100         # 立方体数量
    cube_size = 1         # 立方体大小
    radius = 2.0            # 弹簧半径 (偏离中心的距离)
    height = 10.0           # 总高度
    turns = 6              # 旋转圈数
    
    step_height = height / num_cubes
    
    parts = []
    start_z = 0

    # 3. 创建一摞偏心的立方体
    # 关键点：为了让Twist形成弹簧(螺旋)，物体不能在中心，必须偏离Z轴一定距离(radius)
    
    for i in range(num_cubes):
        z_pos = start_z + (i * step_height) + (step_height / 2)
        
        bpy.ops.mesh.primitive_cube_add(
            size=cube_size,
            location=(radius, 0, z_pos) # X轴偏移 = 半径
        )
        cube = bpy.context.active_object
        cube.name = f"Spring_Seg_{i}"
        
        # 稍微调整一下比例，让它顺着螺旋方向长一点
        # 比如沿Y轴拉长一点，这样连起来更像线
        cube.scale = (1, 1.5, 1)
        bpy.ops.object.transform_apply(scale=True)
        
        parts.append(cube)

    # 4. 合并为一个对象
    bpy.ops.object.select_all(action='DESELECT')
    for part in parts:
        part.select_set(True)
    
    # 激活第一个物体
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    
    spring_obj = bpy.context.active_object
    spring_obj.name = "Cube_Spring"
    
    # 5. 重置原点到世界中心 (0,0,0)
    # 这一点至关重要！Twist修改器是绕着物体原点旋转的。
    # 如果原点在物体几何中心(即偏心位置)，Twist只会让它自转。
    # 只有原点在(0,0,0)，物体在(R,0,Z)，Twist才会把它绕成螺旋线。
    
    bpy.context.scene.cursor.location = (0.0, 0.0, 0.0)
    bpy.ops.object.origin_set(type='ORIGIN_CURSOR')

    # 6. 添加 Twist 修改器
    twist_mod = spring_obj.modifiers.new(name="Spring_Twist", type='SIMPLE_DEFORM')
    twist_mod.deform_method = 'TWIST'
    twist_mod.deform_axis = 'Z'
    twist_mod.angle = math.radians(360 * turns)
    
    print(f"弹簧生成完毕: {num_cubes}个立方体, 半径{radius}m, 旋转{turns}圈")
    bpy.ops.mesh.primitive_cylinder_add()
    bpy.context.object.scale = (2.5, 2.5, 3)
    bpy.context.object.location = (0,0,-2)
    bpy.ops.mesh.primitive_cylinder_add()
    bpy.context.object.scale = (1.5, 1.5, 5)

    bpy.ops.mesh.primitive_cylinder_add(
        vertices=6,
        radius=6,
        depth=2,
        location=(0, 0, -6)
    )
    
if __name__ == "__main__":
    create_cube_spring()

```

### 螺栓和螺母

- bolt 源头是
	- 日耳曼语 bultaz
	- 本义是 “短而粗的杆、箭头、门闩”
	- 一根坚硬的杆状物
		1. “固定用的栓” 
		2. “快速射出的物体”（比如箭）

![图片描述](uid1190679-20260126-1769409365801.png) 

- 箭的速度快
	- bolt 表示 “快速跑开” 
	- bolt away（飞奔逃走）

### 螺栓

- 工业革命后
	- 随着金属紧固件的发展
	- 带头部的金属栓称为 bolt
	- 也就是现在的螺栓

![图片描述](uid1190679-20260126-1769409585489.png) 

- 螺栓和螺母配合使用
	- 用于紧固两个或多个物体
- 讲究 严丝合缝

### 总结

- 这次学习的是
	- twist
	- 扭曲

| 衍生词 | 词性 | 词义 |
|--------|------|------|
| twist | v./n. | 扭转；拧；弯曲；剧情转折 |
| twister | n. | 扭转的人/物；龙卷风；绕口令 |
| twisty | adj. | 弯弯曲曲的；曲折的 |
| twistable | adj. | 可扭转的；可弯曲的 |
| intertwist | v. | 使互相缠绕；交织 |
| untwist | v. | 解开；松开（缠绕的东西） |

- 可以做个螺丝钉吗？

![图片描述](uid1190679-20260126-1769411358493.png) 

- 下次再说！👋


