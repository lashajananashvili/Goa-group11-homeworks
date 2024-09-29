def getEvens(arr):
    result = [x for x in arr if x % 2 == 0]
    return result

print(getEvens([5,4,56,7,8,3,563]))