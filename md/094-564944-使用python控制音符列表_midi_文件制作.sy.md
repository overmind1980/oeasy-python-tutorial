---
show: step
version: 1.0
enable_checker: true
---

#  使用python控制音符列表_midi_文件制作 

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1SNJFzmEm9)
- 上次了解了 列表的下标索引
	- 可以是 正数 
	- 也可以是 负数

| 0   | 1   | 2   | 3   | 4   |
| --- | --- | --- | --- | --- |
| o   | e   | a   | s   | y   |
| -5  | -4  | -3  | -2  | -1  |

- 有`2`个函数 `都`可以 
	- 根据 列表项 
	- 找到 索引位置

|函数|输入|输出|区别|
|---|---|---|---|
|index|列表项| 索引值 | 找不到 就报ValueError|
| find |列表项| 索引值 |找不到 不报错 返回-1|

- 这列表 还有什么 `好玩`的 吗？🤔

### midi文件

- 我想生成 可以播放的mid文件

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250429-1745930824243) 

- 先进入 Code文件夹

```
cd Code
```

- 便于 生成mid 的 下载

### 制作midi

- 先来个 《两只老虎》的 mid

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250429-1745930954504) 

### 构建环境

```
pip install mido
```

- 先安装需要的包mido

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250314-1741932192232) 

### 复制代码

```
from mido import Message, MidiFile, MidiTrack

# 定义简谱数字与MIDI note number的映射（以C调为例）
note_mapping = {
    1: 60,  # do
    2: 62,  # re
    3: 64,  # mi
    4: 65,  # fa
    5: 67,  # sol
    6: 69,  # la
    7: 71   # si
}

# 《两只老虎》的简谱音符序列
tune_notes = [
    1, 2, 3, 1,
    1, 2, 3, 1,
    3, 4, 5, 
    3, 4, 5,
    5, 6, 5, 4, 3, 1,
    5, 6, 5, 4, 3, 1,
    2, 5, 1,
    2, 5, 1
]

# 定义每个音符的拍子（这里假设每个音符为1拍，可根据需要调整）
beat_per_note = 1
# 定义每拍的tick数（MIDI文件中时间的基本单位）
ticks_per_beat = 480

# 创建MIDI文件和音轨
mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

# 设置乐器为钢琴（program number 0）
track.append(Message('program_change', program=0, time=0))

# 遍历音符序列，生成MIDI消息
for note in tune_notes:
    if note in note_mapping:
        note_num = note_mapping[note]
        # 音符开启消息
        track.append(Message('note_on', note=note_num, velocity=64, time=0))
        # 计算音符持续的tick数
        tick_duration = int(beat_per_note * ticks_per_beat)
        # 音符关闭消息
        track.append(Message('note_off', note=note_num, velocity=64, time=tick_duration))

# 保存MIDI文件
mid.save('两只老虎.mid')
```

### 保存并运行

- 编辑m.py

```
vi m.py
```

- <kbd>"</kbd><kbd>+</kbd><kbd>p</kbd> 将代码粘过来

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250429-1745931018433) 

- 运行得到结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250422-1745308259698) 

### 下载试听

- 点击侧边栏 
	- 下载代码
		- 把Code文件夹
		- 打包下载

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250422-1745310112318) 

- 下载之后 双击解压

### windows下打开mid

- 在windows系统中 
	- 用媒体播放器 打开

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742032092598)

### mac下打开mid

- mac使用库乐队打开

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742032138720) 

- 在蓝桥上 直接看看 
	- 这mid 长`啥`样 
	- 可以 吗？

### 安装midi软件

```
sudo apt update
yes | sudo apt install rosegarden
```

- 安装jackd2
	- 选 `是` 可以降低延迟

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250422-1745308687457) 

- 装好 就可以运行了

### rosegarden

- 可以在开始菜单中 
	- 找到 rosegarden 点击

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704697245143)

- 也可以在 终端 直接运行

```
rosegarden &
```

### 运行效果

- 出现 软件的界面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704698308051)


### 打开midi

- 运行之后
	- 文件 - 导入
	- 两只老虎.mid

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704698935734)

- 在音轨上 
	- 右键 查看 钢琴卷帘

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250429-1745931551592) 

### 钢琴卷帘效果

