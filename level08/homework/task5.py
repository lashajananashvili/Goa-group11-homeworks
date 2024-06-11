#5) შექმენით 2 ცვლადი num1 და num2. მათი მნიშვნელობები შემოატანინეთ მომხმარებელს და შეადარეთ, num1 მეტია თუ არა num2'ზე, num1 
#ნაკლებია თუ არა num2'ზე და num1 ტოლია თუ არა num2'ის.
num1=int(input("pick a number "))
num2=int(input("pick a second number "))

sim1=num1<=num2
sim2=num1>=num2
sim3=num1==num2

if sim1==True :
    print("second one is more than first one")
elif  sim3==True:
    print('its eqale')
elif  sim2==True:
    print("first one is mere than second one")

