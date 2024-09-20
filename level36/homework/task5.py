#შექმენით dictionary, სადაც გექნებათ პროდუქტები, 
#მათი value'ები უნდა იყოს boolean'ები (ეს boolean'ები
#აღწერენ რაიმე ნივთი არის თუ არა მარაგში) თქვენი მოვალეობაა 
#გადაატაროთ filter ფუნქცია და გამოიტანოთ მხოლოდ ისეთები
#რომლებიც მარაგში არ არის


prd={
    "banana": True,
    "NaCl": False,
    "mininions": True,
    "yougurt": False,
    "eggs": True,
    "chocolate": False
}

def isthere(item):
    return not item[1]

isnot=dict(filter(isthere, prd.items()))

print(isnot)