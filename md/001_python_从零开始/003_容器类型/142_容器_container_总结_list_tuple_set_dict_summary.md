---
show: step
version: 1.0
enable_checker: true
---

# 字典类型

## 回忆

- 上次学习了 ai时代下
	- 综合使用 容器对象的方式
- 向ai询问过程
	1. 先明确 数据结构 
	2. 再 细分 步骤 
	3. 肯定成果 指出问题
	4. 小步快跑 迅速迭代

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260323-1774230747828) 

- 这还真是一个大总结呢😱

### 首先什么是容器

- 容器 就是 装东西的 东西
	- 瓶瓶罐罐 之类 的
- 各种数据 放在 容器里
	- 数据 处理完了 
	- 还放在 容器里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210915-1631664676801)

- 容器里面 有容器 
	- 怎么理解？🤔

### 容器嵌套

- 比如 这个 托盘
	- 盘子 是 菜的 容器
	- 托盘 是 盘子的 容器
	- 桌子 是 托盘的 容器
	- 厨房 是 桌子的 容器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210915-1631664818987)

- python 编程中 
	- 有什么样的 容器呢？

### 容器类型

- 序列类(sequence)
  - 列表(list)
  - 元组(tuple)
  - 字符串(str)
- 集合类(set)
  - 集合(set) 
  - 冰封集合(frozenset)
- 字典类
  - 字典(dict)

### 容器次序

- 序列类 
	- 都是有顺序的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260323-1774231038585) 

- 序列序列
	- 有序的排列
	- 序列 就是 sequence 
- sequence 这个词
	- 怎么来的呢？

### 序列类型

- sequence 来自于
	- *sekw-
	- seek
	- 跟着的
	- to follow

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221201-1669900303001)

### sequential

- sequential
	- 跟随着的
	- 有次序的
	- 线性的 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260325-1774426159710) 

### second

- 跟着 第一个 的 是 
	- 第二个
	- second

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260325-1774419037999) 

- 时间 一秒紧跟着一秒

### subsequent

- subsequent
	- sub 往下 
	- sequent 跟随
	- 往下跟随 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260325-1774419535480) 

- 随后 而来的 
	- 接下来 下一个

### consequence

- consequence
	- con 共同的
	- sequence 跟随
	- 共同跟随的
	- 随之而来的
	- 结局
		- 后果 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260325-1774441013417) 

- 因为有后果 
	- 所以很重要

### sequence

- sequence
	- 序列 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260325-1774427063257) 

- 有顺序的排列

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260325-1774426622741) 

- 集合 和 字典 有顺序吗？

### 集合的顺序

```
{1, 2}
{2, 1}
```

- 集合 是 没有顺序的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260323-1774231087421) 

### 字典 有次序

```
d = {"cat": "猫", "dog": "狗"}
d
d = {"dog": "狗", "cat": "猫"}
d
```

- 字典有顺序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260526-1779766274197) 

- popitem的时候
	- 先pop新的 

```
help(dict.popitem)
```

- 集合和字典 都是 大括号
	- 一对 空大括号是什么呢？

### 字典重要性

```
type({})
```

- 空大括号 就是字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211126-1637922984329)

- 字典 比 集合 重要

```
dict()
set()
```

- 空大括号 就是 字典
	- set() 才是空集

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260528-1779927660424) 

- 字典和集合 
	- 有 什么关系 呢？

### 集合和字典

| 特性       | 字典       | 集合       |
|------------|------------|------------|
| 有序？     | ✅ 有序     | ❌ 无序     |
| 结构？     | 键值对     | 纯元素     |
| 唯一？     | 键唯一     | 元素唯一   |
| 可索引？   | ✅ 可索引   | ❌ 不可索引 |

- 字典 在最开始的时候 
	- 就是 键值对 的集合
	- 是无序的
- 为什么 现在 会变成有序 呢？

### 变化过程

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260323-1774231511338) 


### 快递价格

