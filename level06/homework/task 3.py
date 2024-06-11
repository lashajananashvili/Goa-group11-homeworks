#) შექმენით მოხმარებლის Account. შემოატანინეთ სახელი, გვარი, ასაკი და პაროლი. ეს ყველაფერი გამოიტანეთ ეკრანზე.

#we let the visitor to put his information about his name  lastname age and password
name=input('whats your name? ')

last_name=input('whats your laastname? ')

age=int(input('how old are you? '))

password=input('whats your password? ')
#and then we print those informations on terminal
print('hello' + ' ' + name + ' ' + last_name + ' ' + 'you are '+ str(age) +' years old'+'your password is '+password )

