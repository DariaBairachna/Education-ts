class UserService {
  constructor() {}

  public getUsers(): IUser[] {
    var  users: IUser[] = [];
    var usersJson = localStorage.getItem("Users");
    if (usersJson) {
      users = JSON.parse(usersJson);
    }
  
    return users;
  }

  public addUser(users) {
     localStorage.setItem("Users", JSON.stringify(users));
  }
 
}
// if (users.length == 0) {
//   localStorage.removeItem("Users");
// }