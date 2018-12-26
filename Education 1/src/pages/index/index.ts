class IndexComponent {
  users: IUser[] = [];

  constructor() {
    this.getUser();
    this.outputUsers();
  }

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

  public createTable(){
    let createTable = document.createElement("div");
    document.body.appendChild(createTable);
    createTable.id = "table";
    return createTable;
  }

  public createTableRow(wrapperBlock, i){
    let createWrapElement = document.createElement("div");
    let userId = (createWrapElement.id = "user" + (i + 1));
    let createNewUserElement = document.createElement("div");
    let userElementId = (createNewUserElement.id = "person" + (i + 1));
    let createButtonDelete = document.createElement("button");
    let buttonId = (createButtonDelete.id = "deleteButton" + (i + 1));
    createNewUserElement.innerHTML = this.users[i].Name + " " + this.users[i].Age + " " + this.users[i].Email;
    createButtonDelete.innerHTML = "Delete";
    createButtonDelete.setAttribute(
      "onclick",
      "indexvm.deleteUser('" + userId + "', '"+ userElementId +"')"
    );
    wrapperBlock.appendChild(createWrapElement);
    createWrapElement.appendChild(createNewUserElement);
    createWrapElement.appendChild(createButtonDelete);
    
  }

  public outputUsers() {
   let wrapperBlock = this.createTable();
    for (let i = 0; i < this.users.length; i++) {
      this.createTableRow(wrapperBlock, i);
    }
  }

  public compare(){
    let resultFilter = [];
    let filterInput = (<HTMLInputElement>document.getElementById("filter"));
    let compareValue = filterInput.value;
    document.body.removeChild(document.getElementById("table"));

    let wrapperBlock = this.createTable();
    for (let  i = 0; i < this.users.length; i++) {
        var userString = this.users[i].Name + " " + this.users[i].Age + " " + this.users[i].Email;
        var newUserList = userString.indexOf(compareValue) != -1;
        if(newUserList == true){
          this.createTableRow(wrapperBlock, i);
        }
    }
 
    return resultFilter;
  }

  public bubbleSort() {
    for (let i = 0; i < this.users.length - 1; i++) {
      for (let j = 0; j < this.users.length - 1 - i; j++) {
        let ageNumber = this.users[j].Age;
        let ageNumberNext = this.users[j + 1].Age;
        if (ageNumber > ageNumberNext) {
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
 
  public deleteUser(userId, userElementId ) {
    let table = document.getElementById("table");
    let getUserFromHTML = document.getElementById(userElementId).innerHTML;
    for(let i = 0; i < this.users.length; i++ ){
      this.users = JSON.parse(localStorage.getItem("Users"));
      let userString = this.users[i].Name + " " + this.users[i].Age + " " + this.users[i].Email;
      if(userString == getUserFromHTML){
        table.removeChild(document.getElementById(userId));
        userString.indexOf(userString)
        this.users.splice(i, 1);
        localStorage.setItem("Users", JSON.stringify(this.users));
      }
   
    } 

  }
}

var indexvm = new IndexComponent();
