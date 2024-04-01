---
show: step
version: 1.0 
enable_checker: true
---


# python_音频处理_midi制作

## 开始

- 我们首先要从零开始
- 安装midi软件

```
sudo apt update
yes | sudo apt install blender
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704718729508)

- 也可以在shell中
	- 直接运行

```
blender
```

- 点击next进入界面

### 尝试控制3D视图面板

- 尝试控制默认镜头位置

|键鼠配合 | 实现操作|
| --- |--- |
|<kbd>鼠标中键</kbd>滚动  | 镜头推拉 |
| shift + <kbd> 鼠标中键</kbd> 点击拖动 | 镜头平移 |
| alt + <kbd> 鼠标中键</kbd> 点击拖动 | 镜头旋转 |


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704721017891)

- 尝试控制默认摄像机

### 上下文菜单

- 选中立方体后
	- 立方体会有橙色外轮廓
	- <kbd>shift</kbd> + <kbd>space</kbd>
	- 调出上下文菜单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704720379817)

- 按下<kbd>g</kbd>进行移动操作

### 调整坐标

- 坐标轴出现
	- 鼠标放在 红色的坐标轴上 按下
	- 可以让立方体沿着 红色轴移动


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706525949435)

- 三个移动轴
	- 分别代表什么呢？

### 观察Tranform

- 在左上角面板中选中 立方体
	- 观察Tranform中
	- Location的变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709169884300)

- 三个坐标轴
	- <span style="color:red">红</span><span style="color:green">绿</span><span style="color:blue">蓝</span> 三个颜色
	- 对应着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个坐标轴

- 可以旋转立方体吗？

### 修改旋转

- 选中立方体后
	- <kbd>shift</kbd> + <kbd>space</kbd>
	- 调出上下文菜单
	- 按<kbd>R</kbd>调整立方体旋转
- 还是三种颜色 
	- 沿着 <span style="color:red">红</span><span style="color:green">绿</span><span style="color:blue">蓝</span> 三个坐标轴移动
	- 分别对应着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个缩放轴


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706526185664)

- 观察 Rotation 数值 
	- 确实变化了
- Scale可以修改吗？

### 修改Scale

- 选中立方体后
	- 在 左侧的工具栏
	- 选择Scale 进行修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706526570671)

- 还是三种颜色 
	- 沿着 <span style="color:red">红</span><span style="color:green">绿</span><span style="color:blue">蓝</span> 三个坐标轴移动
	- 分别对应着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个旋转轴
- 可以发现 右侧属性的 变化
- 目前 顶行 中部显示
	- 当前 处于layout工作区

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709170696755)

- 可以 切换工作区 吗？

### blender

- 鼠标中键 选择
	- Script
	- 脚本工作区 (Work Space)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704718975933)

- 布局如下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704719043726)

### 移动边框

- 控制整体布局

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704720180146)

- 分清楚这个面板
- 可以把左侧的课程提示部分缩小

### 移动物体


- <kbd>shift</kbd> + <kbd>space</kbd>
	- 调出上下文菜单
	- 按下<kbd>G</kbd> 进行移动操作
	- 修改 Location信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704720491010)

- 观察 左下方的 信息面板
	- 给出 相应操作的 信息

### 处理信息

- 在 信息面板中 选中信息	
	- 点击 <kbd>鼠标右键</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704721174515)

|键| 实现操作|
| --- |--- |
|<kbd>x</kbd> | 删除消息 |
|  <kbd> ctrl</kbd> + <kbd> c</kbd> | 复制消息 |

- 复制消息之后可以粘贴吗？

### 粘贴消息

- 在控制台面板
	- 点击 <kbd>鼠标右键</kbd>
	-  <kbd> ctrl</kbd> + <kbd> v </kbd>粘贴消息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704721390592)

- 可以把刚才的操作
	- 在x正方向进行位移
	- 再做一遍

### 总结

- 这次从零开始
	- 安装了blender软件
	- 并且了解了界面
	- 并且在界面上对物体进行了操作
- 还有什么可以玩的呢？🤔
- 我们下次再说！👋
