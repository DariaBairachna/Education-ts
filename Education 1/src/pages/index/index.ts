class IndexComponent {
  users: IUser[] = [];

  constructor() {
    this.getUser();
    this.outputUsers();
  }
 
//create User

  public getUser(): IUser[] {
    var usersJson = localStorage.getItem("Users");
    if (usersJson) {
      this.users = JSON.parse(usersJson);
    }
    if (this.users.length == 0) {
      localStorage.removeItem("Users");
    }
    return this.users;
  }

  public createTableUsers() {
    let createTable = document.createElement("div");
    document.body.appendChild(createTable);
    createTable.id = "table";
    return createTable;
  }

  public createTableRow(wrapperBlock, i) {
    let createWrapElement = document.createElement("div");
    let userId = createWrapElement.id = "user" + (i + 1);
    let createNewUserElement = document.createElement("div");
    let userElementId = createNewUserElement.id = "person" + (i + 1);
    let createButtonDelete = document.createElement("button");
    createNewUserElement.innerHTML = this.users[i].Name + " " + this.users[i].Age + " " + this.users[i].Email;
    createButtonDelete.innerHTML = "Delete";
    createButtonDelete.setAttribute( "onclick", "indexvm.deleteUser('" + userId + "', '" + userElementId + "')");
    wrapperBlock.appendChild(createWrapElement);
    createWrapElement.appendChild(createNewUserElement);
    createWrapElement.appendChild(createButtonDelete);
  }

  public outputUsers() {
    let wrapperBlock = this.createTableUsers();
    for (let i = 0; i < this.users.length; i++) {
      this.createTableRow(wrapperBlock, i);
    }
  }

//filter User

  public compare() {
    
    let filterInput = <HTMLInputElement>document.getElementById("filter");
    let compareValue = filterInput.value;
    document.body.removeChild(document.getElementById("table"));
    let wrapperBlock = this.createTableUsers();
    for (let i = 0; i < this.users.length; i++) {
      let userString = this.users[i].Name + " " + this.users[i].Age + " " + this.users[i].Email;
      let findValue = userString.indexOf(compareValue) != -1;
      if (findValue == true) {
        this.createTableRow(wrapperBlock, i);
      }
    }

  }

//sort User

  public bubbleSort() {
    for (let i = 0; i < this.users.length - 1; i++) {
      for (let j = 0; j < this.users.length - 1 - i; j++) {
        let ageNumber = this.users[j].Age;
        let ageNumberNextUser = this.users[j + 1].Age;
        if (ageNumber > ageNumberNextUser) {
          let upElement = this.users[j];
          this.users[j] = this.users[j + 1];
          this.users[j + 1] = upElement;
        }
      }
    }
    document.body.removeChild(document.getElementById("table"));
    this.outputUsers();
    return this.users;
  }

//delete User


  public deleteUser(userId, userElementId) {
    let table = document.getElementById("table");
    let getUserFromHTML = document.getElementById(userElementId).innerHTML;
    for (let i = 0; i < this.users.length; i++) {
      this.users = JSON.parse(localStorage.getItem("Users"));
      let userString = this.users[i].Name + " " + this.users[i].Age + " " + this.users[i].Email;
      if (userString == getUserFromHTML) {
        table.removeChild(document.getElementById(userId));
        userString.indexOf(userString);
        this.users.splice(i, 1);
        localStorage.setItem("Users", JSON.stringify(this.users));
      }
    }
  }
}

var indexvm = new IndexComponent();
