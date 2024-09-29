def odd (ls):

    ls2=[]
    for i in range (len(ls)):
        if i %2 == 0:
            ls2.append(ls[i])

    return ls2

print(odd([1,2,3,4,5,6,7,8,9]))