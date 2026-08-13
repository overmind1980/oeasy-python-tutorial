---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 嵌套 embedded

## 回忆

- 上次 完成了 对《短歌行》的谱曲

- 还想给这个曲子 
	- 配上 伴奏 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4096199/uid1190679-20250625-1750810183583) 

- 该 如何做呢？🤔

### 回忆原始文件

- 原来的歌曲谱曲

```
from mido import Message, MidiFile, MidiTrack, MetaMessage
import mido
import re

# 《短歌行》完整歌词
lyrics = """对酒当歌，人生几何！譬如朝露，去日苦多。
慨当以慷，忧思难忘。何以解忧？唯有杜康。
青青子衿，悠悠我心。但为君故，沉吟至今。
呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
明明如月，何时可掇？忧从中来，不可断绝。
越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
月明星稀，乌鹊南飞。绕树三匝，何枝可依？
山不厌高，海不厌深。周公吐哺，天下归心。"""

def generate_short_ode_full_midi():
    # 创建MIDI文件与轨道
    mid = MidiFile()
    track = MidiTrack()
    mid.tracks.append(track)

    # === 元数据设置 ===
    track.append(MetaMessage('set_tempo', tempo=mido.bpm2tempo(100), time=0))  # 100 BPM
    track.append(MetaMessage('time_signature', numerator=4, denominator=2, clocks_per_click=24, notated_32nd_notes_per_beat=8, time=0))
    track.append(MetaMessage('key_signature', key='D', time=0))  # D商调式对应调号

    # === 调式与音符映射（含高音2和高音1）===
    note_map = {
        # 低音区
        2: 62,   # 低音2（D4）
        3: 64,   # 低音3（E4）
        5: 67,   # 低音5（G4）
        6: 69,   # 低音6（A4）
        # 高音区
        '2_': 74, # 高音2（D5）
        '1_': 72  # 高音1（C5）
    }
	# 示例旋律（实际使用时需根据歌词情感调整）
	basic_melody = [
	    2, 3, 5, '2_', '1_', 6, 5, 2,  # 前八字旋律（含高音）
	    2, 3, 5, '2_', 5, 6, 5, 2_   # 后八字旋律
	]
    # 气口小节（4个四分音符休止符）
    rest_bar = [0] * 4  # 休止符对应note=0

    # === 歌词处理 ===
    # 清理标点符号与换行
    clean_lyrics = re.sub(r'[，！？。\n]', '', lyrics)
    # 按每16字分节
    verse_sections = [clean_lyrics[i:i+16] for i in range(0, len(clean_lyrics), 16)]

    # === MIDI参数设置 ===
    mid.ticks_per_beat = 480  # 每拍480tick
    quarter_note = mid.ticks_per_beat  # 四分音符时长
    track.append(Message('program_change', program=0, time=0))  # 钢琴音色

    # === 生成音符与气口 ===
    start_time = 0
    for section in verse_sections:
        # 生成段落旋律（循环使用basic_melody，不足部分重复）
        for i, char in enumerate(section):
            # 适配旋律长度与歌词字数
            melody_idx = i % len(basic_melody)
            note = basic_melody[melody_idx]
            # 解析音符（处理高音2和高音1）
            midi_note = note_map[note] if isinstance(note, int) else note_map[note]
            # 统一力度（可根据需要调整）
            velocity = 80
            # 音符事件
            track.append(Message('note_on', note=midi_note, velocity=velocity, time=start_time))
            track.append(Message('note_off', note=midi_note, velocity=64, time=quarter_note))
            start_time = 0
        # 插入气口小节（4拍休止符）
        for _ in range(4):
            track.append(Message('note_on', note=0, velocity=0, time=start_time))
            track.append(Message('note_off', note=0, velocity=0, time=quarter_note))
            start_time = 0

    # === 保存文件 ===
    mid.save('短歌行_完整歌词_气口.mid')
    print(f"已生成MIDI文件，共{len(verse_sections)}个段落，每16字后有1个小节气口")

if __name__ == "__main__":
    generate_short_ode_full_midi()

```

### 询问ai

- 以生成旋律的 py文件 
	- 作为 上下文
	- 进行 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4096994/uid1190679-20250625-1750841607202)

- 先从 打击乐器来

### 询问ai

