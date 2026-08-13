---
show: step
version: 1.0
enable_checker: true
---

# 比较运算符

## 回忆

- 上次了解了 and 的短路规则
	- 从左到右 进行计算
	- 如果 and左边 是False
		- and右边 被短路

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/848689/uid1190679-20260411-1775913873819) 

- and运算符 可以操作的 变量有
	1. 数字
	2. 字符串
	3. 容器类
	- 零、空串、空容器 在and时
		- 对应 False

- 生活中 有哪些 判断呢？🤔

### 合理范围

- 人类的 身高体重
	- 有合理范围
	- 再高 也没见过 3米 以上的
	- 再低 也没见过 0.3米 以下的
	- 相差 10 倍以内
	- 属于 同一数量级

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632144536941)

- 生命自身 有规律

### 庄稼播种时间窗口判断

- 清明前后 ≤ 日期 ≤ 谷雨前后
	- 不能早 早了冻死
	- 不能晚 晚了不熟

| 场景 | 时间窗口 | 结果 |
|------|----------|------|
| 春播庄稼 | 4月4日 ≤ 日期 ≤ 4月21日 | 适宜播种 |
| | 日期 ＜ 4月4日 | 太早，会冻死 |
| | 日期 ＞ 4月21日 | 太晚，不成熟 |


```python
# 节气播种时间窗口示例
month = int(input("请输入月份："))
day = int(input("请输入日期："))

# 清明大约 4月4~6日，谷雨大约 4月19~21日
# 简化成时间窗口：4月4日 ～ 4月21日
if (month == 4 and 4 <= day <= 21):
    print("✅ 正值春播窗口期！适合播种，不早不晚刚刚好。")
elif month < 4 or (month == 4 and day < 4):
    print("❌ 还太早，天寒地冻，播种会被冻死。")
else:
    print("❌ 已经太晚，错过节气，庄稼来不及成熟。")
```

- 注意这个写法
	- 两个条件 逻辑与
	- 后面的 条件 也等价于 两个条件

```
month == 4 and 4 <= day <= 21
```

- 比如做饭也是这样

### 火候

- 中餐 做饭 讲究火候
  - 火 是火的 文旺
  - 候 是时间 短长
  - 这两个要配合
- 爆炒煎炸 讲究 外焦里嫩
	- 火就要旺
	- 讲究 外焦里嫩

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220101-1641008634281)

- 文火 慢炖
	- 煲粥熬汤
	 - 虽然微弱单慢慢持续
	- 煨到酥烂脱骨

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220101-1641008733363)

- 蒸米饭 放多少水 用什么火
  - 才能真正把米饭 蒸得好吃
  - 讲究 火候 的
- 包括 搞对象 其实也讲火候

### 搞对象

- 古话说

> 来得早 不如 来得巧

- 巧 指的就是 不早不晚
	- 把握的 是 时间窗口
- 在合适的时间、空间出现
	- 目的地也 是 同一个方向
	- 用合适的速度 同行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203409/uid1190679-20260409-1775742552745) 

- 很难 不走到一起

### 择偶时间窗口

- 择偶也有窗口期

> **早了青涩，晚了遗憾，不早不晚，才是刚好。**

| 时间窗口条件 | 结果 |
|--------------|------|
| 22 ≤ 年龄 ≤ 32 | 时机正好，选择多、状态佳 |
| 年龄 ＜ 22 | 太早，心智未熟，容易选错 |
| 年龄 ＞ 32 | 偏晚，选择变少，压力变大 |

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203409/uid1190679-20260409-1775719711567) 

> 后来 我总算学会了如何去爱
>> 可惜你 早已远去 消失在人海

> 后来 终于在眼泪中明白
> >有些人 一旦错过就不再

### 宇宙速度

- 人法地 地法天 天法道 道法自然

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1707990076469)

- 根据 数值的`不同`
	- 就会出现 `结果`不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240215-1707990166603)

