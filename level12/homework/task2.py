
#2) ხელახლა გააკეთეთ კლასში გაკეთებული dice roll თამაში. აიღეთ რაიმე რიცხვი 1დან 6ის ჩათვლით რაც იქნება სწორი პასუხი. 
# აიღეთ ასევე guess რომელსაც მომხმარებელი შემოიტანს. თუ სწორად გამოიცნობს დაუწერეთ "It's correct", თუ არასწორად "It's incorrect".

guess=int(input("choose the number from 1 to 6:  "))

if guess==4:
    print("its correct")
else:
    print("its incorect")