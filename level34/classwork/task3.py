listn=[1, 2, 3]
try:
    print(listn[5])
except IndexError:
    print("indexerror:the index is out of range.")