- 想要满足一定的要求
	- 大致应该在一定的区间
		- 太大了 不行
		- 太小了 也不行
- 万物一理
	- 具体到 生命的 各种指标 也一样

### 体检

- 各种数据都有个大致的参考范围
  - 太高了
  - 或者太低了
  - 都不好
  - 过犹不及

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632143857953)

- 在正常范围内比较健康

### 发展

- 人类 有成长的规律

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632144755214)

- Python 的版本演化也有自身的规律
	- 动力来自于 
		- 人们提交各种请求  希望进化 python
		- 但是都希望只添加自己需要的特性
		- 其他的不要动
	- 由 核心开发团队 来协调

### python 节奏

- 最开始 python只是 个人项目
	- Implementation started - December, 1989
	- Internal releases at Centrum Wiskunde & Informatica, 1990

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210814-1628933929671)

- 随后 不断有人 加入进来

### 版本演化

- 0 年代
  - Python 0.9.0 - February 20, 1991
  - Python 0.9.1 - February, 1991
    - Python 0.9.2 - Autumn, 1991
  - Python 0.9.4 - December 24, 1991
  - Python 0.9.5 - January 2, 1992
  - Python 0.9.6 - April 6, 1992
  - Python 0.9.8 - January 9, 1993
  - Python 0.9.9 - July 29, 1993
- 1 年代
  - Python 1.0 - January 1994
  - Python 1.2 - April 10, 1995
  - Python 1.3 - October 12, 1995
  - Python 1.4 - October 25, 1996
  - Python 1.5 - December 31, 1997
  - Python 1.6 - September 5, 2000
- 2 年代
  - Python 2.0 - October 16, 2000
  - Python 2.1 - April 15, 2001
  - Python 2.2 - December 21, 2001
  - Python 2.3 - July 29, 2003
  - Python 2.4 - November 30, 2004
  - Python 2.5 - September 19, 2006
  - Python 2.6 - October 1, 2008
  - Python 2.7 - July 3, 2010

- python 0-2 时
	- 变化剧烈，迅速

### 规律

- python3 之后
	- 进入了稳定期
	- 创新减少，稳定提升
	- 缓慢

- 3 年代
  - Python 3.0 - December 3, 2008
  - Python 3.1 - June 27, 2009
  - Python 3.2 - February 20, 2011
  - Python 3.3 - September 29, 2012
  - Python 3.4 - March 16, 2014
  - Python 3.5 - September 13, 2015
  - Python 3.6 - December 23, 2016
  - Python 3.7 - June 27, 2018
  - Python 3.8 - October 14, 2019
  - Python 3.9 - October 7, 2020
  - Python 3.10 - October 4, 2021
  - Python 3.11 - October 24, 2022
  - Python 3.12 - October 2, 2023
  - Python 3.13 - October 7, 2024

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203409/uid1190679-20260409-1775744164333) 

- 具体该下哪个？

### 生命周期图

- 开发周期
	- Dev 开发初期
	- alpha 修bug 新特性 不稳定
	- beta 修bug 新特性 稳定 应用 可以做测试
	- betas 只修改security相关的 bug

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632145162776)

- 在 18 个月到 24 个月之间
  - 太短了，更新频繁，跟不上
  - 太长了，新特性没有了实效性
	- 都是在一个范围内

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203409/uid1190679-20260409-1775744240766) 

- 现在这个 周期里面
	- 同时 维护 四个版本

### bmi

- 其实各种数据
	- 都有个 窗口范围
	- 比如 bmi

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211231-1640958575316)

- 如果我只想判断
	- 是否属于 Normal range

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632056060645)

- 应该如何？

### 代码

- 先计算
	- 再判断

```
height = float(input("height(m):"))
weight = float(input("weight(kg):"))
bmi = weight / (height*height)
if (18.5 < bmi) and (bmi < 24.9):
	print("healthy!")
```

- 进行 `逻辑与` 运算

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676587555676)

- 代码 可以改得 更明确
	- 不要翻页 
	- 修改一下

