---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 索引

## 回忆

- 上次了解了 列表的下标索引
	- 可以是 正数 
	- 也可以是 负数

|函数名|作用|区别|
|---|---|---|
|index|根据 列表项 找到 索引 | 找不到 报ValueError|
| find |同上|找不到 返回-1|

```
list("oeasy")
str(list("oeasy"))
```

- 这列表 还有什么 好玩的 应用 吗？🤔

### 制作midi

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250314-1741932010447) 

```
import mido
from mido import Message, MidiFile, MidiTrack

# 定义音符与对应的 MIDI 音高
notes = {
    '1': 60,  # C4
    '2': 62,  # D4
    '3': 64,  # E4
    '4': 65,  # F4
    '5': 67,  # G4
    '6': 69,  # A4
    '7': 71,  # B4
}

# 创建 MIDI 文件和音轨
mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

# 设置速度（120 BPM）
tempo = mido.bpm2tempo(120)
track.append(mido.MetaMessage('set_tempo', tempo=tempo))
mid.ticks_per_beat = 480

# 每个音符的持续时间（以节拍为单位）
note_duration = 0.5

# 《两只老虎》的音符序列
melody = [
    '1', '2', '3', '1',
    '1', '2', '3', '1',
    '3', '4', '5',
    '3', '4', '5',
    '5', '6', '5', '4', '3', '1',
    '5', '6', '5', '4', '3', '1',
    '2', '5', '1',
    '2', '5', '1'
]

# 逐个添加音符到音轨
for note in melody:
    if note in notes:
        pitch = notes[note]
        on_time = int(note_duration * mid.ticks_per_beat / 2)
        off_time = int(note_duration * mid.ticks_per_beat / 2)
        # 音符开启消息
        track.append(Message('note_on', note=pitch, velocity=64, time=on_time))
        # 音符关闭消息
        track.append(Message('note_off', note=pitch, velocity=64, time=off_time))

# 保存 MIDI 文件
mid.save('test.mid')
```

### 构建环境

- 进入Code文件夹
	- 稍后可以 将音频下载

```
cd Code
```

- 安装需要的包mido

```
pip install mido
```

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250314-1741932192232) 

### 保存并运行

- 运行得到结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250319-1742376313113) 

- 能否看到这个midi文件什么样子呢？

### 安装midi软件

```
sudo apt update
yes | sudo apt install rosegarden
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704697245143)

- 也可以直接运行

### rosegarden

```
rosegarden
```

- 运行成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704698308051)

### 打开midi

- 运行之后
	- 尝试打开两只老虎.mid

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240108-1704698935734)

- 右键 查看 钢琴卷帘

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742030308448) 

- 能否分析一下

### 认识钢琴卷帘

- 钢琴 总是 循环
	- 两个黑键 像 筷子
	- 三个黑键 像 叉子

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250402-1743601128753) 

- 筷子 下面的 是 
	- 123
- 叉子 下面的 是
	- 4567

### 分析代码

- 将 大调音阶 
	- 编码为 midi音高

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250319-1742376616909)

### 基础框架

- 建立 mid文件
	-  建立midi音轨
	-  将音轨 附加到 midi文件

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250314-1741932701415) 

- 设置 bpm 为 120
	- 每个ticks 的 节拍为480

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250314-1741933131938) 

### 具体的旋律

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250314-1741933474862)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250314-1741933442659) 

### 具体音符

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742030550949) 

- 每个音符前面总空一块

### 控制音序器

- 对于 时序上的 每一个音符
	- 先找到 音高pitch
	- 再设置 音符的 开始时间 
	- 最后设置 音符的结束时间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250314-1741933518301) 

- 尝试修改 音符之前 不需要延迟
	- 直接 为0

```
for note in melody:
    if note in notes:
        pitch = notes[note]
        on_time = 0
        off_time = int(note_duration * mid.ticks_per_beat)
        # 音符开启消息
        track.append(Message('note_on', note=pitch, velocity=64, time=on_time))
        # 音符关闭消息
        track.append(Message('note_off', note=pitch, velocity=64, time=off_time))
```

### 运行导出

- 导出之后
	- 重新导入midi文件

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742031142253) 

- 设置 4/4拍
	- 以四分音符 为1拍
	- 每小节 有 4拍

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742030867892) 

- 音符之间的 间隔
	- 消失了
- 但是一个小节
	- 有八个八分音符

### 四分音符

- 修改音符时长
	- 从0.5修改为1

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742031311447) 

- 重新载入midi

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742031448505)

- 这回一个小节设置好了

### 下载试听

- 下载到本地

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742032092598)

- windows使用媒体播放器打开

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742032138720) 

- mac使用库乐队打开

### 总结

- 这次研究了 midi音乐的制作
	- 利用的是列表

```
# 《两只老虎》的音符序列
melody = [
    '1', '2', '3', '1',...
]
```

- 可以 写其他歌曲吗？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742032535099) 

- 或许可以随机生成旋律？🤔
	- 有时间 自己探索一下吧！
- 列表还有啥应用？？？🤔
- 下次再说 👋
