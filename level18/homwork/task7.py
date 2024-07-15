#7) შექმენით ფუნქცია რომელიც არგუმენტად მიიღებს საჭმელების list'ს და გამოიტანს ყველას ცალ-ცალკე

def list0():
    new_list=[]
    n=int(input("Enter how many food names do you want: "))
    for i in range(n):
        member=input("food names: ")
        new_list.append(member)
    for j in new_list:
        print(j)




list0()