- 使用 概念 反拍子
	- 正拍子 强弱强弱
	- 反拍子 弱强弱强

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4096994/uid1190679-20250625-1750844486311) 

```
from mido import Message, MidiFile, MidiTrack, MetaMessage
import mido
import re

# 《短歌行》完整歌词
lyrics = """对酒当歌，人生几何！譬如朝露，去日苦多。
慨当以慷，忧思难忘。何以解忧？唯有杜康。
青青子衿，悠悠我心。但为君故，沉吟至今。
呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
明明如月，何时可掇？忧从中来，不可断绝。
越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
月明星稀，乌鹊南飞。绕树三匝，何枝可依？
山不厌高，海不厌深。周公吐哺，天下归心。"""

def generate_corrected_midi():
    # 创建双音轨MIDI
    mid = MidiFile()
    melody_track = MidiTrack()  # 旋律轨
    beat_track = MidiTrack()    # 打击乐轨
    mid.tracks.extend([melody_track, beat_track])

    # 元数据设置（双轨共用）
    tempo = mido.bpm2tempo(100)
    for track in [melody_track, beat_track]:
        track.append(MetaMessage('set_tempo', tempo=tempo, time=0))
        track.append(MetaMessage('time_signature', numerator=4, denominator=2, clocks_per_click=24, notated_32nd_notes_per_beat=8, time=0))
        track.append(MetaMessage('key_signature', key='D', time=0))

    # 调式与音符映射
    note_map = {2:62, 3:64, 5:67, 6:69, '2_':74, '1_':72}
    basic_melody = [2,3,5,'2_','1_',6,5,2,2,3,5,'2_',5,6,5,'2_']
    rest_bar = [0]*4  # 4拍气口

    # 歌词处理
    clean_lyrics = re.sub(r'[，！？。\n]', '', lyrics)
    verse_sections = [clean_lyrics[i:i+16] for i in range(0, len(clean_lyrics), 16)]

    # MIDI参数
    mid.ticks_per_beat = 480
    quarter_note = mid.ticks_per_beat
    melody_track.append(Message('program_change', program=0, time=0))  # 钢琴音色

    # 生成旋律轨（记录所有时间戳，包括气口）
    all_timestamps = []  # 记录所有音符和气口的时间
    start_time = 0
    for section in verse_sections:
        for i, char in enumerate(section):
            note = basic_melody[i % len(basic_melody)]
            midi_note = note_map[note] if isinstance(note, int) else note_map[note]
            melody_track.append(Message('note_on', note=midi_note, velocity=80, time=start_time))
            melody_track.append(Message('note_off', note=midi_note, velocity=64, time=quarter_note))
            all_timestamps.append(start_time)  # 记录旋律音符时间
            start_time = 0
        # 插入气口并记录时间
        for _ in range(4):
            melody_track.append(Message('note_on', note=0, velocity=0, time=start_time))
            melody_track.append(Message('note_off', note=0, velocity=0, time=quarter_note))
            all_timestamps.append(start_time)  # 记录气口时间
            start_time = 0

    # 打击乐轨配置（10号通道）
    beat_track.append(Message('program_change', program=0, channel=9, time=0))  # 10号通道
    perc_map = {
        '弱拍（镲）': 42,
        '次强拍（军鼓）': 40,
        '强拍（底鼓）': 36,
        '气口镲': 46  # 气口用开镲填充
    }
    beat_logic = ['弱拍（镲）', '次强拍（军鼓）', '弱拍（镲）', '强拍（底鼓）']
    rest_beat = ['气口镲'] * 4  # 气口每拍用开镲

    # 生成打击乐（区分旋律音符和气口）
    beat_idx = 0
    for i, ts in enumerate(all_timestamps):
        # 判断是否为气口（每16个旋律音符后4个为气口）
        is_rest = (i % (len(basic_melody) + 4)) >= len(basic_melody)
        if is_rest:
            current_beat = rest_beat[beat_idx % 4]
        else:
            current_beat = beat_logic[beat_idx % 4]
        
        note = perc_map[current_beat]
        # 气口力度略强
        velocity = 90 if is_rest else 80
        beat_track.append(Message('note_on', note=note, velocity=velocity, time=ts))
        beat_track.append(Message('note_off', note=note, velocity=velocity-16, time=quarter_note))
        beat_idx += 1

    # 确保20小节（每小节4拍，共80拍）
    total_beats = 20 * 4
    current_beats = beat_idx
    if current_beats < total_beats:
        add_beats = total_beats - current_beats
        start_time = current_beats * quarter_note
        for _ in range(add_beats):
            current_beat = beat_logic[beat_idx % 4]
            beat_track.append(Message('note_on', note=perc_map[current_beat], velocity=80, time=start_time))
            beat_track.append(Message('note_off', note=perc_map[current_beat], velocity=64, time=quarter_note))
            start_time += quarter_note
            beat_idx += 1

    # 保存文件
    mid.save('短歌行_气口时间修正版.mid')
    print(f"已生成20小节MIDI：\n- 记录所有气口时间并生成对应节奏\n- 每小节按'弱、次强、弱、强'填充，气口用开镲\n文件：短歌行_气口时间修正版.mid")

if __name__ == "__main__":
    generate_corrected_midi()
```

