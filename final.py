import requests
from lxml import etree
import base64
from io import BytesIO
from PIL import Image
import os
import re
import cairosvg

num = 21016
os.system("mkdir " + str(num))
headers = {
	'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:127.0) Gecko/20100101 Firefox/127.0',
	'Accept': 'text/html, */*; q=0.01',
	'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
	'Accept-Encoding': 'gzip, deflate, br, zstd',
	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	'Chinese': str(num),
	'Seal': 'CfDJ8GTnPflTDjhJipHWlUETuW0cQRkTRblruaeV-lHIj-kBZW9l_A_4kAWR2MPJF7R437eRSYLHc0Imze65_2vvXCBxiqF9fdtcU1g2nmDjGrK-DkjtJOp5Sx-dZM1Kz7pQyylW36DSPC6eo8JlYHo_ZKc',
	'X-Requested-With': 'XMLHttpRequest',
	'Origin': 'https://hanziyuan.net',
	'Connection': 'keep-alive',
	'Referer': 'https://hanziyuan.net/',
	'Cookie': 'Oracle=CfDJ8GTnPflTDjhJipHWlUETuW1fVfkmQLkWhlwf3unpFOkojSt5NKYJVyvOqI2bMIfgAdLJMb3yNL1WK2sAVoRofzguAOZlSyO4756H55dwv38J-h0BV7ezOFleqvKzRWxhL_3evpVi8jndgBELk_DH1bc; Bronze=CfDJ8GTnPflTDjhJipHWlUETuW0cQRkTRblruaeV-lHIj-kBZW9l_A_4kAWR2MPJF7R437eRSYLHc0Imze65_2vvXCBxiqF9fdtcU1g2nmDjGrK-DkjtJOp5Sx-dZM1Kz7pQyylW36DSPC6eo8JlYHo_ZKc; Hm_lvt_44bf35035989ecd905587eb98a45525e=1720261280; Hm_lpvt_44bf35035989ecd905587eb98a45525e=1720261280; HMACCOUNT=86C5CD568AB8EE8A; _ga=GA1.2.357859815.1720261280; _gid=GA1.2.1726960890.1720261280; _ga_59Y9V8KLSH=GS1.2.1720261280.1.0.1720261280.60.0.0; _gat=1',
	'Sec-Fetch-Dest': 'empty',
	'Sec-Fetch-Mode': 'cors',
	'Sec-Fetch-Site': 'same-origin'
}
data = {
    'chinese': chr(num),
    'Bronze': 'CfDJ8GTnPflTDjhJipHWlUETuW0cQRkTRblruaeV-lHIj-kBZW9l_A_4kAWR2MPJF7R437eRSYLHc0Imze65_2vvXCBxiqF9fdtcU1g2nmDjGrK-DkjtJOp5Sx-dZM1Kz7pQyylW36DSPC6eo8JlYHo_ZKc'
}
url = "https://hanziyuan.net/etymology"
response = requests.post(url, data=data, headers=headers)
print(response.content)
et_html = etree.HTML(response.content)
et_style = et_html.xpath("//body//style")
text = et_style[0].text
svglist = re.split("#\w{1,7}, #etymology\w{1,7} \{ background-image: url\(\'",text)
html = ""
i = 0
print(len(svglist))
for svg in svglist[1:]:
    svg = svg.replace("') } ","")
    svg = svg.replace("data:image/svg+xml;base64,","")
    print(svg)
    base64_string = svg
    print("=================")
    image_data = base64.b64decode(base64_string)
    print(image_data)
    with open(str(num) + "/" + str(num) + "_" + str(i) +".svg","wb") as f:
        f.write(image_data)
    print("=================")
    svg_url = str(num) + "/" + str(num) + "_" + str(i) +".svg"
    png_url = str(num) + "/" + str(num) + "_" + str(i) +".png"
    cairosvg.svg2png(url=svg_url, write_to=png_url)
    i += 1
