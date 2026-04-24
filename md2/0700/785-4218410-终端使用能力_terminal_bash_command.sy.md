---
show: step
version: 1.0
enable_checker: true
---

# 文生图模型调用

## 回忆

- 上次我们让智能体
	- 知道 日期和时间
	- 甚至 使用起 终端工具

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250921-1758463156127) 

- 如何让 智能体 
	- 更好地使用 终端工具 呢？🤔

### 原始代码

```
from openai import OpenAI

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',    api_key='ms-d1466c43-1d17-4b0a-9198-4d6eb9b1c40c', # ModelScope Token
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

- 如何让 大模型 用子进程方式
	- 查询 到当前时间？

### 目标

```
让大模型 能够执行终端命令 并将结果 作为上下文返回
这需要添加 subprocess 模块 来执行命令
并修改系统提示词 让模型知道 它可以使用命令
```

- 新代码

```
from openai import OpenAI
import subprocess
import re
import json

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',    api_key='ms-d1466c43-1d17-4b0a-9198-4d6eb9b1c40c', # ModelScope Token
)

def execute_command(command):
    """执行终端命令并返回结果"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=30)
        if result.returncode == 0:
            return f"命令执行成功:\n{result.stdout}"
        else:
            return f"命令执行失败 (返回码: {result.returncode}):\n{result.stderr}"
    except subprocess.TimeoutExpired:
        return "命令执行超时 (30秒)"
    except Exception as e:
        return f"命令执行出错: {str(e)}"

def parse_and_execute_commands(text):
    """解析文本中的命令标记并执行"""
    # 查找 [COMMAND: xxx] 格式的命令
    command_pattern = r'\[COMMAND:\s*([^\]]+)\]'
    commands = re.findall(command_pattern, text)
    
    results = []
    for cmd in commands:
        cmd = cmd.strip()
        print(f"\n执行命令: {cmd}")
        result = execute_command(cmd)
        results.append(f"命令: {cmd}\n结果: {result}")
        print(f"结果: {result}")
    
    return results

def chat_with_commands():
    """支持命令执行的对话循环"""
    messages = [
        {
            'role': 'system',
            'content': '''你是一个有用的助手，可以执行终端命令来获取系统信息。
            
当你需要执行命令时，请使用以下格式：
[COMMAND: 命令内容]

例如：
- [COMMAND: date] - 获取当前时间
- [COMMAND: ls -la] - 列出文件
- [COMMAND: pwd] - 获取当前目录
- [COMMAND: whoami] - 获取当前用户
- [COMMAND: uname -a] - 获取系统信息

命令会被自动执行，结果会作为上下文提供给你。请根据命令结果给出更准确的回答。'''
        }
    ]
    
    while True:
        user_input = input("\n用户: ")
        if user_input.lower() in ['quit', 'exit', '退出']:
            break
            
        messages.append({
            'role': 'user',
            'content': user_input
        })
        
        print("\n助手: ", end='', flush=True)
        
        response = client.chat.completions.create(
            model='Qwen/Qwen3-Next-80B-A3B-Instruct',
            messages=messages,
            stream=True
        )
        
        assistant_response = ""
        for chunk in response:
            if chunk.choices[0].delta.content:
                content = chunk.choices[0].delta.content
                print(content, end='', flush=True)
                assistant_response += content
        
        # 检查回复中是否包含命令
        command_results = parse_and_execute_commands(assistant_response)
        
        # 如果有命令执行结果，将其添加到上下文中
        if command_results:
            context_message = "\n\n命令执行结果:\n" + "\n\n".join(command_results)
            messages.append({
                'role': 'assistant',
                'content': assistant_response
            })
            messages.append({
                'role': 'user',
                'content': f"以下是命令执行结果，请根据这些信息继续回答：{context_message}"
            })
            
            print("\n\n基于命令结果的补充回答: ", end='', flush=True)
            
            # 基于命令结果生成补充回答
            response = client.chat.completions.create(
                model='Qwen/Qwen3-Next-80B-A3B-Instruct',
                messages=messages,
                stream=True
            )
            
            final_response = ""
            for chunk in response:
                if chunk.choices[0].delta.content:
                    content = chunk.choices[0].delta.content
                    print(content, end='', flush=True)
                    final_response += content
            
            messages.append({
                'role': 'assistant',
                'content': final_response
            })
        else:
            messages.append({
                'role': 'assistant',
                'content': assistant_response
            })

if __name__ == "__main__":
    print("智能助手已启动！可以使用终端命令获取系统信息。")
    print("输入 'quit' 或 'exit' 退出程序。")
    chat_with_commands()
```


### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250921-1758463404600) 

- 代码是如何实现的呢？

### 代码分析

- 大模型的 系统设定是
	- 如果发现需要命令
	- 就执行以下命令
- 大模型从此 明确知道 
	- 自己可以使用命令

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758766896422) 


- 并给出命令 例子	
	- 明确 系统为 类unix
	- 可以 充分利用 模型推理能力
	- 生成命令 获得信息 

### 提问

- 检查是否需要执行命令
	1. 如果 需要就去执行
	2. 执行结果 作为上下文 交给大模型
	3. 大模型 收到 执行结果 
	4. 大模型 给出最终回复

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758767040388) 

### 具体例子

- 把上下文输出

```
from openai import OpenAI
import subprocess
import re
import json

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',    api_key='ms-d1466c43-1d17-4b0a-9198-4d6eb9b1c40c', # ModelScope Token
)

def execute_command(command):
    """执行终端命令并返回结果"""
    try:
        result = subprocess.run(command, shell=True, capture_output=True, text=True, timeout=30)
        if result.returncode == 0:
            return f"命令执行成功:\n{result.stdout}"
        else:
            return f"命令执行失败 (返回码: {result.returncode}):\n{result.stderr}"
    except subprocess.TimeoutExpired:
        return "命令执行超时 (30秒)"
    except Exception as e:
        return f"命令执行出错: {str(e)}"

def parse_and_execute_commands(text):
    """解析文本中的命令标记并执行"""
    # 查找 [COMMAND: xxx] 格式的命令
    command_pattern = r'\[COMMAND:\s*([^\]]+)\]'
    commands = re.findall(command_pattern, text)

    results = []
    for cmd in commands:
        cmd = cmd.strip()
        print(f"\n执行命令: {cmd}")
        result = execute_command(cmd)
        results.append(f"命令: {cmd}\n结果: {result}")
        print(f"结果: {result}")

    return results

def chat_with_commands():
    """支持命令执行的对话循环"""
    messages = [
        {
            'role': 'system',
            'content': '''你是一个有用的助手，可以执行终端命令来获取系统信息。

当你需要执行命令时，请使用以下格式：
[COMMAND: 命令内容]

例如：
- [COMMAND: date] - 获取当前时间
- [COMMAND: ls -la] - 列出文件
- [COMMAND: pwd] - 获取当前目录
- [COMMAND: whoami] - 获取当前用户
- [COMMAND: uname -a] - 获取系统信息

命令会被自动执行，结果会作为上下文提供给你。请根据命令结果给出更准确的回答。'''
        }
    ]

    while True:
        user_input = input("\n用户: ")
        if user_input.lower() in ['quit', 'exit', '退出']:
            break

        messages.append({
            'role': 'user',
            'content': user_input
        })

        print("\n助手: ", end='', flush=True)
        print("=====Message=====")
        print(messages)


        response = client.chat.completions.create(
            model='Qwen/Qwen3-Next-80B-A3B-Instruct',
            messages=messages,
            stream=True
        )

        assistant_response = ""
        for chunk in response:
            if chunk.choices[0].delta.content:
                content = chunk.choices[0].delta.content
                print(content, end='', flush=True)
                assistant_response += content

        # 检查回复中是否包含命令
        command_results = parse_and_execute_commands(assistant_response)

        # 如果有命令执行结果，将其添加到上下文中
        if command_results:
            context_message = "\n\n命令执行结果:\n" + "\n\n".join(command_results)
            messages.append({
                'role': 'assistant',
                'content': assistant_response
            })
            messages.append({
                'role': 'user',
                'content': f"以下是命令执行结果，请根据这些信息继续回答：{context_message}"
            })

            print("\n\n基于命令结果的补充回答: ", end='', flush=True)

            # 基于命令结果生成补充回答
            response = client.chat.completions.create(
                model='Qwen/Qwen3-Next-80B-A3B-Instruct',
                messages=messages,
                stream=True
            )

            final_response = ""
            for chunk in response:
                if chunk.choices[0].delta.content:
                    content = chunk.choices[0].delta.content
                    print(content, end='', flush=True)
                    final_response += content

            messages.append({
                'role': 'assistant',
                'content': final_response
            })
        else:
            messages.append({
                'role': 'assistant',
                'content': assistant_response
            })

if __name__ == "__main__":
    print("智能助手已启动！可以使用终端命令获取系统信息。")
    print("输入 'quit' 或 'exit' 退出程序。")
    chat_with_commands()
```

### 输出结果


- 上下文包括
	1. 大模型系统设定
	2. 用户文 几点啦？
	3. 大模型使用工具
	4. 用户告知大模型时间
- 大模型根据这些
	- 得到当前时间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758767343275) 

- 还可以使用什么别的系统命令吗？

### 再次提问

- 当前目录下有些什么？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758767608091) 

- 过程
	1. 系统设定
	2. python 调用了大模型
	3. 大模型使用了 ls -al
	4. 用户返回了目录结构
	5. 大模型综合上下文后回答

### 结果

- 回答里面给出了当前文件夹中的文件

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758767821803) 

- 大模型竟然建议我删除隐藏文件？！

### 震惊🤯

- 例子里面 并没有删除功能

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758768032491) 

- 他能删除吗？

### 确认

- 我确认之后
	- 大模型真的帮我删除了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758768134879) 

- 删除之后 还确认

```
ls -la 
```

- 我感到震惊！

### 逻辑乱了

- 究竟 
	1. 是在系统中调用了大模型？
	2. 还是在 模型中执行了系统命令？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758768208044) 

- 还是两者都有？

### 两者都有

- 大模型根据
	1. system的中例子 
	2. 训练数据中 关于shell命令
	3. 推理得到 需要执行的命令
	4. 运行命令 然后进行反馈
	5. 根据反馈 再进行回答

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758767947336) 

- 我们再试试

### 关于系统

- 新建会话

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758768948746) 

- 大模型运行了命令

```
uname -a
```

### 最终回复

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758769007885) 

- 并提出建议命令

### 执行

- 我说执行这个命令

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758769058908) 

- 得到了新的上下文

### 新回答

- 根据新的上下文
	- 大模型给出了新的回答！

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758769111119) 

- 以及新的行动建议！👍

### 总结

- 这次我们让智能体使用起终端工具
	- 由于 大模型能力 很强
	- 用起来得心应手

- 我有一个大胆的想法：
	- 以后 就只靠说话 
	- 就控制系统文件操作了？🤔

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758769378738) 

- 可行吗？🤔
- 下次再说👋