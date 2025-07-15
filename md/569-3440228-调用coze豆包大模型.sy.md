---
show: step
version: 1.0
enable_checker: true
---

# 爬取百度指数

## 回忆

- 上
- 这？🤔

### api

```
curl --location --request POST 'https://api.coze.cn/v3/chat' \
--header 'Authorization: Bearer pat_2vqqIkZ84qfje1U1bSsh8iHrQWrzDN8uF8Vb1JQ6pGOaTwRtvyisxkLHhKDZNmFt' \
--header 'Content-Type: application/json' \
--data-raw '{
    "bot_id": "7424459244357173302",
    "user_id": "7338741813303410697",
    "stream": true,
    "auto_save_history": true,
    "additional_messages": [
        {
            "role": "user",
            "content": "2025年春节是哪一天",
            "content_type": "text"
        }
    ]
}'
```

### request方法

```
import requests
import json
import os

os.system("clear")
# Coze API的基础URL，需要根据实际情况调整
coze_api_url = "https://api.coze.cn/v3/chat"

# 修正后的请求头，确保Content - Type正确
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer pat_2vqqIkZ84qfje1U1bSsh8iHrQWrzDN8uF8Vb1JQ6pGOaTwRtvyisxkLHhKDZNmFt"  # 替换为真实的授权令牌
}

additional_messages = {
    "role": "user",
    "content": "2025春节有什么不一样的，做成一个网页",
    "content_type": "text"
}

# 重新构建要发送的问题数据，确保符合Coze API要求
question_payload = {
    "bot_id": "7424459244357173302",
    "user_id": "7338741813303410697",  # 替换为实际的用户标识
    "additional_messages": [additional_messages],
    "stream": True
}

try:
    # 发送POST请求
    response = requests.post(coze_api_url, headers = headers, json = question_payload, stream = True)
    show = False
    if response.status_code == 200:
        for line in response.iter_lines():
            if line:
                try:
                    line = line.decode("utf-8")
                    if line == "event:conversation.chat.created":
                        print("===对话开始===" + line)
                        continue
                    if line == "event:conversation.chat.in_progress":
                        print("===对话继续===" + line)
                        continue
                    if line == "event:conversation.message.completed":
                        print("===提问完成===" + line)
                        continue
                    if line == "event:conversation.message.delta":
                        #print("===不断回答===" + line)
                        show = True
                        continue
                    if line == "event:conversation.chat.completed":
                        show = False
                        print("===对话完成===" + line)
                        continue
                    if line == "event:done":
                        print("===对话结束===" + line)
                        continue
                    #print(line)
                    if show:
                        line = line.replace("data:","")
                        #print("=====line===")
                        #print(type(line))
                        #print(line)
                        #print("=====line===")
                        data = json.loads(line)
                        print(data["content"],end="")
                        #print("Coze的回答（流式数据块）:", data)
                except Exception as e:
                    print(f"无法解析该行数据: {line}")
    else:
        print(f"请求失败，状态码: {response.status_code}，错误信息: {response.text}")
except requests.RequestException as e:
    print(f"请求过程中出现异常: {e}")




```

### cozepy

```
import requests
import json
import os

os.system("clear")

# Coze API的基础URL，需要根据实际情况调整
coze_api_url = "https://api.coze.cn/v3/chat"

# 修正后的请求头，确保Content - Type正确
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer pat_2vqqIkZ84qfje1U1bSsh8iHrQWrzDN8uF8Vb1JQ6pGOaTwRtvyisxkLHhKDZNmFt"  # 替换为真实的授权令牌
}

additional_messages = {
    "role": "user",
    "content": "1 + 1",
    "content_type": "text"
}

# 重新构建要发送的问题数据，确保符合Coze API要求
question_payload = {
    "bot_id": "7424459244357173302",
    "user_id": "7338741813303410697",  # 替换为实际的用户标识
    "additional_messages": [additional_messages],
    "stream": True
}

try:
    # 发送POST请求
    response = requests.post(coze_api_url, headers = headers, json = question_payload)
    if response.status_code == 200:
        for line in response.iter_lines():
            if line:
                try:
                    print("Coze的回答（流式数据块）:", line.decode())
                    print("=========")
                except exception:
                    print(f"无法解析该行数据: {line}")
    else:
        print(f"请求失败，状态码: {response.status_code}，错误信息: {response.text}")
except requests.RequestException as e:
    print(f"请求过程中出现异常: {e}")
```


### 总结
- 下次再说
