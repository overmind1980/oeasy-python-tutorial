本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

#  火星文字幕_os_操作系统的作用_time_sleep_延迟 🥋

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV1bf421e7V9)
- 这次我们了解了unix系统
	- 在multics项目失败后
	- 汤普森和里奇 
		- 为了 玩游戏
		- 自制了 unix

- 这个世界从此有了 
	- 操作系统
	- operating system
	- os

![图片描述](uid1190679-20230531-1685517389208.png)

- 这个os有什么用吗？🤔


### 回忆shell执行

|命令|作用|
|---|---|
|whoami|我是谁？|
|pwd|我在哪？|
|ls|这都有什么？|

```
whoami
pwd
ls
```

- 在 shell中 执行

![图片描述](uid1190679-20240411-1712803234579.png)

- 还可以执行clear
	- 进行清屏

### 尝试使用os包

![图片描述](uid1190679-20240513-1715603746448.png)

- 进入游乐场
	- 本来是不能执行whoami的

```
import os
```

- import
	- 意思 是 导入 
- 导入 谁 呢？
	- 导入 的是 os	
	- os 是什么呢？
- os 就是 
	- `o`perating `s`ystem
	- 操作系统

![图片描述](uid1190679-20240411-1712802979618.png)

- 导入了之后
	- 有什么用呢？

### 使用os

- 导入之后 
	- 可以执行shell中的命令

```
os.system("whoami")
os.system("pwd")
os.system("ls")
```

- 效果

![图片描述](uid1190679-20240411-1712803117062.png)

- 和ls里面 
	- 基本一样
	- 就是后面多了个0
- 0 是 
	- 返回值 
	- 说明程序执行成功
- 我们可以用这个做点什么？

### 输出前清屏

```
vi t.py
```

- 编辑t.py

```
import os
os.system("clear")
print("oeasy")
```

- 先清屏
- 再输出

![图片描述](uid1190679-20240411-1712805916330.png)

- 可以一行一行蹦出来吗？

### time.sleep

```
import os
import time
os.system("clear")
print("oeasy")
time.sleep(1)
print("o2z")
```

- import
	- 引入time包
- time.sleep(1)
	- 调用time包中的sleep函数
	- 参数为1秒

![图片描述](uid1190679-20240411-1712806684091.gif)

- 输出 oeasy之后
	- 愣了1秒
	- 才输出o2z
- 来输入出一些名言吧

### 古语

- 引领 传统文化 
	- 进入数字世界 
	- 哈哈！

```
import os
import time
os.system("clear")
print("道可道 非恒道")
time.sleep(1)
print("名可名 非恒名")
time.sleep(1)
print("无名 天地之始")
time.sleep(1)
print("有名 万物之母")
time.sleep(1)
print("恒无欲以观其妙")
time.sleep(1)
print("恒有欲以观其徼")
time.sleep(1)
print("此两者同 出而异名 同谓之玄")
time.sleep(1)
print("玄之又玄 众妙之门")
time.sleep(10)
```

- 感觉很好！

![图片描述](uid1190679-20240411-1712807198857.png)


- 我们输出点有意思的东西
	 - 比如 亚文化

### 亚文化 火星文

```
import os
import time
os.system("clear")
print("◇平庸幷卟岢怕")
time.sleep(1)
print("岢怕の媞伱連儚想嘟莈冇。")
time.sleep(10)
```

- 效果

![图片描述](uid1190679-20240411-1712807474282.png)

- 确实非常亚文化
- 可以自己做火星文吗？

### 使用转化器

- http://www.yishuzi.com/g/18.htm

![图片描述](uid1190679-20240514-1715649460783.png)

- 可以把颜色改变吗？

### 变色火星文

- 尝试控制颜色

```
import os
import time
os.system("clear")
print("\33[32m垳憅哋能糧 憅劦唻洎纡凊緒😊\33[0m")
time.sleep(1)
print("\33[31m妀變汏悩結媾濡婹庝痌😭\33[0m")
time.sleep(10)
```

- 感觉我们在玩一种
	- 很新的艺术

![图片描述](uid1190679-20240411-1712807894759.png)

- 拍下来 
	- 发个动态 
	- 激励一下 自己

## 总结

- 这次了解了两个包

|包名|含义|作用|
|---|---|---|
|time|时间|愣1秒|
|os|操作系统|执行shell命令|

- 但是有个疑问
	- os(操作系统)
	- 是 用什么语言写 的？🤔
- 写os这个语言
	- 运行在什么系统之上呢？🤔

![图片描述](uid1190679-20240411-1712808387565.png)

- 先有得编程语言 还是 操作系统？🤔
	- unix这个系统 是用什么编程语言 写的呢？🤔
	- 这编程语言 是运行在 什么系统上的呢？ 🤔
- 咱们下次再说👋
- https://www.bilibili.com/video/BV1bf421e7V9
