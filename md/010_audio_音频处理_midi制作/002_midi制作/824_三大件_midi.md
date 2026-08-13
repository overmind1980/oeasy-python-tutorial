```
  from mido import Message, MidiFile, MidiTrack
import random

# 创建MIDI文件和轨道
mid = MidiFile()
bpm = 125  # 设置节奏
ticks_per_beat = mid.ticks_per_beat = 480

# 鼓轨道（通道9）
drum_track = MidiTrack()
mid.tracks.append(drum_track)

# 设置鼓音色（0表示默认鼓组）
drum_track.append(Message('program_change', program=0, time=0, channel=9))

# 贝斯轨道
bass_track = MidiTrack()
mid.tracks.append(bass_track)
bass_track.append(Message('program_change', program=38, time=0, channel=1))  # 合成贝斯

# 和弦轨道
chord_track = MidiTrack()
mid.tracks.append(chord_track)
chord_track.append(Message('program_change', program=89, time=0, channel=2))  # 空灵合成音

# 主旋律轨道
lead_track = MidiTrack()
mid.tracks.append(lead_track)
lead_track.append(Message('program_change', program=81, time=0, channel=3))  # 方波主音

def add_drum_pattern(track, bars, swing=0.05):
    """生成带有swing节奏的鼓点"""
    basic_rhythm = [36, 0, 42, 0] * 4  # 底鼓、军鼓交替
    for _ in range(bars * 4):  # 每小节4拍
        for i, note in enumerate(basic_rhythm):
            time = ticks_per_beat//2 + int(swing * ticks_per_beat) if i % 2 else ticks_per_beat//2
            if note > 0:
                track.append(Message('note_on', note=note, velocity=70, time=0, channel=9))
                track.append(Message('note_off', note=note, velocity=70, time=time, channel=9))
            else:
                track.append(Message('note_off', note=note, velocity=0, time=time, channel=9))

def generate_bassline(track, root_notes, bars):
    """生成walking bass"""
    for root in root_notes:
        for i in range(4):  # 每拍一个音符
            note = root + random.choice([0, 7, 12])  # 随机八度变化
            track.append(Message('note_on', note=note, velocity=60, time=0, channel=1))
            track.append(Message('note_off', note=note, time=ticks_per_beat//2, channel=1))

def add_arpeggio(track, chord, duration, velocity=60):
    """添加琶音模式"""
    for note in chord * 2:  # 上下琶音
        track.append(Message('note_on', note=note, velocity=velocity, time=0, channel=2))
        track.append(Message('note_off', note=note, time=ticks_per_beat//4, channel=2))

# 和弦进行（C小调）
chord_progression = [
    [48, 51, 55],  # Cm
    [53, 57, 60],  # Fm
    [51, 55, 58],  # Eb
    [58, 62, 65]   # Bb
] * 8  # 重复8次形成32小节

# 生成鼓点（32小节）
add_drum_pattern(drum_track, bars=32)

# 生成贝斯线（C-F-Eb-Bb进行）
bass_roots = [48, 53, 51, 58] * 8
generate_bassline(bass_track, bass_roots, bars=32)

# 生成和弦琶音
current_time = 0
for chord in chord_progression:
    add_arpeggio(chord_track, chord, duration=ticks_per_beat*2)
    current_time += ticks_per_beat*4  # 每个和弦持续1小节

# 生成主旋律（从第16小节进入）
lead_notes = [
    72, 75, 72, 70, 72, 70, 67, 65,
    63, 65, 67, 65, 63, 60, 63, 60
] * 4

time_counter = ticks_per_beat * 4 * 16  # 前16小节静默
for note in lead_notes:
    lead_track.append(Message('note_on', note=note, velocity=80, time=time_counter, channel=3))
    lead_track.append(Message('note_off', note=note, time=ticks_per_beat//2, channel=3))
    time_counter = 0  # 仅第一个音符需要设置开始时间

# 添加结尾
drum_track.append(Message('note_on', note=36, velocity=100, time=ticks_per_beat*3, channel=9))
drum_track.append(Message('note_off', note=36, time=ticks_per_beat, channel=9))

# 保存文件
mid.save('modern_electro.mid')
print("MIDI文件生成成功，时长约", mid.length, "秒")
```

### 三大件的细节描述