- 能否用这张图作为提示词
	- 让ai生成 相应的程序呢？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3835955/uid1190679-20250304-1741064288564) 

### 具体操作

```
根据这个生成python代码，输入目的地，重量，得到价格
```

- 再把照片发给ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3649072/uid1190679-20260320-1773984305651) 

### 代码

- 这次元组 作为字典的values

```
# 字典 value 是元组：(首重价格, 续重价格)
price_data = {
    "江苏": (8, 2),
    "浙江": (8, 2),
    "上海": (8, 2),
    "安徽": (8, 2),
    "广东": (10, 5),
    "福建": (10, 5),
    "湖南": (10, 5),
    "湖北": (10, 5),
    "山东": (10, 5),
    "天津": (10, 5),
    "北京": (10, 5),
    "江西": (10, 5),
    "河南": (10, 5),
    "河北": (10, 5),
    "海南": (12, 8),
    "四川": (12, 8),
    "云南": (12, 8),
    "贵州": (12, 8),
    "陕西": (12, 8),
    "重庆": (12, 8),
    "山西": (12, 8),
    "广西": (12, 8),
    "吉林": (12, 8),
    "黑龙江": (12, 8),
    "内蒙古": (15, 12),
    "宁夏": (15, 12),
    "甘肃": (15, 12),
    "辽宁": (15, 12),
    "青海": (15, 12),
    "新疆": (22, 22),
    "西藏": (25, 25)
}

def calculate_price(destination, weight):
    # 判断省份是否存在
    if destination not in price_data:
        return None
    
    # 元组取值：第0位是首重，第1位是续重
    first_weight, continued_weight = price_data[destination]
    
    if weight <= 1:
        return first_weight
    else:
        extra = weight - 1
        # 不足1kg按1kg计算续重
        extra_kg = int(extra) if extra.is_integer() else int(extra) + 1
        return first_weight + extra_kg * continued_weight

# 测试运行
dest = input("请输入目的地省份：")
weight = float(input("请输入重量(kg)："))
price = calculate_price(dest, weight)

if price is None:
    print("未找到该地区价格")
else:
    print(f"运费：{price} 元")
```

- 这是元组作为 value
	- 元组 可以作为 key 吗？

### 具体问题

- 在世界上 飞行
	- 落地之后 有一个时区转化的问题

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3649072/uid1190679-20250222-1740216775350) 

- 这个问题 应该如何描述呢?

### 开局

```
Python 时区计算：5 个城市（北京、伦敦、纽约、东京、悉尼），输入出发地、起飞时间、目的地，自动算当地到达时间，带数据校验和跨天显示
```

- 整体描述
	- 限定在 五个城市

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3649072/uid1190679-20260322-1774187108986) 

### 核心结构

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3649072/uid1190679-20260320-1773965483313) 

- 这里元组作为字典的key

