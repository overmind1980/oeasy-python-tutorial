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

- 目前第一 blender 还是开源的
	- 就选blender😊

### 安装

```
sudo apt update
yes | sudo apt install blender

```

- 安装

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1817244/uid1190679-20241209-1733716807391) 

### 安装成功后

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

### 控制语言和字体比例

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1817244/uid1190679-20241213-1734089800129) 

- 在Edit(编辑)中
	- 找到preferences(预设)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1817244/uid1190679-20241213-1734089948247) 

- 修改这三项设置

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
	- 选中后 会有`橙色`外轮廓

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725070527265)

### 选择移动工具

- 左手小拇指 先按下<kbd>shift</kbd>不松手 
	- 左手大拇指 再按下 <kbd>空格</kbd>
	- 同时放开 两个按键
	- 调出上下文菜单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704720379817)

- 左手食指 按一下<kbd>g</kbd>
	- 出现 `坐标轴`

### 左手操作

- 键盘按键操作
	- 由左手完成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240527-1716775290308)

- 如果不行的话
	- 就用鼠标点击侧面的移动工具

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725070695605)

- 效果一样

### 调整坐标

- 坐标轴出现后
	- 鼠标放在 暗红色的坐标轴上 
	- 坐标轴变成 亮红色之后 出现提示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725070896491)

### 具体移动

- 按下 右键
	- 立方体 外轮廓从 橙色 变成 白色
	- 出现 拖动光标 
	- 可以让立方体沿着 红色轴移动

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1817244/uid1190679-20241213-1734094063248) 

- 与此同时	
	- 观察 上图红框中 
	- 属性调板的Location.X变化
- 确认位置后
	- 放开鼠标 

### 三轴移动

- 将鼠标移动到 暗绿轴 位置
	- 绿轴高亮之后
	- 可以移动 绿色坐标轴
	- 同时观察到 y轴数值 变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725071081278)

- 将鼠标 移动到 蓝轴位置
	- 蓝轴高亮 之后
	- 可以 移动 蓝色坐标轴
	- 同时观察到 z轴数值变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725071223157)

- `红绿蓝`的 移动轴
	- 分别代表什么呢？

### 观察Tranform

- 在 左上角面板中 选中 立方体
	- Cube为黄色显示
- 观察Tranform中
	- Location的数值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240229-1709169884300)

- 可以 把鼠标放到数值上
	- 鼠标变化后 按下 鼠标
	- 上下移动 
	- 修改数值
	- 观察立方体位置变化
- 三个坐标轴
	- <span style="color:red">红</span><span style="color:green">绿</span><span style="color:blue">蓝</span> 三个颜色
	- 对应着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个坐标轴

- 可以旋转立方体吗？

### 修改旋转

- 右手 用鼠标 
	- 选中立方体
	- 选中后 会有橙色外轮廓
- 左手小拇指 先按下<kbd>shift</kbd>不松手 
	- 左手拇指 再按下 <kbd>空格</kbd>
	- 同时放开 两个按键
	- 调出上下文菜单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725071472597)

- 左手食指 按一下<kbd>r</kbd>
	- 意味着 `r`otation
	- 出现 旋转轴 
- 鼠标放到 红色旋转轴上
	- 红旋转轴高亮 后 
	- 可以旋转 

### 三轴旋转

- 还是三种颜色 
	- 沿着 <span style="color:red">红</span><span style="color:green">绿</span><span style="color:blue">蓝</span> 三个坐标轴旋转
	- 分别对应着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个旋转轴

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1817244/uid1190679-20241213-1734094325922) 

- 观察 `R`otation 数值 
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
	- `s`cale
	- 出现 缩放轴

### 缩放轴

- 鼠标放到 缩放轴上
	- 颜色高亮 后 
	- 可以缩放 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1817244/uid1190679-20241213-1734094436596) 

- 还是三种颜色 
	- 沿着 <span style="color:red">红</span><span style="color:green">绿</span><span style="color:blue">蓝</span> 三个坐标轴缩放
	- 分别对应着 <span style="color:red">x</span><span style="color:green">y</span><span style="color:blue">z</span> 三个缩放轴
- 可以发现 右侧`S`cale属性的 变化

### 总结

- 这次从零开始
	- 安装了blender软件
	- 并且了解了界面
- 在界面上 对物体 进行操作
	- 移动 move
	- 旋转 rotate
	- 缩放 scale

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240523-1716427822360)

- 变化后的 数值
	- 在属性调版 里面 可以看到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240831-1725072899148)

- 整个blender的布局 是 `如何`分布的 呢？🤔
- 我们下次再说！👋
	- `s`cale

