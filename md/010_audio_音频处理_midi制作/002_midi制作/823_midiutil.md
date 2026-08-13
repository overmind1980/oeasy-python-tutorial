```
from midiutil import MIDIFile

def create_reverse_song():
    # 创建MIDI文件，4个轨道
    my_midi = MIDIFile(4)

    # 基本设置
    tempo = 95
    volume_melody = 100
    volume_strings = 65
    volume_bass = 70
    volume_piano = 60

    for track in range(4):
        my_midi.addTempo(track, 0, tempo)

    # 设置乐器音色
    my_midi.addProgramChange(0, 0, 0, 0)     # 钢琴(主旋律)
    my_midi.addProgramChange(1, 1, 0, 48)    # 弦乐
    my_midi.addProgramChange(2, 2, 0, 33)    # 原声贝斯
    my_midi.addProgramChange(3, 3, 0, 4)     # 电钢琴(和弦)

    # 降G调的完整主旋律
    melody = [
        # 第一段
        (66, 1.0),      # 1 (Gb) 四分音符
        (73, 1.0),      # 5 (Db) 四分音符
        (70, 0.5),      # 3 (Bb) 八分音符
        (68, 1.0),      # 2 (Ab) 四分音符
        (66, 0.5),      # 1 (Gb) 八分音符
        (0, 0.5),       # 0 八分音符
        (66, 0.5),      # 1 (Gb) 八分音符
        (73, 1.0),      # 5 (Db) 四分音符
        (70, 2.0),      # 3 (Bb) 二分音符

        # 第二段
        (66, 1.0),      # 1 (Gb)
        (73, 1.0),      # 5 (Db)
        (70, 0.5),      # 3 (Bb)
        (68, 1.0),      # 2 (Ab)
        (65, 0.5),      # 低音7 (F)
        (0, 0.5),       # 0
        (65, 0.5),      # 低音7 (F)
        (73, 1.0),      # 5 (Db)
        (70, 2.0),      # 3 (Bb)

        # 过渡段
        (0, 1.0),       # 0
        (66, 0.5),      # 1 (Gb)
        (65, 0.5),      # 低音7 (F)
        (66, 1.0),      # 1 (Gb)
        (66, 0.5),      # 1 (Gb)
        (65, 0.5),      # 低音7 (F)
        (66, 0.5),      # 1 (Gb)
        (68, 1.0),      # 2 (Ab)
        (68, 2.0),      # 2 (Ab)

        # 发展段
        (68, 0.5),      # 2 (Ab)
        (68, 0.5),      # 2 (Ab)
        (70, 1.0),      # 3 (Bb)
        (70, 1.5),      # 3 (Bb)
        (70, 0.5),      # 3 (Bb)
        (70, 1.0),      # 3 (Bb)
        (65, 0.5),      # 低音7 (F)
        (65, 1.0),      # 低音7 (F)
        (61, 1.0),      # 低音5 (Db)
        (66, 0.5),      # 1 (Gb)

        # 新增部分
        (0, 1.0),       # 0
        (66, 0.5),      # 1 (Gb)
        (65, 0.5),      # 低音7 (F)
        (66, 1.0),      # 1 (Gb)
        (66, 0.5),      # 1 (Gb)
        (65, 0.5),      # 低音7 (F)
        (66, 0.5),      # 1 (Gb)
        (68, 1.0),      # 2 (Ab)
        (68, 2.5),      # 2 (Ab)

        # 高潮部分
        (68, 0.5),      # 2 (Ab)
        (70, 1.0),      # 3 (Bb)
        (70, 2.5),      # 3 (Bb)
        (68, 0.5),      # 2 (Ab)
        (70, 1.0),      # 3 (Bb)
        (70, 1.0),      # 3 (Bb)
        (71, 0.5),      # 4 (Cb)
        (70, 2.0),      # 3 (Bb)

        # 继续高潮
        (70, 0.5),      # 3 (Bb)
        (68, 0.5),      # 2 (Ab)
        (70, 1.0),      # 3 (Bb)
        (70, 0.5),      # 3 (Bb)
        (70, 0.5),      # 3 (Bb)
        (70, 1.0),      # 3 (Bb)
        (78, 0.5),      # 高音1 (Gb)
        (77, 1.0),      # 7 (F)
        (73, 1.0),      # 5 (Db)
        (70, 3.5),      # 3 (Bb)

        # 结尾部分1
        (66, 0.5),      # 1 (Gb)
        (73, 1.0),      # 5 (Db)
        (65, 1.0),      # 低音7 (F)
        (65, 1.0),      # 低音7 (F)
        (61, 1.0),      # 低音5 (Db)
        (66, 3.5),      # 1 (Gb)

        # 结尾部分2
        (66, 0.5),      # 1 (Gb)
        (73, 1.0),      # 5 (Db)
        (71, 1.0),      # 4 (Cb)
        (70, 1.0),      # 3 (Bb)
        (68, 1.0),      # 2 (Ab)
        (70, 2.5),      # 3 (Bb)

        # 额外的结尾过渡段
        (0, 0.5),       # 休止符
        (66, 0.5),      # 1 (Gb)
        (68, 0.5),      # 2 (Ab)
        (70, 1.0),      # 3 (Bb)
        (66, 0.5),      # 1 (Gb)
        (77, 0.5),      # 7 (F)
        (66, 0.5),      # 1 (Gb)
        (77, 0.5),      # 7 (F)
        (73, 1.0),      # 5 (Db)
        (70, 0.5),      # 3 (Bb)

        # 最后重复第一段
        (66, 1.0),      # 1 (Gb) 四分音符
        (73, 1.0),      # 5 (Db) 四分音符
        (70, 0.5),      # 3 (Bb) 八分音符
        (68, 1.0),      # 2 (Ab) 四分音符
        (66, 0.5),      # 1 (Gb) 八分音符
        (0, 0.5),       # 0 八分音符
        (66, 0.5),      # 1 (Gb) 八分音符
        (73, 1.0),      # 5 (Db) 四分音符
        (70, 2.0),      # 3 (Bb) 二分音符

        # 最后重复第二段
        (66, 1.0),      # 1 (Gb)
        (73, 1.0),      # 5 (Db)
        (70, 0.5),      # 3 (Bb)
        (68, 1.0),      # 2 (Ab)
        (65, 0.5),      # 低音7 (F)
        (0, 0.5),       # 0
        (65, 0.5),      # 低音7 (F)
        (73, 1.0),      # 5 (Db)
        (70, 2.0),      # 3 (Bb)
    ]

    # 钢琴和弦琶音模式
    piano_pattern = [
        (54, 0.25), (58, 0.25), (61, 0.25), (66, 0.25),
        (58, 0.25), (61, 0.25), (66, 0.25), (70, 0.25),
    ]

    # 计算总时长
    total_duration = sum(duration for _, duration in melody)

    # 生成足够长的钢琴和弦
    piano_chords = []
    current_time = 0
    while current_time < total_duration:
        for note in piano_pattern:
            piano_chords.append(note)
            current_time += 0.25

    # 和弦进行
    strings = [
        ([54, 58, 61], 2.0),  # Gb和弦
        ([56, 59, 63], 2.0),  # Abm和弦
        ([51, 54, 58], 2.0),  # Db和弦
        ([54, 58, 61], 2.0),  # Gb和弦
    ] * int(total_duration / 8 + 1)

    # 贝斯线
    bass = [
        (42, 1.0), (42, 0.5), (44, 0.5),  # Gb
        (44, 1.0), (44, 0.5), (46, 0.5),  # Ab
        (39, 1.0), (39, 0.5), (41, 0.5),  # Db
        (42, 1.0), (42, 1.0),             # Gb
    ] * int(total_duration / 8 + 1)

    # 添加所有音轨
    time = 0
    for pitch, duration in melody:
        if pitch > 0:
            my_midi.addNote(0, 0, pitch, time, duration, volume_melody)
        time += duration

    time = 0
    for chord, duration in strings:
        for note in chord:
            my_midi.addNote(1, 1, note, time, duration, volume_strings)
        time += duration

    time = 0
    for pitch, duration in bass:
        my_midi.addNote(2, 2, pitch, time, duration, volume_bass)
        time += duration

    time = 0
    for pitch, duration in piano_chords:
        my_midi.addNote(3, 3, pitch, time, duration, volume_piano)
        time += duration

    # 保存文件
    with open("reverse_Gb_complete.mid", "wb") as output_file:
        my_midi.writeFile(output_file)

    print("完整版降G调《溯》MIDI文件已生成：reverse_Gb_complete.mid")

if __name__ == "__main__":
    try:
        create_reverse_song()
    except Exception as e:
        print(f"发生错误：{str(e)}")

```

