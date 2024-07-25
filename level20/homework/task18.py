#18) შექმენით ფუნქცია რომელსაც გადაეცემა  რიცხვების სია,თქვენი მოვალეობააა შექმნათ ახალი სია და ამ 
# ახალ სიაში გამოიტანოთ ყოველი რიცხვის კვადრატი (append) და შემდეგ დააბრუნეთ ახალი სია.
#test case: [3,12,5,2,6] | output: new list[9,144,25,4,36]
def lists():
    j=0
    new_list2=[]
    new_list=[]
    n=int(input("Enter number of members: "))
    for i in range(n):
        member=int(input("Enter your member: "))
        new_list.append(member)

    for i in new_list:
        j=i*i
        new_list2.append(j)
        j=0
    print(new_list2)

lists()


