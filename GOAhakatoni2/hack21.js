function modifyWord(word) {
    const length = word.length;
    const mid = Math.ceil(length / 2); 
    return word.slice(mid) + word.slice(0, mid);
}