### 生成结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4096994/uid1190679-20250625-1750846197686) 

- 希望有个前奏

```
要修改生成mid的方法，目前两个音轨的音符全部保留，整体后移一个小节。旋律音轨插入一个小节的休止符，打击乐器前面插入一小节踩镲。
```

### 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4096994/uid1190679-20250625-1750851416748) 

```
from mido import Message, MidiFile, MidiTrack, MetaMessage
import mido
import re

# 《短歌行》完整歌词
lyrics = """对酒当歌，人生几何！譬如朝露，去日苦多。
慨当以慷，忧思难忘。何以解忧？唯有杜康。
青青子衿，悠悠我心。但为君故，沉吟至今。
呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
明明如月，何时可掇？忧从中来，不可断绝。
越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
月明星稀，乌鹊南飞。绕树三匝，何枝可依？
山不厌高，海不厌深。周公吐哺，天下归心。"""

def generate_corrected_midi():
    # 创建双音轨MIDI
    mid = MidiFile()
    melody_track = MidiTrack()  # 旋律轨
    beat_track = MidiTrack()    # 打击乐轨
    mid.tracks.extend([melody_track, beat_track])

    # 元数据设置（双轨共用）
    tempo = mido.bpm2tempo(100)
    for track in [melody_track, beat_track]:
        track.append(MetaMessage('set_tempo', tempo=tempo, time=0))
        track.append(MetaMessage('time_signature', numerator=4, denominator=2, clocks_per_click=24, notated_32nd_notes_per_beat=8, time=0))
        track.append(MetaMessage('key_signature', key='D', time=0))

    # 调式与音符映射
    note_map = {2:62, 3:64, 5:67, 6:69, '2_':74, '1_':72}
    basic_melody = [2,3,5,'2_','1_',6,5,2,2,3,5,'2_',5,6,5,'2_']
    rest_bar = [0]*4  # 4拍气口

    # 歌词处理
    clean_lyrics = re.sub(r'[，！？。\n]', '', lyrics)
    verse_sections = [clean_lyrics[i:i+16] for i in range(0, len(clean_lyrics), 16)]

    # MIDI参数
    mid.ticks_per_beat = 480
    quarter_note = mid.ticks_per_beat
    melody_track.append(Message('program_change', program=0, time=0))  # 钢琴音色

    # 生成旋律轨（记录所有时间戳，包括气口）
    all_timestamps = []  # 记录所有音符和气口的时间
    
    # 添加前奏小节（全踩镲）
    for _ in range(4):
        melody_track.append(Message('note_on', note=note_map[5], velocity=80, time=0))
        melody_track.append(Message('note_off', note=note_map[5], velocity=64, time=quarter_note))
        all_timestamps.append(0)
    
    start_time = 0
    # 主旋律部分（后移1小节）
    for section in verse_sections:
        for i, char in enumerate(section):
            note = basic_melody[i % len(basic_melody)]
            midi_note = note_map[note] if isinstance(note, int) else note_map[note]
            melody_track.append(Message('note_on', note=midi_note, velocity=80, time=start_time))
            melody_track.append(Message('note_off', note=midi_note, velocity=64, time=quarter_note))
            all_timestamps.append(start_time)  # 记录旋律音符时间
            start_time = 0
        # 插入气口并记录时间
        for _ in range(4):
            melody_track.append(Message('note_on', note=0, velocity=0, time=start_time))
            melody_track.append(Message('note_off', note=0, velocity=0, time=quarter_note))
            all_timestamps.append(start_time)  # 记录气口时间
            start_time = 0

    # 打击乐轨配置（10号通道）
    beat_track.append(Message('program_change', program=0, channel=9, time=0))  # 10号通道
    perc_map = {
        '弱拍（镲）': 42,
        '次强拍（军鼓）': 40,
        '强拍（底鼓）': 36,
        '气口镲': 46  # 气口用开镲填充
    }
    beat_logic = ['弱拍（镲）', '次强拍（军鼓）', '弱拍（镲）', '强拍（底鼓）']
    rest_beat = ['气口镲'] * 4  # 气口每拍用开镲

    # 生成打击乐（区分旋律音符和气口）
    beat_idx = 0
    
    # 前奏小节处理（全踩镲）
    for ts in all_timestamps[:4]:
        beat_track.append(Message('note_on', note=perc_map['气口镲'], velocity=90, time=ts))
        beat_track.append(Message('note_off', note=perc_map['气口镲'], velocity=74, time=quarter_note))
    
    # 主节奏部分（从第2小节开始）
    for i, ts in enumerate(all_timestamps[4:]):
        # 判断是否为气口（每16个旋律音符后4个为气口）
        is_rest = (i % (len(basic_melody) + 4)) >= len(basic_melody)
        if is_rest:
            current_beat = rest_beat[beat_idx % 4]
        else:
            current_beat = beat_logic[beat_idx % 4]
        
        note = perc_map[current_beat]
        # 气口力度略强
        velocity = 90 if is_rest else 80
        beat_track.append(Message('note_on', note=note, velocity=velocity, time=ts))
        beat_track.append(Message('note_off', note=note, velocity=velocity-16, time=quarter_note))
        beat_idx += 1

    # 确保20小节（每小节4拍，共80拍）
    total_beats = 21 * 4  # 包含前奏小节
    current_beats = beat_idx
    if current_beats < total_beats:
        add_beats = total_beats - current_beats
        start_time = current_beats * quarter_note
        for _ in range(add_beats):
            current_beat = beat_logic[beat_idx % 4]
            beat_track.append(Message('note_on', note=perc_map[current_beat], velocity=80, time=start_time))
            beat_track.append(Message('note_off', note=perc_map[current_beat], velocity=64, time=quarter_note))
            start_time += quarter_note
            beat_idx += 1

    # 保存文件
    mid.save('短歌行_气口时间修正版.mid')
    print(f"已生成20小节MIDI：\n- 记录所有气口时间并生成对应节奏\n- 每小节按'弱、次强、弱、强'填充，气口用开镲\n文件：短歌行_气口时间修正版.mid")

if __name__ == "__main__":
    generate_corrected_midi()

```

