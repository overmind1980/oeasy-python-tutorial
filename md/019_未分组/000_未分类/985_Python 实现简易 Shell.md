---
show: step
version: 1.0 
---

# Python 实现简易 Shell

##一、课程介绍

用过 Linux 操作系统的同学想必都对 Shell 不陌生，Shell 是一个用 C 语言编写的程序，这个应用程序提供了一个接口，用户可以通过这个接口访问操作系统内核服务，是用户与 Linux 内核进行交互的桥梁。本次课程将通过 Python 来实现一个简易的 Shell。

本次课程项目适合刚学习完 Python 课程的同学进行学习练手。

> 备注：本次课程项目来源于 @[supasate](https://github.com/supasate) 的 GitHub 开源项目 [https://github.com/supasate/yosh](https://github.com/supasate) ，在此特地感谢 @[supasate](https://github.com/supasate) 先生。

#### 1.1 知识点

通过本次课程的学习，我们将涉及到以下知识点：

- Python 的基础知识
- Shell 的使用
- 使用转义字符使命令行字符高亮

#### 1.2 效果截图

最终我们的 Python 版 Shell 运行效果如下：

![1.2-1](https://doc.shiyanlou.com/document-uid242676labid2113timestamp1473231030339.png)

#### 1.3 实验环境
+ python3.5

## 二、创建文件
本次课程的流程为：

1. 编写 Shell 主程序
2. 编写自定义的 Shell 扩展模块

首先使用 `mkdir` 命令在 `/home/shiyanlou/Code` 目录下创建项目文件夹 `shiyanlou_shell` ，然后使用 `touch` 命令在 `shiyanlou_shell` 文件夹下创建以下的文件。

```
/home/shiyanlou/Code/shiyanlou_shell/
|-- func/
|   |-- __init__.py
|   |-- cd.py
|   |-- constants.py
|   |-- exit.py
|   |-- getenv.py
|   `-- history.py
`-- shell.py
```

其中，每个文件的作用如下：

- `shell.py` ：Shell 的主程序，负责读取、解析并执行命令
- `func/` ：自定义模块，所有的自定义命令的实现函数文件都位于这里
- `__init__.py` ：使 `func` 文件夹能作为 Python 模块被导入
- `cd.py` ：实现了 Shell 的 `cd` 命令
- `constants.py` ：定义了各种常量与路径
- `exit.py` ：定义了 `exit` 命令，用来退出程序
- `getenv.py` ：实现 `getenv` 命令，获取系统变量的值
- `history.py`：实现 `history` 命令，展示输入的命令日志

```checker
- name: check if directory shiyanlou_shell exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/Code/shiyanlou_shell
  error: 还没有在 /home/shiyanlou/Code 目录下新建 shiyanlou_shell 文件夹
- name: check if shell.py exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/Code/shiyanlou_shell/shell.py
  error: 还没有在 shiyanlou_shell 文件夹下新建 shell.py 文件
- name: check if directory func exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/Code/shiyanlou_shell/func
  error: 还没有在 shiyanlou_shell 文件夹下新建 func 文件夹
- name: check if file __init__.py exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/Code/shiyanlou_shell/func/__init__.py
  error: 还没有在 func 文件夹下新建 __init__.py 文件
- name: check if file cd.py exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/Code/shiyanlou_shell/func/cd.py
  error: 还没有在 func 文件夹下新建 cd.py 文件
- name: check if file constants.py exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/Code/shiyanlou_shell/func/constants.py
  error: 还没有在 func 文件夹下新建 constants.py 文件
- name: check if file exit.py exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/Code/shiyanlou_shell/func/exit.py
  error: 还没有在 func 文件夹下新建 exit.py 文件
- name: check if file getenv.py exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/Code/shiyanlou_shell/func/getenv.py
  error: 还没有在 func 文件夹下新建 getenv.py 文件
- name: check if file history.py exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/Code/shiyanlou_shell/func/history.py
  error: 还没有在 func 文件夹下新建 history.py 文件
```

## 三、编写 Shell 主程序

首先让我们来考虑一下 Shell 的运行流程。

1. 启动之后注册自定义的命令函数（即建立命令与相应函数的映射关系），输出命令提示符 `$` ，等待用户输入命令；
2. 用户输入命令之后按下回车，Shell 程序就要获取命令；
3. Shell 程序对命令格式进行解析；
4. 解析之后，调用相关函数进行处理，如果当前命令的相关函数不存在则转交给系统处理，并将执行结果反馈给用户界面；
5. 再次输出命令提示符 `$` ，等待用户输入命令。

所以事实上，我们可以看出来从第五点开始就已经在重复第一点的功能了。因此 Shell 程序的主体应该放在一个 `while` 循环中，直到某一特定条件达成的时候，结束循环并退出程序。

比如，我们课程的做法就是设定变量 `status` 作为 `while` 循环的条件，当接收到 `exit` 命令的时候，执行 `exit` 函数，修改 `status` 的值为 `0` 从而退出程序。

### 3.1 实现命令与函数的映射关系

打开 `shell.py` 文件进行编写，首先导入必要的模块。

`shell.py`:
```python
import os
import sys
import shlex
import getpass
import socket
import signal
import subprocess
import platform
from func import *
```

其中 `func` 是我们自定义的模块，这里包含了所有的自定义命令的实现函数。

`shell.py` :
```python
# 一张字典表，用于存储命令与函数的映射
built_in_cmds = {}

def register_command(name, func):
    """
    注册命令，使命令与相应的处理函数建立映射关系
    @param name: 命令名
    @param func: 函数名
    """
    built_in_cmds[name] = func

def init():
    """
    注册所有的命令
    """
    register_command("cd", cd)
    register_command("exit", exit)
    register_command("getenv", getenv)
    register_command("history", history)
```

这里利用了 Python 支持函数式编程的特性，使用字典 `built_in_cmds` 存储了每个命令对应的函数的引用，在需要的时候就可以直接通过引用调用函数，从而建立起命令与函数的映射关系。

### 3.2 实现程序主体的循环

`shell.py`:
```python
def shell_loop():
    status = SHELL_STATUS_RUN

    while status == SHELL_STATUS_RUN:
	    # 打印命令提示符，形如 `[<user>@<hostname> <base_dir>]$`
        display_cmd_prompt()

        # 忽略 Ctrl-Z 或者 Ctrl-C 信号
        ignore_signals()

        try:
            # 读取命令
            cmd = sys.stdin.readline()

			# 解析命令
            # 将命令进行拆分，返回一个列表
            cmd_tokens = tokenize(cmd)

			# 预处理函数
            # 将命令中的环境变量使用真实值进行替换
            # 比如将 $HOME 这样的变量替换为实际值
            cmd_tokens = preprocess(cmd_tokens)

            # 执行命令，并返回 shell 的状态
            status = execute(cmd_tokens)
        except:
            # sys.exc_info 函数返回一个包含三个值的元组(type, value, traceback)
            # 这三个值产生于最近一次被处理的异常
            # 而我们这里只需要获取中间的值
            _, err, _ = sys.exc_info()
            print(err)

def main():
    # 在执行 shell_loop 函数进行循环监听之前，首先进行初始化
    # 即建立命令与函数映射关系表
    init()

    # 处理命令的主程序
    shell_loop()

if __name__ == "__main__":
    main()
```

在执行 `shell_loop` 之前我们先执行了 `init` 函数对已有的命令对应的函数进行注册。

另外 `shell_loop` 中的常量 `SHELL_STATUS_RUN` 是我们将在 `constants.py` 中进行定义，它的实际值为 `1` ，表示了 Shell 程序的监听循环还要继续。对应的还有一个常量为 `SHELL_STATUS_STOP` ，实际值为 `0` ，表示停止 Shell 程序的监听循环。

在 `shell_loop` 的主体中是一个 `while` 循环，其中涉及到了几个新函数：

1. `display_cmd_prompt()` ：打印命令提示符，形如 `[<user>@<hostname> <base_dir>]$` 。
2. `ignore_signals()` ：忽略 Ctrl-Z 或者 Ctrl-C 信号，防止通过 Ctrl-C 的方式终止程序。
3. `tokenize()` ：解析命令， 将命令进行拆分，返回一个字符串列表。
4. `preprocess()` ：预处理函数，将命令中的环境变量使用真实值进行替换，比如将 `$HOME`这样的变量替换为实际值。返回的也是一个字符串列表。
5. `execute()` ：执行命令，并返回 shell 的状态。

接下来我将一一介绍这几个函数的实现：

- `display_cmd_prompt()`

```python
# 展示命令提示符，形如 `[<user>@<hostname> <base_dir>]$`
def display_cmd_prompt():
    # getpass.getuser 用于获取当前用户名
    user = getpass.getuser()

    # socket.gethostname() 返回当前运行 python 程序的机器的主机名
    hostname = socket.gethostname()

    # 获取当前工作路径
    cwd = os.getcwd()

    # 获取路径 cwd 的最低一级目录
    # 比如 cwd = '/home/shiyanlou'
    # 执行之后 base_dir = 'shiyanlou'
    base_dir = os.path.basename(cwd)

    # 如果用户当前位于用户的根目录之下，使用 '~' 代替目录名
    home_dir = os.path.expanduser('~')
    if cwd == home_dir:
        base_dir = '~'

    # 输出命令提示符
    if platform.system() != 'Windows':
        sys.stdout.write("[\033[1;33m%s\033[0;0m@%s \033[1;36m%s\033[0;0m] $ " % (user, hostname, base_dir))
    else:
        sys.stdout.write("[%s@%s %s]$ " % (user, hostname, base_dir))
    sys.stdout.flush()
```

为了便于在终端调试中进行观察，在 Unix 系统中我们能通过转义字符来实现输出的高亮。例如 `'[\033[1;33m%s\033[0;0m@%s \033[1;36m%s\033[0;0m] $ '`  这串转义字符实现的效果如下：

![3.2-1](https://doc.shiyanlou.com/document-uid242676labid2113timestamp1473231057515.png)

转义序列以控制字符 `'ESC'` 和左括号 `'['` 开头，该起始序列称为控制序列引导符，通常由 `\033` 代替。

而通过转义序列设置终端显示属性的格式为：

```
\033[Param {;Param;...}m
```

其中转义序列以 `\033[` 为开头，`m` 为设置属性结束，中间部分的 `Param` 为属性值，`{}` 表示可以设置多个属性，属性值之间通过分号 `;` 隔离。

而属性值设置的对应关系如下：

```
\033[显示方式;前景色;背景色m字符串
```

「显示方式」常见参数如下：

| 参数值  | 作用    |
| :--- | :---- |
| 0    | 默认    |
| 1    | 粗体/高亮 |
| 4    | 单条下划线 |
| 5    | 闪烁    |

各「颜色」对应的参数如下表，「前景色」的实际颜色参数为 `30+参数值` 而「背景色」的实际颜色参数值为 `40+参数值` 。比如，前景色的红色参数值为 `31` 而背景色的红色参数值为 `41` 。

| 参数值  | 颜色   |
| :--- | :--- |
| 0    | 黑色   |
| 1    | 红色   |
| 2    | 绿色   |
| 3    | 黄色   |
| 4    | 蓝色   |
| 5    | 洋红色  |
| 6    | 青色   |
| 7    | 白色   |

- `ignore_signals()`

```python
def ignore_signals():
    if platform.system() != "Windows":
        # 忽略 Ctrl-Z 信号
        signal.signal(signal.SIGTSTP, signal.SIG_IGN)
    # 忽略 Ctrl-C 信号
    signal.signal(signal.SIGINT, signal.SIG_IGN)
```

`signal` 模块是 Python 内部的信号处理模块，用于解决程序内部信号处理。 

`signal.signal(signalnum, handler)` 函数是 `signal` 模块的核心，用于注册信号处理函数。接受两个参数，第一个是某个指定的信号，第二个是接收到指定信号后负责处理的函数。当进程接收到信号的时候，可以无视信号也可以采取特地行动。当参数 `handler` 设置为 `signal.SIG_IGN` 的时候表示采取忽略，而 `singal.SIG_DEL` 表示采用默认操作，当然也可以传递自定义的信号处理函数进去作为参数。

另外 `signal` 还定义了一些常量，以下只介绍程序中出现的两个：

1. `signal.SIGTSTP` 表示任务中断信号，可由组合键 Ctrl-Z 产生，属于 Unix 平台特有；
2. `signal.SIGINT` 表示强制中断信号，可由组合键 Ctrl-C 产生。

>  更多参考：[Python 官方文档](https://docs.python.org/3/)

- `tokenize()`

```python
def tokenize(string):
    # 将 string 按 shell 的语法规则进行分割
    # 返回 string 的分割列表
    # 其实就是按空格符将命令与参数分开
    # 比如，'ls -l /home/shiyanlou' 划分之后就是
    # ['ls', '-l', '/home/shiyanlou']
    return shlex.split(string)
```

- `preprocess()`

```python
def preprocess(tokens):
	# 用于存储处理之后的 token
    processed_token = []
    for token in tokens:
        if token.startswith('$'):
            # os.getenv() 用于获取环境变量的值，比如 'HOME'
            # 变量不存在则返回空
            processed_token.append(os.getenv(token[1:]))
        else:
            processed_token.append(token)
    return processed_token
```

- `execute()`

```python
# 一个自定义的信号处理函数，当当前进程被强制中断的时候触发
def handler_kill(signum, frame):
    raise OSError("Killed!")

def execute(cmd_tokens):
    # 'a' 模式表示以添加的方式打开指定文件
    # 这个模式下文件对象的 write 操作不会覆盖文件原有的信息，而是添加到文件原有信息之后
    with open(HISTORY_PATH, 'a') as history_file:
        history_file.write(' '.join(cmd_tokens) + os.linesep)

    if cmd_tokens:
        # 获取命令
        cmd_name = cmd_tokens[0]
        # 获取命令参数
        cmd_args = cmd_tokens[1:]

        # 如果当前命令在命令表中
        # 则传入参数，调用相应的函数进行执行
        if cmd_name in built_in_cmds:
            return built_in_cmds[cmd_name](cmd_args)

        # 监听 Ctrl-C 信号
        signal.signal(signal.SIGINT, handler_kill)

        # 如果当前系统不是 Winodws
        # 则创建子进程
        if platform.system() != "Windows":
            # Unix 平台
            # 调用子进程执行命令
            p = subprocess.Popen(cmd_tokens)

            # 父进程从子进程读取数据，直到读取到 EOF
            # 这里主要用来等待子进程终止运行
            p.communicate()
        else:
            # Windows 平台
            command = ""
            command = ' '.join(cmd_tokens)
            # 执行 command
            os.system(command)
    # 返回状态
    return SHELL_STATUS_RUN
```

至此，我们的 `shell.py` 主程序就已经写好了。

为了便于学习，以下提供了完整的 `shell.py` 文件。

```python
import os
import sys
import shlex
import getpass
import socket
import signal
import subprocess
import platform
from func import *

built_in_cmds = {}

def tokenize(string):
    return shlex.split(string)
    
def preprocess(tokens):
    processed_token = []
    for token in tokens:
        if token.startswith('$'):
            processed_token.append(os.getenv(token[1:]))
        else:
            processed_token.append(token)
    return processed_token

def handler_kill(signum, frame):
    raise OSError("Killed!")

def execute(cmd_tokens):
    with open(HISTORY_PATH, 'a') as history_file:
        history_file.write(' '.join(cmd_tokens) + os.linesep)
    if cmd_tokens:
        cmd_name = cmd_tokens[0]
        cmd_args = cmd_tokens[1:]
        if cmd_name in built_in_cmds:
            return built_in_cmds[cmd_name](cmd_args)
        signal.signal(signal.SIGINT, handler_kill)
        if platform.system() != "Windows":
            p = subprocess.Popen(cmd_tokens)
            p.communicate()
        else:
            command = ""
            command = ' '.join(cmd_tokens)
            os.system(command)
    return SHELL_STATUS_RUN

def display_cmd_prompt():
    user = getpass.getuser()
    hostname = socket.gethostname()
    cwd = os.getcwd()
    base_dir = os.path.basename(cwd)
    home_dir = os.path.expanduser('~')
    if cwd == home_dir:
        base_dir = '~'
    if platform.system() != 'Windows':
        sys.stdout.write("[\033[1;33m%s\033[0;0m@%s \033[1;36m%s\033[0;0m] $ " % (user, hostname, base_dir))
    else:
        sys.stdout.write("[%s@%s %s]$ " % (user, hostname, base_dir))
    sys.stdout.flush()

def ignore_signals():
    if platform.system() != "Windows":
        signal.signal(signal.SIGTSTP, signal.SIG_IGN)
    signal.signal(signal.SIGINT, signal.SIG_IGN)

def shell_loop():
    status = SHELL_STATUS_RUN
    while status == SHELL_STATUS_RUN:
        display_cmd_prompt()
        ignore_signals()
        try:
            cmd = sys.stdin.readline()
            cmd_tokens = tokenize(cmd)
            cmd_tokens = preprocess(cmd_tokens)
            status = execute(cmd_tokens)
        except:
            _, err, _ = sys.exc_info()
            print(err)

def register_command(name, func):
    built_in_cmds[name] = func

def init():
    register_command("cd", cd)
    register_command("exit", exit)
    register_command("getenv", getenv)
    register_command("history", history)

def main():
    init()
    shell_loop()

if __name__ == "__main__":
    main()
```

```checker
- name: check file content
  script: |
    #!/bin/bash
    grep main /home/shiyanlou/Code/shiyanlou_shell/shell.py
  error: shell.py 文件中还没有定义 main 函数
- name: check file content
  script: |
    #!/bin/bash
    grep shell_loop /home/shiyanlou/Code/shiyanlou_shell/shell.py
  error: shell.py 文件中还没有定义 shell_loop 函数
```

## 三、实现自定义命令

执行 `cd` 指令进入 `func/` 目录中，接下来我们将在这个目录中编写一些自定义的命令实现。

`func/` 目录包含的文件如下：

- `constants.py` ：定义了各种常量与路径
- `cd.py` ：实现了 Shell 的 `cd` 命令
- `exit.py` ：定义了 `exit` 命令，用来退出程序
- `getenv.py` ：实现 `getenv` 命令，获取系统变量的值
- `history.py`：实现 `history` 命令，展示输入的命令日志
- `__init__.py` ：使 `func` 文件夹能作为 Python 模块被导入

### 3.1 `constants.py`

```python
import os

SHELL_STATUS_STOP = 0
SHELL_STATUS_RUN = 1

# 使用 os.path.expanduser('~') 获取当前操作系统平台的当前用户根目录
HISTORY_PATH = os.path.expanduser('~') + os.sep + '.shiyanlou_shell_history'
```

在 `constants.py` 这个文件里我们定义一些常量，比如：

- `SHELL_STATUS_STOP ` ：Shell 进程的停止标识
- `SHELL_STATUS_RUN ` ：Shell 进程的运行标识
- `HISTORY_PATH ` ：命令日志的存储路径

### 3.2 `cd.py`

```python
from .constants import *

def cd(args):
    if len(args) > 0:
        os.chdir(args[0])
    else:
        os.chdir(os.getenv('HOME'))
    return SHELL_STATUS_RUN
```

这里实现了 `cd` 命令。

### 3.3 `exit.py`

```python
from .constants import *

def exit(args):
    return SHELL_STATUS_STOP
```

这里实现了退出 Shell 的 `exit` 命令。

### 3.4 `getenv.py`

```python
from .constants import *

def getenv(args):
    if len(args) > 0:
        print(os.getenv(args[0]))
    return SHELL_STATUS_RUN
```

这里实现了打印环境变量的的命令 `getenv` 。

### 3.5 `history.py`

```python
import sys
from .constants import *

def history(args):
    with open(HISTORY_PATH, 'r') as history_file:
        lines = history_file.readlines()
        limit = len(lines)
        if len(args) > 0:
            limit = int(args[0])
        start = len(lines) - limit
        for line_num, line in enumerate(lines):
            if line_num >= start:
                sys.stdout.write('%d %s' % (line_num + 1, line))
        sys.stdout.flush()
    return SHELL_STATUS_RUN
```

这里定义了用于获取打印命令日志记录的命令 `history` 。

### 3.6 `__init__.py`

```python
from .cd import cd
from .exit import exit
from .getenv import getenv
from .history import history
from .constants import *
```

最后为了方便调用，我们将该目录下所有模块都导入到了 `__init__.py` 文件之中。

## 四、运行程序

程序编写好之后，执行命令 `$ python3 shell.py` 便可运行。

![4-1](https://doc.shiyanlou.com/document-uid242676labid2113timestamp1473231524489.png)

如果你的程序出现问题，下面的命令将会下载由实验楼提供的参考代码：
```
$ wget http://labfile.oss.aliyuncs.com/courses/647/code.zip
```

## 五、实验总结

本次实验课程我们实现了一个简易的 Shell 程序，当然还存在一些瑕疵，比如不支持 Tab 键自动补充，命令输入错误之后无法使用回格键进行删除等等。这些就作为课堂作业交由同学们自己去尝试解决了，另外大家还可以继续扩展这个 Shell 的功能，使之更加完善。


## 六、参考

- [Python 官方文档](https://docs.python.org/3/)