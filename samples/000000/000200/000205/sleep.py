#!/usr/bin/python3
import time
localtime = time.strftime('%H:%M:%S',time.localtime(time.time()))
print(localtime,end="")
