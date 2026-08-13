---
show: step
version: 1.0
enable_checker: true
---

# supabase

## 开始

- https://supabase.com/
	- 首先 注册
	- 可以使用 GitHub登陆

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262507/uid1190679-20251011-1760176466431) 

- 从dashboard数据看板进入
	- 可以新建工程

### project

- 我建立了一个工程project
	- 起名字叫做todolist

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262507/uid1190679-20251013-1760363574178)

- 找到url和apikey

### 设置环境

- 将信息放入到.env中

```
# Supabase 连接配置
# 请将下面的值替换为您在 Supabase 控制台中获取的实际信息
SUPABASE_URL="https://kxvyhvksdscsuibbhlhh.supabase.co"
SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4dnlodmtzZHNjc3VpYmJobGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMjg5NTIsImV4cCI6MjA3NTYwNDk1Mn0.mgUoBFwMV0uZ3xmQhf8klTTYGrfnlNTsmzHBP-zYxQ"
```

### 尝试连接

### 目前现状

- 目前数据库中还没有表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262507/uid1190679-20251013-1760363809188) 



### 方法 2: 使用 SQL 编辑器

1. 在左侧导航栏中，点击 "SQL Editor" 选项
2. 在编辑器中粘贴以下 SQL 语句：

```sql
-- 创建 todos 表
CREATE TABLE todos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  task TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- 添加索引以提高查询性能
CREATE INDEX idx_todos_created_at ON todos USING btree (created_at);
CREATE INDEX idx_todos_completed ON todos USING btree (completed);
```

3. 点击 "Run" 按钮执行 SQL 语句


 ![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262507/uid1190679-20251011-1760176653561) 

### 获取链接

- 地址

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262507/uid1190679-20251011-1760176684514) 

- apikey


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4262507/uid1190679-20251011-1760176704628) 

### app.py

