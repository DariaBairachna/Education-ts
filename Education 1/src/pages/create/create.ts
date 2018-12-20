class CreateComponent {
  constructor() {
  }

  public getUsers(): IUser[] {
    var usersJson = localStorage.getItem("Users");
    let users: IUser[] = [];
    if (usersJson) {
      users = JSON.parse(usersJson);
    }
    return users;
  }

  public addUser() {
    debugger;
    let nameInput = (<HTMLInputElement>document.getElementById("name"));
    let ageInput = (<HTMLInputElement>document.getElementById("age"));
    let emailInput = (<HTMLInputElement>document.getElementById("email"));
    var users = this.getUsers();
    var user :IUser = {
      Name:nameInput.value,
      Age:parseFloat(ageInput.value),
      Email:emailInput.value
    };
    var AgeValue = parseFloat(ageInput.value);
    var EmailValue = emailInput.value;
    let ValidateEmail = isValidEmailAddress(EmailValue);
    if (nameInput.value == "") {
      alert("Name is empty!");
      return false;
    };
    
    if (isNaN(AgeValue)) {
      alert("Age must be number!");
      return false;
    };

    if (ageInput.value == "") {
      alert("Age is empty!");
      return false;
    };
    
    if (emailInput.value == "") {
      alert("Email is empty!");
      return false;
    };
    
    function isValidEmailAddress(EmailValue) {
      var pattern = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
      var result = pattern.test(EmailValue)
        return result;
      }
      if(ValidateEmail == false){
        alert("Email invalid")
        return false;
      }
      
    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users));
    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
    alert("User has been added sucsesfuly!")
  }
}
var vm = new CreateComponent();