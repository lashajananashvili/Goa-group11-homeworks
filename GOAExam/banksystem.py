print("wellcome to bank!")
print("Please create your acount!")

user_name=input("enter your user name  ")

password=input("enter your password ")

repeat_password=input("repeat your password  ")

credit_cart=input("enter your credit_cart ")
your_balance=int(input("enter your curent balance "))
        
if password!=repeat_password:
    print("try creating your acount again!")
    exit()
def Deposit_money():
        
    deposit=int(input("enter how much do you want to deposit "))
    if deposit<0:
        print("thats not an invalid deposit")
        exit()
    full=your_balance+deposit
    print(f"You have deposit {deposit} dolars$$ Now your balance is {full}")
def with_draw():
    withdraw=int(input("how much do you want to withdraw? "))
    if withdraw<0:
        print("thats not a valid number to withdraw")
    ba=your_balance-withdraw
    print(f"you have withdraw {withdraw} dolars$$ Now your balance is {ba}")

        
print("1.Deposit") 
print("2.Withdraw")
print("3.balance") 
print("4.Exit")
c=int(input("enter your choice "))

if c==1:
    Deposit_money()
elif c==2:
    with_draw()
elif c==3:
    print(f"your balance is {your_balance} dolars")
elif c==4:
    
    print("have a nice day!!!")
else:
    print("that is not a valid choise")

