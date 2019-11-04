var a=1;
function add() {
    console.log(1);
}

function Person(name,age) {
    this.name= name;
    this.age=age
}
var person= new Person();

exports.a= a;
// module.exports.a= a;
exports.add=add();

module.exports={
    person:person
}
// exports.person=person;