#15) შექმენით ფუნქცია რომელიც მომხმარებელს შემოატანინებს რიცხვს და დაპრინტავს ეს რიცხვი თუ იყოფა 3ზე ან 5ზე ან ორივეზე

def lists():
    num=int(input("enter your number "))

    if num%3==0 and num%5==0:
        print("Your number is divisible by three and five")
    elif num%3==0:
        print("Your number is divisible by three")
    elif num%5==0:
        print("Your number is divisible by five")
    else:
        print("Your number can't be divisible by three or by five")
lists()