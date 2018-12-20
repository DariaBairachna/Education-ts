class User {
  public Name: string;
  public Age: number;
  public Email: string;
  public Education: string;
  constructor(Name: string, Age: number, Email: string, Education: string) {
    this.Name = Name;
    this.Age = Age;
    this.Email = Email;
    this.Education = Education;
  }
}
let andriy = new User("Andriy",23,"Andriy@gmail.com","KHNURE");
let jon = new User("Jon",23,"Jon@gmail.com","KHPI");
let oleg = new User("Oleg",23,"Oleg@gmail.com","KHNURE");
let userList:User[] = [andriy,jon,oleg];
for (var item of userList) {
    console.log(item);
}
