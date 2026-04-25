本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# 提示符是怎么来的_[词根溯源]prompt_input_输入函数_提示符

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV1oDw1epED7)
- 上次讲的是
	- 从键盘`输入`变量的值
- input 函数
  - 可以 接收到 输入字符串
  - 存在 变量里

![图片描述](uid1190679-20241109-1731160445146.png) 

- input函数的参数
	- 叫prompt 
	- 在哪里见过呢？

### 提示词

- prompt就是提示词
	- 文生图、文生视频 靠的都是
	- 提示词 

![图片描述](uid1190679-20241109-1731161067049.png) 

- 提示词
	- 已经成为了一门工程
	- 提示词工程
	- prompt engineer

### 回到python

- input函数括号里面
	- 可以放 字符串参数prompt
	- 作为 提示信息

![图片描述](uid1190679-20230422-1682129859796.png)


### 添加输入提示

```python
name = input("what is your name:")
```

- input函数的 参数就是
	- 输入提示符
	- `prompt `

![图片描述](uid1190679-20211021-1634787397159.png)

- 参数 `prompt`
	- 作为 `提示字符串`
	- 输出到了 屏幕

![图片描述](uid1190679-20211021-1634787463082.png)

- 然后等待输入

### 中断输入

![图片描述](uid1190679-20230422-1682129951574.png)

- 输入过程中 
  - 如果 点击 <kbd>Ctrl</kbd> + <kbd>d</kbd>
  - mac 点击<kbd>command</kbd> + <kbd>d</kbd>

![图片描述](uid1190679-20241110-1731203459061.png) 

- 出现EOFError
	- 这 EOFError 什么意思？

### eof

![图片描述](uid1190679-20241110-1731203601180.png) 

- eof指的是
	- 文件读取没有完成
	- 被强行终止了
- prompt 这词 
	- 怎么来的呢？

### prompt

- prompt
	- pro 往前
	- mpt 拿
	- 往前拿
	- 推动进度

![图片描述](uid1190679-20241110-1731204533347.png) 

- 把演员戏份`往前推进`
	- 提词器
	- 提示、提醒、`鼓励`他往下说
	- 导致 对方 `迅速`、`及时`地 行动

### 提示词

- 终端里面的prompt
	- 提示着 
		1. 登录名
		2. 所在路径

![图片描述](uid1190679-20241110-1731204805039.png) 

- ai中的prompt
	- 提示着 我们要生成的内容

![图片描述](uid1190679-20241110-1731204446149.png) 

- 和prompt 类似的单词还有一些
	- 我们一并记下

### exempt

- exempt
	- /ɪɡˈzɛm(p)t/
	- ex 往外
	- empt 拿
	- 往外拿

![图片描述](uid1190679-20241110-1731205402430.png) 

- 豁免、赦免、排除
	- 免税、免除兵役

### empty

- empty
	- e(x) 向外
	- mpt 拿
	- 向外拿后的状态

![图片描述](uid1190679-20241110-1731205099205.png) 

- 空的

### redeem

- redeem
	- /rɪˈdiːm/
	- re 重新
	- de 向下(地狱)
	- em 拿
	- 从地狱里拿回来
	- 拯救

![图片描述](uid1190679-20241110-1731205623132.png) 

- redemption
	- 救赎

## 总结

- 这次讲的是
	- input 函数 的参数
    - prompt 
    - 提示词

![图片描述](uid1190679-20241110-1731206017957.png) 

- 我想写一个程序
	- 输入名字
	- 然后对他说hello
	- 并欢迎

![图片描述](uid1190679-20231125-1700878217592.png)

- 具体怎么写呢？🤔
- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV1oDw1epED7)








