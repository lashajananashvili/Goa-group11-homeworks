#6) შექმენით manual_replace() ფუნქცია. ვინც არ იცით გუგლში დასერჩეთ
# : replace function in python. ისწავლეთ რას აკეთებს და როგორ, გატესტეთ და შემდეგ შეასრულეთ ეს დავალება.
def manual_replace():
    new_list=[]
    g=0
    n=int(input("Enter number of members: "))
    for i in range(n):
        member=input("Enter your member: ")
        new_list.append(member)
    r=int(input("which member of list would you want to replace? "))
    m=input("with what do you want it to be replaced?")
    for j in new_list:
        j=int(j)
        g+=1
        if g==r:
            new_list[j]=m
        
    print(new_list)

manual_replace()