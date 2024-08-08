#6) შექმენით manual_replace() ფუნქცია. ვინც არ იცით გუგლში დასერჩეთ
# : replace function in python. ისწავლეთ რას აკეთებს და როგორ, გატესტეთ და შემდეგ შეასრულეთ ეს დავალება.

def manual_replace(str,strrep,rep,str2):
    for i in str:
        if i!=strrep:
            str2=str2+i
        else:
            str2=str2+rep
    print(str2)
        
manual_replace(input("enter a string  "),input("enter a member which you want to replace  "),input("input with what you want to replace  "),"")