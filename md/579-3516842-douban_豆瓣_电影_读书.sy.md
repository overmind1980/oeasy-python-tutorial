---
show: step
version: 1.0
enable_checker: true
---

# 豆瓣电影

## 回忆

### 代码

```
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import pandas as pd
import time
import re


def get_movie_info():
    driver = webdriver.Firefox()
    # 存储所有电影信息的列表
    all_movies = []
    try:
        # 遍历10页，每页25部电影
        for page in range(10):
            url = f'https://movie.douban.com/top250?start={page * 25}'
            driver.get(url)
            # 等待电影列表加载完成
            WebDriverWait(driver, 10).until(
                EC.presence_of_all_elements_located((By.CLASS_NAME, "item"))
            )
            # 获取当前页面的所有电影项
            movies = driver.find_elements(By.CLASS_NAME, "item")
            # 解析每部电影的信息
            for movie in movies:
                # 提取标题
                title = movie.find_element(By.CLASS_NAME, "title").text
                # 提取评分
                rating = movie.find_element(By.CLASS_NAME, "rating_num").text
                # 提取评价人数
                rating_people = movie.find_element(By.CLASS_NAME, "star").find_elements(By.TAG_NAME, "span")[-1].text
                rating_count = re.search(r'\d+', rating_people).group() if rating_people else "0"
                # 提取基本信息（导演、年份、地区等）
                info_element = movie.find_element(By.CLASS_NAME, "bd")
                info = info_element.find_element(By.TAG_NAME, "p").text.strip()
                # 分离基本信息和简介
                info_parts = info.split('\n')
                basic_info = info_parts[0].strip()
                description = info_parts[-1].strip() if len(info_parts) > 1 else "无简介"
                # 提取简评
                quote_element = movie.find_elements(By.CLASS_NAME, "quote")
                quote = quote_element[0].text if quote_element else "无"
                movie_info = {
                    '电影名': title,
                    '评分': rating,
                    '评价人数': rating_count,
                    '基本信息': basic_info,
                    '简介': description,
                    '简评': quote
                }
                all_movies.append(movie_info)
            print(f"已完成第{page + 1}页的爬取")
            time.sleep(2)  # 添加延时，避免请求过于频繁
    except Exception as e:
        print(f"爬取过程中出现错误: {str(e)}")

    finally:
        driver.quit()

    return all_movies


def save_to_csv(movies):
    # 将数据转换为DataFrame并保存为CSV
    df = pd.DataFrame(movies)
    df.to_csv('douban_top250.csv', index=False, encoding='utf-8-sig')

if __name__ == "__main__":
    print("开始爬取豆瓣电影Top250...")
    movies = get_movie_info()
    save_to_csv(movies)
    print(f"爬取完成，共获取{len(movies)}部电影信息")
    print("数据已保存到 douban_top250.csv")
```

### 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3516842/uid1190679-20250204-1738633280775) 

### 查找中文字体

```
fc-list:lang=zh-cn
```

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3516842/uid1190679-20250204-1738633553001) 

### 分析

