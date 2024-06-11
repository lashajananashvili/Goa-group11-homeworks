#4) გააკეთეთ იგივე რაც მესამეში, f stringის გამოყენებით
#we let the visitor to put his information about his name  lastname age and password
name=input('whats your name? ')

last_name=input('whats your laastname? ')

age=int(input('how old are you? '))

password=input('whats your password? ')
#and then we print those informations on terminal using f print
print(f'hello {name} {last_name} you are {age} years old your password is {password}')

