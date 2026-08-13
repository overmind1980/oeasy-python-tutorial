---
show: step
version: 1.0
enable_checker: true
---

# 修改模型的方法

## 回忆上次内容

- 惠特沃斯 
	- 把‘差不多’赶出工业史的人”
	- 用标准驯服了制造的不确定性

- 他没有直系子女
	- 将绝大部分巨额财富投入公益信托
	- 设立惠特沃斯奖学金
	- 由英国机械工程师学会（IMechE）管理
		- 资助顶尖工程学生

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4939811/uid1190679-20260126-1769414299946) 

- 我们可以让这个螺钉变弯吗？🤔

```
import bpy

bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()
bpy.ops.mesh.primitive_monkey_add(size=2, enter_editmode=False, align='WORLD', location=(0, 0, 0))
bpy.ops.object.modifier_add(type='SIMPLE_DEFORM')
bpy.context.object.modifiers["SimpleDeform"].angle = 1

```


### 变型器

- 给 对象 添加 变型器
	- 变型类 deform
	- 简单变型 simple deform

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1434750/uid1190679-20250118-1737207563133) 

- 帮助手册
	- https://docs.blender.org/manual/en/dev/modeling/modifiers/deform/simple_deform.html

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1434750/uid1190679-20250118-1737209901613) 

### 弯曲

- Bend
	- X 轴向 正值

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1434750/uid1190679-20250118-1737207822063) 

- 反方向练习

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1434750/uid1190679-20250118-1737210109459) 

- 还可以试试yz方向的弯曲



### 总结

- 下次再说！👋