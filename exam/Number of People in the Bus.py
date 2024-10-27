def number(bus_stops):
    num=0
    for i in bus_stops:
        num+=i[0]-i[1]
    
    return num