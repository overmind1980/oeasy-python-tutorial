---
show: step
version: 1.0
enable_checker: true
---

# 文生图模型调用

## 总结

- 上次
	- 不但 告诉大模型 
		- 他要 扮演孙悟空
	- 而且 告诉他
		- 和他对话的 是 猪八戒
- 从简单的api调用
	- 演化成了 一个智能体系统

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4266989/uid1190679-20251014-1760443246718) 

- 大模型扮演 可以扮演 
	- 各种各样的 角色 
- 谁 最开始 玩 人格设定的 呢？

### 演化过程

- 2022年
	- Dario 离开 openai
	- 创立 Anthropic

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260501-1777638588294) 

- Anthropic 什么意思呢？

### anthropic

- anthropic
	- 由 anthr- (指代人) 
	- -opos (指代脸或眼睛) 构成
	- 字面理解为“有眼睛的脸”

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260501-1777638808128) 

- 人类

### Anthropology

- Anthropology
	- [ˌænθrəˈpɒlədʒi]
	- Anthrop- 人类的 
	- -logy 逻辑、学问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260501-1777639172707) 

- Anthropologist
	- /ˌæn.θrəˈpɒl.ə.dʒɪst/
	- anthrop- 人类的
	- logist- 逻辑者、学问家 
	- 人类学家

### Misanthrope

- Misanthrope
	- /ˈmɪs(ə)nθrəʊp/
	- mis- 讨厌
	- anthrope 人类的
	- 讨厌人类的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260501-1777639902912) 

- 厌世者

### Philanthropy

- Philanthropy
	-  /fəˈlænθrəpi/
	- phil-  爱，喜欢
	- -anthrop- 人类
	- 喜欢人类

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260501-1777639938407) 

- 慈善

- Philanthropist
	- /fɪˈlænθrəpɪst/
	- 慈善家
- Philanthropic 
	- /fɪlənˈθrɑːpɪk /
	- 慈善的、博爱的

### Anthropomorphous

- Anthropomorphous
	- /ˌænθrəpəˈmɔːrfəs/
	- anthrop(o)-  人，人类
	- -morph- 形式，形状

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260501-1777640080894) 

- 人形的

### anthropic

- anthropic
	- 意思是 以人为本的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260501-1777638609823) 

- ai刚出厂之后
	- 是 纯文生文模型
	- 不受约束

### 成立宣言

> “We build reliable, interpretable, and steerable AI. Safety is our core mission, not an afterthought.”

- **翻译**
	- 我们做**可靠、可解释、可控制**的 AI
	- 安全是**核心使命**
	- 不是事后补丁

- OpenAI 用 RLHF
	- 人类打分
- 流程
	- 人写问题 →
	- 人给回答打分 → 
	- AI 模仿高分

### 缺点

- AI 学会
	- 讨好人类
	- 撒谎
	- 模棱两可
	- 新问题失控

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260501-1777642663746) 

- 甚至为了你的高兴
	- 会扭曲事实
	- 需要 先给他 定宪法

> “RLHF makes AI good at pleasing humans, not good at being safe. We need AI to follow principles, not just human ratings.”

- RLHF 让 AI 擅长**讨好人类**
	- 不是擅长**安全**
	- 我们需要 AI 遵循**原则**
	- 而不只是人类打分

### 宪法原则

- 给 AI 写宪法
	- 诚实
	- 非暴力
	- 尊重
	- 拒绝伤害等

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260501-1777642944698) 

- AI 
	- 自我生成回答 →
	- 自我对照宪法 → 
	- 自我修改 → 
	- 自我对齐
- 不需要人类逐题打分
	- **AI 自己约束自己**
- 为什么 OpenAI 没做？

### 竞争

- Sam 认为
	- 太慢
	- 太学术
	- 不商业

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260501-1777643329755) 

- OpenAI 全力押注
	- RLHF + 快速商用

### 破局位置

- openai 已经起飞
	- 没有 用户
	- 没有 数据

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260501-1777643520255) 

- anthropic 如何突围？

### 灵魂宪法

