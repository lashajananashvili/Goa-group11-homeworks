#8) შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს რიცხვების list'ს და გამოიტანს ყველას ცალ-ცალკე

def list0():
    new_list=[]
    n=int(input("Enter number of members: "))
    for i in range(n):
        member=int(input("Enter your member: "))
        new_list.append(member)
    for j in new_list:
        print(j)




list0()




