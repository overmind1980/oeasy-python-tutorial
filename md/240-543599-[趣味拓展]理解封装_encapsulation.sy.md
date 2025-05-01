---
show: step
version: 1.0
enable_checker: true
---

# 嵌套调用

## 回忆

- 上次研究了调用(call)栈(stack)的帧(frame)
	- 调用函数是一层层调用的
	- 函数的帧(frame)被放到了一个栈(stack)结构中
- 调用的时候建立一个
	- 参数(parameter)
	- 返回地址(return address)
	- 局部(locals)变量
- 放在栈上
- 然后去执行函数的代码对象
- 执行完了返回的时候
	- 回到调用函数(caller)调用的位置
	- caller的局部变量、形式参数(parameter)都还在自己的帧上
	- 继续执行caller的指令
	- 直至结束
- 我们就是这样
	- 一层层地完成抽象和封装
	- 然后层层嵌套调用的
- 究竟应该如何理解抽象和封装呢？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220808-1659945591290)

### 什么是函数

- 含数...

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220813-1660382882544)

- 各种函数...

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220813-1660382891463)

- 好像不太对？😄

### 函数

- 正确的写法是函数
- 其实函、含都是包含的意思
- f(x)里面不是包含着一个数字x么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220813-1660384216795)

- 函数关系
	- x是自变量
	- y是因变量
	- y跟着x变
	- y=f(x)
	- y是关于x的函数
- f(x) = ax + b是函数公式

### 函数

- python中的函数(function)
- x是形式参数(formal parameter)
- 函数里面有一系列的计算公式
	- 5x + 6
- 计算之后有返回值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220813-1660384459432)


- 调用的时候
- 有给一个实际参数(actural arguement)
	- 7
- 把实参7赋给形参x
- 完成了参数赋值的过程
- 或者说把x=7代入公式
- 所以这门学问也叫代数(algebra)

### 西方数学缘起

- 西方代数学源自
	- 丢番图(Diophantus)
	- 公元前3世纪

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220813-1660387076557)
	
- 与研究几何的毕达哥拉斯等人不同
	- 他研究的是数学(arithmatic)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220813-1660386949292)

- 甚至墓碑上是一道数学题 

### 代数(algebra)

- 来自阿拉伯语 algebra
	- al, 定冠词
	- gebra 同 jabr, 接骨
	- 喻指计算
	- 阿拉伯数学家 Khwarizmi (780-850)的数学论文标题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220813-1660385890791)

- 意大利人将这个短语来了个掐头去尾
	- 把中间的词变化为 algebra
- 那代数这个概念是如何进入中文的呢？

### 中文 

- 中国古时候就有
	- 周髀算经
	- 九章算术
	- 庄子有些话有些数学极限的况味

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220814-1660445228172)

- 16世纪末
	- 利玛窦等欧洲传教士来华
	- 与徐光启等一起翻译《几何原本》前6卷

### 李善兰

- 清末浙江海宁人
- 不喜欢写八股文
- 在《九章算术》、《几何原本》前六卷上下功夫
- 新婚之夜观测星宿😱
	- (这种行为要慎重)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220814-1660445603622)

### 李善兰生平

- 李善兰与伟烈亚力翻译的第一部书
	- 是欧几里得《几何原本》后九卷
	- 几何原本全部翻译完成
- 还翻译了《代数学》13卷

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220814-1660446316156)

- 接受曾国藩李鸿章捐助
	- 翻译牛顿《自然哲学的数学原理》
	- 最后在京师同文馆(北大前身)讲授数学

### 函数概念

- 函数概念属于《代数学》的领域
- 这本书就是李善兰翻译的
- 英文原文是这样的
	- A function from a set X to a set Y is an assignment of an element of Y to each element of X. The set X is called the domain of the function and the set Y is called the codomain of the function. 
	- A function, its domain, and its codomain, are declared by the notation f: X→Y, and the value of a function f at an element x of X, denoted by f(x), is called the image of x under f, or the value of f applied to the argument x. 
