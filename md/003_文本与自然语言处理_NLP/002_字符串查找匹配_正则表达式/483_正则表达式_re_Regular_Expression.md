---
show: step
version: 1.0
enable_checker: true
---

# 时间日期

## 回忆
- 上次了解了 字符串匹配函数
	- find
	- index
	- startswith
	- endswith
	- in
- 对于特定模式字符串的匹配
	- 编写了一个函数
- 可以让字符串模式匹配更简单一些吗？

### 11位数字手机号码

- 正则匹配

```
import re
def containsTel(s: str):
    pattern = r"\d{11}"
    if re.search(pattern, s):
        return True
    else:
        return False


if __name__ == "__main__":
    s = "13901234567oeasy"
    print(s,containsTel(s))
    s = "oeasy12345678901"
    print(s,containsTel(s))
    s = "oea12345678902oeasy"
    print(s,containsTel(s))
```

- 运行结果一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1707997226677)

- 什么是正则表达式呢？

### 游乐场

```
import re
help(re)
```

- re的意思是
	- regular expression 
	- 正则表达式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708003788321)

- 这是专门用来模式匹配的类库
	- 模式 pattern 

```
pattern = r"\d{11}"
```

- 这个模式什么意思呢？

### 判断

- r"\d{11}"
	- r代表raw 原始类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708004466905)

- \d 代表任何十进制数字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708004554466)

- {11}代表11个字符
	- 总体就是11个十进制字符
- 如果电话号码中有—
	- 1390-1234-567
	- 139-012-34567
- 该如何匹配呢？

### 新的匹配

- 大括号 {}
	- 控制重复字符数量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708005047717)

- 中括号 []
	- 暗示 集合中的 字符 都可以选

```python3
import re
def containsTel(s: str):
    pattern = r'[\d-]{11}'
    if re.search(pattern, s):
        return True
    else:
        return False


if __name__ == "__main__":
    s = "1390-123-4567oeasy"
    print(s,containsTel(s))
    s = "oeasy1234-567-8901"
    print(s,containsTel(s))
    s = "oea123-456-78902oeasy"
    print(s,containsTel(s))
```


- 可以把中括号换成小括号吗？

### 小括号

```
import re
def containsTel(s: str):
    pattern = r'(\d-){11}'
    if re.search(pattern, s):
        return True
    else:
        return False


if __name__ == "__main__":
    s = "1390-123-4567oeasy"
    print(s,containsTel(s))
    s = "oeasy1234-567-8901"
    print(s,containsTel(s))
    s = "oea123-456-78902oeasy"
    print(s,containsTel(s))
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708005380406)

- 应该如何理解小括号呢？

### 小括号

- 小括号 ()
	- 暗示 应该匹配其中的表达式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708005424840)

- 什么样的字符串
	- 匹配r'(\d-){11}'这个模式呢？

### 构造匹配

```
import re
def containsTel(s: str):
    pattern = r'(\d-){11}'
    if re.search(pattern, s):
        return True
    else:
        return False


if __name__ == "__main__":
    s = "1390-123-4567oeasy"
    print(s,containsTel(s))
    s = "oeasy1234-567-8901"
    print(s,containsTel(s))
    s = "oea1-2-3-4-5-6-7-8-9-0-2-oeasy"
    print(s,containsTel(s))
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708005542453)

- r'(\d-){11}' 对应着
	- 前面一个数字
	- 后面一个下划线
	- 这样的组合
	- 出现11次
- r"[\d-]{11}"
	- 数字或者- 总共出现 11次
	- 就很完美吗？

### 修改

- r"[\d-]{11}" 也不是很完美
	- 比如会匹配"-" * 11
		- 这显然不是个 手机号
	- 也会 匹配 1390-123-56
		- 这也不是 可以打的手机号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708005880582)

1. 前2位 
	- 必是数字
2. 中间8位数字
	- 这7位后面可以跟-
3. 最后1位
	- 一位数字

### 重写 模式

| 位置  | 含义 |写法 |缩写|
|---|---|---|---|
|前2位 |必是数字|\d\d|\d{2}|
|中间8位数字|后面可以跟-|(\d-{0,1}){8}|(\d-{0,1}){8}|
|最后1位|一位数字|\d|\d|

```
pattern = r"\d{2}(\d-{0,1}){8}\d"
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708006358218)

- 还可以再简化一下吗？

### 查询文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708006443435)

- {0,1} 可以用?代替

```
import re
def containsTel(s: str):
    pattern = r"\d{2}(\d-?){8}\d"
    if re.search(pattern, s):
        return True
    else:
        return False


if __name__ == "__main__":
    s = "1390-123-4567oeasy"
    print(s,containsTel(s))
    s = "oeasy1234-567-8901"
    print(s,containsTel(s))
    s = "oea123-4-5-6-7-8-9-0-2-oeasy"
    print(s,containsTel(s))
```

- 运行成功

### 总结🤔
- 这次我们接触了
	- 新的字符串模式匹配方式
	- re(regular expression)
	- 正则表达式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1708006998064)

- 这里面的各种特殊字符到底应该如何理解呢？🤔
- 下次再说👋🏻 