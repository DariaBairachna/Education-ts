class UserService {
  constructor() {}

  public getUsers(): IUser[] {
    var users;
    var usersJson = localStorage.getItem("Users");
    if (usersJson) {
      users = JSON.parse(usersJson);
    }
    if (users.length == 0) {
      localStorage.removeItem("Users");
    }
    return users;
  }

  public addUser(users) {
     localStorage.setItem("Users", JSON.stringify(users));
  }
 
}