```
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import re
from collections import Counter

plt.rcParams['font.sans-serif'] = ['WenQuanYi Zen Hei']  # 设置中文字体
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题


def extract_info(intro):
    # 从简介中提取年份、国家和类型信息
    pattern = r'(\d{4})\s*/\s*([^/]+)/\s*(.+)'
    match = re.search(pattern, intro)
    if match:
        year = int(match.group(1))
        countries = [c.strip() for c in match.group(2).split()]
        genres = [g.strip() for g in match.group(3).split()]
        return year, countries[0], genres  # 返回第一个国家和所有类型
    return None, None, []


def load_and_process_data():
    # 读取数据
    df = pd.read_csv('douban_top250.csv')

    # 处理评分和评价人数
    df['评分'] = df['评分'].astype(float)
    df['评价人数'] = df['评价人数'].astype(int)

    # 从简介中提取信息
    info = df['简介'].apply(extract_info)
    df['年份'] = [i[0] for i in info]
    df['国家'] = [i[1] for i in info]
    df['类型'] = [i[2] for i in info]

    return df


def rating_analysis(df):
    plt.figure(figsize=(15, 10))

    # 评分分布直方图
    plt.subplot(2, 1, 1)
    sns.histplot(data=df, x='评分', bins=20)
    plt.title('电影评分分布')
    plt.xlabel('评分')
    plt.ylabel('电影数量')

    # 评分区间分析
    plt.subplot(2, 1, 2)
    rating_bins = pd.cut(df['评分'], bins=[0, 8.5, 9.0, 9.5, 10], labels=['8.5以下', '8.5-9.0', '9.0-9.5', '9.5以上'])
    rating_counts = rating_bins.value_counts().sort_index()
    ax = rating_counts.plot(kind='bar')
    plt.title('评分区间电影数量')
    plt.xlabel('评分区间')
    plt.ylabel('电影数量')
    plt.xticks(rotation=0)  # 横向显示x轴标签

    plt.tight_layout()
    plt.savefig('评分分析.png')
    plt.show()  # 展示图表
    plt.close()


def year_analysis(df):
    plt.figure(figsize=(15, 6))

    # 按年代统计
    df['年代'] = (df['年份'] // 10) * 10
    decade_counts = df['年代'].value_counts().sort_index()
    ax = decade_counts.plot(kind='bar')
    plt.title('不同年代电影数量分布')
    plt.xlabel('年代')
    plt.ylabel('电影数量')
    plt.xticks(rotation=0)  # 横向显示x轴标签

    plt.tight_layout()
    plt.savefig('年份分析.png')
    plt.show()  # 展示图表
    plt.close()


def country_analysis(df):
    plt.figure(figsize=(12, 6))

    # 统计各国家/地区电影数量
    country_counts = df['国家'].value_counts().head(10)
    ax = country_counts.plot(kind='bar')
    plt.title('Top10国家/地区电影数量')
    plt.xlabel('国家/地区')
    plt.ylabel('电影数量')
    plt.xticks(rotation=30, ha='right')  # 斜向显示x轴标签，避免重叠

    plt.tight_layout()
    plt.savefig('国家地区分析.png')
    plt.show()  # 展示图表
    plt.close()


def genre_analysis(df):
    plt.figure(figsize=(12, 6))

    # 统计所有电影类型
    all_genres = [genre for genres in df['类型'] for genre in genres]
    genre_counts = pd.Series(Counter(all_genres)).sort_values(ascending=False).head(10)

    ax = genre_counts.plot(kind='bar')
    plt.title('Top10最受欢迎的电影类型')
    plt.xlabel('类型')
    plt.ylabel('电影数量')
    plt.xticks(rotation=30, ha='right')  # 斜向显示x轴标签，避免重叠

    plt.tight_layout()
    plt.savefig('类型分析.png')
    plt.show()  # 展示图表
    plt.close()


def popularity_analysis(df):
    plt.figure(figsize=(15, 12))

    # 评价人数分布
    plt.subplot(2, 1, 1)
    plt.hist(df['评价人数'], bins=30)
    plt.title('评价人数分布')
    plt.xlabel('评价人数')
    plt.ylabel('电影数量')

    # 最受欢迎的电影（评价人数最多的前10部）
    plt.subplot(2, 1, 2)
    top_movies = df.nlargest(10, '评价人数')
    plt.barh(top_movies['电影名'], top_movies['评价人数'])  # 使用水平条形图
    plt.title('评价人数最多的10部电影')
    plt.xlabel('评价人数')

    plt.tight_layout()
    plt.savefig('热度分析.png')
    plt.show()  # 展示图表
    plt.close()


def generate_report(df):
    # 生成分析报告
    report = []
    report.append("豆瓣Top250电影数据分析报告\n")

    # 评分统计
    report.append("\n1. 评分统计")
    report.append(f"平均评分: {df['评分'].mean():.2f}")
    report.append(f"最高评分: {df['评分'].max():.2f}")
    report.append(f"最低评分: {df['评分'].min():.2f}")

    # 年份统计
    report.append("\n2. 年份统计")
    report.append(f"最早的电影: {df['年份'].min()}年")
    report.append(f"最新的电影: {df['年份'].max()}年")

    # 国家统计
    report.append("\n3. 国家/地区统计")
    top_countries = df['国家'].value_counts().head(5)
    report.append("电影数量最多的5个国家/地区：")
    for country, count in top_countries.items():
        report.append(f"{country}: {count}部")

    # 类型统计
    report.append("\n4. 电影类型统计")
    all_genres = [genre for genres in df['类型'] for genre in genres]
    top_genres = pd.Series(Counter(all_genres)).sort_values(ascending=False).head(5)
    report.append("最受欢迎的5个电影类型：")
    for genre, count in top_genres.items():
        report.append(f"{genre}: {count}部")

    # 热度统计
    report.append("\n5. 热度统计")
    report.append(f"平均评价人数: {df['评价人数'].mean():.0f}")
    most_reviewed = df.loc[df['评价人数'].idxmax()]
    report.append(f"评价人数最多的电影: {most_reviewed['电影名']}（{most_reviewed['评价人数']}人评价）")

    # 保存报告
    with open('分析报告.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(report))


def main():
    print("开始数据分析...")
    df = load_and_process_data()

    print("生成评分分析图表...")
    rating_analysis(df)

    print("生成年份分析图表...")
    year_analysis(df)

    print("生成国家/地区分析图表...")
    country_analysis(df)

    print("生成电影类型分析图表...")
    genre_analysis(df)

    print("生成热度分析图表...")
    popularity_analysis(df)

    print("生成分析报告...")
    generate_report(df)

    print("分析完成！已生成以下文件：")
    print("- 评分分析.png")
    print("- 年份分析.png")
    print("- 国家地区分析.png")
    print("- 类型分析.png")
    print("- 热度分析.png")
    print("- 分析报告.txt")


if __name__ == "__main__":
    main()
```

