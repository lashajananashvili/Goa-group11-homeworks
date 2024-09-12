# ივარჯიშეთ exception handling'ზე, საკლასო დავალებაში მოცემული
#  დავალებებიდან, მეორედან მეოთხეს ჩათვლით თავიდან გააკეთეთ
#  სხვანაირი მაგალითებით (სხვა ტიპის მაგალითები მოიყვანეთ, უბრალოდ
#  ცვლადის სახელები არ შეცვალოთ)

#2) დაწერეთ ისეთი კოდი სადაც იქნება NameError და გაუმკლავდით try/except'ით

n=int(input("how many times do you want hello to repeat  "))

try:
    for i in range(ni):
        print(ni)
except NameError:
    print("value name ni isnt identified please enter correct value name")

#N3
listn=[1,2,3,4,5,6,7,8,9]
l=int(input("which walue do you want to print?  "))
try:
    print(listn[l])
except IndexError:
    print("indexerror:the index is out of range.")

#N4

ints=input("how old are you ?   ")

try:
    print(f"you are {int(ints)} years old  ")
except ValueError:
    print("please enter a valid answer   ")