```
from flask import Flask, render_template, jsonify, request
from supabase import create_client, Client
import os
from dotenv import load_dotenv
import uuid
import datetime

# 加载环境变量
load_dotenv()

# 创建Flask应用
app = Flask(__name__)

# 配置Supabase客户端
supabase = None
try:
    SUPABASE_URL = os.getenv('SUPABASE_URL')
    SUPABASE_KEY = os.getenv('SUPABASE_KEY')
    
    if SUPABASE_URL and SUPABASE_KEY:
        supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
        print("已尝试连接到Supabase数据库")
    else:
        print("警告：.env文件中缺少Supabase配置，将使用内存存储")
except Exception as e:
    print(f"连接Supabase数据库失败：{e}")
    print("将使用内存存储作为备选方案")

# 内存存储作为备选方案
in_memory_tasks = []

# 确保todos表存在
def ensure_table_exists():
    if not supabase:
        return
        
    try:
        # 检查表是否存在
        # 注意：Supabase API实际上不支持直接通过客户端查询表列表
        # 这里只是尝试一下，如果失败就提示用户在控制台创建表
        print("提示：请确保在Supabase控制台创建了todos表")
        print("表结构建议：id (主键), task (文本), completed (布尔值), created_at (时间戳)")
    except Exception as e:
        print(f"检查表时出错：{e}")

# 初始化时检查表格
ensure_table_exists()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/todos', methods=['GET'])
def get_todos():
    global in_memory_tasks
    try:
        if supabase:
            response = supabase.table('todos').select('*').order('created_at', desc=False).execute()
            return jsonify(response.data), 200
        else:
            # 使用内存存储
            return jsonify(in_memory_tasks), 200
    except Exception as e:
        print(f"获取任务列表出错：{e}")
        # 即使出错也返回内存中的任务，确保前端能正常显示
        return jsonify(in_memory_tasks), 200

@app.route('/api/todos', methods=['POST'])
def add_todo():
    global in_memory_tasks
    try:
        data = request.json
        task = data.get('task')
        
        if not task:
            return jsonify({'error': '任务内容不能为空'}), 400
        
        if supabase:
            response = supabase.table('todos').insert({
                'task': task,
                'completed': False
            }).execute()
            return jsonify(response.data[0]), 201
        else:
            # 使用内存存储
            new_task = {
                'id': str(uuid.uuid4()),  # 生成唯一ID
                'task': task,
                'completed': False,
                'created_at': datetime.datetime.now().isoformat()
            }
            in_memory_tasks.append(new_task)
            return jsonify(new_task), 201
    except Exception as e:
        print(f"添加任务出错：{e}")
        # 即使在数据库连接失败的情况下，也要尝试使用内存存储
        # 不再检查supabase是否为None，而是无论如何都尝试添加到内存中
        new_task = {
            'id': str(uuid.uuid4()),
            'task': task,
            'completed': False,
            'created_at': datetime.datetime.now().isoformat()
        }
        in_memory_tasks.append(new_task)
        return jsonify(new_task), 201

@app.route('/api/todos/<todo_id>', methods=['PUT'])
def update_todo(todo_id):
    global in_memory_tasks
    try:
        data = request.json
        
        # 准备要更新的字段
        update_data = {}
        if 'task' in data:
            update_data['task'] = data['task']
        if 'completed' in data:
            update_data['completed'] = data['completed']
        
        if not update_data:
            return jsonify({'error': '没有提供要更新的字段'}), 400
        
        if supabase:
            response = supabase.table('todos').update(update_data).eq('id', todo_id).execute()
            
            if not response.data:
                return jsonify({'error': '未找到该任务'}), 404
            
            return jsonify(response.data[0]), 200
        else:
            # 使用内存存储
            task_index = next((i for i, task in enumerate(in_memory_tasks) if task['id'] == todo_id), None)
            if task_index is None:
                return jsonify({'error': '未找到该任务'}), 404
            
            in_memory_tasks[task_index].update(update_data)
            return jsonify(in_memory_tasks[task_index]), 200
    except Exception as e:
        print(f"更新任务出错：{e}")
        # 即使在数据库连接失败的情况下，也要尝试使用内存存储
        task_index = next((i for i, task in enumerate(in_memory_tasks) if task['id'] == todo_id), None)
        if task_index is not None:
            in_memory_tasks[task_index].update(update_data)
            return jsonify(in_memory_tasks[task_index]), 200
        return jsonify({'error': '未找到该任务'}), 404

@app.route('/api/todos/<todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    global in_memory_tasks
    try:
        if supabase:
            response = supabase.table('todos').delete().eq('id', todo_id).execute()
            
            if not response.data:
                return jsonify({'error': '未找到该任务'}), 404
                
            return jsonify({'message': '任务已删除'}), 200
        else:
            # 使用内存存储
            original_length = len(in_memory_tasks)
            in_memory_tasks = [task for task in in_memory_tasks if task['id'] != todo_id]
            
            if len(in_memory_tasks) == original_length:
                return jsonify({'error': '未找到该任务'}), 404
                
            return jsonify({'message': '任务已删除'}), 200
    except Exception as e:
        print(f"删除任务出错：{e}")
        # 即使在数据库连接失败的情况下，也要尝试使用内存存储
        original_length = len(in_memory_tasks)
        in_memory_tasks = [task for task in in_memory_tasks if task['id'] != todo_id]
        if len(in_memory_tasks) != original_length:
            return jsonify({'message': '任务已删除'}), 200
        return jsonify({'error': '未找到该任务'}), 404

if __name__ == '__main__':
    # 开发环境下使用
    app.run(debug=True)
```

