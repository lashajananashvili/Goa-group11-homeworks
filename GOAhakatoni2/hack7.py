def swap (ls):
    for i in range (1, len(ls), 2):
        ls[i], ls[i-1] = ls[i-1], ls[i]
    return ls
print(swap ([4,6,3,8,7,4,6,9]))