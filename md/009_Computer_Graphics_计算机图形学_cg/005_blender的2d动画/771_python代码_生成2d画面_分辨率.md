---
show: step
version: 1.0
enable_checker: true
---

# 2d动画基础

## 回忆

- 上次 我们 在blender中 
	- 使用2d方式 
	- 制作了一个logo

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1308301/uid1190679-20250609-1749470625833) 

- 我能用代码 
	- 在blender里
	- 生成2d画面吗？🤔

### 构造环境

- 从终端启动blender

```
blender
```

- 然后切换到2D动画

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4091352/uid1190679-20250605-1749087460431) 

- 添加脚本工作区

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4091352/uid1190679-20250605-1749087496448) 

### 提问

```
我要制作 Python， 然后在 Blender 里面完成以下操作。首先是新建一个 2D动画的模式，然后要在里边删除所有的。 Grease pencil对象，我要把文件中的所有的 Grease pencil对象也删除。删除之后呢，我就要创建相应新的这个 Greasepencil。然后其中呢有一个图层叫 lines。在里面设置好它的宽度，然后画一个线段，其中有两个端点。
```

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4091352/uid1190679-20250609-1749470914249) 


### 生成线条

```
import bpy

# 先删除场景中可见的 Grease Pencil 对象
for obj in bpy.context.scene.objects:
    if obj.type == 'GPENCIL':
        bpy.data.objects.remove(obj, do_unlink=True)

# 再清理数据块中残留的 Grease Pencil 数据
for gp in bpy.data.grease_pencils:
    bpy.data.grease_pencils.remove(gp)

# 创建 Grease Pencil 数据块和对象
gpencil_data = bpy.data.grease_pencils.new("GPencil")
gpencil = bpy.data.objects.new(gpencil_data.name, gpencil_data)
bpy.context.collection.objects.link(gpencil)

# 添加图层、帧、笔触
gp_layer = gpencil_data.layers.new("lines")
gp_frame = gp_layer.frames.new(bpy.context.scene.frame_current)
gp_stroke = gp_frame.strokes.new()
gp_stroke.line_width = 12

# 添加笔触点并设置坐标
gp_stroke.points.add(count=4)
gp_stroke.points[0].co = (-1.0, 0.0, -1.0)
gp_stroke.points[1].co = (1.0, 0.0, 1.0)
```

- 运行后	
	- 切回到 2D动画工作区
	- 观察运行效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4091352/uid1190679-20250605-1749087598883) 

- 出现一条斜线
	- 从 (-1.0, 0.0, -1.0)
	- 到  (1.0, 0.0, 1.0)
	- 垂直于y轴

### 具体渲染

- 设置渲染参数
	- 400 * 300
	- <kbd>F12</kbd> 渲染

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4091352/uid1190679-20250605-1749089535870) 

- 在/tmp下面的到png
- 可以用代码实现渲染过程吗？

### 代码渲染

```
import bpy

# 先删除场景中可见的 Grease Pencil 对象
for obj in bpy.context.scene.objects:
    if obj.type == 'GPENCIL':
        bpy.data.objects.remove(obj, do_unlink=True)

# 再清理数据块中残留的 Grease Pencil 数据
for gp in bpy.data.grease_pencils:
    bpy.data.grease_pencils.remove(gp)

# 创建 Grease Pencil 数据块和对象
gpencil_data = bpy.data.grease_pencils.new("GPencil")
gpencil = bpy.data.objects.new(gpencil_data.name, gpencil_data)
bpy.context.collection.objects.link(gpencil)

# 添加图层、帧、笔触
gp_layer = gpencil_data.layers.new("lines")
gp_frame = gp_layer.frames.new(bpy.context.scene.frame_current)
gp_stroke = gp_frame.strokes.new()
gp_stroke.line_width = 100

# 添加笔触点并设置坐标
gp_stroke.points.add(count=2)
gp_stroke.points[0].co = (-1.0, 0.0, -1.0)
gp_stroke.points[1].co = (1.0, 0.0, 1.0)

bpy.context.scene.frame_end = 1
bpy.context.scene.render.resolution_x = 400
bpy.context.scene.render.resolution_y = 300
bpy.context.scene.render.engine = 'CYCLES'
bpy.context.scene.render.filepath = "/home/shiyanlou/Code/r"
bpy.ops.render.render(write_still=True)
```

- 颜色有点浅

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4091352/uid1190679-20250605-1749090347079) 

- 可以加深吗？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4091352/uid1190679-20250609-1749422316049) 



![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4091352/uid1190679-20250605-1749085869573) 


 ![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4091352/uid1190679-20250605-1749085902390) 

## 提问


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4091352/uid1190679-20250605-1749085078567)

```
```

## 总结

- 这
- 我们下次再说！👋

