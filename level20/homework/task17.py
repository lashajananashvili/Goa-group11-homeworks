#17) შექმენით ფუნქცია რომელსაც გადაეცემა რაიმე sting,თქვენი მოვალეობაა ყოველ მეორე
#  ინდექსე მყოფი ასო გახადოს დიდი (upper). test case: hello | output: HeLlO
def lists():
    str=input("enter word  ")
    j=""

    for i in range(len(str)):
        if i%2==0:
            j=j+str[i].upper()
        else:
            j=j+str[i]
    print(j)

lists()