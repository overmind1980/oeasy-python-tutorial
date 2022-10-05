import struct
for n in range(0,127):
    b = struct.pack("b",n)
    s = b.decode("ascii")
    print(s,end="")
    if n % 16 == 0:
        print()
