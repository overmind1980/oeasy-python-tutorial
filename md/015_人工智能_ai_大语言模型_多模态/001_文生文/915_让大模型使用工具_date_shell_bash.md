---
show: step
version: 1.0
enable_checker: true
---

# 文生图模型调用

## 回忆

- 上次 我们让智能体
	- 知道 日期和时间
	- 甚至 使用 终端命令 date

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250921-1758463156127) 

- 不过 什么 都往 系统人设里 放
	- 系统人设 很快就堆满了
- 能够 按`需`获取 吗？🤔

### 思路

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260508-1778208226677) 

- 我想要 
	- 把 能用date 命令  这个人设
	- 直接 在系统人设 里面写好 
	- 让大模型自己使用命令 
	- 可以吗？？ 

### 要求

```
在系统人设里面告诉大模型，他可以使用shell命令中的date命令，使用命令的结果，将作为上下文添加到message中，类型是tool_call，显示为背景橙色。
```

- 代码

```
from openai import OpenAI
import subprocess

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1', 
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cb'
)

def show_messages(messages):
    print("==========消息开始==============")
    # 角色到背景色的映射
    role_colors = {
        'system': '\033[41m',    # 红色背景
        'user': '\033[42m',      # 绿色背景
        'assistant': '\033[44m',  # 蓝色背景
        'tool': '\033[45m'        # 紫色背景
    }
    
    for message in messages:
        role = message.get('role')
        color = role_colors.get(role, '')  # 默认无颜色
        print(color, end="")
        print(message, end="")
        print("\033[0m")
    print("==========消息结束==============")

def execute_command(command):
    """执行 shell 命令并返回结果"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=5)
        return result.stdout.strip()
    except Exception as e:
        return f"执行命令失败: {str(e)}"

# 构建系统消息
system_content = '''You are a helpful assistant.

You can use the shell command `date` to get the current time. When you need to use the date command, please indicate it in your response. I will execute the command and add the result as a tool message to the context.'''

# 初始化消息历史，包含系统提示词
messages = [
    {
        'role': 'system',
        'content': system_content
    }
]

print("欢迎使用智能对话助手！输入'退出'或'q'结束对话。\n")

# 对话循环
while True:
    # 获取用户输入
    user_question = input('请输入您的问题: ')
    
    # 检查是否退出
    if user_question.lower() in ['退出', 'q']:
        print("对话结束，再见！")
        break
    
    # 添加用户消息到历史
    messages.append({
        'role': 'user',
        'content': user_question
    })
    
    try:
        # 发送请求到模型
        response = client.chat.completions.create(
            model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
            messages=messages,
            stream=True
        )
        
        show_messages(messages)
        
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
        
        # 检查助手回复是否包含使用 date 命令的请求
        if 'date' in assistant_reply:
            # 执行 date 命令
            date_result = execute_command('date')
            
            # 添加 tool 消息到上下文
            tool_message = {
                'role': 'tool',
                'content': f"执行命令: date\n结果: {date_result}"
            }
            messages.append(tool_message)
            
            # 显示更新后的消息历史
            show_messages(messages)
            
            # 直接生成基于时间信息的回复
            print("助手: ", end='', flush=True)
            print(f"根据 date 命令的执行结果，当前时间是: {date_result}")
            print()
            
            # 添加基于时间信息的回复到历史
            time_reply = f"根据 date 命令的执行结果，当前时间是: {date_result}"
            messages.append({
                'role': 'assistant',
                'content': time_reply
            })
        
    except Exception as e:
        print(f"发生错误: {e}")
        # 发生错误时，移除最后添加的用户消息
        if messages and messages[-1]['role'] == 'user':
            messages.pop()
```

### 执行结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260416-1776348181452) 

### 原理

1. 让 大模型 知道
	- 自己能够 date 命令
	- 并且理解了 目前的任务 有时间要求

2. 主动使用了 这个工具
	- 发送 纯文本 

> date


3. 智能体 根据 大模型给出的命令
	- 在终端 使用 date 命令

4. 终端命令 得到 当前时间 
	- 返回智能体

5. 智能体 把时间 告诉大模型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260508-1778210901677) 

6. 最终 
	- 大模型 拿到时间后 
	- 给出最终的 回复文本

