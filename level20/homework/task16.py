#16) შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვების სია,თქვენი მოვალეობააა გამოითვალე
#  ამ სიის საშუალო არითმეტიკული. test case: [1,3,4,5,2] | output: 3
def lists():
    b=0
    new_list=[]
    n=int(input("Enter number of members: "))
    for i in range(n):
        member=int(input("Enter your member: "))
        new_list.append(member)


    for j in new_list:
        b=b+j

    print(b/n)
lists()