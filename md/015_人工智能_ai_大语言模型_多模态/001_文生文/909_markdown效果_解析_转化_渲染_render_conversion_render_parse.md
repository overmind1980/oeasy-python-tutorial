---
show: step
version: 1.0
enable_checker: true
---

# markdown效果_解析_转化_渲染_render_conversion_render_parse

## 回忆

- 上次 把代码 整合成1个文件 
	- 把index.html 嵌入到 app.py
	- 或者 在html中 发送请求

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262375/uid1190679-20251020-1760967391272) 

| 对比维度 | 纯 app.py | app.py + HTML 文件 | 纯 HTML（纯前端） |
|--------|-----------|--------------------|-------------------|
| 怎么运行 | 必须跑 Python 服务 | 要跑 Python 服务 | 直接双击打开就能用 |
| 有没有后端 | 有，全写一起 | 有，前后分开 | 完全没有后端 |
| 能不能存数据 | 能 | 能 | 不能（只能页面展示） |
| 改页面方便吗 | 不方便，要改代码 | 方便，改 HTML | 最方便，只改 HTML |
| 优点 | 写得快，功能全 | 逻辑清晰，好维护 | 最简单、最轻便 |
| 缺点 | 越写越乱 | 要启动服务 | 不能交互、存数据 |
| 适合场景 | 小工具、测试 | 正常小项目、网站 | 纯展示页面、静态网页 |

- 大模型返回的文本
	- 在网页端 
	- 可以 更好看点 吗？🤔


### 应用代码

- app.py

```
from flask import Flask, request, send_file, Response
from flask_cors import CORS
from openai import OpenAI
import json

app = Flask(__name__)
CORS(app)

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1', 
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba'
)

@app.route('/')
def index():
    return send_file('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    
    def generate():
        try:
            response = client.chat.completions.create(
                model='Qwen/Qwen3-Next-80B-A3B-Instruct',
                messages=[
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": user_message}
                ],
                stream=True
            )
            
            for chunk in response:
                if chunk.choices[0].delta.content:
                    content = chunk.choices[0].delta.content
                    yield f"data: {json.dumps({'content': content})}\n\n"
            
            yield f"data: {json.dumps({'done': True})}\n\n"
            
        except Exception as e:
            # 输出错误信息到控制台，方便调试
            print(f"OpenAI API Error: {str(e)}")
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
    
    return Response(generate(), mimetype='text/plain')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
```

### 网页文件

- index.html

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>对话</title>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial; }
        #messages { height: 400px; overflow-y: auto; border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }
        .user, .assistant { margin: 5px 0; padding: 8px; border-radius: 5px; }
        .user { text-align: right; background: #e3f2fd; }
        .assistant { background: #f5f5f5; }
        input { width: 75%; padding: 10px; border: 1px solid #ccc; }
        button { padding: 10px 15px; background: #333; color: white; border: none; cursor: pointer; }
    </style>
</head>
<body>
    <div id="messages"></div>
    <input type="text" id="input" placeholder="输入消息...">
    <button onclick="send()">发送</button>

    <script>
        async function send() {
            const input = document.getElementById('input');
            const button = document.querySelector('button');
            const msg = input.value.trim();
            if (!msg) return;
            
            button.disabled = true;
            button.textContent = '发送中...';
            
            add(msg, 'user');
            input.value = '';
            
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({message: msg})
                });
                
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let content = '', assistantDiv;
                
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    
                    const lines = decoder.decode(value, { stream: true }).split('\n');
                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            try {
                                const data = JSON.parse(line.substring(6));
                                if (data.content) {
                                    content += data.content;
                                    if (!assistantDiv) {
                                        assistantDiv = document.createElement('div');
                                        assistantDiv.className = 'assistant';
                                        document.getElementById('messages').appendChild(assistantDiv);
                                    }
                                    assistantDiv.textContent = content;
                                    document.getElementById('messages').scrollTop = 999999;
                                } else if (data.error) {
                                    if (!assistantDiv) {
                                        assistantDiv = document.createElement('div');
                                        assistantDiv.className = 'assistant';
                                        document.getElementById('messages').appendChild(assistantDiv);
                                    }
                                    assistantDiv.textContent = '错误: ' + data.error;
                                }
                            } catch (e) {}
                        }
                    }
                }
            } catch (error) {
                add('错误: ' + (error.message || '未知错误'), 'assistant');
            } finally {
                button.disabled = false;
                button.textContent = '发送';
                input.focus();
            }
        }
        
        function add(content, type) {
            const div = document.createElement('div');
            div.className = type;
            div.textContent = content;
            document.getElementById('messages').appendChild(div);
            document.getElementById('messages').scrollTop = 999999;
        }
    </script>
