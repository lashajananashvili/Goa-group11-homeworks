const getBookFromFriend = new Promise((resolve, reject) => {
    const friendBroughtBook = true; 
  
    if (friendBroughtBook) {
      resolve("i haev got the book secsuessfully");
    } else {
      reject("i cant get the book friend didnt gave me"); 
    }
  });
  getBookFromFriend
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error); 
    });