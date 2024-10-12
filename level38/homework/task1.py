#1)შექმენით lambda ფუნქცია, რომელიც დაალაგებს tuple-ების სიას თითოეული tuple-ის მეორე ელემენტზე.
listn= [(1, 3), (2, 1), (4, 2)]
print(sorted(listn, key=lambda x: x[1]))
