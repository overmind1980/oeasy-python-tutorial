---
show: step
version: 1.0
enable_checker: true
---

#  角色扮演_大模型系统设定_system_role_user 

## 总结

- 之前发给 大模型的 是

```
你是什么动物？
```

- 结论明确

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260428-1777354006080) 

- 我们想给 流浪动物 做一个卡通ip
	- 他要 足够可爱
	- 要能和人交流
	- 可以吗？🤔


### 扮演小猫

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760257009127) 

- 告诉大模型	
	- 他 是 一只小猫

```
你是一只小猫
```

- 驯化了模型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760257125807) 

### 进一步发问

```
你是一只小猫，你爱吃什么？
```

- 模型会扮演小猫 然后说话

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760257191189) 

- 他会根据自己的设定
	- 回答问题

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760275613306) 

### 再发问

- 这次 没有 告诉大模型
	- 他是小猫

```
你有什么爱好？
```

- 大模型 就忘了
	- 自己 是一个小猫

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760276226728) 

- 大模型 
	- 脱掉了 小猫的装扮
	- 回到了 通用大模型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760275281509) 

- 做出通用回答

### 重新设置系统人设

- 再次告诉大模型
	- 他是一只小猫

```
你是一只小猫，如何学习编程？
```

- 大模型再次 小猫附体
	- 按照小猫的角色
	- 进行回答

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760275229237) 

- 每次都要
	- 在对话里面 
	- 提醒大模型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251014-1760439452749) 

- 能不能 悄悄给大模型 
	- 设置好人设 呢？

### 原始状态

- 一开始 给大模型的人设
	- 就是 有用的助手

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260428-1777354270870) 

- 大模型只会用通用的方式回答

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760278481206) 

- 可以修改吗？

### 人设

- 之前的人设 
	- 让大模型 只会 用通用的方式回答
- 在实际的应用中 
	- 要让大模型
		- 扮演各种人设
		- 具备独特的个性

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262375/uid1190679-20251012-1760256122648) 

- 不能 每一次 
	- 都在 对话中 
	- 让大模型 扮演角色吧？？？🤔

### 北二外

- 如果 我们给隔壁北二外 
	- 做一个卡通ip
	- 那么他的特点是什么呢？

- 一定是 精通 多门语言

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260428-1777354469451) 

- 实际效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260405-1775353272746) 

### 语言学习助手

- 可以限定
	- 聊天主题
	- 词汇范围

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260717-1784252365868) 

- 做某种语言的专属聊天助手

### 更多语种

- 波斯语

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260405-1775353321893) 

- 斯瓦希里语

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260405-1775353380488) 

- 豪萨语

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260405-1775353440219) 

- 阿拉伯语

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260405-1775353480775) 

- 土耳其语

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260405-1775353566706) 

### 四大名著

- 如何让大模型 扮演四大名著里的角色
	- 跟你交流

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20260615-1781532296876) 

- 让模型扮演孙悟空

### 修改system提示

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760277097481) 

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

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760278596420) 

- 我们 目前
	- 只能看到 ai返回的信息
- 我想看看
	- 发给 大模型的 对话上下文
	- conversation context 
	- 可以 吗？

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

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251019-1760871807951) 

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

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760279128682) 

- 大模型 得到两个消息后 
	- 进行回复

### 孙悟空

- 大模型 
	- 已经知道 
	- 自己是孙悟空

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262417/uid1190679-20251012-1760279272958) 

- 但大模型 
	- 还不知道
	- 在和`谁`说话

### 总结

- 这次 可以 悄悄设置 大模型的系统人设了
	- 总共 两类 消息类型

|类型|system|user|
|----|----|----|
|核心定位|系统|对话需求发起者|
|作用与特点|1. 提前设定模型<br>2. 不直接参与对话，用户看不到<br>3. 影响整个对话的回答风格和方向|1. 用户的问题<br>2. 直接触发模型，生成回应<br>3.不能在暗中设置人设|
|典型使用场景举例|你是孙悟空|你喜欢什么颜色？|

- 想让大模型 一直记住 
	- 和他对话的我
	- 是猪八戒

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4245525/uid1190679-20250920-1758374355546) 

- 该如何做呢？？🤔
- 下次再说👋