def make_looper(string):
    g=len(string)
    
    for i in range(g):
        print(string[i])
        break
    i+=1
    
make_looper("abc")