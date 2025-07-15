---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 嵌套 embedded

## 回忆

- 上次我们 又了解了 排序
	- 最初的排序 list.sort
	- 乱序 list.shuffle
- 无序有序都用
	- 无序带来混乱的快乐
	- 有序带来理性的方便
- 新排序 sorted
	- 可以产生一个新的列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031965491) 

- 目前 列表 都是 一维的 
- 可以 有`更高维度`的列表吗？ 🤔

### 去游乐场

- 分析append和extend的区别

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669691015206)

- append
	- 追加 列表项
- extend
	- 拓展 列表

### 例子

```
lst = []
lst.extend([0, 1])
lst
lst.append([0, 1])
lst
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192296/uid1190679-20250114-1736858509166) 

- 这还是个列表吗？

### 观察

```
type(lst)
len(lst)
lst[0]
lst[1]
lst[2]
lst[3]
```

- lst确实还是列表
	- 总共有三个列表项的列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192296/uid1190679-20250114-1736858611651) 

- 第2个列表项是什么呢？

### 再观察

```
lst
lst[2]
type(lst[2])
len(lst[2])
lst[2][0]
lst[2][1]
```

- 第二个列表项 还是 
	- 一个列表
	- 2个元素的 列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192296/uid1190679-20250114-1736858858378) 

- lst是列表的列表？

### 套娃？

- 列表的列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669708520014)

- 容器的容器
	- 不就成了套娃🪆吗？
	- 这种套娃我们之前见过

### 音高与时值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250504-1746320971645)

- 每个音符 
	- 不但 包括 音高
	- 而且 包括 时长

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

- 除了 音高、时长 之外
	- 音符 还有什么 特征指标吗？

### 音符 属性

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192296/uid1190679-20250504-1746321202772) 

|要素|定义|影响因素|作用|举例|
|---|---|---|---|---|
|音高|音符的高低|发声体振动频率|构建旋律与和声框架|钢琴从左到右音高渐高|
|时长|音符发声持续的时间|发声体振动持续时长|时间上的长短比例 形成节奏|全音符、四分音符|
|音强|音符发声的强弱程度|发声体振动幅度|情感起伏 动态变化|激昂用强音 轻柔 用弱音|
|音色|音符声音的特色|发声体的材质、结构、发声方式等|赋予声音独特个性|钢琴清脆明亮 二胡悠扬|

### 修改音强

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192296/uid1190679-20250504-1746321858435) 

- 定义了 四档 音强

```python
from mido import Message, MidiFile, MidiTrack

# 音符对应字典（F调）
NOTE_MAP = {'1': 65, '2': 67, '3': 69, '4': 70, '5': 72, '6': 74, '7': 76}

# 定义强弱规律（四四拍：强=90，弱=50，次强=70，最弱=40）
BEAT_VELOCITY = {
    1: 90,   # 第一拍（强）
    2: 50,   # 第二拍（弱）
    3: 70,   # 第三拍（次强）
    4: 50    # 第四拍（弱）
}

# 带节拍位置的旋律（格式：[音符, 时值, 节拍位置]，节拍位置从1开始）
MELODY = [
    # 两只老虎（四四拍，每小节4拍）
    ['1', 1, 1], ['2', 1, 2], ['3', 1, 3], ['1', 1, 4],  # 第一小节
    ['1', 1, 1], ['2', 1, 2], ['3', 1, 3], ['1', 1, 4],  # 第二小节
    ['3', 1, 1], ['4', 1, 2], ['5', 2, 3],              # 第三小节（第三拍延长2拍，占第3、4拍）
    ['3', 1, 1], ['4', 1, 2], ['5', 2, 3],              # 第四小节
    ['5', 0.5, 1], ['6', 0.5, 2], ['5', 0.5, 3], ['4', 0.5, 4], ['3', 1, 1], ['1', 1, 2],  # 第五小节
    ['5', 0.5, 1], ['6', 0.5, 2], ['5', 0.5, 3], ['4', 0.5, 4], ['3', 1, 1], ['1', 1, 2],  # 第六小节
    ['2', 1, 1], ['5', 1, 2], ['1', 2, 3],              # 第七小节
    ['2', 1, 1], ['5', 1, 2], ['1', 2, 3],              # 第八小节
    ['2', 1, 1], ['5', 1, 2], ['1', 2, 3],              # 第九小节
    ['2', 1, 1], ['5', 1, 2], ['1', 2, 3]               # 第十小节
]

mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

ticks_per_beat = 480
current_time = 0
current_beat = 1  # 记录当前节拍位置（每小节从1开始）

for note_info in MELODY:
    note_name, beats, beat_pos = note_info
    if note_name == '-':
        # 处理延长音
        current_time += int(beats * ticks_per_beat)
        current_beat = (current_beat + int(beats)) % 4  # 更新节拍位置（4拍循环）
        continue
    
    # 获取音强（velocity），若节拍位置超出预设，默认中等音量64
    velocity = BEAT_VELOCITY.get(beat_pos, 64)
    note = NOTE_MAP[note_name]
    duration = int(beats * ticks_per_beat)
    
    # 发送音符消息（带音强）
    track.append(Message('note_on', note=note, velocity=velocity, time=current_time))
    track.append(Message('note_off', note=note, velocity=velocity, time=duration))
    
    # 更新节拍位置（每拍前进1，超过4则重置为1）
    current_beat = (beat_pos + int(beats)) % 4 if int(beats) == 1 else (beat_pos + int(beats))  # 处理连音符
    current_time = 0  # 音符间无间隔

mid.save('two_tigers_f调_强弱.mid')
print("已生成带强弱规律的MIDI文件：two_tigers_f调_强弱.mid")
```

### 导出效果

- 每个音符 音强 已经有了变化 
	- 强
	- 弱
	- 次强
	- 弱

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192296/uid1190679-20250504-1746322338597) 

- 结尾处的音高需要调整

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192296/uid1190679-20250504-1746322418812) 

```python
from mido import Message, MidiFile, MidiTrack

NOTE_MAP = {
    '1': 60, '2': 62, '3': 64, '4': 65,
    '5': 67, '6': 69, '7': 71,
    '_5': 55  # 低音SO（G3）
}

BEAT_VELOCITY = {1: 100, 2: 40, 3: 80, 4: 30}

MELODY = [
    ['1', 1, 1], ['2', 1, 2], ['3', 1, 3], ['1', 1, 4],
    ['1', 1, 1], ['2', 1, 2], ['3', 1, 3], ['1', 1, 4],
    ['3', 1, 1], ['4', 1, 2], ['5', 2, 3],
    ['3', 1, 1], ['4', 1, 2], ['5', 2, 3],
    ['5', 0.5, 1], ['6', 0.5, 2], ['5', 0.5, 3], ['4', 0.5, 4], ['3', 1, 1], ['1', 1, 2],
    ['5', 0.5, 1], ['6', 0.5, 2], ['5', 0.5, 3], ['4', 0.5, 4], ['3', 1, 1], ['1', 1, 2],
    ['2', 1, 1], ['_5', 1, 2], ['1', 2, 3],
    ['2', 1, 1], ['_5', 1, 2], ['1', 2, 3]
]

mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

ticks_per_beat = 480
current_beat = 1.0  # 初始位于第1拍开始

