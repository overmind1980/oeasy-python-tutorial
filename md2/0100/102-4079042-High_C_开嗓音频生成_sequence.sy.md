#  回环诗_旋律模进_开嗓音频生成_sequence 

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1WZy1BjEbA)
- 上次 研究了 `回文诗`
	- 对称 的 文字 
	- 可以用 列表反转 的 方式
	- 进行判断

![图片描述](../0101/uid1190679-20250404-1743754237735.png) 

- 音符也可以 实现 类似于 回文的效果
	- 卡农螃蟹曲式

![图片描述](../0101/uid1190679-20250504-1746367452536.png)

- 能做段 简单的 `回文音乐` 吗？🤔
- 怎么 才能 唱出 歌词 呢？

### 回文开嗓歌

![图片描述](../0102/uid1190679-20250512-1747015795671.png) 

- 可以下载x-studio
	- https://xstudio.music.163.com/

![图片描述](../0102/uid1190679-20250512-1747046244403.png) 

### 具体过程

- 让 虚拟歌姬 唱歌 应该分两步
	1. 在软件中 导入 开嗓旋律 的 mid
	2. 然后 右键音符 编辑全部歌词

![图片描述](../0102/uid1190679-20250512-1747046148518.png) 

- 去 生成mid

### 哼鸣练习
- 曲式的对称 很像 回文的对称 

![图片描述](../0102/uid1190679-20250504-1746366694485.png) 

- 配合回文

![图片描述](../0102/uid1190679-20250510-1746851358666.png) 

- 能用代码 生成这个mid吗？

### 提示词

![图片描述](../0102/uid1190679-20251018-1760791356544.png)

### ide启动

- 首先新建文件
	- m.py

![图片描述](../0102/uid1190679-20251016-1760612928559.png) 

### humming

```python
from mido import Message, MidiFile, MidiTrack

# 创建一个新的MIDI文件和音轨
mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

# 定义C4对应的MIDI音符编号
c4_note = 60

# 定义每个音符的持续时间（这里设为0.5秒，可按需调整）
note_duration = 0.5
# 定义BPM（每分钟节拍数），控制节奏速度
bpm = 120
# 计算每拍对应的时间（秒）
tick_per_beat = mid.ticks_per_beat
time_per_beat = 60 / bpm
time_per_tick = time_per_beat / tick_per_beat

# 定义“哆来咪发嗦发咪来哆”对应的音符偏移量
# 基于C4（60号音符），在C大调中，各音符偏移量对应关系
note_offsets = [0, 2, 4, 5, 7, 5, 4, 2, 0]

# 遍历音符偏移量来添加音符事件到音轨
for offset in note_offsets:
    note_number = c4_note + offset
    # 按下音符事件
    track.append(Message('note_on', note=note_number, velocity=64, time=0))
    # 计算音符持续时间对应的tick数
    tick_duration = int(note_duration / time_per_tick)
    # 松开音符事件
    track.append(Message('note_off', note=note_number, velocity=64, time=tick_duration))

# 保存MIDI文件
mid.save('warmup.mid')
```

- 注意哼鸣练习中的 列表
	- 依然是 回文结构的

### 下载mid

![图片描述](../0102/uid1190679-20251018-1760793411917.png) 

- 在线编辑midi
	- https://midi-to-gcode.bambulab.com/edit

### 修改效果

- 选择 文件-打开
	- 打开 刚下好的mid文件
- 目前是 4/4 拍
	- 以 4分音符 为 1拍
	- 每小节 有 4拍

![图片描述](../0102/uid1190679-20251016-1760620882997.png) 

- 最后一个小节
	- 只有一个 四分音符 
	- 应该是 全音符
	- 时长4拍
	- 独占一个小节

### 修改

![图片描述](../0102/uid1190679-20250508-1746671071965.png) 

