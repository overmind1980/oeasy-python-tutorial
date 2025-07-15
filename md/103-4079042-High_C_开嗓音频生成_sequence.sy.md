---
show: step
version: 1.0
enable_checker: true
---

#  回环诗_旋律模进_开嗓音频生成_sequence 

## 回忆

- 上次 研究了 `回文诗`
	- 对称 的 文字
	- 可以 用 列表反转 判断

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4079036/uid1190679-20250513-1747143371885) 

- 这次 研究了 `开嗓旋律`
	- 对称 的 音符 
	- 可以 用 列表反转 判断

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83396/uid1190679-20250508-1746671305810) 

- 可以把 `回文诗` 和 `开嗓旋律` 结合起来吗？🤔

- 怎么 才能 唱出 歌词 呢？

### 回文开嗓歌

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250512-1747015795671) 

- 可以下载x-studio
	- https://xstudio.music.163.com/

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250512-1747046244403) 

### 具体过程

- 让 虚拟歌姬 唱歌 应该分两步
	1. 在软件中 导入 开嗓旋律 的 mid
	2. 然后 双击音符 写下歌词

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250512-1747046148518) 

- 我们先去 生成mid

### 回忆代码

- 使用代码生成 
	- 开嗓mid
	- warm_up.mid

```
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
mid.save('warm_up.mid')
```

- 首先 运行 程序
	- 生成 midi

### 配合

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250510-1746865410039) 

- 可以让 开嗓midi越开越高吗？

### 手动过程

- 先复制一个开嗓 片段

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250513-1747143879137) 

- 然后将 片段 上移 一个半音

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250513-1747143930175) 

- 这样就得到 2段 上升的 开嗓音频

### 更多

- 1段 变 2段

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250513-1747143996319) 

- 2段 变 4段

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250513-1747144034155) 

- 4段 变 8段

### 继续

- 8段 变 16段

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250513-1747144110310) 

- 删除 其中3段
	- 还剩 13段
	- 开始位置 从c4 到 c5
	- 开嗓 开到 `High C`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250514-1747184956920) 

- 想用代码 实现这个mid

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250508-1746713313645) 

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

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250508-1746714374560) 

- 要整合成一个

### 要求

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250508-1746714513254) 

```
from mido import Message, MidiFile, MidiTrack, MetaMessage

base_note = 60       # C4
note_offsets = [0, 2, 4, 5, 7, 5, 4, 2, 0]  # 123454321音程
bpm = 120
ticks_per_beat = 480
time_per_beat = 60 / bpm
time_per_tick = time_per_beat / ticks_per_beat
note_duration = 0.5   # 前8音时长，最后音4拍
track_separator = int(2 * time_per_beat / time_per_tick)  # 调间间隔2拍

mid = MidiFile(ticks_per_beat=ticks_per_beat)
track = MidiTrack()
mid.tracks.append(track)

# 添加速度控制（可选）
track.append(MetaMessage('set_tempo', tempo=int(bpm * 500000 / 60)))  # 转换为微秒/拍

for transpose in range(12):  # 升0~11半音（C到B大调）
    current_note = base_note + transpose
    for i, offset in enumerate(note_offsets):
        note_num = current_note + offset
        # 音符按下
        track.append(Message('note_on', note=note_num, velocity=64, time=0))
        # 计算时长
        if i == len(note_offsets) - 1:
            tick_duration = int(4 * time_per_beat / time_per_tick)
        else:
            tick_duration = int(note_duration / time_per_tick)
        # 音符松开
        track.append(Message('note_off', note_num, velocity=64, time=tick_duration))
    # 调间间隔（2拍休止符）
    track.append(Message('note_off', note=0, velocity=0, time=track_separator))  # 空事件表示休止

mid.save('all_scales_sequential.mid')
print("合并后的MIDI文件已生成（同一音轨顺序演奏）")
```

### 总结🤔

- 终于生成了 升到 HighC 的 开嗓mid

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4074186/uid1190679-20250508-1746715111334) 

- 有点像 骨牌

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4079042/uid1190679-20250514-1747185453953) 

- 文字 也可以 层层递进 吗？
- 下次再说 👋
