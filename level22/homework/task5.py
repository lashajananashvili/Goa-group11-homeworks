#5) შექმენით manual_sum() ფუნქცია. ანუ უნდა მისცეთ პარამეტრად რაიმე list'ი და ფუნქციამ უნდა დააბრუნოს სიაში მყოფი რიცხვების ჯამი.
def manual_sum():
    max=0
    new_list=[]
    n=int(input("Enter number of members: "))
    for i in range(n):
        member=int(input("Enter your member: "))
        new_list.append(member)
    h=0
    for j in new_list:
        h=h+j
    print(h)
manual_sum()