def find_two_sum(nums, t):
    nd={}
    
    for i in nums:
        c=t-i
        if c in nd:
            return (c,i)
        nd[i] = True
    
    return None

array = [2, 7, 11, 15]
t = 9
result = find_two_sum(array,t)

if result:
    print(f"Two numbers that sum to {t}: {result}")
else:
    print("No two numbers found that sum to the target.")