class User {
  #validatePassword(password) {
    return password.length >= 8; 
  }

  setPassword(password) {
    if (this.#validatePassword(password)) {
      this.password = password;
      console.log("Password set successfully");
    } else {
      console.log("Password is too weak");
    }
  }
}

const user = new User();
user.setPassword("123456"); 
user.setPassword("strongpassword");