### 另一段midiutil

```
# -*- coding: utf-8 -*-

import json

from midiutil.MidiFile import MIDIFile

from randomnote import RandomNote


class Masterpiece(object):
    def __init__(self, rules_path="rules.json", length=4, tempo=90):
        self.rules_path = rules_path
        self.length = length
        self.tempo = tempo

        ## 从rules.json文件中读取相关音符信息、和弦信息、鼓点信息，用于后续生成。
        rules_file = open(rules_path, "r")
        rules = json.load(rules_file)
        rules_file.close()
        self.rhythm = rules["rhythm"]
        self.seq_chord = rules["seq_chord"]
        self.seq_perc = rules["seq_perc"]
        self.velocity = rules["velocity"]
        self.rn = RandomNote(rules["notes"], rules["interval_upper"], rules["interval_lower"])

        self.MyMIDI = MIDIFile(3)
        self.current_track_number = 0

    ## 根据rules.json中的给定的音符，随机生成主旋律的音符序列。
    def create_melody_sequence(self):
        seq_melody = []
        seq_melody1 = []
        print("self.rhythm: ", self.rhythm)
        for i in range(self.length):
            for phrase in self.rhythm:
                self.rn.reset()
                for duration in phrase:
                    seq_melody.append((self.rn.random_note(), duration))

        print("主旋律seq_melody：",seq_melody1)
        print("主旋律seq_melody size：", len(seq_melody1))
        return seq_melody

    ## 根据生成的主旋律音符创建mido主旋律音轨
    def create_melody_track(self):
        seq_melody = self.create_melody_sequence()

        self.MyMIDI.addTrackName(
            track=self.current_track_number,
            time=0, trackName="piano")
        self.MyMIDI.addTempo(
            track=self.current_track_number,
            time=0, tempo=self.tempo)
        self.MyMIDI.addProgramChange(
            tracknum=self.current_track_number,
            channel=0, time=0, program=0)

        pos = 0
        for pitch, duration in seq_melody:
            relative_pos = pos - int(pos / 4) * 4
            if 0 <= relative_pos < 1:
                vol = self.velocity["strong"]
            elif 2 <= relative_pos < 3:
                vol = self.velocity["intermediate"]
            else:
                vol = self.velocity["weak"]
            self.MyMIDI.addNote(
                track=self.current_track_number,
                channel=0, pitch=pitch, time=pos, duration=duration, volume=vol)
            # if relative_pos in [0, 2]:
            #     self.MyMIDI.addControllerEvent(
            #         track=self.current_track_number,
            #         channel=0, time=pos, controller_number=64, parameter=127)
            #     self.MyMIDI.addControllerEvent(
            #         track=self.current_track_number,
            #         channel=0, time=pos + 1.96875, controller_number=64, parameter=0)
            pos += duration
        self.current_track_number += 1

    def create_chord_track(self):
        self.MyMIDI.addTrackName(
            track=self.current_track_number,
            time=0, trackName="chords")
        self.MyMIDI.addTempo(
            track=self.current_track_number,
            time=0, tempo=self.tempo)
        self.MyMIDI.addProgramChange(
            tracknum=self.current_track_number,
            channel=0, time=0, program=0)

        # C  D  E  F  G  A  B  | C  D  E  F  G  A  B  | C
        # 48 50 52 53 55 57 59 | 60 62 64 65 67 69 71 | 72

        pos = 0
        while pos < self.length * 16:
            for item in self.seq_chord:
                for pitch in item:
                    self.MyMIDI.addControllerEvent(
                        track=self.current_track_number,
                        channel=0, time=pos, controller_number=64, parameter=127)
                    self.MyMIDI.addControllerEvent(
                        track=self.current_track_number,
                        channel=0, time=pos + 1.96875, controller_number=64, parameter=0)
                    self.MyMIDI.addNote(
                        track=self.current_track_number,
                        channel=0, pitch=pitch, time=pos, duration=2, volume=76)
                    self.MyMIDI.addControllerEvent(
                        track=self.current_track_number,
                        channel=0, time=pos + 2, controller_number=64, parameter=127)
                    self.MyMIDI.addControllerEvent(
                        track=self.current_track_number,
                        channel=0, time=pos + 3.96875, controller_number=64, parameter=0)
                    self.MyMIDI.addNote(
                        track=self.current_track_number,
                        channel=0, pitch=pitch, time=pos + 2, duration=2, volume=68)
                pos += 4
        self.current_track_number += 1

    def create_perc_track(self):
        self.MyMIDI.addTrackName(
            track=self.current_track_number,
            time=0, trackName="perc")
        self.MyMIDI.addTempo(
            track=self.current_track_number,
            time=0, tempo=self.tempo)
        self.MyMIDI.addProgramChange(
            tracknum=self.current_track_number,
            channel=9, time=0, program=0)

        pos = 0
        while pos < self.length * 16:
            # if pos != 0:
            #     self.MyMIDI.addNote(
            #         track=self.current_track_number,
            #         channel=9, pitch=49, time=pos, duration=0.5, volume=102)
            a = []
            for pitch, duration in self.seq_perc:

                relative_pos = pos - int(pos / 4)
                if 0 <= relative_pos < 1:
                    vol = 102
                elif 2 <= relative_pos < 3:
                    vol = 96
                else:
                    vol = 92
                self.MyMIDI.addNote(
                    track=self.current_track_number,
                    channel=9, pitch=pitch, time=pos, duration=duration, volume=vol)
                a.append(duration)
                pos += duration
            print(a)
        self.current_track_number += 1

    def create_midi_file(self, filename, melody=True, chord=True, perc=True):
        # if melody:
        #     self.create_melody_track()
        if chord:
            self.create_chord_track()
        # if perc:
        #     self.create_perc_track()
        with open(filename, "wb") as midi_file:
            self.MyMIDI.writeFile(midi_file)
```

