---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次了解了border的词根

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2887762/uid1190679-20241008-1728356910076) 

- border用于各种网站的建设中

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2887762/uid1190679-20241008-1728357220853) 

- 1994年
	- ebay就是用border做的logo
	- 除了人类浏览之外
	- 新的个体也在浏览ebay
- 什么东西也在浏览ebay？

### 爬虫

- ebay 的网站上
	- 出现了大量的爬虫
	- 无休止地爬取新的商品信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726974363019)

### Bidder’s Edge 

- 有一个侵略者比其他人高出一筹
	- 自称为拍卖聚合商
	- 定期抓取 eBay的页面以提取其内容
	- 并将其与其他拍卖列表一起列出在自己的网站上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726974402428)

- Ebay限制对方ip
	- 但是新的代理ip
	- 防不胜防

### 诉讼

- 1999 年 12 月
	- eBay  对 Bidder’s Edge提起诉讼
	- 包括“一种被法律学者称为侵入动产的古老侵入理论
	- Bidder's Edge trespassing their servers
	- trespass 来自中世纪
	- 因为法律这方面还没有规定

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726975181405)

- 怀特法官裁定
	- 构成了非法侵入
	- 颁布了一项禁令
	- 阻止 Bidder’s Edge 在 eBay 上爬行

### 自然语言

- 雅虎和谷歌的创始人和初始员工
	- 都来自于斯坦福 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726984778112)

- 计算机科学 和 符号系统
	- 影响深远

### google

- 为谷歌作传的Levy说
	- 谷歌是实现人工智能增强人类梦想的工具

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726985084067)

> vehicle to realize the dream of artificial intelligence in augmenting humanity

### 模式之变

- 这是两种不同的检索方式
	- yahoo用的是目录
	- 树型结构
	- 精确的人类整理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726985376306)

- google用的是搜索
	- 根据你的搜索关键词 
	- 分析你的需求
	- 找到合适的页面
	- 完全的机器操作

### 早年间的收录

- 最早新网站的收录
	- 靠的是mosaic的页面
	- 全靠人力整理记录
- 若要 Mosaic 的收录
	- 需要向 Mosaic NCSA 写信

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726991932859)

- 很快
	- 人就跟不上
	- internet爆发的速度了

### 早期爬虫

- 1993夏天
	- Matthew Gray(与蜘蛛侠演员同名)爬了130个
	- 一年后 爬了3,000

- 1995
	- 数量上升到30,000

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726990240815)

- 这种新型的东西被叫做
	- 蜘蛛 spiders
	- 爬行者 crawlers
	- 漫游者 wanderers
	- 蠕虫 worms

### 爬取过程

- 一般是先找到
	- index.html 或者 sitemap.xml 等关键位置
	- 然后从中心向四周
	- 逐一爬取链接中的链接入库
	- 已经入库的叶子页面 短期内不再爬去
	- 根据主页的更新频率 爬取主页和新页面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1726990600203)

- 爬虫是搜索引擎的前提
	- 但是只有爬虫是不够的

### 首个搜索引擎

- Jonathon 意识到 Mosaic 的 What's New 
	- 无法追踪变动
	- 决定写个程序辅助查看
	- 正是世界上网络爬虫
	- JumpStation

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1727013273760)

- 十天之后
	- 1993 年的 12 月 21 日
	- JumpStation 完成了它的人物
	- 收录 25000 页面

### 提供搜索

-  1994 年 6 月
	-  JumpStation 索引 27.5w

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1727013633743)

- 磁盘空间有限
	- 只能退而求其次
	- 只索引标题和元数据
	- TDK

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240922-1727013547584)

-  1994 年中
	- 网上人人知道JumpStation
	- 但是 Jonathon主业是维护实验室
	- 学校对于服务器没有提供资金
	- 日本又有一个很好的offer
	- JumpStation逐渐消散
- 1998年
	- Google出现
	- 中间还有一个Crawler

### web Crawler

- 1994年四月
	- 华盛顿大学出现了全文搜索的引擎
- 当年11月
	- 请求数量达到百万
- 1995年
	- 收录网页书达到百万

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240923-1727052991586)

- 后来被aol收购

### altavista

- 收录百万网页
	- 本来是为了展示DEC的多线程能力
	- 结果被证明特别适合做爬虫

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240923-1727053966274)

### Excite.com

- 和雅虎一样
	- 来自斯坦福
	- 也有分类目录
	- 也有搜索引擎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240923-1727053832488)

- 纽约时报称之为超级蜘蛛
	- 而且是蜘蛛的母巢
	- brood of spiders
	- 不断爬取 
	- 持续更新

### 变化

- 1995年
	- 网景公司的net directory 
	- 从yahoo换成了 excite

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240912-1726111900480)

- yahoo会衰落吗？

### 总结 🤔
- 这次我们研究了
	- 爬虫的起源
	- 早期搜索引擎
	- 搜索引擎 驱逐 雅虎目录
- 雅虎公司会衰落吗？
- 互联网会如何发展呢？🤔
- 我们下次再说！👋