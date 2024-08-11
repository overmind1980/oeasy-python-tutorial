---
show: step
version: 1.0
enable_checker: true
---

# 返回值

## 回忆

- 上次了解了python文件引用的层级关系
	- 最高级的模块的`__name__`是`__main__`
	- 可以根据这个进行模块是否为最高级的判断
- 自制模块文件夹
	- `__main__.py`就是模块的入口地址
- - sys.exit函数
	- 可以直接跳出当前python执行的进程
	- 并返回一个数值
- sys.exit到底怎么用呢？

### 命令返回值

- 每个命令执行之后都会返回一个代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659860161394)

- 如果命令成功执行
	- 返回0
- 如果命令遇到了问题
	- 返回错误代码

### 错误代码

- "OS error code   1:  Operation not permitted"
- "OS error code   2:  No such file or directory"
- "OS error code   3:  No such process"
- "OS error code   4:  Interrupted system call"
- "OS error code   5:  Input/output error"
- "OS error code   6:  No such device or address"
- "OS error code   7:  Argument list too long"
- "OS error code   8:  Exec format error"
- "OS error code   9:  Bad file descriptor"
- "OS error code  10:  No child processes"
- "OS error code  11:  Resource temporarily unavailable"
- "OS error code  12:  Cannot allocate memory"
- "OS error code  13:  Permission denied"
- "OS error code  14:  Bad address"
- "OS error code  15:  Block device required"
- "OS error code  16:  Device or resource busy"
- "OS error code  17:  File exists"
- "OS error code  18:  Invalid cross-device link"
- "OS error code  19:  No such device"
- "OS error code  20:  Not a directory"
- "OS error code  21:  Is a directory"
- "OS error code  22:  Invalid argument"
- "OS error code  23:  Too many open files in system"
- "OS error code  24:  Too many open files"
- "OS error code  25:  Inappropriate ioctl for device"
- "OS error code  26:  Text file busy"
- "OS error code  27:  File too large"
- "OS error code  28:  No space left on device"
- "OS error code  29:  Illegal seek"
- "OS error code  30:  Read-only file system"
- "OS error code  31:  Too many links"
- "OS error code  32:  Broken pipe"
- "OS error code  33:  Numerical argument out of domain"
- "OS error code  34:  Numerical result out of range"
- "OS error code  35:  Resource deadlock avoided"
- "OS error code  36:  File name too long"
- "OS error code  37:  No locks available"
- "OS error code  38:  Function not implemented"
- "OS error code  39:  Directory not empty"
- "OS error code  40:  Too many levels of symbolic links"
- "OS error code  42:  No message of desired type"
- "OS error code  43:  Identifier removed"
- "OS error code  44:  Channel number out of range"
- "OS error code  45:  Level 2 not synchronized"
- "OS error code  46:  Level 3 halted"
- "OS error code  47:  Level 3 reset"
- "OS error code  48:  Link number out of range"
- "OS error code  49:  Protocol driver not attached"
- "OS error code  50:  No CSI structure available"
- "OS error code  51:  Level 2 halted"
- "OS error code  52:  Invalid exchange"
- "OS error code  53:  Invalid request descriptor"
- "OS error code  54:  Exchange full"
- "OS error code  55:  No anode"
- "OS error code  56:  Invalid request code"
- "OS error code  57:  Invalid slot"
- "OS error code  59:  Bad font file format"
- "OS error code  60:  Device not a stream"
- "OS error code  61:  No data available"
- "OS error code  62:  Timer expired"
- "OS error code  63:  Out of streams resources"
- "OS error code  64:  Machine is not on the network"
- "OS error code  65:  Package not installed"
- "OS error code  66:  Object is remote"
- "OS error code  67:  Link has been severed"
- "OS error code  68:  Advertise error"
- "OS error code  69:  Srmount error"
- "OS error code  70:  Communication error on send"
- "OS error code  71:  Protocol error"
- "OS error code  72:  Multihop attempted"
- "OS error code  73:  RFS specific error"
- "OS error code  74:  Bad message"
- "OS error code  75:  Value too large for defined data type"
- "OS error code  76:  Name not unique on network"
- "OS error code  77:  File descriptor in bad state"
- "OS error code  78:  Remote address changed"
- "OS error code  79:  Can not access a needed shared library"
- "OS error code  80:  Accessing a corrupted shared library"
- "OS error code  81:  .lib section in a.out corrupted"
- "OS error code  82:  Attempting to link in too many shared libraries"
- "OS error code  83:  Cannot exec a shared library directly"
- "OS error code  84:  Invalid or incomplete multibyte or wide character"
- "OS error code  85:  Interrupted system call should be restarted"
- "OS error code  86:  Streams pipe error"
- "OS error code  87:  Too many users"
- "OS error code  88:  Socket operation on non-socket"
- "OS error code  89:  Destination address required"
- "OS error code  90:  Message too long"
- "OS error code  91:  Protocol wrong type for socket"
- "OS error code  92:  Protocol not available"
- "OS error code  93:  Protocol not supported"
- "OS error code  94:  Socket type not supported"
- "OS error code  95:  Operation not supported"
- "OS error code  96:  Protocol family not supported"
- "OS error code  97:  Address family not supported by protocol"
- "OS error code  98:  Address already in use"
- "OS error code  99:  Cannot assign requested address"
- "OS error code 100:  Network is down"
- "OS error code 101:  Network is unreachable"
- "OS error code 102:  Network dropped connection on reset"
- "OS error code 103:  Software caused connection abort"
- "OS error code 104:  Connection reset by peer"
- "OS error code 105:  No buffer space available"
- "OS error code 106:  Transport endpoint is already connected"
- "OS error code 107:  Transport endpoint is not connected"
- "OS error code 108:  Cannot send after transport endpoint shutdown"
- "OS error code 109:  Too many references: cannot splice"
- "OS error code 110:  Connection timed out"
- "OS error code 111:  Connection refused"
- "OS error code 112:  Host is down"
- "OS error code 113:  No route to host"
- "OS error code 114:  Operation already in progress"
- "OS error code 115:  Operation now in progress"
- "OS error code 116:  Stale NFS file handle"
- "OS error code 117:  Structure needs cleaning"
- "OS error code 118:  Not a XENIX named type file"
- "OS error code 119:  No XENIX semaphores available"
- "OS error code 120:  Is a named type file"
- "OS error code 121:  Remote I/O error"
- "OS error code 122:  Disk quota exceeded"
- "OS error code 123:  No medium found"
- "OS error code 124:  Wrong medium type"
- "OS error code 125:  Operation canceled"
- "OS error code 126:  Required key not available"
- "OS error code 127:  Key has expired"
- "OS error code 128:  Key has been revoked"
- "OS error code 129:  Key was rejected by service"
- "OS error code 130:  Owner died"
- "OS error code 131:  State not recoverable"

