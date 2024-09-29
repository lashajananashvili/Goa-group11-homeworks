def manual_plus_minus(s):
    j=0
    ls2=[]
    for i in s:
        if i=="+":
            ls2.append(j+1)
            j += 1 
        elif i=="-":
            ls2.append(j-1)
            j = j-1
    return ls2

print(manual_plus_minus("++-+++---"))