- midi文件长成这个样子
	- 一段段 的 黄色格子
	- 对应着 一个个音符
	- 可以 上下左右 移动

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250422-1745307648480) 

- 音符的 上下位置 代表什么？

### 音高

- 上下位置 代表 音高
	- 钢琴卷帘 总是 循环
		- 一会儿 两个黑键 像`筷子`
		- 一会儿 三个黑键 像`叉子`
	- 筷子 下面的 是 
		- 123
	- 叉子 下面的 是
		- 4567

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250402-1743601128753) 

- 这七个音 1234567 音高
	- 构成了 大调音阶
- 大调音阶 写进代码 了吗？

### 分析代码

- 将 大调音阶 
	- 编码为 midi音高

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250319-1742376616909)

|音级对|黑键存在性|半音差|
|---|---|---|
|1、2|有|2|
|2、3|有|2|
|3、4|无|1|

- 音符 具体是 怎么插入的呢？

### 旋律列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250314-1741933442659) 

- 音符 放在 旋律列表 里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250314-1741933474862)

- 这 旋律列表 放`哪儿` 呢？

### 基础框架

- 建立 mid文件
	- 建立 mid音轨
	- 将 音轨 附加进 mid文件	
- 再把 旋律列表中的音符 
	- 放到 音轨 上

```
# 创建MIDI文件和音轨
mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

# 设置乐器为钢琴（program number 0）
track.append(Message('program_change', program=0, time=0))
```

- 怎么把 旋律列表中的音符 `放`到 音轨 上呢？

### 生成旋律

```
# 《两只老虎》的简谱音符序列
tune_notes = [
    1, 2, 3, 1,
    1, 2, 3, 1,
    3, 4, 5, 
    3, 4, 5,
    5, 6, 5, 4, 3, 1,
    5, 6, 5, 4, 3, 1,
    2, 5, 1,
    2, 5, 1
]
```

- 遍历 旋律列表
	- 每个列表项 都是 音符音高
	- 将 音符 按次序 放入 音轨

```
# 遍历音符序列，生成MIDI消息
for note in tune_notes:
    if note in note_mapping:
        note_num = note_mapping[note]
        # 音符开启消息
        track.append(Message('note_on', note=note_num, velocity=64, time=0))
        # 计算音符持续的tick数
        tick_duration = int(beat_per_note * ticks_per_beat)
        # 音符关闭消息
        track.append(Message('note_off', note=note_num, velocity=64, time=tick_duration))

# 保存MIDI文件
mid.save('两只老虎.mid')
```

- 目前 音符的 `音高` 没有问题
	- 但是 `时值`有问题

### 继续提要求

- 让 ai 根据 简谱照片
	- 生成 midi文件

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250430-1745965694905) 

- 根据 图片
	- 从C大调 变成 F大调

### 文件分析

- 主音 变了
	- 从 1 = C (60)
	- 变成了 1 = F(65)
	- 改从 65 开始 了

- 每个音符 
	- 除了 音高
	- 还增加了 时值

```python
from mido import Message, MidiFile, MidiTrack

# 音符对应字典，按简谱 1 - 7 对应 F 调下的音符（1=F 时的对应）
NOTE_MAP = {
    '1': 65, '2': 67, '3': 69, '4': 70,
    '5': 72, '6': 74, '7': 76
}

# 根据简谱和对应时值构建旋律，这里 '-' 表示延长一拍
MELODY = [
    ['1', 1], ['2', 1], ['3', 1], ['1', 1],  # 两只老虎
    ['1', 1], ['2', 1], ['3', 1], ['1', 1],  # 两只老虎
    ['3', 1], ['4', 1], ['5', 2],  # 跑的快
    ['3', 1], ['4', 1], ['5', 2],  # 跑得快
    ['5', 0.5], ['6', 0.5], ['5', 0.5], ['4', 0.5], ['3', 1], ['1', 1],  # 一只没有眼睛
    ['5', 0.5], ['6', 0.5], ['5', 0.5], ['4', 0.5], ['3', 1], ['1', 1],  # 一只没有尾巴
    ['2', 1], ['5', 1], ['1', 2],  # 真奇怪
    ['2', 1], ['5', 1], ['1', 2],  # 真奇怪
    ['2', 1], ['5', 1], ['1', 2],  # 真奇怪
    ['2', 1], ['5', 1], ['1', 2]  # 真奇怪
]

mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

ticks_per_beat = 480  # 标准 MIDI 时钟，每拍 480 ticks
current_time = 0  # 时间增量

for note_info in MELODY:
    note_name = note_info[0]
    beats = note_info[1]
    if note_name == '-':
        # 处理延长音，增加时间增量
        current_time += int(beats * ticks_per_beat)
        continue
    note = NOTE_MAP[note_name]
    duration = int(beats * ticks_per_beat)
    # 发送音符开启（当前时间增量）和关闭（持续时间）
    track.append(Message('note_on', note=note, velocity=64, time=current_time))
    track.append(Message('note_off', note=note, velocity=64, time=duration))
    current_time = 0  # 每个音符独立，无间隔

mid.save('two_tigers_f调.mid')
print("已生成《两只老虎》F 调 MIDI 文件：two_tigers_f调.mid")
```