- 我中学时候的翻译是这样的
	- 一个函数从集合X到集合Y，集合X中每一个给定的元素x，集合Y中都有唯一的值与x相对应。集合X叫做函数的定义域，Y叫做函数的值域。
	- 一个函数、定义域、值域，被描述为标记f: X→Y，对于定义域X中某一个给定的元素x，函数f在x元素的值是f(x)，叫做x在函数f下的映像，或者实参x应用了函数f之后的值
	- 其实那个时候就接触到了argument实参这个意象了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220814-1660447737836)

- 其中function这个词怎么来的呢？

### 函数词源

- function
	- 函数
	- 功能
	- 作用
	- 社交聚会

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220814-1660447880670)

- 1530年
	- 一个人的正当工作或目的
	- 以特定正当方式行事的力量
- 1692年
	- 莱布尼茨把函数这个词用于代数学
- 1947年
	- 计算机领域中开始有了function
	- 可以call一个function
	- 从汇编层面有了CALL这个指令
	- 计算机编程从此和函数高度相关

### 信函

- 我们经常说
	- 函数就像一个黑箱
	- 测试的时候可以用黑盒测试法
- 在形参的位置上接受实参
	- 运算后把返回值输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220814-1660450117565)

- 函数就像一个信函
	- 一个袋子把里面的功能都包住了 
- 怎么理解函字呢？

### 函

- 甲骨文
	- 像装有箭支的箭筒，箭筒上有系扣
- 金文
	- 将甲骨文字形中的箭支写成箭头朝下
- 造字本义
	- 名词，有系扣的箭筒
- 隶书严重变形
	- 筒状、矢形完全消失
	- 同时出现了与本义无关的“水”
- 篆文异体字含
	- 表示嘴里含着的肉食

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220814-1660450296789)

- 我们经常说包涵包涵
	- 就是有涵养

### 函谷

- 关中和中原必争的崤函之地
	- 函指的就是函谷关
	- 因关在谷中,深险如函而得名
	- 像信函一样的深谷

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220814-1660467927295)

- 一夫当关 万夫莫开
- 赤城霞起 紫气东来
- 这里传说石老子写下《道德经》的地方

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220814-1660470334770)

- 函说完了我们说说数

### 数

- 金文
	- （双手，表示体罚）（人，代表受罚者）（目，代表脸）（言，表示责骂）
	- 表示列举孩子的错误，并加以体罚、教训
	- 诅楚文（双手，体罚）（人，代表受罚者）（今，即“念”，念念有词）（女，妇人）（攴，持械打击）
	- 表示对犯有过错的妇女念念有词地责骂，进行体罚
	- 在男权占优势的社会，妇女是常常受罚的弱势群体
- 篆文
	- 列举过错，并加以惩罚
	- 搁今天谁敢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220814-1660470351487)

- 今天今天还有数落数落这种说法
	- 不过一般不是男性对女性进行的
	- 😭

### 函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660532470445)

- 函数这个翻译我觉得特别好
	- 因为函有信封的意思
	- 把封装(encapsulate)这个含义说清楚了
	- 感谢新婚之夜观星的李善兰老师
- 函数的作用是封装(encapsulation)
- 怎么理解呢？

### encapsulate

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660533065925)

- 早年来自于用弹壳封装弹药
- 后来也指胶囊

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660533148087)

- 总之就是封装就是
	- 装在一个容器后封起来
- 函数是怎么封装的呢？

### 函数封装

- 把好多东西封装成一个口袋
	- 一背就走

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660533324839)

- 把好多程序语句封装成一个函数
	- 一调用就得


### 总结

- 我们这次了解函数
	- 函是信函
	- 是可以把很多语句封装(encapsulate)起来的
	- 甚至可以嵌套使用函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220815-1660537877920)

- 函数可以自己嵌套调用自己么？🤔
- 我们下次再说👋