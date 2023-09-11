---
show: step
version: 1.0
enable_checker: true
---

# 光标位置

## 回忆上次内容

- 上次了解了 新的转义模式
	- \33 逃逸控制字符 esc
		- 这个字符让输出退出标准输出流
		- 进行控制信息的设置
			- 可以设置光标输出的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614263176102)

- ASR33中的ALT MODE 
	- 是 今天的ESC吗？？？？🤔

### 查询文档

- http://bitsavers.org/communications/teletype/33/310B_Vol_1_33_Teletypewriter_Sets_Technical_Manual_Sep74.pdf

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230129-1674989603107)

- 在当时还没有esc键的时候
	- 使用<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>k</kbd>实现
	- <kbd>esc</kbd>效果
- 后来的键盘
	- 都有了 专门的esc 键

### escape 跳出

- 现在键盘都有这个按键
	- 一般在左上角
	- 退出当前游戏
	- 跳出菜单一般用这个

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210226-1614305987888)

- 上图<kbd>esc</kbd>在
	- 1 的左下
	- Q 的左边
- 可以从当前的纯文字标准输出流里面
	- 逃(escape)出来
	- 进行控制信息的传输

### 键盘的进化过程

- 早年间的一体机
	- 当年最流行的 DEC VT100

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210226-1614307031201)

- <kbd>esc</kbd>还在<kbd>1</kbd>旁边
	- 当时还没有在最左上的位置

### 位置的变化

- 玩一些`terminal`上面的游戏时
	- 可以退出主游戏
	- 进行设置、存盘、读档、退出之类的菜单操作
- 知道 什么时候退
	- 比知道 怎么玩`更`重要😄

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210226-1614306783917)

- 功能键在 最左边
	- 键盘还没有 统一的标准

### 标准键盘

- 这是101 标准键盘
	- 左上角是<kbd>esc</kbd> 标准位置 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210226-1614306875929)

- 后来放在第一行第一列
	- `escape`体现重要性
	- 还要用边距和<kbd>F1</kbd>之类的拉开距离

### 行业标准

- 键盘开始有了行业标准

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210226-1614306949603)

- 可以在ascii里面找到这个esc字符么？

### esc

- 在下图中尝试找到esc

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665830421389)

- (001 1011)<sub>2</sub>
- 再到ascii应用找一下esc？

### ascii

- 找到这个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665830497588)

- 这个esc对应的是
	- 27 - 10进制
- 对应16进制多少呢？

### 1b

- 1b 是(1b)<sub>16进制</sub>
	- 对应着(27)<sub>10进制</sub>
	- 对应着(33)<sub>8进制</sub>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220319-1647657358063)

- 上面的分别是
	- 十六进制形态
	- 十进制形态
	- 八进制形态
- 正如下面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220319-1647657968361)

- 不同的形态都可以
	- 用来转义吗？

### 不同形态

- 不同的转义方式不影响功能

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220319-1647658036940)

### 操作大全

- 位置控制代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614214370989)

- CSI 是
	- Control Sequence Introducer
	- 就是esc加[
		- esc就是\033
		- 用的是几进制的形式？

### \033

-  八进制的 形式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220319-1647658418708)

- \033[nA 光标上移 n 行
- \033[nB 光标下移 n 行
- \033[nC 光标右移 n 行
- \033[nD 光标左移 n 行
- \033[y;xH 设置光标位置
- \033[2J 清屏
- \033[K 清除从光标到行尾的内容
- \033[s 保存光标位置
- \033[u 恢复光标位置
- \033[?25l 隐藏光标
- \033[?25h 显示光标
- 我们先试试\033[2J

## 总结

- 本次了解了键盘演化的过程
	- ESC 从 组合键 
	- 到 独立按键

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230129-1674990886949)

- ESC 的目的
	- 是进入控制序列
	- 配置控制信息
- 控制信息
	- \033[y;xH 设置光标位置
	- \033[2J 清屏
- 这到底怎么控制来着？？？🤔
- 现在 系统里
	- 这些功能 是`谁`来实现的呢？
- 是谁实现的呢？
- 我们下次再说！👋
