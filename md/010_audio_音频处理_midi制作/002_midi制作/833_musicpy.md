### musicpy库 对于和弦有更好的表示方法

```
from musicpy import *
from musicpy.musicpy import C, P, write
from musicpy.structures import chord, drum
from musicpy.daw import *

# **加载音色库**
current_daw = daw(4)  # 只开 4 个通道，0,1,2,3
current_daw.load(0, '02._St._Piano_2_Remastered.sf2')  # 钢琴
current_daw.load(1, 'OverdriveGuitar.sf2')  # 失真吉他
current_daw.load(2, '80s_Synth_Bass.sf2')
current_daw.load(3, 'Standard_Kit.sf2') # 低音贝斯
print(current_daw)

current_daw.set_instrument(0, 1)  # 大钢琴
current_daw.set_instrument(1, 30)  # 失真吉他
current_daw.set_instrument(2, 5)  # 贝斯
current_daw.set_instrument(9, None)  # 9 号通道默认是鼓

# **贝斯部分（微调）**
bass1 = (chord('C1, C2') % (1/16, 1/8) * 4 |
         chord('G1, G2') % (1/16, 1/8) * 4 |
         chord('A1, A2') % (1/16, 1/8) * 4 |
         chord('E1, E2') % (1/16, 1/8) * 4)

bass2 = (chord('G1, G2') % (1/16, 1/8) * 4 |
         chord('A1, A2') % (1/16, 1/8) * 4 |
         chord('C1, C2') % (1/16, 1/8) * 4 |
         chord('E1, E2') % (1/16, 1/8) * 4)

# **吉他部分（旋律调整）**
# **主钢琴和弦（低八度和弦进行）**
piano_1 = (C('C', 4) @ [1, 3, 2, 3, 1, 3, 2, 3] % (1, 1/8) |
           C('G', 4) @ [1, 3, 2, 3, 1, 3, 2, 3] % (1, 1/8) |
           C('Am', 4) @ [1, 3, 2, 3, 1, 3, 2, 3] % (1, 1/8) |
           C('Em', 4) @ [1, 3, 2, 3, 1, 3, 2, 3] % (1, 1/8))  # ✅ Am7 → Amaj

# **旋律部分（高八度）**
piano_2 = ((C('G', 5) + 'G5') @ [1, 2, 3, 2, 1, 2, 3, 2] % (1, 1/8) |
           (C('Am', 5) + 'A6') @ [1, 2, 3, 2, 1, 2, 3, 2] % (1, 1/8) |
           (C('C', 5) + 'C6') @ [1, 2, 3, 2, 1, 2, 3, 2] % (1, 1/8) |
           (C('Em', 5) + 'E6') @ [1, 2, 3, 2, 1, 2, 3, 2] % (1, 1/8))

# **鼓组（简化节奏）**
drum1 = drum('K, S, H, K, S, K, H, S').notes  # 简化鼓点节奏
drum2 = drum('H, H, H, H, H, H, H, H').notes  # 加强 hi-hat
drum_part = (drum1 * 4 | drum2 * 4)

# **合成器（简化和弦与音量控制）**
synth_pad = chord('C4, E4, G4, B4') % (1,) | chord('G4, B4, D5, F#5') % (1,) | \
            chord('F4, A4, C5, E5') % (1,) | chord('A4, C5, E5, G5') % (1,)

synth_pad.set_volume(50)  # 调低音量，避免影响整体

# **调整乐器进入时间**
bass_part = (bass1 * 2 | bass2 * 4) + 3
piano_part = (piano_1 * 2 | piano_2 * 2) + 3
drum_part = drum_part * 3  # 鼓从头进
synth_pad_part = (synth_pad * 4) + 6  # 合成器稍微晚点进

# **最终乐曲**
result = P(tracks=[bass_part, piano_part, drum_part, synth_pad_part],
           instruments=[5, 1, 26, 9],  # 确保全是 0-127 之间
           channels=[2, 0, 9, 9],
           daw_channels=[0, 1, 2, 3],
           start_times=[0, 0, 0, 8],
           bpm=165,
          )

# **播放 & 导出**
current_daw.play(result)
write(result, name='和谐的乐曲11-改.mid')



```