---
show: step
version: 1.0
enable_checker: true
---

# 持续集成(Continuous Integration)

## 回忆

- 上次我们研究了nonlocal
- nonlocal是控制变量作用域(scope)的关键字
- 目前学了3个
	- global 全局可见
	- local 本地可见
	- nonlocal 非本地可见(上一层函数也可见)
- 函数既然已经是封装(encapsulate)了的功能(function)
- 为什么还要进一步封装呢？
- 函数中的函数有什么意义呢？


### 封装举例

- 函数是一个套路
- 可以被调用从而被反复执行
- 套路复杂之后
- 套路里面还有套路

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1661003504917)

- 加热环节是一个工艺流程
- 这个流程里面还细分成几个小流程
- 这几个小流程也是套路
- 也需要封装

### 实际情况

- 分工是一层层的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220820-1661003486894)

- 大的套路里面
	- 有各种各样小的套路
	- 小的套路也是套路
	- 也需要封装
- 这不是为了封装而封装么？
	- 有这个必要么？

### 事故现场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661070113244)

- fibo函数肯定是没问题的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661070120293)

- 结果肯定是出了问题
- 问题在哪？
- 进去调试

### 调试过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661070297620)

- f指向的是fibo没有问题
- f(5)就是fibo(5)
- 但是此时的fibo已经指向了g

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661070378142)

- 直接返回0了

- fibo这个函数体本身没有错误
- 但是fibo这个函数名已经被污染了
- 所以调用的时候
- 是调用的被g污染的fibo
- 那封装起来有用么？

### 封装

- 封装了之后
- 再试图污染那个被递归调用的函数名
- 污染失败
- 因为已经被封装

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661070984982) 


- 函数内部的同名函数变量会屏蔽(shadow)外层的变量名
	- `enclosing_function` 中的 `_fibo` 不是外面全局的 `_fibo` 
	- `enclosing_function` 中的 `_fibo` 屏蔽了外面全局的 `_fibo` 

### 调试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661071249700)

- 在模块全局(global)层面污染成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661071340411)

- 在函数`enclosing_function`里面屏蔽了外面的`_fibo`
- 除非把这个函数声明为global
- 那就失去了封装的意义了
- 为的就是屏蔽外面的变量名
- 尤其是在多人开发的时候

### 多人开发

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661219470913)

- 几个人一起写代码
- 同时提交
- 你知道人家外面写什么名字呢？
- 为了避免别直接污染
- 就打个包
- 封起来

### 工艺流程

- 如果生产篮球是一个流程(函数)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661061701199)

- 这里面有分有细分流程
	- 制作内胆
	- 缠纱
	- 中胎制作
	- 外皮制作
- 这是个不断细化的过程
- 为什么要这么细化呢？

### 标准

- 著名的球员为什么价值那么高
- 很大程度在于商业联盟的宣传
- 他们也确实具有很厉害的手感
- 这种手感是基于标准的篮球和篮筐的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220905-1662363895434)

- 如果用少年篮球练三分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220905-1662363908084)

- 最终比赛的时候肯定会不行
- 比拼的就是手感、球感

### 篮球标准

- 不止大小篮球还有很多参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220905-1662363966329)

- 弹性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220905-1662363977805)

- 篮球工业其实不是一个特别工业化的产业
- 如果更进一步
- 我相信会有专门的内胆厂
- 就像汽车工业有专门的轮胎厂、玻璃厂

### 汽车制造
- 如果制作车子是一个函数
	- 那制作轮子就是子函数
- 如果制作轮子是一个函数
	- 函数里面也分成很多子函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661073231112)


- 确实是一步步完成的
- 每一步都很复杂
- 每一步都有各种小的步骤
- 按步骤一步步来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661062156924)

- 这就是流程封装成函数
- 这个词为什么会应用于编程领域呢？

### 封装

- 编程是基于电子计算机的
- 电子计算机是基于电子的
- 最早期就连三极管也买不到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661076515688)

- 后来可以买到了
- 有标准的封装

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661076561821)

- 电子元件原来都是分立件


### 封装在电子领域


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661075749842)

- 比如上图就是220v到5v的电源模块
- 分立件其实也可以划分成多个模块
- 这也是模块(module)这个词的来源
- 这些模块讲究什么呢？

### 高内聚 低耦合

- 下图可以理解为一个报警灯

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661075823244)

- 有两个模块
	- 闪烁灯模块
	- 报警声音模块
- 这两个模块应该彼此不影响
	- 高内聚、低耦合
	- 这也是我们设计函数的原则

### 更多封装

- 后来三极管有了更多的封装模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661076692132)

- 元器件也不用分线连接了
- 直接印刷到电路板了
	- pcb

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661076783808)

- 2个三极管可以集成为一个逻辑与非门的电路

### 与非门

- 2个三极管可以集成为一个逻辑与非门的电路

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661077113612)

- 4个与非门可以封装成一个ic(集成电路)芯片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661077154381)

- 如果再用分立件就比较麻烦

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661220008067)

- 甚至可以再将逻辑元件
- 集成为各种运算器和存储器

### 运算器和存储器

- 一位全加器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661220873901)

- D触发器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661220917128)

### cpu

- cpu高度集成
- 可以做各种运算(加减乘除)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661220601030)

- 想要回到分立件已经有点不可想象了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661220590372)

- 坏了就直接换一个就完了
- 这种集成化还在持续

### 持续集成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661222159948)

- 集成的程度越来越高

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661222168027)

- 修理工作变成了换芯片
- 目前有几个芯片合成一个SoC的趋势
- 甚至连软件都集成好了

### 高度集成

- 什么芯片都集成到一起
	- cpu
	- 内存
	- wifi
	- 音频
	- dsp

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661221218032)

- 功能高内聚
- 如何理解高内聚呢？



### 高内聚(High Cohesion)

- 高内聚是指一个软件模块是由相关性很强的代码组成
- 只负责一项任务
- 模块的内聚反映模块内部联系的紧密程度
- 只需做好一件事件
- 不要过分关心其他任务

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661221779422)

- 高内聚性的好处是可以提高程序的可靠性。
- 我干好我的
- 不相关的我不管
- 我不负责熬粥


### 低耦合(low coupling)

- 我是个电饭锅我不去影响电灯
- 电灯也别来影响我
- 就像你外面的各种变量名别想影响到我
- fibo是一个封装好的东西
- 不管你外面变量名怎么乱
- 我里面是不受干扰的
- 反之就是
- 集体相亲

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661222008761)

- 各种耦合
- 各种八卦


### 总结
- 我们了解到函数是有一个个模块构成的
- 一个模块一个功能
	- 高内聚
	- 低耦合
- 我们可以做一个什么样的具体应用么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220905-1662372283131)

- 比如周易占卜？🤔
- 我们下次再说👋



