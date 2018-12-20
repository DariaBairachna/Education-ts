var User = /** @class */ (function () {
    function User(Name, Age, Email, Education) {
        this.Name = Name;
        this.Age = Age;
        this.Email = Email;
        this.Education = Education;
    }
    return User;
}());
var andriy = new User("Andriy", 23, "Andriy@gmail.com", "KHNURE");
var jon = new User("Jon", 23, "Jon@gmail.com", "KHPI");
var oleg = new User("Oleg", 23, "Oleg@gmail.com", "KHNURE");
var userList = [andriy, jon, oleg];
for (var _i = 0, userList_1 = userList; _i < userList_1.length; _i++) {
    var item = userList_1[_i];
    console.log(item);
}
//# sourceMappingURL=index.js.map