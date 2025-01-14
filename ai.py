import datetime
import random
import webbrowser
#import requests

class AI:
    def __init__(self):
        self.tasks = []

    def greet(self):
        greetings = [
            "Hello! How can I assist you today?",
            "Hi there! What can I do for you?",
            "Greetings! Ready to help.",
            "Hey! How can I make your day better?"
        ]
        print(random.choice(greetings))

    def tell_time(self):
        current_time = datetime.datetime.now().strftime("%H:%M:%S")
        print(f"The current time is {current_time}.")

    def tell_date(self):
        current_date = datetime.datetime.now().strftime("%Y-%m-%d")
        print(f"Today's date is {current_date}.")

    def open_website(self, url):
        print(f"Opening {url}...")
        webbrowser.open(url)

    def add_task(self, task):
        self.tasks.append(task)
        print(f"Task '{task}' added to your list.")

    def show_tasks(self):
        if not self.tasks:
            print("Your task list is empty.")
        else:
            print("Here are your tasks:")
            for i, task in enumerate(self.tasks, 1):
                print(f"{i}. {task}")

    def chat(self, user_input):
        responses = {
            "how are you": "I'm just a program, but I'm running smoothly. How about you?",
            "what's your name": "I'm your AI assistant. You can call me AI.",
            "who made you": "I was created by a developer using Python.",
            "tell me a joke": random.choice([
                "Why don't scientists trust atoms? Because they make up everything!",
                "Why was the math book sad? It had too many problems.",
                "What do you call fake spaghetti? An impasta!"
            ])
        }
        return responses.get(user_input.lower(), "I'm sorry, I don't understand that. Can you rephrase?")

    def answer_question(self, question):
        if "capital of france" in question.lower():
            return "The capital of France is Paris."
        elif "largest planet" in question.lower():
            return "The largest planet in our solar system is Jupiter."
        elif "speed of light" in question.lower():
            return "The speed of light is approximately 299,792 kilometers per second."
        else:
            return "I'm not sure about that. Try asking something else!"

    def calculator(self, operation):
        try:
            result = eval(operation)
            print(f"The result of '{operation}' is {result}.")
        except Exception as e:
            print("Invalid operation. Please try again.")

    
    def unit_conversion(self, value, from_unit, to_unit):
        conversions = {
            "km_to_miles": 0.621371,
            "miles_to_km": 1.60934,
            "kg_to_pounds": 2.20462,
            "pounds_to_kg": 0.453592
        }
        key = f"{from_unit}_to_{to_unit}"
        if key in conversions:
            converted_value = value * conversions[key]
            print(f"{value} {from_unit} is equal to {converted_value:.2f} {to_unit}.")
        else:
            print("Conversion not available. Please try a different conversion.")

    def random_fact(self):
        facts = [
            "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
            "A day on Venus is longer than a year on Venus.",
            "Octopuses have three hearts, and their blood is blue.",
            "Bananas are berries, but strawberries are not."
        ]
        print(random.choice(facts))

    def run(self):
        self.greet()
        while True:
            user_input = input("\nYou: ").lower()

            if user_input in ["exit", "quit", "bye"]:
                print("Goodbye! Have a great day!")
                break
            elif "time" in user_input:
                self.tell_time()
            elif "date" in user_input:
                self.tell_date()
            elif "open" in user_input:
                url = input("Enter the website URL (e.g., https://www.google.com): ")
                self.open_website(url)
            elif "add task" in user_input:
                task = input("Enter the task: ")
                self.add_task(task)
            elif "show tasks" in user_input:
                self.show_tasks()
            elif "question" in user_input:
                question = input("Ask your question: ")
                print(self.answer_question(question))
            elif "calculate" in user_input:
                operation = input("Enter a mathematical operation (e.g., 2+3*5): ")
                self.calculator(operation)
            elif "weather" in user_input:
                city = input("Enter the city name: ")
                self.get_weather(city)
            elif "convert" in user_input:
                value = float(input("Enter the value to convert: "))
                from_unit = input("Enter the from unit (e.g., km, miles, kg, pounds): ").lower()
                to_unit = input("Enter the to unit (e.g., km, miles, kg, pounds): ").lower()
                self.unit_conversion(value, from_unit, to_unit)
            elif "fact" in user_input:
                self.random_fact()
            else:
                print(self.chat(user_input))

ai = AI()
ai.run()
