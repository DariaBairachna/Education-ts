var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.getUser = function () {
        var usersJson = localStorage.getItem("Users");
        var users = [];
        if (usersJson) {
            users = JSON.parse(usersJson);
        }
        return users;
    };
    IndexComponent.prototype.outputUsers = function () {
        var result = this.getUser();
        var i;
        for (i = 0; i < result.length; i++) {
            var createNewUserElement = document.createElement('div');
            createNewUserElement.innerHTML = "<div>" + result[i].Name + " " + result[i].Age + " " + result[i].Email + "</div>";
            document.body.appendChild(createNewUserElement);
        }
    };
    return IndexComponent;
}());
var indexvm = new IndexComponent();
indexvm.outputUsers();
//# sourceMappingURL=index.js.map