### 上下文工程

- 不将 系统时间 
	- 作为 系统人设 
	- 直接 给大模型
- 也不用 
	- 把时间 相关的词汇
	- 都列出来

- 而是要 大模型 
	- 根据需要 去使用 date命令
- 从 提示词工程 演化到 上下文工程 
	- 想办法 控制更多的上下文 
	- 来辅助 大模型演化


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260508-1778246428635) 

- 还想让 进一步 驾驭大模型

### 驾驭工程

- 目前回复结果
	- 有点啰嗦

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260416-1776349205136) 

- 让 大模型 总结的时候 言简意赅

### 继续提要求

- 我想的是

```
把date命令运行的结果直接发给llm后，大模型组织语言，言简意赅，最终回复。
```

- 修改系统人设

```
# 构建系统消息
system_content = '''你惜字如金。可以发送date给我得到当前时间'''
```

- 加上 惜字如金的 描述


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260416-1776349332934) 

- 效果
	- 确实惜字如金

### 新的问题

- 除了系统时间
	- 还想知道 当前目录

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250930-1759203673834) 

- 问题

```
当前可以使用时间关键词匹配的话执行 date 命令，但如果是想问和系统目录相关的，如何让它匹配到 pwd命令呢？
```

### 传统思路

- 判断是否符合目录关键词

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250930-1759203822627) 

- 如果匹配的话
	- 还是加入到系统人设中

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250930-1759203936754) 

- 但是这 不能充分利用
	- 大模型的范化能力
	- Generalization Ability

### 利用范化能力

```
from openai import OpenAI
import subprocess

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1', 
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cb'
)

def show_messages(messages):
    print("==========消息开始==============")
    # 角色到背景色的映射
    role_colors = {
        'system': '\033[41m',    # 红色背景
        'user': '\033[42m',      # 绿色背景
        'assistant': '\033[44m',  # 蓝色背景
        'tool': '\033[45m'    # 紫色背景
    }
    
    for message in messages:
        role = message.get('role')
        color = role_colors.get(role, '')  # 默认无颜色
        print(color, end="")
        print(message, end="")
        print("\033[0m")
    print("==========消息结束==============")

def execute_command(command):
    """执行 shell 命令并返回结果"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=5)
        return result.stdout.strip()
    except Exception as e:
        return f"执行命令失败: {str(e)}"

# 构建系统消息
# 构建系统消息
system_content = '''你惜字如金。可以发送date给我得到当前时间。发送pwd得到当前路径'''

# 初始化消息历史，包含系统提示词
messages = [
    {
        'role': 'system',
        'content': system_content
    }
]

print("欢迎使用智能对话助手！输入'退出'或'q'结束对话。\n")

# 对话循环
while True:
    # 获取用户输入
    user_question = input('请输入您的问题: ')
    
    # 检查是否退出
    if user_question.lower() in ['退出', 'q']:
        print("对话结束，再见！")
        break
    
    # 添加用户消息到历史
    messages.append({
        'role': 'user',
        'content': user_question
    })
    
    try:
        # 发送请求到模型
        response = client.chat.completions.create(
            model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
            messages=messages,
            stream=True
        )
        
        show_messages(messages)
        
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
        
        # 检查助手回复是否包含使用 date 命令的请求
        if 'date' in assistant_reply:
            # 执行 date 命令
            date_result = execute_command('date')
            
            # 将工具结果作为用户消息添加到上下文
            messages.append({
                'role': 'tool',
                'content': f"执行命令: date\n结果: {date_result}"
            })
            
            # 显示更新后的消息历史
            show_messages(messages)
            
            # 再次发送请求，让 LLM 基于时间信息生成回复
            response = client.chat.completions.create(
                model='Qwen/Qwen3-Next-80B-A3B-Instruct',
                messages=messages,
                stream=True
            )
            
            # 显示 LLM 基于时间信息的回复
            print("助手: ", end='', flush=True)
            assistant_reply = ""  # 复用变量，保存最终回复
            for chunk in response:
                if chunk.choices[0].delta.content:
                    print(chunk.choices[0].delta.content, end='', flush=True)
                    assistant_reply += chunk.choices[0].delta.content
            print()
            
            # 添加最终回复到历史
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

### 结果

- 大模型 理解了 含义 
	- 发了pwd 给客户端

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260417-1776384685415) 

- 但是客户端没有执行命令

### 进行修改

```
大模型回复pwd后，但是却没有得到正确执行
```

- 添加命令列表
	- 需要执行的都执行
	- 执行结果 放tools消息
	- 加入上下文
	- 交给大模型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260417-1776384879239) 

- 但是 如果两个命令都执行
	- 应该返回的是 结果列表

### 最终代码

```
from openai import OpenAI
import subprocess
import re

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1', 
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cb'
)

