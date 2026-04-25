# 查看进程

## 回忆上次内容

1. 我们最开始使用`python3 show.py`运行文件
2. 后来想要直接 show.py运行
	1. 修改 show.py首行 添加打开方式
		- `#!/usr/bin/python3 `
	2. 给程序所有者，也就是当前用户添加执行权限
		- `sudo chmod u+x show.py`
3. 再后来想要在任何文件夹中直接运行 show.py
	1. 用管理员权限 将 show.py拷入/usr/bin
	2. 控制/usr/bin/show.py的执行权限
	3. 但是感觉/usr/bin重文件太多
4. 想要将~(/home/shiyanlou)设置为环境路径$PATH
	1. 修改环境路径值
		- `export PATH=$PATH:~`
	2. 但是重启终端后，配置会消失
5. 先要设置~/.zshrc
	1. 在~/.zshrc最后一行写下
		- `export PATH=$PATH:~`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665299270427)

- <kbd>ctrl</kbd>+<kbd>c</kbd>会停止 进程
	- 如何才能让 进程继续跑呢？🤔

### 进行搜索

- 怎么查看进程呢？
	- 运行 `ps`命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674720458570)

- 但是如果 `show.py` 持续输出时间
	- 怎么运行 `ps`命令呢？🤔


### sleep.py

```
#!/usr/bin/python3
import time
while True:
	print(time.asctime())
	time.sleep(1)
```

- 我需要把 `sleep.py` 转到后台运行
	- 然后查询进程信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613901469592)


### 切到后台

- 切换的方法比较简单
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 
		- 把`当前进程` 从 `前台` 
		- 切换到 `后台`并暂停
- 简单来说 
	- 就是不给他用cpu了
	- suspended(挂起了)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613901550053)

- 如何理解suspended呢？

### pend

- pend 悬挂
	- pending 悬而未决的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230413-1681396705344)

- impending 
	- im 加强语气
	- impending 迫近的

### 钟摆

- pendulum
	- [ˈpendjələm]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674721536608)

- 钟摆

### depend

- depend
	- de向下
	- 悬挂
	- 悬挂在某物下→靠...支撑→依靠

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674721750590)

- dependable 可依赖的
- dependant 靠他人生活的
- dependency 依靠

### dependence

- dependence 依靠依赖
- independence 不依赖 独立

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712054902062)

- co-dependence 互相依存
- inter-dependence 相互倚重

### append

- append
	- ap 附加的
	- 附件

- appendix
	- 附加的、附录、阑尾

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674722083226)

- appendagen
	- 附加物
	- [əˈpendɪdʒ] 
- 可以把后台进程切换回前台吗？

### suspend
- suspend
	- sus- 同sub 从下面来的
	- 在什么下面悬挂

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674722245741)

- suspended
	- 被挂起的
- suspense
	- 悬而未决的
	- 焦虑

### suspend词源

- suspend = sus + pend

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671717103266)

- sus来自于sub 下面
	- sustain 
		- 支撑;承受(sus+tain握住→在下面握住→支撑)
	- suspect 
		- 怀疑 (sus+pect看→在下面看一看→怀疑)
	- susceptive 有接受力的;敏感的(sus+cept拿+ive→有拿下的能力→有接受力的)
- suspend是什么意思呢？

### 回顾

- *(s)pen- 意思为悬挂带着
	- depend 
		- de-, 向下，离开 -pend, 悬挂
		- 即悬挂点
		- 引申义依靠
		- denpendent
		- independent
	-  append
		-  词根词缀： ap- 来 , 临近 
		-  -pend- 悬挂 
		-  垂→依附
	-   expend
		-   ex- 出 , 向外 + -pend- 支付
		-   spend
- suspend 
	- 挂起
	- 吊，悬挂；推迟，暂停

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674739277939)

- 挂起来和推迟有啥关系？

### suspend

- 古代萨克逊人使用的刀叫做撒克逊刀
	- 刃朝上
	- 抽出来 就是要战斗

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221222-1671717759925)

- 挂起来
	- sustain 维持了 
	- 就是不战斗了
	- 推迟战斗了
	- 暂停了
- 程序先不运行
	- 就是挂起了
- 先运行 再挂起
	- 还是 有点麻烦
- 可以 直接后台运行
	- 但是 不输出到屏幕 吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230126-1674739277939)

## 总结

- 进程前后台切换
	- <kbd>ctrl</kbd> + <kbd>z</kbd> 把当前进程
		- 切换到后台并暂停

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240402-1712055128803)

- 如何 把进程
	- 切换回 前台 
	- 让他继续呢？？🤔
- 我们下次再说！👋
