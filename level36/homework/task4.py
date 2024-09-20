lists=[
    [3, 20, 5],
    [21, 12, 8],
    [11, 23, 1]
]

av=[int(sum(i) / len(i)) for i in lists]

print("avarage:", av)