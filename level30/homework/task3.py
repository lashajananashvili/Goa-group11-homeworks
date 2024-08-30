cars = {
    "car1": {"make": "Mercedes", "model": "GT 63", "features": "12v Power outlets , Automatic headlamps,Cabin boot access , Cruise control , Steering adjustment,Vanity mirrors on Sun Visors"},
    "car2": {"make": "Ford", "model": "Mustang GT", "features": "V8 engine, sport design"},
    "car3": {"make": "Tesla", "model": "Model 3", "features": "Electric, long driving range, advanced autopilot features and fast charge"}
}

for i, j in cars.items():
    print(f"\n** {i}:**")
    print(f"Make: {j['make']}")
    print(f"Model: {j['model']}")
    print(f"Features: {j['features']}")