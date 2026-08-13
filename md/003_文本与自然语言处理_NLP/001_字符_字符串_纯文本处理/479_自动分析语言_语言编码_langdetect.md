---
show: step
version: 1.0
enable_checker: true
---

# 时间日期

## 回忆
- 上次我们了解了翻译功能
	- 可以在语言之间进行翻译
- 默认的输入语言
	- 来自于自动检测出的语言类型
- 有没有专门检测语言的类呢？

### 准备环境

```
pip install langdetect
```

- 安装类库
	- language detect
	- 语言检测

### 支持语言类型

```
af, ar, bg, bn, ca, cs, cy, da, de, el, en, es, et, fa, fi, fr, gu, he,
hi, hr, hu, id, it, ja, kn, ko, lt, lv, mk, ml, mr, ne, nl, no, pa, pl,
pt, ro, ru, sk, sl, so, sq, sv, sw, ta, te, th, tl, tr, uk, ur, vi, zh-cn, zh-tw
```

- 缩略来自于 ISO 639-1 codes

### 具体实验

```
from langdetect import detect
detect("War doesn't show who's right, just who's left.")
detect("Ein, zwei, drei, vier")
```

- 这样可以检测出具体的语言
- 如果不太明确语言呢？

### 概率

```
>>> from langdetect import detect_langs
>>> detect_langs("Otec matka syn.")
[sk:0.572770823327, pl:0.292872522702, cs:0.134356653968]
```

- 会出现概率

### 帮助页面
- https://pypi.org/project/langdetect/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699168877126)

- 还有其他语言翻译的包吗？

### 搜索

- 想要的关键词iciba
	- 根据更新日期排序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699169688001)

### 分析类库

- https://pypi.org/project/translators/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699169724167)

- 可以尝试使用

### 总结🤔

- 这次了解了检测语言的工具
	- langdetect
- 还可以搜索到最新的使用了iciba的翻译类库
- 可以自己探索相关内容
- 如何将文本信息转化为语音呢？
- 我们下次再说👋🏻 