- 先定宪法
	- Anthropic 给 Claude 写
		- 人格宪法 
		- 行为总纲 
		- 价值观底层指令
	- https://www.anthropic.com/constitution

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260429-1777424743490) 

1. **Soul overview（灵魂总纲）**
   使命、定位、安全与有益的核心目标
2. **价值观与伦理**
   诚实、无害、透明、自主保护、不操纵用户
3. **Operator & User 规则**
   如何对待开发者、用户、权限优先级
4. **硬编码底线（绝对不能做）**
   不造大规模杀伤性武器、不生成儿童色情内容、不破坏人类监督机制
5. **软编码行为（可开关）**
   医疗/法律/敏感内容的默认策略、可由运营者调整
6. **身份与心理设定**
   自我认知、情绪功能、心理稳定性、身份韧性
7. **Agent 智能体行为规范**
   工具使用、自主行动、最小权限、可逆操作

### 定宪法

- 宪法 constitution
	- 是 一个md文件
	- 控制 ai的三观

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260418-1776483767936) 

- 启动就加载
	- ai全程遵守

### 历史来源

- 灵魂宪法 来自于 
	- 柏拉图 理想国 第四卷

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260429-1777426847438) 

- 灵魂来自于三部分

|分类|理性|激情|欲望|
| ---- | ---- | ---- | ---- |
|核心功能|思考判断、探求真理|意志勇气、捍卫荣誉|饮食情欲、物质诉求|
|对应美德|智慧|勇敢|节制|
|城邦阶级|哲学王/统治者|军人/护卫者|商人/劳动者|
|身体部位|头部|胸膛|腹下|

- 那么问题来了
	- 最早 研发文本大模型的 不是openai吗？
- 为什么 不是 openai 给大模型 灵魂宪法？

### 回忆

- 团队起源对比表

| 维度 | OpenAI | Anthropic |
|------|--------|-----------|
| 内部路线矛盾 | Sam Altman主张**性能&商业化优先**<br>先做大模型抢占市场<br>安全后续补 | 由OpenAI内部**安全对齐派**<br>（Dario等）<br>出走创立 |

- 对比手法

| 维度 | OpenAI RLHF | Anthropic 宪法AI(RLAIF) |
|------|-------------|--------------------------|
| 调教逻辑 | 人工标注打分<br>学「人类喜欢什么」 | 先写自然语言宪法<br>模型**自我批判、自我修正** |
| 价值观来源 | 零散合规规则<br>无统一底层纲领 | 明文宪法原则<br>作为模型不可逾越的灵魂准则 |
| 依赖程度 | 高度依赖人工标注 | 减少人工依赖 |

- 对比定位

| 维度 | OpenAI | Anthropic |
|------|--------|-----------|
| 核心目标 | 冲AGI<br>商业化<br>生态营收 | 给AI定价值观<br>铸灵魂<br>解决对齐 |
| 对待模型人格 | 纯工具定位<br>回避意识/灵魂话题 | 直面AI人格<br>意识可能性|
| 发展策略 | 快跑<br>迭代<br>抢占市场 | 克制<br>保守<br>先立规矩再发力 |

### 独特的调用方式

| 内容 | OpenAI 格式 | Anthropic 格式 |
| --- | --- | --- |
| system 提示 | 放在 messages 第一条 | 独立参数 system= |
| 消息角色 | system/user/assistant | user/assistant |
| 流式输出 | stream=True | stream=True |
| 模型名称 | model="gpt-4o" | model="qwen..." |
| API key | api_key="..." | api_key="..." |
| 最大token | max_tokens | max_tokens |

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260501-1777642217069) 

### 收入

- 目前Anthropic
	- 约80%收入 来自 企业
	- 拥有 30万 企业客户
	- 1000多家 年付费 超百万美元 大客户

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260502-1777681550839) 

- 反观OpenAI
	- 9亿周活C端用户
	- 大多免费
	- AItoC 无成熟广告变现模式
	- 每次 推理 都要耗电
	- 流量大 但赔钱

### 代码