### 根据和弦进行

- 生成旋律

```
from midiutil import MIDIFile
import random
import os
import time

def create_random_folder():
    timestamp = int(time.time())
    folder_name = f"jazz_music_{timestamp}"
    os.makedirs(folder_name, exist_ok=True)
    return folder_name

# 创建MIDI文件对象，使用4个轨道（主旋律、和弦、贝斯、鼓点）
midi = MIDIFile(4)

# 设置基本参数
melody_track = 0    # 主旋律轨道
chord_track = 1     # 和弦轨道
bass_track = 2      # 贝斯轨道
drum_track = 3      # 鼓点轨道
melody_channel = 0
chord_channel = 1
bass_channel = 2
drum_channel = 9    # MIDI通道10（鼓点专用通道）
time = 0
tempo = 120  # BPM
volume = 100

# 设置时间签名和速度
for track in [melody_track, chord_track, bass_track, drum_track]:
    midi.addTempo(track, time, tempo)

# 爵士和弦进行
jazz_chords = [
    ([60, 64, 67, 70], "Cmaj7"),  # Cmaj7
    ([62, 65, 69, 72], "Dm7"),    # Dm7
    ([64, 67, 71, 74], "Em7"),    # Em7
    ([65, 69, 72, 76], "Fmaj7"),  # Fmaj7
    ([67, 71, 74, 77], "G7"),     # G7
    ([69, 72, 76, 79], "Am7"),    # Am7
    ([71, 74, 77, 81], "Bm7b5"),  # Bm7b5
]

# 生成随机和弦进行
num_bars = 16  # 16小节，每小节2拍，总共约30秒
chord_progression = []
for _ in range(num_bars):
    chord = random.choice(jazz_chords)
    chord_progression.append(chord)

# 生成主旋律
melody_notes = []
for chord, _ in chord_progression:
    # 从和弦音中选择音符
    for _ in range(4):  # 每小节4个音符
        note = random.choice(chord) + random.choice([-12, 0, 12])  # 随机选择八度
        duration = random.choice([0.25, 0.5])  # 随机持续时间
        melody_notes.append((note, duration))

# 生成贝斯线
bass_notes = []
for chord, _ in chord_progression:
    root_note = chord[0] - 24  # 降两个八度
    bass_notes.append((root_note, 0.5))
    bass_notes.append((root_note + 7, 0.5))  # 添加五度音

# 生成鼓点模式
drum_pattern = [
    (35, 0.5),  # 低音鼓
    (42, 0.25), # 高音镲
    (38, 0.5),  # 军鼓
    (42, 0.25), # 高音镲
]

drum_notes = []
for _ in range(num_bars * 2):  # 每小节重复两次鼓点模式
    drum_notes.extend(drum_pattern)

# 添加主旋律音符
current_time = 0
for note, duration in melody_notes:
    midi.addNote(melody_track, melody_channel, note, current_time, duration, volume)
    current_time += duration

# 添加和弦
current_time = 0
for chord, _ in chord_progression:
    for note in chord:
        midi.addNote(chord_track, chord_channel, note, current_time, 1.0, volume - 20)
    current_time += 1.0

# 添加贝斯音符
current_time = 0
for note, duration in bass_notes:
    midi.addNote(bass_track, bass_channel, note, current_time, duration, volume - 10)
    current_time += duration

# 添加鼓点
current_time = 0
for note, duration in drum_notes:
    midi.addNote(drum_track, drum_channel, note, current_time, duration, volume - 15)
    current_time += duration

# 创建随机文件夹并保存MIDI文件
folder_name = create_random_folder()
file_path = os.path.join(folder_name, "jazz_improv.mid")

with open(file_path, "wb") as output_file:
    midi.writeFile(output_file)

print(f"爵士音乐文件已生成：{file_path}")

# 打印和弦进行
print("\n和弦进行：")
for i, (_, chord_name) in enumerate(chord_progression, 1):
    print(f"第{i}小节: {chord_name}", end="  ")
    if i % 4 == 0:
        print() 

```

