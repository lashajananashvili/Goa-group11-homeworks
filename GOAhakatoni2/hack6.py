def manual_max(max):
    j=0
    for i in max:
        if i>j:
            j=i
    return j

print(manual_max([4,6,3]))