### 范围

- 直接写清楚

```python3
18.5 < bmi < 24.9
```

- 非常明确

```python3
height = float(input("height(m):"))
weight = float(input("weight(kg):"))
bmi = weight / (height*height)
if 18.5 < bmi < 24.9:
	print("healthy!")
```

- 帮助手册上 怎么说？

### 手册

```
help()
COMPARISON
```

- 以下两个是等价的
  - x < y <= z
  - x < y and y <= z

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632142163434)

- 如果 y 是表达式
	- y 只被 计算一次
- 如果 x < y 是假的
	- 那么 y <= z 
	- 就不被计算了

- python 手册还说了什么？

### 继续

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632143209932)

- 好家伙

```
1 < 2 < 3 < 4 < 5
5 > 4 > 3 > 2 > 1
```

- 赶紧试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632143270288)

- 真的可以

> 看起来是把 4 个比较运算符的结果

>> 做了逻辑与 and 运算

- 手册还说了什么

### 手册

- 不光是一个方向

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632143402808)

- 不同方向也可以

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632143421507)

- 甚至 1 < 5 > 2 < 4 > 3 也会输出 True
  - 4组比较运算 都是 True
  - 最终结果 就会输出 True
- 同样的内容 有两种方式 表示
  - 直接把不等式连起来
  - 用 and 把不等式连起来

```
1 < 2 < 3
1 < 2 and 2 < 3
```

- 哪种方式好呢？

### 选择

- 他们逻辑上等价	
	- 看哪种方式更可读
- 连成 一个条件的情况 下
	- 可读性 更好
	- 而且 表达式 少计算一次
- 所以 尽量使用 连在一起的 方式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632143715222)

- Readability counts
  - 可读性很重要
- 我们来优化代码

### 原始代码

- 这个程序 可以判断
	- 输入字符 是 什么类型

```
ch = input("please input one character:")
if ord('a')<=ord(ch) and ord(ch)<=ord('z'):
    print("lower")
if ord('A')<=ord(ch) and ord(ch)<=ord('Z'):
    print("upper")
if ord('0')<=ord(ch) and ord(ch)<=ord('9'):
    print("number")
```

- 显然 and 的形式
	- 可以从写法上优化一下

### 更新后的代码

```
ch = input("please input one character:")
if ord('a') <= ord(ch) <= ord('z'):
    print("lower")
if ord('A') <= ord(ch) <= ord('Z'):
    print("upper")
if ord('0') <= ord(ch) <= ord('9'):
    print("number")
```

- 这样子还可以再优化么？

### 再优化

- 其实没有必要使用 ord 序号函数

```
ch = input("please input one character:")
if 'a' <= ch <= 'z':
    print("lower")
if 'A' <= ch <= 'Z':
    print("upper")
if '0' <= ch <= '9':
    print("number")
```

- 去掉试试
	- 既优化了写法
	- 又优化了效率
- 这就是最终的代码么？
- 其实还是 可以进行容错处理
  - 增强鲁棒性
  - robustness

### 限号规则

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203381/uid1190679-20260411-1775907521860) 

- 真的太复杂了
	- 多个条件
	- 层层嵌套

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203381/uid1190679-20260411-1775907647283) 

### 最终代码