```
# 假设的飞行时长（单位：小时），确保包含所有城市之间的往返飞行时长
flight_duration = {
    ("北京", "伦敦"): 10,
    ("伦敦", "北京"): 10,
    ("北京", "纽约"): 13,
    ("纽约", "北京"): 13,
    ("北京", "东京"): 3,
    ("东京", "北京"): 3,
    ("北京", "悉尼"): 10,
    ("悉尼", "北京"): 10,
    ("伦敦", "纽约"): 7,
    ("纽约", "伦敦"): 7,
    ("伦敦", "东京"): 9,
    ("东京", "伦敦"): 9,
    ("伦敦", "悉尼"): 11,
    ("悉尼", "伦敦"): 11,
    ("纽约", "东京"): 14,
    ("东京", "纽约"): 14,
    ("纽约", "悉尼"): 16,
    ("悉尼", "纽约"): 16,
    ("东京", "悉尼"): 7,
    ("悉尼", "东京"): 7
}

# 假设的城市和时区信息（简化示例）
city_timezones = {
    "北京": 8,
    "伦敦": 0,
    "纽约": -5,
    "东京": 9,
    "悉尼": 10
}

# 手动输入出发地、起飞时间和目的地
while True:
    departure_city = input("请输入出发城市（例如：北京）: ")
    if departure_city not in city_timezones:
        print("输入的出发城市不存在，请重新输入。")
        continue
    break

while True:
    departure_time_str = input("请输入出发时间（格式：HH:MM，例如：08:00）: ")
    try:
        hours, minutes = map(int, departure_time_str.split(':'))
        if 0 <= hours < 24 and 0 <= minutes < 60:
            break
        else:
            print("出发时间格式不正确或超出范围，请重新输入。")
    except:
        print("出发时间格式不正确，请重新输入。")

while True:
    arrival_city = input("请输入到达城市（例如：纽约）: ")
    if arrival_city not in city_timezones:
        print("输入的到达城市不存在，请重新输入。")
        continue
    if (departure_city, arrival_city) not in flight_duration:
        print("该航线不存在，请重新输入。")
        continue
    break

departure_timezone = city_timezones[departure_city]
arrival_timezone = city_timezones[arrival_city]
duration = flight_duration[(departure_city, arrival_city)]

# 将出发时间转换为分钟数
departure_time_minutes = hours * 60 + minutes
# 计算起飞时到达城市的当地时间（分钟数）
local_time_at_departure_in_arrival_city = departure_time_minutes + (arrival_timezone - departure_timezone) * 60
# 加上飞行时间（分钟数）得到到达时间（分钟数）
arrival_time_minutes = local_time_at_departure_in_arrival_city + duration * 60
# 计算经过的天数
days_passed = arrival_time_minutes // (24 * 60)
# 处理时间超过一天的情况，转换为当天的分钟数
arrival_time_minutes = arrival_time_minutes % (24 * 60)
# 转换回小时和分钟
arrival_hours = arrival_time_minutes // 60
arrival_minutes = arrival_time_minutes % 60

print(f"飞行时间为 {duration} 小时。")
if days_passed > 0:
    print(f"到达 {arrival_city} 的当地时间是次日 {arrival_hours:02d}:{arrival_minutes:02d} 点")
else:
    print(f"到达 {arrival_city} 的当地时间是 {arrival_hours:02d}:{arrival_minutes:02d} 点")
```


### 元组 与 字典

- 元组
	- 可以 做 字典的value
	- 也可以 做 字典的key

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3649072/uid1190679-20260322-1774188259012) 

- 但 列表 不行
	- 不能作为 字典的key
	- 因为 key必须 可哈希
- 怎么理解？

### 解释

- 字典的 key 也必须是 可哈希的
	- 列表变量 不能作为字典的key

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260324-1774318167432) 

- 集合项 也必须是 可哈希的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211126-1637922505953)

- 但是可以把 列表 
	- 转化为 元组

### 转化

```
tuple([1, 2, 3])
```

- 把 不可哈希的列表
	- 转化为 可以哈希的元组

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260526-1779767834196) 

- 然后 再做key 和 元组项

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260526-1779767871808) 

- 就解决问题了 

### 流动

- 数据 就像水 一样

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260528-1779925785617) 

- 在不同容器间流淌

### 总结

- 这些就是我们接触到的各种容器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695034993258)

- 根据这些容器可以跑什么流程吗？🤔

| 类型名称   | 描述     | 可变性 | 举例                         |
| ---------- | -------- | ------------ | ---------------------------- |
| 列表       | list     | 是           | [1,2,3]、["a","b"],list(1,2) |
| 元组       | tuple    | 否           | (1,2)                        |
| 字符串     | str      | 否           | "oeasy"                      |
| 集合       | set      | 是           | set([1,2,3])                 |
| 不可变集合 | frozeset | 否           | frozenset([1,2,3])           |
| 字典       | dict     | 是           | {'a':1,'b':2}                |

- 下次再说 👋
