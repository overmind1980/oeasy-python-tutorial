---
show: step
version: 1.0
enable_checker: true
---

# 牛说(cowsay)

## 回忆上次内容

- 狂飙了一路
  - 从 用shell `直接`执行 python程序
  - 到 用shell `循环`执行 python程序
- 循环体中
  - 把 `python`的 输出结果 
	- 用管道 交给了 `figlet` 
  - 把 `figlet`的 输出结果 
	- 用管道 交给了 `cowsay`
  - 把 `cowsay`的 输出结果
	- 用管道 交给了 `lolcat`
- 这一路真的好远啊!
	- python3 是脚本解释器
	- shell 也是脚本解释器
- 现在的问题是
	- 日期时间 输出格式 非常复杂

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674902945544)

- 想要只输出 时分秒 
	- 再送 figlet 、 cowsay 、lolcat
	- 可以吗？🤔

### 搜索

- 这就得 修改 
	- 最初生成时间的 源头
	- show.py 文件
- 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681946296652)

- 查询一下time包中的 strftime函数

### show.py

- 进入游乐场
	- help(str.strftime)
		- 查找 time包中的 strftime函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681948969814)

- strftime 函数
  - str 是字符串 string 的意思
  - f 是 format


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220331-1648711364409)

- strftime 函数 把一个 time.localtime() 
	- 格式化为一个字符串
- quit()
	- 退出游乐场
	- 回到shell

### 具体效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674221782677)

- 只要时分秒

```python
#!/usr/bin/python3
import time
localtime = time.strftime(' %H:%M:%S',time.localtime())
print(localtime,end="")
```

- 可以 再`简化`点 吗?？

### 具体理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220331-1648711485748)

- 缺省参数就是当前时间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221231-1672449502716)

```python
#!/usr/bin/python3
import time
print(time.strftime('%H:%M:%S'),end="")
```

- 格式如何理解呢？

### 理解格式

- 格式化成 ` %H:%M:%S` 这个格式
	- 这个格式选取了三个时间元组项
		- %H是小时
		- %M是分钟
		- %S是秒钟
		- 中间用:分割

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220331-1648711587529)

- 把时间 送进管道
	- 流给 后面的进程

### 直接运行 sh

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649377873706)

- 目前 搭配起来 
	- 确实 `可以`运行 了！
- 但是 循环次数 还是 受限制
	- 可以 做一个永远循环的 吗？

### 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665310670472)

- 看起来是把
	- for i in {0..100}
- 换成
	- while true

### 替换 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221231-1672449767743)

- 效果 还行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210812-1628752817259)

### 更多 效果

- 哈哈 火鸡turkey也能说话

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649378017159)

- 这依靠的是 time.strftime
	- 就是字符串(str) 格式(format)的 时间(time)
- 如何理解 format 这个单词呢？

### format 

- format 来自于 form
	- 形成一个形式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674908723467)

- format 是 形式的套路
	- 一种格式

### form

- 都和	
	- 形成
	- 格式
	- 相关

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674908798191)

- 如果 我想 
	- 不通过 `sh loop.sh` 运行
	- 直接运行 `loop.sh` 
	- 可以 吗？

### 直接运行

- 直接运行 的话
	- `loop.sh` 没有 执行权限
	- 给他提权
  - chmod 改变模式
  - u+x 给当前用户增加执行权限

```shell
chmod u+x loop.sh
./loop.sh
```

- 然后再运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644585241380)

- 绿色说明可以运行了
- 不过前面还是需要当前路径`./`
	- 如果就想要 `loop.sh` 直接运行
	- 不要当前路径 `./` 呢？

### 设置路径

```
export PATH=$PATH:.
```

- 注意$的位置
	- 前面的是`PATH`没有$
	- 后面的`$PATH`有$ 
- `.(点)` 指的是当前的路径

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644586410528)

- 这样
	- 就可以 直接运行 当前路径下的 程序 了
	- 不用 在程序前面 加上`./`了
- 不过 如果重开 当前的shell
	- 还是 不能直接运行
- 怎么办 来着？🤔

### ~/.zshrc

- 编辑 zsh的配置文件 
	- ~/.zshrc
	- `每`次 进入zsh
		- `都`会执行 这个 rc配置文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644586721011)

- 这样
	- 重开zsh
	- 还是可以 直接运行loop.sh
- 跳出 循环 
	- 可以用<kbd>ctrl</kbd>+<kbd>c</kbd>
- 把 循环 放到后台
	- 用<kbd>ctrl</kbd>+<kbd>z</kbd>
- fg、bg
	- 切换前后台
- nohup
	- 后台输出到文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644586816899)

- 这是 我们之前 就接触过的内容 了！
	- 啊~
	- 终于完成了
	- 不！容！易！！！
- 还是先总结吧！

## 总结

- 使用strftime
	- 只输出时分秒
	- 然后通过管道 
		- 流到figlet
		- 再到cowsay
		- 最后到lolcat
- 最终我们
	- 设置loop.sh的权限
	- 在~/.zshrc中设置$PATH
	- 让loop.sh成为通用命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674911360310)

- 可以`diy`一个小动物 
	- 来报时吗？🤔
- 我们的python基础部分 
	- 到此就结束了
	- *★,°*:.☆(￣▽￣)/$:*.°★* 

### 大总结

- 我们首先 从零基础开始
	- 接触代码 下载代码 修改代码
	- 试着 将 苹果和香蕉数量相加
- 了解了
	- 理解了 顺序结构
	- 理解了 条件分支结构
	- 理解了 循环结构
	- 可以配合 各种数据结构(list/dict)
- 最终
	- 在shell 里面 运行 
	- 进程控制
	- 前后台切换
	- 最后和 shell配合起来
- 后面还有什么？🤔
- 下次再说👋
