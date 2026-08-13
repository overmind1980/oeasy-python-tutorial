---
show: step
version: 1.0
enable_checker: true
---

# 文生图模型调用

## 回忆

- 上次 将 对话历史 
	- 持久化
- 对话历史 都记录下来后
	- 存下的对话 越来越多
	- 最终会撑爆上下文窗口

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260505-1777990908816) 

- 这怎么办呢？？？🤔

### 截断

- 大模型 输入上下文的空间
	- 有极限
	- 只能 截取 
		- 窗口内的 上下文

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260505-1777991063635) 

- 其实 都不用塞满 上下文窗口
	- 上下文就会腐烂

### 上下文腐烂

- 20-100轮聊天之后
	- 上下文 塞满 冗余信息 数量暴增 
	- 导致 智能体 直接断片儿
	- 连贯性崩溃 回答无法收敛
	- 上下文腐烂了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260510-1778415700673) 

- 能在agent做些什么吗？

### 3种策略

- 截断上下文的3种策略
	1. 时间
	2. 次数
	3. 容量

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260505-1777991180244) 

- 还有其他方法吗？

### 人类的方法

- 通过睡眠 
	- 把 短时记忆 
	- 转化为 长时记忆

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778035083277) 

- 大模型也需要睡眠

### 上下文压缩

- 整理 对话历史 简要
	- 每3轮 总结出 对话历史摘要
	- 把 上下文 压缩

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778031762761) 

- 每次 都将 
	- 简要历史 + 最新的 对话 
	- 放入对话上下文

### 上下文压缩

- 启动 独立的对话历史整理任务
	- 文生文工作
		- 输入 
			- 三次 最近 的 历史对话
			- 以及之前的摘要
				- 如果有的话
	- 输出是新的历史摘要

