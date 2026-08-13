---
show: step
version: 1.0
enable_checker: true
---
# 加减法计算器

## 一、实验介绍

#### 1.1 实验内容

基本的加减法表达式计算器，用来学习生成表达式及表达式的遍历，输入一个加减的表达式（`20+15-5+30+8`），计算出表达式的结果（`68`）。

#### 1.2 实验知识点

+ python3 语法基础
+ 表达式二叉树的生成及遍历

#### 1.3 实验环境

+ python3.5
+ Xfce 终端

#### 1.4 适合人群

本课程难度为一般，属于初级级别课程，适合具有Python基础的用户，以及对数据结构中的树有一定了解的用户。


## 二、实验原理

这个项目涉及到的数据结构比较复杂，表达式树是计算表达式结果的一种方法，在这个项目中我们通过遍历表达式树求得加减表达式的结果。

程序分解为以下几个步骤：

1. 输入表达式：使用`raw_input`获得输入字符串
2. 从表达式字符串中提取整数及操作符，得到 `Token`列表 （表达式中的元素，有两种类型：操作符元素和整数元素）
3. 从 `Token` 列表生成表达式树
4. 遍历表达式树求值
5. 输出计算结果

## 三、实验步骤
本节将通过实践操作，带领大家实现加减法计算器。

### 3.1 输入处理

对于输入的字符串我们需要进行遍历从而提取数字及操作符，因此我们设计一个数据结构来处理字符串的遍历过程。

定义这个输入处理类为Buffer。Buffer需要有一个offset来表示当前字符串中扫描的位置，同时提供两个接口：

+ peek()：获取当前offset位置的字符，如果已经到了最后则返回None
+ advance()：将offset向后移动一位

将字符串对象转为Buffer对象处理，最大的好处是Buffer对象可以记录自己当前扫描到的位置，不需要由外部变量记录，从而降低了扫描字符串提取Token的代码复杂度。

```
# 输入字符串处理    
class Buffer(object):
    def __init__(self, data):
        self.data = data
        self.offset = 0

    # 提取offset位置处的一个字符
    def peek(self):
        # 如果没有后续字符则返回None
        if self.offset >= len(self.data):
            return None
        return self.data[self.offset]

    # 取字符的位置向后移动一位    
    def advance(self):
        self.offset += 1
```

### 3.2 生成 Token 列表

Token 可以看作是表达式中的元素，由于程序输入的字符串中只支持整数及加减操作符，Token 的类型有两种：整数 Token 和操作符 Token。

首先定义 Token 的基础类型，consume() 函数用来处理 Buffer 对象，从 Buffer 对象中提取一个 Token ：

```
class Token(object):
    def consume(self, buffer):
        pass
```

继承 Token 基础类定义 IntToken 整数 Token和 OperatorToken 操作符 Token。

```
# 整数类型的Token
class IntToken(Token):
    # 从字符串中读取字符直到字符不是整数
    def consume(self, buffer):
        accum = ""
        while True:
            ch = buffer.peek()
            if ch is None or ch not in "0123456789":
                break
            else:
                accum += ch
                buffer.advance()
        # 如果读取的内容不为空则返回整数，否则返回None         
        if accum != "":
            return ("int", int(accum))
        else:
            return None 
# 操作（+，-）类型的Token
class OperatorToken(Token):
    # 读取一个字符，然后返回这个字符，如果字符不是+-，则返回None
    def consume(self, buffer):
        ch = buffer.peek()
        if ch is not None and ch in "+-":
            buffer.advance()
            return ("ope", ch)
        return None
```

两个类分别实现了 `consume()` 函数，返回不同的二元组 `("int", number)`及`("ope", + or -)`。

下面将介绍如何从字符串中提取 Token 列表。

**详细步骤**

从字符串中提取 Token 的步骤是顺序读取字符，判断字符类型，然后把 Token 的类型和值存入 Token 列表。

具体步骤如下：

1. 以此扫描遍历字符串中的每一个字符（使用可以存下遍历位置的`Buffer`对象）
2. 分别使用两种Token对象进行测试如果可以获取正确的Token则存入 Token 列表，如果无法获取则报错
3. 返回 Token 列表 `tokens`

**示例代码**

