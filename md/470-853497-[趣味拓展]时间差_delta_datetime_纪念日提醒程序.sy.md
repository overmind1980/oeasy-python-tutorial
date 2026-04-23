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



### 星盘

- Astrolabe
	- 最早含义是 星盘
	- 测量星星和水平面夹角的
	- 后来也被翻译为 等高仪

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676689358429)

- 水手用等高仪来测量太阳高度
	- 但由于船的甲板是上下起伏的
	- 这种仪器极难操作
	- 而且不容易测算准确
	- 后来人们用直角仪取代了星盘

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652005245405)

- 而且大海起幅导致时钟根本不准确
	- 所以对于定位都是大概齐的事情
	- 但是随着大海航时代的开启
	- 这种风险实在太大

### 1707年的大海难

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652011727392)

- 2000人 五艘木质大帆船

### 沉船

- 沉了四艘
	- 船长跑到当地土著那里
		- 因为戴着戒指被谋杀了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652011735633)

- 这个岛其实就在英国边上
	- 这就是英国在日不落之前的开局
- 有了问题
	- 开始想办法解决

### 经度法案

- 安妮以女王的名义
	- 发布了经度法案(Longitude Act)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652012584056)

- 谁能解决
	- 航行中的经纬度测量问题
	- 就给20000万

### 六分仪

- 六分仪用来测量
	- 远方两个目标之间夹角 的 光学仪器
- 通常用它 测量某一时刻天体与海平线或地平线的夹角
	- 比如北极星
	- 更常见的是太阳

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652004846606)

- 只要把左边的太阳放到海平面上就可以了
	- 用这东西可以测量太阳角度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652004890413)

- 可是，太阳角度是随着时间变化的

### 太阳仰角

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652001817696)

- 纬度就像腰带
- 中午十二点的太阳倾角
	- 肯定是可以知道纬度的

### 正午已到

- 正午是明确的上下午的分割线
	- 最初 只能区分上下午
	- 不能区分时辰

```
import datetime

# 获取当前时间
current_time = datetime.datetime.now().time()

# 判断当前时间属于早上、中午还是晚上
if current_time < datetime.time(12):
    print("早上好！")
elif current_time < datetime.time(18):
    print("中午好！")
else:
    print("晚上好！")
```

- 后来能够区分时辰
	- 甚至具体的时间差
	- 在根据时间差和航速
	- 就可以知道大致位置
- 但是如何确保时间差呢？

### 时间差的作用

- 早年间用的是沙漏
	- 一沙漏的时间
		- 有点像一炷香的时间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220511-1652261950334)

- 以前的钟表都是机械的
	- 一到大海上就不准了
		- 因为波浪起起伏伏
			- 船随沉浮浪
- 想要明确时间差
	- 应该怎么办呢？

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1652003456577)

- 他获得的远比奖金更丰厚
	- 探索的快乐是生命的最高奖励

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

