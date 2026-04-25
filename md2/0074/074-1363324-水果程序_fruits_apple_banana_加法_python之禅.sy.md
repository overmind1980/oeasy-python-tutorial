#  水果程序_fruits_apple_banana_加法_python之禅 

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV1gKQUYREwY)
- 上次直接从模块中导入变量、函数
	- from my_file import pi
		- 导入my_file.pi 
		- 并作为 pi 使用
	- from my_file import pi as my_pi
		- 导入变量 并 重命名

![图片描述](uid1190679-20231122-1700658086770.png)

- 想写个 实用点儿的程序？？🤔

### 提问

- 想要输入苹果和香蕉的数量
	- 再求和

![图片描述](uid1190679-20241201-1733059484137.png) 

```
quantity = input("请输入苹果的数量：")
print(f"苹果的数量为：{quantity}")
```

- 这里用了一个f-string的方式显示quantity

### 目标达成

![图片描述](uid1190679-20241206-1733480926448.png) 

- 结果

![图片描述](uid1190679-20241206-1733480904995.png) 

- 想要两个水果求和

### 再提问

![图片描述](uid1190679-20241201-1733059655635.png) 

- 生成代码

```
apple_quantity = input("请输入苹果的数量：")
banana_quantity = input("请输入香蕉的数量：")
try:
    total = int(apple_quantity) + int(banana_quantity)
    print(f"苹果和香蕉的总数为：{total}")
except ValueError:
    print("输入的不是有效的整数。")
```

- 尝试运行

### 运行结果

- 看点
	1. 蛇形命名法
	2. 类型转化
	3. 异常处理

![图片描述](uid1190679-20241206-1733481011112.png)

- 全都顺利完成 

![图片描述](uid1190679-20241201-1733059852883.png)

- 我希望苹果数量输入出错后
	- 立刻报错
	- 不要再输入香蕉数量了

### 代码优化

```
try:
    apple_quantity = int(input("请输入苹果的数量："))
    banana_quantity = int(input("请输入香蕉的数量："))
    total = apple_quantity + banana_quantity
    print(f"苹果和香蕉的总数为：{total}")
except ValueError:
    print("输入的不是有效的整数。")
```

- 遇到苹果数据有问题
	- 立刻报错

![图片描述](uid1190679-20241201-1733060469213.png) 

- 类型从str转成int
	- 再从int输出到标准输出流
	- 也是` python之禅` 里面的一句话
    - Explicit is better than implicit
- 怎么理解呢？

### plicare

![图片描述](uid1190679-20240326-1711447835512.png)

- plicare是
	- 拉丁语词根折叠

![图片描述](uid1190679-20240928-1727516996077.png)

### explicit

- ex往外折叠
	- explicit 

![图片描述](uid1190679-20240928-1727517071679.png)

- 展开了
- 掰开了
- 揉碎了
- 细说清楚了

### implicit

- im往里折叠
	- implicit

![图片描述](uid1190679-20240928-1727517099919.png)

- 折叠了
- 遮盖了
- 掩藏了
- 暗示了

### 对比

- Explicit is better than implicit 

![图片描述](uid1190679-20240928-1727517116547.png)

- 明了胜于晦涩

### "1" + 2

- "1" + 2
  - 报错了

![图片描述](uid1190679-20221029-1667043028745.png)

- 字符串加法 
	- 不接受 隐式的 类型转化
	- 后面的操作数必须得是字符串
- 如果 要用整数加法 就要把前面
	- `显示地` 转化 为 整数类型
- `明了` 胜于 `晦涩`
	- `Explicit` is better than `implicit`
	- 这句话确实
	- 真有禅机

- 这 python之禅 还说了些什么？
	- 这些禅语 都是`谁`写的呢？

### python 之禅

- python之禅 是 Tim Peters写的

![图片描述](uid1190679-20210815-1629020881552.png)

- 在游乐场
	- `import this`

### 翻译


|原文|译文|指向|
|---|---|---|
|Beautiful is better than ugly|优美胜于丑陋|要优美|
|Explicit is better than implicit|明了胜于晦涩|明了|
|Simple is better than complex|简洁胜于复杂|简洁|
|Complex is better than complicated|复杂胜于凌乱|若复杂不可避免<br>保持接口简洁|
|Flat is better than nested|扁平胜于嵌套|扁平的<br>不要太多嵌套|
|Sparse is better than dense|间隔胜于紧凑|适当间隔<br>不奢望一行解决|
|Readability counts|可读性很重要|可读才是好代码|
|Special cases aren't special enough to break the rules|不可违背规则|规则重要|
|Although practicality beats purity|虽然实践性胜过纯洁性|实践很重要|
|Errors should never pass silently|错误必须处理|不放过异常<br>不写 except:pass|
|Unless explicitly silenced|除非明确保持沉默|除非故意|
|In the face of ambiguity, refuse the temptation to guess|不要让人猜测|明确|
|There should be one-- and preferably only one --obvious way to do it|找最好的解决方案|精益求精|
|Although that way may not be obvious at first unless you're Dutch|虽然这并不容易<br>因为你不是 Python 之父|这里的 Dutch 是指 Guido |
|Now is better than never|做也许好过不做|实践出真知|
|Although never is often better than *right* now|但不假思索就动手还不如不做|谋定而后动|
|If the implementation is hard to explain, it's a bad idea|如果你无法向人描述你的方案<br>那肯定不是一个好方案|好方法用容易描述|
|If the implementation is easy to explain, it may be a good idea|容易解释，就是好的|说得清 才理解得透彻|
|Namespaces are one honking great idea -- let's do more of those!|命名空间是一种绝妙的理念<br>我们应当多加利用|多用名字空间|


## 总结

- 这次我们编写了一个加法运算程序
- 明了 胜于 晦涩
	- explicit is better than implicit
	- 指的是变量类型 要明了

![图片描述](uid1190679-20241201-1733059852883.png)

- 难道还有变量类型晦涩的情况？？🤔
- 我们下次再说👋
- [配套视频](https://www.bilibili.com/video/BV1gKQUYREwY)

