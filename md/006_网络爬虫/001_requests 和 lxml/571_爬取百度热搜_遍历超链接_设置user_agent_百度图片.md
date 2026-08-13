---
show: step
version: 1.0
enable_checker: true
---

# 爬取百度

## 回忆

- 这次真的爬了一个网站
  - oeasy.org
- 右键检查元素
  - 获取 xpath
- 爬取之后获得属性 href 的值
- 然后切片并拼接为绝对链接地址
- 并且把每一个链接都爬了一遍
- 能出去爬个百度么？🤔

### 确认上网

```
firefox https://www.baidu.com &
```

- 一般的实验楼注册会员
	- 是不能在虚拟机里上 baidu 之类的网站的
	- 可以在本机里使用火狐和 python

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240615-1718451563865)

- 想要爬百度
	- 首先要确认能上百度

### 准备环境

- 导入了该包
	- 然后发送请求

```
import requests
from lxml import etree
response = requests.get("http://www.baidu.com")
print(response.content)
```

- 返回结果比较简单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231029-1698541705991)

- 这是一个
	- 字节序列

### 网页存储

- 将 字节序列 解码为 字符串

```
import requests
from lxml import etree
response = requests.get("http://www.baidu.com")
print(response.content.decode("utf-8"))
```

- 将字符串 输出重定向 到b.html

```
python3 b.py > b.html
firefox b.html &
```

### 启动nginx

- 将文件拷贝进
	- nginx根目录

```
sudo cp b.html /usr/share/nginx/html/
sudo service nginx start
firefox http://localhost/b.html &    
```

- 再启动火狐打开网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240421-1713699972289)

- 这就是我们抓到的百度首页	

### 比较

- 尝试和百度首页比较
	- 明显没有百度热搜 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240615-1718452950840)

- 百度本身 依赖 爬虫
	- 他发现了 我们是同类
	- 结果就把我们给禁了 😰
- 那怎么办？😱

### 假装

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211024-1635046905973)

- 然后把这个 key-value 对
	- 写到 header 中
	- 假装我们 是 浏览器

```
import requests
from lxml import etree
headers ={"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0"}
response = requests.get("http://www.baidu.com", headers=headers)
print(response.content.decode("utf-8"))
```

- 注意 headers 是一个字典
  - key-value 之间有冒号
  - key 和 value 都有双引号包裹
  - 冒号双引号都是半角的
- 请求中的协议是 https

### 结果

- 再次输出重定向

```
python3 b.py > b2.html
sudo cp b.html /usr/share/nginx/html/
firefox http://localhost/b.html &    
```

- 好像可以得到热搜列表了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240615-1718453296507)


### 生成 etree

- 把正确的响应放到
	- lxml 中进行解析
	- 生成一棵 etree

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211024-1635047598112)

- 但是 得到的 这一棵树
	- 要 怎样才能 择到想要的链接 呢?
- 需要 xpath!!

### 找 xpath

- 注意要在http://localhost/b.html上查找xpath
	- 因为b.html是我们已经爬到手的网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211024-1635047760757)

- 右键 左上角的新闻
  - 检查元素
- 可以看到他对应着 a 标签
	- 后面的地图之类的也对应着 a 标签
- 如何得到 xpath ？

### 得到 xpath

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211024-1635047839977)

- 复制之后
	- 怎么办？

### 尝试

```
import requests
from lxml import etree
headers ={"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0"}
response = requests.get("https://www.baidu.com", headers=headers)
#print(response.text)
et_html = etree.HTML(response.content)
l_et_a = et_html.xpath("/html/body/div/div[1]/div[@id='s-top-left']/a")
for anchor in l_et_a:
    print(anchor.text)
```

- 也可以使用id属性谓词确认div

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240615-1718454404368)

- 如果我想把链接也输出
- 应该怎么办？

### 输出连接

- 先查一下文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211024-1635048399340)

```
import requests
from lxml import etree
headers ={"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0"}
response = requests.get("https://www.baidu.com", headers=headers)
#print(response.text)
et_html = etree.HTML(response.content)
l_et_a = et_html.xpath("/html/body/div/div[1]/div[@id='s-top-left']/a")
for anchor in l_et_a:
    print(anchor.text,end="    ->   ")
    print(anchor.attrib.get("href"))
```

- 遍历完成
	- 这很简单

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240615-1718454502098)

- 我们再看看百度热搜

### 百度热搜

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211024-1635048555965)

- xpath 是
    - /html/body/div[1]/div[1]/div[5]/div/div/div[3]/ul/li/a/span[2]

### 进行遍历

