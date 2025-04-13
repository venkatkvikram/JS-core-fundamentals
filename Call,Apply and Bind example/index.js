let name1 = {
  firstname: "venkat",
  lastname: "Esampalli",
  //   printFullName: function () {
  //     console.log(this.firstname); //every fn has access to "this" keyword. Here this can access name object
  //   },
};

let name2 = {
  firstname: "Virat",
  lastname: "Kohli",
};

let helloFullName = function printFullName(hometown, State) {
  console.log(
    this.firstname + " " + this.lastname + "," + hometown + "," + State
  );
};

helloFullName.call(name1, "Godavarikhani", "Telanagana");
helloFullName.apply(name2, ["Delhi", "Delhi"]);
let boundFunction = helloFullName.bind(name1, "Godavrikhani", "Telangana"); //returns a function
boundFunction(); //gets callled 

//for reference : https://chatgpt.com/share/67b8ceab-ff08-800e-a877-40623f4a21ac