### 添加古筝

```
在此py基础上，保持旋律音轨和打击乐器音轨不动，继续保持4/4拍。添加古筝音轨和音符序列，要求配合主旋律，跳过气口，和谐好听， 给我完整的py文件。
```

- 得到效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4096994/uid1190679-20250625-1750860563478) 

```
from mido import Message, MidiFile, MidiTrack, MetaMessage
import mido
import re

# 《短歌行》完整歌词
lyrics = """对酒当歌，人生几何！譬如朝露，去日苦多。
慨当以慷，忧思难忘。何以解忧？唯有杜康。
青青子衿，悠悠我心。但为君故，沉吟至今。
呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
明明如月，何时可掇？忧从中来，不可断绝。
越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
月明星稀，乌鹊南飞。绕树三匝，何枝可依？
山不厌高，海不厌深。周公吐哺，天下归心。"""

def generate_corrected_midi():
    # 创建三音轨MIDI（旋律+打击乐+古筝）
    mid = MidiFile()
    melody_track = MidiTrack()  # 旋律轨
    beat_track = MidiTrack()    # 打击乐轨
    guzheng_track = MidiTrack() # 古筝轨
    mid.tracks.extend([melody_track, beat_track, guzheng_track])

    # 元数据设置（三轨共用）
    tempo = mido.bpm2tempo(100)
    for track in [melody_track, beat_track, guzheng_track]:
        track.append(MetaMessage('set_tempo', tempo=tempo, time=0))
        track.append(MetaMessage('time_signature', numerator=4, denominator=2, clocks_per_click=24, notated_32nd_notes_per_beat=8, time=0))
        track.append(MetaMessage('key_signature', key='D', time=0))

    # 调式与音符映射
    note_map = {2:62, 3:64, 5:67, 6:69, '2_':74, '1_':72}
    basic_melody = [2,3,5,'2_','1_',6,5,2,2,3,5,'2_',5,6,5,'2_']
    rest_bar = [0]*4  # 4拍气口

    # 古筝伴奏模式 - D大调分解和弦（适合古筝的琶音模式）
    guzheng_pattern = [
        [62, 67, 74],  # D和弦分解（2,5,高音2）
        [64, 69, 76],  # E和弦分解（3,6,高音3）
        [60, 67, 72],  # G和弦分解（1,5,高音1）
        [62, 69, 76]   # A和弦分解（2,6,高音3）
    ]

    # 歌词处理
    clean_lyrics = re.sub(r'[，！？。\n]', '', lyrics)
    verse_sections = [clean_lyrics[i:i+16] for i in range(0, len(clean_lyrics), 16)]

    # MIDI参数
    mid.ticks_per_beat = 480
    quarter_note = mid.ticks_per_beat
    eighth_note = quarter_note // 2
    melody_track.append(Message('program_change', program=0, time=0))  # 钢琴音色
    guzheng_track.append(Message('program_change', program=104, time=0)) # 古筝音色(104号乐器)

    # 生成旋律轨（记录所有时间戳，包括气口）
    all_timestamps = []  # 记录所有音符和气口的时间
    
    # 添加前奏小节（全踩镲）
    for _ in range(4):
        melody_track.append(Message('note_on', note=note_map[5], velocity=80, time=0))
        melody_track.append(Message('note_off', note=note_map[5], velocity=64, time=quarter_note))
        all_timestamps.append(0)
    
    start_time = 0
    # 主旋律部分（后移1小节）
    for section in verse_sections:
        for i, char in enumerate(section):
            note = basic_melody[i % len(basic_melody)]
            midi_note = note_map[note] if isinstance(note, int) else note_map[note]
            melody_track.append(Message('note_on', note=midi_note, velocity=80, time=start_time))
            melody_track.append(Message('note_off', note=midi_note, velocity=64, time=quarter_note))
            all_timestamps.append(start_time)  # 记录旋律音符时间
            start_time = 0
        # 插入气口并记录时间
        for _ in range(4):
            melody_track.append(Message('note_on', note=0, velocity=0, time=start_time))
            melody_track.append(Message('note_off', note=0, velocity=0, time=quarter_note))
            all_timestamps.append(start_time)  # 记录气口时间
            start_time = 0

    # 打击乐轨配置（10号通道）
    beat_track.append(Message('program_change', program=0, channel=9, time=0))  # 10号通道
    perc_map = {
        '弱拍（镲）': 42,
        '次强拍（军鼓）': 40,
        '强拍（底鼓）': 36,
        '气口镲': 46  # 气口用开镲填充
    }
    beat_logic = ['弱拍（镲）', '次强拍（军鼓）', '弱拍（镲）', '强拍（底鼓）']
    rest_beat = ['气口镲'] * 4  # 气口每拍用开镲

    # 生成打击乐（区分旋律音符和气口）
    beat_idx = 0
    
    # 前奏小节处理（全踩镲）
    for ts in all_timestamps[:4]:
        beat_track.append(Message('note_on', note=perc_map['气口镲'], velocity=90, time=ts))
        beat_track.append(Message('note_off', note=perc_map['气口镲'], velocity=74, time=quarter_note))
    
    # 主节奏部分（从第2小节开始）
    for i, ts in enumerate(all_timestamps[4:]):
        # 判断是否为气口（每16个旋律音符后4个为气口）
        is_rest = (i % (len(basic_melody) + 4)) >= len(basic_melody)
        if is_rest:
            current_beat = rest_beat[beat_idx % 4]
        else:
            current_beat = beat_logic[beat_idx % 4]
        
        note = perc_map[current_beat]
        # 气口力度略强
        velocity = 90 if is_rest else 80
        beat_track.append(Message('note_on', note=note, velocity=velocity, time=ts))
        beat_track.append(Message('note_off', note=note, velocity=velocity-16, time=quarter_note))
        beat_idx += 1

    # 确保20小节（每小节4拍，共80拍）
    total_beats = 21 * 4  # 包含前奏小节
    current_beats = beat_idx
    if current_beats < total_beats:
        add_beats = total_beats - current_beats
        start_time = current_beats * quarter_note
        for _ in range(add_beats):
            current_beat = beat_logic[beat_idx % 4]
            beat_track.append(Message('note_on', note=perc_map[current_beat], velocity=80, time=start_time))
            beat_track.append(Message('note_off', note=perc_map[current_beat], velocity=64, time=quarter_note))
            start_time += quarter_note
            beat_idx += 1

    # 生成古筝伴奏轨
    guzheng_time = 0
    pattern_idx = 0
    for i, ts in enumerate(all_timestamps):
        # 每16拍更换一次和弦模式
        if i % 16 == 0 and i > 0:
            pattern_idx = (pattern_idx + 1) % len(guzheng_pattern)

        # 非气口部分才添加古筝伴奏
        is_rest = (i % (len(basic_melody) + 4)) >= len(basic_melody)
        if not is_rest:
            # 古筝分解和弦（琶音）
            chord = guzheng_pattern[pattern_idx]
            for note in chord:
                guzheng_track.append(Message('note_on', note=note, velocity=70, time=guzheng_time))
                guzheng_track.append(Message('note_off', note=note, velocity=0, time=eighth_note))
                guzheng_time = 0
        guzheng_time = ts

    # 保存文件
    mid.save('短歌行_完整伴奏版.mid')
    print(f"已生成带古筝伴奏的MIDI：\n- 保留原旋律和打击乐轨\n- 新增古筝分解和弦伴奏\n- 每16拍循环4种和弦模式\n文件：短歌行_完整伴奏版.mid")

if __name__ == "__main__":
    generate_corrected_midi()
```

