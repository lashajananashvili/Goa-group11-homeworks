def find_repeated_numbers(nums):
    seen = set()
    repeated = []
    
    for i in nums:
        if i in seen:
            repeated.append(i)
        else:
            seen.add(i)
    
    return repeated

array = [3, 1, 3, 4, 2, 2]
result = find_repeated_numbers(array)
print(f"The repeated numbers are: {result}")