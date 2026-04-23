---
show: step
version: 1.0
enable_checker: true
---

# 安装环境

## 回忆

- 上次 使用selenium模拟了浏览器的行为
	- 模拟了填写表单的过程
	- 有两种方式可以填写表单
		- 可以 填写表单 + 加回车
		- 也可以 填写表单 + 点击按钮
- selenium 和 其他爬虫工具相比
	- 可以利用deckodriver 
		- 驱动firefox和网页做出
			- 交互动作 
			- interaction
- 还有什么交互动作可以做吗？

### 查阅文档

- https://www.selenium.dev/documentation/webdriver/elements/interactions/

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1193107/uid1190679-20241212-1733963646526) 

- 总共五种

### 自动翻页之类的交互

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1193107/uid1190679-20241212-1733968324218) 

### 询问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1193107/uid1190679-20241212-1733970667791) 

- 代码可以翻页

```
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# 初始化 WebDriver
driver = webdriver.Chrome(executable_path='path/to/chromedriver')  # 替换为你的 chromedriver 路径

# 访问百度视频首页
driver.get('https://haokan.baidu.com/')

# 等待页面加载完成
time.sleep(5)

# 获取初始的视频标题列表
video_titles = set()

# 定义下拉加载函数
def scroll_down():
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(3)  # 等待页面加载新内容

# 模拟下拉加载5次
for _ in range(5):
    scroll_down()

# 获取所有视频标题
title_elements = driver.find_elements(By.XPATH, '//div[@class="video-title"]')
for element in title_elements:
    video_titles.add(element.text)

# 打印视频标题列表
print("视频标题列表：")
for title in video_titles:
    print(title)

# 关闭浏览器
driver.quit()
```

### 确认xpath

- 找到 一个比较靠后的视频标题
	- 检查元素
	- 通过比照
	- 找到合适的xpath

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1193107/uid1190679-20241212-1733969998970) 

- 得到数量后
	- 向下翻页
- 再次执行
	- 得到数量增多效果

### 最终代码

```
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# 初始化 WebDriver
driver = webdriver.Firefox()  # 替换为你的 chromedriver 路径

# 访问微博首页
driver.get('https://haokan.baidu.com/')

# 等待页面加载完成
time.sleep(5)

# 获取初始的微博用户名列表
usernames = list()

# 定义下拉加载函数
def scroll_down():
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(6)  # 等待页面加载新内容

# 模拟下拉加载6次
for _ in range(6):
    scroll_down()

# 获取所有微博用户名
username_elements = driver.find_elements(By.XPATH, '/html/body/div/div/div[1]/div[2]/div[2]/div[3]/div/ul/li/a/div[2]/h3')
for element in username_elements:
    usernames.append(element.text)

# 打印用户名列表
print("微博用户名列表：")
for username in usernames:
    print(username)

# 关闭浏览器
driver.quit()
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1193107/uid1190679-20241212-1733971715811) 

### click


 
## 总结 🤔
- 下次再说👋