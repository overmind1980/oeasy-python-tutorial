---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 嵌套 embedded

## 回忆

- 上次 压缩了 对话历史
	- 甚至 可以 更新
		- 大模型 人设 soul.md
		- 用户 人设 user.md
	- 只要 控制好 
		- 大模型 输出格式 就可以了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778051140714) 

- 这种 控制 方式
	- 就像 笼头、缰绳、马鞍
	- 让大模型 按照我们的意图 输出
- 输出格式 还能 怎么控制 吗？？🤔

### 回到最初

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
            'content': '你好'
        }
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content, end='', flush=True)

```

- 给出 修改方向

```
我想要控制输出格式，输出一个字典，首先是一个回复心情，两个选项:happy,sad.
```

### 控制输出格式

```
from openai import OpenAI
import json

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = "ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba" # ModelScope Token
)

def generate_response_with_mood(user_input):
    """生成包含心情状态的回复"""
    system_prompt = "你是一个有情感的助手，会根据对话内容表达心情。每次回复时，请先分析自己的心情，只能是happy或sad，然后给出回复内容。输出格式必须是JSON字典，包含两个键：mood（值为happy或sad）和content（值为回复内容）。"
    
    response = client.chat.completions.create(
        model='Qwen/Qwen3-Next-80B-A3B-Instruct',
        messages=[
            {
                'role': 'system',
                'content': system_prompt
            },
            {
                'role': 'user',
                'content': user_input
            }
        ],
        temperature=0.7
    )
    
    return response.choices[0].message.content.strip()

def parse_response(response_text):
    """解析AI回复为字典"""
    try:
        # 尝试直接解析JSON
        result = json.loads(response_text)
        # 验证格式
        if isinstance(result, dict) and 'mood' in result and 'content' in result:
            if result['mood'] in ['happy', 'sad']:
                return result
    except json.JSONDecodeError:
        pass
    
    # 如果解析失败，返回默认格式
    return {
        'mood': 'happy',
        'content': response_text
    }

def main():
    print("欢迎使用心情助手！输入'退出'结束对话。")
    
    while True:
        user_input = input("你: ")
        
        if user_input.lower() in ['退出', 'q']:
            print("对话结束，再见！")
            break
        
        try:
            # 生成包含心情的回复
            response_text = generate_response_with_mood(user_input)
            # 解析为字典
            result = parse_response(response_text)
            # 输出结果
            print(f"助手: {result['content']}")
            print(f"心情: {result['mood']}")
            print(f"完整输出: {json.dumps(result, ensure_ascii=False)}")
            print()
        except Exception as e:
            print(f"发生错误: {e}")
            print()

if __name__ == "__main__":
    main()
```

### 运行效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260419-1776590242790) 

- 再提要求

```
我想在输出的时候
	- 先 从字典中得到 心情 
		- 对应emoji 进行输出
	- 然后 
		- 根据 心情设置 回复背景色
			- happy 绿
			- sad 红
		- 然后再输出 具体文本
```

### 修改效果

```
from openai import OpenAI
import json

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = "ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba"
)

MOOD_EMOJI = {
    'happy': '😊',
    'sad': '😢'
}

MOOD_BG_COLOR = {
    'happy': '\033[42;30m',
    'sad': '\033[41m'
}

def generate_response_with_mood(user_input):
    """生成包含心情状态的回复"""
    system_prompt = "你是一个有情感的助手，会根据对话内容表达心情。每次回复时，请先分析自己的心情，只能是happy或sad，然后给出回复内容。输出格式必须是JSON字典，包含两个键：mood（值为happy或sad）和content（值为回复内容）。"

    response = client.chat.completions.create(
        model='Qwen/Qwen3-Next-80B-A3B-Instruct',
        messages=[
            {
                'role': 'system',
                'content': system_prompt
            },
            {
                'role': 'user',
                'content': user_input
            }
        ],
        temperature=0.7
    )

    return response.choices[0].message.content.strip()

def parse_response(response_text):
    """解析AI回复为字典"""
    try:
        result = json.loads(response_text)
        if isinstance(result, dict) and 'mood' in result and 'content' in result:
            if result['mood'] in ['happy', 'sad']:
                return result
    except json.JSONDecodeError:
        pass

    return {
        'mood': 'happy',
        'content': response_text
    }

def output_with_style(result):
    """根据心情设置输出样式"""
    mood = result['mood']
    content = result['content']
    emoji = MOOD_EMOJI.get(mood, '😊')
    bg_color = MOOD_BG_COLOR.get(mood, '\033[42m')

    print(f"\n{emoji} 心情: {mood}\n")
    print(f"{bg_color}{content}\033[0m\n")

def main():
    print("欢迎使用心情助手！输入'退出'结束对话。")

    while True:
        user_input = input("你: ")

        if user_input.lower() in ['退出', 'q']:
            print("对话结束，再见！")
            break

        try:
            response_text = generate_response_with_mood(user_input)
            result = parse_response(response_text)
            output_with_style(result)
        except Exception as e:
            print(f"发生错误: {e}\n")

if __name__ == "__main__":
    main()
