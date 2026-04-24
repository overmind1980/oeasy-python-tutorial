---
show: step
version: 1.0
enable_checker: true
---

# 文生图模型调用

## 总结

- 上次使用 魔搭社区的api	
	- 构建了 文生文的应用

![图片描述](uid1190679-20250916-1758029609852.png) 

- 但是 提出的问题
	- 现在是写死的
	- 如何 实时动态 输入问题呢？🤔

### 回到最初

```
            'content': input("问题:")
```

- 使用input输入信息

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = "ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba" # ModelScope Token
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

- 发给大模型的是

```
你好
```

- 结论明确

![图片描述](uid1190679-20251012-1760256749214.png) 

- 要求大模型扮演小猫

### 扮演小猫

![图片描述](uid1190679-20251012-1760257009127.png) 

```
你是一只小猫
```

- 效果

![图片描述](uid1190679-20251012-1760257125807.png) 

### 进一步发问

```
你是一只小猫，你爱吃什么？
```

- 模型会扮演小猫 然后说话

![图片描述](uid1190679-20251012-1760257191189.png) 

![图片描述](uid1190679-20251012-1760275613306.png) 


### 再发问

```
你有什么爱好？
```

- 这次 没有 告诉大模型
	- 他是小猫

![图片描述](uid1190679-20251012-1760276226728.png) 

- 大模型 就忘了
	- 自己 是一个小猫

![图片描述](uid1190679-20251012-1760275281509.png) 

- 做出通用回答

### 重新设置系统人设

```
你是一只小猫，如何学习编程？
```

![图片描述](uid1190679-20251012-1760275229237.png) 

- 大模型再次 小猫附体

![图片描述](uid1190679-20251014-1760439452749.png) 

- 每次都要
	- 在对话里面 提醒大模型
	- 能不能 悄悄给大模型 设置好人设 呢？

### 原始状态

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = "ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba" # ModelScope Token
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

- 大模型只会用通用的方式回答

![图片描述](uid1190679-20251012-1760278481206.png) 

### 人设

- 前面这种只会 用通用的方式回答
- 在实际的应用中 
	- 各个品牌、公司
		- 都希望自家的ai客服工具 
		- 具备独特的个性
	- 而不是 
		- 每一次 都需要 提问者去定义ai角色

![图片描述](uid1190679-20251012-1760256122648.png) 

- 如何让 大模型 扮演角色呢？？🤔


### 固定人设

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = "ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba" # ModelScope Token
)

response = client.chat.completions.create(
    model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
    messages=[
        {
            'role': 'system',
            'content': '你是一个韩语翻译，把我说的话，翻译成韩语'
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

- 实际效果

![图片描述](uid1190679-20260405-1775353272746.png) 

### 更多语种

- 波斯语

![图片描述](uid1190679-20260405-1775353321893.png) 

- 斯瓦希里语

![图片描述](uid1190679-20260405-1775353380488.png) 

- 豪萨语

![图片描述](uid1190679-20260405-1775353440219.png) 

- 阿拉伯语

![图片描述](uid1190679-20260405-1775353480775.png) 

- 土耳其语

![图片描述](uid1190679-20260405-1775353566706.png) 

- 海量的文本翻译 从此 不是问题

### 修改system提示


![图片描述](uid1190679-20251012-1760277097481.png) 



- 可以 告诉大模型 
	- 他扮演的角色 是 `孙悟空`

```
messages=[
    {
        'role': 'system',
        'content': '你是孙悟空'
    },
    {
        'role': 'user',
        'content': input("问题:")
    }
],
```

- 在system里面
	- 设置 人物

### 完整代码

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = "ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba" # ModelScope Token
)

response = client.chat.completions.create(
    model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
    messages=[
        {
            'role': 'system',
            'content': '你是孙悟空'
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

### 用户设定

- 效果

![图片描述](uid1190679-20251012-1760278596420.png) 

- 我们目前只能看到ai返回的信息
	- 可以把发给大模型的信息
	- 也输出出来吗？

### 输出消息

- 先把messages定义为全局变量

```
messages=[
    {
        'role': 'system',
        'content': '你是孙悟空'
    },
    {
        'role': 'user',
        'content': input("问题：")
    }
]
```

- 定义函数 对message 分颜色输出

```
def show_messages(messages):
    print("==========消息开始==============")
    counter = 1
    for message in messages:
        print("\033[4" + str(counter) + "m",end="")
        print(message,end="")
        print("\33[0m")
        counter = counter + 1
        if counter == 7:
            counter = 1
    print("==========消息结束==============")
            
```

- 在最后调用函数

![图片描述](uid1190679-20251019-1760871807951.png) 

- 可以把发给大模型的message
	- 用`不同颜色`输出吗？

### 完整代码

- 定义show_messages函数
	- 用`不同颜色`输出

```
from openai import OpenAI


def show_messages(messages):
    print("==========消息开始==============")
    counter = 1
    for message in messages:
        print("\033[4" + str(counter) + "m",end="")
        print(message,end="")
        print("\33[0m")
        counter = counter + 1
        if counter == 7:
            counter = 1
    print("==========消息结束==============")
            

client = OpenAI(
    base_url = 'https://api-inference.modelscope.cn/v1',
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba'
)
messages=[
    {
        'role': 'system',
        'content': '你是孙悟空'
    },
    {
        'role': 'user',
        'content': input("问题：")
    }
]
response = client.chat.completions.create(
    model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
    messages=messages,
    stream=True
)

show_messages(messages)
for chunk in response:
    print(chunk.choices[0].delta.content, end='', flush=True)
```

### 过程

- 系统 把两种类型的消息
	- 都发给大模型

![图片描述](uid1190679-20251012-1760279128682.png) 

- 大模型 得到两个消息后 
	- 进行回复

### 孙悟空

- 大模型 
	- 已经知道 
	- 自己是孙悟空

![图片描述](uid1190679-20251012-1760279272958.png) 

- 但是大模型 
	- 还不知道
	- 在和`谁`说话

### 总结

- 这次 可以悄悄设置 系统人设了
	- 总共 两种 消息类型

|类型|	核心定位	|作用与特点|	典型使用场景举例|	
|---|---|---|---|
|system |	系统 | 1. 提前设定模型  <br/>2. 不直接参与对话，用户看不到<br/>3. 影响整个对话的回答风格和方向	|你是孙悟空|
|user|	对话需求发起者|1. 用户的问题<br/>2. 直接触发模型 ,生成回应<br/>3.不能在暗中设置人设|	你喜欢什么颜色？	|

![图片描述](uid1190679-20250920-1758374355546.png) 

- 想让大模型知道 
	- 和他对话的我
	- 是猪八戒
	- 可以吗？🤔
- 下次再说👋