---
show: step
version: 1.0 
enable_checker: true
---


# python_音频处理_midi制作

## 开始

- 我们首先要从零开始
- 安装3d软件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240527-1716775021875)

- 装哪个呢?

### 选型

- 3dmax、maya先后争霸
- blender后来居上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240527-1716775040740)

- 只有 blender是开源的
- 只能选blender

### 安装

```
sudo apt update
yes | sudo apt install blender

```

- 安装成功后
	- 可以在开始菜单找到
	- 图形 - Blender

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704718729508)

- 也可以在shell中
	- 直接运行

```
blender
```

- 在开机画面旁边 点一下
	- 进入界面

### 尝试控制3D视图面板

- 尝试控制默认镜头位置

|键鼠配合 | 操作| 效果 |
| --- |--- |---|
|<kbd>鼠标中键</kbd>| 滚动  | 镜头推拉 |
| <kbd> 鼠标中键</kbd>  |按住拖动 | 镜头旋转 |
| shift + <kbd> 鼠标中键</kbd> | 点击拖动 | 镜头平移 |


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704721017891)

- 尝试控制立方体

### 上下文菜单

- 右手 用鼠标 
	- 选中立方体
	- 选中后 会有橙色外轮廓

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725070527265)

- 左手小拇指 先按下<kbd>shift</kbd>不松手 
	- 左手大拇指 再按下 <kbd>空格</kbd>
	- 同时放开 两个按键
	- 调出上下文菜单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704720379817)

- 左手食指 按一下<kbd>g</kbd>
	- 出现 坐标轴

### 左手操作

- 键盘按键操作都由左手完成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240527-1716775290308)

- 如果不行的话
	- 就用鼠标点击侧面的移动工具

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725070695605)

- 效果是类似的

### 调整坐标

- 坐标轴出现后
	- 鼠标放在 红色的坐标轴上 
	- 红色高亮之后 出现提示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725070896491)

- 按下 右键
	- 立方体 外轮廓从 橙色 变成 白色
	- 出现 拖动光标 
	- 可以让立方体沿着 红色轴移动

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240522-1716354422213)

- 与此同时	
	- 属性调板中的Location.X变化
- 确认位置后
	- 放开鼠标 

### 三轴移动

- 将鼠标移动到绿轴位置
	- 绿轴高亮之后
	- 可以移动绿色坐标轴
	- 同时观察到y轴数值变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725071081278)

- 将鼠标移动到蓝轴位置
	- 蓝轴高亮之后
	- 可以移动蓝色坐标轴
	- 同时观察到z轴数值变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725071223157)

- 三颜色的移动轴
	- 分别代表什么呢？

### 观察Tranform

- 在左上角面板中选中 立方体
	- 观察Tranform中
	- Location的数值
- 也可以 把鼠标放到数值上
	- 鼠标变化后 按下 鼠标
	- 上下移动 
	- 修改数值
	- 观察立方体位置变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709169884300)

- 三个坐标轴
	- <span style="color:red">红</span><span style="color:green">绿</span><span style="color:blue">蓝</span> 三个颜色
	- 对应着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个坐标轴

- 可以旋转立方体吗？

### 修改旋转

- 右手 用鼠标 
	- 选中立方体
	- 选中后 会有橙色外轮廓
- 左手小拇指 先按下<kbd>shift</kbd>不松手 
	- 左手 再按下 <kbd>空格</kbd>
	- 同时放开 两个按键
	- 调出上下文菜单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725071472597)

- 左手食指 按一下<kbd>r</kbd>
	- 出现 旋转轴 
- 鼠标放到 旋转轴上
	- 颜色高亮 后 
	- 可以旋转 

### 三轴旋转

- 还是三种颜色 
	- 沿着 <span style="color:red">红</span><span style="color:green">绿</span><span style="color:blue">蓝</span> 三个坐标轴旋转
	- 分别对应着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个旋转轴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706526185664)

- 观察 Rotation 数值 
	- 确实变化了
- Scale可以修改吗？

### 修改Scale

- 右手 用鼠标 
	- 选中立方体
	- 选中后 会有橙色外轮廓
- 左手小拇指 先按下<kbd>shift</kbd>不松手 
	- 左手 再按下 <kbd>空格</kbd>
	- 同时放开 两个按键
	- 调出上下文菜单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725072447710)

- 左手食指 按一下<kbd>s</kbd>
	- 出现 缩放轴

### 缩放轴

- 鼠标放到 缩放轴上
	- 颜色高亮 后 
	- 可以缩放 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706526570671)

- 还是三种颜色 
	- 沿着 <span style="color:red">红</span><span style="color:green">绿</span><span style="color:blue">蓝</span> 三个坐标轴缩放
	- 分别对应着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个缩放轴
- 可以发现 右侧属性的 变化

### 总结

- 这次从零开始
	- 安装了blender软件
	- 并且了解了界面
- 在界面上对物体进行了操作
	- 移动 move
	- 旋转 rotate
	- 缩放 scale

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716427822360)

- 变化后的数值
	- 可以在属性调版里面观察到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725072899148)

- 整个blender的布局是如何分布的呢？🤔
- 我们下次再说！👋
