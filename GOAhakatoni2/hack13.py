def manual(listn):
    for i in listn:
        if listn.count(i)>1:
            return True
        else:
            return False
    
print(manual([4,6,3,7,4,9,8]))