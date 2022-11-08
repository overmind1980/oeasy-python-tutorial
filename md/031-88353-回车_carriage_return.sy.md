---
show: step
version: 1.0
enable_checker: true
---

# 回到开头

## 回忆上次内容

- 进程前后台切换
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 把当前进程切换到后台并暂停
	- `jobs` 查看所有作业
	- 用 `fg` 可以把进程再切回前台
		- `fg %1` 可以把指定的进程切回前台
	- 用 `bg` 可以让进程在后台运行
- 进程查询
	- `ps -elf` 查看所有进程信息
	- `ps -lf` 查看本终端相关进程信息
	- `kill -9 PID` 给进程发送死亡信号
	- `pstree -h` 可以查看进程树
- 运行多个 `python3 sleep.py` 的话
	- 各个进程独立
	- `python3 sleep.py` 大概 7M
	- 各占内存
- 这个切进程很好用
	- 不过运行进程的时候总是满屏刷时间
- 可以固定在屏幕的某个位置刷新时间吗？🤔

### 回到从头

- 我们从先去游乐场
- `\n`是我们熟悉的
- 我们先复习一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665461729269)

- 这次解锁的东西叫做`\r`
- `\r`的作用是回到输出头部的位置
- 如果原来的字符串比新的字符串长怎么办呢？

### return

- `\r` 只负责回到行头
- 其他的不管

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665461739485)

- 过程
	- 先输出abcdef
	- 然后切到头部
	- 然后输出123
	- 结果就是123def
- 不要翻篇
	- 自己尝试修改`sleep.py`
	- 让输出时间固定在一行

### 结合程序

- 这个程序和 sleep 的结合很简单
- 只需要把输出的字符串前面加上`\r`
- 并且把结尾默认的 `end="\n"` 换成 `end=""``

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665461905259)

- 试验成功
- 真的定在那儿刷新了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613906280764)

- 如果我把结束符设置为"\r"会如何呢？

### 突发奇想

```python3
#!usr/bin/python3
import time
while True:
    print(time.asctime(),end='\r')
    time.sleep(1)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220824-1661330079255)

- 想到就去试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220326-1648306981989)

- 果然，
	- 不出所料
	- 都给删除了
- 没事，
	- 试了
	- 也就快乐了
- 还有
	- 就是字有点小
	- 可以变大么？

### 字体变大

```bash
#安装figlet
sudo apt install figlet
#运行figlet
figlet "oeasy"
#利用管道使用figlet
echo "oeasy"|figlet
```

- 尝试使用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614987482170)

- 为什么可以变大呢？

### 寻找原理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665483411454)

- figlet有专门的大字体字库
	- 通过映射可以将字体变大

### 打开字形库

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220331-1648708095435)

- 把具体的ascii字符
- 映射到更大的字符组合上
- 这些字形库的次序是如何的呢？

### 字形次序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665483583285)

- 次序是按照ascii码表的次序

### 管道原理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210224-1614171987291)

- `管道运算符 |` 
	- 就是水管子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614987482170)

- 把 echo "oeasy"的输出结果
- 当做 figlet 的输入参数
- 再进行输出
- 我们尝试把时间输出当做 figlet 的输入
- 这有点亚文化啊 😄

### 文艺起来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221011-1665484983717)

- 可以写一些关于青春、励志、爱情的句子
- 就更亚文化了😄
- 还有什么可以控制吗？

### figlet 字体和位置控制

- -r、-c、-l 控制左中右
- -f 控制字体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644546423440)

- 现在尝试把时间输出整合进来

### 尝试整合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210306-1614988251250)

- 运行失败了
- 我想先把那个`\r`去掉
	- 但是还是不行

- 循环和延迟都阻碍往管道里送东西
	- 只能只保留输出再试试

```python
#!/usr/bin/python3
import time
print(time.asctime())
```

- 把原来sleep.py文件修改了
	- 循环延迟都删除了
	- 只保留三行

### 最终

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649408434003)

- 保存并退出
- 在shell里运行
	- `python3 sleep.py`
- 在shell里面输出重定向
	- `python3 sleep.py | figlet`
- 输出是可以的
- 但是不会刷新
- 而且太大了
- 超过一行了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644546361651)

- 不过至少可以出现一次时间了
- figlet 有别的字体么？

## 总结

- 用`\r`
  - 可以让输出位置回到最开头的地方
  - 原位刷新时间、
- 如果想要的是大字符效果
  - 可以使用 figlet
  - 但是希望同时还能刷新

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665302645886)

- 这可能吗？🤔
- 我们下次再说！👋
