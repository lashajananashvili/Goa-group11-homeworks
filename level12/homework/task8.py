
#8) მომხმარებელს შემოატანინეთ რიცხვი და უთხარით მისი grade ამ ფოტოს მიხედვით: (ანუ თუ მაგალითად 90'დან 100'ის
#  ჩათვლით ექნება ქულა გამოუტანეთ "Grade A", თუ 80'დან 89'ის ჩათვლით გამოუტანეთ "Grade B" და ა.შ) 

grade=int(input("enter your grade:  "))
if grade>=90 and grade<=100:
    print("well done you grade is A")
elif grade>=80 and grade<=89:
    print("your grade is B better next time")
elif grade>=70 and grade<=79:
    print("your grade is C avrege")
elif grade>=60 and grade<=69:
    print("your grade is B you survive this time")
elif grade>=0 and grade<=59:
    print("your grade is f run your mom is super mad")


