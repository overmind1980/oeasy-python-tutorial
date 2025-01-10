---
show: step
version: 1.0
enable_checker: true
---

# 随机数字运算

## 回忆上次内容

- 上次主要是 随机数的生成
  - 使用 random包中的 randint(a,b)函数
  - 生成[a,b]范围中的整数
	  - 包括 两端 a,b

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188927/uid1190679-20250105-1736084492460) 

- 手机验证码 可以自己生成吗？🤔

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1030725/uid1190679-20241224-1735014001250)

- 但是这样的话第一位就不能是0了

### 再问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1030725/uid1190679-20241224-1735014114846) 

- 看起来做了个循环
	- 代码可以理解

```
import random

# 生成一个6位的随机数字，每位数字可以是0-9
random_number = ""
for _ in range(6):
    random_digit = random.randint(0, 9)
    random_number += str(random_digit)

# 显示生成的随机数字
print(f"生成的6位随机数字是: {random_number}")
```

### 结果

- 运行成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1030725/uid1190679-20241224-1735014815215) 

- 我想要结果
	- 不止包括数字
	- 还包括大小写字母

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1030725/uid1190679-20250105-1736085540899/wm) 

- 可以吗？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1030725/uid1190679-20241224-1735015019704) 

```
import random
import string

# 定义字符集，包括数字、大写字母和小写字母
characters = string.digits + string.ascii_uppercase + string.ascii_lowercase

# 生成一个6位的随机字符串
random_string = ""
for _ in range(6):
    random_char = random.choice(characters)
    random_string += random_char

# 显示生成的随机字符串
print(f"生成的6位随机字符串是: {random_string}")
```

### 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1030725/uid1190679-20241224-1735015477371) 

- 想要出了数字、大小写字母
	- 还包括符号

### 再问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1030725/uid1190679-20241224-1735015566149) 

```
import random
import string

# 定义字符集，包括数字、大写字母、小写字母和符号
characters = string.digits + string.ascii_uppercase + string.ascii_lowercase + string.punctuation

# 生成一个6位的随机字符串
random_string = ""
for _ in range(6):
    random_char = random.choice(characters)
    random_string += random_char

# 显示生成的随机字符串
print(f"生成的6位随机字符串是: {random_string}")
```

### 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1030725/uid1190679-20241224-1735015607084) 

- 想要结果必须包含包括数字、大写字母、小写字母和符号

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1030725/uid1190679-20241224-1735015696024) 

```
import random
import string

# 定义字符集
digits = string.digits  # 数字
uppercase_letters = string.ascii_uppercase  # 大写字母
lowercase_letters = string.ascii_lowercase  # 小写字母
punctuation = string.punctuation  # 符号

# 确保生成的字符串中包含至少一个数字、一个大写字母、一个小写字母和一个符号
random_string = [
    random.choice(digits),
    random.choice(uppercase_letters),
    random.choice(lowercase_letters),
    random.choice(punctuation)
]

# 从所有字符集中选择剩余的两个字符
all_characters = digits + uppercase_letters + lowercase_letters + punctuation
for _ in range(2):
    random_string.append(random.choice(all_characters))

# 打乱顺序以确保随机性
random.shuffle(random_string)

# 将列表转换为字符串
random_string = ''.join(random_string)

# 显示生成的随机字符串
print(f"生成的6位随机字符串是: {random_string}")
```

- 可以让随机结果固定下来吗？

### 事无绝对

- 如果上限和下限 被钳位(clamp)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727584145613)

- 那么随机数 
	- 也就 被 钳成
	- 固定数值 了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629425492093)

- 如果下限高于上限呢？

### 胡乱尝试

- 程序报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629425590340)

- ValueError
	- 空的范围
	- 对于randrange函数
- 去找找
	- 这个 报错信息

### 搜索

-  在/usr/lib/python3.8/random.py
	- 反向搜索
	- /empty range for randrange

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690774523472)

- 真的找到了抛出异常的位置

### 位置

- 按n查找下一个匹配
	- 可以找到具体报错的位置 226 行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690774655189)

- 天哪 😱
	- 随机也是有章可循的
	- 随机数 也是 算法计算得到的结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727584411432)

- 也就是说	
	- 随机 也是 `可控` 的？！ 😱



### 总结

- 这次输出了
  - 随机数字 密码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1030725/uid1190679-20241224-1735015735002) 

- 这下知道
	- 平时收到的`验证码`
	- 怎么来的了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230808-1691503723604)

- 总结一下本章内容吧～ 👋
