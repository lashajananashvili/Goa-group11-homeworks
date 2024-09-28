#lambda ფუნქცია filter-თან ერთად, რომ წაშალოთ ყველა უარყოფითი რიცხვი სიიდან
numbers = [-1, 2, -3, 4, -5, 6]
print(list(filter(lambda x: x >= 0, numbers)))