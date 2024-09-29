def list_x(listn, x):
    listn.sort()
    return listn[-x]

print(list_x([3,5,8,7,2], 4))