### 尝试

- 命令运行之后报了6号错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659860817292)

- 这就是sys.exit的具体用法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659861344195)

- python文件中的函数也可以有返回值么？

### 函数返回值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659861831093)

- 定义了一个函数get_name
- 最终返回一个字符串"oeasy"
- 但是好像运行之后看不到输出
- 这是为什么呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659861902880)

- 函数确实有返回值
- 但是你得有变量接收这个返回值
- 然后有相应的的输出语句
- 这样才能看到效果
- 如何理解返回值呢？

### 先去再有返回

- 比如说打猎去 
- 本就有个目标
	- 你要带什么东西回来？
	- 要带猎物回来 吃的东西 
	- 可以使牛羊什么都行 
	- 但一定是猎物 
	- 要的是猎物 就得给猎物 
- 符合这个返回值的要求 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659862123424)

- 那什么是不符合返回值的要求呢？

### 返回值不支持后续操作

- 需要一个整型数字
- 给我一个字符串
- 还不能转化
- 驴唇不对马嘴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659862392868)

- 那怎么办？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659862711592)

- 需要整型就给整型
- 前后接口明确对接好
- 对不上就会报错
- 明白此次函数调用是干什么来的

### 不同函数

- 函数不同
	- 一般返回值不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659862780559)

- 调用打柴的函数
	- 最后要返回柴火

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659862123424)

- 调用打猎的函数
	- 最后要返回食物

### 不同参数

- 参数不同
	- 得到的结果不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660142681230)

- 给了酒、咖啡、奶油作为参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660142748218)

- 得到爱尔兰咖啡

### 如果没有返回值呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659863132533)

- 如果没有返回值
- 那么函数在执行完最后一条语句之后
- 默认返回的一个 `NoneType` 的值 `None`
- 什么是None呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659863235915)

- `None` 是一个常量
	- 相对来说空串、空列表、空集合都是变量
- `NoneType` 类型的 `None`
	- 指代`啥都不是`
- 这如何理解呢？

### 有返回值

- 如果你来超市是来买酱油的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659863341480)

- 那这个一定是把某种酱油返回回去
- 如果就是去超市遛遛弯呢？

### 没有返回值
- 不特意要买什么
- 那就是纯遛遛弯

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220807-1659863405708)

- 这个就是不`return` 任何东西 
- 虽然就是溜溜弯 
- 但是 他也真的走了一圈 
- 走的过程中也做了些什么 
	- 比如 打印 
	- 走到最后也会返回一`None` 
	- 没事 都走完了
	- 自然也就回到调用的地方了 
- 如果函数执行到一半
	- 遇到了`return`
	- 会如何呢？

### 函数中遇到return

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220809-1660006759078)

- 直接返回

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220809-1660006863111)

- return后面的内容都不编译成字节码(bytecode)
- 如果return放在条件和循环当中呢？

### 循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220809-1660007033805)

- 遇到return就直接跳出
- 看起来比break还狠
	- 无视外层多少个循环
	- 直接就跳出函数
	- 就像电路短路一样

### 总结

- 这次我们了解了 函数返回值
	- 函数可以返回字符串
	- 也可以返回整型变量
	- 甚至可以返回NoneType类型的None
	- 啥都不返回
		- 其实最终也返回了个None
- 在函数中遇到了return
	- 直接就返回了
	- 后面的东西全被短路
	- 什么是短路来着？？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676450113463)

- 我们下次再说👋