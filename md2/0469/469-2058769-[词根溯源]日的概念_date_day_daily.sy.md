本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# 时间日期

## 回忆
- 上次  了解了 周 week
	- 像 圆规 画了一个圆周
	- 通过 圆规 掌握 规律
	- 周期律

![图片描述](uid1190679-20240205-1707098168396.png)

- 可以知道 
	- 当前 是 第几周
	- 今天 是 周几
- 但是 一个月大概 二十八天左右
- 为什么 一月 要 三十一天呢？

### 从恒星月到朔望月

- 月亮绕地球一周
	- 27.322天
	- 这是一个恒星月
- 但是与此同时
	- 月球 也在随地球绕太阳运动

![图片描述](uid1190679-20240206-1707185199585.png)

- 月球绕地球旋转一周
	- 等于在图上从位置1运动到位置2
	- 这个时间称为月球的公转周期，也就是27.32天（称为“恒星月”）

### 朔望月

- 一个月指的是月相的变化周期（两次满月的时间间隔或两次新月的时间间隔）
	- 当日月地三者共线，月球位于日地之间时，地球上看到的是新月（图中位置1）
	- 此后，月球公转到位置2后，还需要公转一个θ角
	- 日月地才能再次共线，这也是位置1之后的下一次新月
	- 所以月相的变化周期长于月球的公转周期

![图片描述](uid1190679-20240206-1707185974918.png)

- 这个周期称为“朔望月”
	- 平均长度为29.53天

### Romulus Calendar

- 古罗马 历法

![图片描述](uid1190679-20240206-1707187182336.png)

- 总共十个月
	- Winter 大概61.25天
	- 由于干不了农活
	- 所以不在日历里面
- 对比 我们的祖先 
	- 非常有计划性
	- 大冬天 数九


### Numa Pompillus Calendar

- 后来的继任者想要
	- 严格按照 朔望月 进行 历法

![图片描述](uid1190679-20240206-1707188021499.png)

- 但是 一年 就差了10天
	- 3年就差出一个月

### 新月份来历

- January
	- 来自罗马本地神
	- Janus 
	- 两面神
		- 开始和结束 
		- 选择...

![图片描述](uid1190679-20240206-1707189292024.png)

- 后来 January 就成了 开始之月

### February

- 来自于 皮鞭子
- 为了⼈畜⼟地兴旺
	- 节⽇叫做牧神节（Lupercalia）
	- 祭品规定为雌雄⼭⽺各⼀只
	- 献祭以后，祭司把祭品的⽪切成⽪条
	- 抽打人们

![图片描述](uid1190679-20240206-1707189506255.png)

- 二月也叫 净化之月

### 凯撒 改历法

- 凯撒 借鉴了 埃及的太阳历
	- 一年 12个月的方式

![图片描述](uid1190679-20240206-1707188395589.png)

- 月份名称来自于罗马
- 但是置闰的规则来自埃及
- 后人为了纪念他和奥古斯都
	- 把Quintills 改成July
	- 把Sextills 改成了 August

### 代码

- 今天仍然能够看到这些月份的
	- 数字
	- 单词
	- 简写

![图片描述](uid1190679-20240206-1707189732944.png)

- 可以写成代码吗？

### 代码编写

```
from datetime import datetime

# Get current date and time
now = datetime.now()

# Get the full name of the month
month_full_name = now.strftime("%B")

# Get the abbreviated name of the month
month_abbreviated = now.strftime("%b")

# Get the month as a zero-padded decimal number
month_number_padded = now.strftime("%m")

print("Current month (full name): {}".format(month_full_name))
print("Current month (abbreviated): {}".format(month_abbreviated))
print("Current month (zero-padded number): {}".format(month_number_padded))
```

- 可以得到不同的月份格式
- 再往下的时间单位就是日

### 年月日

- 都源自旋转

|名称|成因|时长|
|---|---|---|
|年|地球为太阳公转|365.242199天|
|月|月亮围地球旋转|29.53059天|
|日|地球自转|1天|

- 天 还可以往下细分吗？


### 总结🤔
- 下次再说👋🏻
