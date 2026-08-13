---
show: step
version: 1.0
enable_checker: true
---

# 文生图模型调用

## 回忆

- 上次 通过messages
	- 给大语言模型 添加了 聊天历史
	- 这样大语言模型 就有了 记忆
	- 成为 智能体(agent)

- 但是 聊天历史 存在内存 	
	- 重启程序 就消失了 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4213426/uid1190679-20260418-1776518020584) 

- 能让记忆 持久化吗？？🤔

### 恢复代码

- 恢复 之前代码
	- 完成 系统人设
		- 大模型是 孙悟空
		- 用户是 猪八戒
	- 多轮对话
	- 拥有记忆

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1', 
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba'
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
        'content': '你是孙悟空，言简意赅，我是猪八戒。'
    }
]

print("====欢迎猪八戒来找孙悟空说话====\n")

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

- 想要
	- 把 对话上下文 (messages)
		- 保存 到 硬盘
	- 并且每次运行自动加载 
		- 之前的对话

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260418-1776518837835) 

- 还想要 
	- 手动控制
	- 对话历史 

### 控制对话历史

```
from openai import OpenAI
import json

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba'
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

def save_messages(messages, filename='history.json'):
    """保存消息历史到文件"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(messages, f, ensure_ascii=False, indent=2)
    print(f"对话已保存到 {filename}")

def load_messages(filename='history.json'):
    """从文件加载消息历史"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return None

def reset_dialog():
    """重置对话，返回初始消息"""
    return [
        {
            'role': 'system',
            'content': '你是孙悟空，惜字如金，我是猪八戒。'
        }
    ]

def show_help():
    """显示帮助信息"""
    print("\n可用命令：")
    print("/help - 显示帮助信息")
    print("/history - 查看完整对话历史")
    print("/reset - 重置对话")
    print("/save - 保存对话到文件")
    print("/load - 从文件加载对话")
    print("/exit - 退出程序")
    print()

# 尝试加载历史记录，如果没有则初始化
messages = load_messages()
if messages is None:
    messages = reset_dialog()
    print("未找到历史记录，已初始化新对话。\n")
else:
    print(f"已加载历史记录，共 {len(messages)} 条消息。\n")

print("====欢迎猪八戒来找孙悟空说话====\n")
print("输入 /help 查看可用命令。\n")

# 对话循环
while True:
    # 获取用户输入
    user_input = input("问题: ")
   
    # 处理命令
    if user_input.startswith('/'):
        command = user_input.strip()
        
        if command == '/help':
            show_help()
        elif command == '/history':
            show_messages(messages)
        elif command == '/reset':
            messages = reset_dialog()
            print("对话已重置！\n")
        elif command == '/save':
            save_messages(messages)
        elif command == '/load':
            loaded = load_messages()
            if loaded:
                messages = loaded
                print(f"已加载对话，共 {len(messages)} 条消息。\n")
            else:
                print("未找到历史记录文件！\n")
        elif command == '/exit' or command == '退出' or command == 'q':
            print("对话结束，再见！")
            break
        else:
            print(f"未知命令: {command}")
            show_help()
        continue
    
    # 检查是否退出
    if user_input.lower() in ['退出', 'q']:
        print("对话结束，再见！")
        break
    
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
        
        # 保存对话历史
        save_messages(messages)
        
    except Exception as e:
        print(f"发生错误: {e}")
        # 发生错误时，移除最后添加的用户消息
        if messages and messages[-1]['role'] == 'user':
            messages.pop()
```


### 效果

- 默认情况下 
	- 对话历史中 只有 系统消息

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260505-1777943053978) 

### 继续对话效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260419-1776565303417) 

- 多轮对话

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260505-1777943170987) 

- 我希望
	- 对话 历史
	- 可以 记录时间

### 对话时间

