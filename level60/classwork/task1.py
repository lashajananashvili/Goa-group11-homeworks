class Car:
    def __init__(self, brand, model, year, color):
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color

    def car_details(self):
        print(f"Brand: {self.brand}, Model: {self.model}, Year: {self.year}, Color: {self.color}")

    def honk(self):
        print(f"{self.brand} {self.model} goes 'Beep Beep!'")

car1 = Car("mercedes", "E500", 2020, "White")
car2 = Car("car", "c5", 2019, "Black")
car3 = Car("Tesla", "Model S", 2022, "Red")

car1.car_details()
car1.honk()

car2.car_details()
car2.honk()

car3.car_details()
car3.honk()
