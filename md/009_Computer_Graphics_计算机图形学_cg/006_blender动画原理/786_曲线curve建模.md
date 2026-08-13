---
show: step
version: 1.0
enable_checker: true
---

# 实验标题

## 实验介绍

### 曲线生成文字

```
import bpy

text_content = "OEASY"
font_size = 1
location = (0, 0, 0)

text_curve = bpy.data.curves.new(type="FONT", name="OEASY_text")
text_curve.body = text_content
text_curve.size = font_size

# 添加厚度
text_curve.extrude = 0.1  # 设置文字厚度
text_curve.bevel_depth = 0.02  # 添加轻微的斜角效果

try:
    font = bpy.data.fonts.load("/path/to/your/font.ttf")
    text_curve.font = font
except Exception as e:
    print(f"字体加载失败: {e}")

text_object = bpy.data.objects.new(name="OEASY_object", object_data=text_curve)
text_object.location = location

# 沿着Z轴旋转90度
text_object.rotation_euler.x = 1.5708  # 相当于90度

scene = bpy.context.scene
scene.collection.objects.link(text_object)
```