### 欢乐颂

```
from midiutil import MIDIFile

# 创建MIDI对象，3个轨道（主旋律、和弦、打击乐）
midi = MIDIFile(3)
melody_track = 0
harmony_track = 1
drum_track = 2
tempo = 100

# 设置音量
volumes = {
    'melody': 100,  # 主旋律
    'harmony': 80,  # 和弦
    'drum': 70      # 打击乐
}

# 为每个轨道设置速度
for track in range(3):
    midi.addTempo(track, 0, tempo)

# 音符映射字典
note_to_midi = {
    'C4': 60, 'D4': 62, 'E4': 64, 'F4': 65, 'G4': 67, 'A4': 69, 'B4': 71,
    'C5': 72, 'D5': 74, 'E5': 76,
    'G3': 55, 'A3': 57, 'B3': 59,
    'rest': -1
}

# 主旋律音符
melody_notes = [
    'C4', 'C4', 'D4', 'E4', 'E4', 'D4', 'C4', 'B3',
    'A3', 'A3', 'B3', 'C4', 'C4', 'B3', 'B3', 'rest',
    'C4', 'C4', 'D4', 'E4', 'E4', 'D4', 'C4', 'B3',
    'A3', 'A3', 'B3', 'C4', 'B3', 'A3', 'G3', 'rest'
]

# 添加主旋律
current_time = 0
for note_name in melody_notes:
    if note_name != 'rest':
        midi.addNote(melody_track, 0, note_to_midi[note_name], current_time, 1, volumes['melody'])
    current_time += 1

# 添加和弦伴奏
harmony_chords = [
    ['C4', 'E4', 'G4'], ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['C4', 'E4', 'G4'],
    ['F4', 'A4', 'C5'], ['G4', 'B4', 'D5'], ['C4', 'E4', 'G4'], ['G3', 'B3', 'D4']
]

current_time = 0
for chord_notes in harmony_chords:
    for note_name in chord_notes:
        midi.addNote(harmony_track, 1, note_to_midi[note_name], current_time, 4, volumes['harmony'])
    current_time += 4

# 添加打击乐
current_time = 0
total_time = len(melody_notes)
while current_time < total_time:
    # 军鼓（第2、4拍）
    midi.addNote(drum_track, 9, 38, current_time + 1, 0.5, volumes['drum'])
    midi.addNote(drum_track, 9, 38, current_time + 3, 0.5, volumes['drum'])
    current_time += 4

# 保存MIDI文件
with open("eethoven_simple.mid", "wb") as output_file:
    midi.writeFile(output_file)

print("欢乐颂MIDI文件已生成完成！")
```

