---
show: step
version: 1.0
enable_checker: true
---

# 时间日期

## 回忆
- 上次研究了旋转
	- verse
	- volve

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707021839766)

- 如何知道某天属于什么季节呢？
- 什么是季节呢？

### season

- 公元1300年，“sesoun”，“seson”
	- 表示一年中的某个时期
	- 关于天气或工作
	- 也表示“适当的时机，合适的场合”

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707022430227)

- 来自法语旧词“seison”
	- “播种，种植”
	- 源自拉丁语 sationem
	- 表示“播种，种植的行为”

### 季节与月份

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240206-1707186219354)

- 根据太阳的角度
	- 可以得到两至(冬至、夏至)
	- 根据两至 得到 两分 (春分、秋分)
	- 从而分出四季

| 季节 | 英文 | 月份 |
|---|---|---|
|春季|Spring|3月、4月、5月 |
|夏季|Summer|6月、7月、8月 |
|秋季|Autumn 或 Fall| 9月、10月、11月 | 
|冬季|Winter|12月、1月、2月|

- 可以根据月份得到当前季节吗？

### 季节函数

- 根据日期得到季节的函数

```
from datetime import datetime

def get_season(dt):
    # 获取月份和日期
    month = dt.month
    day = dt.day
    
    # 根据月份和日期确定季节
    if month in [3, 4, 5]:
        return "春季 (Spring)"
    elif month in [6, 7, 8]:
        return "夏季 (Summer)"
    elif month in [9, 10, 11]:
        return "秋季 (Autumn or Fall)"
    elif month in [12, 1, 2]:
        return "冬季 (Winter)"
    else:
        return "未知 (Unknown)"

# 获取当前日期和时间
now = datetime.now()

# 确定季节
season = get_season(now)

print("当前季节: {}".format(season))
```

- 这个函数依赖于month这个属性
- 这个month怎么来的呢？

### monthll

- month 来自于 moon

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707036351799)

- 地球绕太阳一周 是一年
- 月球绕地球一周 是一月

### monday

- 月曜日

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707037654036)

- 周一

### mono-

- 月亮就一个

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707041832890)

- monogamy 一夫一妻制
- monologue 独白
- monopoly 垄断
- monotonous 单调的

### 太阳也是一

- solo 独唱
- solid 固体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707041990458)

- solitary 孤独的
- solitude 孤独
- 还有什么是唯一的吗？

### 数字词汇总结

- one
	- 来自日耳曼语

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230608-1686188714760)

- uni-
	- 来自拉丁语
- 回到moon

### measure

- 使用moon来衡量时间
	- 于是有了measure

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707037242896)

- 衡量


### meter

- measure的工具meter
	- 米尺 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707037286788)

- 量表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707037413758)

### lun

- moon 发音成 lun

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707036743452)

- lunar 
	- 月亮女神
	- 阴历

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707037504385)

- lunar new year
	- 农历新年

### 潮汐

- 月亮远近不同
	- 吸引力不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707038077151)

- lunitidal 
	- ［ˌlju:ni'taidəl］ 
	- 潮汐

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707038140465)

### 月圆之夜

- lunatic
	- lunar 月亮
	- tic 的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707056588081)

- 疯子

### mar

- 大海相关的mar

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707045767152)

- marine 海军

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707045781030)

- marsh 沼泽

### lunaria

- lunaria
	- lunar 月亮
	- ia 疾病相关
	- 和月亮有关的问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707036947564)

- 月经

### lum

- lun 发音成 lum
- lumine
	- 照亮、启发

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707037929749)

- luminance
	- 亮度

### luminize

- luminize
	- lumin 发光
	- ize 使得
	- 使什么发光

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707038555436)

- luminism
	- lumin 光线
	- ism 主义
	- 光线主义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707038422141)

### illumine

- illumine
	- 照亮、启发、阐述、说明

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707038687682)

- zhao 照亮

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707038817943)

- illumination 照明

### alluminium

- allumium

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707038890367)

- 铝

### luster

- luster
	- lus 同 lun 月亮
	- ter 的
	- 有月亮光泽的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707039539926)

- lusty
	- 精力充沛的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707039723540)

### illusion

- illusion
	- il 进入 in
	- lus 源自 lun
	- ion 后缀
	- 进入光中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707039287155)

- 幻觉、错觉

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707039369440)

### illustrate

- illustrate
	- il 进入 in
	- lus 源自 lun 月亮
	- trate 后缀
	- 阐明、描述、通过画面图解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707040059936)

- illustrator

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707040074946)

### loose

- loose
	- loose 来自 lus 来自 lun 月亮
	- 散落的月光 
	- 松散
	- 放松、放任

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707040423388)

- lose
	- 放松了 
	- 就掉了
	- 失去了 

### relax

- lax
	- 同loose
	- 松懈 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707040779517)

- relax
	- re 再次
	- lax lose 松开
	- 再次松开
	- 放松

### analyse

- analyse
	- an 同 on 在...之上
	- lyse 同 lose 放松
	- 站在上面 松解开 事物

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707040618144)

- 分析

###  solution

- solution
	- so 分割
	- lut 同 loose 松解
	- solution 溶液、溶解、解决
	- 解决方案

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707041085549)

- 溶剂 + 溶质 = 溶液

### absolute

- absolute
	- ab 不
	- solute 溶解
	- 不溶解的
	- 绝对的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707041379485)

- absolutely
	- 绝对地
	- 完全地

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707041465613)

### resolve

- resolve
	- re 再一次
	- solve 溶解
	- 再溶解 再解决

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707041715256)

- 决心

### 总结🤔

- 这次研究了月moon对应的词根

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707055990483)

- 但是也有个问题
	- 月球 绕地球 一周 28 天
	- 为什么 一个月 大概30天 呢？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240204-1707056041553)

- 下次再说👋🏻
