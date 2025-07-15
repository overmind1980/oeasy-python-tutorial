---
show: step
version: 1.0
enable_checker: true
---

# 实验标题

## 回忆


### 原始的姓名

```
import pandas as pd
import random
from scipy.stats import chi2_contingency

# 姓名生成所需的姓氏和名字列表
last_names = ['张', '王', '李', '赵', '刘', '陈', '杨', '黄', '周', '吴']
first_names_male = ['强', '伟', '军', '磊', '鹏', '斌', '峰', '明', '亮', '杰']
first_names_female = ['芳', '娜', '敏', '静', '丽', '娟', '艳', '婷', '玲', '华']

# 生成200条样本数据
data = []
for _ in range(200):
    # 随机选择性别
    gender = random.choice(['男', '女'])
    
    # 根据性别生成名字并设置不同的武打片偏好概率
    if gender == '男':
        first_name = random.choice(first_names_male)
        # 男性70%概率喜欢武打片
        likes_martial = random.random() < 0.7
    else:
        first_name = random.choice(first_names_female)
        # 女性30%概率喜欢武打片
        likes_martial = random.random() < 0.3
    
    # 组合姓名
    name = f"{random.choice(last_names)}{first_name}"
    data.append({
        '姓名': name,
        '性别': gender,
    })

print(data)
```

### 生成人物

```
from faker import Faker

faker = Faker('zh_CN')

# 生成中文姓名
print(faker.name())  # 例如：王秀英

# 生成地址
print(faker.address())  # 例如：河北省兰州市清河县东城路第880号

# 生成手机号
print(faker.phone_number())  # 例如：13912345678

# 生成公司名
print(faker.company())  # 例如：百度科技有限公司
```


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3516848/uid1190679-20250204-1738640761433) 


### 自定义人物代码

```
from faker import Faker
from faker.providers import BaseProvider

# 创建一个Faker实例
faker = Faker('zh_CN')

# 自定义一个Provider类，用于生成三国人物相关数据
class ThreeKingdomsProvider(BaseProvider):
    def three_kingdoms_character(self):
        # 简单列举一些三国人物名字
        characters = ["刘备", "关羽", "张飞", "诸葛亮", "曹操", "孙权", "周瑜", "赵云"]
        return self.random_element(characters)

    def three_kingdoms_weapon(self):
        # 三国人物的武器
        weapons = ["双股剑", "青龙偃月刀", "丈八蛇矛", "诸葛连弩", "倚天剑", "青釭剑"]
        return self.random_element(weapons)

    def three_kingdoms_army(self):
        # 三国势力
        armies = ["蜀军", "魏军", "吴军"]
        return self.random_element(armies)

# 将自定义的Provider添加到Faker实例中
faker.add_provider(ThreeKingdomsProvider)

# 生成三国人物相关数据
print(faker.three_kingdoms_character())
print(faker.three_kingdoms_weapon())
print(faker.three_kingdoms_army())
```