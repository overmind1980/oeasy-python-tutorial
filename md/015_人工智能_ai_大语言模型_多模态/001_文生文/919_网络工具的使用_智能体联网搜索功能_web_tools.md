---
show: step
version: 1.0
enable_checker: true
---

# 文生图模型调用

## 回忆

- 上次我们让智能体使用起终端工具

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250918-1758161821194) 

- 如何让智能体 
	- 使用 网络搜索工具呢？ 

### 初始化智能体

|角色|	核心定位	|作用与特点|	典型使用场景举例|	
|---|---|---|---|
|system |	模型隐形引导者|1. 提前设定模型行为（如“简洁回答”“用专业术语”） <br/>2. 不直接参与对话，用户看不到<br/>3. 影响整个对话的回答风格和方向	|你是耐心的数学老师<br/>解题步骤要详细|
|user|	对话需求发起者|1. 直接传递用户的提问、需求或指令<br/>2. 是模型回答的直接触发点<br/>3. 内容会被模型作为核心依据来生成回应<br/>|	“请解释什么是质数？”<br/>“帮我写一段生日祝福”	|
|assistant	|对话的“历史回应记录者”	|1. 存储模型此前给出的回答，作为对话上下文<br/>2. 无主动作用，需手动传入历史记录<br/>3. 让模型“记住”之前的内容，保证多轮对话连贯<br/>| 连贯上下文 |多轮聊天时基于上下文回答|	

```
from openai import OpenAI
import sys

# 初始化OpenAI客户端
client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = 'ms-9b5aef45-a43a-4f6a-bd74-8691b1197519',
)

# 初始化消息历史，包含系统提示词
messages = [
    {
        'role': 'system',
        'content': '你是一个记忆力很强的助手，能够记住之前的对话内容，并根据上下文提供连贯的回答。'
    }
]

print("欢迎使用智能对话助手！输入'退出'或'q'结束对话。\n")

# 对话循环
while True:
    # 获取用户输入
    user_input = input("你: ")
    
    # 检查是否退出
    if user_input.lower() in ['退出', 'q', 'quit', 'exit']:
        print("再见！")
        break
    
    # 添加用户消息到历史
    messages.append({
        'role': 'user',
        'content': user_input
    })
    
    try:
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

### 网络获取

- 网络获取有两个渠道
	1. 爬取搜索引擎
	2. 直接使用api

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218416/uid1190679-20250919-1758261435401) 

- 我们试试api的方式

### 百度api接口

- 百度搜索api接口定义
	- https://cloud.baidu.com/doc/AppBuilder/s/pmaxd1hvy

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218416/uid1190679-20250919-1758254720655) 

- 使用api接口需要api-key
	- https://console.bce.baidu.com/iam/#/iam/apikey/list
	- 创建并复制apikey

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218416/uid1190679-20250919-1758254354175) 

- 尝试使用接口

### 具体代码

```
#!/usr/bin/env python3
import requests, json, sys

def format_search_results(result):
    """提取并格式化搜索结果"""
    output = []
    
    # 显示请求ID
    if 'request_id' in result:
        output.append(f"REQUEST_ID: {result['request_id']}")
        output.append("-" * 50)
    
    # 提取references中的搜索结果
    references = result.get('references', [])
    if references:
        for item in references[:5]:
            title = item.get('title', '无标题')
            url = item.get('url', '无链接')
            content = item.get('content', '无描述')
            # 截断过长的内容
            if len(content) > 200:
                content = content[:200] + '...'
            output.append(f"{title} | {url} | {content}")
    else:
        output.append("未找到搜索结果")
    
    return "\n".join(output)

query = sys.argv[1] if len(sys.argv) > 1 else "北京有哪些旅游景区"
url = "https://qianfan.baidubce.com/v2/ai_search/chat/completions"
headers = {
    "Authorization": "Bearer bce-v3/ALTAK-z6Nrmu8xKq4mpNsp55PPv/037e653ff0ed268dd21dad96e73464614f75f991",
    "Content-Type": "application/json"
}
data = {
    "messages": [{"content": query, "role": "user"}],
    "search_source": "baidu_search_v2",
    "resource_type_filter": [{"type": "web", "top_k": 20}],
    "search_recency_filter": "year"
}

try:
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    result = response.json()
    
    print(f"QUERY: {query}")
    print(format_search_results(result))
except Exception as e:
    print(f"ERROR: {e}")
```

### 运行效果

```
python3 baidu.py 北京天气
```

- 搜索成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218416/uid1190679-20250919-1758263522517) 

- 想让agent 具有搜索功能

### 融合代码

```
根据这两个文件
让agent具备搜索功能
```

### 总结

- 这
- 下次再说👋