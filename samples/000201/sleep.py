#!/usr/bin/python3
import time
i=1
while i<3333:
    localtime = time.asctime(time.localtime(time.time()))
    print("当前时间为:",localtime)
    i=i+1
    time.sleep(1)
