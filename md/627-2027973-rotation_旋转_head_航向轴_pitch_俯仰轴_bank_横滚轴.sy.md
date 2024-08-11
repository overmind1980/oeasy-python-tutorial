---
show: step
version: 1.0 
enable_checker: true
---


# python_blender

## 开始

- 上次研究了location参数的设置
	- (<span style="color:red">1</span>,<span style="color:green">2</span>,<span style="color:blue">3</span>) 代表着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个轴数值
	- 分别是(<span style="color:red">1m</span>,<span style="color:green">2m</span>,<span style="color:blue">3m</span>) 
	- 定义了对象的位置
- 除了location参数之外
	- primitive_cube_add 函数
	- 还有一个 rotation参数
	- 这个参数怎么用呢？

### 构建环境

- 选中已有的三个对象
	- <kbd>x</kbd> 删除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709258594627)

- 切换到 script工作区
	- 如果找不到 script工作群
	- 可以把左侧提示先关闭再找

### 建立立方体

- <kbd>shift</kbd> +  <kbd>a</kbd> 
	- 建立一个立方体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709258838346)

### 修改scale

- 选中立方体
	- 找到scale x 属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709259367212)

- 设置为3

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709259405578)

- 可以看到 
	- 立方体在x方向
	- 缩放为原来三倍

### 复制代码

- 在信息窗口 复制代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709259703365)

- 在终端窗口粘贴
	- 然后加一个回车

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709259789246)

- 第二句有问题

### 观察结果

- 虽然第二句有问题
	- 但是确实能够得到一个Cube.001

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709259856051)

### 观察属性

- 而且 Cube.001的scale属性 已经设置为3

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709260060028)

- 说明 第二句不影响 最终结果

```
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
```

- <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个轴的缩放值构成一个列表
	- scale[<span style="color:red">0</span>] 是 <span style="color:red">x</span>轴
	- scale[<span style="color:green">1</span>] 是 <span style="color:green">y</span>轴
	- scale[<span style="color:blue">2</span>] 是 <span style="color:blue">z</span>轴
- 尝试旋转此立方体

### 旋转立方体

- 选中立方体
	- <kbd>shift</kbd> +  <kbd>空格</kbd>  之后  <kbd>r</kbd> 
	- 可以 旋转立方体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709260417478)

- 总共有三个轴向
	- 我想沿着绿色的轴向旋转

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709260463873)

- 选中绿色
	- 坐标轴高亮
	- 进行旋转

### 旋转结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709260523852)

- 立方体确实已经旋转

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709260542471)

- Y值也进行了改变
- 如果直接修改Y值为90度呢？

### 修改数值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709260608571)

- 观察效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709260641608)

### 控制默认摄影机角度

- 按下鼠标中键 
	- 控制默认摄影机角度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709260682871)

- 当前形状是一个十字架

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709260710813)

- 观察信息面板
	- 原来旋转就是改变object.rotation_euler
- <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个轴向的旋转值构成一个列表
	- rotation_euler[<span style="color:red">0</span>] 是 <span style="color:red">x</span>轴
	- rotation_euler[<span style="color:green">1</span>] 是 <span style="color:green">y</span>轴
	- rotation_euler[<span style="color:blue">2</span>] 是 <span style="color:blue">z</span>轴
- 这个1.5708怎么来的呢？

### 角度 弧度

- 弧度制 是 
	- 一种 计算角度的 方法
	- 将和半径相等的弧长对应的角度定义为1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240302-1709341131723)

- 一周 
	- 角度制 360°
	- 弧度制 2*π ≈ 6.28
- 直角
	- 角度制 90°
	- 弧度制 π/2 ≈ 1.5708

### 尝试运行代码

```
import bpy
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.context.object.scale[0] = 3
bpy.context.object.rotation_euler[1] = 1.5708
```

- 这段代码 应该是
	- 先得到一个scale(3,1,1)的立方体
	- 再得到一个scale(3,1,1)的立方体
	- 将后面立方体沿着y轴旋转 90度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709262392544)

- 将此文件 保存为1.py

### 加载文件

- 清空 
	- 3D视图面板中的的所有对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709262421315)

- 加载之后运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709262444882)

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709262470610)

- 十字架 确实出现了！！！
- 再点运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709262507817)

- 又出来一个十字架
- 想要先清空3D视图

### 新代码

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

- 新代码 先清屏幕的功能
	- 再 插入 十字架

### 新形状

- 如果 想做 
	- 下面这个造型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709303519122)

- 该如何修改代码

### 总结 🤔
- 这次 研究了 旋转函数 
	- rotation_euler 旋转

- <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个轴向的旋转值构成一个列表
	- rotation_euler[<span style="color:red">0</span>] 是 <span style="color:red">x</span>轴
	- rotation_euler[<span style="color:green">1</span>] 是 <span style="color:green">y</span>轴
	- rotation_euler[<span style="color:blue">2</span>] 是 <span style="color:blue">z</span>轴
- 如果一个 造型 做出来了
	- 想让他以一个整体的方式 旋转 该怎么办呢？

- 如果我想得到乘号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240302-1709328971148)

- 应该如何修改代码呢？
- 我们下次再说！👋
