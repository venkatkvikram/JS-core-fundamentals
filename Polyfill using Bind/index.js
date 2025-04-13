let name1 = {
  firstName: "Venkata Sai",
  lastName: "Esampalli",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      "," +
      "," +
      hometown +
      "," +
      state +
      "," +
      country
  );
};

printName.apply(name1, ["Gdk", "TS", "IND"])

let printMyName = printName.bind(name1, "Gdk");
printMyName("Telanagana", "India");

Function.prototype.myCustomBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function () {
    obj.apply(args[0], params);
  };
};

let printNameUsingBind = printName.myCustomBind(name1, "Gdk", "Telangana");
printNameUsingBind();
