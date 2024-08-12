---
show: step
version: 1.0
enable_checker: true
---

# 时间日期

## 回忆
- 上次我们接触了
	- 新的字符串模式匹配方式
	- re(regular expression)
	- 正则表达式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708006998064)

- 这里面的各种特殊字符到底应该如何理解呢？

### . dot

- Matches any character except a new line
	- 可以指代任何字符 
	- 除了回车符

```
import re
s = "oeasy"
pattern = r"..."
flag = re.search(pattern, s)
print(flag)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708049880125)

- 返回了
	- 起止位置 
	- 具体实例
- 真的无法匹配回车符吗？

### 回车符

```
import re

s = "oe\na\nsy"
pattern = r"..."
matches = re.search(pattern, s)
print(matches)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708052421298)

- 帮助原文

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708049893425)

- 搜索字符串查找匹配
	- 返回一个复合匹配的对象实例
- 可以返回多个对象实例吗？

### findall

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708050033888)

- 返回一个列表
	- 列表中 是 不覆盖的 匹配模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708050145059)

- 这确实是个列表
	- 但是如何理解 不覆盖？

### 修改

- 将匹配模式设置为任意两个字符(不含换行符)

```
import re
s = "oeasy"
pattern = r".."
flag = re.search(pattern, s)
print(flag)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708050335116)

- 结果之间不覆盖
	- non-overlapping
- 如果就想要覆盖呢？

### 覆盖

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708050398439)

```
import re

s = "oeasy"
pattern = r"..."
matches = re.finditer(pattern, s)

for match in matches:
    print("Matched substring:", match.group(0))
```

- 看起来还是会消耗原字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708050755188)

- 如何不消耗原字符串呢？

### 查找模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708050877957)

- 尝试替换模式

```
import re

s = "oeasy"
pattern = r"(?=(...))"
matches = re.findall(pattern, s)

for match in matches:
    print("匹配到的字符:", match)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708051820068)

- 确实实现了 不消耗的效果

### 开始处

- . 
	- 匹配 任意非换行字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708053249068)

- ^ 
	- 只匹配 字符串开始处的 子串

### 代码

```
import re

s = "Hello,oeasy!Hello, World!"
pattern = r"^Hello"
matches = re.findall(pattern, s)
print(matches)
```

- 只能查到一个

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708053321534)

- 回车算新的开始吗？

### 回车

```
import re

s = "Hello,oeasy!\nHello, World!"
pattern = r"^Hello"
matches = re.findall(pattern, s)
print(matches)
```

- 回车不算新的开始

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708053321534)

- 不是开始就不行吗？

### 非开始

```
import re

s = " Hello,oeasy!\nHello, World!"
pattern = r"^Hello"
matches = re.findall(pattern, s)
print(matches)
```

- 加了个空格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708053414683)

- 不是开始就不行

### 又开始就有结束

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708053492742)

- 好像 行尾也算结束！

### 代码

```
import re

s = " Hello,oeasy..Hello,oeasy"
pattern = r"oeasy$"
matches = re.findall(pattern, s)
print(matches)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708053839311)

- 找到一个
- 可以构造一个
	- 行尾的oeasy吗？

### 行尾


```
import re

s = " Hello,oeasy\nHello,oeasy"
pattern = r"oeasy$"
matches = re.findall(pattern, s)
print(matches)
```

- 还是匹配一个

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708053944219)

- 这应该怎么理解呢？

### 在结尾处增加\n
```
import re

s = " Hello,oeasy\nHello,oeasy\n"
pattern = r"oeasy$"
matches = re.findall(pattern, s)
print(matches)
```

- 还是能匹配

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708054012210)

- $
	- 只匹配结尾 的 字符串
	- Match the end of the string	
	- 或者 结尾前换行符之前的字符串
	- or just before the newline at end of the string
- 如果结尾处有多个\n呢？

### 在结尾处增加\n
```
import re

s = " Hello,oeasy\nHello,oeasy\n\n\n"
pattern = r"oeasy$"
matches = re.findall(pattern, s)
print(matches)
```

- 匹配不到了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708053414683)

- 还想匹配到怎么办？

### 修改模式

```
import re

s = " Hello,oeasy\nHello,oeasy\n\n\n"
pattern = r"oeasy\n*$"
matches = re.findall(pattern, s)
print(matches)
```

- 匹配结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240216-1708058313991)

### 总结🤔

- 这次了解了三个re的函数
	- search 
	- findall
	- finditer
- 三个元字符
	- `.` 任意非换行字符
	- `^` 匹配 开头位置
	- `$` 匹配结束位置
- 这开始和结束
	- 刚好和vim跳转一致
	- 你说巧不巧
- 还有什么 元字符 呢？🤔
- 下次再说👋🏻 