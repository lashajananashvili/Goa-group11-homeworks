#lambda ფუნქცია map-თან ერთად, რომ დაამატოთ თითოეული სიტყვის პირველი ასო "-start"-თან ერთად:
words = ['apple', 'banana', 'cherry']
print(list(map(lambda x: f"-start{x[0]}", words)))
