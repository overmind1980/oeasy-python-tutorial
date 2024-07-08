---
show: step
version: 1.0
enable_checker: true
---

# 时间日期

## 回忆
- 上次制作了一个
	- 格式化字符串的应用
	- 叫做进度条
- 通过进度条
	- 我们就可以知道 
	- 下载 或者 安装的进度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676639426889)

- 还能玩点什么呢？🤔

### 日期 和 时间

- python是如何理解时间和日期呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676639702048)

-  查询帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676639787409)

### 应用例子

- time.strftime
	- string formatted time
	- 字符串格式的时间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676639943405)

- 可以用str.format吗？

### str.format

- datetime

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676600783762)

- 导入datetime包
	- 并查看帮助

### 帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676640394688)

### 具体代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676640773727)

- 这本质上也属于str.format

```
import datetime
d = datetime.datetime(2022,10,20,12,34,45)
print("{:%Y-:%m-%d %H:%M:%S}".format(d))
```

- 可以用f-string的方式吗？

### f-string

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676640792160)

- 从中使用变量

```
import datetime
d = datetime.datetime(2022,10,20,12,34,45)
print(f"{d:%Y-:%m-%d %H:%M:%S}")
```

- 这年份是如何计算的呢？

### 总结

- 这次了解了日期和时间
	- 有基本的module
		- time
		- datetime

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240203-1706929503123)

- 日期中的年份应该如何理解呢？？🤔
- 下次再说👋🏻