```
"""
Author by chenmengde
"""
from datetime import datetime

def is_traffic_limited(day, day_of_week, license_plate_tail):   # 定义一个函数，内含日期、星期、车牌尾号三个参数

    #   2023.4.3 - 2023.7.2规则：
    if (datetime(2023, 4, 3) <= day <= datetime(2023, 7, 2) and
            day_of_week == "Monday" and license_plate_tail in ["4", "9"]):
        return True
    elif (datetime(2023, 4, 3) <= day <= datetime(2023, 7, 2) and
            day_of_week == "Tuesday" and license_plate_tail in ["5", "0"]):
        return True
    elif (datetime(2023, 4, 3) <= day <= datetime(2023, 7, 2) and
            day_of_week == "Wednesday" and license_plate_tail in ["1", "6"]):
        return True
    elif (datetime(2023, 4, 3) <= day <= datetime(2023, 7, 2) and
            day_of_week == "Thursday" and license_plate_tail in ["2", "7"]):
        return True
    elif (datetime(2023, 4, 3) <= day <= datetime(2023, 7, 2) and
            day_of_week == "Friday" and license_plate_tail in ["3", "8"]):
        return True

    #   2023.7.3 - 2023.10.1规则：
    elif (datetime(2023, 7, 3) <= day <= datetime(2023, 10, 1) and
            day_of_week == "Monday" and license_plate_tail in ["3", "8"]):
        return True
    elif (datetime(2023, 7, 3) <= day <= datetime(2023, 10, 1) and
            day_of_week == "Tuesday" and license_plate_tail in ["4", "9"]):
        return True
    elif (datetime(2023, 7, 3) <= day <= datetime(2023, 10, 1) and
            day_of_week == "Wednesday" and license_plate_tail in ["5", "0"]):
        return True
    elif (datetime(2023, 7, 3) <= day <= datetime(2023, 10, 1) and
            day_of_week == "Thursday" and license_plate_tail in ["1", "6"]):
        return True
    elif (datetime(2023, 7, 3) <= day <= datetime(2023, 10, 1) and
            day_of_week == "Friday" and license_plate_tail in ["2", "7"]):
        return True

    #   2023.10.2 - 2023.12.31规则：
    elif (datetime(2023, 10, 2) <= day <= datetime(2023, 12, 31) and
            day_of_week == "Monday" and license_plate_tail in ["2", "7"]):
        return True
    elif (datetime(2023, 10, 2) <= day <= datetime(2023, 12, 31) and
            day_of_week == "Tuesday" and license_plate_tail in ["3", "8"]):
        return True
    elif (datetime(2023, 10, 2) <= day <= datetime(2023, 12, 31) and
            day_of_week == "Wednesday" and license_plate_tail in ["4", "9"]):
        return True
    elif (datetime(2023, 10, 2) <= day <= datetime(2023, 12, 31) and
            day_of_week == "Thursday" and license_plate_tail in ["5", "0"]):
        return True
    elif (datetime(2023, 10, 2) <= day <= datetime(2023, 12, 31) and
            day_of_week == "Friday" and license_plate_tail in ["1", "6"]):
        return True

    #   2024.1.1 - 2024.3.31规则：
    elif (datetime(2024, 1, 1) <= day <= datetime(2024, 3, 31) and
            day_of_week == "Monday" and license_plate_tail in ["1", "6"]):
        return True
    elif (datetime(2024, 1, 1) <= day <= datetime(2024, 3, 31) and
            day_of_week == "Tuesday" and license_plate_tail in ["2", "7"]):
        return True
    elif (datetime(2024, 1, 1) <= day <= datetime(2024, 3, 31) and
            day_of_week == "Wednesday" and license_plate_tail in ["3", "8"]):
        return True
    elif (datetime(2024, 1, 1) <= day <= datetime(2024, 3, 31) and
            day_of_week == "Thursday" and license_plate_tail in ["4", "9"]):
        return True
    elif (datetime(2024, 1, 1) <= day <= datetime(2024, 3, 31) and
            day_of_week == "Friday" and license_plate_tail in ["5", "0"]):
        return True
    else:
        return False

choose1 = input("您的机动车是否悬挂北京市牌照？悬挂北京市牌照请输入\"1\"，悬挂外埠牌照请输入\"0\":")   # 判断是否京牌
# 本地
if choose1 == str(1):   # 若京牌：
    choose2 = input("您的机动车是否属于以下类别？属于请输入\"1\"，不属于请输入\"0\"。"
                "（一）警车、消防车、救护车、工程救险车；\n"
                "（二）公共电汽车、省际长途客运车辆及大型客车、京B号段号牌出租汽车（不含租赁车辆）、邮政专用车、"
                "持有市交通行政管理部门核发的旅游客车营运证件的车辆、经市公安交通管理部门核定的单位班车和学校校车；\n"
                "（三）车身喷涂统一标识并执行公务的行政执法车辆和清障专用作业车辆；\n"
                "（四）环卫、园林、道路养护、应急通信保障的专项作业车辆，殡仪馆的殡葬车辆；\n"
                "（五）悬挂“使”字头号牌车辆及经批准临时入境的车辆；\n"
                "（六）纯电动小客车（以可充电电池作为唯一动力来源、由电动机驱动的小客车）。\n")   # 判断是否特种车辆
    if choose2 == str(1):   # 若是特种车辆：
        print("不限行")
    elif choose2 == str(0):   # 若不是特种车辆：
        choose3 = input("您的机动车是否是公务用车？是请输入\"1\"，不是请输入\"0\"。")   # 判断是否公车：
        if choose3 == str(1):   # 若是公车：
            day = datetime.today()  # 获取当前日期
            day_of_week = datetime.now().strftime("%A")  # 获取当前星期几
            license_plate_tail = input("\n请输入您的机动车车牌尾号（机动车车牌尾号为字母的请输入“0”）: ")  # 获取车牌尾号
            if is_traffic_limited(day, day_of_week, license_plate_tail):
                print("今日全天限行，范围为北京市全域。")
            else:
                print("今日不限行。")
        elif choose3 == str(0):  # 若非公车，即是普通车：
            day = datetime.today()  # 获取当前日期
            day_of_week = datetime.now().strftime("%A")  # 获取当前星期几
            license_plate_tail = input("\n请输入您的机动车车牌尾号（机动车车牌尾号为字母的请输入“0”）: ")  # 获取车牌尾号
            if is_traffic_limited(day, day_of_week, license_plate_tail) and int("700") <= int(datetime.now().strftime("%H%M")) <= int("2000"):
                print("当前至20时限行，范围为五环路以内道路（不含五环路）。")
            else:
                print("当前至（次日）7时不限行，可放心行驶。")
        else:
            print("\n错误！请输入\"1\"或\"0\"。")   # 错误处理，下同
    else:
        print("\n错误！请输入\"1\"或\"0\"。")
#   外地
elif choose1 == str(0):  # 若外地牌：
    choose4 = input("您的机动车是载客汽车还是载货汽车？载客汽车请输入\"1\"，载货汽车请输入\"0\"。")  # 判断车辆类型
    if choose4 == str(1):  # 若是客车：
        choose5 = input("您的机动车是否已办理\"进京通行证\"？已办理请输入\"1\"，未办理请输入\"0\"。")  # 判断是否已办通行证
        if choose5 == str(1):  # 已办：
            choose6 = input("您办理的进京通行证属于以下那种类型？\"进京通行证（六环内）\"请输入\"1\"，\"进京通行证（六环外）\"请输入\"0\"。")  # 判断通行证类型
            if choose6 == str(1):  # 六环内：
                day_of_week = datetime.now().strftime("%A")  # 获取当前星期几
                import datetime
                from datetime import datetime
                if int("700") <= int(datetime.now().strftime("%H%M")) <= int("900") or int("1700") <= int(datetime.now().strftime("%H%M")) <= int("2000"):  # 判断时间，工作日高峰期限行
                    print("禁止在五环路主辅路及其以内道路和大兴区部分道路行驶")
                elif int("900") <= int(datetime.now().strftime("%H%M")) <= int("1700"):  # 平峰按规则判断
                    day = datetime.today()  # 获取当前日期
                    day_of_week = datetime.now().strftime("%A")  # 获取当前星期几
                    license_plate_tail = input("\n请输入您的机动车车牌尾号（机动车车牌尾号为字母的请输入“0”）: ")  # 获取车牌尾号
                    if (is_traffic_limited(day, day_of_week, license_plate_tail) and int("900") <= int(datetime.now().strftime("%H%M")) <= int("1700")):
                        print("\n当前至20时限行，范围为五环路以内道路（不含五环路）,禁止驶入二环路（含）以内道路、建国门外大街、复兴门外大街、复兴路（木樨地桥至新兴桥段）。")
                    else:
                        print("\n当前至17时不限行，禁止驶入二环路（含）以内道路、建国门外大街、复兴门外大街、复兴路（木樨地桥至新兴桥段）。")
                else:
                    print("当前至（次日）7时不限行，禁止驶入二环路（含）以内道路、建国门外大街、复兴门外大街、复兴路（木樨地桥至新兴桥段）。")
            elif choose6 == str(0):  # 六环外：
                print("不限行，您可在通行证规定的区域（六环路及以外道路、通州区以外道路）放心行驶。")
            else:  # 错误处理
                print("错误！请输入\"1\"或\"0\"。")
        elif choose5 == str(0):  # 未办理：
            print("禁止驶入北京市行政区域内道路。")
        else:
            print("错误！请输入\"1\"或\"0\"。")
    elif choose4 == str(0):  # 若是货车：
            choose7 = input("您的机动车是黄标车吗？是请输入\"1\"，不是请输入\"0\"。")  # 判断是否黄标
            if choose7 == str(1):  # 黄标：
                print("禁止驶入北京市行政区域内道路。")
            elif choose7 == str(0):  # 不是黄标：
                if int("600") <= int(datetime.now().strftime("%H%M")) <= int("2400"):  # 判断时间，6-24时限行
                    print("禁止驶入六环路(含)以内道路")
                else:
                    choose8 = input("您的机动车是否为整车运送鲜活农产品车辆？是请输入\"1\"，不是请输入\"0\"。")  # 判断是否绿通
                    if choose8 == str(1):  # 若是绿通：
                        print("可驶入六环路(含)以内道路，全天禁止驶入长安街(新兴桥至国贸桥)、人民大会堂南侧路、西侧路、广场东、西侧路、南、北池子大街，南、北长街，府右街、王府井大街，台基厂路、中关村南路、科学院南路(知春路至北四环路)、三里河路(木樨地路口至甘家口)、万寿路(万寿路口至万寿路北口)、朱各庄路(万寿路北口至西四环中路东辅路)等道路。")
                    elif choose8 == str(0):  # 若不是绿通：
                        choose9 = input("您的机动车是否已办理\"进京通行证\"？已办理请输入\"1\"，未办理请输入\"0\"。")  # 判断是否办理货车通行证
                        if choose9 == str(1):  # 已办理：
                            print("可驶入六环路(含)以内道路，全天禁止驶入长安街(新兴桥至国贸桥)、人民大会堂南侧路、西侧路、广场东、西侧路、南、北池子大街，南、北长街，府右街、王府井大街，台基厂路、中关村南路、科学院南路(知春路至北四环路)、三里河路(木樨地路口至甘家口)、万寿路(万寿路口至万寿路北口)、朱各庄路(万寿路北口至西四环中路东辅路)等道路。")
                        elif choose9 == str(0):  # 未办理：
                            print("禁止驶入六环路(含)以内道路")
                        else:  # 错误处理，下同
                            print("错误！请输入\"1\"或\"0\"。")
                    else:
                        print("错误！请输入\"1\"或\"0\"。")
            else:
                print("错误！请输入\"1\"或\"0\"。")
    else:
        print("错误！请输入\"1\"或\"0\"。")
else:
    pint("错误！请输入\"1\"或\"0\"。")

```

### 总结

- 这次学习了 多个比较运算符的 拼合
	- 多个比较运算符 分别运算
	- 最后再取 逻辑与 and 运算
- 除了 逻辑与之外 
	- 还有什么逻辑运算符么？
- 还有逻辑非not

```
not True
not False
```

- 那除了逻辑非呢？？？🤔
- 下次再说 👋
