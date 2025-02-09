class Player {
  static playerCount = 0;

  constructor(name) {
    this.name = name;
    Player.playerCount++;
  }

  static getPlayerCount() {
    return Player.playerCount;
  }
}

const player1 = new Player("Alice");
const player2 = new Player("Bob");
console.log("Player Count:", Player.getPlayerCount());