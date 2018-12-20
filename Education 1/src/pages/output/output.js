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
for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
    var element = result_1[_i];
    document.body.innerHTML = "<div>" + element.Age + " " + element.Name + " " + element.Email + "</div>";
}
// for (var i = 0; i < result.length; i++) {
//     document.body.innerHTML = "<div>" + result[i] + "</div>";
//   }
//# sourceMappingURL=output.js.map