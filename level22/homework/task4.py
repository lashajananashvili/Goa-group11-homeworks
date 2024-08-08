#4) შექმენით manual_len() ფუნქცია. ანუ უნდა მისცეთ პარამეტრად რაიმე list'ი და ფუნქციამ უნდა დააბრუნოს რამდენი ელემენტია სიაში.

def manual_len():
    new_list=[]
    n=int(input("Enter number of members: "))
    for i in range(n):
        member=input("Enter your member: ")
        new_list.append(member)
    h=0
    for j in new_list:
        h+=1
    print(h)
    
manual_len()
