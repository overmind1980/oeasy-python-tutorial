本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# 时间日期

## 回忆
- 上次我们接触了
	- 新的字符串模式匹配方式
	- re(regular expression)
	- 正则表达式

![图片描述](uid1190679-20240215-1708006998064.png)

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

- r"..."
	- 代表三个字符(不能有换行)
	- 匹配 到 oea

![图片描述](uid1190679-20240216-1708049880125.png)

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

![图片描述](uid1190679-20240216-1708052421298.png)

- 帮助原文

![图片描述](uid1190679-20240216-1708049893425.png)

- 搜索字符串查找匹配
	- 返回一个复合匹配的对象实例
- 可以返回多个对象实例吗？

### findall

![图片描述](uid1190679-20240216-1708050033888.png)

- 返回一个列表
	- 列表中 是 不覆盖的 匹配模式

![图片描述](uid1190679-20240216-1708050145059.png)

- 这确实是个列表
	- 但是如何理解 不覆盖？

### 修改

- 将匹配模式设置为
	- r".."
	- 代表2个字符(不能有换行)
	- 匹配 到 ['oe','as']

```
import re
s = "oeasy"
pattern = r".."
flag = re.search(pattern, s)
print(flag)
```

- 运行结果

![图片描述](uid1190679-20240216-1708050335116.png)

- 结果之间不覆盖
	- non-overlapping
- 如果就想要覆盖呢？

### 覆盖

![图片描述](uid1190679-20240216-1708050398439.png)

```
import re

s = "oeasy"
pattern = r"..."
matches = re.finditer(pattern, s)

for match in matches:
    print("Matched substring:", match.group(0))
```

- 看起来还是会消耗原字符串

![图片描述](uid1190679-20240216-1708050755188.png)

- 如何不消耗原字符串呢？

### 查找模式

![图片描述](uid1190679-20240216-1708050877957.png)

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

![图片描述](uid1190679-20240216-1708051820068.png)

- 确实实现了 不消耗的效果

### 开始处

- . 
	- 匹配 任意非换行字符

![图片描述](uid1190679-20240216-1708053249068.png)

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

![图片描述](uid1190679-20240216-1708053321534.png)

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

![图片描述](uid1190679-20240216-1708053321534.png)

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

![图片描述](uid1190679-20240216-1708053414683.png)

- 不是开始就不行

### 又开始就有结束

![图片描述](uid1190679-20240216-1708053492742.png)

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

![图片描述](uid1190679-20240216-1708053839311.png)

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

![图片描述](uid1190679-20240216-1708053944219.png)

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

![图片描述](uid1190679-20240216-1708054012210.png)

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

![图片描述](uid1190679-20240216-1708053414683.png)

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

![图片描述](uid1190679-20240216-1708058313991.png)

### 具体案例

```
import re

plt.rcParams['font.sans-serif'] = ['WenQuanYi Zen Hei']
plt.rcParams['axes.unicode_minus'] = False

def split_chapters(content):
    # 使用正则表达式匹配章回标题格式
    pattern = r'第[零一二三四五六七八九十百]+回\s+[\u4e00-\u9fa5]+[\u4e00-\u9fa5\s]+[\u4e00-\u9fa5]'
    chapters = re.split(pattern, content)
    titles = re.findall(pattern, content)
    print(titles)
    
    chapter_list = []
    for title, content in zip(titles, chapters[1:]):
        chapter_list.append({
            'title': title.strip(),
            'content': content.strip()
        })
    return chapter_list

def analyze(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    chapters = split_chapters(content)
    return chapters

if __name__ == "__main__":
    chapters = analyze('hlm.txt')
    print(f"总共分析了 {len(chapters)} 个章回")
```

![图片描述](uid1190679-20250208-1738977231416.png)

- 可以分析
	- 谁在红楼梦里面出现次数最多
	- 那个章回字数最多
	- 章回的感情数值如何


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