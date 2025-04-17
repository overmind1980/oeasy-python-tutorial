---
show: step
version: 1.0
enable_checker: true
---

#  注音元素 拼音 ruby rt 

## 回忆

- 上次我们研究的是注音
	- ruby
	- rt
	- rp
- 可以一个字一注
	- 也可以一起注音
	- 还可以二次或者多次注音
	- 更可以用rp来设置分割符号


![图片描述](https://doc.shiyanlou.com/courses/3781/labs/754896/uid1190679-20241214-1734143245892) 

- 注音 比 一般字体 要 小两号
	- 有没有 专门的 小号字体 呢？🤔
- 下次再说！👋

### 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669300096256)

- 效果如下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669300105567)

- 字体确实小了一号

### 看看例子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669300184051)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669300194518)

- small 会降低重要性吗？

### small

- small 并不是
	- 要降低重要性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669299968920)

- 如果要降低重要性
	- 还得用
		- em
		- strong
- strong如何降低重要性？

### 降低重要性

- 提高"我"、"喵喵" 的重要性
	- 没被提高重要性的"爱"就降低了重要性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670405759762)

- 重要性是相对的

### 小而重要

- 虽然small 
	- 但是strong

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221124-1669300210064)

- 字体的小
	- 不影响文本的重要性
- 每次都需要手动闭合标签
	- 有没有快速的方法?

### 快速闭合标签

- 关闭粘贴模式

```
:set nopaste
```

- inoremap
	- i 插入模式下
	- nore 不再次
	- map 映射

```
:inoremap jjj <ESC>
```

- 插入模式下 连按<kbd>j</kbd>三次
	- 会跳转到正常模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719480044654)

- 试验成功

### 闭合方式

```
:inoremap >>> ><ESC>%lyEh%a</<ESC>pa<ESC>F<i<CR><ESC>kA<CR>
```

- 设置映射模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719480221678)

- 在这个状态下
	- 连按3次<kbd>></kbd>
- 自动补全结束标签

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719480280709)

- 我想让这个补全的设定
	- 对vim打开的所有html文件
	- 都适用

### 通用型设置

- 设置模式为nopaste

```
echo "set nopaste" >> /home/shiyanlou/.vimrc
```

- 修改文件权限

```
sudo chmod 777 /usr/share/vim/vim81/ftplugin/html.vim
```

- 并追加映射关系

```
sudo echo 'inoremap >>> ><ESC>%lyEh%a</<ESC>pa<ESC>F<i<CR><ESC>kA<CR>' >> /usr/share/vim/vim81/ftplugin/html.vim
```

### 重开终端

- 在所有设定完成后
	- 重开终端

```
vi oeasy.html
```

- 尝试插入模式下使用>>>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240627-1719482608392)

- 此设定
	- 也将成为我们的基础设定
	- 以后只要有>>>就会自动补全
	- 结束标签

### 总结 
- 这次研究的是small
	- 小型字体
	- 看起来比较小
- small的小
	- 指的只是字体
	- 而不是重要性
		- 重要性靠的是strong
		- 强调靠的是em
- 一般上标和下标字体都比较小
	- 如何写上标和下标呢？🤔
- 下次再说！👋