### 欢乐颂 变奏效果

```
from midiutil import MIDIFile

# 创建MIDI对象，3个轨道
midi = MIDIFile(3)
melody_track = 0
harmony_track = 1
drum_track = 2
tempo = 140  # 更快的速度

# 设置音量
volumes = {
    'melody': 100
}


midi.addTempo(0, 0, tempo)

# 音符映射字典
note_to_midi = {
    'C4': 60, 'D4': 62, 'E4': 64, 'F4': 65, 'G4': 67, 'A4': 69, 'B4': 71,
    'C5': 72, 'D5': 74, 'E5': 76, 'F5': 77,
    'G3': 55, 'A3': 57, 'B3': 59,
    'rest': -1
}

# 主旋律（更活泼的节奏）
melody_notes = [
    ('C4', 0.5), ('C4', 0.5), ('D4', 1), ('E4', 1),
    ('E4', 0.5), ('D4', 0.5), ('C4', 1), ('B3', 1),
    ('A3', 0.5), ('A3', 0.5), ('B3', 1), ('C4', 1),
    ('C4', 0.5), ('B3', 0.5), ('B3', 1), ('rest', 1),
    
    ('C4', 0.5), ('C4', 0.5), ('D4', 1), ('E4', 1),
    ('E4', 0.5), ('D4', 0.5), ('C4', 1), ('B3', 1),
    ('A3', 0.5), ('A3', 0.5), ('B3', 1), ('C4', 1),
    ('B3', 0.5), ('A3', 0.5), ('G3', 1.5), ('G3', 0.5)
]

# 添加主旋律
current_time = 0
for note_name, duration in melody_notes:
    if note_name != 'rest':
        midi.addNote(melody_track, 0, note_to_midi[note_name], current_time, duration, volumes['melody'])
    current_time += duration

# 保存MIDI文件
with open("beethoven_upbeat.mid", "wb") as output_file:
    midi.writeFile(output_file)

print("欢快版欢乐颂MIDI文件已生成完成！")
```

