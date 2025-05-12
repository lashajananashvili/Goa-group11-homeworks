enum GameMode {
    EASY = 1,
    MEDIUM,
    HARD
  }
  
function choseGameMode(input: number): GameMode | null {
  switch (input) {
    case GameMode.EASY:
      console.log("თქვენ აირჩიეთ მარტივი რეჟიმი");
      return GameMode.EASY;
    case GameMode.MEDIUM:
      console.log("თქვენ აირჩიეთ საშუალო რეჟიმი");
      return GameMode.MEDIUM;
    case GameMode.HARD:
      console.log("თქვენ აირჩიეთ რთული რეჟიმი");
      return GameMode.HARD;
    default:
      console.log("არასწორი არჩევანი");
      return null;
  }
}
  