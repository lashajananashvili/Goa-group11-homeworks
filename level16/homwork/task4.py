#4) შექმენით 2 list'ი 3-3 ელემენტებით და გამოიტანეთ ამ list'ების ელემენტები 1 list'ის სახით (+'ით შეგიძლიათ პირდაპირ მიამატოთ ერთმანეთს)

list1=[1,2,3]

fruts=['grape','banana','tyemali']

x=0

for i in list1:
    fruts.insert(x, i)
    x = x + 2
print(fruts)