</body>
</html>
```

### 尝试

- 默认状态下

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4270977/uid1190679-20251027-1761571494784)

- md文档无法在网页中
	- 无法 正常显示

```
大模型当前返回的是 Markdown (MD) 格式文档，其中包含多种 Markdown 语法元素，如使用 #、##、### 等符号表示的不同级别标题、表格结构以及加粗等文本样式。这些 Markdown 格式内容在 HTML 页面中无法直接正常渲染显示，目前仅能以 Markdown 源文件的原始文本形式呈现。请帮我修改相关代码或实现相应功能，将 Markdown 格式的内容正确转换并渲染为美观的 HTML 格式，确保所有 Markdown 语法元素（包括但不限于标题、表格、加粗文本等）都能在 HTML 页面中正常显示。
```

- 目前需求 
	- 如上所述

### 修改代码

- 引入 marked.js
	- 用于 在前端
	- 渲染 markdown 文本

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>对话</title>
    <!-- 引入marked.js用于Markdown渲染 -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial; }
        #messages { height: 400px; overflow-y: auto; border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; }
        .user, .assistant { margin: 5px 0; padding: 8px; border-radius: 5px; }
        .user { text-align: right; background: #e3f2fd; }
        .assistant { background: #f5f5f5; }
        input { width: 75%; padding: 10px; border: 1px solid #ccc; }
        button { padding: 10px 15px; background: #333; color: white; border: none; cursor: pointer; }
        
        /* Markdown样式 */
        .markdown-content h1, .markdown-content h2, .markdown-content h3 {
            margin: 10px 0;
            font-weight: bold;
        }
        .markdown-content h1 { font-size: 24px; border-bottom: 1px solid #ddd; padding-bottom: 5px; }
        .markdown-content h2 { font-size: 20px; }
        .markdown-content h3 { font-size: 18px; }
        .markdown-content p { margin: 10px 0; }
        .markdown-content ul, .markdown-content ol { margin: 10px 0; padding-left: 20px; }
        .markdown-content li { margin: 5px 0; }
        .markdown-content blockquote {
            border-left: 4px solid #ddd;
            padding-left: 10px;
            color: #666;
            margin: 10px 0;
        }
        .markdown-content code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: monospace;
        }
        .markdown-content pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
            margin: 10px 0;
        }
        .markdown-content table {
            border-collapse: collapse;
            width: 100%;
            margin: 10px 0;
        }
        .markdown-content th, .markdown-content td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        .markdown-content th { background-color: #f2f2f2; }
        .markdown-content tr:nth-child(even) { background-color: #f9f9f9; }
        .markdown-content a { color: #1a73e8; text-decoration: none; }
        .markdown-content a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div id="messages"></div>
    <input type="text" id="input" placeholder="输入消息...">
    <button onclick="send()">发送</button>

    <script>
        async function send() {
            const input = document.getElementById('input');
            const button = document.querySelector('button');
            const msg = input.value.trim();
            if (!msg) return;
            
            button.disabled = true;
            button.textContent = '发送中...';
            
            add(msg, 'user');
            input.value = '';
            
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({message: msg})
                });
                
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let content = '', assistantDiv;
                
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    
                    const lines = decoder.decode(value, { stream: true }).split('\n');
                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            try {
                                const data = JSON.parse(line.substring(6));
                                if (data.content) {
                                    content += data.content;
                                    if (!assistantDiv) {
                                        assistantDiv = document.createElement('div');
                                        assistantDiv.className = 'assistant';
                                        document.getElementById('messages').appendChild(assistantDiv);
                                    }
                                    // 使用marked将Markdown转换为HTML
                                    const htmlContent = marked.parse(content);
                                    assistantDiv.innerHTML = '<div class="markdown-content">' + htmlContent + '</div>';
                                    document.getElementById('messages').scrollTop = 999999;
                                } else if (data.error) {
                                    if (!assistantDiv) {
                                        assistantDiv = document.createElement('div');
                                        assistantDiv.className = 'assistant';
                                        document.getElementById('messages').appendChild(assistantDiv);
                                    }
                                    assistantDiv.textContent = '错误: ' + data.error;
                                }
                            } catch (e) {}
                        }
                    }
                }
            } catch (error) {
                add('错误: ' + (error.message || '未知错误'), 'assistant');
            } finally {
                button.disabled = false;
                button.textContent = '发送';
                input.focus();
            }
        }
        
        function add(content, type) {
            const div = document.createElement('div');
            div.className = type;
            
            if (type === 'assistant') {
                // 对于助手消息，应用Markdown渲染
                const htmlContent = marked.parse(content);
                div.innerHTML = '<div class="markdown-content">' + htmlContent + '</div>';
            } else {
                // 用户消息保持原样
                div.textContent = content;
            }
            
            document.getElementById('messages').appendChild(div);
            document.getElementById('messages').scrollTop = 999999;
        }
    </script>
</body>
</html>

```

