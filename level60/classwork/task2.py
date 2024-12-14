class Person:
    total_people = 0

    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
        Person.total_people += 1  

    def person_details(self):
        print(f"Name: {self.name}, Age: {self.age}, Gender: {self.gender}")

    def birth_year(self, current_year):
        birth_year = current_year - self.age
        print(f"{self.name} was born in {birth_year}.")

person1 = Person("Alice", 30, "Female")
person2 = Person("Bob", 25, "Male")
person3 = Person("Charlie", 35, "Male")

person1.person_details()
person1.birth_year(2024)

person2.person_details()
person2.birth_year(2024)

print(f"Total people created: {Person.total_people}")