```
# 从字符串中获取整数及操作的Token
def tokenize(string):
    buffer = Buffer(string)
    tk_int = IntToken()
    tk_op = OperatorToken()
    tokens = []
    
    while buffer.peek():
        token = None
        # 用两种类型的Token进行测试
        for tk in (tk_int, tk_op):
            token = tk.consume(buffer)
            if token:
                tokens.append(token)
                break
        # 如果不存在可以识别的Token表示输入错误
        if not token:
            raise ValueError("Error in syntax")

    return tokens
```
### 3.3 生成表达式树

如果要生成表达式树，我们首先需要定义节点的数据类型，包括两种节点（整数节点和操作符节点），需要理解整数节点是叶子节点，而操作符节点则有左右子节点，数据类型定义代码如下：

```
# 表达式二叉树的节点
class Node(object):
    pass

# 整数节点     
class IntNode(Node):
    def __init__(self, value):
        self.value = value

# 操作符节点 (+ 或 -)
class BinaryOpNode(Node):
    def __init__(self, kind):
        self.kind = kind
        self.left = None    # 左节点
        self.right = None   # 右节点
```

从 Token 列表中顺序读取 Token，根据 Token 的类型生成表达式树，表达式树的叶子节点为整数，其余节点为操作符。

步骤如下：

1. Token 列表中第一个元素必然为整数（加减法表达式先输入的必然是一个数字），提取这个Token作为第一个叶子节点
2. 依次循环从Token列表中提取Token
3. 如果Token为操作符，则将先前的Token存为左节点
4. 如果Token为整数，则将该Token保存为前一个节点的右节点

**示例代码**

```
# 从Token列表生成表达式二叉树
def parse(tokens):
    if tokens[0][0] != 'int':
        raise ValueError("Must start with an int")
    #取出tokens[0]，该Token类型为整数
    node = IntNode(tokens[0][1])
    nbo = None
    last = tokens[0][0]
    #从第二个Token开始循环取出
    for token in tokens[1:]:
        #相邻两个Token的类型一样则为错误
        if token[0] == last:
            raise ValueError("Error in syntax")
        last = token[0]
        #如果Token为操作符，则保存为操作符节点，把前一个整数Token作为左子节点
        if token[0] == 'ope':
            nbo = BinaryOpNode(token[1])
            nbo.left = node
        #如果Token为整数，则将该Token保存为右节点
        if token[0] == 'int':
            nbo.right = IntNode(token[1])
            node = nbo
    
    return node
```

**输入示例**

从上面中的Token列表得到的表达式树如下图