- 可以查看数据图表

### 图表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250204-1738633801461)

### pyecharts

```
from pyecharts import options as opts
from pyecharts.charts import Bar, Line, Pie, Tab, Grid
from pyecharts.components import Table
from pyecharts.globals import ThemeType
import pandas as pd
import re
from collections import Counter
import webbrowser
import os


def extract_info(intro):
    pattern = r'(\d{4})\s*/\s*([^/]+)/\s*(.+)'
    match = re.search(pattern, intro)
    if match:
        year = int(match.group(1))
        countries = [c.strip() for c in match.group(2).split()]
        genres = [g.strip() for g in match.group(3).split()]
        return year, countries[0], genres
    return None, None, []


def load_and_process_data():
    df = pd.read_csv('douban_top250.csv')
    df['评分'] = df['评分'].astype(float)
    df['评价人数'] = df['评价人数'].astype(int)

    info = df['简介'].apply(extract_info)
    df['年份'] = [i[0] for i in info]
    df['国家'] = [i[1] for i in info]
    df['类型'] = [i[2] for i in info]

    return df


def create_rating_charts(df):
    # 评分分布
    rating_counts = df['评分'].value_counts().sort_index()
    rating_chart = Bar()
    rating_chart.add_xaxis(list(map(str, rating_counts.index)))
    rating_chart.add_yaxis("电影数量", rating_counts.values.tolist())
    rating_chart.set_global_opts(
        title_opts=opts.TitleOpts(title="电影评分分布"),
        xaxis_opts=opts.AxisOpts(name="评分"),
        yaxis_opts=opts.AxisOpts(name="电影数量")
    )

    # 使用Grid调整位置
    grid_rating = Grid()
    grid_rating.add(rating_chart, grid_opts=opts.GridOpts(pos_top="20%"))

    # 评分区间分析
    rating_bins = pd.cut(df['评分'], bins=[0, 8.5, 9.0, 9.5, 10],
                         labels=['8.5以下', '8.5-9.0', '9.0-9.5', '9.5以上'])
    bin_counts = rating_bins.value_counts().sort_index()
    bin_chart = Pie()
    bin_chart.add(
        series_name="评分区间",
        data_pair=[(str(k), int(v)) for k, v in bin_counts.items()],
        radius=["40%", "75%"],
    )
    bin_chart.set_global_opts(title_opts=opts.TitleOpts(title="评分区间分布"))

    # 使用Grid调整位置
    grid_bin = Grid()
    grid_bin.add(bin_chart, grid_opts=opts.GridOpts(pos_top="20%"))

    return grid_rating, grid_bin


def create_year_chart(df):
    df['年代'] = (df['年份'] // 10) * 10
    decade_counts = df['年代'].value_counts().sort_index()

    year_chart = Line()
    year_chart.add_xaxis(list(map(str, decade_counts.index)))
    year_chart.add_yaxis("电影数量", decade_counts.values.tolist(), is_smooth=True)
    year_chart.set_global_opts(
        title_opts=opts.TitleOpts(title="不同年代电影数量分布"),
        xaxis_opts=opts.AxisOpts(name="年代"),
        yaxis_opts=opts.AxisOpts(name="电影数量")
    )

    # 使用Grid调整位置
    grid_year = Grid()
    grid_year.add(year_chart, grid_opts=opts.GridOpts(pos_top="20%"))

    return grid_year


def create_country_chart(df):
    country_counts = df['国家'].value_counts().head(10)

    country_chart = Bar()
    country_chart.add_xaxis(country_counts.index.tolist())
    country_chart.add_yaxis("电影数量", country_counts.values.tolist())
    country_chart.set_global_opts(
        title_opts=opts.TitleOpts(title="Top10国家/地区电影数量"),
        xaxis_opts=opts.AxisOpts(name="国家/地区", axislabel_opts=opts.LabelOpts(rotate=30)),
        yaxis_opts=opts.AxisOpts(name="电影数量")
    )

    # 使用Grid调整位置
    grid_country = Grid()
    grid_country.add(country_chart, grid_opts=opts.GridOpts(pos_top="20%"))

    return grid_country


def create_genre_chart(df):
    all_genres = [genre for genres in df['类型'] for genre in genres]
    genre_counts = pd.Series(Counter(all_genres)).sort_values(ascending=False).head(10)

    genre_chart = Bar()
    genre_chart.add_xaxis(genre_counts.index.tolist())
    genre_chart.add_yaxis("电影数量", genre_counts.values.tolist())
    genre_chart.set_global_opts(
        title_opts=opts.TitleOpts(title="Top10最受欢迎的电影类型"),
        xaxis_opts=opts.AxisOpts(name="类型", axislabel_opts=opts.LabelOpts(rotate=30)),
        yaxis_opts=opts.AxisOpts(name="电影数量")
    )

    # 使用Grid调整位置
    grid_genre = Grid()
    grid_genre.add(genre_chart, grid_opts=opts.GridOpts(pos_top="20%"))

    return grid_genre


def create_popularity_charts(df):
    # 评价人数分布
    pop_chart = Bar()
    pop_bins = pd.cut(df['评价人数'], bins=10)
    pop_counts = pop_bins.value_counts().sort_index()
    pop_chart.add_xaxis([f"{int(i.left / 10000)}w-{int(i.right / 10000)}w" for i in pop_counts.index])
    pop_chart.add_yaxis("电影数量", pop_counts.values.tolist())
    pop_chart.set_global_opts(
        title_opts=opts.TitleOpts(title="评价人数分布"),
        xaxis_opts=opts.AxisOpts(name="评价人数"),
        yaxis_opts=opts.AxisOpts(name="电影数量")
    )

    # 使用Grid调整位置
    grid_pop = Grid()
    grid_pop.add(pop_chart, grid_opts=opts.GridOpts(pos_top="20%"))

    # 最受欢迎的电影
    top_movies = df.nlargest(10, '评价人数')
    top_chart = Bar()
    top_chart.add_xaxis(top_movies['电影名'].tolist())
    top_chart.add_yaxis("评价人数", top_movies['评价人数'].tolist())
    top_chart.set_global_opts(
        title_opts=opts.TitleOpts(title="评价人数最多的10部电影"),
        xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(rotate=30)),
        yaxis_opts=opts.AxisOpts(name="评价人数")
    )

    # 使用Grid调整位置
    grid_top = Grid()
    grid_top.add(top_chart, grid_opts=opts.GridOpts(pos_top="20%"))

    return grid_pop, grid_top


def create_dashboard():
    print("开始加载数据...")
    df = load_and_process_data()

    print("开始创建可视化图表...")
    # 创建标签页
    tab = Tab(page_title="豆瓣Top250电影分析大屏")

    # 评分分析
    print("生成评分分析图表...")
    rating_chart, bin_chart = create_rating_charts(df)
    tab.add(rating_chart, "评分分布")
    tab.add(bin_chart, "评分区间")

    # 年份分析
    print("生成年份分析图表...")
    year_chart = create_year_chart(df)
    tab.add(year_chart, "年代分布")

    # 国家分析
    print("生成国家分布图表...")
    country_chart = create_country_chart(df)
    tab.add(country_chart, "国家分布")

    # 类型分析
    print("生成类型分析图表...")
    genre_chart = create_genre_chart(df)
    tab.add(genre_chart, "类型分布")

    # 热度分析
    print("生成热度分析图表...")
    pop_chart, top_chart = create_popularity_charts(df)
    tab.add(pop_chart, "评价人数分布")
    tab.add(top_chart, "最受欢迎电影")

    # 渲染页面
    output_file = "豆瓣电影分析大屏.html"
    print(f"正在生成HTML文件: {output_file}")
    tab.render(output_file)

    # 获取文件的绝对路径
    abs_path = os.path.abspath(output_file)

    # 在浏览器中打开文件
    print("正在浏览器中打开可视化大屏...")
    webbrowser.open('file://' + abs_path)
    print("可视化大屏已打开！")


if __name__ == "__main__":
    try:
        create_dashboard()
    except Exception as e:
        print(f"程序运行出错: {str(e)}")
```


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3516842/uid1190679-20250204-1738633978403) 