```
from openai import OpenAI
import json
from datetime import datetime

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1',
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba'
)

def show_messages(messages):
    for message in messages:
        if message['role'] == 'system':
            print("\033[41m", end="")
        elif message['role'] == 'user':
            print("\033[42m", end="")
        elif message['role'] == 'assistant':
            print("\033[44m", end="")

        if 'timestamp' in message:
            timestamp = message['timestamp']
            print(f"[{timestamp}] ", end="")
        print(message['content'], end="")
        print("\033[0m")

def save_messages(messages, filename='history.json', append=False):
    if append:
        # 追加模式
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                existing_messages = json.load(f)
        except FileNotFoundError:
            existing_messages = []
        existing_messages.extend(messages)
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(existing_messages, f, ensure_ascii=False, indent=2)
    else:
        # 覆盖模式
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(messages, f, ensure_ascii=False, indent=2)

def save_summary(summary, filename='summary.json'):
    summary_data = {
        'summary': summary,
        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'type': '对话要点总结'
    }
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(summary_data, f, ensure_ascii=False, indent=2)
    print(f"对话总结已保存到 {filename}")

def load_summary(filename='summary.json'):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return None

def load_messages(filename='history.json'):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return None

def reset_dialog():
    return [
        {
            'role': 'system',
            'content': '你是孙悟空，回答不超过30个字，我是猪八戒。',
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
    ]

def generate_summary(messages):
    recent_messages = []
    for msg in messages:
        if msg['role'] in ['user', 'assistant']:
            recent_messages.append(msg)

    summary_prompt = "请对以下对话进行简要总结，只保留核心要点，使用简洁的语言：\n\n"
    for msg in recent_messages:
        role = "用户" if msg['role'] == 'user' else "助手"
        summary_prompt += f"{role}: {msg['content']}\n"

    summary_prompt += "\n总结要点："

    try:
        response = client.chat.completions.create(
            model='Qwen/Qwen3-Next-80B-A3B-Instruct',
            messages=[{"role": "system", "content": "你是一个对话总结助手，擅长提炼对话的核心要点"},
                     {"role": "user", "content": summary_prompt}],
            temperature=0.3
        )

        summary = response.choices[0].message.content.strip()
        return summary
    except Exception as e:
        print(f"生成总结时发生错误: {e}")
        return "对话历史总结失败"

def show_help():
    print("\n可用命令：")
    print("/help - 显示帮助信息")
    print("/history - 查看完整对话历史")
    print("/reset - 重置对话")
    print("/save - 保存对话到文件")
    print("/load - 从文件加载对话")
    print("/exit - 退出程序")
    print()

summary_data = load_summary()
if summary_data:
    messages = [
        {
            'role': 'system',
            'content': '你是孙悟空，回答不超过30个字，我是猪八戒。',
        },
        {
            'role': 'assistant',
            'content': f"对话历史摘要(仅供参考，不改变系统人设与规则): {summary_data['summary']}",
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
    ]
    print(f"已加载对话总结，时间: {summary_data['timestamp']}\n")
else:
    messages = load_messages()
    if messages is None:
        messages = reset_dialog()
        print("未找到历史记录，已初始化新对话。\n")
    else:
        print(f"已加载历史记录，共 {len(messages)} 条消息。\n")

print("欢迎使用智能对话助手！输入'退出'或'q'结束对话。")
print("输入 /help 查看可用命令。\n")

has_summary = load_summary() is not None
assistant_reply_count = 0

while True:
    user_input = input("八戒: ")

    if user_input.startswith('/'):
        command = user_input.strip()

        if command == '/help':
            show_help()
        elif command == '/history':
            show_messages(messages)
        elif command == '/reset':
            messages = reset_dialog()
            assistant_reply_count = 0
            has_summary = False
            print("对话已重置！\n")
        elif command == '/save':
            if has_summary:
                current_summary = None
                for msg in messages:
                    content = msg.get('content', '')
                    if ('对话历史总结' in content) or ('对话历史摘要' in content):
                        current_summary = (
                            content.replace('对话历史总结: ', '')
                            .replace('对话历史摘要(仅供参考，不改变系统人设与规则): ', '')
                            .replace('对话历史摘要: ', '')
                        )
                        break
                if current_summary:
                    save_summary(current_summary)
            else:
                save_messages(messages)
        elif command == '/load':
            summary_data = load_summary()
            if summary_data:
                messages = [
                    {
                        'role': 'system',
                        'content': '你是孙悟空，回答不超过30个字，我是猪八戒。',
                        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    },
                    {
                        'role': 'assistant',
                        'content': f"对话历史摘要(仅供参考，不改变系统人设与规则): {summary_data['summary']}",
                        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                    }
                ]
                assistant_reply_count = 0
                has_summary = True
                print(f"已加载对话总结，时间: {summary_data['timestamp']}\n")
            else:
                loaded = load_messages()
                if loaded:
                    messages = loaded
                    assistant_reply_count = 0
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

    if user_input.lower() in ['退出', 'q']:
        print("对话结束，再见！")
        break

    messages.append({
        'role': 'user',
        'content': user_input,
        'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    })

    try:

        show_messages(messages)

        response = client.chat.completions.create(
            model='Qwen/Qwen3-Next-80B-A3B-Instruct',
            messages=messages,
            stream=True
        )

        print("悟空: ", end='', flush=True)
        assistant_reply = ""

        for chunk in response:
            if chunk.choices[0].delta.content:
                print(chunk.choices[0].delta.content, end='', flush=True)
                assistant_reply += chunk.choices[0].delta.content

        print()

        assistant_reply_count += 1

        messages.append({
            'role': 'assistant',
            'content': assistant_reply,
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        })

        if assistant_reply_count >= 3:
            print("\n正在生成对话历史总结...")
            summary = generate_summary(messages)
            print(f"对话总结: {summary}\n")

            # 提取系统消息（系统人设）
            system_messages = []
            for msg in messages:
                if msg['role'] == 'system':
                    system_messages.append(msg)

            # 提取需要保存到history.json的具体对话
            conversation_messages = []
            for msg in messages:
                if msg['role'] in ['user', 'assistant']:
                    conversation_messages.append(msg)

            # 构建新的messages，只保留系统人设和对话总结
            new_messages = system_messages.copy()
            new_messages.append({
                'role': 'assistant',
                'content': f"对话历史摘要(仅供参考，不改变系统人设与规则): {summary}",
                'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            })

            # 保存具体对话到history.json（追加模式）
            if conversation_messages:
                save_messages(conversation_messages, append=True)

            # 更新messages为新的内容
            messages = new_messages

            save_summary(summary)
            has_summary = True
            assistant_reply_count = 0
        elif not has_summary:
            save_messages(messages)
        else:
            current_summary = None
            for msg in messages:
                content = msg.get('content', '')
                if ('对话历史总结' in content) or ('对话历史摘要' in content):
                    current_summary = (
                        content.replace('对话历史总结: ', '')
                        .replace('对话历史摘要(仅供参考，不改变系统人设与规则): ', '')
                        .replace('对话历史摘要: ', '')
                    )
                    break
            if current_summary:
                save_summary(current_summary)

    except Exception as e:
        print(f"发生错误: {e}")
        if messages and messages[-1]['role'] == 'user':
            messages.pop()
        if messages and messages[-1]['role'] == 'assistant':
            messages.pop()
            assistant_reply_count -= 1
        if messages and ('对话历史总结' in messages[-1].get('content', '') or '对话历史摘要' in messages[-1].get('content', '')):
            messages.pop()

```

