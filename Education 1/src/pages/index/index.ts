class IndexComponent {
  constructor() {}
  public getUser(): IUser[] {
    var usersJson = localStorage.getItem("Users");
    let users: IUser[] = [];
    if (usersJson) {
      users = JSON.parse(usersJson);
    }

    return users;
  }
  public outputUsers() {
    let result = this.getUser();
    let i;
    for (i = 0; i < result.length; i++) {
      let createNewUserElement = document.createElement("div");
      createNewUserElement.innerHTML =
        "<div>" + result[i].Name + " " + result[i].Age + " " + result[i].Email + "</div>";
      document.body.appendChild(createNewUserElement);
    }
  }
}

var indexvm = new IndexComponent();
indexvm.outputUsers();
