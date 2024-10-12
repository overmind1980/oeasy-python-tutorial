---
show: step
version: 1.0
enable_checker: true
---

# emoji表情符号

## 回忆上次内容

- unicode 里面有各种字体
  - 甚至还有`emoji`
  - `emoji` 本质上也是文字
  - 按照unicode的方式编码
  - 存储时按照utf-8的方式编码
  - 显示时按照系统定义的方式进行显示
- emoji这个东西怎么来的呢？🤔

### 来源

- Emoji
	- emoji = e (絵, 'picture') + moji (文字, 'character')

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672142323659)

- 1995年
	- 寻呼机（BB 机）在日本年轻人中使用
	- 12 × 12 点阵单色 
	- 日本电信运营商 NTT Docomo 在其 Pocket Bell 设备中加入了心形符号
	- 为信息添加了爱意
	- Docomo的市场份额 增长了到了近 40% 

### 波折

- 随后
	- 推出的新版 Pocket Bell 却放弃了心形符号
	- 支持汉字和拉丁字母
	- 构成 Docomo 核心用户群的青少年转而投向了竞争对手东京通讯

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672142551343)

- Docomo 才意识到青少年才是未来
	- 寻找新的表心意符号
	- Docomo 的栗田穣崇（Shigetaka Kurita）设计了第一套 Emoji
	- 在他们的 I-mode 系统上使用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672145984764)

### 北美字符集

- 欧美的一些字符集也开始有类似的呈现
	- 计算机显示器的字库也逐渐支持这些表情字体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672144010328)

- IBM 定制的 Code page 437 
	- 虽然还是12*12单色的形式
	- 这刚好一个字节
	- 不过会造成\t 、\n、\r的异常

### 表情文字

- 1997年
	- DP-211SW

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672148612656)

- 同种机型彼此可以通信
- 后续同运营商机型可以用表情文字通信

### 彩色表情

- 有了彩色显示屏之后 Docomo 退出了 彩色版的emoji 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672142484113)

- 176种emoji近日被美国纽约近代美术馆作为新藏品收录
	- emoji使得数码世界充满了人情味
	- 也创造了一种新的沟通方式
	- 现在emoji被全世界的人所使用
	- 其迷因正是来源于这组作品

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672148937507)

### 雅虎通

- 1999年雅虎通上线

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672145848104)

- 雅虎通从当时已经名声大噪
	- 由商业设计师哈维·鲍尔（Harvey Ball）
	- 1963年设计的伍斯特笑脸（Worcester Smiley）中汲取灵感
	- 黄豆粒表情
- 不同公司有不同的编码点位(Code point)
- 彼此之间不互通怎么办？

### unicode 统一emoji

- unicode 统一了 emoji 表情
	- 不同来源在不同时间进入了unicode中的不同位置
	- 可以试试遍历下列区间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672144844034)

- 虽然各个系统显示形态不同	
	- 但是彼此可以相互用同样的emoji交流了
- 我们去看看2763附近的emoji

### emoji

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672146446099)

- 彩色中文汉字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672146557029)

- 不过这里面还是有文化差异

### 文化差异

- 有些来自日本文化 
	- U+1F647 🙇 dogezaどげざ 土下座 认真道歉
	- U+1F530 🔰 新手司机 获得驾照的一年之内都需要标示在车上
	- U+1F4AE 💮 一碗白米饭 做的很棒 小红花印章
	- U+1F35C 🍜 拉面 
	- U+1F361 🍡 dango 
		- 三色团子 用糯米粉、🥛牛奶、红豆和🍵抹茶制作而成的
		- 和🍢（关东煮）外形有点类似
		- 常见于🎑日本的中秋节赏月
	- U+1F359 🍙 onigiri  饭团
	- U+1F35B 🍛 curry 咖喱饭
	- U+1F363 🍣 sushi 寿司.

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672145542055)

- 亚洲食物以日式为主
	- 中国只有饺子和月饼
	- 感觉豆汁、卤煮、羊肉泡馍、火锅也可以上榜
- 还有emoji些有争议
	- https://www.emojiall.com 
		- 这个网站的解释不错

### 争议

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672146614373)

- 不同的理解会造成不同的含义	
	- A(n)  emoji  says a thousand words
	- 新的巴别塔诞生了！
- 不过不妨碍写抽象话

### 抽象话转化器

- 本质上也是内码的转化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220512-1652368046658)

### 国情咨文

- 有的总统甚至用emoji写国情咨文

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672146950664)

- 也可以让ai用表情的方式进行回答

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230411-1681173194552)

- 这些表情可以转化为文字吗？

### 转化为有含义的字符
```
pip install emoji
```

- 安装类库之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240125-1706152462799)

- 可以将emoji转化为 可理解的字符
- 有网站可以进行筛选观察吗？🤔

### 转化网站

- https://www.webfx.com/tools/emoji-cheat-sheet/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240125-1706152581415)

### 逆向转化

```
import emoji

print(emoji.emojize(':grinning_face_with_big_eyes:'))
print(emoji.emojize('今天真的好开心啊:face_with_tears_of_joy::face_with_tears_of_joy:'))
```

- 也可以通过字符得到表情

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240125-1706152639413)

- 还有什么好玩的亚文化吗？
- 先去总结一下！

## 总结

- 这次了解了 emoji
	- 起源
	- 文化冲突
	- 抽象话
	- 字符转化
- 还有什么好玩的亚文化吗？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672141640111)

- 我们下次再说！👋