![1-3.3-1](https://doc.shiyanlou.com/py1.png)


### 3.4 遍历表达式树并求值


**详细步骤**

步骤简单，需要理解递归函数的概念。从表达式树的根节点开始，先求左子树的值，再计算右子节点的值。最终求得整个表达式树的值。求值过程采用递归操作。


**示例代码**

```
# 采用递归的方法计算表达式二叉树的值
def calculate(nbo):
    # 如果左节点是二叉树，则先计算左节点二叉树的值
    if isinstance(nbo.left, BinaryOpNode):
        leftval = calculate(nbo.left)
    else:
        leftval = nbo.left.value
    # 根据操作符节点是加还是减计算  
    if nbo.kind == '-':
        return leftval - nbo.right.value
    elif nbo.kind == '+':
        return leftval + nbo.right.value
    else:
        raise ValueError("Wrong operator")
```

**输入示例**

递归计算的过程如下图所示：

![1-3.4-1](https://doc.shiyanlou.com/py2.png)

![1-3.4-2](https://doc.shiyanlou.com/py3.png)

![1-3.4-3](https://doc.shiyanlou.com/py4.png)


如上图步骤所示，通过对表达式二叉树的遍历，我们得到了最终的值。需要大家理解表达式二叉树的形式与遍历的方法。

### 3.5 完整代码

大家可以按照上述步骤开发出自己的计算器，也可以参考下列完整代码，代码中有比较详细的注释，如果发现有任何问题可以到[实验楼问答](https://www.shiyanlou.com/questions)发帖询问，老师会解决你项目中的所有问题，保证你可以在实验楼中完成并理解该项目。

```
# 输入字符串处理    
class Buffer(object):
    def __init__(self, data):
        self.data = data
        self.offset = 0
    
    # 提取offset位置处的一个字符
    def peek(self):
        # 如果没有后续字符则返回None
        if self.offset >= len(self.data):
            return None
        return self.data[self.offset]
        
    # 取字符的位置向后移动一位    
    def advance(self):
        self.offset += 1
# 定义字符节点
class Token(object):
    def consume(self, buffer):
        pass
# 整数类型的Token
class IntToken(Token):
    # 从字符串中读取字符直到字符不是整数
    def consume(self, buffer):
        accum = ""
        while True:
            ch = buffer.peek()
            if ch is None or ch not in "0123456789":
                break
            else:
                accum += ch
                buffer.advance()
        # 如果读取的内容不为空则返回整数，否则返回None         
        if accum != "":
            return ("int", int(accum))
        else:
            return None 
# 操作（+，-）类型的Token
class OperatorToken(Token):
    # 读取一个字符，然后返回这个字符，如果字符不是+-，则返回None
    def consume(self, buffer):
        ch = buffer.peek()
        if ch is not None and ch in "+-":
            buffer.advance()
            return ("ope", ch)
        return None

# 表达式二叉树的节点
class Node(object):
    pass

# 整数节点     
class IntNode(Node):
    def __init__(self, value):
        self.value = value

# 操作符节点 (+ 或 -)
class BinaryOpNode(Node):
    def __init__(self, kind):
        self.kind = kind
        self.left = None    # 左节点
        self.right = None   # 右节点 

# 从字符串中获取整数及操作的Token
def tokenize(string):
    buffer = Buffer(string)
    tk_int = IntToken()
    tk_op = OperatorToken()
    tokens = []
    
    while buffer.peek():
        token = None
        # 用两种类型的Token进行测试
        for tk in (tk_int, tk_op):
            token = tk.consume(buffer)
            if token:
                tokens.append(token)
                break
        # 如果不存在可以识别的Token表示输入错误
        if not token:
            raise ValueError("Error in syntax")

    return tokens

# 从Token列表生成表达式二叉树
def parse(tokens):
    if tokens[0][0] != 'int':
        raise ValueError("Must start with an int")
    #取出tokens[0]，该Token类型为整数
    node = IntNode(tokens[0][1])
    nbo = None
    last = tokens[0][0]
    #从第二个Token开始循环取出
    for token in tokens[1:]:
        #相邻两个Token的类型一样则为错误
        if token[0] == last:
            raise ValueError("Error in syntax")
        last = token[0]
        #如果Token为操作符，则保存为操作符节点，把前一个整数Token作为左子节点
        if token[0] == 'ope':
            nbo = BinaryOpNode(token[1])
            nbo.left = node
        #如果Token为整数，则将该Token保存为右节点
        if token[0] == 'int':
            nbo.right = IntNode(token[1])
            node = nbo
    
    return node
# 采用递归的方法计算表达式二叉树的值
def calculate(nbo):
    # 如果左节点是二叉树，则先计算左节点二叉树的值
    if isinstance(nbo.left, BinaryOpNode):
        leftval = calculate(nbo.left)
    else:
        leftval = nbo.left.value
    # 根据操作符节点是加还是减计算  
    if nbo.kind == '-':
        return leftval - nbo.right.value
    elif nbo.kind == '+':
        return leftval + nbo.right.value
    else:
        raise ValueError("Wrong operator")

# 判断是否只输入了一个整数
def evaluate(node):
    # 如果表达式中只有一个整数，则直接返回值
    if isinstance(node, IntNode):
        return node.value
    else:
        return calculate(node)

# 主程序，输入输出处理  
if __name__ == '__main__':
    # 获取输入字符串
    input = input('Input:')
    # 从输入字符串获得Token列表
    tokens = tokenize(input)
    # 从Token列表生成表达式树
    node = parse(tokens)
    # 遍历计算表达式树并输出结果
    print("Result:"+str(evaluate(node)))

```

### 3.6 运行示例

+ 我们将完整代码写入到 `/home/shiyanlou/Code/calculator.py` 文件中执行。如下所示：

```txt 
$ python3 calculator.py
Input:3+5
Result:8
$ python3 calculator.py
Input:79-293+1920
Result:1706
```
```checker
- name: check if calculator.py exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/Code/calculator.py
  error:
    还没有在 /home/shiyanlou/Code 目录下新建 calculator.py 文件
```

## 四、总结


本实验只实现了一个简单的加减法计算器，有很多不足。基于本课的学习，大家可以在此代码基础上实现扩展，需要注意表达式树的创建以及遍历流程，以及对于不同 Token的定义和处理：

1. 支持小数的操作
2. 支持乘除法操作
3. 支持括号的处理


