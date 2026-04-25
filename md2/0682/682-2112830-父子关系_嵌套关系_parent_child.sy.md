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


#  父子关系_嵌套关系_parent_child 

## 开始

- [配套视频](https://www.bilibili.com/video/BV1wwrzBSEJf)
- 上次 研究了 旋转函数 
	- rotation_euler 旋转

- <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个轴向的旋转值构成一个列表
	- rotation_ruler[<span style="color:red">0</span>] 是 <span style="color:red">x</span>轴
	- rotation_ruler[<span style="color:green">1</span>] 是 <span style="color:green">y</span>轴
	- rotation_ruler[<span style="color:blue">2</span>] 是 <span style="color:blue">z</span>轴
- 如果一个 造型 做出来了
	- 想让他以一个整体的方式 旋转 该怎么办呢？

- 如果我想得到乘号

![图片描述](uid1190679-20240302-1709328971148.png)

- 应该如何修改代码呢？

```
import bpy
bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.context.object.rotation_euler[1] = 1.5708
```

### 修改代码

- 将 两个立方体 
	- 沿 <span style="color:green">y</span> 轴
	- 分别旋转角度 90°、270°

```
import bpy
import math
bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.context.object.rotation_euler[1] = math.pi / 4
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.context.object.rotation_euler[1] = math.pi / 4 * 3
```

- 两个立柱 
	- 各自旋转

### 结果

- 确实 得到一个乘号

![图片描述](uid1190679-20240302-1709341913056.png)

- 但是 这个乘号 是分两次 旋转过来的
	- 而不是 从加号 一次旋转 过来的
- 我想要 先做出 加号 
	- 然后 再旋转 `整个`加号
	- 可以吗？

### 从新开始

- 先回到起点
	- 新建一个blender文件
	- 尝试得到加号

```
import bpy
bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.context.object.rotation_euler[1] = 1.5708
```

- 执行代码后
	- 任务完成

![图片描述](uid1190679-20240901-1725154218464.png)

- 怎么把他们变成`一个`对象？

### 运行结果

- 场景数据视图中
	- 有两个对象

![图片描述](uid1190679-20240901-1725154280764.png)

- 选中Cube.001对象
	- 观察底部 状态栏

![图片描述](uid1190679-20240302-1709344158751.png)

- 整个Collection中
	- 顶点(Verticles) 16个 
	- 面(Faces) 12个 
	- 三角形(Triangles) 24个 
	- 物体(Objects) 2个 

- 选中的是 2个 物体中的 1个
	- Cube.001

### 按次序选择

- 先选择 Cube

![图片描述](uid1190679-20240901-1725154356664.png)

- 再 <kbd>shift</kbd> 加选择 Cube.001

![图片描述](uid1190679-20240901-1725154369556.png)

- 注意 先选择的 更明亮、鲜艳一些

```
bpy.context.selected_objects
bpy.context.active_object
bpy.context.object
```

- 在游乐场中运行

![图片描述](uid1190679-20241225-1735114421863.png) 

- 选中的对象 
	- 有两个
- 活跃的对象 
	- 有一个

### 设置关系

- 设置他们之间的关系

![图片描述](uid1190679-20240302-1709344733741.png)

- 点击3D视图的菜单
	- Object 对象
	- Parent 父母
	- Object对象

### 设置父子关系

- Cube.001(先选的) 就成为
	- Cube(后选的) 的一部分
	- 算是 Cube的 儿子 了

![图片描述](uid1190679-20240302-1709344796691.png)

- 尝试旋转父级对象

![图片描述](uid1190679-20240302-1709345045080.png)

- 旋转父亲
	- 儿子跟着转

- 这对应什么代码呢？

### 对应代码

- 观察 信息面板

![图片描述](uid1190679-20240302-1709345241150.png)

- 有这么一句

```
bpy.ops.object.parent_set(type='OBJECT')
```

- 想要纯代码完成 应该如何呢？

### 搜索 

![图片描述](uid1190679-20240302-1709345442504.png)

- phind给的例子 非常到位！！！

```
import bpy

# Get references to the objects
parent_obj = bpy.data.objects['Cube']
child_obj = bpy.data.objects['Cube.001']

# Set the parent-child relationship
child_obj.parent = parent_obj
```

- 总共分成两步
	- 首先 得到 对象
	- 然后 设置 关系

### 完善代码

- 分三步
	1. 清空场景
	2. 生成+号
	3. 设置父子关系

```
import bpy
import math
# clear current scene
bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
# create objects
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.context.object.rotation_euler[1] = math.pi / 2
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
# set parent
parent_obj = bpy.data.objects['Cube']
child_obj = bpy.data.objects['Cube.001']
child_obj.parent = parent_obj
```

- 结果如图
	- 好像变长了

![图片描述](uid1190679-20240302-1709345926787.png)

- 两个立方体重合了
- 这怎么理解？

### 观察参数

- Cube 在 <span style="color:green">y</span>轴 旋转了 90°

![图片描述](uid1190679-20240901-1725162666186.png)

- 所以立方体 竖了起来
- 再看Cube.001

### 再看参数

- Cube.001 在 
	- <span style="color:green">y</span>轴 没有旋转
	- 在<span style="color:red">x</span>轴 3倍缩放

![图片描述](uid1190679-20240901-1725162715798.png)

- 但由于Cube.001是儿子
	- 跟随着父亲Cube
		- 旋转了 90度
		- 就竖过来了
	- 又由于父级
		- 在<span style="color:red">x</span>轴 3倍缩放
		- 里外里 <span style="color:red">x</span>轴 翻了3*3倍 
		- 9倍
- 那怎么解决？

### 最后再旋转

- 最后旋转子对象
	1. 清场景
	2. 创建对象
	3. 先设置父子关系
	4. 后将子对象旋转

```
import bpy
import math
# clear current scene
bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
# create objects
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
# set parent
parent_obj = bpy.data.objects['Cube']
child_obj = bpy.data.objects['Cube.001']
child_obj.parent = parent_obj
# 将子对象 旋转
child_obj.rotation_euler[1] = math.pi / 2
```

- 运行结果

![图片描述](uid1190679-20240302-1709346677308.png)

- 父亲正确

![图片描述](uid1190679-20240302-1709346702616.png)

- 儿子 变胖？

### 观察细节

- Cube 旋转 缩放都ok

![图片描述](uid1190679-20240302-1709349079938.png)

- 虽然是后设置的父子关系
	- 但是一旦设置父子关系后
	- 子对象的缩放、旋转
	- 都受到父对象的影响

![图片描述](uid1190679-20240302-1709349113478.png)

- Cube.001 
	- 由于 成为了 儿子 
	- 导致  <span style="color:red">y</span>轴 缩放为原来的 3倍
	- 于是 成了 扁平方块

### 回忆

- 刚才那个立方体
	- 高度 过高
	- 也是同样道理

![图片描述](uid1190679-20240302-1709349671278.png)

- 因为 
	- 翻了3倍 
	- 又翻3倍 
	- 三三见九倍
- 问题是 想要 纯代码实现
	- 十字架 并且 统一旋转

### 思考关系

- 两个方块 彼此之间 
	- 互不影响
	- 互为兄弟

![图片描述](uid1190679-20240302-1709350134587.png)

- 两兄弟 
	- 跟着 一个父亲
- 父亲 带着
	- 两个子对象
	- 一拖二
- 如何建立父亲对象呢？

### 搜索

1. 封装了函数
2. 调用函数

![图片描述](uid1190679-20240302-1709350241355.png)

- 取其精华

```
import bpy

bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
empty_obj = bpy.data.objects.new("empty", None)
empty_obj.name = "Parent"
bpy.data.collections["Collection"].objects.link(empty_obj)
```

- 打开文件
	- Run Script

### 运行结果

- 真的出了一个 Parent

![图片描述](uid1190679-20240302-1709351540406.png)

- 在此基础上融合之前代码

```
import bpy
import math

# clear current scene
bpy.ops.object.select_all(action="SELECT") # 选择所有物体
bpy.ops.object.delete() # 删除选定的物体
# create objects
empty_obj = bpy.data.objects.new("empty", None)
empty_obj.name = "Parent"
bpy.data.collections["Collection"].objects.link(empty_obj)
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.context.object.parent = empty_obj
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.context.object.rotation_euler[1] = math.pi / 2
bpy.context.object.parent = empty_obj
```

###  结果

![图片描述](uid1190679-20240302-1709352370296.png)

- 只要再旋转 空对象
	- 就行了

### 观察轴向

- 选中parent

![图片描述](uid1190679-20240302-1709352463812.png)

- 尝试旋转
	- 应该是沿着 <span style="color:green">y</span> 轴
	- rotation_ruler[<span style="color:green">1</span>] 

### 旋转

```
empty_obj.rotation_euler[1] = math.pi / 4
```

- 将 空对象 旋转 
	- 90°
	- 合 π/4

![图片描述](uid1190679-20240302-1709352690741.png)

- 得到乘号

### 名字的问题

- 结构是这样的
	- 所有的都放在Collection里面
	- 有一个空对象 Parent 作为容器
	- 里面两个 Cube 对象
	- 每个对象里面 一个 Mesh

![图片描述](uid1190679-20240302-1709382194933.png)

- 父亲
	- 名字清晰
- 可以让 
	- `两兄弟`的名字 
	- 更加明确吗？

### 设置名字

```
import bpy
import math

# clear current scene
bpy.ops.object.select_all(action="SELECT") 
bpy.ops.object.delete() 
# create objects
empty_obj = bpy.data.objects.new("empty", None)
empty_obj.name = "Parent"
bpy.data.collections["Collection"].objects.link(empty_obj)
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.context.object.parent = empty_obj
bpy.context.object.name = "elder_brother"
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.context.object.rotation_euler[1] = math.pi / 2
bpy.context.object.parent = empty_obj
bpy.context.object.name = "younger_brother"
empty_obj.rotation_euler[1] = math.pi / 4
```

- 运行结果

![图片描述](uid1190679-20240302-1709383884906.png)

- 这次名字也完美了


### 总结 🤔
- 这次研究了父子关系
	- 父亲旋转 儿子跟着
	- 可以通过设置parent控制父子关系


- 可以 新建一个 空对象 None
	- 作为 抽象的虚拟爸爸
	- 然后 将 各种对象放入其中
	- 虚拟爸爸👨 可以控制很多儿子👦👦👦

![图片描述](uid1190679-20240302-1709352995470.png)

- 可以做出这样的交叉体吗？🤔
- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV1wwrzBSEJf)


