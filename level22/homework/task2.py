#2) შექმენით manual_min() ფუნქცია. ანუ უნდა მისცეთ პარამეტრად რაიმე list'ი და ფუნქციამ უნდა იპოვოს მინიმალური რიცხვი ამ list'ში.

def manual_min():
    min=0
    new_list=[]
    n=int(input("Enter number of members: "))
    for i in range(n):
        member=int(input("Enter your member: "))
        new_list.append(member)
    min=new_list[0]

    for j in new_list:
        if min>j:
            min=j
    print(min)

manual_min()

