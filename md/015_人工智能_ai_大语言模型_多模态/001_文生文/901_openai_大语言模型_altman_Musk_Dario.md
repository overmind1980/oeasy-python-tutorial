---
show: step
version: 1.0
enable_checker: true
---

#   openai_大语言模型_altman_Musk_Dario 

## 回忆

- 上次 我们 完成了 默认模版
- 默认模版的问题 
	- 就是 发送给大模型的 文本 是固定的
	- 你好 是写在py程序里的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260428-1777353918560) 

- 之前 只能和大模型说 

> 你好！

- 接下来 我想做一个卡通ip 
	- 实时交互 就需要自己输入问题 
- 如何实现呢？？🤔

### input

- 这次实时修改

```
'content': input("问题:")
```

- 使用input输入信息

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = "ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbbaa" # ModelScope Token
)

response = client.chat.completions.create(
    model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
    messages=[
        {
            'role': 'system',
            'content': 'You are a helpful assistant.'
        },
        {
            'role': 'user',
            'content': input("问题:")
        }
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content, end='', flush=True)
```

### 自由聊天

- 发给 大模型的 是

```
你是什么动物？
```

- 结论明确

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260428-1777354006080) 

```
import openai
```

- 这里 用到的 模块	
	- openai 是怎么来的呢？🤔

### 开始

- 2015年 
	- 马斯克 在硅谷居无定所
	- 老去 谷歌老板 佩奇家住沙发
	- 俩人聊ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260515-1778823072348) 

- ai在2015年
	- 发展到啥程度了呢？

### 深度学习革命

- 背景时间线

| 年份 | 标志性事件 | 核心人物 | 核心意义 |
| ---- | ---- | ---- | ---- |
| 1986 | 反向传播算法正式普及 | Rumelhart<br>Hinton| 解决多层网络训练难题<br>打下深度学习核心理论基础 |
| 1998 | LeNet-5 卷积网络提出 | LeCun | 首个实用CNN<br>落地手写数字识别，视觉网络雏形出现 |
| 2006 | 深度信念网络(DBN)　<br>逐层预训练方案提出 | Geoffrey Hinton | 破解深层网络梯度消失难题<br>重启全球深度学习研究热潮 |
| 2009 | ImageNet 　<br>大型视觉数据集发布 | 李飞飞团队 | 提供海量标注数据<br>为大模型训练搭建数据底座 |
| 2012 | AlexNet 夺得ILSVRC竞赛冠军 | Krizhevsky<br>Sutskever<br> Hinton | CNN碾压传统算法<br>GPU算力普及　<br>深度学习正式进入工业时代 |
| 2014 | VGG、GoogLeNet 相继发布 | 牛津团队<br>谷歌团队 | 卷积网络结构优化<br>轻量化与深度探索走向成熟 |
| 2015 | ResNet 残差网络诞生 | 何恺明团队 | 解决网络退化问题<br>模型深度突破百层　<br>精度逼近人类 |

- 当时ai的基础是啥呢？

### 底座

- 深度学习 支撑要素
	- 已经到位

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260525-1779717112108) 

- 但是 马斯克 和 佩奇 观点不同

### 分歧


- 马斯克 担忧 AI 毁灭人类
- 佩奇认为人类应与 AI 融合
	- 甚至称马斯克是 “物种主义者”

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260526-1779747478073) 

- 拉里佩奇 开始行动

### 谷歌投资

- 英国公司 Deepmind
	- 在 深度学习领域 深入扎根
	- 引来 大公司争抢

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777470041196) 

- 2014年 
	- 谷歌 5亿美金
	- 收购deepmind

> 拉里・佩奇（Larry Page）判断

>> AI 是下一个操作系统级别的基础设施

>> 谁先掌握 AGI

>> 谁就统治未来科技。

### openai成立

- 欧洲的人才 被 谷歌 一网打尽
	- 美国本土的人才向往 Deepmind
	- 势必 会造成垄断

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777468631470) 

- 恐慌 给了 
	- 在硅谷的 深度学习人
	- 很大动力

### openai成立

- 2015年
	- 没有任何商业计划书
	- openai成立
		- https://openai.com/index/introducing-openai/
		- 公益组织

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260515-1778823542912) 

- 在 格雷格 租的房子
	- 170平米

> “OpenAI is a non-profit artificial intelligence research company. Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return.”

### 开始营业

- OpenAI 是非营利 AI 研究公司
	- 目标是
		- 让 AI 造福全人类
		- 不受盈利需求约束

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20260515-1778851802092)

- 初始承诺（非常理想主义）：
	- 开源所有研究成果
	- 透明、开放、对抗垄断
	- 如果别家做出更安全的 AGI
		- OpenAI **会停止竞争，转而去帮对方**

### 风云际会

- 老黄送显卡
	- 第一台DGX-1

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777470931434) 

- 写贺词

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777470991018) 

- 马斯克
	- 感谢

### 深度学习爆发

- deepmind果然崛起了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777471111610) 

- AlphaGo 战胜 李世石

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777471177300) 

### 自己博弈

- AlphaZero 战胜 AlphaGo

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777471483097)

|对比项|AlphaGo|AlphaZero|专业术语对比|
|----|----|----|----|
|学习方式|先看人类高手下棋<br>再自己练|只懂规则<br>自行对弈练习|监督强化学习<br>vs<br>纯自博弈强化学习|
|学习资料|使用大量人类现成棋谱数据|不依靠任何人类数据<br>纯自学|人类标注数据集<br>vs<br>无先验自生成数据|
|网络结构|双网络分工运行|单网络统一处理|双网络架构<br>vs<br>一体化单网络|
|特征处理|人工整理棋局特征|直接读取原始棋盘信息|人工特征工程<br>vs<br>端到端自主特征学习|
|适用范围|仅专攻围棋|精通多种棋类|专用任务模型<br>vs<br>通用博弈模型|
|训练速度|训练耗时久|短时间达到顶尖实力|慢速迭代训练<br>vs<br>高速收敛训练|
|行棋风格|贴近人类下棋思路|自主创新下棋思路|经验依赖策略<br>vs<br>无偏见最优策略|
|实战实力|击败人类顶尖棋手|完胜所有版本AlphaGo|人类顶尖水准<br>vs<br>跨代碾压水准|

### 算力恐慌

- 训练需要算力
	- 算力需要电力
	- 大量的电力 
	- 需要大量费用

> As we get closer to building powerful AI, it becomes reasonable to be less open. Openness means everyone benefits, not that we have to share all science.

>> Ilya

- 越接近强 AI
	- **越不能开放**
	- 开放是让大家受益
	- 不是把所有科研成果白送

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777471631351) 

- 2016–2017
	- 算力慌
	- 理想开始动摇
	- 开始 从 Open 走向 Close

### 算力爆炸

- 2017
	- 钱不够了
	- 团队测算：
	- 要做真正的 AGI
		- 需要 **几十亿美元算力**
		- 非营利根本扛不住

> “Nonprofit is certain failure. We need billions per year immediately or forget it.”

> （非营利注定失败。每年必须烧几十亿，不然别干了。）

- 内部讨论
	- **要不要改成营利公司？**

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777472464978) 

- Mask 拒绝了

### 日记

-  格雷格·布罗克曼 
	-  私密日记

|时间|英文原文|中文翻译|核心思想|
|----|----|----|----|
|2017.09|This is the only chance we have to get out from Elon.|这是我们摆脱埃隆的唯一机会。|趁机脱离马斯克管控|
|2017.09|Financially, what will take me to $1B?|怎样才能赚到十亿美元？|谋求高额个人财富|
|2017.11|We’ve been thinking that maybe we should just flip to a for profit.|我们打算直接转为盈利性质。|打算放弃非营利初心|
|2017.11|Making the money for us sounds great and all.|自主赚钱对我们来说极具吸引力。|一心走向商业盈利|
|2017.11|It’d be wrong to steal the non-profit from him.|从他手中夺走非营利机构是错误的。|内心知晓做法不对|
|2017.11|That’d be pretty morally bankrupt.|这种行为属于彻底丧失道德。|清楚自身违背道义|
|2017.11|And he’s really not an idiot.|埃隆本身一点都不愚笨。|知道马斯克心思敏锐|
|2017.11|Musk’s story will correctly be that we weren’t honest with him.|马斯克的指责其实有理，我们对他并不坦诚。|承认刻意隐瞒实情|
|2017.11|still wanting to do the for profit just without him.|只想做盈利业务，却刻意抛开他。|刻意排挤初代创始人|
|2017.11.06|Conclusion is we truly want the for-profit B-Corp.|内部最终确定发展方向。|团队统一发展思路|
|2017.11.06|全力打造盈利型共益企业。|正式全面转向商业化运营。|彻底偏离最初公益使命|

- 他不知道 
	- 这些日记 以后成了 
	- 法庭上的 证据

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260518-1779070173663) 

### 决裂

- 2017
	- Musk 提出：

> 他要 **多数股权 + 绝对控制权 + 当 CEO**

- 理由：他能调动特斯拉算力，能更快做出安全 AGI
	- Sam、Greg、Ilya、Dario **集体拒绝**

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260430-1777511405058) 

- 2018-02
	- Elon 辞职


### 私下对话

> “Elon Musk has resigned from his role as co-chair of OpenAI’s board. He will remain a donor and supporter.”

- **私下真实对话（后来被公开）**

> Elon：“You’re moving too slow, you’ll get killed by Google.”（你们太慢，会被谷歌干死）

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5239534/uid1190679-20260526-1779755405724) 

> Sam：“We disagree on governance and speed.”（我们在治理和速度上分歧太大）

### 总结

- 这次我们 了解了 
	- OpenAI的起源
- 深度学习 
	- 逐渐发力
	- 必是 未来趋势

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260526-1779754851638) 

- Elon Musk 
	- 担心 谷歌一家独大
	- 建立OpenAI 公益组织
- 但训练需要 算力 
	- 需要钱
	- 公益组织 如何 持续发展
- 内部人心思变
	- 事情会如何发展？🤔
- 下次再说👋



