const getBookFromFriend = new Promise((resolve, reject) => {
    const friendBroughtBook = true; 
  
    if (friendBroughtBook) {
      resolve("წიგნი წარმატებით მივიღე!");
    } else {
      reject("წიგნი ვერ მივიღე, მეგობარმა არ მოიტანა."); 
    }
  });
  getBookFromFriend
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error); 
    });