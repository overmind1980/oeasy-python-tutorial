---
show: step
version: 1.0
enable_checker: true
---

# 文件系统换行格式 fileformat

## 回忆保留环境的细节

- 上次我们了解了viminfo
- 他能够保存
	- 命令行历史
	- 标记
	- 寄存器
- 把他和 `:mksession` 一起使用就可以完美复原环境了
- 还有什么是和环境相关的东西呢？🤔

### 文件系统换行格式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627709896045)

- 我们可以看到不同的文件系统是有不同的换行符符号的
- 主要有三种
	- `unix` - `<CarriageReturn>` - 对应0x0d
	- `mac` - `<LineFeed>` - 对应0x0a
	- `windows` - `<LineFeed>` - 对应0x0a0d
- 系统想要解释换行符的时候
- 怎么才能知道我用的到底是什么系统呢？
- 我们新建并打开一个文档 `oeasy.txt`

### 文件系统格式列表 `fileformats`

- 可以设定一个 `fileformats` 文件系统格式选项
- 是一个字符串
- vim就以此按照字符串中的系统去分析当前文档
- `:set fileformats?`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627710011521)

### 文件系统格式fileformat

- 但是最终具体是那种文件系统格式呢？
- `:set fileformat?`
	- 注意这个没有`s`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627710299149)

- 文件默认是按照unix的方式保存文件的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627710569426)

### 在文件里面写上三行
- 写上三行
	- oeasy
	- o2z
	- o3z

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627710616433)


### 二进制形态观察
- `:%!xxd`
	- `%`所有的行 
	- 强制转化为二进制形态 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627711008280)

我们来分析一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627711068599)

- `%!xxd -r`可以变回去

### 修改字符

- `:%!xxd`
- 找到`6f32`这个位置
	- 对应着`o2`两个字符
	- 用<kbd>r</kbd> 9把`6f32`变成`6f39`
    - 把 `2` 变成了 `9` 
	
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627711137801)

- 再变回来观察
	- `:!xxd -r`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627711351520)

### 修改系统格式

- `:set fileformat=dos`
	- 把系统格式设置为`dos`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627711720279)

- `:%!xxd`
	- 转化成二进制形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627711509158)

- 我们可以注意到这个时候换行符被解释为`0d0a`
    - 我们一般都是本地编辑本地看
    - 什么时候需要跨系统呢？

### 跨系统

- 我们可能从网上下载各种各样的文件
- 或者我们在linux上编辑的文件被windows系统打开之后一看
	- 全都没有回车
	- 这就很麻烦
- 所以我们可以指定当前文件的系统格式
- 说起来vi有个快速打开网上文件的方式

### 直接打开网络文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210731-1627711928624)

- 把光标放到链接上
    - `gf`
- 就可以gotoFile了
- 下面这些格式都支持
	- http
	- ftp
	- scp
	- rcp
- 回忆一下，跳转到函数定义`gd`

### 总结文件格式 
- 这次我们了解了文件格式
	- unix
	- dos
	- mac
- 不同文件格式对应的换行符不同
    - 可以修改当前文件的文件格式
    - 也可以用二进制来观察
    - 不同文件格式下
    - 具体换行符的样子
- 为什么'6f'就对应字母`o`
    - 中文字符又是如何编码的？🤔
- 下次再说！✋