```
from openai import OpenAI
import json
from datetime import datetime

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba'
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
        
        # 显示消息内容，包含时间戳
        if 'timestamp' in message:
            timestamp = message['timestamp']
            print(f"[{timestamp}] ", end="")
        print(message['content'], end="")
        print("\033[0m")
    print("==========消息结束==============")

def save_messages(messages, filename='history.json'):
    """保存消息历史到文件"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(messages, f, ensure_ascii=False, indent=2)
    print(f"对话已保存到 {filename}")

def load_messages(filename='history.json'):
    """从文件加载消息历史"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return None

def reset_dialog():
    """重置对话，返回初始消息"""
    return [
        {
            'role': 'system',
            'content': '你是孙悟空，惜字如金，我是猪八戒。',
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
    ]

def show_help():
    """显示帮助信息"""
    print("\n可用命令：")
    print("/help - 显示帮助信息")
    print("/history - 查看完整对话历史")
    print("/reset - 重置对话")
    print("/save - 保存对话到文件")
    print("/load - 从文件加载对话")
    print("/exit - 退出程序")
    print()

# 尝试加载历史记录，如果没有则初始化
messages = load_messages()
if messages is None:
    messages = reset_dialog()
    print("未找到历史记录，已初始化新对话。\n")
else:
    print(f"已加载历史记录，共 {len(messages)} 条消息。\n")

print("====欢迎猪八戒来找孙悟空说话====\n")
print("输入 /help 查看可用命令。\n")

# 对话循环
while True:
    # 获取用户输入
    user_input = input("问题: ")
   
    # 处理命令
    if user_input.startswith('/'):
        command = user_input.strip()
        
        if command == '/help':
            show_help()
        elif command == '/history':
            show_messages(messages)
        elif command == '/reset':
            messages = reset_dialog()
            print("对话已重置！\n")
        elif command == '/save':
            save_messages(messages)
        elif command == '/load':
            loaded = load_messages()
            if loaded:
                messages = loaded
                print(f"已加载对话，共 {len(messages)} 条消息。\n")
            else:
                print("未找到历史记录文件！\n")
        elif command == '/exit' or command == '退出' or command == 'q':
            print("对话结束，再见！")
            break
        else:
            print(f"未知命令: {command}")
            show_help()
        continue
    
    # 检查是否退出
    if user_input.lower() in ['退出', 'q']:
        print("对话结束，再见！")
        break
    
    # 添加用户消息到历史，包含时间戳
    messages.append({
        'role': 'user',
        'content': user_input,
        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
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
        
        # 添加助手回复到历史，包含时间戳
        messages.append({
            'role': 'assistant',
            'content': assistant_reply,
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        })
        
        # 保存对话历史
        save_messages(messages)
        
    except Exception as e:
        print(f"发生错误: {e}")
        # 发生错误时，移除最后添加的用户消息
        if messages and messages[-1]['role'] == 'user':
            messages.pop()
```

### 运行效果

- 现在可以记录 对话时间了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260505-1777943460667) 

- 记录对话时间 又有什么用呢？

### 上下文窗口

- 上下文窗口
	- context window
	- 3个因素影响
	1. 物理硬件
	2. 网络带宽
	3. 逻辑算法


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260505-1777984879513) 

- 算法可以 设置上下文窗口大小吗？

### 观察模型

- https://modelscope.cn/models/Qwen/Qwen3-235B-A22B-Instruct-2507

| 参数项 | 数值 |
| ---- | ---- |
| 总参数量 | 235B |
| 每步激活参数 | 22B |
| 网络层数 | 94 层 |
| 注意力头GQA | Q=64，KV=4 |
| MoE专家总数 | 128 个 |
| 单次激活专家数 | 8 个 |

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260505-1777988027957) 

| 参数项 | 数值 |
| ---- | ---- |
| 原生上下文窗口 | 262144 Token（256K） |
| 可外推上下文上限 | 1010000 Token（约1M） |
| 建议最大生成长度max_new_tokens | 16384 Token |

- 最大生成长度
	- max_new_tokens
	- 什么意思？

### 设置 输出大小

- max_new_tokens 控制最大输出

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260505-1777988466825) 

|  | 输入 | 输出 |
| ---- | ---- | ---- |
| 参数 | 上下文窗口 | max_new_tokens |
| 作用 | 限制聊天历史+提问总字数 | 限制模型回答最大字数 |

- 如何 修改上下文大小呢？

### 参数控制

- 2个条件
	1. 物理硬件
	2. 软件配置

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260505-1777988248408) 

### 总结

- 这次 将 对话历史 
	- 持久化
- 对话历史 都记录下来后
	- 存下的对话 越来越多
	- 最终会撑爆上下文窗口

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260505-1777990908816) 

- 这怎么办呢？？？🤔
- 下次再说👋