### 豆瓣电影评论

```
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import pandas as pd
from tqdm import tqdm

# 使用 Selenium 库自动化控制浏览器
browser = webdriver.Chrome()
browser.implicitly_wait(5)

# 从豆瓣电影网页获取电影《长津湖》的3页电影评价
url_pages = 'https://movie.douban.com/subject/25845392/comments'
num_pages = 3
num_comments = 20
df_comments = pd.DataFrame(data=None, columns=['date', 'user', 'star', 'comment'])

# 根据网页链接打开浏览器
browser.get(url=url_pages)

def spider_element(browser, xpath_name):
    # 获取节点文本
    t = browser.find_element(By.XPATH, value=xpath_name)
    # 判断当前下标有没有文本
    if t.text:
        # 有则返回文本
        return t.text
    else:
        return t.get_attribute('title')


# 执行下拉滚动操作
for p in tqdm(range(num_pages)):
    for i in range(1, num_comments + 1):
        # 通过分析网页结构可知,在评论文本节点的位置,右键复制该节点XPath路径
        xpath_root = f'/html/body/div[3]/div[1]/div/div[1]/div[4]/div[{i}]'
        xpath_comment = xpath_root + '/div[2]/p/span'
        xpath_user = xpath_root + '/div[2]/h3/span[2]/a'
        xpath_date = xpath_root + '/div[2]/h3/span[2]/span[3]'
        xpath_star = xpath_root + '/div[2]/h3/span[2]/span[2]'

        # 获取评论文本
        t_comment = spider_element(browser, xpath_comment)
        # 获取用户名
        t_user = spider_element(browser, xpath_user)
        # 获取日期
        t_date = spider_element(browser, xpath_date)
        # 获取星级
        t_star = spider_element(browser, xpath_star)

        new_comments = pd.DataFrame([[t_date, t_user, t_star, t_comment]],
                                    columns=['date', 'user', 'star', 'comment'])
        df_comments = pd.concat([df_comments, new_comments], ignore_index=True)

    # 执行下拉滚动操作
    browser.execute_script("window.scrollBy(0,1000)")
    time.sleep(2)  # 等待页面加载完成

    # 点击后页按钮
    try:
        next_button = browser.find_element(By.CLASS_NAME, 'next')
        next_button.click()
        time.sleep(2)  # 等待页面加载完成
    except Exception as e:
        print(f"Error clicking next button: {e}")
        break

# 完成后关闭浏览器
browser.close()

# 将数据保存为 CSV 文件
output_file = 'douban_comments.csv'
df_comments.to_csv(output_file, index=False, encoding='utf-8-sig')
print(f"Data has been saved to {output_file}")
```

