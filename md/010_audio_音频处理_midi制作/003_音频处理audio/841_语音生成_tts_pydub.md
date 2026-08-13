```
sudo apt-get install espeak
pip3 install pyttsx3 pydub
```

```

from pydub import AudioSegment
import pyttsx3

# 创建TTS引擎
engine = pyttsx3.init()

# 设置要转换的文本
text = "Hello!"

# 将文本转换为语音
engine.say(text)

# 输出到文件
engine.save_to_file(text, 'output.mp3')
```

- 生成文件可以下载到本地打开

### edge_tts

```
import edge_tts
import asyncio

with open("poem.txt", encoding="utf-8") as f:
    poem = f.read()

voice = "zh-CN-XiaoxiaoNeural"  # 微软自然女声

async def tts():
    communicate = edge_tts.Communicate(poem, voice)
    await communicate.save("poem.wav")

if __name__ == "__main__":
    asyncio.run(tts()) 
```

- 可以朗读出来