### 2声部卡农

```
from midiutil import MIDIFile

# 创建MIDI对象，2个轨道（两个主旋律）
midi = MIDIFile(2)
melody1_track = 0
melody2_track = 1
tempo = 90  # 适中的速度，适合卡农

# 设置音量
volumes = {
    'melody1': 100,  # 第一主旋律
    'melody2': 90,   # 第二主旋律（稍微轻一些）
}

# 为每个轨道设置速度
for track in range(2):
    midi.addTempo(track, 0, tempo)
    
# 设置两个音轨都使用钢琴音色
midi.addProgramChange(melody1_track, 0, 0, 0)  # 第一音轨使用钢琴(0)
midi.addProgramChange(melody2_track, 0, 0, 0)  # 第二音轨也使用钢琴(0)

# 音符映射字典（D大调）
note_to_midi = {
    'D3': 50, 'E3': 52, 'F#3': 54, 'G3': 55, 'A3': 57, 'B3': 59, 'C#4': 61,
    'D4': 62, 'E4': 64, 'F#4': 66, 'G4': 67, 'A4': 69, 'B4': 71, 'C#5': 73, 'D5': 74
}

# 卡农主题旋律（简化版帕赫贝尔卡农）
canon_notes = [
    ('D4', 1), ('A3', 1), ('B3', 1), ('F#3', 1),
    ('G3', 1), ('D4', 1), ('G3', 1), ('A3', 1),
    
    ('D4', 1), ('F#4', 1), ('A4', 1), ('G4', 1),
    ('F#4', 1), ('D4', 1), ('E4', 1), ('C#4', 1),
    
    ('D4', 1), ('A3', 1), ('B3', 1), ('F#3', 1),
    ('G3', 1), ('D4', 1), ('G3', 1), ('A3', 1),
    
    ('D4', 1), ('F#4', 1), ('A4', 1), ('G4', 1),
    ('F#4', 1), ('E4', 1), ('D4', 2)
]

# 添加第一主旋律
current_time = 0
for note_name, duration in canon_notes:
    midi.addNote(melody1_track, 0, note_to_midi[note_name], current_time, duration, volumes['melody1'])
    current_time += duration

# 添加第二主旋律（延迟2小节进入，形成卡农效果）
delay = 8  # 2小节 * 4拍 = 8拍
current_time = delay
for note_name, duration in canon_notes:
    midi.addNote(melody2_track, 1, note_to_midi[note_name], current_time, duration, volumes['melody2'])
    current_time += duration

# 保存MIDI文件
with open("canon_simple.mid", "wb") as output_file:
    midi.writeFile(output_file)

print("简易双声部卡农MIDI文件已生成完成！")
```

### 激动的情绪