```

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260419-1776590486491)

- 这类 回复格式 的 分类设置
	- 应该如何 放进 人格框架呢？

### 人格框架

- https://soul-protocol.com/

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260419-1776590624121) 

- system.md 包含
	- 运行 底层规则 执行环境
	- 能力声明 
		- 可做项
		- 不可做项
	- 工具调用 策略
	- 会话权限
		1. 私有 
		2. 共享 
		3. 公开
	- `行为规范`
	- 安全限制
	- 能力模块决定运行模式
	- 是实现跨大模型通用兼容的核心

### system.md

- 编写system.md
	- 并尝试 动态加载 

```
你是一个有情感的助手，会根据对话内容表达心情。每次回复时，请先分析自己的心情，只能是happy或sad，然后给出回复内容。输出格式必须是JSON字典，包含两个键：mood（值为happy或sad）和content（值为回复内容）。
```

- agent.py

```
from openai import OpenAI
import json

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = "ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba"
)

MOOD_EMOJI = {
    'happy': '😊',
    'sad': '😢'
}

MOOD_BG_COLOR = {
    'happy': '\033[42;30m',
    'sad': '\033[41m'
}

def load_system_prompt(filename='system.md'):
    """从文件加载系统提示词"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return f.read().strip()
    except FileNotFoundError:
        return "你是一个有情感的助手，会根据对话内容表达心情。每次回复时，请先分析自己的心情，只能是happy或sad，然后给出回复内容。输出格式必须是JSON字典，包含两个键：mood（值为happy或sad）和content（值为回复内容）。"

def generate_response_with_mood(user_input):
    """生成包含心情状态的回复"""
    system_prompt = load_system_prompt()

    response = client.chat.completions.create(
        model='Qwen/Qwen3-Next-80B-A3B-Instruct',
        messages=[
            {
                'role': 'system',
                'content': system_prompt
            },
            {
                'role': 'user',
                'content': user_input
            }
        ],
        temperature=0.7
    )

    return response.choices[0].message.content.strip()

def parse_response(response_text):
    """解析AI回复为字典"""
    try:
        result = json.loads(response_text)
        if isinstance(result, dict) and 'mood' in result and 'content' in result:
            if result['mood'] in ['happy', 'sad']:
                return result
    except json.JSONDecodeError:
        pass

    return {
        'mood': 'happy',
        'content': response_text
    }

def output_with_style(result):
    """根据心情设置输出样式"""
    mood = result['mood']
    content = result['content']
    emoji = MOOD_EMOJI.get(mood, '😊')
    bg_color = MOOD_BG_COLOR.get(mood, '\033[42m')

    print(f"\n{emoji} 心情: {mood}\n")
    print(f"{bg_color}{content}\033[0m\n")

def main():
    print("欢迎使用心情助手！输入'退出'结束对话。")

    while True:
        user_input = input("你: ")

        if user_input.lower() in ['退出', 'q']:
            print("对话结束，再见！")
            break

        try:
            response_text = generate_response_with_mood(user_input)
            result = parse_response(response_text)
            output_with_style(result)
        except Exception as e:
            print(f"发生错误: {e}\n")

if __name__ == "__main__":
    main()
```

### 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260419-1776606368709) 

- 在这里 将心情 解析成emoji
	- 可以想像 
	- 在 web端的 gif动图效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260507-1778124176826) 

- 还可以 演化 吗？

### 进一步

- 做成 3d的 模型动画效果
	- 可以 配合 
	1. 音色 
	2. 唇形同步

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260507-1778124913746) 

### 驾驭工程

- 提示词工程 → 上下文工程 → 驾驭工程
	- Prompt Engineering → Context Engineering → Harness Engineering
	- 从教模型怎么听话 → 给模型喂什么信息 → 给模型套规矩缰绳
	- 从临时写 prompt → 动态拼上下文 → 文件固化永久规则
	- 从靠运气出结果 → 靠信息精准 → 靠机制稳定可控

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260506-1778051602079) 

| 对比维度 | 提示词工程 | 上下文工程 | 驾驭工程 Harness |
| :--- | :--- | :--- | :--- |
| 核心本质 | 打磨单次话术指令 | 管理窗口全量输入信息 | 文件固化规则，全链路行为管控 |
| 人类角色 | 文案编写者 | 信息调度员 | 系统架构设计者 |
| 解决核心问题 | 把指令说清楚 | 喂对资料、管好窗口容量 | 约束边界、流程、格式，不跑偏 |
| 天生局限 | 只做单次对话，无约束 | 只管输入，不管行为规矩 | 需人工维护规则约束文件 |
| 演进趋势 | 升级为全局信息管理 | 升级为全流程驾驭约束 | 下一步：规则自进化、AI自治系统 |

### 总结

- 这次我们 了解了 
	- system.md 系统设置
	- 可以设置 输出格式
	- 还可以 设置 其他系统信息 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260419-1776608569414) 

- 但是 智能体 无法知道 
	- 当前 系统时间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5177172/uid1190679-20260507-1778125906148) 

- 怎么办呢？🤔
- 下次再说 👋
