class SortArray {
    userList: IUser[] = []
  constructor() {
    this.createArreyUsers();
    this.bubbleSort();
  }
  public createArreyUsers(): IUser[] {
    
    this.userList[0] = { Name: "Andriy", Age: 75, Email: "Andriy@gmail.com" };
    this.userList[1] = { Name: "Jon", Age: 14, Email: "Jon@mail.com" };
    this.userList[2] = { Name: "Oleg", Age: 23, Email: "Oleg@yandex.com" };
    this.userList[3] = { Name: "Taras", Age: 20, Email: "Oleg@gmail.com" };
    console.log(this.userList);
    return this.userList;
  }
  public bubbleSort(){
    
    for (let i = 0; i < this.userList.length-1; i++){
        for(let j= 0; j < this.userList.length-1-i; j++ ){
           let ageNumber = this.userList[j].Age;
           let ageNumberNext = this.userList[j+1].Age;
            if( ageNumber > ageNumberNext ){
                let upElement = this.userList[j];
                this.userList[j] = this.userList[j+1];
                this.userList[j + 1] = upElement;

            }
        }

    }
    console.log(this.userList);
    return this.userList;

  }
  

}
let sortvm = new SortArray();