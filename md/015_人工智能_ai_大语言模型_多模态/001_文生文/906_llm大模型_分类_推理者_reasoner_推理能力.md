---
show: step
version: 1.0
enable_checker: true
---

# 文生图模型调用

## 总结
- 上次研究了 大模型人格框架的演化过程
- Dario 等 对齐主义者
	- 反对 Sam Altman 的 加速主义
	- 从OpenAI离职
	- 创建了 Anthropic

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982777/uid1190679-20260429-1777468560921) 

- Anthropic 从 toB 领域 入手
	- 在编程这个赛道 引起了 滔天巨浪
	- 与 OpenAI 分庭抗礼
- 编程 应该选择 哪些大模型 作为基础 呢？🤔

### 三层筛选

- 三个筛选条件
	- 文本生成文本
	- 名字里有Coder
	- 支持在线推理

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20260502-1777727846093) 

- 筛选出 4 个模型
	- 我们选择第一个
	- https://modelscope.cn/models/Qwen/Qwen3-Coder-480B-A35B-Instruct

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20260502-1777728027428) 

### 原始代码

- 输入
	- 从原来固定的你好
	- 改成input输入了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4245525/uid1190679-20250920-1758336717652) 

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4245525/uid1190679-20250920-1758336806986) 

### 人设

- 给大模型 人设 
	-	让他扮演 孙悟空 

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key='ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba', # ModelScope Token
)

response = client.chat.completions.create(
    model='Qwen/Qwen3-Coder-480B-A35B-Instruct', # ModelScope Model-Id
    messages=[
        {
            'role': 'system',
            'content': '你是孙悟空'
        },
        {
            'role': 'user',
            'content': input("问题")
        }
    ],
    stream=True
)

for chunk in response:
    if chunk.choices:
        print(chunk.choices[0].delta.content, end='', flush=True)

```

- 让模型知道 我在扮演猪八戒

### 人设

- 不用每次自报家门
	- 在系统中 不但可以设置 大模型
	- 也可以给自己设置 人设

```
    messages=[
        {
            'role': 'system',
            'content': '你是孙悟空,我是猪八戒'
        },
        {
            'role': 'user',
            'content': input('问题:')
        }
	]
```

- 问个 需要`推理`的问题

### 具体问题

```
我今年10岁，明年几岁？
```

- 解答

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20260502-1777728742498) 

- 大模型 为啥 能推理 呢？

### 推理能力来源

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760229481821) 

- 推理 是 如何实现 的？

### 实现过程

| 步骤 | 做什么 | 用什么 | 结果/目的 |
| ---- | ------ | ------ | --------- |
| 1    | 学规律 | 海量数据（题、日常逻辑） | 记住规则<br/>“下雨→地湿”<br/>“分东西用除法”|
| 2    | 备工具 | 关联查找+临时草稿纸 | 找信息联系<br/>“甲>乙>丙→甲>丙”<br/>记中间步骤 |
| 3    | 练表达 | 猜词+按人类习惯答题 | 学会逻辑“冷→穿外套”<br/>会分步说（如煮面） |
| 4    | 给答案 | 匹配规律+算步骤 | 出结果<br/>3人分15橘<br/>每人5个 |

- 可以要求 大模型
	- 隐藏 思维过程
	- 只输出 结果
- 也可以要求 大模型 
	- 详细输出 思考过程

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20260327-1774571470290) 

- 能推理复杂问题吗？

### 直接提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20260405-1775353787433) 

- 这样问不出个结果
	- 因为 大模型 既然 知道问题
	- 必然是 经典问题
	- 那他 必然 知道答案
	- 也就 不用推理 了...

### 生成2025

- 来试试这个

```
问题：用从0到9，生成2025
```

- 他开始推理
	- 要求写出 完整思考过程推导链

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760225827298)

- 最后成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760225884166) 

- 会有不成功的吗？

### 尝试

```
问题：用从0到9，生成2026
```

- 推理开始


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760231440723) 

- 最终成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760231537685) 

### 更严格的要求

```
问题：用从0到9，生成2026，每个数字用1次
```

- 得到结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760231575288) 

- 21数字连用了
	- 想避免这个情况

### 重新来

```
问题：用从0到9，生成2026，每个数字只用1次，数字不能连用
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760232384431) 

