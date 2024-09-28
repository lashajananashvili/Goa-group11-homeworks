#lambda ფუნქცია filter-თან ერთად, რომ ამოიღოთ მხოლოდ ლუწი რიცხვები მთელ რიცხვების სიიდან
numbers = [1, 2, 3, 4, 5, 6]
print(list(filter(lambda x: x % 2 == 0, numbers)))