### 豆瓣读书

```

"""
创建一个浏览器驱动
"""
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.edge.options import Options
from selenium.webdriver.edge.service import Service
from time import sleep
import pandas as pd
import numpy as np
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
# 指定Edge浏览器驱动的位置
edge_driver_path = r"D:\jupyter\实战\代码模板\其他\msedgedriver.exe"


edge_options = Options()
edge_options.add_experimental_option("excludeSwitches", ["enable-automation"])
edge_options.add_experimental_option("useAutomationExtension", False)
# edge_options.add_argument("--headless")
edge_options.add_argument("--disable-gpu")
# 创建并启动Edge浏览器服务对象
service = Service(edge_driver_path)
bro = webdriver.Edge(options=edge_options, service=service)

# 注入JS脚本以绕过webdriver检测
bro.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
    "source": """
        Object.defineProperty(navigator, 'webdriver', {
            get: () => undefined
        });
    """
})
keyword = input('管理咨询')
url = f'https://search.douban.com/book/subject_search?search_text={keyword}&cat=1001/'
bro.get(url)
data = []

"""这里确定翻页数量"""
for m in range(15):
    try:

        """
        开始获取信息
        """
        bro.switch_to.window(bro.window_handles[-1])
        print(bro.current_url)
        title_elements = WebDriverWait(bro, 15).until(EC.presence_of_all_elements_located((By.CLASS_NAME, "item-root")))
        for title_element in title_elements:
            con = []
            """获取书名"""
            try:
                title = title_element.find_element(By.CLASS_NAME, "title").text
                #print(title)
                con.append(title)
            except:
                con.append(' ')

            """获取评分"""

            try:
                rate = title_element.find_element(By.CLASS_NAME, "rating_nums").text
                #print(rate)
                con.append(rate)
            except:
                con.append(' ')

            """获取评分人数"""

            try:
                pl = title_element.find_element(By.CLASS_NAME, "pl").text
                #print(pl)
                con.append(pl)
            except:
                con.append(' ')

            """获取作者等详情信息"""

            try:
                abstract = title_element.find_element(By.CLASS_NAME, "abstract").text.split('/')

                """获取日期信息"""
                try:
                    r = 0
                    for item in abstract:
                        if '-' in item:
                            con.append(item)
                            abstract.remove(item)
                            #print('日期',item)
                            r+=1
                            break
                    if r==0:
                        con.append(' ')     
                except:
                    pass

                """获取价格信息"""
                try:
                    j = 0
                    for item in abstract:
                        if '元' in item:
                            con.append(item.replace('元',''))
                            abstract.remove(item)
                            #print('价格',item)
                            j +=1
                            break
                    if j==0:
                        con.append(' ')             
                except:
                    pass

                """获取出版社信息"""
                try:
                    c = 0
                    for item in abstract:
                        if '出版社' in item:
                            con.append(item)
                            abstract.remove(item)
                            #print('出版社',item)
                            c +=1
                            break
                    if c ==0:
                        con.append(' ') 
                except:
                    pass

                """获取作者信息"""

                try:
                    my_list = abstract
                    text = ','.join(my_list)
                    con.append(text)
                    #print('作者',text)
                except:
                    con.append(' ')

            except:
                pass

            data.append(con)    
            #print(len(data))
            """
            记录文件表
            """
            df = pd.DataFrame(data, columns=['书名', '评分', '评分人数', '日期', '价格', '出版社', '作者'])
            df.to_excel(f'{keyword}书籍信息收集表.xlsx', index=False)
        print(f'{keyword}第{m+1}页数据获取完毕')
        
        
        """翻页"""
        
        
        nextbutton = WebDriverWait(bro, 10).until(EC.presence_of_element_located((By.XPATH, "//*[text()='后页>']")))
        action = ActionChains(bro)
        action.move_to_element(nextbutton).click().perform()
        sleep(2)
    except:
        pass
```

