def rot13(message):
    letters="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    letters1="ABCDEFGHIJKLMNOQPRSTUVWXYZABCDEFGHIJKLMNOQPRSTUVWXYZ"
    result=""
    
    for i in message:
        if i.isupper() and i.isalpha():
            result+=letters1[letters1.index(i)+13]
        elif i.islower() and i.isalpha:
            result+=letters[letters.index(i)+13]
            
        else:
            result+=i
        
    return result