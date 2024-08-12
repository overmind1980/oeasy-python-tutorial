---
show: step
version: 1.0
enable_checker: true
---

# 导入import

## 回忆上次内容

- 上次导入了系统模块
	- `__hello__`
	- `time`
- 而且导入了自定义的模块
	- import show_time
		- 导入 自己定义的show_time.py 
			- 作为show_time模块
		- 还可以使用show_time模块中`的`变量pi
			- show_time`.`pi
- 但是不可以直接 直接使用pi
	- 如果我`就`想直接使用pi
	- 应该怎么办呢？？？🤔

### 从shell开始

1. 我们上次有两个文件
	1. 被引用模块 
		- my_file.py 
	2. 主体程序
		- oeasy.py 

```
vi my_file.py oeasy.py
```

- :ls效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650331331)

### 修改oeasy.py
- 如下图所示 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650394555)

- 声明本地变量pi
	- 并将show_time模块中pi的值(3.14) 
	- 赋给 本地变量pi
- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230521-1684679991283)

- 程序里面有哪些是本地变量吗？

### locals()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650711150)

- locals()显示本地变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650744739)

- 本地变量有
	- myfile
	- pi
- 还有其他写法吗？

### from...import...

- from my_file import pi
	- 就相当于声明了本地变量pi
	- 并将show_time模块中pi的值(3.14)
		- 赋给 本地变量pi

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650546603)

- locals()函数
	- 可以查看本地局部变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650526666)

- 本地变量
	- 没有my_file
	- 只有pi
- 本地变量会撞车吗？

### 撞车(local name crash)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660099644559)

- 撞车是什么样子的！？
	- 可以欣赏一下车祸现场吗？

### 车祸现场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650851066)

- 声明了pi之后
	- 先将my_file模块中pi的值(3.14)
		- 赋给 本地变量pi
	- 再将math模块中pi的值(3.141592553589793)
		- 赋给 本地变量pi

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650875162)

- 本地变量pi只有一个值
	- (3.141592553589793)
	- 最开始从show_time.pi中赋过来3.14被撞飞了
	- 本地变量名(local name)pi 
		- 被两次赋值
		- 第一次赋值被覆盖了(crash)
- 这就是 local name crash

### 特别注意

- show_time.pi 被 math.pi 撞飞了
	- my_file 中的 pi
	- 被math中的 pi
	- 替换掉了
	- 覆盖了
	- 消失了... 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660099755457)

- 因此要特别注意尽量
	- `不要使用from xxx import * `
		- 因为这样会把模块里面所有的变量引入进来
	- 特别容易撞车
- 那可以给导入进来的变量改名么？

### from ... import ... as ...

- 可以的	
	- 这样可以把变量名更明确一点
	- 其实就是又起了个名字
	- 然后进行赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650972937)

- 任务达成！！！	
	- 总结一下 ！✿✿ヽ(°▽°)ノ✿

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650982516)

- 这样的话
	- 就有了两个不同的本地变量
	- 值分别来自两个不同名字空间的pi
- 什么是名字空间呢？

### 名字空间(namespace)

- my_file 和 math都是名字空间
	- 不同名字空间中
	- 可以有相同的变量pi
	- 他们彼此之间不受影响

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685280599067)

- 不同的命名空间
	- 可以同时存在
	- 名字可彼此相互独立互不干扰 

### python之禅最后一句

- 名字空间是个好主意！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667051481223)

- 可以用名字空间保护各自空间中的变量
	- 彼此之间不会覆盖

## 总结 
- 这次直接从模块中导入变量、函数
	- from my_file import pi
		- 导入show_time.pi 
		- 并作为pi变量使用
	- from my_file import pi as my_pi
		- 导入变量并重命名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700658086770)

- 突发奇想～
	- 这个import可以作为标识符来使用吗？？🤔
- 下次再说 👋



