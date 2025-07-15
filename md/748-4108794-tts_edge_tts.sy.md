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