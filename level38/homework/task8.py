#გამოიყენეთ filter, რომ დააბრუნოთ მხოლოდ ის სიტყვები, რომლებიც იწყება ასო 'A'-თი (არამეგრძნობითი).
words = ['apple', 'banana', 'Avocado', 'cherry']
print(list(filter(lambda x: x.lower().startswith('a'), words)))