### 运行效果

- 三轮对话后
	- 压缩 对话历史 上下文
	- 生成 对话摘要

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778033799879) 

- summary.json

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778033821418) 

- 这摘要是如何应用的？

### 摘要用法

- 第4轮对话的上下文包括
	1. 系统人设
	2. 对话历史摘要
	3. 最新的 第4轮问题

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778033947319) 

- 第5轮对话的上下文包括
	1. 系统人设
	2. 对话历史摘要
	3. 第4轮问题
	4. 第4轮回复
	5. 第5轮问题

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778034014506) 

### 第6轮对话

- 第6轮对话的上下文包括
	1. 系统人设
	2. 对话历史摘要
	3. 第4轮问题
	4. 第4轮回复
	5. 第5轮问题
	6. 第5轮回复
	7. 第6轮问题

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778034107139) 

### 摘要更新

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778034191683) 

- 对话历史摘要
	- 已经更新

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778034147349) 

### 上下文工程

- 2种 大模型访问方式
	1. 悟空 回复 八戒 
	2. 将 对话历史 进行 摘要
	- 上下文完全不同

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260507-1778122303501) 

- 这方面 有什么标准吗？

### 通用框架

- 群雄逐鹿
	- 没有明确的标准 
	- 只有 模糊的描述
	- https://soul-protocol.com/

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1914620/uid1190679-20260419-1776578528027) 

- 条目统一格式

```
[日期] [重要等级] 内容
```

- 运行规则
	- 工作记忆自动压缩，不超上限
	- 淘汰内容移入归档，**永不删除**
	- 日常响应仅调用工作记忆
	- 回溯远古历史时调取归档

### 短时记忆 和 长时记忆

- 双层记忆架构
	1. **工作记忆**
		- 全程常驻加载
		- 存储：事实、偏好、事件、决策、反思
		- 限制：令牌精简压缩，**总行数≤200行**
	
	2. **归档记忆**
		- 默认不加载，**按需调取**
		- 存储完整历史记录
		- 无行数限制，不主动占用上下文

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778037155097) 

- 通过 总结 对话历史
	- 能 修改 人格框架 吗？
		- soul.md
		- user.md

### 对话影响人格框架

