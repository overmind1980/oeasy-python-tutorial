---
show: step
version: 1.0
enable_checker: true
---

# 时间日期

## 回忆
- 上次了解了日期和时间
	- 有基本的module
		- time
		- datetime
- 还了解了古代计时的方法
	- 时间差在航海时非常有用
	- 应该如何记录是时间差呢？🤔

### 木匠 

- John Harrison 
	- 出生于 Foulby
	- 是五个孩子中的老大 
	- 他的继父是一个木匠
	- 比较有名 
	- 获得了蓝色勋章

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652004533310)

- 他学的也是木匠
	- 这门手艺

### 委托

- 做钟表对于当时的木工来说
	- 比较非主流
- 家具比较多
	- 但是他接了一个活
	- 给马厩装钟表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652018561280)

- 300年过去了
	- 这马厩还是马厩


### 马厩上的钟表

- 这木头钟还能跑
	- 这可算是改变人类历史的家具了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652018584849)

- 这种木材是来自于非洲的乌木
	- 叫做lignum vitae
	- 意思是生命树
	- 自身有油
	- 三百年不用告油

- 他想用木头
	- 来解决时间差 这个问题 
- 先看看python
	- 是如何解决时间差这个问题的

### datetime

```
import datetime
import time
now = datetime.datetime.now()
ini_time = datetime.datetime(2014, 2, 3)
print((now - ini_time).days)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676690703598)

- 可以用这个做一个
	- 纪念日提醒器吗？

### 纪念日提醒器

- 比如纪念日是2014/2/3

```
import datetime
ini_time = datetime.datetime(2014, 2, 3)
print(ini_time + datetime.timedelta(days=1))
print(ini_time + datetime.timedelta(days=7))
print(ini_time + datetime.timedelta(days=14))
print(ini_time + datetime.timedelta(days=21))
print(ini_time + datetime.timedelta(days=28))
```

- 21天可以养成一个习惯
	- 超过一个月怎么办呢？

### 一个月以上

```
from dateutil.relativedelta import relativedelta
import datetime
ini_time = datetime.datetime(2014, 2, 3)
print(ini_time + datetime.timedelta(days=1))
print(ini_time + datetime.timedelta(days=7))
print(ini_time + datetime.timedelta(days=14))
print(ini_time + datetime.timedelta(days=21))
print(ini_time + datetime.timedelta(days=28))
print(ini_time + relativedelta(months=1,days=1))
print(ini_time + relativedelta(months=2,days=1))
print(ini_time + relativedelta(months=3,days=1))
print(ini_time + relativedelta(months=4,days=1))
print(ini_time + relativedelta(months=5,days=1))
print(ini_time + relativedelta(months=6,days=1))
print(ini_time + relativedelta(years=1,days=1))
```

- 完整版

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676691891321)

- 我们再回来
	- 看看大航海时代
		- 是如何精准计时的

### 时间 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652018013865)

- 这个小装置叫做
	- grasshopper
		- 蚂蚱装置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652018043512)

- 可以有效避免
	- 波浪对于钟表的影响

### 测试环境

- 为了检验温度对于装置的影响
	- 他有两个屋子
		- 一个热
		- 一个冷

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652002068354)

- 经度竖着的
	- 一天转360度
	- 平均每小时15度

### 迭代

- Harrison的产品经过了4版迭代

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652020027606)
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652020045309)
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652020061394)
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652020073859)

- 70+岁开始研究怀表
	- 终于得到了最新款h4
	- 议会想赖账

### 结果

- 后来国王King George III说必须给
	- 80岁得到奖金
	- 3年后死去
- 他获得的远比奖金更丰厚
	- 探索的快乐是生命的最高奖励

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652003456577)

### 回首

- 这高级设备源于木工

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652004326844)

- John Harrison 用木头做了一个钟表
	- 精度是每个月才有一秒误差

- 以前说约个时间 
	- 擦黑就去 晚吧晌
- 现在
	- 有了钟表
		- 就不一样了
			- 精确到秒

### 应用

- 库克船长从第二次航行的时候就带上h4了
	- 用这个绘制了很多高精度的海图
	- 他管h4叫做不会失败的朋友(never-failing friend) 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676690368154)

- 这款海军经线仪(Marine Chronometer)
	- 是世界上第一个全球定位系统
		- Global Positioning System
- 这才有
	- 大航海时代
		- 日不落的英帝国

### 总结

- 这次了解了时间差
	- 用的是
		- datetime.delta
		- dateutil.relativedelta.relativedelta
- 古代用的是Harison发明的
	- 基于蚂蚱装置的怀表H4
- 有了精准的定时器
	- 从而开启的大航海时代
- 大航海时代
	- 英国代表团 曾经带着H4 和各种先进设备
		- 来到中国
- 这是怎么一个过程呢？🤔
- 下次再说👋🏻

