---
show: step
version: 1.0
enable_checker: true
---

# 顺序执行 🥊

## 回忆上次内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250211-1739283794532)

```
import bpy

def clear_scene():
    for obj in bpy.data.objects:
        bpy.data.objects.remove(obj, do_unlink=True)

def create_boolean_example():
    clear_scene()
    
    # 创建主体立方体
    bpy.ops.mesh.primitive_cube_add(location=(0, 0, 0))
    main_cube = bpy.context.active_object
    main_cube.name = "MainCube"
    main_cube.scale = (2, 2, 2)
    
    # 创建要切除的球体
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1.2, location=(1, 1, 1))
    cut_sphere = bpy.context.active_object
    cut_sphere.name = "CutSphere"
    
    # 创建要合并的圆柱体
    bpy.ops.mesh.primitive_cylinder_add(radius=2, depth=4, location=(-1, -1, 0))
    add_cylinder = bpy.context.active_object
    add_cylinder.name = "AddCylinder"
    
    # 添加差集布尔修改器（切除球体）
    bool_difference = main_cube.modifiers.new(name="BoolDifference", type='BOOLEAN')
    bool_difference.object = cut_sphere
    bool_difference.operation = 'DIFFERENCE'
    
    # 添加并集布尔修改器（合并圆柱体）
    bool_union = main_cube.modifiers.new(name="BoolUnion", type='BOOLEAN')
    bool_union.object = add_cylinder
    bool_union.operation = 'UNION'
    
    # 设置切除物体为不可见
    cut_sphere.hide_viewport = True
    add_cylinder.hide_viewport = True
    
    # 添加材质
    material = bpy.data.materials.new(name="BlueMaterial")
    material.use_nodes = True
    material.node_tree.nodes["Principled BSDF"].inputs[0].default_value = (0.1, 0.2, 0.8, 1)
    main_cube.data.materials.append(material)
    
    return main_cube

if __name__ == "__main__":
    create_boolean_example()
```


