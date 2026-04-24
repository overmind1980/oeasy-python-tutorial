---
show: step
version: 1.0
enable_checker: true
---

# 时间日期

## 回忆
- 上次我们了解了检测语言
	- 可以根据 检测到的语言
	- 进行翻译
- 可以让 文本 直接发出声音吗？？🤔

### 安装 环境

```
yes|sudo apt install espeak
pip install pyttsx3
pip install pydub
```

- 安装之后准备代码

### 代码

```
import pyttsx3
from pydub import AudioSegment

# Initialize the pyttsx3 engine
engine = pyttsx3.init()

# Set the properties for the speech
engine.setProperty('rate', 150)  # Speed of speech
engine.setProperty('volume', 0.8)  # Volume (0.0 to 1.0)

# Provide the text to be spoken
text = "Hello, how are you?"

# Convert the text to speech
engine.save_to_file(text, './Code/output.mp3')
engine.runAndWait()
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707908100031)

- 指定文件夹里面有了音频文件
- 可以直接下载并播放
- 可以朗诵中文吗？

### 朗诵中文

```
import pyttsx3

engine = pyttsx3.init()
engine.setProperty('rate', 150)
engine.setProperty('volume', 0.7)

text = "你好，欢迎使用 pyttsx3 中文语音合成！"

engine.save_to_file(text, './Code/output.wav')
engine.runAndWait()
```

- 运行结果

```
import pyttsx3
from pydub import AudioSegment

text = "你好，世界！"

# 创建一个TTS引擎
engine = pyttsx3.init()

# 设置中文语言
engine.setProperty('voice', 'zh')

# 将文本转换为语音
engine.save_to_file(text, './Code/output.wav')
engine.runAndWait()
```

- 效果有点生硬

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707920031885)

- 可以把中文转化为拼音吗？

### pypinyin

```
pip install pypinyin
```

- 安装之后 运行程序

```
from pypinyin import lazy_pinyin,Style

text = "我喜欢学习编程"
print(lazy_pinyin(text,style=Style.TONE))

```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707920935114)

### 总结🤔

- 这次研究了文本生成语音的方式
	- 使用tts相关功能
	- 可以把文本转化为语音文件
- 还研究了 pypinyin 包 
	- 将中文汉字转化为拼音
- 文本str还有什么可以研究的呢？🤔
- 下次再说👋🏻 