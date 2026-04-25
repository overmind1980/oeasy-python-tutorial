# 时间日期

## 回忆
- 上次研究了文本生成语音的方式
	- 使用tts相关功能
	- 可以把文本转化为语音文件
- 还研究了 pypinyin 包 
	- 将中文汉字转化为拼音
- 文本str还有什么可以研究的呢？

### in

```
"o" in "oeasy"
"u" in "oeasy"
```

- in 是 序列类 中
	- 是否包含关系的 关键字
- 字符串中 
	- 可以判断 是否包含子串

![图片描述](uid1190679-20240215-1707990585731.png)

### index


```
"oeasy".index("o")
"oeasy".index("u")
```

- index 是指数
	- 根据指数 也可以判断是否包含子串

![图片描述](uid1190679-20240215-1707991609632.png)

- index 还有其他参数

### index函数细节

![图片描述](uid1190679-20240215-1707991692827.png)

- 可以控制起止位置

```
"oeasy".index("o",2)
"oeasy".index("u",3)
```

- 在范围里面 找不到
	- 就报ValueError

![图片描述](uid1190679-20240215-1707991760986.png)

### find函数

- find函数和index有点像

![图片描述](uid1190679-20240215-1707991863074.png)

- 返回索引坐标

### startswith

![图片描述](uid1190679-20240215-1707991968206.png)

- 是否以某个子串开始

![图片描述](uid1190679-20240215-1707991983783.png)

### endswith

- 类似的还有endswith

![图片描述](uid1190679-20240215-1707992302858.png)

- 是否以某个子串结束
- 如果想判断更复杂的呢？

### 手机号码格式判断

- 比如手机 

![图片描述](uid1190679-20240215-1707993933999.png)

- 以1开头 11位数字如何判断呢？
- 写个函数

### 判断函数 

```
def containsTel(s: str):
    for i in range(len(s)-10):
        if s[i] == "1":
            if s[i:i+11].isnumeric():
                return True
    return False


if __name__ == "__main__":
    s = "13901234567oeasy"
    print(s,containsTel(s))
    s = "oeasy12345678901"
    print(s,containsTel(s))
    s = "oea12345678902oeasy"
    print(s,containsTel(s))
```

- 结果

![图片描述](uid1190679-20240215-1707996559908.png)

### 总结🤔
- 这次了解了 字符串匹配函数
	- find
	- index
	- startswith
	- endswith
	- in
- 对于特定模式字符串的匹配
	- 编写了一个函数
- 可以让字符串模式匹配更简单一些吗？🤔
- 下次再说👋🏻 