### 添加bass

```
此py文件的基础上，保持原来旋律、打击乐、古筝三个音轨类型不变，音轨上的音符序列保持原样。

添加新乐器作为，bass音轨，在此音轨上。配合主旋律调性，和打击乐器节拍，添加伴奏。把旋律和节奏融合起来，要和谐好听。bass延续时间为整首歌曲。

给我最终完整代码。
```


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4096994/uid1190679-20250626-1750908383921)

### 最终代码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4096994/uid1190679-20250626-1750908597347) 

- 修改配器音轨
	- 主旋律 笛子
	- 节奏音轨 打击乐器组
	- 弹拨音轨  古筝
	- bass 琵琶

```
from mido import Message, MidiFile, MidiTrack, MetaMessage
import mido
import re

# 《短歌行》完整歌词（保持不变）
lyrics = """对酒当歌，人生几何！譬如朝露，去日苦多。
慨当以慷，忧思难忘。何以解忧？唯有杜康。
青青子衿，悠悠我心。但为君故，沉吟至今。
呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。
明明如月，何时可掇？忧从中来，不可断绝。
越陌度阡，枉用相存。契阔谈䜩，心念旧恩。
月明星稀，乌鹊南飞。绕树三匝，何枝可依？
山不厌高，海不厌深。周公吐哺，天下归心。"""

def generate_corrected_midi():
    # 创建四音轨MIDI（旋律+打击乐+古筝+Bass）
    mid = MidiFile()
    melody_track = MidiTrack()  # 旋律轨
    beat_track = MidiTrack()    # 打击乐轨
    guzheng_track = MidiTrack() # 古筝轨
    bass_track = MidiTrack()    # 新增Bass轨
    mid.tracks.extend([melody_track, beat_track, guzheng_track, bass_track])

    # 元数据设置（四轨共用）
    tempo = mido.bpm2tempo(100)
    for track in [melody_track, beat_track, guzheng_track, bass_track]:
        track.append(MetaMessage('set_tempo', tempo=tempo, time=0))
        track.append(MetaMessage('time_signature', numerator=4, denominator=2, clocks_per_click=24, notated_32nd_notes_per_beat=8, time=0))
        track.append(MetaMessage('key_signature', key='D', time=0))

    # 基础配置
    note_map = {2:62, 3:64, 5:67, 6:69, '2_':74, '1_':72}
    basic_melody = [2,3,5,'2_','1_',6,5,2,2,3,5,'2_',5,6,5,'2_']
    quarter_note = mid.ticks_per_beat
    eighth_note = quarter_note // 2
    sixteenth_note = quarter_note // 4

    # === 旋律轨保持不变 ===
    rest_bar = [0]*4  # 4拍气口

    # 古筝伴奏模式 - D大调分解和弦（适合古筝的琶音模式）
    guzheng_pattern = [
        [62, 67, 74],  # D和弦分解（2,5,高音2）
        [64, 69, 76],  # E和弦分解（3,6,高音3）
        [60, 67, 72],  # G和弦分解（1,5,高音1）
        [62, 69, 76]   # A和弦分解（2,6,高音3）
    ]

    # 歌词处理
    clean_lyrics = re.sub(r'[，！？。\n]', '', lyrics)
    verse_sections = [clean_lyrics[i:i+16] for i in range(0, len(clean_lyrics), 16)]

    # MIDI参数
    mid.ticks_per_beat = 480
    quarter_note = mid.ticks_per_beat
    eighth_note = quarter_note // 2
    melody_track.append(Message('program_change', program=0, time=0))  # 钢琴音色
    guzheng_track.append(Message('program_change', program=104, time=0)) # 古筝音色(104号乐器)

    # 生成旋律轨（记录所有时间戳，包括气口）
    all_timestamps = []  # 记录所有音符和气口的时间
    
    # 添加前奏小节（全踩镲）
    for _ in range(4):
        melody_track.append(Message('note_on', note=note_map[5], velocity=80, time=0))
        melody_track.append(Message('note_off', note=note_map[5], velocity=64, time=quarter_note))
        all_timestamps.append(0)
    
    start_time = 0
    # 主旋律部分（后移1小节）
    for section in verse_sections:
        for i, char in enumerate(section):
            note = basic_melody[i % len(basic_melody)]
            midi_note = note_map[note] if isinstance(note, int) else note_map[note]
            melody_track.append(Message('note_on', note=midi_note, velocity=80, time=start_time))
            melody_track.append(Message('note_off', note=midi_note, velocity=64, time=quarter_note))
            all_timestamps.append(start_time)  # 记录旋律音符时间
            start_time = 0
        # 插入气口并记录时间
        for _ in range(4):
            melody_track.append(Message('note_on', note=0, velocity=0, time=start_time))
            melody_track.append(Message('note_off', note=0, velocity=0, time=quarter_note))
            all_timestamps.append(start_time)  # 记录气口时间
            start_time = 0

    # 打击乐轨配置（10号通道）
    beat_track.append(Message('program_change', program=0, channel=9, time=0))  # 10号通道
    perc_map = {
        '弱拍（镲）': 42,
        '次强拍（军鼓）': 40,
        '强拍（底鼓）': 36,
        '气口镲': 46  # 气口用开镲填充
    }
    beat_logic = ['弱拍（镲）', '次强拍（军鼓）', '弱拍（镲）', '强拍（底鼓）']
    rest_beat = ['气口镲'] * 4  # 气口每拍用开镲

    # 生成打击乐（区分旋律音符和气口）
    beat_idx = 0
    
    # 前奏小节处理（全踩镲）
    for ts in all_timestamps[:4]:
        beat_track.append(Message('note_on', note=perc_map['气口镲'], velocity=90, time=ts))
        beat_track.append(Message('note_off', note=perc_map['气口镲'], velocity=74, time=quarter_note))
    
    # 主节奏部分（从第2小节开始）
    for i, ts in enumerate(all_timestamps[4:]):
        # 判断是否为气口（每16个旋律音符后4个为气口）
        is_rest = (i % (len(basic_melody) + 4)) >= len(basic_melody)
        if is_rest:
            current_beat = rest_beat[beat_idx % 4]
        else:
            current_beat = beat_logic[beat_idx % 4]
        
        note = perc_map[current_beat]
        # 气口力度略强
        velocity = 90 if is_rest else 80
        beat_track.append(Message('note_on', note=note, velocity=velocity, time=ts))
        beat_track.append(Message('note_off', note=note, velocity=velocity-16, time=quarter_note))
        beat_idx += 1

    # 确保20小节（每小节4拍，共80拍）
    total_beats = 21 * 4  # 包含前奏小节
    current_beats = beat_idx
    if current_beats < total_beats:
        add_beats = total_beats - current_beats
        start_time = current_beats * quarter_note
        for _ in range(add_beats):
            current_beat = beat_logic[beat_idx % 4]
            beat_track.append(Message('note_on', note=perc_map[current_beat], velocity=80, time=start_time))
            beat_track.append(Message('note_off', note=perc_map[current_beat], velocity=64, time=quarter_note))
            start_time += quarter_note
            beat_idx += 1

    # 生成古筝伴奏轨
    guzheng_time = 0
    pattern_idx = 0
    for i, ts in enumerate(all_timestamps):
        # 每16拍更换一次和弦模式
        if i % 16 == 0 and i > 0:
            pattern_idx = (pattern_idx + 1) % len(guzheng_pattern)

        # 非气口部分才添加古筝伴奏
        is_rest = (i % (len(basic_melody) + 4)) >= len(basic_melody)
        if not is_rest:
            # 古筝分解和弦（琶音）
            chord = guzheng_pattern[pattern_idx]
            for note in chord:
                guzheng_track.append(Message('note_on', note=note, velocity=70, time=guzheng_time))
                guzheng_track.append(Message('note_off', note=note, velocity=0, time=eighth_note))
                guzheng_time = 0
        guzheng_time = ts

    # === 新增Bass轨 ===
    # 贝斯音色（原声贝斯）
    bass_track.append(Message('program_change', program=33, time=0))  # 33号乐器为原声贝斯

    # D大调 bass音型映射（根音+五度音）
    bass_patterns = {
        'D': [62, 67],   # D-F# (D大调根音+五度音)
        'E': [64, 69],   # E-G#
        'G': [67, 72],   # G-B
        'A': [69, 74],   # A-C#
        'Bm': [71, 76]   # Bm-F#
    }
    # 和弦进行（每16小节循环一次）
    chord_progression = ['D', 'E', 'G', 'A', 'D', 'E', 'G', 'A', 'D', 'E', 'G', 'A', 'Bm', 'G', 'D', 'A']
    chord_idx = 0

    # 生成Bass伴奏（与主旋律同步）
    bass_notes = []
    for i, _ in enumerate(all_timestamps):
        # 每16拍更换一次和弦
        if i % 16 == 0 and i > 0:
            chord_idx = (chord_idx + 1) % len(chord_progression)
        current_chord = chord_progression[chord_idx % len(chord_progression)]
        current_notes = bass_patterns.get(current_chord, [60, 67])  # 默认C和弦

        # 非气口部分才添加贝斯音符
        is_rest = (i % (len(basic_melody) + 4)) >= len(basic_melody)
        if not is_rest:
            # 强拍根音，弱拍五度音
            bass_note = current_notes[0] if i % 4 == 0 else current_notes[1]
            bass_track.append(Message('note_on', note=bass_note, velocity=70, time=all_timestamps[i]))
            bass_track.append(Message('note_off', note=bass_note, velocity=0, time=quarter_note))

    # 保存文件
    mid.save('短歌行_完整伴奏版.mid')

if __name__ == "__main__":
    generate_corrected_midi()
```


### 中国音乐配合

- 曲无定谱、死谱活奏

 ![图片描述](https://doc.shiyanlou.com/courses/3584/labs/197319/uid1190679-20251201-1764582563927) 

- 你繁我简
- 你高我低
- 加花变奏
- 嵌挡让路
- 即兴发挥

### 总结
- 这次 给《短歌行》曲 做了伴奏
	- 类似的还有 《观沧海》

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4096199/uid1190679-20250625-1750810084773) 	

- 四言 传统
	- 从 尧舜禹 / 夏商周 史诗叙事
	- 到 春秋风采 诗经
	- 到 战国故事 四字成语
	- 再到 三国魏晋 骈四骊六
	- 近代的 《百家姓》、《千字文》
	- 一直到 小品中的 四六八句
- 可是 为什么 《三字经》 是 三个字 呢？
- 下次再说 👋