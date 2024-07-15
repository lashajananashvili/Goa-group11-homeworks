def about_you(name="",age=0,study=""):
    if name=="" or age==0 or study=="":
        print("please enter your information")
    else:
        print(f"hello {name} you are {age} years old and you study in {study}")



about_you(name=input("whats your name "),age=int(input("how old are you? ")),study=input("where do you study "))