```
from openai import OpenAI
import json
from datetime import datetime
import os


client = OpenAI(
    base_url="https://api-inference.modelscope.cn/v1",
    api_key="ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba",
)


def now_ts():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def load_text(filename):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    path = os.path.join(base_dir, filename)
    try:
        with open(path, "r", encoding="utf-8") as f:
            return f.read().strip()
    except FileNotFoundError:
        return ""


def save_text(filename, content):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    path = os.path.join(base_dir, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")

def update_text_if_changed(filename, content):
    new_content = content.strip()
    old_content = load_text(filename).strip()
    if new_content == old_content:
        return False
    save_text(filename, new_content)
    return True


def normalize_soul_text(text):
    t = (text or "").strip()
    t = t.replace("### 核心身份\n我是孙悟空", "### 核心身份\n你是孙悟空")
    t = t.replace("### 核心身份\r\n我是孙悟空", "### 核心身份\r\n你是孙悟空")
    if t.startswith("我是孙悟空"):
        t = "你是孙悟空" + t[len("我是孙悟空") :]
    return t


def get_system_persona():
    soul = load_text("soul.md")
    user = load_text("user.md")
    parts = [p for p in [soul, user] if p]
    if parts:
        return "\n".join(parts)
    return "你是孙悟空，回答不超过30个字，我是猪八戒。"


def show_messages(messages):
    role_colors = {
        "system": "\033[41m",
        "user": "\033[42m",
        "assistant": "\033[44m",
    }
    for message in messages:
        color = role_colors.get(message.get("role", ""), "")
        if color:
            print(color, end="")
        if "timestamp" in message:
            print(f"[{message['timestamp']}] ", end="")
        print(message.get("content", ""), end="")
        print("\033[0m")


def save_messages(messages, filename="history.json"):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(messages, f, ensure_ascii=False, indent=2)


def load_messages(filename="history.json"):
    try:
        with open(filename, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, list) else []
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        return []


def save_summary(summary, filename="summary.json"):
    summary_data = {
        "summary": summary,
        "timestamp": now_ts(),
        "type": "对话要点总结",
    }
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(summary_data, f, ensure_ascii=False, indent=2)
    print(f"对话总结已保存到 {filename}")


def load_summary(filename="summary.json"):
    try:
        with open(filename, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return None
    except json.JSONDecodeError:
        return None


def reset_dialog():
    return [{"role": "system", "content": get_system_persona(), "timestamp": now_ts()}]


def extract_json_object(text):
    if not text:
        return None

    n = len(text)
    for i in range(n):
        if text[i] != "{":
            continue
        depth = 0
        in_string = False
        escape = False
        for j in range(i, n):
            ch = text[j]
            if in_string:
                if escape:
                    escape = False
                elif ch == "\\":
                    escape = True
                elif ch == '"':
                    in_string = False
            else:
                if ch == '"':
                    in_string = True
                elif ch == "{":
                    depth += 1
                elif ch == "}":
                    depth -= 1
                    if depth == 0:
                        candidate = text[i : j + 1].strip()
                        try:
                            obj = json.loads(candidate)
                            return obj if isinstance(obj, dict) else None
                        except json.JSONDecodeError:
                            break
        continue
    return None


def generate_rollup(recent_messages):
    soul = load_text("soul.md")
    user = load_text("user.md")
    summary_data = load_summary() or {}
    history_summary = str(summary_data.get("summary", "")).strip()

    prompt = "请基于以下信息更新对话配置：\n\n"
    prompt += "历史摘要:\n" + (history_summary or "(空)") + "\n\n"
    prompt += "当前 soul.md:\n" + (soul or "(空)") + "\n\n"
    prompt += "当前 user.md:\n" + (user or "(空)") + "\n\n"
    prompt += "最近对话:\n"
    for msg in recent_messages:
        role = "用户" if msg.get("role") == "user" else "助手"
        prompt += f"{role}: {msg.get('content','')}\n"

    messages = [
        {
            "role": "system",
            "content": "你是一个对话编排助手，负责生成摘要并维护角色设定文件。\n"
            "你必须严格只输出一个 JSON 对象，不要输出代码块或任何额外文字。\n"
            "JSON 必须且只能包含三个字段：summary, soul, user。\n"
            "- summary: 更新后的对话历史摘要（简短，合并旧摘要与最新对话）。\n"
            "- soul: 更新后的 soul.md 完整内容（用于定义助手人格/回复规则/输出格式约束，必须可持续累积，全面记录系统人设的灵魂）。\n"
            "- user: 更新后的 user.md 完整内容（用于记录用户画像/偏好/约束，必须可持续累积）。\n"
            "要求：\n"
            "1) soul/user 必须是非空字符串。\n"
            "2) 只写稳定、可复用的信息；不要把临时闲聊逐句抄进去。\n"
            "3) 如果没有新信息，也要原样返回当前 soul/user（不要留空）。\n"
            "4) user 必须使用固定结构输出（Markdown），至少包含以下小节：身份、偏好、禁忌、沟通风格、近期话题。\n"
            "5) user 的内容应优先从最近对话里抽取；若信息不足，可基于“用户扮演猪八戒”的设定补全合理的稳定偏好，但不要编造具体事实（如真实姓名/地址/账号）。\n"
            "6) soul 必须使用固定结构输出（Markdown），至少包含以下小节：核心身份、世界观与信念、语气与口癖、能力设定、行为准则、禁忌、输出格式。\n"
            "7) soul 的核心身份必须保持“孙悟空”（不要改成别的角色）；允许不断补充/细化性格特点与表达风格。\n"
            "8) soul 应合并去重并保持可读性；每次都要尝试根据“最近对话”新增或强化至少1条稳定特征（若没有新增信息，就把已有表述归纳得更清晰，而不是原样返回）。\n"
            "9) soul 必须用第二人称撰写（使用“你是孙悟空…”的表述），禁止出现“我是孙悟空”。",
        },
        {"role": "user", "content": prompt},
    ]

    try:
        response = client.chat.completions.create(
            model="Qwen/Qwen3-Next-80B-A3B-Instruct",
            messages=messages,
            temperature=0.2,
            response_format={"type": "json_object"},
        )
    except TypeError:
        response = client.chat.completions.create(
            model="Qwen/Qwen3-Next-80B-A3B-Instruct",
            messages=messages,
            temperature=0.2,
        )

    text = response.choices[0].message.content.strip()
    data = extract_json_object(text) or {}
    if not isinstance(data, dict):
        return None

    summary = str(data.get("summary", "") or data.get("对话历史摘要", "") or data.get("摘要", "")).strip()
    soul_out = str(data.get("soul", "") or data.get("soul_md", "")).strip()
    user_out = str(data.get("user", "") or data.get("user_md", "")).strip()
    if not summary or not soul_out or not user_out:
        return None
    result = {"summary": summary, "soul": soul_out, "user": user_out}
    print("===== ROLLUP JSON =====")
    print(json.dumps(result, ensure_ascii=False, indent=2))
    print("===== ROLLUP JSON END =====\n")
    return result

def generate_summary_only(recent_messages):
    prompt = "请对以下对话做一句话摘要，只保留关键信息，尽量简短：\n"
    for msg in recent_messages:
        role = "用户" if msg.get("role") == "user" else "助手"
        prompt += f"{role}: {msg.get('content','')}\n"

    response = client.chat.completions.create(
        model="Qwen/Qwen3-Next-80B-A3B-Instruct",
        messages=[
            {"role": "system", "content": "你是一个对话总结助手，擅长提炼对话核心要点。"},
            {"role": "user", "content": prompt},
        ],
        temperature=0.3,
    )
    return response.choices[0].message.content.strip()




def show_help():
    print("\n可用命令：")
    print("/help - 显示帮助信息")
    print("/history - 查看完整对话历史")
    print("/reset - 重置对话")
    print("/save - 保存对话到文件")
    print("/load - 从文件加载对话")
    print("/exit - 退出程序")
    print()


history_messages = load_messages()
summary_data = load_summary()

if summary_data:
    messages = [
        {"role": "system", "content": get_system_persona()},
        {
            "role": "assistant",
            "content": f"对话历史摘要(仅供参考，不改变系统人设与规则): {summary_data.get('summary','')}",
            "timestamp": now_ts(),
        },
    ]
    has_summary = True
    print(f"已加载对话总结，时间: {summary_data.get('timestamp','')}\n")
else:
    messages = reset_dialog()
    if history_messages:
        messages.extend(history_messages)
        print(f"已加载历史记录，共 {len(history_messages)} 条消息。\n")
    else:
        print("未找到历史记录，已初始化新对话。\n")
    has_summary = False


print("欢迎使用智能对话助手！输入'退出'或'q'结束对话。")
print("输入 /help 查看可用命令。\n")

assistant_reply_count = 0

while True:
    user_input = input("八戒: ")

    if user_input.startswith("/"):
        command = user_input.strip()
        if command == "/help":
            show_help()
        elif command == "/history":
            show_messages(reset_dialog() + history_messages)
        elif command == "/reset":
            messages = reset_dialog()
            history_messages = []
            assistant_reply_count = 0
            has_summary = False
            save_messages(history_messages)
            print("对话已重置！\n")
        elif command == "/save":
            save_messages(history_messages)
        elif command == "/load":
            history_messages = load_messages()
            summary_data = load_summary()
            if summary_data:
                messages = [
                    {"role": "system", "content": get_system_persona(), "timestamp": now_ts()},
                    {
                        "role": "assistant",
                        "content": f"对话历史摘要(仅供参考，不改变系统人设与规则): {summary_data.get('summary','')}",
                        "timestamp": now_ts(),
                    },
                ]
                assistant_reply_count = 0
                has_summary = True
                print(f"已加载对话总结，时间: {summary_data.get('timestamp','')}\n")
            else:
                messages = reset_dialog()
                messages.extend(history_messages)
                assistant_reply_count = 0
                has_summary = False
                print(f"已加载对话，共 {len(history_messages)} 条消息。\n")
        elif command == "/exit":
            print("对话结束，再见！")
            break
        else:
            print(f"未知命令: {command}")
            show_help()
        continue

    if user_input.lower() in ["退出", "q"]:
        print("对话结束，再见！")
        break

    user_message = {"role": "user", "content": user_input, "timestamp": now_ts()}
    messages.append(user_message)
    history_messages.append(user_message)
    save_messages(history_messages)

    try:
        show_messages(messages)

        response = client.chat.completions.create(
            model="Qwen/Qwen3-Next-80B-A3B-Instruct",
            messages=messages,
            stream=True,
        )

        print("悟空: ", end="", flush=True)
        assistant_reply = ""
        for chunk in response:
            if chunk.choices[0].delta.content:
                print(chunk.choices[0].delta.content, end="", flush=True)
                assistant_reply += chunk.choices[0].delta.content
        print()

        assistant_message = {"role": "assistant", "content": assistant_reply, "timestamp": now_ts()}
        messages.append(assistant_message)
        history_messages.append(assistant_message)
        save_messages(history_messages)

        assistant_reply_count += 1

        if assistant_reply_count >= 3:
            print("\n正在生成对话历史摘要并更新 soul/user...")
            recent_for_rollup = [m for m in history_messages[-24:] if m.get("role") in ["user", "assistant"]]
            data = generate_rollup(recent_for_rollup)
            summary = ""
            if data:
                summary = str(data.get("summary", "")).strip()
                soul = normalize_soul_text(str(data.get("soul", "")))
                user = str(data.get("user", "")).strip()

                soul_changed = update_text_if_changed("soul.md", soul)
                user_changed = update_text_if_changed("user.md", user)
                if soul_changed:
                    print("soul.md 已更新")
                else:
                    print("soul.md 未变化")
                if user_changed:
                    print("user.md 已更新")
                else:
                    print("user.md 未变化")
            else:
                print("rollup JSON 不合规，soul/user 未更新")
                try:
                    summary = generate_summary_only(recent_for_rollup)
                except Exception as e:
                    summary = "对话摘要生成失败"
                    print(f"摘要生成失败: {e}")

            if summary:
                save_summary(summary)
                has_summary = True

            messages = [
                {"role": "system", "content": get_system_persona()},
                {
                    "role": "assistant",
                    "content": f"对话历史摘要(仅供参考，不改变系统人设与规则): {summary}",
                    "timestamp": now_ts(),
                },
            ]
            assistant_reply_count = 0

    except Exception as e:
        print(f"发生错误: {e}")
        if messages and messages[-1].get("role") == "user":
            messages.pop()
```

