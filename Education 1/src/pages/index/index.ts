class IndexComponent {
  constructor() {
    this.outputUsers();
  }
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
      let createWrapElement = document.createElement("div");
      let userId = createWrapElement.id = "user" + parseFloat(i+1);
      let createNewUserElement = document.createElement("div");
      let createButtonDelete = document.createElement("button"); 
      let buttonId = createButtonDelete.id = "deleteButton" + parseFloat(i+1);
      createNewUserElement.innerHTML = result[i].Name + " " + result[i].Age + " " + result[i].Email ;
      createButtonDelete.innerHTML = "Delete";
      createButtonDelete.setAttribute("onclick", "indexvm.deleteUser()");
      
      // let deleteButton = document.getElementById(buttonId);
      document.body.appendChild(createWrapElement);
      createWrapElement.appendChild(createNewUserElement);
      createWrapElement.appendChild(createButtonDelete);
     
    }
  }
  public deleteUser(){
    let parentElement = document.getElementById(userId);
    


  }



}

var indexvm = new IndexComponent();

