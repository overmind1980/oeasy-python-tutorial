---
show: step
version: 1.0
enable_checker: true
---

# 安装环境

## 回忆

- 上次使用selenium模拟了浏览器的行为
- 模拟了填写表单的过程
- 可以填写表单加回车
- 也可以填写表单点击按钮
- 很多日常的填报工作可以用selenium的方式来填报提交
- 大幅提高效率

### 火狐的无头模式

- 所谓无头模式
	- 就是不启动 图形用户界面
	- 直接在终端里面运行的模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231028-1698461440674)

- 具体怎么用呢？

### 查询帮助文档

- 帮助文档
	- https://www.selenium.dev/documentation/webdriver/browsers/firefox/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231028-1698461484939)

- 设置driver中的arguement

### 命令行

- 执行命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231028-1698461915460)

- 确实firefox命令
	- 可以有这么一个参数
- 具体 如何使用呢？

### 具体使用

```
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium import webdriver
from lxml import etree
import time
service = Service(executable_path="geckodriver")
options = webdriver.FirefoxOptions()
options.add_argument("-headless")
driver = webdriver.Firefox(options=options,service=service)
driver.get("http://baidu.com")
text_box = driver.find_element(by=By.NAME, value="wd")
text_box.send_keys("Selenium")
text_box.send_keys(Keys.ENTER)
time.sleep(5)#延迟时间等待响应
message = driver.title
print(message)
driver.quit()
```

- 产生结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231028-1698462464668)

## 总结 
- 这次我们了解了
	- 无头模式
	- headless
	- 可以不启动浏览器ui
	- 直接就执行相关代码

- 我们下次玩点什么呢？🤔
- 下次再说👋