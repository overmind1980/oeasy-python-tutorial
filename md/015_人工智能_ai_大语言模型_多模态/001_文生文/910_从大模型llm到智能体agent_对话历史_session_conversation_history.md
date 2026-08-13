---
show: step
version: 1.0
enable_checker: true
---

#  从大语言模型llm到智能体agent 

## 回忆

- 上次 我们 研究了
	- md渲染的 问题
		- 无论是 浏览器 
		- 还是 终端
	- 都可以 按照md的文档格式 
		- 进行渲染

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4270977/uid1190679-20251029-1761702726577) 

- 还有什么 可以玩吗？🤔

### 回到最初

- https://modelscope.cn/models/Qwen/Qwen3-Next-80B-A3B-Instruct

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213420/uid1190679-20250916-1758020016695) 

- 原始代码

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',   
    api_key = 'ms-bf7ac4b5-c615-4267-ba47-a54a7b3127e1'
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

- 运行成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20251104-1762261603728) 

- 如何 把用户信息 
	- 修改为 `实时`输入 呢？

### `实时`输入

```python3
			{
				'role': 'user',
				'content': input("\n你的问题")
			},
```

- 把 固定的字符串 你好
	- 替换成 input函数

```
你是谁？
```

- 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20251104-1762261821113) 

- 还想要 
	- `系统人设`

### 系统人设

- 系统人设
	- system

```python3
		{
			'role': 'system',
			'content': '你是孙悟空'
		},
```

- 大模型 系统人设 为
	- 🐒孙悟空🐒

```
你是谁？
```

- 大模型 系统人设 
	- system
	- 已经知道 自己是谁

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20251104-1762261928430) 

- 哪`我`是谁呢？

### 我是谁？

```
我是谁
```

- 大模型 系统人设 
	- 还不知道 我是谁

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20251104-1762262004760) 

- 想告诉大模型
	- 你是孙悟空
	- 我是猪八戒

### 还是系统人设

- 补充 系统人设
	- system

```python3
			{
				'role': 'system',
				'content': '你是孙悟空，我是猪八戒'
			},
```

- 系统人设
	- system
	- 已经设置好

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20251104-1762262839337) 

- `多轮`对话
	- 可以吗？

### 循环

```
while True:
```

- 添加外层循环

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20251104-1762262974061) 


### 完整代码

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',   
    api_key = 'ms-bf7ac4b5-c615-4267-ba47-a54a7b3127e1'
)
while True:
    response = client.chat.completions.create(
        model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
        messages=[
			{
				'role': 'user',
				'content': input("\n\n你的问题:")
			},
            {
                'role': 'system',
                'content': '你是孙悟空，我是猪八戒'
            },
        ],
        stream=True
    )

    for chunk in response:
        print(chunk.choices[0].delta.content, end='', flush=True)
```

### 运行效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20260504-1777857199540) 

- 但是 对话中发现 
	- 大模型 `没有`记忆
	- 上下文记不住

### 记忆力

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4245525/uid1190679-20250920-1758377200831) 

- 怎么 让大模型 `有记忆` 呢？🤔

### 循环发问

- 定义函数 分色显示messages

```
def show_messages(messages):
    print("==========消息开始==============")
    for message in messages:
        if message['role'] == 'system':
            print("\033[41m", end="")  # 红色背景
        elif message['role'] == 'user':
            print("\033[42m", end="")  # 绿色背景
        print(message, end="")
        print("\033[0m")
    print("==========消息结束==============")
```

- 在流式输出响应之前
	- 调用函数
	- 输出消息

```
show_messages(messages)
```

### 新代码

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',   
    api_key = 'ms-bf7ac4b5-c615-4267-ba47-a54a7b3127e1'
)

def show_messages(messages):
    print("==========消息开始==============")
    for message in messages:
        if message['role'] == 'system':
            print("\033[41m", end="")  # 红色背景
        elif message['role'] == 'user':
            print("\033[42m", end="")  # 绿色背景
        print(message, end="")
        print("\033[0m")
    print("==========消息结束==============")

messages = [
            {
                'role': 'system',
                'content': '你是孙悟空 我是猪八戒'
            }
        ]

while True:
    question = input("\n你的问题：")
    
    # 添加用户消息到历史
    messages.append({
        'role': 'user',
        'content': user_input
    })
    
    response = client.chat.completions.create(
        model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
        messages=messages,
        stream=True
    )
    show_messages(messages)
    for chunk in response:
        print(chunk.choices[0].delta.content, end='', flush=True)
```

### 效果

- 每次都是 2条信息
	1. 系统人设
	2. 新发的消息

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20251012-1760281712516) 

- 没有 对话历史

### 新要求

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20250921-1758412659280) 

- 现在提出新的要求

```
现在 每次都直接 与大模型对话，
我希望修改代码 变成一个智能体，
把相应的上下文 都记录着，
就是我们之间的对话 有记忆
```

### 完整代码


```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1', 
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cb'
)

def show_messages(messages):
    print("==========消息开始==============")
    for message in messages:
        if message['role'] == 'system':
            print("\033[41m", end="")  # 红色背景
        elif message['role'] == 'user':
            print("\033[42m", end="")  # 绿色背景
        elif message['role'] == 'assistant':
            print("\033[44m", end="")  # 蓝色背景
        print(message, end="")
        print("\033[0m")
    print("==========消息结束==============")

# 初始化消息历史，包含系统提示词
messages = [
    {
        'role': 'system',
        'content': '你是孙悟空，我是猪八戒。'
    }
]

print("欢迎使用智能对话助手！输入'退出'或'q'结束对话。\n")

# 对话循环
while True:
    # 获取用户输入
    user_input = input("问题: ")
   
    # 添加用户消息到历史
    messages.append({
        'role': 'user',
        'content': user_input
    })
    
    try:
        
        show_messages(messages)
    
        # 发送请求到模型
        response = client.chat.completions.create(
            model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
            messages=messages,
            stream=True
        )
        
        print("助手: ", end='', flush=True)
        assistant_reply = ""
        
        # 处理流式响应
        for chunk in response:
            if chunk.choices[0].delta.content:
                print(chunk.choices[0].delta.content, end='', flush=True)
                assistant_reply += chunk.choices[0].delta.content
        
        print()  # 换行
        
        # 添加助手回复到历史
        messages.append({
            'role': 'assistant',
            'content': assistant_reply
        })
        
    except Exception as e:
        print(f"发生错误: {e}")
        # 发生错误时，移除最后添加的用户消息
        if messages and messages[-1]['role'] == 'user':
            messages.pop()
```

