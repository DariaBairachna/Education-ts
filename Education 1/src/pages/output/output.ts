class IndexComponent {
    constructor() {
        let a:string;
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
  for (var element of result) {
    document.body.innerHTML = "<div>" + element.Age + " " + element.Name + " " + element.Email + "</div>";
}
// for (var i = 0; i < result.length; i++) {
    
//     document.body.innerHTML = "<div>" + result[i] + "</div>";
//   }