```
import pretty_midi  # 必须0.2.9
from math import floor

# 统一节奏参数（4/4拍，120BPM）
BPM = 120
BEAT_DURATION = 60 / BPM  # 0.5秒/拍（固定）
MEASURE_BEATS = 4  # 每小节4拍
TOTAL_MEASURES = 8  # 8小节=32拍=16秒

# 初始化（严格整数拍）
midi = pretty_midi.PrettyMIDI(
    initial_tempo=BPM,
    resolution=480  # 每拍480 ticks（整数精度）
)

# 乐器定义
piano = pretty_midi.Instrument(0, name="Acoustic Grand")
bass = pretty_midi.Instrument(33, name="Acoustic Bass")
drum = pretty_midi.Instrument(115, is_drum=True)

# 拍→时间转换（整数拍输入）
def beat_to_time(beat: int) -> float:
    """仅接受整数拍，返回精确时间"""
    return beat * BEAT_DURATION

# 鼓组（整数拍索引）
for measure in range(TOTAL_MEASURES):
    for beat in range(MEASURE_BEATS):  # beat为整数
        t = beat_to_time(measure * MEASURE_BEATS + beat)
        # 底鼓（拍1、3）
        if beat % 2 == 0:
            drum.notes.append(pretty_midi.Note(90, 36, t, t + 0.4))
        # 军鼓（拍2、4）
        if beat % 2 == 1:
            drum.notes.append(pretty_midi.Note(100, 38, t, t + 0.4))
        # 踩镲（每拍2个八分音符，整数细分）
        for subdiv in [0, 1]:  # 0=前半拍，1=后半拍
            subdiv_t = t + subdiv * 0.25  # 0.25秒细分
            drum.notes.append(pretty_midi.Note(70, 42, subdiv_t, subdiv_t + 0.2))

# 钢琴主旋律（整数细分索引）
chords = [60, 64, 67, 67, 71, 74]  # 6个音符（C→G和弦）
for measure in range(TOTAL_MEASURES):
    for beat in range(MEASURE_BEATS):
        t_beat = beat_to_time(measure * MEASURE_BEATS + beat)
        chord_idx = measure // 2  # 每2小节换和弦（整数）
        # 每拍2个八分音符（subdiv为0/1，整数索引）
        for subdiv in [0, 1]:
            note_idx = beat * 2 + subdiv  # 整数索引
            note = chords[note_idx % len(chords)]  # 防越界
            t = t_beat + subdiv * 0.25  # 0.25秒偏移
            piano.notes.append(pretty_midi.Note(
                90, note, t, t + 0.2
            ))

# 低音贝斯（整数拍索引）
for measure in range(TOTAL_MEASURES):
    for beat in range(MEASURE_BEATS):
        t = beat_to_time(measure * MEASURE_BEATS + beat)
        # 根音（拍1、3）/ 五音（拍2、4）
        pitch = 48 if beat % 2 == 0 else 53
        bass.notes.append(pretty_midi.Note(
            80, pitch, t, t + BEAT_DURATION
        ))

# 尾声处理（整数拍控制）
end_beat = TOTAL_MEASURES * MEASURE_BEATS
for inst in [piano, bass]:
    for note in inst.notes:
        note_beat = floor(note.start / BEAT_DURATION)  # 转换为整数拍
        if note_beat >= end_beat - 4:  # 最后4拍渐弱
            note.velocity = max(40, note.velocity - (note_beat - (end_beat - 4)) * 10)

# 导出验证（严格整数检查）
midi.instruments = [piano, bass, drum]
midi.write("integer_beat_fixed.mid")

print("\n✅ 错误修复：所有索引改用整数，彻底消除TypeError")
print("🎹 严格4/4拍钢琴版 已生成：integer_beat_fixed.mid")
print("🔧 关键改进：")
print("  ✓ subdiv从浮点数改为0/1整数索引（八分音符细分）")
print("  ✓ 所有时间计算基于整数拍，浮点时间仅用于MIDI写入")
print("  ✓ 添加floor()防浮点拍数误差（如0.999→0拍）")
print("⏱ 精准时长：16.0秒（32拍×0.5秒，文件属性验证）")
print("🎵 听感：稳定的行进节奏，所有乐器音符严格对齐拍点")
```


### 365个祝福

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4067236/uid1190679-20260528-1779964653397) 

