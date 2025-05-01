---
show: step
version: 1.0
enable_checker: true
---

# 输出ASCII码表_英文字符编码_键盘字符_ISO_646

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV11bUPYJEzR)
- 上次 输出了
	- 从0到122 序号 对应的所有字符

```
for num in range(123):
    print(num, chr(num),sep=":")
```

- 字符类型包括
	- 数字
	- 大小写字母
	- 符号

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1209611/uid1190679-20241018-1729258714094) 

- 但是 找不到 竖线符号(|)
	- 这个竖线 在`哪里`呢？？🤔

### 找到竖线

- 先去游乐场

```
ord("|")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710749483981)

- 序号为124
	- 124后面还有啥？？？🤔

### 继续遍历


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/87675/uid1190679-20241018-1729258956639) 

- 终点位置
	- stop的值
	- 应该为128
	- 2 的 7 次方

### 修改终点

- 退回shell
	- 修改文件

```
vi indent.py
```

- 将终点修改为128

```
for num in range(128):
    print(num, chr(num),sep=":")
```

- 第1行
	- 结尾处 有一个冒号(:)
	- 冒号(:) 的意思是 
		- 循环开始了
		- 下面`缩进`的
		- 都是 归属于for的`循环体`
- 第2行 
	- 先用<kbd>Tab</kbd> 
		- 在前面 `缩进`4个空格
		- 表示接受for循环的控制
		- 是 被for语句控制的`循环体` 
	- sep=":"
		- 分隔符 使用冒号 
		- 替换掉 默认分割符(空格)

### 运行结果

- 这下有竖线(|)了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/87675/uid1190679-20241018-1729259163434) 

- 想要在结尾处
	- 打一行End

### End

```
for num in range(128):
    print(chr(num), sep = ":")
    print("==========End=========")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699193333147)

- End进入循环了

### 理解缩进

- 2、3两行 `都`缩进到
	- for语句的 控制`范围内`了
	- 所以 第3句 循环执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710750149366)

- 怎么改呢？

### 修改方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710750192833)

- 第3句 不在for语句的缩进控制范围内
	- 不归for管
	- 不用循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710750223220)

- 运行成功！
- 这套 字符和序号 的 对应关系 
	- 有 `名字` 吗？

### 问ai

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240924-1727147197966)

### ASCII 码表

-  这套 字符和序号 的 对应关系 
	-  叫做`ASCII`
	- `A`merican `S`tandard `C`ode for `I`nformation `I`nterchange
	- 美国信息交换标准代码

- ASCII 建立起 
	- `字符` 和 `序号` 的
	- `固定映射关系`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613809097080)

- 为什么 `字符` 和 `序号` 的 映射关系
	- 要 `固定` 呢？
- `字符` 和 `序号` 的 `映射关系` 
	- 如果`不`固定 会如何呢？

### 映射关系

- 如果 `字符` 和 `序号` 的 对应关系 `不`固定
  - 字节里存的 同一个序号
  - 会 映射到 不同的字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673704865798)

- 我们根据同样的字节
	- 得到的 字符会 乱码
    - 就看不懂了

### 编码标准

- ASCII标准
	- 在 各种计算机系统中 
	- 必须是 `通用`的
- 否则
	- 计算机之间 `无法`通信
	- 互为乱码
	- 鸡同鸭讲

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240924-1727147357205)

- ASCII 这套 映射关系 
	- 是`什么时候`
	- 开始 有的 呢？

### 初现

- 电子计算机 
	- 通过高低电平来 表示 0和1
		- 低电平表示 0
		- 高电平表示 1
- 1967年
	- 有了 ASCII 码表🔡

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662859778540)

- 最早 制定者 是
	- 由美国国家标准学会 
	- American National Standard Institute  
	- ANSI
- 后来 成为 
	- 美国 国家标准
	- 美国信息交换标准代码

- 这美国标准
	- 怎么成为国际标准的呢？

### 国际化

- 当时 除了美国之外
	- 西欧、北欧的电子技术
	- 也比较发达

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685713159744)

- 在阿尔卑斯山西北侧
	- 山上的溪流汇聚为
		- Geneva Lake 
		- 日内瓦湖
	- 此处 有
		- 国际标准化组织 
    	- International Organization for Standardization 
		- ISO	

### ISO

- ISO 将 ASCII定为 国际标准
  - 称为 ISO 646 标准
  - ASCII 就在 欧洲和国际上 用起来了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662861204478)

- ASCII最近一次更新 
	- 在 1986 年
    - 总共定义了 128个字符
- 能否完整、系统地看到
	- `整个`ascii码表  呢？

### ascii

- :q
	- 从vim退出
	- 回到shell环境

- 下载 ascii 这个程序

```shell
sudo apt install ascii
```

- 上面的命令 
	- 可以安装 ascii这个应用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664107045873)

- 如上图所示

### 使用ascii

- 运行新装的应用

```bash
ascii
```

- 每一字符 有三个部分组成
	1. Dec 对应的是 10 进制数
	2. Hex 对应的是 16 进制数
	3. 最后一列 对应的是 具体字符或功能

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664108814250)

- 字符包括
  - 英文大写字母
  - 英文小写字母
  - 标点符号
  - 控制字符
- 这样就把
	- 各种字符 和 二进制数字0101
	- 对应起来了
- 128个字符 
	- 正好是一套完整的ascii编码

## 总结

- 这次 我们了解了`ASCII`码表
	- `A`merican `S`tandard `C`ode for `I`nformation `I`nterchange
	- 美国信息交换标准代码
- ASCII 码表范围
  - `48-57` 这个范围是 `数字`
  - `65-90` 这个范围是 `大` 写字母
  - `97-122` 这个范围是 `小` 写字母
  - 标点 穿插其中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664108814250)

- 我们可以自己做个 
	- 一屏看完的
	- ASCII码表 吗 ？？🤔
- 我们下次再说👋
- [配套视频](https://www.bilibili.com/video/BV11bUPYJEzR)





