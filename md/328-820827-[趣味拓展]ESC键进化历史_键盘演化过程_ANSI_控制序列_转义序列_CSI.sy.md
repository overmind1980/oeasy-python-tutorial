# 光标位置

## 回忆上次内容

- 上次了解了 新的转义模式
	- \033 逃逸控制字符 escape
		- 这个字符 让字符串 退出标准输出流
		- 进行控制信息的设置
			- 可以设置 光标输出的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614215584015)

- ASR33中的ALT MODE 
	- 是 今天的ESC键吗？？？？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614263176102)

### 查询文档

- http://bitsavers.org/communications/teletype/33/310B_Vol_1_33_Teletypewriter_Sets_Technical_Manual_Sep74.pdf

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230722-1690029943552)

- 最开始的时候
	- 还没有esc键
- 使用<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>k</kbd>
	- 实现<kbd>esc</kbd>效果
- 后来的键盘
	- 有了 实体的esc键

### escape 跳出

- 现在键盘都有这个按键
	- 一般在左上角
	- 用来
		- 退出当前应用/游戏
		- 跳出菜单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210226-1614305987888)

- 上图<kbd>esc</kbd>在
	- 1 的左下
	- Q 的左边
- <kbd>esc</kbd>可以
	- 从当前的纯文字标准输出流里面
	- 逃(escape)出来
	- 进行控制信息的传输

### 键盘的进化过程

- 后来连接主机(main frame)用的是
	- 终端(terminal)
- 当年最流行的终端 型号是
	- DEC VT100

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210226-1614307031201)

- <kbd>esc</kbd> 在<kbd>1</kbd> 左边
	- 还没有 出现在最左上的位置

### 位置的变化

- 玩一些`terminal`上面的游戏时
	- 可以用 <kbd>esc</kbd> 退出游戏环境
		- 进入菜单 
		- 进行设置、存盘、读档、退出之类的操作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210226-1614306783917)

- 知道 什么时候退
	- 比知道 怎么玩`更`重要😄
- 键盘还没有 统一的标准 
	- 功能键  <kbd>F1</kbd>-<kbd>F10</kbd>
		- 在 最左边
 

### 标准键盘

- 101键盘布局 成为经典
	- 左上角是<kbd>esc</kbd> 标准位置 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210226-1614306875929)

- 后来放在 左上角
	- 用边距和<kbd>F1</kbd> 拉开距离
	- 体现`escape`重要性

### 行业标准

- 键盘开始有了标准布局
	- 并形成了工业标准

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210226-1614306949603)

- 可以在ascii字符集里面
	- 找到<kbd>esc</kbd> 这个字符 么？

### esc

- 在下图中尝试找到esc

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665830421389)

- esc 对应
	- (001 1011)<sub>2进制</sub>
- 再到ascii应用中
	- 找一下esc？

### ascii

- 使用apt
	- 安装ascii这个应用

```
sudo apt install ascii
```

- 找到这个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665830497588)

- 这个esc对应的是
	- (27)<sub>10进制</sub>
	- (1B)<sub>16进制</sub>
- 这个(1B)<sub>16进制</sub>
	- 是怎么得到的呢？

### 1b

- 使用hex函数
	- 可以得到 
		- 数字的十六进制形式字符串
		- hexadecimal

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230722-1690031340737)

- 如果是八进制呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230722-1690031437297)


### 不同进制 表现形式

- (1b)<sub>16进制</sub>
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

- 不同的转义方式
	- 不影响功能

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220319-1647658036940)

- 使用转义序列
	- 或者16进制转移方式
	- 或者8进制转移方式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220319-1647657968361)

- 在输出时
	- 没有差别
	- 都是换行效果

### escape控制码大全

- CSI 是
	- Control Sequence Introducer
	- 就是esc加[
		- esc就是\033
		- 用的是几进制的形式？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614214370989)

- 可以有各种方式
	- 控制位置

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

### 光标的自由

- 输出字符的位置
	- 以前是固定的
	- 仿佛被牢牢锁住

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230722-1690032789130)

- 真的能 挣脱固定位置的锁链 吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230722-1690033065372)

- 好期待？

## 总结

- 本次了解了键盘演化的过程
	- ESC 从 组合键 
	- 到 独立按键

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230129-1674990886949)

- ESC 的作用
	- 是 进入控制序列
	- 配置控制信息
- 控制信息
	- \033[y;xH 设置光标位置
	- \033[2J 清屏
- 这到底怎么控制？？？🤔
- `谁`来实现这些功能？
- 我们下次再说！👋
