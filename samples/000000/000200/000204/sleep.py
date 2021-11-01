#!/usr/bin/python3
import time
i=1
while i<3333:
    localtime = time.asctime(time.localtime(time.time()))
    print("\r当前时间为:",localtime,end="")
    i=i+1
    time.sleep(1)
