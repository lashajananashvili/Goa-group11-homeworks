#1) შექმენით ფუნქცია რომელიც გამოიტანს რიცხვების საშუალო არითმეტიკულს 
def same():
    j=0
    new_list=[]
    n=int(input("Enter number of members: "))
    for i in range(n):
        member=int(input("Enter your member: "))
        new_list.append(member)
    for i in new_list:
        j=j+i
    print(j)
same()