```python
from mido import Message, MidiFile, MidiTrack

# 创建一个新的MIDI文件和音轨
mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

# 定义C4对应的MIDI音符编号
c4_note = 60
# 定义除最后一个音符外其他音符的持续时间（这里设为0.5秒，可按需调整）
note_duration = 0.5
# 定义BPM（每分钟节拍数），控制节奏速度
bpm = 120
# 计算每拍对应的时间（秒）
tick_per_beat = mid.ticks_per_beat
time_per_beat = 60 / bpm
time_per_tick = time_per_beat / tick_per_beat

# 定义“哆来咪发嗦发咪来哆”对应的音符偏移量
# 基于C4（60号音符），在C大调中，各音符偏移量对应关系
note_offsets = [0, 2, 4, 5, 7, 5, 4, 2, 0]

# 遍历音符偏移量来添加音符事件到音轨
for i, offset in enumerate(note_offsets[:-1]):
    note_number = c4_note + offset
    # 按下音符事件
    track.append(Message('note_on', note=note_number, velocity=64, time=0))
    # 计算音符持续时间对应的tick数
    tick_duration = int(note_duration / time_per_tick)
    # 松开音符事件
    track.append(Message('note_off', note=note_number, velocity=64, time=tick_duration))

# 处理最后一个音符（全音符，四拍）
last_offset = note_offsets[-1]
last_note_number = c4_note + last_offset
# 按下最后一个音符事件
track.append(Message('note_on', note=last_note_number, velocity=64, time=0))
# 全音符时长对应的tick数（四拍）
tick_duration_for_last = int(4 * time_per_beat / time_per_tick)
# 松开最后一个音符事件
track.append(Message('note_off', note=last_note_number, velocity=64, time=tick_duration_for_last))

# 保存MIDI文件
mid.save('warmup2.mid')
```

### 配合

- 演唱一下

![图片描述](../0102/uid1190679-20250510-1746865410039.png) 

- 可以让 开嗓midi越开越高吗？

![图片描述](../0102/uid1190679-20251018-1760787933514.png) 

### 手动过程

- 先复制一个开嗓 片段

![图片描述](../0102/uid1190679-20250513-1747143879137.png) 

- 然后将 片段 上移 一个半音
	- 得到 C#大调 的 哼鸣练习

![图片描述](../0102/uid1190679-20250513-1747143930175.png) 

- 这样 第二段哼鸣 就升高了半音

### 更多

- 1段 变 2段

![图片描述](../0102/uid1190679-20250513-1747143996319.png) 

- 2段 变 4段

![图片描述](../0102/uid1190679-20250513-1747144034155.png) 

- 4段 变 8段

### 继续

- 8段 变 16段

![图片描述](../0102/uid1190679-20250513-1747144110310.png) 

- 删除 其中3段
	- 还剩 13段
- 从c开始
	- 到c结束
	- 开嗓 

![图片描述](../0102/uid1190679-20250514-1747184956920.png) 

- 想用代码 实现这个mid

### 提问

![图片描述](../0102/uid1190679-20250508-1746713313645.png) 

```
from mido import Message, MidiFile, MidiTrack

# 基础参数
base_note = 60       # C4的MIDI音符编号（60对应C4）
note_offsets = [0, 2, 4, 5, 7, 5, 4, 2, 0]  # 123454321的音程偏移（C大调）
bpm = 120
ticks_per_beat = 480  # 可自定义MIDI精度
time_per_beat = 60 / bpm
time_per_tick = time_per_beat / ticks_per_beat
note_duration = 0.5   # 前8个音符时长（秒），最后一个音为4拍

# 生成12个半音调的MIDI文件
for transpose in range(13):  # 0（原调）到12（升12半音）
    mid = MidiFile(ticks_per_beat=ticks_per_beat)
    track = MidiTrack()
    mid.tracks.append(track)
    
    # 添加调号（仅为示意，实际MIDI调号需用SysEx信息，此处通过音符移位实现）
    current_note = base_note + transpose  # 基础音升高transpose个半音
    
    for i, offset in enumerate(note_offsets):
        note_number = current_note + offset
        # 音符按下
        track.append(Message('note_on', note=note_number, velocity=64, time=0))
        # 计算时长（最后一个音为4拍）
        if i == len(note_offsets) - 1:
            tick_duration = int(4 * time_per_beat / time_per_tick)
        else:
            tick_duration = int(note_duration / time_per_tick)
        # 音符松开
        track.append(Message('note_off', note=note_number, velocity=64, time=tick_duration))
    
    # 保存文件（调名对应：C, C#, D, ..., B）
    sharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'][transpose]
    mid.save(f'scale_{sharps}_major.mid')
    print(f"已生成 {sharps} 大调音阶 MIDI 文件")
```

### 文件

- 生成了好多midi文件

![图片描述](../0102/uid1190679-20250508-1746714374560.png) 

- 大调 是啥意思？

### 总结🤔

- 这次我们 制作了回文音符序列
	- 123454321

![图片描述](../0102/uid1190679-20250510-1746865410039.png) 

- 要整合成一个
	- 序列不断升级 
		- 从c开始
		- 到c结束

![图片描述](../0102/uid1190679-20250514-1747184956920.png) 

- 可以整合吗？🤔
- 下次再说 👋
- [配套视频](https://www.bilibili.com/video/BV1WZy1BjEbA)
