---
show: step
version: 1.0
enable_checker: true
---

# 安装环境

## 回忆

- 上次 使用selenium模拟了浏览器的行为
	- 模拟了填写表单的过程
		- 可以 填写表单 + 加回车
		- 也可以 填写表单 + 点击按钮
- 有两种方式可以填写表单

```python3
submit_button = driver.find_element(by=By.CSS_SELECTOR, value="button")
text_box = driver.find_element(by=By.NAME, value="my-text")
```

- 还有什么其他方法 能够选择元素吗？

### 查看帮助

- https://www.selenium.dev/documentation/webdriver/elements/locators/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231103-1699017158978)

- 八种传统定位器

### 构建环境

```shell
sudo service nginx start
```

- 尝试编辑test.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231104-1699057098206)

```
sudo vi /usr/share/nginx/html/test.html
```

### 编辑网页

```html
<html>
<body>
<style>
.information {
  background-color: white;
  color: black;
  padding: 10px;
}
</style>
<h2>Contact Selenium</h2>

<form action="/action_page.php">
  <input type="radio" name="gender" value="m" />Male &nbsp;
  <input type="radio" name="gender" value="f" />Female <br>
  <br>
  <label for="fname">First name:</label><br>
  <input class="information" type="text" id="fname" name="fname" value="Jane"><br><br>
  <label for="lname">Last name:</label><br>
  <input class="information" type="text" id="lname" name="lname" value="Doe"><br><br>
  <label for="newsletter">Newsletter:</label>
  <input type="checkbox" name="newsletter" value="1" /><br><br>
  <input type="submit" value="Submit">
</form> 

<p>To know more about Selenium, visit the official page 
<a href ="www.selenium.dev">Selenium Official Page</a> 
</p>

</body>
</html>
```

### 默认页面状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231106-1699239496375)

### 配置环境

```shell
sudo apt update --fix-missing
sudo apt install firefox-geckodriver
pip3 install selenium
```

- 安装驱动和类库

### 八大定位之一 Class Name

```
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium import webdriver
import time
service = Service(executable_path="geckodriver")
driver = webdriver.Firefox(service=service)
driver.get("http://localhost/test.html")
text_box = driver.find_element(By.CLASS_NAME, "information")
text_box.clear()
text_box.send_keys("by class name")
time.sleep(10)
text_box.send_keys(Keys.ENTER)
driver.quit()
```

- 使用class Name定位

### 八大定位之二 使用CSS selector 

```
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium import webdriver
import time
service = Service(executable_path="geckodriver")
driver = webdriver.Firefox(service=service)
driver.get("http://localhost/test.html")
text_box = driver.find_element(By.CSS_SELECTOR, "#fname")
text_box.clear()
text_box.send_keys("by css selector")
time.sleep(10)
text_box.send_keys(Keys.ENTER)
driver.quit()
```

### 八大定位之三 使用id

```
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium import webdriver
import time
service = Service(executable_path="geckodriver")
driver = webdriver.Firefox(service=service)
driver.get("http://localhost/test.html")
text_box = driver.find_element(By.ID, "lname")
text_box.clear()
text_box.send_keys("by id ")
time.sleep(10)
text_box.send_keys(Keys.ENTER)
driver.quit()
```

### 八大定位之四 使用Name属性

```
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium import webdriver
import time
service = Service(executable_path="geckodriver")
driver = webdriver.Firefox(service=service)
driver.get("http://localhost/test.html")
check_box = driver.find_element(By.NAME, "newsletter")
if not check_box.is_selected():
    check_box.click()
time.sleep(10)
driver.quit()
```

- 如果复选框没有选就选择

### 八大定位之五 使用链接文本

```
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium import webdriver
import time
service = Service(executable_path="geckodriver")
driver = webdriver.Firefox(service=service)
driver.get("http://localhost/test.html")
text  =	driver.find_element(By.LINK_TEXT, "Selenium Official Page")
print(text.get_attribute("href"))
print(text.tag_name)
print(text.parent)
print(text.location)
print(text.size)
print(text.text)
driver.quit()
```


### 八大定位之六 使用部分链接文本

```

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium import webdriver
import time
service = Service(executable_path="geckodriver")
driver = webdriver.Firefox(service=service)
driver.get("http://localhost/test.html")
text  =	driver.find_element(By.PARTIAL_LINK_TEXT,"Official")
print(text.get_attribute("href"))
print(text.tag_name)
print(text.parent)
print(text.location)
print(text.size)
print(text.text)
text.click()
driver.quit()
```

### 八大定位之七 使用tag name

```
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium import webdriver
import time
service = Service(executable_path="geckodriver")
driver = webdriver.Firefox(service=service)
driver.get("http://localhost/test.html")
text = driver.find_element(By.TAG_NAME, "a")
print(text.get_attribute("href"))
print(text.tag_name)
print(text.parent)
print(text.location)
print(text.size)
print(text.text)
text.click()
driver.quit()
```


### 八大定位之二 使用XPATH

```
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium import webdriver
import time
service = Service(executable_path="geckodriver")
driver = webdriver.Firefox(service=service)
driver.get("http://localhost/test.html")
input_box = driver.find_element(By.XPATH, "//input[@value='f']")
print(input_box.get_attribute("value"))
input_box.click()
time.sleep(5)
input_box = driver.find_element(By.XPATH, "//input[@value='m']")
print(input_box.get_attribute("value"))
input_box.click()
time.sleep(5)
driver.quit()
```

## 总结 🤔

- 这次了解了8大定位

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231103-1699017158978)

- 定位了元素之后可以做哪些操作呢？
- 下次再说👋