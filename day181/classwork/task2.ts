enum CharacterName {
    Warrior = "Warrior",
    Mage = "Mage",
    Archer = "Archer"
}
  
  enum UserRole {
    Admin = "Admin",
    Moderator = "Moderator",
    Player = "Player"
}
  
  interface UserRegistration {
    character: CharacterName;
    role: UserRole;
    username: string;
    password: string;
}
  
  function registerUser(data: UserRegistration) {
    console.log("რეგისტრაცია წარმატებულია:");
    console.log(`პერსონაჟი: ${data.character}`);
    console.log(`მომხმარებლის როლი: ${data.role}`);
    console.log(`Username: ${data.username}`);
}
  
  const newUser: UserRegistration = {
    character: CharacterName.Mage,
    role: UserRole.Player,
    username: "lasha123",
    password: "securepass"
};
  
registerUser(newUser);
  