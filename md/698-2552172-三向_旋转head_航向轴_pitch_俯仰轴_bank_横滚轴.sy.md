---
show: step
version: 1.0 
enable_checker: true
---


# python_blender

## 开始

- 上次我们通过代码制作出了
	- 一架传统大飞机

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240420-1713620176862)

- 飞机由几部分构成
	- 机身 body
	- 尾翼 tail1 + tail2
	- 机翼 wings


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2112839/uid1190679-20240420-1713620978868) 

- 可以让这个飞机进行旋转吗？

### 基础代码

```
import bpy
from math import pi

bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
c919 = bpy.data.objects.new("c919", None)
bpy.data.collections["Collection"].objects.link(c919)
bpy.ops.mesh.primitive_cylinder_add(radius=1, depth=9)
bpy.context.object.rotation_euler[0] = pi /2
bpy.context.object.parent = c919
bpy.ops.mesh.primitive_cube_add(size=2)
bpy.context.object.name = "body"
bpy.context.object.scale = (0.2,0.75,1)
bpy.context.object.parent = c919
bpy.context.object.rotation_euler[0] = - pi / 4
bpy.context.object.location = (0, 5 ,1)
bpy.context.object.parent = c919
bpy.context.object.name = "tail1"
bpy.ops.mesh.primitive_cube_add(size=2)
bpy.context.object.scale = (1,0.5,0.25)
bpy.context.object.location = (0, 5 ,1)
bpy.context.object.parent = c919
bpy.context.object.name = "tail2"
bpy.ops.mesh.primitive_cube_add(size=2)
bpy.context.object.scale = (5,1,0.25)
bpy.context.object.location = (0, -1 ,0)
bpy.context.object.parent = c919
bpy.context.object.name = "wings"
c919.rotation_euler[0] = - pi / 4
```

- 主要是添加了最后一句

### 运行之后

- 飞机作为一个整体 
	- 俯仰角提高了 pi/4

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713708782004)

- 飞机这个几个角度 有各自的名字吗？

### 旋转轴

- 3个旋转轴
	- 俯仰轴 pitch 
	- 横滚轴 bank
	- 航向轴 heading

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713709128070)

- 我们先来看看俯仰轴

### 俯仰轴

- 投标枪 投棒球 高尔夫打高球 
	- 或者吹捧 往天上吹 推销 
	- 船或者飞机 上下颠簸 跷跷板 
	- 俯仰角 抛物线 确保箭头扎中目标

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713709178890)

- 扔标枪不是瞎扔 
	- 而是要瞄准了扔 
	- 这需要稳定 

### 音高

- 所以pitch也指稳定的音高 doremi	
	- 不是滑音 颤音 
	- 而是稳定在某个频率的音高 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713709741992)

- 频率

### 搭帐篷

- 搭帐篷 插入地面
	- 定位  
	- 俯仰轴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713709899287)

- How to pitch a tent
- 我们再看看第二个轴向

### bank

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713710032199)

- bank 横滚轴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713710076953)

- 飞机转弯的时候 
	- 先要横滚 

### 靠岸

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713710148391)

- 想让船靠岸下来 怎么办？

### 

- 倾斜 
	- 一边划另一边不划 
	- 水手坐在凳子上 
	- 在河里的时候 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713710170562)

- 一bank 就靠岸了 	
	- 可以抛锚了
	- 所以河岸也叫做 bank

### 银行

- 威尼斯是当时欧洲的贸易中心
	- 各国商船跨越地中海来来往往
	- 人们在威尼斯卸货、交割、支付、回款
	- 人们需要对各国货币进行鉴别、估值、存管
- 繁荣的商业促生了金融业的活跃
	- 由于当时欧洲法律禁止犹太人从事大多数经济活动
	- 犹太人被迫只能从事货币借贷相关业务
	- 第一批银行家就在这里诞生了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713710303480)

- 最早有人就是在凳子上进行交易 
	- 钱放入bank长凳子
	- 靠岸了就稳当了 
	- 就像靠岸那种感觉 
- 所以bank也叫银行 
	- 所以银行家也叫 
	- 长板凳的人
	- banker

### 破产

- bank 无法兑现 
	- 没有信用了 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713710673083)

- 债权人就把他的板凳给砸了 
	- bankrupt也叫破产

### 航向轴

- 头朝那边 
	- 一般就往那边跑 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240529-1716946256277)

- heading 
	- 就是 航向轴 

### 环绕模式

- 如果我想让c919 
	- 绕着center转动


```
import bpy
from math import pi

bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
c919 = bpy.data.objects.new("c919", None)
bpy.data.collections["Collection"].objects.link(c919)
bpy.ops.mesh.primitive_cylinder_add(radius=1, depth=9)
bpy.context.object.rotation_euler[0] = pi /2
bpy.context.object.parent = c919
bpy.ops.mesh.primitive_cube_add(size=2)
bpy.context.object.name = "body"
bpy.context.object.scale = (0.2,0.75,1)
bpy.context.object.parent = c919
bpy.context.object.rotation_euler[0] = - pi / 4
bpy.context.object.location = (0, 5 ,1)
bpy.context.object.parent = c919
bpy.context.object.name = "tail1"
bpy.ops.mesh.primitive_cube_add(size=2)
bpy.context.object.scale = (1,0.5,0.25)
bpy.context.object.location = (0, 5 ,1)
bpy.context.object.parent = c919
bpy.context.object.name = "tail2"
bpy.ops.mesh.primitive_cube_add(size=2)
bpy.context.object.scale = (5,1,0.25)
bpy.context.object.location = (0, -1 ,0)
bpy.context.object.parent = c919
bpy.context.object.name = "wings"
c919.location = (-10,10,0)
bpy.ops.mesh.primitive_uv_sphere_add()
center = bpy.context.object
center.name = "center"
c919.parent = center
center.rotation_euler = (0,0,3.14/2)
```



### 总结 🤔

- 这次我们研究了 
	- 物体的旋转
	- 有三个轴向

|英文|中文|作用|
|---|---|---|
| heading |航向轴 | 转头|
|pitch | 俯仰轴 |点头 |
|bank| 横滚 |歪头 盗梦空间特效|

- 可以让飞机排成一个阵列吗？
- 我们下次再说！👋
