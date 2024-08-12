---
show: step
version: 1.0
enable_checker: true
---

# 随机数字运算

## 回忆上次内容

- 上次输出了
  - 随机汉字
  - 随机表情

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690794913471)

- 可以让 输出位置随机起来吗？🤔

### 控制位置

- 首先
	- 从vim退回到shell
- 然后
	- 运行python3 进入游乐场
	- 使用的还是最熟悉的print函数
		- 但是除了输出纯文本之外
		- 这次还可以设置位置

```shell
print("\033[2J")
print("\033[10;20Hoeasy")
```

- 具体控制序列设置
	- \033[2J 清屏
	- \033[y;xH 设置光标位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230806-1691329491959)

### 随机出现范围

- 整个屏幕 80\*24

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220414-1649943095718)

- oeasy 总共 5 个字符
	- 横向范围[0,75)
	- 纵向范围[0,24)

```python
s_pos_x = str(random.randint(0,75))
s_pos_y = str(random.randint(0,24))
s_pos = "\033[2J\033[" + s_pos_y + ";" + s_pos_x +"H"
print(s_pos + "oeasy")
```

- 随机位置达成
- 突然有个想法
  - 在随机位置用随机颜色输出随机成语 😄
  - 或者间隔随机的空格发出随机的表情
- 这真是太随机了
- 随机大整合
  - 干吧！👊
- 可以随机输出一个ascii art吗？

### 随机 ascii_art

- 先退回到shell
	- 先安装cowsay
	- 然后将cowsay输出的结果 
		- 重定向到r.py

```bash
sudo apt install cowsay
echo "oeasy" | cowsay -f hellokitty
echo "oeasy" | cowsay -f hellokitty > r.py
```

- 这样就将小动物放进r.py了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230819-1692455459989)

### 添加三引号

- 使用三引号
	- 让cowsay小动物 原样输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210930-1632994870361)

- 想办法 让ascii_art整体
	- 在屏幕中的 随机位置
	- 以随机的颜色 出现

- 估计是非常混乱的画面
	- 也是值得记录的画面

<span style="font-size:100px">🤪</span>

- 发个状态记录此时
	- 混乱的屏幕吧！！！
	- 和快乐的心情！！！

### 总结

- 这次实现
	- 随机位置
	- 随机成语
	- 配合小动物
- 你感受到随机的乐趣了么？
	- 变化久了就想要定下来
	- 可以让颜色字体 固定成常量 吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230801-1690855257816)

- 下次再说 👋