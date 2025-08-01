---
show: step
version: 1.0
enable_checker: true
---

# unicode

## 回忆上次内容

- 字符集
	- 从博多码
	- 到 `ascii` 
	- 再到 `iso-8859`系列
	- 各自割据
- 正如英语中
	- 不同数词来自于
	- 不同的 词源 语言

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230608-1686189273068)

- 世界上这么多语言
	- 真的可以统一吗？？

### 基础字符

- ascii 还是 
	- 牢牢占据着 0-127
	- 这打头的最关键位置
- 紧挨着 ascii 字符的
	- 就是 Latin-1
	- 由 iso-8859-1 
	- 西欧、北欧字符集进化而来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210228-1614486021235)

- 这其实也 
	- 标识出unicode的 
	- 编码排序规则
	- 以书写系统为单位 
	- 分类和收录

### 各种拼音文字

- 比如 卢恩字符
	- 都有 收录
	- 维京人 曾用的 字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230101-1672566676009)

- 再去捋一捋
	- 拉丁字符进化过程吧

### 拉丁字符进化史

|  发音 | 词义 | 埃及圣书体 | 楔形写法 | 希腊字符 | 拉丁字符 |
|---|---|---|---|---|---|
|  alpha | 牛 | 𓃾 | 𐤀 | Αα | Aa | 
| beta | 房子 | 𓉐 | 𐤁 | Ββ | Bb |
| gīml | 棍子 | 𓌙 | 𐤂 |  	Γγ   |	Cc,Gg |
| dālet | 门或者鱼 | 𓉿  | 𐤃‎ | Δδ  | Dd |

- 去看看他们的序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230102-1672669238226)

- 希腊字符比较好找
	- 序号较小
- 不过希腊字符之前只有大写字母
	- 小写字母怎么来的呢？

### 小写字母

- Captain 方方正正

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230102-1672669748090)

- 手写体 柔软

### 印刷字体 

- 手写画风 固定下来后
	- 又被印刷术 再次固定

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230102-1672669781153)

- 能找到 埃及文字的序号 吗？

### 埃及文字

- unicode 确实 
	- 给埃及文字排了序号
	- 但是序号很大
	- 而且目前终端 还没有字型支持

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230102-1672669173026)

- 字型文件 实现难度不小
	- 实际需求 也不确定

- 同为 拼音文字的不同书写系统
	- 可能会用到 长得一样的字符
	- 会是一个序号吗？

### 书写系统

- 英文字母、拉丁字母、西里尔文字母
	- 都源自希腊文字母 Omicron
- 不同的书写系统
	- 可能会长相一样的字母
	- 但对应着不同的序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221012-1665541895851)

- 虽然字形一模一样
	- 但是属于三个书写系统
		- 英文字母
		- 希腊文字母
		- 西里尔字母
	- 所以 有不同的序号
- 在 人工智能 的 分词结果(token)中
	- Oeasy可能 有三个 不同的token 
	- 看起来一样
- 在 社交媒体 的 热搜 中
	- 也 可能发生 类似的 bug

### 持续进化

- unicode版本 在持续演进
  - 整个编码区域 分成 若干blocks

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210228-1614482179744)

- 新版本 
	- 对于这些 blocks 里面的字符
    - 有所增加

### 十二星座

- 除了字符之外 还有很多符号
	- 比如十二个星座

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220706-1657077784482)

- 集装箱 标准化一旦开始
	- 就会 反过来 约束火车轮船飞机
- 你要想 加入这个交流的行列
	- 必须先了解相应的接口
	- 从遵守现有的规则开始

### unicode时代

- 新编码unicode的时代 来了
	- 把一切字符 吸收进去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676460489506)

- 同一个文档
	- 可以既有中文
	- 又有日文
	- 还有韩文
	- 还有阿拉伯语
- 所有字符 
	- 使用 同一种 编码 
	- 都能正常显示

### 阴阳太极

- 易有太极
	- ️☯

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210228-1614482724842)

- 是生两仪
	- ⚊ 陽 (U+268A) 
	- ⚋ 陰 (U+268B)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220507-1651913117031)

- 两仪生四象
	- ⚌(太陽,U+268C)
	- ⚍(少陰,U+268D)
	- ⚎(少陽,U+268E)
	- ⚏(太陰,U+268F)

### 八卦

- 四象生八卦
	- ☰ ☱ ☲ ☳ ☴ ☵ ☶ ☷

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220507-1651912743635)

- 如果把
	- ⚊ 陽 (U+268A)当做1
	- ⚋ 陰 (U+268B)当做0
- 顺序是逆序(递减)
- 从外而内
	- 天
	- 泽
	- 水
	- 雷
	- 风
	- 火
	- 山
	- 地

- 八卦有了
	- 可以重卦么？

### 重卦

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220507-1651913261981)

- 八八六十四卦

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644564209397)

- 看起来都可以玩算卦了
- 还能做什么呢？

### 乱来

- 来随便试一个

```python
print("\u9999")
```

- 看看这是什么字？

### 中日韩字符

- 中文编码原来是 gbk

- unicode 现在unicode把中日韩(CJK)当成一组
	- 排序是CJK
	- 位置是unicode.org下方的code chart中找到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220710-1657448172896)

- 当然关于排序 
	- 各国有各国的排法

### 排名
- 中国是中日韩
- 日本是日中韩
- 韩国是韩中日

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/92414/uid1190679-20250222-1740192875363) 

- unicode组织的CJK
	- 显然综合了
	- 东亚文化圈的自排名
	- 仿佛听到 卡吉玛 🤣

### 所在位置

- 象形文字数量
	- 确实是拼音文字
	- 没有办法比的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220710-1657448246051)

- 他们听到
	- 我们有两万个字母的时候
	- 都傻了😧

### 融合而来

- unicode中的文字将
	- 中国汉字
	- 朝鲜汉字
	- 日本汉字
	- 综合起来
	- 得到一个汉字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221012-1665543002765)

- 那如果
	- 有很多 异体字 怎么办？

### 回字的几种写法

- 这些都是异体字
- 或者叫做通假字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221112-1668213852027)

- 在计算机里是如何的呢？

### 茴香豆

- 在0x4e00到0x9fff这个范围内

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221112-1668213947444)

- 基本一个汉字就只有一种写法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221112-1668213889472)

## 总结

- unicode字符集
	- 将世界 所有字符 进行编码
	- 统一了编码世界

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220507-1651913535341)

- 所有汉字里面
	- 第一个汉字
	- 是什么呢？
- 我们下次再说！👋

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220507-1651928336667)

