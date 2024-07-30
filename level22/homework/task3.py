#3) შექმენით manual_max() ფუნქცია. ანუ უნდა მისცეთ პარამეტრად რაიმე list'ი და ფუნქციამ უნდა იპოვოს მაქსიმალური რიცხვი ამ list'ში.
def manual_max():
    max=0
    new_list=[]
    n=int(input("Enter number of members: "))
    for i in range(n):
        member=int(input("Enter your member: "))
        new_list.append(member)
        
    max=new_list[0]

    for j in new_list:
        if max<j:
            max=j
    print(max)

manual_max()