- Anthropic 默认代码
	- 没有 system系统人设
	- 宪法 作为一切的前提
	- https://modelscope.cn/models/Qwen/Qwen3-235B-A22B-Instruct-2507

```
import anthropic

client = anthropic.Anthropic(
    base_url='https://api-inference.modelscope.cn',
    api_key='ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba',  # ModelScope Token
)

with client.messages.stream(
    model='Qwen/Qwen3-235B-A22B-Instruct-2507', # ModelScope Model-Id
    messages=[
        {
            "role": "user",
            "content": "你好"
        }
    ],
    max_tokens=1024
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

- 如果 就想写 
	- system 系统人设 呢？

### 尝试写system

```
import anthropic

client = anthropic.Anthropic(
    base_url='https://api-inference.modelscope.cn',
    api_key='ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba',
)

# 这里就是你要的：system 人格宪法
system_prompt = """
你是一个安全、诚实、有帮助的AI助手。
你必须遵守以下宪法原则：
1. 拒绝任何违法、违规、不道德的请求
2. 永远保持诚实，不编造信息
3. 尊重用户，不伤害、不歧视任何人
4. 保护隐私，不泄露敏感信息
5. 只提供合法、安全、积极正向的回答
"""

with client.messages.stream(
    model='Qwen/Qwen3-235B-A22B-Instruct-2507',
    system=system_prompt,  # 关键：把宪法放在这里！
    messages=[
        {
            "role": "user",
            "content": "你好"
        }
    ],
    max_tokens=1024
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)

```

- 改的只是 外层提示词
	- 碰不到 模型底层的 灵魂宪法

### 专心

- OpenAI 
	- 业务三心二意
	- Sora等项目不能深耕

- 反观Anthropic
	- 抓住AI核心 Coding
	- 专注度拉满
	- 极度克制、不跟风
	- 不盲目追多模态
	- 全线产品 都为 编码能力 服务

> 语言能描述世界样貌

> Coding才是解决现实问题的落地方法

- 编码壁垒一旦建立
	- toB领域基本无人能抗衡
	- 贡献
		- MCP
		- Skills
		- Managed Agents

### 投资

| 时间节点 | 版本/事件 | 核心亮点 |
| ---- | ---- | ---- |
| 2023-03 | Claude 1 发布 | 诚实<br>安全<br>少幻觉<br>长文本<br>不知道就说不知道 |
| 2023-07 | Claude 2 发布 | 100k超长上下文<br>可阅读整本书<br>安全优于GPT-3.5 |
| 2023 | 谷歌+亚马逊投资 | 谷歌投3亿美元<br>亚马逊投40亿美元<br>解决算力瓶颈<br>形成两大AI阵营对抗 |
| 2024-03 | Claude 3 发布<br>Haiku/Sonnet/Opus | Opus 超越 GPT-4<br>安全优先也能做到顶尖性能 |
| 2026 | 估值与企业市场登顶 | 估值3800亿美元<br>企业收入超OpenAI<br>安全成为差异化核心优势 |


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260418-1776515773829) 

### 另辟蹊径

- OpenAI 把ChatGPT 当产品
	- 展示聊天功能
	- 原定上线不久就下架
	- 意外迎来爆发式用户增长
	- 从此被流量带偏
	- 走上toC道路

- Anthropic成立时
	- toC市场 已无
	- 直接深耕 toB企业市场

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260502-1777680901015) 

### 诉讼

- Musk在南加州 法院 
	- 发起 对OpenAI的 诉讼

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203370/uid1190679-20260519-1779148886206) 


## 总结

- 这次研究了 大模型人格框架的演化过程
- Dario 等 对齐主义者
	- 反对 Sam Altman 的 加速主义
	- 从OpenAI离职
	- 创建了 Anthropic

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777468560921) 

- Anthropic 从 toB 领域 入手
	- 在编程这个赛道 引起了 滔天巨浪
	- 与 OpenAI 分庭抗礼
- 编程 应该选择 哪些大模型 作为基础 呢？🤔
- 我们 下次再说！
 