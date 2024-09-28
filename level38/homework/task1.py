#1)შექმენით lambda ფუნქცია, რომელიც დაალაგებს tuple-ების სიას თითოეული tuple-ის მეორე ელემენტზე.
tuples_list = [(1, 3), (2, 1), (4, 2)]
print(sorted(tuples_list, key=lambda x: x[1]))
