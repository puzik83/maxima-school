function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");
  let user2 = new User("Ann");
  
  console.log(user.name); // Jack
  console.log(user.isAdmin); // false
  console.log(user2.name);