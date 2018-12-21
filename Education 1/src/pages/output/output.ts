class IndexComponent {
  constructor() {
    let a: string;
  }
  public getUser(): IUser[] {
    var usersJson = localStorage.getItem("Users");
    let users: IUser[] = [];
    if (usersJson) {
      users = JSON.parse(usersJson);
    }

    return users;
  }
}

var indexvm = new IndexComponent();
let result = indexvm.getUser();
let i;
for ( i=0; i<result.length; i++){
  let createNewUserElement = document.createElement('div'); 
  createNewUserElement.innerHTML =  "<div>" + result[i].Name + " " + result[i].Age  + " " + result[i].Email + "</div>";
  document.body.appendChild( createNewUserElement)  ;
}
// for (var i = 0; i < result.length; i++) {

//     document.body.innerHTML = "<div>" + result[i] + "</div>";
//   }
