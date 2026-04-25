# 自定义命名空间(namespace)

## 回忆

- 上次研究了跨文件模块调用函数
- 使用了两个模块
	- os
	- random
- 其中random还调用了os
- os有两部分组成
	- os.py
	- 还有一些系统调用的部分
	- 是系统相关的
	- 写在c的源码中
- 我可以自己定义一些
	- 模块
	- 变量
	- 函数么？

### 回忆

- 以前的苹果香蕉数量计算的例子还有印象吗？

```
#This is comment!
'''
input the number of apples
and assign the number to variable apple
'''
apple = input("How many apples do you got?\n")
try:
    apple = int(apple) #change from string to integer
except:
    print("\33[41m[error]  #  \33[0m", apple, "NaN")
else:
    print("You got ",apple,"apples")
'''
input the number of bananas
and assign the number to variable banana
'''
bananas = input("How many banans do you got?\n")
try:
    bananas = int(bananas)
except:
    print("\33[41m[error]\33[0m", bananas, "NaN")
else:
    print("You got ",bananas,"bananas")
```

![图片描述](uid1190679-20230629-1688047732689.png)

- python可以引用 
	- 同一个文件夹中的get_fruits.py
	- 只要import get_fruits就可以
- 这次做个oeasy.py


### 编写模块

![图片描述](uid1190679-20220803-1659524087182.png)

- 首先进入/usr/lib/python3.8位置
- 然后尝试调用

![图片描述](uid1190679-20220803-1659524156659.png)

- 引用之后可以再次引用么？

### 引用

![图片描述](uid1190679-20220803-1659526900182.png)

- 任意一个位置都可以引用这个模块么？

![图片描述](uid1190679-20220803-1659524285826.png)

- 任意位置 都可以引用
- 这样我们就可以复用原来的代码了！！！
- 而且把一个小功能封装成一个模块

### 就像电子的模块

- 具体这个音频信号 
	- 怎么发生 
	- 对波形进行怎样的调整 
	- 模拟出什么样的音色
	- 都是可以调整的 

![图片描述](uid1190679-20220905-1662369258824.png)

- 觉得某个音色不错
	- 可以把这个调整的结果固化下来 

![图片描述](uid1190679-20240301-1709288597554.png)

- 变成一个模块 
- 下次调用模块就成了 

### 小模块

- 将 模块 封装为接口(Interface)
	- 没有那么多的线了
	- 只有少量接口对外
	- 一调用就好使

![图片描述](uid1190679-20220905-1662369342637.png)

- 函数也是封装
	- 模块也是封装
	- 有什么区别呢？

### 模块

- 一个模块里面包含若干函数、设置
- 我们的一个电子琴 
	- 好像 是一个 封装好了的 模块

![图片描述](uid1190679-20220905-1662369421730.png)

- 模块 中 包括常量
	- math.pi
	- math.e

- 模块里面有很多功能(function)函数
	- 比如 设置速度 BPM
	- 比如 自动节拍器 
	- 比如 按下一个 按键


### 函数

- 函数 是模块中的 一部分
	- 这些都是 函数的一部分

![图片描述](uid1190679-20240301-1709288986149.png)

- 函数就会有参数
	- 音符
	- 音色
	- 时长
- 参数给到位
	- 按键 就是 对具体函数的调用

- 模块和具体文件是什么关系呢？

### 模块定义

- 一个oeasy.py文件就是一个模块(module)

![图片描述](uid1190679-20220803-1659526480959.png)

- 被引用的模块里面会有一个全局(global)变量
	- `__name__` 这个name里面存着模块的名字
- 我们去试试

### `__name__`

![图片描述](uid1190679-20220803-1659526657711.png)

- 重新编辑/usr/lib/python3.8/oeasy.py

![图片描述](uid1190679-20220803-1659527044241.png)

- module名就是文件名

![图片描述](uid1190679-20220803-1659527162387.png)

### name判断

- 运行程序的时候判断
	- `if __name__ == '__main__'`
	- 判断当前 py 文件 
	- 是否 是作为 运行主模块


![图片描述](uid1190679-20240302-1709325178754.png)

- 是的话
	- 就执行 分支中的语句
- 否的话
	- 就不执行 分支中的语句

### 主程序

- 在 python中

![图片描述](uid1190679-20240302-1709325516868.png)

- 主模块 也叫 顶层模块

### 五子棋程序

- 将五子棋 程序 保存成gobang.py

```
import numpy as np

# 创建棋盘
def create_board():
    board = np.zeros((15, 15))
    return board


# 画棋盘
def draw_board(board):
    for i in range(15):
        for j in range(15):
            if board[i][j] == 0:
                print(". ", end="")
            elif board[i][j] == 1:
                print("X ", end="")
            elif board[i][j] == 2:
                print("O ", end="")
        print()

# 检查胜利条件
def check_win(board, player):
    for i in range(15):
        for j in range(15):
            if j + 4 < 15 and np.all(board[i, j:j + 5] == player):
                return True
            if i + 4 < 15 and np.all(board[i:i + 5, j] == player):
                return True
            if i + 4 < 15 and j + 4 < 15 and np.all(np.diag(board[i:i + 5, j:j + 5]) == player):
                return True
            if i - 4 >= 0 and j + 4 < 15 and np.all(np.diag(np.flipud(board)[i - 4:i + 1, j:j + 5]) == player):
                return True
    return False

# 主程序
def main():
    board = create_board()
    player = 1

    while True:
        draw_board(board)

        row = int(input("Player {} Row: ".format(player)))
        col = int(input("Player {} Column: ".format(player)))

        if board[row][col] == 0:
            board[row][col] = player
            if check_win(board, player):
                draw_board(board)
                print("Player {} wins!".format(player))
                break
            player = 2 if player == 1 else 1
        else:
            print("Invalid move, try again.")

if __name__ == "__main__":
    main()
```

- 将功能 封装为模块

### 尝试运行

- 可以运行程序
- 在游乐场中导入gobang模块则不会运行

```
python3 gobang.py
```

- 可以 在输出 之前 先清屏吗?
- 自己找找位置
	- 试着实现

### 总结
- 进入系统类库的位置
	- /usr/lib/python3.8
- 编写我们自己的oeasy.py
	- 这个文件就是一个模块
	- 这个模块可以在游乐场和py文件中被导入(import)
	- 导入后模块执行主程序
- 还有什么其他方式 可以定义模块吗？
- 我们下次再说👋

