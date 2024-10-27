def alphabet_war(fight):
    left={'w':4,'p':3,'b':2,'s':1}
    right={'m':4,'q':3,'d':2,'z':1}
    
    left_power=0
    right_power=0
    
    for i in fight:
        if i in left:
            left_power+=left[i]
        elif i in right:
            right_power+=right[i]
    
    if left_power>right_power:
        return "Left side wins!"
    elif right_power > left_power:
        return "Right side wins!"
    else:
        return "Let's fight again!"