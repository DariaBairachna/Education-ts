var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.outputUsers();
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
            var createWrapElement = document.createElement("div");
            var userId = createWrapElement.id = "user" + parseFloat(i + 1);
            var createNewUserElement = document.createElement("div");
            var createButtonDelete = document.createElement("button");
            var buttonId = createButtonDelete.id = "deleteButton" + parseFloat(i + 1);
            createNewUserElement.innerHTML = result[i].Name + " " + result[i].Age + " " + result[i].Email;
            createButtonDelete.innerHTML = "Delete";
            createButtonDelete.setAttribute("onclick", "indexvm.deleteUser()");
            // let deleteButton = document.getElementById(buttonId);
            document.body.appendChild(createWrapElement);
            createWrapElement.appendChild(createNewUserElement);
            createWrapElement.appendChild(createButtonDelete);
        }
    };
    IndexComponent.prototype.deleteUser = function () {
        var parentElement = document.getElementById(userId);
    };
    return IndexComponent;
}());
var indexvm = new IndexComponent();
//# sourceMappingURL=index.js.map