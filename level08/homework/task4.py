#4) კომენტარის სახით თქვენი სიტყვებით დაწერეთ and და or ოპერატორების წესები
#the and function is a logical operator used to combine two or more expressions. 
# It returns True if all the combined expressions are true; otherwise, it returns False for example
concree=int(input('how many concree do you have? '))
block=int(input("haw many blocks do you have? "))
if concree>=10 and block>=100 :
    print('congratulation you can now build your hause ')
else:
    print("I am sorry but you can't build your hause  ")

#the or function is a logical operator used to combine two or more conditional statements. 
#It evaluates the expressions on its left and right and returns True if at least one of them is true; otherwise, it returns False. :

point=int(input("how much points do you have? "))
if point>=6 or point==5 :
    print("congratulation you can enter next grade ")
else:
    print("i am sorry but you cant go to next grade ")








