---
show: step
version: 1.0
enable_checker: true
---

#  大语言模型调用_llm_魔搭_提示词_chatbot_聊天机器人 

### 吉祥物

- 各种 组织 都会有自己的吉祥物

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260615-1781531430911) 

- 今天 我们要做一个
	- 机构或活动的卡通ip
	- 能够和人实时互动的

- 如果想要 让大模型 
	- 扮演这样的 品牌卡通ip
	- 应该如何实现呢？

### 寻找模型

- 魔搭社区
	- 可以理解成
		- AI工具 共享广场
		- 各种工具、模型、数据集
		- 都放在广场
	- 不用 自己费劲写代码
		- 直接上手
		- 使用现成AI功能

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260615-1781526495039) 

1. 首页：初始页面
2. 模型库：存放 模型
3. 数据集：存放 可以训练模型用的数据
4. 创空间：成品小应用

### 授权

- 注意！
- 首先要注册魔搭社区
	- http://modelscope.cn

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4212326/uid1190679-20250916-1757992179107) 

- 魔搭社区 想要应用大模型 
	- 需要 阿里身份认证

- 模型 有很多种
	- 如何 按照 自己的需求 
	- 调用合适模型呢？

### 拆解需求

- 比如 今天 实时互动 的模型
	- 是属于 什么类别的大模型呢？

- 我们 把文字消息 发给 大模型
	- 大模型 接收后 根据文字计算
	- 生成 对应的 回答文本
	- 再把 生成好的文字 返还给我们
	- 这类 只通过 文字输入
	- 产出 文字输出的 模型
	- 就叫 文生文大模型

### 筛选模型

- 点击 模型库
	- 先筛选 文生文 模型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20250916-1758019712260) 

- 再筛选 支持体验 
	- `API-inference`

> API
	>> Application Programming Interface
		>>> 应用程序接口

> inference
	>> 推理
	>>> 可以直接在服务器 `云端推理`

- 模型好多啊
	- 选哪个呢？

### Instruct

- 选择Instruct
	- 快问快答
	- 言简意赅

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260428-1777346379645) 

- https://modelscope.cn/models/Qwen/Qwen3-235B-A22B-Instruct-2507

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260615-1781526573525) 

- 不同类型的模型 都有哪些特点？

### 模型作用

| 模型类型 | 核心作用 | 特点 |
| ---- | ---- | ---- |
| Base | 基础原生底座 | 只会续写文本<br>不能直接对话<br>思考潜力强 |
| Instruct | 指令调教版 | 听懂命令<br>答题快<br>通用办公<br>深度思考偏弱 |
| Chat | 对话优化版 | 多轮聊天自然<br>本质是改良版Instruct |
| Deep/Reasoning | 深度推理版 | 强逻辑<br>数学<br>多步推演<br>回答偏慢 |
| Code | 代码专用版 | 写代码<br>查Bug能力极强<br>偏科理科 |
| Multimodal | 多模态版 | 支持图文<br>音视频理解<br>能看图分析 |
| Embedding | 向量检索版 | 不聊天<br>专供知识库<br>RAG<br>语义匹配 |
| Lite/Tiny | 轻量化精简版 | 占用低<br>速度快<br>性能大幅缩水 |
| MoE | 混合专家版 | 大参数<br>低能耗<br>综合性能强 |
| SFT/RLHF | 对齐安全版 | 合规防胡说<br>部分场景会限制发挥 |

### 在线体验

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260428-1777346741604) 

- 在网页 可以 
	- 直接对话
	- 验证一下 大模型是否满足需求

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260327-1774570830359) 

- 评价西游记

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260615-1781533945247) 

- 如果想要 调用大模型
	- 需要把模型下载到本地
	- 有没有不用下载 直接 就用的方法呢？

### 找到代码

- 使用 api
	- 就可以 直接 在本地
	- 进行模型交互

- 右上角 关闭在线对话
	- 点击 查看代码范例

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20250916-1758020016695) 

- 可以复制代码

### 观察代码

- 注意第四行 
	- 出现了 api-key

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260428-1777346885491) 

- 如何查看 自己的`api-key`呢？🤔

### 获得api-key

- 魔搭社区 的 范例代码 
	- 已经 自动设置好 你的api-key 
	- 可以 直接使用

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20250917-1758108640857) 

- ⚠️代码中的 `api-key`
	- 是 根据 你的用户信息
	- 生成的

### 代码

- 魔搭上的 示例代码
	- 已经 自动填充了 正确的api-key

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key='ms-21a30444-019a-4a8a-9c43-d2ba5b821f299'
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
            'content': '你好'
        }
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content, end='', flush=True)

```

### 运行环境

- 蓝桥环境 运行
	- 报错

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260717-1784283141052) 

- 原因是非会员需要外网

### 本地运行

- 本地环境 
	- 用trae开发
	- 有外网

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260615-1781526812116) 

- 可以 在本地 有网环境中 运行
	- Trae

### 运行结果

- 告诉我们没有
	- openai 这个
	- 类库(Module)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260428-1777347050307) 

- 那就安装这个模块

```python
pip3 install openai --break-system-packages -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### 尝试运行

- 安装之后 
	- 运行成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260428-1777347138629) 

- 我跟大模型说你好
	- 大模型 给了我回复

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20260428-1777347318120) 

### 出了状况

- 如果 报401错误 的话 
	- 需要确认 阿里云授权

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20250920-1758331746268) 

- 除了你好 
	- 可以说点别的吗？

### 找到位置

- 原来 问的是
	- 你好

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20250916-1758027783325) 

- 改这里就行了

### 总结

- 这次 我们 完成了 默认模版
- 默认模版的问题 
	- 就是 发送给大模型的 文本 是固定的
	- 你好 是写在py程序里的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260428-1777353918560) 

- 之前 只能和大模型说 

> 你好！

- 接下来 我想做一个卡通ip 
	- 实时交互 就需要自己输入问题 
- 如何实现呢？？🤔
- 下次再说👋



