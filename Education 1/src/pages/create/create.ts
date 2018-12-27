class CreateComponent {
  public userService: UserService;
  constructor() {
    this.userService = new UserService();
    this.generateId();
  }

  public isValidEmailAddress(emailValue: string): boolean {
    var pattern = new RegExp(
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    );
    var result = pattern.test(emailValue);
    return result;
  }

  public generateId(): string {
    var idValue = Math.random()
      .toString(10)
      .substr(2, 9);
    return idValue;
  }

  public addUser() {
    let nameInput = <HTMLInputElement>document.getElementById("name");
    let ageInput = <HTMLInputElement>document.getElementById("age");
    let emailInput = <HTMLInputElement>document.getElementById("email");
    let users = this.userService.getUsers();
    var user: IUser = {
      Id: this.generateId(),
      Name: nameInput.value,
      Age: parseFloat(ageInput.value),
      Email: emailInput.value
    };
    var ageValue = parseFloat(ageInput.value);
    var emailValue = emailInput.value;
    let validateEmail = this.isValidEmailAddress(emailValue);
    if (nameInput.value == "") {
      alert("Name is empty!");
      return false;
    }

    if (isNaN(ageValue)) {
      alert("Age must be number!");
      return false;
    }

    if (ageInput.value == "") {
      alert("Age is empty!");
      return false;
    }

    if (emailInput.value == "") {
      alert("Email is empty!");
      return false;
    }

    if (validateEmail == false) {
      alert("Email invalid");
      return false;
    }

    users.push(user);
    this.userService.addUser(users);
    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
    alert("User has been added sucsesfuly!");
  }
}
var vm = new CreateComponent();
