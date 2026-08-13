---
show: step
version: 1.0
enable_checker: true
---

# 文生图模型调用

## 回忆

- 上次我们 了解了 
	- system.md 系统设置
	- 可以设置 输出格式
	- 还可以 设置 其他系统信息 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260419-1776608569414) 

- 但是 智能体 无法知道 
	- 当前 系统时间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260507-1778125906148) 

- 怎么办呢？🤔

### 原始代码

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = 'ms-5a818c2a-7605-41bd-9183-416f78373fda'
)

response = client.chat.completions.create(
    model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
    messages=[
        {
            'role': 'system',
            'content': '你是智能助手'
        },
        {
            'role': 'user',
            'content': input("我:")
        }
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content, end='', flush=True)

```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250921-1758454972381) 

### 目标

- 如何让大模型查询到当前时间？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250921-1758442241005) 

### 查询时间


```
import time
time.asctime()
```

- 可以在shell运行命令
	- 得到日期时间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250921-1758459482932) 

- 可以一上来
	- 就把 日期时间 
	- 作为 系统人设 上下文
	- 交代给 大模型

### 系统人设

- 原来
	- 大模型设置系统人设是

> 你要严格按照json格式输出，两个字段：表情、内容

> 你是孙悟空， 言简意赅，我是猪八戒

> 你是猫

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250929-1759111346970) 

- 现在

> 你要 知道 当前系统时间 是 XXX  

### 交代时间日期

```
from openai import OpenAI
import time

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = 'ms-5a818c2a-7605-41bd-9183-416f78373fda'
)

response = client.chat.completions.create(
    model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
    messages=[
        {
            'role': 'system',
            'content': '你是智能助手,当前时间是' + time.asctime() 
        },
        {
            'role': 'user',
            'content': input("我:")
        }
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content, end='', flush=True)

```

- 确实可以得到
	1. 日期
	2. 时间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250921-1758459860130) 

- 但是 有两个问题
	1. 环境上下文 太多了
	2. 时间 固定在 会话开始 ，不会变

### 条件

- 根据问题判断
	- 如果包含
		1. 几点
		2. 现在
		3. 几号
		4. 星期几
	- 就调用time.asctime()
		- 并且给到上下文

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250929-1759155737882) 

### 代码

```
from openai import OpenAI
import time

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

# 获取用户输入
user_question = input('请输入您的问题: ')

# 检测是否包含时间相关关键词
time_keywords = ['几点', '现在', '几号', '星期几']
has_time_question = any(keyword in user_question for keyword in time_keywords)

# 构建系统消息
system_content = 'You are a helpful assistant.'
if has_time_question:
    current_time = time.asctime()
    system_content += f' 当前时间是: {current_time}'

messages = [
        {
            'role': 'system',
            'content': system_content
        },
        {
            'role': 'user',
            'content': user_question
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

### 运行效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20260416-1776345995585) 

- 除了使用time.asctime()

```
date
```

- shell中的 date命令
	- 也可以得到当前时间、日期

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250921-1758460857942) 

- 可以 在python里面 
	- 用os.system 调用shell命令
	- 替换原来 的 time.asctime() 吗？

### 尝试调用

```
import os
os.system('date')
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250921-1758461063922) 

- 可以获得屏幕输出

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250921-1758461137508) 

- 还有更好的方式吗？

### 更好的方式

| 功能 | os.system | subprocess.run |
| :--- | :--- | :--- |
| 获取输出 | ❌ 不能<br>无返回 | ✅ 支持<br>stdout/stderr |
| 超时控制 | ❌ 不支持 | ✅ 支持 timeout |
| 错误处理 | ❌ 极弱 | ✅ 完善 |
| 安全性 | ❌ 低 | ✅ 高 |
| 适用场景 | 简单运行<br>不看结果 | AI命令执行<br>需要返回结果 |

- 使用 子进程模式
	- subprocess.run
	- 效果更好

```
import subprocess
result = subprocess.run(['date'], capture_output=True, text=True)
print(result.stdout)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250921-1758461489448) 

- 可以 用子进程模式 
	- 替换原来的 os.system 吗？

### 输出上下文

```
from openai import OpenAI
import subprocess

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

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = 'ms-5a818c2a-7605-41bd-9183-416f78373fda'
)

# 获取用户输入
user_question = input('请输入您的问题: ')

# 检测是否包含时间相关关键词
time_keywords = ['几点', '现在', '几号', '星期几']
has_time_question = any(keyword in user_question for keyword in time_keywords)

# 构建系统消息
system_content = 'You are a helpful assistant.'
if has_time_question:
    try:
        # 使用subprocess调用系统date命令获取时间
        result = subprocess.run(['date'], capture_output=True, text=True, timeout=5)
        if result.returncode == 0:
            current_time = result.stdout.strip()
        else:
            current_time = "无法获取当前时间"
    except (subprocess.TimeoutExpired, subprocess.SubprocessError, FileNotFoundError):
        current_time = "无法获取当前时间"
    system_content += f' 当前时间是: {current_time}'

messages = [
        {
            'role': 'system',
            'content': system_content
        },
        {
            'role': 'user',
            'content': user_question
        }
    ]

show_messages(messages)
response = client.chat.completions.create(
    model='Qwen/Qwen3-Next-80B-A3B-Instruct', # ModelScope Model-Id
    messages=messages,
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content, end='', flush=True)


```

### 上下文效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250930-1759203503518) 

- 由于用户提示词 匹配了
	- 时间相关词
	- 于是 当前时间被 翻到了系统人设中

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250921-1758461303740) 

- 不过 是否加载 系统时间 
	- 取决于 是否有 时间关键词 
	- 关键词 还是人 设置的
	- 而不是 大模型 决定的 

### 总结

- 这次 我们让智能体
	- 知道 日期和时间
	- 甚至 使用 终端命令 date

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250921-1758463156127) 

- 不过 什么 都往 系统人设里 放
	- 系统人设 很快就堆满了
- 能够 按`需`获取 吗？🤔
- 下次再说👋