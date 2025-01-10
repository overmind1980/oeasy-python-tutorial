---
show: step
version: 1.0
enable_checker: true
---

# 字符画艺术(asciiart)

## 回忆上次内容

- 上次 将asciiart和颜色 配合起来玩
	- 7种 基本色
	- 变化多端
- 不过到 目前为止
	- 改的 都是`前`景色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674911360310)

- 可以自己定制小动物吗？

### ascii_art

- 一门非常年轻的亚文化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221012-1665540053591)

- 搜索asciiart
	- 有很多有意思的asciiart 可以下载

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221012-1665540084558)

- 有没有比较好玩的网站呢？

### 网站

- https://www.asciiart.eu/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681949668579)

### 鹿的ascii效果

```
            ___
    `=/~~~~~   ~\
     | ,      ,_ `\_/~\-
     >/'>/ ~|||`\( ,~\-
     |  |   `||   \;
\\\\//\\\/TX\\//\\\\|//
  __.------~~~-.
,'/             `\
" \  ,..__ | ,_   `\_,
   >/|/   ~~\||`\(`~,~'
   | `\     /'|   \_;
   "   "   "
Art by Philip Powell
 ,_)/
   (-'
 .-'\ 
  "'\'"""""'),
     )/---,( 
PjP / \  / |      , '     , '   , '   ,'   ,'    ,'   ;     ;
Deer
(             )
 `--(_   _)--'
      Y-Y
     /@@ \
    /     \
    `--'.  \             ,
        |   `.__________/)
\|/    \|/
  \    /
   \_/  ___   ___
   o o-'   '''   '
    O -.         |\
        | |'''| |
         ||   | |
         ||    ||
         "     "
         { }
         {^^,
         (   `-;
    _     `;;~~
   /(______);
  (         (
   |:------( )
 _//         \\
/ /          vv
   ()
   ))    ((
  //      \\
 | \\____// |
\~/ ~    ~\/~~/
 (|    _/o  ~~
  /  /     ,|
 (~~~)__.-\ |
  ``~~    | |
   |      | |

```

- 先去寻找小动物所在位置

### 寻找位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681949919893)

- 将apt.cow复制为deer.cow
- 然后进行编辑

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681954854712)

### 配置vim

- 目前用户为root
	- 配色方案比较难看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681955154520)

- :source /home/shiyanlou/.vimrc
	- 应用shiyanlou的vim配置
- 配置结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681955171690)

### 编辑小动物

- deer.cow的头尾结构都是有用的
	- 需要保留

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681955242682)

- 按<kbd>i</kbd>进入插入模式
	- 将红框中的内容删除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681955318914)

### 复制符号

- 复制两个$thoughts

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681955394344)

- $thoughts在渲染的时候
	- 会被输出成\\
- 然后准备粘贴鹿头

### 素材

```
   ))    ((
  //      \\
 | \\____// |
\~/ ~    ~\/~~/
 (|    _/o  ~~
  /  /     ,|
 (~~~)__.-\ |
  ``~~    | |
   |      | |
```

- 先将鹿头粘贴到剪贴板中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681949970585)

### 粘贴asciiart

- 插入模式下
	- 将鹿头粘贴过来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681955587286)

- <kbd>shiftt</kbd>+<kbd>v</kbd> 
	- 切换到行·可视块模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681955631994)

### 移动位置
- <kbd>:</kbd>
	- 切换到底行命令模式
		- 输入两个大于号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681955743852)

- 回车
	- 将整个鹿头移动

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681955787923)

- :wq
	- 保存并退出

### 使用小动物

- 基本成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230420-1681955851645)

## 总结

- 这次我们
	- diy了 自己的小动物
	- 这很亚文化
		- 很酷炫的 亚文化
		- 不是吗？

- 能否将图片 
	- 转化为asciiart 呢？？


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692104435694)

- 我们下次再说！👋
