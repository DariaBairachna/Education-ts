var CreateComponent = /** @class */ (function () {
    function CreateComponent() {
    }
    CreateComponent.prototype.getUsers = function () {
        var usersJson = localStorage.getItem("Users");
        var users = [];
        if (usersJson) {
            users = JSON.parse(usersJson);
        }
        return users;
    };
    CreateComponent.prototype.isValidEmailAddress = function (emailValue) {
        var pattern = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
        var result = pattern.test(emailValue);
        return result;
    };
    CreateComponent.prototype.addUser = function () {
        var nameInput = document.getElementById("name");
        var ageInput = document.getElementById("age");
        var emailInput = document.getElementById("email");
        var users = this.getUsers();
        var user = {
            Name: nameInput.value,
            Age: parseFloat(ageInput.value),
            Email: emailInput.value
        };
        var ageValue = parseFloat(ageInput.value);
        var emailValue = emailInput.value;
        var validateEmail = this.isValidEmailAddress(emailValue);
        if (nameInput.value == "") {
            alert("Name is empty!");
            return false;
        }
        ;
        if (isNaN(ageValue)) {
            alert("Age must be number!");
            return false;
        }
        ;
        if (ageInput.value == "") {
            alert("Age is empty!");
            return false;
        }
        ;
        if (emailInput.value == "") {
            alert("Email is empty!");
            return false;
        }
        ;
        if (validateEmail == false) {
            alert("Email invalid");
            return false;
        }
        users.push(user);
        localStorage.setItem("Users", JSON.stringify(users));
        nameInput.value = "";
        ageInput.value = "";
        emailInput.value = "";
        alert("User has been added sucsesfuly!");
    };
    return CreateComponent;
}());
var vm = new CreateComponent();
//# sourceMappingURL=create.js.map