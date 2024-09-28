list1 = [2, 4, 6, 8, 10]
list2 = [1, 3, 5]

result = list(map(lambda x, y: x + y**2, list1, list2))

print(result)
