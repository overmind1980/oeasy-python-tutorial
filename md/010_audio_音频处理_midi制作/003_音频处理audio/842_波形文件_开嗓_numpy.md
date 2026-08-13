```
import numpy as np
from scipy.io.wavfile import write

# 全局参数（可直接修改）
SAMPLE_RATE = 44100  # 44.1kHz 立体声
VOLUME = 0.35        # 优化后的音量
PHASES = [  # 严格定义4个阶段（顺序固定）
    ('bubble', 30),   # 1. 气泡音30秒
    ('scale', 10),    # 2. 音阶10秒（10个1秒音）
    ('jump', 2.5),    # 3. 跳音2.5秒（5个0.5秒）
    ('hum', 10)       # 4. 哼鸣10秒
]

def generate_wav(filename, duration, content_type):
    """按阶段生成指定类型的WAV（核心修复：参数顺序调整）"""
    t = np.linspace(0, duration, int(SAMPLE_RATE * duration), endpoint=False)
    
    if content_type == 'bubble':
        wave = np.sin(2 * np.pi * (80 + 20 * np.random.rand(len(t))))  # 80-100Hz随机
    elif content_type == 'scale':
        notes = [261.63, 293.66, 329.63, 349.23, 392.00] * 2  # 往返音阶
        wave = np.concatenate([np.sin(2*np.pi*f*np.linspace(0, 1, SAMPLE_RATE)) for f in notes])
    elif content_type == 'jump':
        jumps = [392.00, 329.63, 261.63, 329.63, 392.00]  # 5连跳
        wave = np.concatenate([np.sin(2*np.pi*f*np.linspace(0, 0.5, SAMPLE_RATE//2)) for f in jumps])
    elif content_type == 'hum':
        wave = np.sin(2 * np.pi * 130.81 * t)  # C3持续音
    
    # 统一为立体声+16位PCM（修复维度）
    stereo_wave = np.column_stack((wave, wave)) * VOLUME
    write(filename, SAMPLE_RATE, (stereo_wave * 32767).astype(np.int16))

if __name__ == "__main__":
    for idx, (phase, dur) in enumerate(PHASES, 1):  # 核心修复：参数解包
        filename = f"{idx}_{phase}.wav"
        generate_wav(filename, dur, phase)  # 正确传递3个参数
    print("""✅ 已生成4个精准文件（修复参数错误）：
    1_bubble.wav   （气泡音，30秒）
    2_scale.wav    （音阶，10秒）
    3_jump.wav     （跳音，2.5秒）
    4_hum.wav      （哼鸣，10秒）""")

```


### 思考

- 这个声音为什么怪怪的？

```
import numpy as np
import wave

# 音频参数
SAMPLE_RATE = 44100
DURATION = 2.5       # 缩短单音时长，避免单调
AMPLITUDE = 32767 // 2  # 降低振幅，避免刺耳
CHANNELS = 1
SAMPLE_WIDTH = 2

# 声乐友好的频率（C4开始，三度递进）
FREQUENCIES = [262, 330, 392, 523, 659, 784, 1047, 784, 659, 523, 392, 330, 262]

def generate_tone(freq, duration, harmonics=3, fade=True):
    t = np.linspace(0, duration, int(SAMPLE_RATE * duration), endpoint=False)
    tone = 0
    for n in range(1, harmonics+1):
        tone += np.sin(2 * np.pi * freq * n * t) * (AMPLITUDE / n)  # 叠加谐波
    tone = tone.astype(np.int16)
    
    # 淡入淡出
    if fade:
        fade_samples = int(SAMPLE_RATE * 0.1)
        fade_in = np.linspace(0, 1, fade_samples)
        fade_out = np.linspace(1, 0, fade_samples)
        tone[:fade_samples] *= fade_in
        tone[-fade_samples:] *= fade_out
    return tone

def save_wav(filename, data):
    with wave.open(filename, 'wb') as wf:
        wf.setnchannels(CHANNELS)
        wf.setsampwidth(SAMPLE_WIDTH)
        wf.setframerate(SAMPLE_RATE)
        wf.writeframes(data.tobytes())

# 生成所有音调
all_tone_data = np.array([], dtype=np.int16)
for freq in FREQUENCIES:
    tone = generate_tone(freq, DURATION)
    all_tone_data = np.concatenate([all_tone_data, tone])

# 保存
output_filename = "vocal_warmup_improved.wav"
save_wav(output_filename, all_tone_data)
print(f"✅ 优化后的音频已生成，尝试播放：{output_filename}")

```