### 表格

```
给我一个表格
```

- md表格渲染成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4270977/uid1190679-20251027-1761572453064) 

### 大纲级别

```
给我一个 有大纲级别的 文档
```

- 大纲级别渲染成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4270977/uid1190679-20251027-1761572506311) 

- 在`前端` 
	- 直接 把md文件
	- 转成 html格式
- 转化工作
	- 可以在 后端完成吗？

### 前后端转化对比

| 对比维度 | 后端渲染<br/>Flask 转 HTML| 前端渲染<br>浏览器 marked.js | 更推荐 |
|---------|-------------------------------|-----------------------------------|-------|
| 实现位置 | Flask 把 MD 转 HTML<br>再返回给前端 | Flask 返回 MD 原文<br>前端 JS 渲染 | 前端 |
| 流式效果 | 很难实现<br>必须整段返回 | 天然支持<br>逐字实时渲染 | 前端 |
| 服务器压力 | 高<br>需做文本转换 | 低<br>仅返回纯文本 | 前端 |
| 样式修改 | 改后端<br>需重启 | 改前端<br>无需重启后端 | 前端 |
| 接口通用性 | 差<br>返回 HTML | 好<br>返回通用 MD | 前端 |
| 加载速度 | 稍慢<br>后端多步处理 | 更快<br>传输小、直渲染 | 前端 |
| 代码维护 | 繁琐<br>前后端耦合 | 清爽<br>前后端分离 | 前端 |
| 适合场景 | 固定页面<br>PDF/邮件 | 对话界面<br>实时流式输出 | 前端 |

- 综合来看
	- 还是 前端加载渲染效果 比较合理
- 如果
	- 在 终端中 也想要
	- 显示 md文档效果 呢？

### 终端的格式化

- 可以在终端 
	- 格式化输出
	- 大模型的回复吗？

```
目前已成功实现在网页中显示Markdown格式内容，但需要进一步实现Markdown格式内容在终端和日志中的格式化输出功能。请确保大模型返回的Markdown格式内容能够在终端环境中保持适当的格式展示，同时在日志文件中正确记录格式化后的内容。需要兼顾终端显示的可读性和日志记录的完整性，确保在不同输出环境下都能清晰呈现Markdown的结构和格式特征。
```

