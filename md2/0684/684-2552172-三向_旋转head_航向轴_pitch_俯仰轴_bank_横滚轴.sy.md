---
show: step
version: 1.0 
enable_checker: true
本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 
---


#  三向_旋转head_航向轴_pitch_俯仰轴_bank_横滚轴 

## 开始

- [配套视频](https://www.bilibili.com/video/BV1S6roB2EiL)
- 上次我们通过代码制作出了
	- 一架传统大飞机

![图片描述](uid1190679-20240420-1713620176862.png)

- 飞机由几部分构成
	- 机身 body
	- 尾翼 tail1 + tail2
	- 机翼 wings


![图片描述](uid1190679-20240420-1713620978868.png) 

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
bpy.context.object.name = "body"
bpy.ops.mesh.primitive_cube_add(size=2)
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

![图片描述](uid1190679-20240421-1713708782004.png)

- 飞机这个几个角度 有各自的名字吗？

### 旋转轴

- 3个旋转轴
	- 俯仰轴 pitch 
	- 横滚轴 bank
	- 航向轴 heading

![图片描述](uid1190679-20240421-1713709128070.png)

- 我们先来看看俯仰轴

### 音高

- 俯仰轴 pitch 
	- 稳定的音高 doremi	
	- 不是滑音 颤音 
	- 而是稳定在某个频率的音高 

![图片描述](uid1190679-20240421-1713709741992.png)

- 音高这个词怎么来的？

### 俯仰轴

- 和 音高 要稳定 一样
	- 扔标枪 也要 稳定 

![图片描述](uid1190679-20240421-1713709178890.gif)

- 投标枪 
	- 俯仰角 抛物线 
		- 确保箭头扎中目标
	- 投棒球、高尔夫球 
	- 或者吹捧 往天上吹 推销 
	- 船或者飞机 上下颠簸 跷跷板 

### 搭帐篷

- 搭帐篷 插入地面
	- 定位  
	- 俯仰轴
	- How to pitch a tent

![图片描述](uid1190679-20240421-1713709899287.png)

- 我们再看看第二个轴向

### bank

![图片描述](uid1190679-20240421-1713710032199.png)

- bank 横滚轴

![图片描述](uid1190679-20240421-1713710076953.png)

- 飞机转弯的时候 
	- 先要横滚 

### 靠岸

- 自行车想要停下来
	- 也需要先横滚

![图片描述](uid1190679-20240421-1713710148391.png)

- 想让船靠岸下来 怎么办？

### 船靠岸

- 倾斜 
	- 一边划另一边不划 
	- 在水里的时候 

![图片描述](uid1190679-20240421-1713710170562.png)

- 水手坐 长凳子 上 
	- 一bank 就靠岸了 	
	- 可以抛锚了
	- 所以河岸也叫做 bank

### 银行

- 威尼斯 是 当时欧洲贸易中心
	- 各国商船 跨越地中海 来来往往
	- 在威尼斯 卸货、交割、支付、回款
	- 货币很多
	- 需要 对各国货币 进行 鉴别、估值、存管
- 繁荣的商业 促生了 金融业
	- 当时欧洲法律 禁止犹太人 从事 大多数经济活动
	- 犹太人 被迫 只能从事 货币借贷业务
	- 第一批银行家 就在这 诞生了

![图片描述](uid1190679-20240421-1713710303480.png)

- 最早就在 凳子上 交易 
	- 钱放入bank 长凳子
	- 靠岸了 就 稳当了 
- 所以bank 也叫 银行 
	- 所以 银行家 也叫 
		- 长板凳的人
		- banker

### 破产

- bank 无法兑现 
	- 没有信用了 

![图片描述](uid1190679-20240421-1713710673083.png)

- 债权人 就把他的板凳 给`砸`了 
	- bankrupt 也叫 破产

### 航向轴

- 头朝那边 
	- 一般就往那边跑 

![图片描述](uid1190679-20240529-1716946256277.png)

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

### 对象属性复习

- 在原来基础属性基础上
	- 添加了 名字、父级 属性

| 属性名          | 所属类别       | 说明（简要）|
|-----------------|----------------|-------------------------------------------|
| `location`      | 空间变换       | 坐标，格式为(x,y,z)浮点三元组     |
| `rotation_euler`| 空间变换（旋转）| 欧拉角，弧度制(x,y,z)|
| `scale`         | 空间变换       | 缩放比例        |
| `name`          | 基础标识       | 定义对象名称                |
| `parent`        | 层级关系       | 设置父对象，子对象继承父对象变换          |


### 总结 🤔

- 这次我们研究了 
	- 物体的旋转
	- 有三个轴向

|英文|中文|作用|
|---|---|---|
| heading |航向轴 | 转头|
|pitch | 俯仰轴 |点头 |
|bank| 横滚 |歪头 盗梦空间特效|

![图片描述](uid1190679-20251215-1765801901566.png) 

- 可以 再用猴头理解 三轴旋转吗？🤔
- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV1S6roB2EiL)