### 配合代理

```import random
import time
import logging
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, WebDriverException, NoSuchElementException
import requests
import csv
import atexit
from webdriver_manager.chrome import ChromeDriverManager

# 设置日志
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# 代理配置
PROXY_HOST = "117.68.38.184"
PROXY_PORT = "26147"
PROXY_USERNAME = "B636809458235"
PROXY_PASSWORD = "zKHvxnaqNw6Rl3Eh"

# User-Agent列表
USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36"
]

all_books = []

def setup_driver():
    logger.info("开始设置 Chrome 驱动...")
    chrome_options = Options()
    chrome_options.add_argument(f'--user-agent={random.choice(USER_AGENTS)}')
    chrome_options.add_argument(f'--proxy-server={PROXY_HOST}:{PROXY_PORT}')
    # chrome_options.add_argument("--headless")  # 注释掉这行以显示浏览器窗口
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")
    
    try:
        logger.info("正在安装或更新 ChromeDriver...")
        service = Service(ChromeDriverManager().install())
        
        logger.info("正在启动 Chrome 浏览器...")
        driver = webdriver.Chrome(service=service, options=chrome_options)
        driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
            "source": """
                Object.defineProperty(navigator, 'webdriver', {
                    get: () => undefined
                })
            """
        })
        WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
        logger.info("Chrome 浏览器已成功启动")
        return driver
    except Exception as e:
        logger.error(f"启动 Chrome 浏览器时出错: {e}")
        return None

def check_ip(driver):
    try:
        driver.get("http://api.91http.com/v1/get-ip")
        ip = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "pre"))).text
        logger.info(f"当前使用的IP地址: {ip}")
        return ip
    except Exception as e:
        logger.error(f"检查IP时出错: {e}")
        return None

def login_with_qr(driver):
    try:
        driver.get("https://accounts.douban.com/passport/login")
        
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "account-body")))
        
        logger.info("请手动完成登录过程。登录成功后，程序将自动继续。")
        
        # 等待用户手动登录
        start_time = time.time()
        while True:
            try:
                # 检查是否已登录成功
                WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.CLASS_NAME, "nav-user-account")))
                logger.info("检测到登录成功")
                return True
            except TimeoutException:
                # 如果还没有登录成功，继续等待
                if time.time() - start_time > 300:  # 等待5分钟
                    logger.warning("登录等待超时，请重新运行程序并尝试登录")
                    return False
                time.sleep(5)
    
    except Exception as e:
        logger.error(f"登录过程中出现错误: {e}")
        return False

def crawl_keyword(driver, keyword):
    books = []
    page = 1
    max_retries = 5
    
    while True:
        url = f"https://search.douban.com/book/subject_search?search_text={keyword}&cat=1001&start={(page-1)*15}"
        
        for attempt in range(max_retries):
            try:
                driver.get(url)
                WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.CLASS_NAME, "item-root")))
                break
            except (TimeoutException, WebDriverException) as e:
                logger.warning(f"第{attempt+1}次尝试失败：{e}")
                if attempt == max_retries - 1:
                    logger.error("达到最大重试次数，跳过此页")
                    return books
                time.sleep(random.uniform(5, 10))
        
        items = driver.find_elements(By.CLASS_NAME, "item-root")
        if not items:
            logger.info(f"没有找到更多书籍，结束爬取")
            break
        
        for item in items:
            try:
                title = item.find_element(By.CSS_SELECTOR, "a.title-text").text.strip()
                info = item.find_element(By.CLASS_NAME, "meta").text.strip().split('/')
                author = info[0].strip()
                publisher = info[-3].strip() if len(info) >= 3 else "未知"
                publish_date = info[-2].strip() if len(info) >= 2 else "未知"
                price = info[-1].strip() if len(info) >= 1 else "未知"
                rating = item.find_element(By.CLASS_NAME, "rating_nums").text.strip() if item.find_elements(By.CLASS_NAME, "rating_nums") else "暂无评分"
                
                book = {
                    '标题': title,
                    '作者': author,
                    '出版社': publisher,
                    '出版时间': publish_date,
                    '评分': rating,
                    '纸质版定价': price
                }
                books.append(book)
                logger.info(f"已爬取: {book}")
            except NoSuchElementException:
                logger.warning("解析书籍信息时出错，跳过")
        
        next_page = driver.find_elements(By.XPATH, "//a[contains(@class, 'next') and contains(text(), '后页')]")
        if not next_page:
            logger.info("没有下一页了，结束爬取")
            break
        
        page += 1
        time.sleep(random.uniform(3, 7))
    
    return books

def save_to_csv():
    global all_books
    unique_books = []
    unique_titles = set()
    for book in all_books:
        if book['标题'] not in unique_titles:
            unique_titles.add(book['标题'])
            unique_books.append(book)
    
    with open('douban_books.csv', 'w', newline='', encoding='utf-8-sig') as f:
        writer = csv.DictWriter(f, fieldnames=['标题', '作者', '出版社', '出版时间', '评分', '纸质版定价'])
        writer.writeheader()
        writer.writerows(unique_books)
    
    logger.info(f"\n爬取完成，共爬取{len(unique_books)}本不重复的书，数据已保存到douban_books.csv文件中")

def main():
    global all_books
    driver = setup_driver()
    if driver is None:
        logger.error("无法启动 Chrome 浏览器，程序退出。")
        return

    try:
        ip = check_ip(driver)
        if not ip:
            logger.error("无法获取IP地址，请检查代理设置")
            return

        if not login_with_qr(driver):
            logger.error("登录失败，程序退出")
            return

        keywords = input("请输入要搜索的关键词，每个关键词占一行。输入完成后请按两次回车：").split('\n')
        keywords = [k.strip() for k in keywords if k.strip()]
        
        logger.info(f"您输入的关键词是：{', '.join(keywords)}")
        logger.info("开始爬取数据...")
        
        for keyword in keywords:
            logger.info(f"\n正在爬取关键词 '{keyword}'")
            keyword_books = crawl_keyword(driver, keyword)
            all_books.extend(keyword_books)
            time.sleep(random.uniform(10, 20))
        
    except KeyboardInterrupt:
        logger.info("\n程序被用户中断")
    except Exception as e:
        logger.error(f"发生错误: {e}")
    finally:
        if driver:
            driver.quit()
        save_to_csv()

if __name__ == '__main__':
    atexit.register(save_to_csv)  # 注册退出时保存函数
    main()
```