```
import requests
from lxml import etree
headers ={"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0"}
response = requests.get("https://www.baidu.com", headers=headers)
#print(response.text)
et_html = etree.HTML(response.content)
l_et_a = et_html.xpath("/html/body/div[1]/div[1]/div[5]/div/div/div[3]/ul/li/a/span[2]")
for anchor in l_et_a:
    print(anchor.text)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240615-1718454603252)

- 但是我如果想要同时输出具体链接呢？

### 重新构造列表

- span 在 a 里面
	- 所以我们先把所有的 a 的列表拿到
	- 然后再使用下表的方式找到 span 的 text

```
import requests
from lxml import etree
headers ={"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0"}
response = requests.get("https://www.baidu.com", headers=headers)
#print(response.text)
et_html = etree.HTML(response.content)
l_et_a = et_html.xpath("/html/body/div[1]/div[1]/div[5]/div/div/div[3]/ul/li/a")
for anchor in l_et_a:
    et_span = anchor.xpath("./span[2]")[0]
    print(et_span.text,end="   ->   ")
    print(anchor.attrib.get("href"))
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240615-1718454823828)

- 还可以遍历最下面的链接吗？

### 最下面的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211024-1635049252958)

- 这个好像比较简单
- 文字和链接都在 a 元素中

### xpath

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211024-1635049346923)

- a 元素在 p 元素中
- 所以把 p 元素的索引去掉
- /html/body/div[1]/div[1]/div[7]/div/p/a

### 遍历

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211024-1635049450518)

```
import requests
from lxml import etree
headers ={"User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0"}
response = requests.get("https://www.baidu.com", headers=headers)
#print(response.text)
et_html = etree.HTML(response.content)
#l_et_a = et_html.xpath("/html/body/div/div[1]/div[3][@id='s-top-left']/a")
#l_et_a = et_html.xpath("/html/body/div/div[1]/div[5]/div/div/div[3]/ul/li/a/span")
l_et_a = et_html.xpath("/html/body/div[1]/div[1]/div[7]/div/p/a")
for anchor in l_et_a:
    print(anchor.text)
    print(anchor.attrib["href"])
```

### 爬取百度图片

```
# -*- coding:utf8 -*-
import requests
import json
from urllib import parse
import os
import time

class BaiduImageSpider(object):
    def __init__(self):
        self.json_count = 0  # 请求到的json文件数量（一个json文件包含30个图像文件）
        self.url = 'https://image.baidu.com/search/acjson?tn=resultjson_com&logid=5179920884740494226&ipn=rj&ct' \
                   '=201326592&is=&fp=result&queryWord={' \
                   '}&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&hd=&latest=&copyright=&word={' \
                   '}&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&nojc=&pn={' \
                   '}&rn=30&gsm=1e&1635054081427= '
        self.directory = r"."  # 存储目录  这里需要修改为自己希望保存的目录  {}不要丢
        self.header = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/95.0.4638.54 Safari/537.36 Edg/95.0.1020.30 '
        }

    # 创建存储文件夹
    def create_directory(self, name):
        self.directory = self.directory.format(name)
        # 如果目录不存在则创建
        if not os.path.exists(self.directory):
            os.makedirs(self.directory)
        self.directory += r'{}'

    # 获取图像链接
    def get_image_link(self, url):
        list_image_link = []
        strhtml = requests.get(url, headers=self.header)  # Get方式获取网页数据
        jsonInfo = json.loads(strhtml.text)
        for index in range(30):
            list_image_link.append(jsonInfo['data'][index]['thumbURL'])
        return list_image_link

    # 下载图片
    def save_image(self, img_link, filename):
        res = requests.get(img_link, headers=self.header)
        if res.status_code == 404:
            print(f"图片{img_link}下载出错------->")
        with open(filename, "wb") as f:
            f.write(res.content)
            print("存储路径：" + filename)

    # 入口函数
    def run(self):
        searchName = input("查询内容：")
        searchName_parse = parse.quote(searchName)  # 编码

        self.create_directory(searchName)

        pic_number = 0  # 图像数量
        for index in range(self.json_count):
            pn = (index+1)*30
            request_url = self.url.format(searchName_parse, searchName_parse, str(pn))
            list_image_link = self.get_image_link(request_url)
            for link in list_image_link:
                pic_number += 1
                self.save_image(link, self.directory.format(str(pic_number)+'.jpg'))
                time.sleep(0.2)  # 休眠0.2秒，防止封ip
        print(searchName+"----图像下载完成--------->")

if __name__ == '__main__':
    spider = BaiduImageSpider()
    spider.json_count = 10   # 定义下载10组图像，也就是三百张
    spider.run()
```

### 将百度当作数据库来用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240524-1716513949346)

- 查询 媒体 
	- 澎湃新闻 中 出现 riscv 的情况

### 将百度 当作数据库

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240524-1716514003090)

- 查询 搏击周评 账户
	- 发表过的 
	- 关于柔术的 文章

### 总结

- 这次爬了 baidu.com
	- 找到了三组链接
	- 然后分别遍历
- 但是 headers 生成的方法有点麻烦
- 有更快的生成headers的方法吗？
- 下次再说