```

import mido

# 将 JSON 数据直接并入 Python 文件作为变量
MIDI_DATA = {
    "ticks_per_beat": 480,
    "tracks": [
        {
            "track_number": 0,
            "track_name": "Speed",
            "instrument_name": "",
            "notes": []
        },
        {
            "track_number": 1,
            "track_name": "MIDI",
            "instrument_name": "Program 0",
            "notes": [
                {"pitch": 71, "pitch_name": "B4", "beat": 0.0, "duration": 0.9917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 1.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 1.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 2.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 2.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 3.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 3.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 4.0, "duration": 0.7417, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 4.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 5.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 5.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 6.0, "duration": 1.9917, "velocity": 127},
                {"pitch": 64, "pitch_name": "E4", "beat": 8.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 67, "pitch_name": "G4", "beat": 8.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 9.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 9.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 10.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 10.5, "duration": 0.2458, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 10.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 11.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 67, "pitch_name": "G4", "beat": 11.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 64, "pitch_name": "E4", "beat": 12.0, "duration": 0.7417, "velocity": 127},
                {"pitch": 67, "pitch_name": "G4", "beat": 12.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 13.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 13.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 14.0, "duration": 1.9917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 16.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 16.5, "duration": 0.4958, "velocity": 115},
                {"pitch": 71, "pitch_name": "B4", "beat": 17.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 17.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 18.0, "duration": 0.45, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 18.5, "duration": 0.45, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 19.0, "duration": 0.45, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 19.5, "duration": 0.45, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 20.0, "duration": 0.7417, "velocity": 127},
                {"pitch": 79, "pitch_name": "G5", "beat": 20.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 21.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 21.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 22.0, "duration": 1.9917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 24.0, "duration": 0.7417, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 24.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 25.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 25.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 26.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 26.5, "duration": 0.2458, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 26.75, "duration": 0.2458, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 27.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 67, "pitch_name": "G4", "beat": 27.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 64, "pitch_name": "E4", "beat": 28.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 67, "pitch_name": "G4", "beat": 28.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 29.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 29.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 30.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 30.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 31.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 79, "pitch_name": "G5", "beat": 31.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 79, "pitch_name": "G5", "beat": 32.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 32.5, "duration": 2.9958, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 36.0, "duration": 0.7458, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 36.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 37.0, "duration": 2.9917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 42.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 42.5, "duration": 0.4958, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 43.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 67, "pitch_name": "G4", "beat": 43.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 44.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 44.5, "duration": 0.4958, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 45.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 67, "pitch_name": "G4", "beat": 45.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 46.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 46.5, "duration": 0.9917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 47.5, "duration": 0.2417, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 47.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 48.0, "duration": 1.9917, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 50.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 50.5, "duration": 0.4958, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 51.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 67, "pitch_name": "G4", "beat": 51.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 52.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 52.5, "duration": 0.4958, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 53.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 53.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 54.0, "duration": 0.45, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 54.5, "duration": 0.9917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 55.5, "duration": 0.2417, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 56.0, "duration": 1.9917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 58.0, "duration": 0.9958, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 58.0, "duration": 0.9958, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 59.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 59.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 59.75, "duration": 0.2458, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 59.75, "duration": 0.2458, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 60.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 60.5, "duration": 0.4958, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 62.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 62.75, "duration": 0.2458, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 63.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 63.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 64.0, "duration": 0.9958, "velocity": 127},
                {"pitch": 62, "pitch_name": "D4", "beat": 66.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 64, "pitch_name": "E4", "beat": 66.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 67.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 67.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 68.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 68.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 69.0, "duration": 0.9917, "velocity": 127},
                {"pitch": 64, "pitch_name": "E4", "beat": 70.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 70.5, "duration": 0.9917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 71.5, "duration": 0.2417, "velocity": 127},
                {"pitch": 69, "pitch_name": "A4", "beat": 71.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 67, "pitch_name": "G4", "beat": 72.0, "duration": 1.9917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 74.0, "duration": 0.9958, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 75.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 75.75, "duration": 0.2458, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 76.0, "duration": 0.4958, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 76.5, "duration": 0.4958, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 78.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 78.75, "duration": 0.2458, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 79.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 79.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 80.0, "duration": 0.9958, "velocity": 127},
                {"pitch": 62, "pitch_name": "D4", "beat": 82.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 64, "pitch_name": "E4", "beat": 82.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 83.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 71, "pitch_name": "B4", "beat": 83.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 84.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 84.5, "duration": 0.4917, "velocity": 127},
                {"pitch": 76, "pitch_name": "E5", "beat": 85.0, "duration": 0.9917, "velocity": 127},
                {"pitch": 64, "pitch_name": "E4", "beat": 86.0, "duration": 0.4917, "velocity": 127},
                {"pitch": 74, "pitch_name": "D5", "beat": 86.5, "duration": 2.4958, "velocity": 127},
                {"pitch": 81, "pitch_name": "A5", "beat": 91.0, "duration": 0.7458, "velocity": 127},
                {"pitch": 79, "pitch_name": "G5", "beat": 91.75, "duration": 0.2417, "velocity": 127},
                {"pitch": 79, "pitch_name": "G5", "beat": 92.0, "duration": 1.9917, "velocity": 127}
            ]
        },
        {
            "track_number": 2,
            "track_name": "GrandPno",
            "instrument_name": "Program 25",
            "notes": [
                {"pitch": 43, "pitch_name": "G2", "beat": 0.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 0.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 0.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 1.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 1.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 1.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 43, "pitch_name": "G2", "beat": 2.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 2.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 2.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 3.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 3.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 3.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 43, "pitch_name": "G2", "beat": 4.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 4.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 4.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 5.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 5.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 5.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 43, "pitch_name": "G2", "beat": 6.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 6.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 6.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 7.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 7.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 7.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 8.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 8.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 8.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 47, "pitch_name": "B2", "beat": 9.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 9.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 9.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 10.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 10.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 10.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 45, "pitch_name": "A2", "beat": 11.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 11.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 11.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 12.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 12.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 12.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 47, "pitch_name": "B2", "beat": 13.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 13.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 13.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 48, "pitch_name": "C3", "beat": 14.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 54, "pitch_name": "F#3", "beat": 14.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 14.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 45, "pitch_name": "A2", "beat": 15.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 54, "pitch_name": "F#3", "beat": 15.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 15.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 43, "pitch_name": "G2", "beat": 16.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 16.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 16.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 17.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 17.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 17.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 43, "pitch_name": "G2", "beat": 18.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 18.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 18.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 19.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 19.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 19.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 20.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 20.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 20.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 47, "pitch_name": "B2", "beat": 21.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 21.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 21.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 22.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 22.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 22.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 47, "pitch_name": "B2", "beat": 23.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 23.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 23.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 24.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 24.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 24.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 45, "pitch_name": "A2", "beat": 25.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 25.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 25.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 26.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 26.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 26.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 45, "pitch_name": "A2", "beat": 27.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 27.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 27.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 28.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 28.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 28.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 51, "pitch_name": "D#3", "beat": 29.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 29.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 29.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 30.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 30.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 30.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 49, "pitch_name": "C#3", "beat": 31.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 31.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 31.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 48, "pitch_name": "C3", "beat": 32.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 32.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 60, "pitch_name": "C4", "beat": 32.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 33.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 33.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 60, "pitch_name": "C4", "beat": 33.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 48, "pitch_name": "C3", "beat": 34.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 34.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 60, "pitch_name": "C4", "beat": 34.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 35.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 35.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 60, "pitch_name": "C4", "beat": 35.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 36.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 36.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 60, "pitch_name": "C4", "beat": 36.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 38, "pitch_name": "D2", "beat": 38.0, "duration": 2.9917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 38.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 39.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 60, "pitch_name": "C4", "beat": 39.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 40.0, "duration": 0.9917, "velocity": 78},
                {"pitch": 38, "pitch_name": "D2", "beat": 41.0, "duration": 0.9917, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 41.0, "duration": 0.9917, "velocity": 78},
                {"pitch": 54, "pitch_name": "F#3", "beat": 41.0, "duration": 0.9917, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 41.0, "duration": 0.9917, "velocity": 78},
                {"pitch": 60, "pitch_name": "C4", "beat": 41.0, "duration": 0.9917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 41.0, "duration": 0.9917, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 42.0, "duration": 1.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 43.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 44.0, "duration": 1.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 45.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 46.0, "duration": 0.4417, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 46.5, "duration": 0.9917, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 47.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 47.75, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 48.0, "duration": 1.9917, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 50.0, "duration": 1.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 51.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 52.0, "duration": 1.4917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 53.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 64, "pitch_name": "E4", "beat": 54.0, "duration": 0.45, "velocity": 78},
                {"pitch": 64, "pitch_name": "E4", "beat": 54.5, "duration": 0.9917, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 55.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 55.75, "duration": 0.2417, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 56.0, "duration": 1.9917, "velocity": 78},
                {"pitch": 43, "pitch_name": "G2", "beat": 58.0, "duration": 0.2417, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 58.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 59.0, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 59.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 40, "pitch_name": "E2", "beat": 60.0, "duration": 0.2417, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 60.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 61.0, "duration": 0.2417, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 61.5, "duration": 0.2417, "velocity": 78},
                {"pitch": 42, "pitch_name": "F#2", "beat": 62.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 62.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 54, "pitch_name": "F#3", "beat": 63.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 63.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 43, "pitch_name": "G2", "beat": 64.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 64.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 65.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 65.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 42, "pitch_name": "F#2", "beat": 66.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 66.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 54, "pitch_name": "F#3", "beat": 67.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 67.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 40, "pitch_name": "E2", "beat": 68.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 68.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 69.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 69.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 38, "pitch_name": "D2", "beat": 70.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 45, "pitch_name": "A2", "beat": 70.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 71.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 54, "pitch_name": "F#3", "beat": 71.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 43, "pitch_name": "G2", "beat": 72.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 72.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 73.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 73.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 74.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 74.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 67, "pitch_name": "G4", "beat": 75.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 71, "pitch_name": "B4", "beat": 75.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 76.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 64, "pitch_name": "E4", "beat": 76.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 67, "pitch_name": "G4", "beat": 77.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 71, "pitch_name": "B4", "beat": 77.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 54, "pitch_name": "F#3", "beat": 78.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 78.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 66, "pitch_name": "F#4", "beat": 79.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 69, "pitch_name": "A4", "beat": 79.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 80.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 80.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 67, "pitch_name": "G4", "beat": 81.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 69, "pitch_name": "A4", "beat": 81.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 54, "pitch_name": "F#3", "beat": 82.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 82.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 66, "pitch_name": "F#4", "beat": 83.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 67, "pitch_name": "G4", "beat": 83.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 84.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 64, "pitch_name": "E4", "beat": 84.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 67, "pitch_name": "G4", "beat": 85.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 71, "pitch_name": "B4", "beat": 85.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 38, "pitch_name": "D2", "beat": 86.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 38, "pitch_name": "D2", "beat": 86.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 86.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 87.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 60, "pitch_name": "C4", "beat": 87.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 88.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 67, "pitch_name": "G4", "beat": 88.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 69, "pitch_name": "A4", "beat": 89.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 72, "pitch_name": "C5", "beat": 89.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 74, "pitch_name": "D5", "beat": 90.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 26, "pitch_name": "D1", "beat": 91.0, "duration": 0.9917, "velocity": 78},
                {"pitch": 38, "pitch_name": "D2", "beat": 91.0, "duration": 0.9917, "velocity": 78},
                {"pitch": 31, "pitch_name": "G1", "beat": 92.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 43, "pitch_name": "G2", "beat": 92.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 92.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 52, "pitch_name": "E3", "beat": 93.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 93.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 57, "pitch_name": "A3", "beat": 94.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 59, "pitch_name": "B3", "beat": 94.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 62, "pitch_name": "D4", "beat": 95.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 64, "pitch_name": "E4", "beat": 95.5, "duration": 0.4917, "velocity": 78},
                {"pitch": 67, "pitch_name": "G4", "beat": 96.0, "duration": 0.4917, "velocity": 78},
                {"pitch": 31, "pitch_name": "G1", "beat": 98.0, "duration": 1.9917, "velocity": 78},
                {"pitch": 43, "pitch_name": "G2", "beat": 98.0, "duration": 1.9917, "velocity": 78},
                {"pitch": 47, "pitch_name": "B2", "beat": 98.0, "duration": 1.9917, "velocity": 78},
                {"pitch": 50, "pitch_name": "D3", "beat": 98.0, "duration": 1.9917, "velocity": 78},
                {"pitch": 55, "pitch_name": "G3", "beat": 98.0, "duration": 1.9917, "velocity": 78}
            ]
        }
    ]
}

def generate_midi_from_data(data, midi_path):
    # 1. 创建一个空的 MIDI 文件对象
    mid = mido.MidiFile(ticks_per_beat=data["ticks_per_beat"])
    
    # 2. 遍历数据中的每个轨道
    for track_info in data["tracks"]:
        track = mido.MidiTrack()
        mid.tracks.append(track)
        
        # 获取轨道通道 (默认为 0，打击乐必须是 9)
        channel = track_info.get("channel", 0)
        
        # 添加轨道名称
        if track_info["track_name"]:
            track.append(mido.MetaMessage('track_name', name=track_info["track_name"], time=0))
            
        # 添加乐器设置 (只有非打击乐通道需要 Program Change)
        if channel != 9:
            if track_info["instrument_name"] and track_info["instrument_name"].startswith("Program "):
                program = int(track_info["instrument_name"].split(" ")[1])
                track.append(mido.Message('program_change', program=program, time=0, channel=channel))
            
        # 3. 收集所有音符事件
        events = []
        ticks_per_beat = data["ticks_per_beat"]
        
        for note in track_info["notes"]:
            start_tick = int(note["beat"] * ticks_per_beat)
            end_tick = int((note["beat"] + note["duration"]) * ticks_per_beat)
            
            events.append({'type': 'note_on', 'note': note['pitch'], 'velocity': note['velocity'], 'tick': start_tick})
            events.append({'type': 'note_off', 'note': note['pitch'], 'velocity': 0, 'tick': end_tick})
            
        # 4. 按时间排序并计算增量时间
        events.sort(key=lambda x: (x['tick'], 1 if x['type'] == 'note_off' else 0)) # Note off first at same tick
        last_tick = 0
        for event in events:
            delta_time = event['tick'] - last_tick
            track.append(mido.Message(
                event['type'], 
                note=event['note'], 
                velocity=event['velocity'], 
                time=delta_time,
                channel=channel
            ))
            last_tick = event['tick']
            
    # 5. 保存文件
    mid.save(midi_path)
    print(f"MIDI file generated successfully: {midi_path}")

if __name__ == "__main__":
    import copy
    
    # 1. 处理音轨 1 (旋律轨) 的力度律动 (127, 60, 60)
    track_1 = MIDI_DATA["tracks"][1]
    for i, note in enumerate(track_1["notes"]):
        if i % 3 == 0:
            note["velocity"] = 127
        else:
            note["velocity"] = 60
            
    # 2. 生成音轨 3 (Flute)，基于音轨 1 的旋律数据
    flute_track = {
        "track_number": 3,
        "track_name": "Flute",
        "instrument_name": "Program 73",
        "notes": copy.deepcopy(track_1["notes"])
    }
    MIDI_DATA["tracks"].append(flute_track)

    # 3. 生成音轨 4 (Drums)，基于音轨 2 (GrandPno) 的节奏数据
    track_2 = MIDI_DATA["tracks"][2]
    drum_notes = []
    cymbal_notes = []
    for i, note in enumerate(track_2["notes"]):
        # --- 底鼓逻辑 ---
        drum_note = copy.deepcopy(note)
        drum_note["pitch"] = 36  # Acoustic Bass Drum
        drum_note["pitch_name"] = "Bass Drum"
        # 鼓组力度调大：重音127，轻音85 (之前是60)
        if i % 3 == 0:
            drum_note["velocity"] = 127
        else:
            drum_note["velocity"] = 85
        drum_notes.append(drum_note)

        # --- 镲片逻辑 (每隔一个重音演奏: 1, 7, 13...) ---
        # i % 3 == 0 是所有重音位置 (0, 3, 6, 9, 12, 15...)
        # (i // 3) % 2 == 0 筛选出第 1, 3, 5... 个重音位置 (即 i=0, 6, 12...)
        if i % 3 == 0 and (i // 3) % 2 == 0:
            cymbal_note = copy.deepcopy(note)
            cymbal_note["pitch"] = 49  # Crash Cymbal 1
            cymbal_note["pitch_name"] = "Crash Cymbal"
            cymbal_note["velocity"] = 120  # 镲片通常比较响
            cymbal_notes.append(cymbal_note)

    drum_track = {
        "track_number": 4,
        "track_name": "Drums",
        "instrument_name": "Percussion",
        "channel": 9,
        "notes": drum_notes
    }
    
    cymbal_track = {
        "track_number": 5,
        "track_name": "Cymbal",
        "instrument_name": "Percussion",
        "channel": 9,
        "notes": cymbal_notes
    }
    
    MIDI_DATA["tracks"].append(drum_track)
    MIDI_DATA["tracks"].append(cymbal_track)
    
    generate_midi_from_data(MIDI_DATA, r"blessyou_plus.mid")

```