for note_info in MELODY:
    note_name, beats, start_beat = note_info
    note = NOTE_MAP.get(note_name, 60)  # 默认音符为C4（避免键位错误）
    
    # 获取力度：使用起始节拍的整数部分（如1.5拍视为第1拍）
    beat_pos = int(start_beat) if start_beat.is_integer() else int(start_beat)
    velocity = BEAT_VELOCITY.get(beat_pos, 64)
    
    # 计算时间差（确保非负）
    time_delta = max(0, start_beat - current_beat)
    start_ticks = int(time_delta * ticks_per_beat)
    duration_ticks = int(beats * ticks_per_beat)
    
    # 发送音符消息
    track.append(Message('note_on', note=note, velocity=velocity, time=start_ticks))
    track.append(Message('note_off', note=note, velocity=velocity, time=duration_ticks))
    
    # 更新当前节拍位置
    current_beat = start_beat + beats
    # 浮点取模，保持在(0, 4]范围内
    current_beat = current_beat - 4 * int(current_beat // 4)
    if current_beat == 0:
        current_beat = 4.0

mid.save('two_tigers_c调_低音so.mid')
print("生成成功")
```

### 效果

- 音高修正了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192296/uid1190679-20250504-1746322820903) 

- 还想改变 音色

### 音色

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192296/uid1190679-20250504-1746323105438) 

|编码|对应乐器|编码|对应乐器|
|---|---|---|---|
|0|大钢琴（声学钢琴）|64|合成铜管2|
|1|明亮的钢琴|65|高音萨克斯|
|2|电钢琴|66|中音萨克斯|
|3|酒吧钢琴|67|次中音萨克斯|
|4|柔和的电钢琴|68|上低音萨克斯|
|5|加合唱效果的电钢琴|69|双簧管|
|6|羽管键琴（拨弦古钢琴）|70|英国管|
|7|科拉维科特琴（击弦古钢琴）|71|大管|
|8|钢片琴|72|单簧管|
|9|钟琴|73|短笛|
|10|八音盒|74|长笛|
|11|颤音琴|75|竖笛|
|12|马林巴|76|排笛|
|13|木琴|77|吹瓶口|
|14|管钟|78|尺八|
|15|大扬琴|79|哨|
|16|击杆风琴|80|洋埙|
|17|打击式风琴|81|合成主音1（方波）|
|18|摇滚风琴|82|合成主音2（锯齿波）|
|19|教堂风琴|83|合成主音3（汽笛风琴）|
|20|簧管风琴|84|合成主音4（吹管）|
|21|手风琴|85|合成主音5（吉他）|
|22|口琴|86|合成主音6（人声）|
|23|探戈手风琴|87|合成主音7（五度）|
|24|尼龙弦吉他|88|合成主音8（低音加主音）|
|25|钢弦吉他|89|合成柔音1（新时代）|
|26|爵士电吉他|90|合成柔音2（暖音）|
|27|清音电吉他|91|合成柔音3（复合成）|
|28|闷音电吉他|92|合成柔音4（合唱）|
|29|加驱动效果的电吉他|93|合成柔音5（弓弦）|
|30|加失真效果的电吉他|94|合成柔音6（金属）|
|31|吉他和音|95|合成柔音7（光环）|
|32|大贝司（声学贝司）|96|合成柔音8（扫弦）|
|33|电贝司（指弹）|97|合成特效1（雨）|
|34|电贝司（拨片）|98|合成特效2（音轨）|
|35|无品贝司|99|合成特效3（水晶）|
|36|掌击贝司1|100|合成特效4（大气）|
|37|掌击贝司2|101|合成特效5（亮音）|
|38|电子合成贝司1|102|合成特效6（小妖）|
|39|电子合成贝司2|103|合成特效7（回声）|
|40|小提琴|104|合成特效8（科幻）|
|41|中提琴|105|锡塔尔|
|42|大提琴|106|班卓|
|43|低音大提琴|107|三味线|
|44|弦乐群颤音音色|108|筝|
|45|弦乐群拨弦音色|109|卡林巴|
|46|竖琴|110|风笛|
|47|定音鼓|111|古提琴|
|48|弦乐合奏音色1|112|唢呐|
|49|弦乐合奏音色2|113|铃铛|
|50|合成弦乐1|114|拉丁打铃|
|51|合成弦乐2|115|钢鼓|
|52|合唱“啊”音|116|木块|
|53|人声“嘟”音|117|太鼓|
|54|合成人声|118|嗵鼓|
|55|乐队打击乐|119|合成鼓|
|56|小号|120|镲波形反转|
|57|长号|121|磨弦声|
|58|大号|122|呼吸声|
|59|弱音小号|123|海浪声|
|60|圆号|124|鸟鸣声|
|61|铜管组|125|电话铃声|
|62|合成铜管1|126|/|

### 选择小号

- 第33行
	- 将 乐器 
		- 从 1(钢琴🎹)
		- 修改为 56(小号🎺)

```
from mido import Message, MidiFile, MidiTrack

# C大调音高映射
NOTE_MAP = {
    '1': 60, '2': 62, '3': 64, '4': 65,
    '5': 67, '6': 69, '7': 71,
    '_5': 55  # 低音SO（G3）
}

# 强弱规律
BEAT_VELOCITY = {1: 100, 2: 40, 3: 80, 4: 30}

# 旋律（同C大调版本）
MELODY = [
    ['1', 1, 1], ['2', 1, 2], ['3', 1, 3], ['1', 1, 4],
    ['1', 1, 1], ['2', 1, 2], ['3', 1, 3], ['1', 1, 4],
    ['3', 1, 1], ['4', 1, 2], ['5', 2, 3],
    ['3', 1, 1], ['4', 1, 2], ['5', 2, 3],
    ['5', 0.5, 1], ['6', 0.5, 2], ['5', 0.5, 3], ['4', 0.5, 4], ['3', 1, 1], ['1', 1, 2],
    ['5', 0.5, 1], ['6', 0.5, 2], ['5', 0.5, 3], ['4', 0.5, 4], ['3', 1, 1], ['1', 1, 2],
    ['2', 1, 1], ['5b', 1, 2], ['1', 2, 3],
    ['2', 1, 1], ['5b', 1, 2], ['1', 2, 3],
    ['2', 1, 1], ['_5', 1, 2], ['1', 2, 3],
    ['2', 1, 1], ['_5', 1, 2], ['1', 2, 3]
]

# 创建MIDI文件并设置音色
mid = MidiFile()
track = MidiTrack()
mid.tracks.append(track)

# 设置二胡音色（程序号54）
track.append(Message('program_change', program=56, time=0))

ticks_per_beat = 480
current_beat = 1.0

for note_info in MELODY:
    note_name, beats, start_beat = note_info
    note = NOTE_MAP.get(note_name, 60)
    beat_pos = int(start_beat) if start_beat.is_integer() else int(start_beat)
    velocity = BEAT_VELOCITY.get(beat_pos, 64)
    
    time_delta = max(0, start_beat - current_beat)
    start_ticks = int(time_delta * ticks_per_beat)
    duration_ticks = int(beats * ticks_per_beat)
    
    track.append(Message('note_on', note=note, velocity=velocity, time=start_ticks))
    track.append(Message('note_off', note=note, velocity=velocity, time=duration_ticks))
    
    current_beat = start_beat + beats
    current_beat = current_beat - 4 * int(current_beat // 4)
    if current_beat == 0:
        current_beat = 4.0

mid.save('two_tigers_二胡音色.mid')
print("已生成二胡音色的MIDI文件：two_tigers_二胡音色.mid")
```

### 总结

- 这次了解了 音符四要素

|要素|定义|影响因素|作用|举例|
|---|---|---|---|---|
|音高|音符的高低|发声体振动频率|构建旋律与和声框架|钢琴从左到右音高渐高|
|时长|音符发声持续的时间|发声体振动持续时长|时间上的长短比例 形成节奏|全音符、四分音符|
|音强|音符发声的强弱程度|发声体振动幅度|情感起伏 动态变化|激昂用强音 轻柔 用弱音|
|音色|音符声音的特色|发声体的材质、结构、发声方式等|赋予声音独特个性|钢琴清脆明亮 二胡悠扬|

- 设置好 音轨的音色之后

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192296/uid1190679-20250504-1746323381602) 

- 每个音符 都有自己的四要素
	- 音色
	- 音高
	- 时值
	- 音强
- 可以利用 音符的三要素 做首歌吗？？🤔
- 下次再说 👋