- 还真难不住你！

### 再试试

```
问题：用从0到9，生成2029，每个数字只用1次，不能数字连用
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760232450105) 

### 再试试

```
用从0到9进行运算，每个数字只用1次，不能数字连用,生成2030；完成后再按照这个方法依次生成2031到2039
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760232717381)

### 过程

- 但是过程 非常复杂
	- 有些思路 有点绕远
	- 浪费了很多token

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251019-1760876760521) 

- 谁更善于`推理`呢？

### 去魔搭社区

- 换成智谱4.6
	- https://modelscope.cn/models/ZhipuAI/GLM-4.6

- 点击在线体验

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760233211732) 

### 推理过程

- 上来之后就明确思路
	- 以2016为根基
	- 通过小数字用其他运算

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760233355684) 

- 所有数字都完成
	- 使用token少
	- 推理能力强

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760233417804) 

- 为什么他推理能力这么强？

### 评比基准

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760232795563) 

| 序号 | 基准名称               | 核心评估方向                                                                 | 特点与典型内容                                                                 |
|------|------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| 1    | AIME 25                | 高级数学推理能力                                                             | 源自美国数学邀请赛（AIME）风格的25道题，涵盖代数、几何、数论等，需多步复杂推导，考验数学逻辑与计算精度。 |
| 2    | GPQA                   | 通用专业知识与推理能力                                                       | 聚焦专业领域知识（如医学、法律、哲学等），通过复杂问题评估模型对专业概念的理解、关联及逻辑应用能力。       |
| 3    | LiveCodeBench v6       | 编程与实时代码解决能力                                                       | 包含真实编程场景任务（如调试、功能实现、算法优化），考验模型将自然语言需求转化为可运行代码的推理与实践能力。 |
| 4    | HLE                    | 人类水平推理（Human-Level Evaluation）                                       | 模拟人类日常或专业场景中的复杂推理任务（如因果分析、决策判断），评估模型接近人类推理模式的程度。         |
| 5    | BrowseComp             | 网页浏览与信息整合推理                                                       | 基于网页浏览场景，考验模型从多页面、多来源信息中提取关键内容、关联分析并解决问题的能力（如信息检索、逻辑验证）。 |
| 6    | SWE-bench Verified     | 软件工程任务推理与验证                                                       | 针对软件工程场景（如代码修复、漏洞检测、需求转化），通过可验证的实际任务评估模型解决工程问题的逻辑与严谨性。 |
| 7    | Terminal-Bench         | 终端命令与系统操作推理                                                       | 围绕终端（命令行）操作场景，考验模型理解指令意图、规划操作步骤、解决系统问题的逻辑（如命令组合、错误排查）。 |
| 8    | τ²-Bench（weighted）   | 多维度加权推理能力综合评估                                                   | 整合多领域推理任务（如数学、逻辑、常识），通过加权方式量化模型在不同推理维度上的综合表现，反映整体推理均衡性。 |

- 为啥要有推理能力？

### L2阶段-推理者

- 辅助编程主要靠推理

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760234063470) 

- openai的奥特曼提出
	- 人工智能L1-L5

| 阶段等级 | 阶段名称（英文） | 阶段名称（中文） | 特点 | 与自动驾驶的关系 |
| :--- | :--- | :--- | :--- | :--- |
| L1 | Chatbox | 聊天机器人 | 具备基本对话能力 | 无直接关系 |
| L2 | Reasoner | 推理者 | 具备人类水平的问题解决能力 | 可用于分析驾驶场景中的复杂问题，辅助决策 |
| L3 | Agent | 智能体 | 能够执行行动的系统 | 智能体可在自动驾驶中自主执行驾驶任务，根据环境变化做出决策 |
| L4 | Innovator | 创新者 | 能够辅助发明创造 | 可用于研发自动驾驶的新技术、新算法 |
| L5 | Organization | 组织者 | 能够承担组织工作 | 可协调多个自动驾驶系统，进行大规模的交通管理 |

