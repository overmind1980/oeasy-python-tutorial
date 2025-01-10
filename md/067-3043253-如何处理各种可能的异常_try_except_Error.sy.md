---
show: step
version: 1.0
enable_checker: true
---

#  如何处理各种可能的异常_try_except_Error 

## 回忆上次内容

- 我们了解了 try 的细节
  - try
	- 尝试运行
  - except
	- 发现异常时运行的代码块
  - else
	- 没有发现异常时运行的代码块
- 注意！
	- 都要有英文半角的冒号
	- 子句都要通过 4 个字符的缩进控制范围

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241120-1732069802779) 

- 错误类型太多了
	- 有 `通用`错误类型 吗？
	- 能兜住 `所有`错误 那种？

### 文档提示

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241120-1732070238291) 

- 文档说 不带参数就行

### 各种错误

```
try:
    a
    i = int("123")
    j = i / 0
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
except:
    print("Something is Wrong!")
else:
    print("Nothing Wrong")
```

- 最后的except
	- 包括 NameError
	- 包含了 所有错误	

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241110-1731220597833) 

### 一网不捞鱼

- 一网不捞鱼
- 二网不捞鱼
- 三网捞个小尾巴尾巴尾巴尾巴尾巴尾巴……鱼

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230729-1690633742375)

- 第三网 
	- 是通用模式except
	- 可以捕获到 `所有`的异常
	- 一网打尽

- 如果这句except排在前面的话
	- 后面 这些异常处理方法 
	- 会 被 `屏蔽` 吗？

### 尝试调换位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240325-1711337797211)

- :9,10m4
	- 将从第9句到第10句
	- 移动到第4句后面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240325-1711337829392)

- 尝试运行

### 运行结果

- 要 求通用异常处理方式
	- except的 位置
	- 必须 是 `最`后一个
	- 通用的处理 得保底

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822349974)

- 可以让这个except的意义
	- 更明确一些吗？
	- 到底是什么错误？ 

### 明确含义

```
try:
    a
    i = int("123")
    j = i / 0
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
except Exception:
    print(Exception)
else:
    print("Nothing Wrong")
```

- 这样
	- 会将 错误信息
	- 输出 吗？

### 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822841880)

- 输出了 一个通用的错误
	- Exception类
	- 并不知道 错误类型
- 报错 能再 `明确点儿` 吗？

### 修改代码

```
try:
    a
    i = int("123")
    j = i / 0
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
except Exception as e:
    print(e)
else:
    print("Nothing Wrong")
```

- 尝试将异常作为变量
	- 并输出报错信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700642570017)

### 尝试调试

- 执行第2句 遇到不认识的的a
	- 直接报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822992865)

- 跳过try中 后面的语句
	- 直接找 处理方式

### 找到通用处理方式

- 前两个处理方式
	- 都不对

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700823093943)

- 找到第三个
	- 通用的异常处理方式
- 如果 前面找到了 
	- 具体错误类型
- 还会继续 寻找
	- 最后的 通用异常处理 吗？

### 捕获异常

```
try:
    a
    i = int("123")
    j = i / 0
except NameError:
	print(NameError)
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
except Exception as e:
    print(e)
else:
    print("Nothing Wrong")
```

- 在运行过程中
	- 出现了NameError
	- 在 第一个 尝试捕获异常的位置
		- 捕获到了异常
	- 进入except NameError子句
		- 完成 处理过程
		- 输出NameError
	- 跳过后面所有 except
	- 跳过else

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240325-1711338241549)

- 执行完毕
- 异常变量会如何呢？

### del 

- 文档说会给删了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241120-1732070578291) 

- except 这个词 怎么理解呢？

### except

- except
	- ex 向外
	- cept 拿
	- 向外拿
	- 挑出去
	- 排除

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241110-1731225656577) 

- 除了...之外

### capture

- capture
	- cept 拿
	- 拿到
	- 抓到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241110-1731223831072)

- 捕获

### captive

- captive
	- cept 拿
	- 被拿到的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241110-1731224137639) 

- 俘虏

### accept

- accept
	- ac 向里面
	- cept 拿
	- 往里拿

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241110-1731223594414)

- 接受

### concept

- concept
	- con 一起
	- cept 拿
	- 一起拿
	- 把想法放在一起拿起来
	- 整合想法

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241110-1731224597242) 

- 构思 概念

### conceive

- conceive 
	- con 一起
	- cept 拿
	- 一起拿
	- 构思，设想

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241110-1731224268201) 

- 怀孕 

### perceive

- perceive 
	- per 完全
	- cept 拿
	- 完全拿捏

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241110-1731225068476)

- 理解
- 认为

### deceive

- deceive
	- de 向下
	- cept 拿
	- 向下拿
	- 借助信息的不对等 去拿

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241110-1731225390359)

- 欺骗

### receive

- receive
	- re 再次
	- cept 拿
	- 再次拿回来

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241110-1731225523325) 

- 收到

### cept 总结

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241110-1731226031722) 

## 总结

- 我们了解了 try 的细节
	- except 可以 捕获到异常 
		- 但报错比较简单

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241110-1731226095163) 

- 游乐场里面的 报错
	- 更全 更丰富
	- 还告诉哪个文件、第几行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727489367799)

- 可以跟踪到 `最详细` 报错信息 吗？🤔

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043253/uid1190679-20241110-1731226126691) 

- 我们下次再说！👋
