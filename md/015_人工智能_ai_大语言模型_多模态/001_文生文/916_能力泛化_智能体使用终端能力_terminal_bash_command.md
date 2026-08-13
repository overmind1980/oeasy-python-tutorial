---
show: step
version: 1.0
enable_checker: true
---

# 文生图模型调用

## 回忆

- 上次 我们让智能体
	- 知道 日期和时间
	- 甚至 使用 终端工具 查询目录

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4249394/uid1190679-20250921-1758463156127) 

- 还想 进一步 
	- 挖掘 大模型的 泛化能力
- 该如何做呢？ 🤔 

### 原始代码

- 之前 已教会 agent使用
	1. date
	2. pwd

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262387/uid1190679-20260508-1778247239355) 

### generalization

- 如何 泛化到 所有的命令

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20260509-1778285740807) 

### 目标

```
让大模型 能够执行终端命令 并将结果 作为上下文返回
这需要添加 subprocess 模块 来执行命令
并修改系统提示词 让模型知道 它可以使用命令
```

- 新代码 需要明确 终端类型
	- 以下为 linux终端下的命令

```
from openai import OpenAI
import subprocess
import re
import json

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',    
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba'
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
        show_messages(messages=messages)

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

- 可以 用例子里 给了的date命令
	- 查时间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20260509-1778287460207) 

- 为啥能查到？

### 代码分析

- 例子里面有date

```
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

```

- 那例子里没有的呢？

### 泛化能力

- 也可以 用例子里没给的`df -f`
	- 查硬盘容量

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20260509-1778288192537) 

- 查到了 
	- 就 告诉大模型 
	- 作为上下文
- 再让 大模型 组织语言

### 提问

1. 让 大模型 知道
	- 自己能够 linux 命令
	- 并且理解了 目前的任务 查看硬盘

2. 主动使用了 终端工具
	- 发送 纯文本 

> df -f


3. 智能体 根据 大模型给出的命令
	- 在终端 使用 df 命令

4. 终端命令 得到 硬盘信息 
	- 返回智能体

5. 智能体 把时间 告诉大模型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20260509-1778289156683) 

6. 最终 
	- 大模型 拿到时间后 
	- 给出最终的 回复文本

### 演化

- 大模型根据问题 自己决定 
	- 是否需要 执行命令

```
当你需要执行命令时，请使用以下格式：
[COMMAND: 命令内容]
```

1. 如果 需要就发给 智能体执行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20260509-1778288654918) 

2. 执行结果 作为上下文 回传大模型

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20260509-1778288690669) 

3. 大模型 收到 执行结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20260509-1778288722104) 

4. 大模型 自主语言给出最终回复

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

- 回答里 
	- 给出了 当前文件夹信息

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20250925-1758767821803) 

- 突发奇想？

### 产生垃圾

```
vi a.py
```

- 产生了 一个临时文件
	- .a.py.swp

- 大模型能检查到吗？

### 跑起来

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4218410/uid1190679-20260509-1778289582752) 

- 大模型 竟然建议我 
	- 删除隐藏文件？！

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