---
show: step
version: 1.0
enable_checker: true
---

# r-string

## 回忆

| 类型 | 含义 |效果 |
| --- | --- | --- |
| f-string |  formatted string | 可使用上下文变量 |
| r-string |  raw string | 保持原始 |
| fr-string |  raw formatted string | 可使用变量，其余保持原始 |
| b-string | byte | 字节序列 |
| ''' '''| Triple-quoted string   | 三引号 |

- r-string的作用是 保留raw格式的文本
	- 反斜杠\
	- 单引号'
	- 双引号"
	- 都会保留
- 我们可以根据这些规则
	- 制作一个进度条呢？🤔

### 回忆一个例子

```
for align, text in zip("<^>", ["left", "center", "right"]):
    print("{0:{fill}{align}16}".format(text, fill=align, align=align))
```

![图片描述](../0460/uid1190679-20230217-1676601016523.png)

- 先回忆 构成字符串格式的
	- 设置规则

### 总的范式

![图片描述](../0464/uid1190679-20230217-1676630337312.png)

#### 对齐方式

![图片描述](../0464/uid1190679-20230217-1676630371012.png)

#### 正负号设置

![图片描述](../0464/uid1190679-20230217-1676630407365.png)

### 数字格式

#### 整数格式设置

![图片描述](../0464/uid1190679-20230217-1676630444190.png)

#### 浮点型格式设置

![图片描述](../0464/uid1190679-20230217-1676630482967.png)

- 回忆结束
- 现在需要你来写了

### 具体代码

```
import time
width = 80
for percent in range(1,101):
    print(f"\r{percent:>3d}%",end="")
    time.sleep(0.1)
```

- 先做一个基本的百分比

![图片描述](../0464/uid1190679-20230217-1676638341270.png)

### 最终代码

```
import time
width = 80
for percent in range(1,101):
    print(f"\r{percent:>3d}%[",end="")
    num = percent * (width - 6) // 100
    print("=" * num, end="")
    print(" " * (width - 7 - num), end="")
    print("]", end="")
    time.sleep(0.1)
```

- 最终效果

![图片描述](../0464/uid1190679-20230217-1676638984927.png)

- 可以再好看一点吗？

### 使用特殊符号

```
import time
for i in range(1, 101):
    print("\r", end="")
    print("进度: {}%: ".format(i), "▓" * (i // 2), end="")
    time.sleep(0.05)
```

- 运行结果

![图片描述](../0464/uid1190679-20240202-1706880617730.png)

- 再把耗费时长显示出来

### 显示耗时

```
import time
t = 60
start = time.perf_counter()
for i in range(t + 1):
    finish = "▓" * i
    need_do = "-" * (t - i)
    progress = (i / t) * 100
    dur = time.perf_counter() - start
    print("\r{:^3.0f}%[{}->{}]{:.2f}s".format(progress, finish, need_do, dur), end="")
    time.sleep(0.05)
```

| 格式字符串|变量| 含义|对应格式|
|---|---|---|---|
|{:^3.0f}|progress| 进度百分比| 局中 宽度为3 精度为0 浮点型|
|{}|finish| 完成位置|直出|
|->{}|need_do|待完成|直出|
|{:.2f}s|dur|耗时|精度2位 浮点型|

![图片描述](../0464/uid1190679-20240202-1706880857506.png)

- 还有什么其他方法吗？

### 查询帮助手册

- https://pypi.org/project/tqdm/

![图片描述](../0464/uid1190679-20240202-1706881478550.png)

- tqdm 意思是 进度
	- 来自于阿拉伯语

### 实际代码

```
pip install tqdm
```

- 先安装类库

```
import time
from tqdm import tqdm
for i in tqdm(range(1, 60)):
    """
    代码
    """
    # 这代码部分 需要0.05s，循环执行60次
    time.sleep(0.05)
```

- 运行结果

![图片描述](../0464/uid1190679-20240202-1706881677265.png)

- 还可以有其他类库吗？

### 搜索

- 去pypi搜索
	- https://pypi.org/search/?q=progress+bar&o=-created

![图片描述](../0464/uid1190679-20240202-1706881957934.png)

- 类库还是相当多的
	- 排序方法两种
	- 如果有星标的话 会更好筛选

### 总结

- 这次制作了一个
	- 格式化字符串的应用
	- 叫做进度条
- 通过进度条
	- 我们就可以知道 
	- 下载 或者 安装的进度

![图片描述](../0464/uid1190679-20230217-1676639426889.png)

- 还能玩点什么呢？🤔
- 下次再说👋🏻