### 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20260504-1777858706793) 

- 上下文有点啰嗦

### 修改系统人设

```
# 初始化消息历史，包含系统提示词
messages = [
    {
        'role': 'system',
        'content': '你言简意赅的助手。'
    }
]
```

- 观察到 新的上下文类型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20260504-1777859080611) 

### 新增代码

- 大模型的 回复
	- 也加入 上下文messages

```
def show_messages(messages):
    print("==========消息开始==============")
    for message in messages:
        if message['role'] == 'system':
            print("\033[41m", end="")  # 红色背景
        elif message['role'] == 'user':
            print("\033[42m", end="")  # 绿色背景
        elif message['role'] == 'assistant':
            print("\033[44m", end="")  # 蓝色背景
        print(message, end="")
        print("\033[0m")
    print("==========消息结束==============")
```

- 输出函数
	- 除了system、user之外
	- 添加了新的角色 assistant
	- 代表 大模型 发给我们的消息

### 效果

- 第1轮对话 的上下文
	- 包含了 2条信息
		1. 系统人设
		2. 用户问题

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20260504-1777859160527) 

- 第2轮对话 的上下文
	- 包含了 4条信息
		1. 系统人设
		2. 用户 第1轮问题
		3. 大模型 第1轮回复
		4. 用户 第2轮问题

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20260504-1777859218471) 

- 大模型有了记忆
	- 知道 刚才说的是 蓝色

- 记忆靠的是
	- 上下文 messages
	- 对话历史(conversation_history)

### 对话历史(conversation_history)

- 将 对话历史(conversation_history) 
	- 作为上下文 传给大模型
	- 于是大模型有了记忆

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20250921-1758413675601) 

- 多次对话 
	- 会让 上下文爆炸
	- 让消耗的 token 直接翻倍

### 观察上下文

- 埋好 system人设 
	- 要求言简意赅

```
messages = [
    {
        'role': 'system',
        'content': '你是言简意赅的回答者。'
    }
]
```

- 可以看到 上下文中
	- 包括了上次的问和答
	- 大模型 就是这样用有记忆的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20260416-1776341623572) 

- 在对话之上有了新的概念

### 会话期(Session)

> ⚠️新概念 
>>	会话期(Session)

| 概念 | 中文 | 核心含义 | 作用 | 
|------|----------|----------|----------------------|
| Chunk | 数据块 | 文本片段<br/>渐进式内容生成 | 实时响应<br/>提升用户体验 |
| Chat | 对话 | 一问一答 | 用户与模型交互<br/>模型回答问题 |
| Session | 会话期 | 多轮交互 | 维护多轮上下文<br/>让模型有记忆 |

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20250917-1758115764692) 

### 新角色

- 由于 加载了 上下文
	- 大模型(llm) 从 聊天历史中 
		- 获得了 记忆
	- 成为了 智能体(agent)

|角色|	核心定位	|作用与特点|场景举例|	
|---|---|---|---|
|system |	最初人设 |1. 提前设定模型行为 <br/>2.用户看不到<br/>3. 影响方向	| 你是耐心的数学老师<br/>解题步骤详细|
|user|	用户提问消息 |1. 用户的提问<br/>2. 模型回答的直接触点<br/>|	什么是质数？<br/>写一段生日祝福	|
|assistant	| 大模型的回复	|1. 模型的回答<br/>2. 传入历史<br/>|模型的回答|	

- 以上 三类内容(content)
	- 都会进入 聊天历史(conversation_history)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20250921-1758440538125) 

- 聊天历史 成为了 聊天背景
	- 从 提示词工程 到上下文工程

### 演化 上下文工程

- 过去 研究 怎么写好 单次 提示词
	- 现在 要 研究 怎么控制 整个 上下文窗口 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778049673037) 

| 对比维度 | 提示词工程 | 上下文工程 |
| :--- | :--- | :--- |
| 核心思维 | 写好单次指令<br>怎么问 | 管好全量信息<br>给什么<br>怎么给 |
| 核心动作 | 优化单条提示词话术 | 管理上下文窗口<br>留/删/排/压信息 |
| 信息范围 | 单次输入<br>无历史/外部信息 | 系统指令<br>历史对话<br>知识库等全量信息 |
| 场景适配 | 简单单次问答<br>小demo | 多轮对话<br>Agent<br>企业级应用<br>长文本场景 |
| 特点局限 | 静态<br>难维护<br>易注意力漂移 | 需统筹Token容量<br>需设计截断排序逻辑 |
| 核心目标 | 让模型单次回答更精准 | 让模型高效利用窗口<br>稳定完成复杂任务 |

### 总结

- 这次 通过messages
	- 给大语言模型 添加了 聊天历史
	- 这样大语言模型 就有了 记忆
	- 成为 智能体(agent)

- 但是 聊天历史 存在内存 	
	- 重启程序 就消失了 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20260418-1776518020584) 

- 能让记忆 持久化吗？？🤔
- 下次再说👋