- 运行起来 听听效果
	- 最后的 两个 So(5) 
	- 应该是 是 低音So(5)

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250516-1747356581782) 


### 增加音阶

- 低音So(5) 要求 能够表示出 
	- 不同八度 的 音阶

```
from mido import Message, MidiFile, MidiTrack

# 音符对应字典，按简谱 1 - 7 对应 F 调下的音符（1=F 时的对应）
# 扩展加入高低音的映射
NOTE_MAP = {
    '1': 65, '2': 67, '3': 69, '4': 70,
    '5': 72, '6': 74, '7': 76,
    '1_': 53, '2_': 55, '3_': 57, '4_': 58,
    '5_': 60, '6_': 62, '7_': 64,  # 低音
    '1^': 77, '2^': 79, '3^': 81, '4^': 82,
    '5^': 84, '6^': 86, '7^': 88  # 高音
}

# 根据简谱和对应时值构建旋律，这里 '-' 表示延长一拍
MELODY = [
    ['1', 1], ['2', 1], ['3', 1], ['1', 1],  # 两只老虎
    ['1', 1], ['2', 1], ['3', 1], ['1', 1],  # 两只老虎
    ['3', 1], ['4', 1], ['5', 2],  # 跑的快
    ['3', 1], ['4', 1], ['5', 2],  # 跑得快
    ['5', 0.5], ['6', 0.5], ['5', 0.5], ['4', 0.5], ['3', 1], ['1', 1],  # 一只没有眼睛
    ['5', 0.5], ['6', 0.5], ['5', 0.5], ['4', 0.5], ['3', 1], ['1', 1],  # 一只没有尾巴
    ['2', 1], ['5_', 1], ['1', 2],  # re so do，so 改为低音 so
    ['2', 1], ['5_', 1], ['1', 2]  # re so do，so 改为低音 so
]

mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

ticks_per_beat = 480  # 标准 MIDI 时钟，每拍 480 ticks
current_time = 0  # 时间增量

for note_info in MELODY:
    note_name = note_info[0]
    beats = note_info[1]
    if note_name == '-':
        # 处理延长音，增加时间增量
        current_time += int(beats * ticks_per_beat)
        continue
    note = NOTE_MAP[note_name]
    duration = int(beats * ticks_per_beat)
    # 发送音符开启（当前时间增量）和关闭（持续时间）
    track.append(Message('note_on', note=note, velocity=64, time=current_time))
    track.append(Message('note_off', note=note, velocity=64, time=duration))
    current_time = 0  # 每个音符独立，无间隔

mid.save('two_tigers_f调.mid')
print("已生成《两只老虎》F 调 MIDI 文件：two_tigers_f调.mid")
```

### 最终mid

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250516-1747358379718) 

### 总结

- 这次研究了 midi音乐的制作
	- 使用 旋律列表 生成音乐

```
# 《两只老虎》的音符序列
melody = [
    '1', '2', '3', '1',...
]
```

- 这有什么用呢？
	- 比如 按照调性  生成 随机旋律？🤔

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742032535099) 

- 除了 midi音乐 旋律列表 之外
	- 列表 还有 `啥` 实际应用 吗？？？🤔
- 下次再说 👋
- [配套视频](https://www.bilibili.com/video/BV1SNJFzmEm9)