def show_messages(messages):
    print("==========消息开始==============")
    # 角色到背景色的映射
    role_colors = {
        'system': '\033[41m',    # 红色背景
        'user': '\033[42m',      # 绿色背景
        'assistant': '\033[44m',  # 蓝色背景
        'tool': '\033[45m'    # 紫色背景
    }
    
    for message in messages:
        role = message.get('role')
        color = role_colors.get(role, '')  # 默认无颜色
        print(color, end="")
        print(message, end="")
        print("\033[0m")
    print("==========消息结束==============")

def execute_command(command):
    """执行 shell 命令并返回结果"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=5)
        return result.stdout.strip()
    except Exception as e:
        return f"执行命令失败: {str(e)}"

# 构建系统消息
system_content = '''你惜字如金。可以发送date给我得到当前时间。发送pwd得到当前路径'''

# 初始化消息历史，包含系统提示词
messages = [
    {
        'role': 'system',
        'content': system_content
    }
]

print("欢迎使用智能对话助手！输入'退出'或'q'结束对话。\n")

# 对话循环
while True:
    # 获取用户输入
    user_question = input('请输入您的问题: ')
    
    # 检查是否退出
    if user_question.lower() in ['退出', 'q']:
        print("对话结束，再见！")
        break
    
    # 添加用户消息到历史
    messages.append({
        'role': 'user',
        'content': user_question
    })
    
    try:
        # 发送请求到模型
        response = client.chat.completions.create(
            model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
            messages=messages,
            stream=True
        )
        
        show_messages(messages)
        
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
        
        # 检查助手回复是否包含使用命令的请求
        commands = []
        # 使用单词边界匹配，避免路径中的子串被误匹配
        if re.search(r'\bdate\b', assistant_reply):
            commands.append('date')
        if re.search(r'\bpwd\b', assistant_reply):
            commands.append('pwd')
        
        cmd_results = []
        
        for cmd in commands:
            # 执行命令
            cmd_results.append(f"执行命令: {cmd}\n结果: {execute_command(cmd)}")
            
            # 将工具结果添加到上下文
        messages.append({
            'role': 'tool',
            'content': f"执行命令: {cmd}\n结果: {cmd_results}"
        })
        
        # 显示更新后的消息历史
        show_messages(messages)
        
        # 再次发送请求，让 LLM 基于时间信息生成回复
        response = client.chat.completions.create(
            model='Qwen/Qwen3-Next-80B-A3B-Instruct',
            messages=messages,
            stream=True
        )
        
        # 显示 LLM 基于时间信息的回复
        print("助手: ", end='', flush=True)
        assistant_reply = ""  # 复用变量，保存最终回复
        for chunk in response:
            if chunk.choices[0].delta.content:
                print(chunk.choices[0].delta.content, end='', flush=True)
                assistant_reply += chunk.choices[0].delta.content
        print()
        
        # 添加最终回复到历史
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

### 结果

- linux 和 max 都可以查到！

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260508-1778247239355) 

- windows不能查到路径

### windows的问题

- window终端的命令
	- 和 unix-like不同

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260509-1778285338022) 

- 把pwd 换成 cd 
	- 就能在 windows 上 跑通了
- 但是 这是
	- 一个个地 往系统人设上
	- 叠命令啊

- 能否 进一步 
	- 挖掘 大模型的 泛化能力呢？

> Can we leverage the generalization capability of the large language model?

### 总结

- 这次 我们让智能体
	- 知道 日期和时间
	- 甚至 使用 终端工具 查询目录

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250921-1758463156127) 

- 还想 进一步 
	- 挖掘 大模型的 泛化能力
- 该如何做呢？ 🤔
- 下次再说👋