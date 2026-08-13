```
import bpy

bpy.ops.object.select_all(action="SELECT") # 取消选择所有物体
bpy.ops.object.delete() # 删除选定的物体
bpy.ops.mesh.primitive_cube_add()
bpy.ops.object.modifier_add(type='BEVEL')
bpy.context.object.modifiers["Bevel"].width = 0.3
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240611-1718111879780)