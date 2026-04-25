# 类型提示(type hint)

## 回忆

- 上次研究了形(formal)参(parameter)的分类
- 分三种
	- 纯位置形参
	- 纯关键字形参
	- 既可位置又可关键字形参
- 我们用到的都是第三种
- 真的可以有纯位置的形参么？

![图片描述](../0251/uid1190679-20220904-1662253940991.png)

### 查看文档

![图片描述](../0252/uid1190679-20220829-1661783640535.jpg)

- /之前的是纯位置的
- /、*之间的是两可的(位置、关键字都可以)
- *之后的是纯关键字的

### 修改代码

![图片描述](../0252/uid1190679-20220830-1661821831889.png)

- 结果

![图片描述](../0252/uid1190679-20220830-1661821969553.png)

- 3 个参数
	- 1 个 positiononly
	- 2 个 既可以position也可以keyword
- 如果我要用keyword形式给sub呢？

### 纯position必须纯

```
import sys
def sentence(sub: str="I",\
             /,\
             pre: str = "love",\
             obj: str = "you"):
    """
    a sentence is composed by 3 parts,
    sub is abbreviation as subject
    pre is abbreviation as predicate
    obj is abbreviation as object
    """
    frame = sys._getframe()
    code = frame.f_code
    print("co_argcount:",code.co_argcount)
    print("co_posonlyargcount:",code.co_posonlyargcount)
    print("co_kwonlyargcount:",code.co_kwonlyargcount)
    print(sub, pre, obj)

sentence(sub="oeasy")
```
![图片描述](../0252/uid1190679-20220830-1661822146207.png)

- sub声明了是纯position
- 不能用keyword来调用他

### 后面呢？

![图片描述](../0252/uid1190679-20220830-1661822250155.png)

![图片描述](../0252/uid1190679-20220830-1661822258226.png)

- 后面都是两可得
	- 既可以是position
	- 也可以是keyword
	- 不only

![图片描述](../0252/uid1190679-20250112-1736652621889.png) 


### 总结 
- 我们这次研究了纯位置(position)参数(parameter)
	- 纯位置参数在/之前
	- 纯位置参数只能用位置
	- 不能用关键字(keyword)
- 那和纯位置相对的
- 纯关键字(keyword only)
- 如何理解呢🤔

![图片描述](../0252/uid1190679-20220829-1661783640535.jpg)

- 我们下次再说👋