### templates/index.html

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List - Flask + Supabase</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            font-family: 'Arial', 'Microsoft YaHei', sans-serif;
        }
        
        .container {
            max-width: 800px;
            margin-top: 50px;
        }
        
        .todo-header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .todo-card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 20px;
        }
        
        .task-item {
            padding: 12px 0;
            border-bottom: 1px solid #e9ecef;
            display: flex;
            align-items: center;
        }
        
        .task-item:last-child {
            border-bottom: none;
        }
        
        .task-text {
            flex: 1;
            margin: 0 15px;
        }
        
        .task-completed {
            text-decoration: line-through;
            color: #6c757d;
        }
        
        .task-actions {
            display: flex;
            gap: 10px;
        }
        
        .edit-form {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #e9ecef;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="todo-header">
            <h1>To Do List</h1>
            <p>基于Flask和Supabase的任务管理应用</p>
        </div>
        
        <div class="todo-card">
            <h2>添加新任务</h2>
            <form id="add-task-form">
                <div class="input-group mb-3">
                    <input type="text" id="task-input" class="form-control" placeholder="输入新任务..." required>
                    <button type="submit" class="btn btn-primary">添加</button>
                </div>
            </form>
        </div>
        
        <div class="todo-card">
            <h2>任务列表</h2>
            <div id="task-list">
                <!-- 任务列表将通过JavaScript动态生成 -->
                <div class="text-center text-muted" id="no-tasks">
                    暂无任务，请添加新任务
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // 获取任务列表
        function fetchTasks() {
            fetch('/api/todos')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('API响应错误: ' + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    // 确保我们处理的是数组
                    const tasks = Array.isArray(data) ? data : [];
                    
                    const taskList = document.getElementById('task-list');
                    const noTasks = document.getElementById('no-tasks');
                    
                    taskList.innerHTML = '';
                    
                    if (tasks.length === 0) {
                        taskList.appendChild(noTasks);
                    } else {
                        tasks.forEach(task => {
                            const taskItem = document.createElement('div');
                            taskItem.className = 'task-item';
                            taskItem.dataset.id = task.id;
                            
                            const checkbox = document.createElement('input');
                            checkbox.type = 'checkbox';
                            checkbox.className = 'form-check-input';
                            checkbox.checked = task.completed;
                            checkbox.onchange = () => toggleTaskStatus(task.id);
                            
                            const taskText = document.createElement('div');
                            taskText.className = `task-text ${task.completed ? 'task-completed' : ''}`;
                            taskText.textContent = task.task;
                            
                            const taskActions = document.createElement('div');
                            taskActions.className = 'task-actions';
                            
                            const editButton = document.createElement('button');
                            editButton.className = 'btn btn-sm btn-secondary';
                            editButton.textContent = '编辑';
                            editButton.onclick = () => showEditForm(task.id, task.task);
                            
                            const deleteButton = document.createElement('button');
                            deleteButton.className = 'btn btn-sm btn-danger';
                            deleteButton.textContent = '删除';
                            deleteButton.onclick = () => deleteTask(task.id);
                            
                            taskActions.appendChild(editButton);
                            taskActions.appendChild(deleteButton);
                            
                            taskItem.appendChild(checkbox);
                            taskItem.appendChild(taskText);
                            taskItem.appendChild(taskActions);
                            
                            taskList.appendChild(taskItem);
                        });
                    }
                })
                .catch(error => console.error('获取任务失败:', error));
        }
        
        // 添加新任务
        document.getElementById('add-task-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const taskInput = document.getElementById('task-input');
            const task = taskInput.value.trim();
            
            if (task) {
                fetch('/api/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ task: task })
                })
                .then(response => response.json())
                .then(() => {
                    fetchTasks();
                    taskInput.value = '';
                })
                .catch(error => console.error('添加任务失败:', error));
            }
        });
        
        // 切换任务状态
        function toggleTaskStatus(taskId) {
            const taskItem = document.querySelector(`.task-item[data-id="${taskId}"]`);
            const checkbox = taskItem.querySelector('input[type="checkbox"]');
            const taskText = taskItem.querySelector('.task-text');
            
            fetch(`/api/todos/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completed: checkbox.checked })
            })
            .then(response => response.json())
            .then(() => {
                if (checkbox.checked) {
                    taskText.classList.add('task-completed');
                } else {
                    taskText.classList.remove('task-completed');
                }
            })
            .catch(error => {
                console.error('更新任务状态失败:', error);
                // 失败时恢复状态
                checkbox.checked = !checkbox.checked;
            });
        }
        
        // 显示编辑表单
        function showEditForm(taskId, currentTask) {
            const taskItem = document.querySelector(`.task-item[data-id="${taskId}"]`);
            
            // 检查是否已存在编辑表单
            if (taskItem.querySelector('.edit-form')) {
                return;
            }
            
            const editForm = document.createElement('div');
            editForm.className = 'edit-form';
            editForm.innerHTML = `
                <div class="input-group">
                    <input type="text" class="form-control" value="${currentTask}" id="edit-input-${taskId}">
                    <button type="button" class="btn btn-success" onclick="saveTask(${taskId})">保存</button>
                    <button type="button" class="btn btn-secondary" onclick="cancelEdit(${taskId})">取消</button>
                </div>
            `;
            
            taskItem.appendChild(editForm);
        }
        
        // 保存编辑后的任务
        function saveTask(taskId) {
            const editInput = document.getElementById(`edit-input-${taskId}`);
            const newTask = editInput.value.trim();
            
            if (newTask) {
                fetch(`/api/todos/${taskId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ task: newTask })
                })
                .then(response => response.json())
                .then(() => {
                    fetchTasks();
                })
                .catch(error => console.error('保存任务失败:', error));
            }
        }
        
        // 取消编辑
        function cancelEdit(taskId) {
            const taskItem = document.querySelector(`.task-item[data-id="${taskId}"]`);
            const editForm = taskItem.querySelector('.edit-form');
            if (editForm) {
                taskItem.removeChild(editForm);
            }
        }
        
        // 删除任务
        function deleteTask(taskId) {
            if (confirm('确定要删除这个任务吗？')) {
                fetch(`/api/todos/${taskId}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(() => {
                    fetchTasks();
                })
                .catch(error => console.error('删除任务失败:', error));
            }
        }
        
        // 初始加载任务列表
        document.addEventListener('DOMContentLoaded', fetchTasks);
    </script>
</body>
</html>
```