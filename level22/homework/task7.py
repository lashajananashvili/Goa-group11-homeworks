#7) შექმენით manual_find() ფუნქცია. (უკვე გაკეთებული გვაქვს, გაიხსენეთ როგორ კეთდებოდა და თქვენით გააკეთეთ)

def manual_find():
    new_list=[]
    g=0
    n=int(input("Enter number of members: "))
    for i in range(n):
        member=input("Enter your member: ")
        new_list.append(member) 
    d=-1
    f=input("enter what do you want to find in list  ")
    for j in new_list:
        d+=1
        if j==f:
            print(d)
manual_find()