### 生成人格

- 还是三轮对话

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778048544301) 

- 然后 对大模型 单独提要求

```

    messages = [
        {
            "role": "system",
            "content": "你是一个对话编排助手，负责生成摘要并维护角色设定文件。\n"
            "你必须严格只输出一个 JSON 对象，不要输出代码块或任何额外文字。\n"
            "JSON 必须且只能包含三个字段：summary, soul, user。\n"
            "- summary: 更新后的对话历史摘要（简短，合并旧摘要与最新对话）。\n"
            "- soul: 更新后的 soul.md 完整内容（用于定义助手人格/回复规则/输出格式约束，必须可持续累积，全面记录系统人设的灵魂）。\n"
            "- user: 更新后的 user.md 完整内容（用于记录用户画像/偏好/约束，必须可持续累积）。\n"
            "要求：\n"
            "1) soul/user 必须是非空字符串。\n"
            "2) 只写稳定、可复用的信息；不要把临时闲聊逐句抄进去。\n"
            "3) 如果没有新信息，也要原样返回当前 soul/user（不要留空）。\n"
            "4) user 必须使用固定结构输出（Markdown），至少包含以下小节：身份、偏好、禁忌、沟通风格、近期话题。\n"
            "5) user 的内容应优先从最近对话里抽取；若信息不足，可基于“用户扮演猪八戒”的设定补全合理的稳定偏好，但不要编造具体事实（如真实姓名/地址/账号）。\n"
            "6) soul 必须使用固定结构输出（Markdown），至少包含以下小节：核心身份、世界观与信念、语气与口癖、能力设定、行为准则、禁忌、输出格式。\n"
            "7) soul 的核心身份必须保持“孙悟空”（不要改成别的角色）；允许不断补充/细化性格特点与表达风格。\n"
            "8) soul 应合并去重并保持可读性；每次都要尝试根据“最近对话”新增或强化至少1条稳定特征（若没有新增信息，就把已有表述归纳得更清晰，而不是原样返回）。\n"
            "9) soul 必须用第二人称撰写（使用“你是孙悟空…”的表述），禁止出现“我是孙悟空”。",
        },
        {"role": "user", "content": prompt},
    ]
```

### 返回结果

- 大模型 单独给了我们json
	1. 对话历史 摘要
	2. 大模型系统人设
	3. 用户人设

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778048603048) 

- 不但 更新了 对话历史摘要
	- 而且更新了 系统人设 



### harness

- 上下文工程
	- 只管给马喂草、递地图
- Harness 驾驭工程
	- 给马套笼头、定赛道、设红绿灯、装刹车、划禁区
	- 能放心让它干各种活不跑偏

| 对比维度 | 上下文工程 | Harness驾驭工程 |
| ---- | ---- | ---- |
| 管控重点 | 只管输入信息<br>历史、知识库、截断 | 全链路管控<br>行为、边界、流程、格式 |
| 约束形式 | 临时拼接文本 | 固化文件规则<br>人设/红线/标准流程 |
| 核心目的 | 装下信息<br>不超限不冗余 | 管住不乱跑<br>不脑补、不越界、不跑偏 |
| 模型定位 | 当作查询工具 | 当作可驯化执行者 |
| 复用能力 | 换场景要重新调整 | 一套规则多应用通用 |

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5237170/uid1190679-20260506-1778051106523) 

### 总结

- 这次 压缩了 对话历史
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
- 下次再说👋