type User = {
    firstName: string;
    lastName: string;
    age: number;
  };
  
  type CreateUserFn = (firstName: string, lastName: string, age: number) => User;
  
  const createUser: CreateUserFn = (firstName, lastName, age) => {
    return {
      firstName,
      lastName,
      age
    };
  };
  