#lambda ფუნქცია, რომ ფილტროთ სიტყვები, რომელთა სიგრძე 4 სიმბოლოზე ნაკლებია

words = ['apple', 'bat', 'cat', 'dolphin']
print(list(filter(lambda x: len(x) < 4, words)))
