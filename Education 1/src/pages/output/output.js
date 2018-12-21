var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        var a;
    }
    IndexComponent.prototype.getUser = function () {
        var usersJson = localStorage.getItem("Users");
        var users = [];
        if (usersJson) {
            users = JSON.parse(usersJson);
        }
        return users;
    };
    return IndexComponent;
}());
var indexvm = new IndexComponent();
var result = indexvm.getUser();
var i;
for (i = 0; i < result.length; i++) {
    var createNewUserElement = document.createElement('div');
    createNewUserElement.innerHTML = "<div>" + result[i].Name + " " + result[i].Age + " " + result[i].Email + "</div>";
    document.body.appendChild(createNewUserElement);
}
// for (var i = 0; i < result.length; i++) {
//     document.body.innerHTML = "<div>" + result[i] + "</div>";
//   }
//# sourceMappingURL=output.js.map