- 需求如上所述

### 输出

- 原始 app.py 代码

```python3
from flask import Flask, request, send_file, Response
from flask_cors import CORS
from openai import OpenAI
import json

app = Flask(__name__)
CORS(app)

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1', 
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba'
)

@app.route('/')
def index():
    return send_file('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    
    def generate():
        try:
            response = client.chat.completions.create(
                model='Qwen/Qwen3-Next-80B-A3B-Instruct',
                messages=[
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": user_message}
                ],
                stream=True
            )
            
            for chunk in response:
                if chunk.choices[0].delta.content:
                    content = chunk.choices[0].delta.content
                    # 将大模型回复输出到终端
                    print(f"{content}",end="")
                    yield f"data: {json.dumps({'content': content})}\n\n"
            
            yield f"data: {json.dumps({'done': True})}\n\n"
            
        except Exception as e:
            # 输出错误信息到控制台，方便调试
            print(f"OpenAI API Error: {str(e)}")
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
    
    return Response(generate(), mimetype='text/plain')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8081)
```

### 效果

- 目前终端 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4270977/uid1190679-20251027-1761573161747) 

- 我想要终端
	- 也能对于markdown文件 
	- 解析、转化、渲染

```
可以在终端里面也对md进行解析、转化、渲染吗？
```

### 代码

- 使用了 rich这类库
	- 在终端使用富文本

```
from flask import Flask, request, send_file, Response
from flask_cors import CORS
from openai import OpenAI
import json
# 导入rich库用于终端中渲染Markdown
try:
    from rich.console import Console
    from rich.markdown import Markdown
    has_rich = True
    console = Console()
except ImportError:
    has_rich = False
    print("警告: rich库未安装，终端将以原始文本形式显示Markdown内容")

app = Flask(__name__)
CORS(app)

client = OpenAI(
    base_url='https://api-inference.modelscope.cn/v1', 
    api_key = 'ms-81c1f87a-fa0a-4edc-a4a5-4bc7ba3cbbba'
)

@app.route('/')
def index():
    return send_file('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    
    def generate():
        try:
            response = client.chat.completions.create(
                model='Qwen/Qwen3-Next-80B-A3B-Instruct',
                messages=[
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": user_message}
                ],
                stream=True
            )
            
            # 用于存储完整的Markdown内容
            full_content = ""
            
            for chunk in response:
                if chunk.choices[0].delta.content:
                    content = chunk.choices[0].delta.content
                    full_content += content
                    # 将大模型回复输出到终端
                    print(f"{content}", end="")
                    yield f"data: {json.dumps({'content': content})}\n\n"
            
            # 当接收到完整内容后，在终端中渲染Markdown格式
            if has_rich and full_content:
                print("\n\n--- 终端Markdown渲染预览 ---")
                console.print(Markdown(full_content))
                print("--------------------------\n")
            
            yield f"data: {json.dumps({'done': True})}\n\n"
            
        except Exception as e:
            # 输出错误信息到控制台，方便调试
            print(f"OpenAI API Error: {str(e)}")
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
    
    return Response(generate(), mimetype='text/plain')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8081)

```

### 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4270977/uid1190679-20251027-1761573371752) 

- 大纲级别、加粗

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4270977/uid1190679-20251027-1761573471301) 

- 如果我 恰好需要返回的是 md源文件
	- 而不是 渲染好的 html代码 
	- 怎么办呢？

### 总结

- 这次 我们 研究了
	- md渲染的 问题
		- 无论是 浏览器 
		- 还是 终端
	- 都可以 按照md的文档格式 
		- 进行渲染

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4270977/uid1190679-20251029-1761702726577) 

- 还有什么 可以玩吗？🤔
- 下次再说👋