```
from midiutil import MIDIFile
import random

# 创建MIDI对象（5个轨道）
midi = MIDIFile(5)
melody_track = 0
counter_track = 1    # 对位旋律
harmony_track = 2
bass_track = 3
drum_track = 4
tempo = 100  # 快速的速度

# 设置音量
volumes = {
    'melody': 100,    # 主旋律
    'counter': 90,    # 对位旋律
    'harmony': 75,    # 和声
    'bass': 85,      # 低音
    'drum': 95       # 打击乐
}

# 为每个轨道设置速度
for track in range(5):
    midi.addTempo(track, 0, tempo)

# G大调音阶音符（明亮的调性）
scale = [67, 69, 71, 72, 74, 76, 78, 79]  # G4到G5
chord_roots = [67, 72, 74, 76]  # G, C, D, E

# 生成激昂的主题动机
def create_energetic_motif():
    motif = []
    # 定义更有音乐性的固定旋律模式
    melody_patterns = [
        [(0, 0.5), (2, 0.5), (4, 0.5), (7, 0.5)],  # 上行琶音
        [(7, 0.5), (4, 0.5), (2, 0.5), (0, 0.5)],  # 下行琶音
        [(0, 0.25), (2, 0.25), (4, 0.25), (2, 0.25), (0, 1.0)],  # 装饰音型
        [(0, 0.5), (4, 0.5), (7, 1.0)]  # 三和弦展开
    ]
    
    pattern = random.choice(melody_patterns)
    base_note = random.choice([67, 69, 71])  # 选择基础音符
    
    for interval, duration in pattern:
        note = base_note + interval
        motif.append((note, duration))
    return motif

# 生成对位旋律
def create_counter_melody(main_note):
    if random.random() < 0.6:
        return main_note + 4  # 大三度
    return main_note + 7  # 纯五度

# 生成主旋律
melody = []
total_bars = 16

# 创建AABA结构
main_motif = create_energetic_motif()
variation_motif = create_energetic_motif()

for section in range(4):
    if section != 2:  # A段
        melody.extend(main_motif)
        melody.extend(main_motif)
        melody.extend(variation_motif)
        melody.extend(main_motif)
    else:  # B段（对比部分）
        contrast_motif = create_energetic_motif()
        melody.extend(contrast_motif)
        melody.extend([
            (note + 2, duration) for note, duration in contrast_motif
        ])  # 升高两个音阶的重复

for _ in range(total_bars):
    motif = create_energetic_motif()
    melody.extend(motif)
    # 添加上行音阶片段
    if random.random() < 0.3:
        for i in range(4):
            melody.append((scale[i], 0.25))

# 添加主旋律和对位旋律
current_time = 0
for note, duration in melody:
    # 主旋律
    midi.addNote(melody_track, 0, note, current_time, duration, volumes['melody'])
    # 对位旋律
    counter_note = create_counter_melody(note)
    midi.addNote(counter_track, 1, counter_note, current_time, duration, volumes['counter'])
    current_time += duration

# 添加强劲的和弦进行
harmony_progression = [
    [(67, 71, 74), 2],  # G
    [(72, 76, 79), 2],  # C
    [(74, 78, 81), 2],  # D
    [(76, 79, 83), 2],  # E
]

current_time = 0
for chord, duration in harmony_progression * 8:
    for note in chord:
        midi.addNote(harmony_track, 2, note, current_time, duration, volumes['harmony'])
    current_time += duration

# 添加有力的贝斯线
current_time = 0
for _ in range(total_bars):
    root = random.choice(chord_roots)
    pattern = [
        (root-12, 0.5), (root-12, 0.5),
        (root-12+7, 0.5), (root-12+7, 0.5)
    ]
    for note, duration in pattern:
        midi.addNote(bass_track, 3, note, current_time, duration, volumes['bass'])
    current_time += 2

# 添加激昂的打击乐
current_time = 0
while current_time < total_bars * 4:
    # 强劲的底鼓
    midi.addNote(drum_track, 9, 36, current_time, 0.25, volumes['drum'])
    midi.addNote(drum_track, 9, 36, current_time + 1, 0.25, volumes['drum'])
    
    # 快速的军鼓
    for i in range(4):
        midi.addNote(drum_track, 9, 38, current_time + i * 0.5, 0.25, volumes['drum'] - 10)
    
    # 持续的击镲
    for i in range(8):
        midi.addNote(drum_track, 9, 42, current_time + i * 0.25, 0.125, volumes['drum'] - 20)
    
    current_time += 2

# 保存MIDI文件
try:
    with open("energetic_random.mid", "wb") as output_file:
        midi.writeFile(output_file)
    print("激昂的随机曲子已生成完成！")
except Exception as e:
    print(f"生成MIDI文件时出错：{e}")
    print("请确保目录存在且有写入权限")
```

