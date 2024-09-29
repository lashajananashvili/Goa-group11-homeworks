def removeSpecLetter(word,removable):
    result = ''
    for i in word:
        if i != removable:
            result += i
    return result
print(removeSpecLetter("hello my name is davit", "d"))