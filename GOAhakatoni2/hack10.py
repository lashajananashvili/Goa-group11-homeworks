#ფუნქციას გადაეცემა 1-ზე დიდი რიცხვი. დააბრუნეთ ისეთი რიცხვი, რომელიც ამ რიცხვზე დიდია, მაგრამ არ იყოფა ამ რიცხვზე. ბევრი სწორი პასუხი თუ არსებობს, დააბრუნეთ ნებისმიერი. f(2) = 13. f(19) = 31 ახსნა: 13 არ იყოფა ორზე. 31 არ იყოფა 19-ზე.

def manual_idk(num):
    if num==1:
        return "there is nothing like that"
    i=0
    s=False
    while s==False:
        i+=1
        if num<i and i%num!=0:
            s=True
    return i

print(manual_idk(1))

