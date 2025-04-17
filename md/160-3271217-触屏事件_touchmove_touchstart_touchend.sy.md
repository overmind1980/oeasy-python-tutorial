---
show: step
version: 1.0
enable_checker: true
---

# 手机版网页的制作

## 回忆

- 上次我们研究了如何用火狐浏览器
	- 完成手机网页版的开发
	- 并模拟了手指触摸
- 这里面有两个事件
	- touchstart
	- touchmove

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271215/uid1190679-20241217-1734432423974)

- 是不是应该有个touchend呢？

### 提出要求

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271217/uid1190679-20241217-1734432965850) 

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>触摸事件背景颜色变化</title>
    <style>
        /* 基本样式 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }

        .container {
            padding: 2rem;
            background-color: #fff;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        h1 {
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <div class="container" id="event-container">
        <h1>触摸事件背景颜色变化</h1>
        <p>按住屏幕并移动手指来改变背景颜色。</p>
    </div>

    <script>
        // 获取容器元素
        const container = document.getElementById('event-container');

        // 触摸开始事件
        container.addEventListener('touchstart', function(event) {
            event.preventDefault(); // 阻止默认行为
            container.style.backgroundColor = 'red';
        });

        // 触摸移动事件
        container.addEventListener('touchmove', function(event) {
            event.preventDefault(); // 阻止默认行为
            container.style.backgroundColor = 'green';
        });

        // 触摸结束事件
        container.addEventListener('touchend', function(event) {
            event.preventDefault(); // 阻止默认行为
            container.style.backgroundColor = 'blue';
        });

        // 触摸取消事件（例如，用户的手指离开屏幕）
        container.addEventListener('touchcancel', function(event) {
            event.preventDefault(); // 阻止默认行为
            container.style.backgroundColor = 'blue';
        });
    </script>
</body>
</html>
```

### 效果达成

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271217/uid1190679-20241217-1734445610492) 

- 观察代码
	- 四大事件
	- 以及对应颜色变化

```
// 触摸开始事件
container.addEventListener('touchstart', function(event) {
    event.preventDefault(); // 阻止默认行为
    container.style.backgroundColor = 'red';
});

// 触摸移动事件
container.addEventListener('touchmove', function(event) {
    event.preventDefault(); // 阻止默认行为
    container.style.backgroundColor = 'green';
});

// 触摸结束事件
container.addEventListener('touchend', function(event) {
    event.preventDefault(); // 阻止默认行为
    container.style.backgroundColor = 'blue';
});

// 触摸取消事件（例如，用户的手指离开屏幕）
container.addEventListener('touchcancel', function(event) {
    event.preventDefault(); // 阻止默认行为
    container.style.backgroundColor = 'blue';
});
```

- touchend 和 touchcancel 有什么区别呢？

### 区别


![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271217/uid1190679-20241217-1734446080232) 

- 还想做一个记录触摸移动长度的网页

### 触发效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271217/uid1190679-20241217-1734445925278) 

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>触摸事件移动距离记录</title>
    <style>
        /* 基本样式 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }

        .container {
            padding: 2rem;
            background-color: #fff;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        h1 {
            margin-bottom: 1rem;
        }

        #distance {
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <div class="container" id="event-container">
        <h1>触摸事件移动距离记录</h1>
        <p>按住屏幕并移动手指来记录移动距离。</p>
        <p id="distance">移动距离: 0 px</p>
    </div>

    <script>
        // 获取容器元素和距离显示元素
        const container = document.getElementById('event-container');
        const distanceElement = document.getElementById('distance');

        let startX, startY, currentX, currentY, totalDistance = 0;

        // 触摸开始事件
        container.addEventListener('touchstart', function(event) {
            event.preventDefault(); // 阻止默认行为
            const touch = event.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            totalDistance = 0;
            distanceElement.textContent = `移动距离: ${totalDistance} px`;
        });

        // 触摸移动事件
        container.addEventListener('touchmove', function(event) {
            event.preventDefault(); // 阻止默认行为
            const touch = event.touches[0];
            currentX = touch.clientX;
            currentY = touch.clientY;

            // 计算当前移动距离
            const dx = currentX - startX;
            const dy = currentY - startY;
            const currentDistance = Math.sqrt(dx * dx + dy * dy);

            // 更新总移动距离
            totalDistance += currentDistance;

            // 重置起始位置
            startX = currentX;
            startY = currentY;

            // 更新显示的距离
            distanceElement.textContent = `移动距离: ${Math.round(totalDistance)} px`;
        });

        // 触摸结束事件
        container.addEventListener('touchend', function(event) {
            event.preventDefault(); // 阻止默认行为
            distanceElement.textContent = `移动距离: ${Math.round(totalDistance)} px`;
        });

        // 触摸取消事件（例如，用户的手指离开屏幕）
        container.addEventListener('touchcancel', function(event) {
            event.preventDefault(); // 阻止默认行为
            distanceElement.textContent = `移动距离: ${Math.round(totalDistance)} px`;
        });
    </script>
</body>
</html>
```

### 效果达成

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271217/uid1190679-20241217-1734446118250) 

- 如何判断触屏是
	- 往上翻
	- 还是往下翻？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271217/uid1190679-20241217-1734446243054) 

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>触摸方向判断</title>
    <style>
        /* 基本样式 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }

        .container {
            padding: 2rem;
            background-color: #fff;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        h1 {
            margin-bottom: 1rem;
        }

        #direction {
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <div class="container" id="event-container">
        <h1>触摸方向判断</h1>
        <p>按住屏幕并移动手指来判断方向。</p>
        <p id="direction">方向: 无</p>
    </div>

    <script>
        // 获取容器元素和方向显示元素
        const container = document.getElementById('event-container');
        const directionElement = document.getElementById('direction');

        let startY;

        // 触摸开始事件
        container.addEventListener('touchstart', function(event) {
            event.preventDefault(); // 阻止默认行为
            const touch = event.touches[0];
            startY = touch.clientY;
            directionElement.textContent = '方向: 无';
        });

        // 触摸移动事件
        container.addEventListener('touchmove', function(event) {
            event.preventDefault(); // 阻止默认行为
            const touch = event.touches[0];
            const currentY = touch.clientY;

            // 计算触摸点的移动方向
            if (currentY < startY) {
                directionElement.textContent = '方向: 往上翻';
            } else if (currentY > startY) {
                directionElement.textContent = '方向: 往下翻';
            } else {
                directionElement.textContent = '方向: 无';
            }

            // 更新起始位置
            startY = currentY;
        });

        // 触摸结束事件
        container.addEventListener('touchend', function(event) {
            event.preventDefault(); // 阻止默认行为
            directionElement.textContent = '方向: 无';
        });

        // 触摸取消事件
        container.addEventListener('touchcancel', function(event) {
            event.preventDefault(); // 阻止默认行为
            directionElement.textContent = '方向: 无';
        });
    </script>
</body>
</html>
```

### 效果达成

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271217/uid1190679-20241217-1734446534224) 

- 在触控开始和结束的时候判断
	- 如果向上翻了50px以上，数字加1
	- 如果向下翻了50像素以下，数字-1

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271217/uid1190679-20241217-1734446574821) 

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>触摸方向判断与计数</title>
    <style>
        /* 基本样式 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }

        .container {
            padding: 2rem;
            background-color: #fff;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        h1 {
            margin-bottom: 1rem;
        }

        #direction {
            font-size: 1.5rem;
            margin-top: 1rem;
        }

        #counter {
            font-size: 1.5rem;
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <div class="container" id="event-container">
        <h1>触摸方向判断与计数</h1>
        <p>按住屏幕并移动手指来判断方向。</p>
        <p id="direction">方向: 无</p>
        <p id="counter">计数: 0</p>
    </div>

    <script>
        // 获取容器元素、方向显示元素和计数器元素
        const container = document.getElementById('event-container');
        const directionElement = document.getElementById('direction');
        const counterElement = document.getElementById('counter');

        let startY;
        let counter = 0;

        // 触摸开始事件
        container.addEventListener('touchstart', function(event) {
            event.preventDefault(); // 阻止默认行为
            const touch = event.touches[0];
            startY = touch.clientY;
            directionElement.textContent = '方向: 无';
        });

        // 触摸移动事件
        container.addEventListener('touchmove', function(event) {
            event.preventDefault(); // 阻止默认行为
            const touch = event.touches[0];
            const currentY = touch.clientY;

            // 计算触摸点的移动方向
            if (currentY < startY) {
                directionElement.textContent = '方向: 往上翻';
            } else if (currentY > startY) {
                directionElement.textContent = '方向: 往下翻';
            } else {
                directionElement.textContent = '方向: 无';
            }
        });

        // 触摸结束事件
        container.addEventListener('touchend', function(event) {
            event.preventDefault(); // 阻止默认行为
            const touch = event.changedTouches[0];
            const endY = touch.clientY;

            // 计算最终的 Y 轴移动距离
            const deltaY = endY - startY;

            // 判断是否满足条件
            if (deltaY < -50) {
                // 向上翻了50像素以上
                counter++;
                directionElement.textContent = '方向: 向上翻超过50px';
            } else if (deltaY > 50) {
                // 向下翻了50像素以上
                counter--;
                directionElement.textContent = '方向: 向下翻超过50px';
            } else {
                directionElement.textContent = '方向: 无';
            }

            // 更新计数器显示
            counterElement.textContent = `计数: ${counter}`;
        });

        // 触摸取消事件
        container.addEventListener('touchcancel', function(event) {
            event.preventDefault(); // 阻止默认行为
            directionElement.textContent = '方向: 无';
        });
    </script>
</body>
</html>
```

### 效果达成

- 有效避免
	- 勾着往上挑
	- 弓着往下落

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271217/uid1190679-20241217-1734446625809) 

- 先去总结吧！

### 总结 🤔

- 这次深入了touch事件
	- touchstart
	- touchmove
	- touchend
	- touchcancel
- 做了几个实验
	- 变色
	- 记录轨迹长度
	- 上下翻

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3271217/uid1190679-20241218-1734499202741) 

- 想做一个
	- 向上翻的手机网页
	- 怎么做呢？
- 我们下次再说！👋