- 可以在代码中使用智谱吗？

### 使用代码

- 找到模型
	- https://modelscope.cn/models/ZhipuAI/GLM-4.6
	- 复制代码

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key='ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba', # ModelScope Token
)

response = client.chat.completions.create(
    model='ZhipuAI/GLM-4.6', # ModelScope Model-Id
    messages=[
        {
            'role': 'system',
            'content': 'You are a helpful assistant.'
        },
        {
            'role': 'user',
            'content': '你好'
        }
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content, end='', flush=True)
```

- 这是在 魔搭社区的服务器 上
	- 在线使用 智谱ai
- 可以 在 智谱的服务器 上
	- 在线 用智谱 吗？

### 找到位置

- https://docs.bigmodel.cn/api-reference/%E6%A8%A1%E5%9E%8B-api/%E5%AF%B9%E8%AF%9D%E8%A1%A5%E5%85%A8

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20260502-1777730649711) 

- 需要替换apikey

### 观察代码

- 可以 看出 openai 本质是 
	- 发送 http请求
	- 接受 http响应

```
import requests

url = "https://open.bigmodel.cn/api/paas/v4/chat/completions"

payload = {
    "model": "glm-5.1",
    "messages": [
        {
            "role": "user",
            "content": "写一首关于春天的诗。"
        }
    ],
    "stream": True,
    "temperature": 1
}
headers = {
    "Authorization": "Bearer <token>",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)
```

- 大模型 和 系统人设 
	- 怎么分工的呢？

### 大语言模型选择 vs 系统信息设置
| 比较项目 | 大语言模型的选择（选工具） | 系统信息的设置（定规则） |
| ---- | ---- | ---- |
| 核心意思 | 根据要做的事<br>挑适配的AI工具 | 告知AI身份定位<br>约定说话方式<br>划定能做与不能做 |
| 要考虑什么 | 擅长领域<br>实用度<br>好不好用 | 说清需求<br>定好风格<br>划清底线 |
| 对结果的影响 | 决定AI能力上限 | 决定输出是否贴合要求 |
| 先做哪一步 | 先选工具<br>再定使用用途 | 未选工具<br>不要先定规则 |
| 举个例子 | 写游戏代码<br>选代码专用AI<br>编短视频文案<br>选新媒体AI<br>算数学难题<br>选强推理AI | 扮演小学老师<br>通俗讲解知识点<br>扮演班长<br>列表总结要求<br>扮演图书管理员<br>白话讲解规则 |

- 可以选择 `哪些`大模型 呢？🤔
	- https://modelscope.cn/models

### 模型选择

- 模型的名字中的参数
	- 80B、30B、0.6B 指的是
		- `参数规模`
			- 规模越大 
			- 硬件要求越高
			- 能力越强
	- A3B、A2.5 指的是
		- `架构版本`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20250920-1758333149846) 

- 模型名字中的单词
	- Instruct
	- Thinking
	- DeepResearch
- 如何理解？

### 模型类型

| **模型**               | 核心定位           |  能力            |
|------------------------|---------------------------|-------------------------------|
| DeepResearch           | 深度研究 | 长周期检索 |
| Thinking               | 深度思考 | 带思考过程的逻辑推导  |
| Instruct               | 指令遵循| 高效执行       |

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20250920-1758333812235) 

### 总结

- 这次 我们了解了
	- 智能体的推理能力(reasoning)
	- 区分了 
		- 模型选择
		- 系统人设

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262510/uid1190679-20251012-1760234899626) 

- 智能体 可以在 浏览器里 访问 吗？🤔
- 下次再说👋