### 生成快乐的随机曲子



```
from midiutil import MIDIFile
import random

# 创建MIDI对象（4个轨道：主旋律、和声、低音、打击乐）
midi = MIDIFile(4)
melody_track = 0
harmony_track = 1
bass_track = 2
drum_track = 3
tempo = 130  # 欢快的速度

# 设置音量
volumes = {
    'melody': 100,
    'harmony': 80,
    'bass': 85,
    'drum': 75
}

# 为每个轨道设置速度
for track in range(4):
    midi.addTempo(track, 0, tempo)

# C大调音阶音符
scale = [60, 62, 64, 65, 67, 69, 71, 72]  # C4到C5
chord_roots = [60, 65, 67, 62]  # C, F, G, D

# 生成主题动机（4拍）
def create_motif():
    motif = []
    # 使用更简单的固定节奏模式
    rhythm = [(1, 1, 1, 1), (1, 1, 2), (0.5, 0.5, 1, 2)]  # 确保每个模式总和为4拍
    pattern = random.choice(rhythm)
    
    for duration in pattern:
        note = random.choice(scale)
        motif.append((note, duration))
    return motif

# 生成变奏动机
def vary_motif(motif):
    varied = []
    for note, duration in motif:
        if random.random() < 0.3:  # 30%概率改变音高
            note = note + random.choice([-2, 2, 4])
        varied.append((note, duration))
    return varied

# 生成完整的主旋律
melody = []
main_motif = create_motif()
total_bars = 16  # 添加总小节数定义

# AABA形式
for section in range(4):
    if section != 2:  # A段
        melody.extend(main_motif)
        melody.extend(vary_motif(main_motif))
    else:  # B段（对比部分）
        contrast_motif = create_motif()
        melody.extend(contrast_motif)
        melody.extend(vary_motif(contrast_motif))

# 添加主旋律
current_time = 0
for note, duration in melody:
    # 确保音符在音阶范围内
    note = max(min(note, 74), 60)
    midi.addNote(melody_track, 0, note, current_time, duration, volumes['melody'])
    current_time += duration

# 生成和声进行
harmony_progression = []
for _ in range(8):  # 修改为固定8个和弦进行
    root = random.choice(chord_roots)
    # 大三和弦：根音、三度、五度
    chord = [(root, 4), (root + 4, 4), (root + 7, 4)]
    harmony_progression.extend(chord)

# 添加和声
current_time = 0
for note, duration in harmony_progression:
    midi.addNote(harmony_track, 1, note, current_time, duration, volumes['harmony'])
    current_time += duration

# 生成贝斯线
current_time = 0
for _ in range(total_bars):
    root = random.choice(chord_roots)
    # 每小节的贝斯模式：根音-五度-根音-三度
    pattern = [(root-24, 1), (root-24+7, 1), (root-24, 1), (root-24+4, 1)]
    for note, duration in pattern:
        midi.addNote(bass_track, 2, note, current_time, duration, volumes['bass'])
        current_time += duration

# 添加打击乐
current_time = 0
while current_time < total_bars * 4:
    # 底鼓
    midi.addNote(drum_track, 9, 35, current_time, 0.5, volumes['drum'])
    midi.addNote(drum_track, 9, 35, current_time + 2, 0.5, volumes['drum'])
    
    # 军鼓
    midi.addNote(drum_track, 9, 38, current_time + 1, 0.5, volumes['drum'])
    midi.addNote(drum_track, 9, 38, current_time + 3, 0.5, volumes['drum'])
    
    # 击镲
    for i in range(4):
        midi.addNote(drum_track, 9, 42, current_time + i, 0.25, volumes['drum'] - 20)
    
    current_time += 4

# 保存MIDI文件
try:
    with open("happy_random.mid", "wb") as output_file:
        midi.writeFile(output_file)
    print("欢快的随机曲子已生成完成！")
except Exception as e:
    print(f"生成MIDI文件时出错：{e}")
    print("请确保目录存在且有写入权限")
```
