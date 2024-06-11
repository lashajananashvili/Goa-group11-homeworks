#4) კომენტარის სახით თქვენი სიტყვებით დაწერეთ and და or ოპერატორების წესები
#the and function is a logical operator used to combine two or more expressions. 
# It returns True if all the combined expressions are true; otherwise, it returns False for example
cementi=int(input('ramdeni camenti gaq? '))
bloki=int(input("ramdeni bloki gaq? "))
if cementi>=10 and bloki>=100 :
    print('tqven segiliat saxlis aseneba ')
else:
    print('tqven ar segiliat saxlis aseneba ')

#the or function is a logical operator used to combine two or more conditional statements. 
#It evaluates the expressions on its left and right and returns True if at least one of them is true; otherwise, it returns False. :

point=int(input("how much points do you have? "))
if point>=6 or point==5 :
    print("congratulation you can enter next grade ")
else:
    print("i am sorry but you cant go to next grade ")








