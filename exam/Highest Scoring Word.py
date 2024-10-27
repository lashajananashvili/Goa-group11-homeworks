def high(x):
    highest_score=0
    word=""
    for i in x.split():
        score=0
        for j in i:
            score+=ord(j)-ord('a')+1
        
        if score > highest_score:
            highest_score=score
            word=i
        
    return word