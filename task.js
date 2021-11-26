function person(FirstName ,LastName,Office_Address){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.Office_Address=Office_Address
}

var p1 = new person("sai","Kumar","Hyderabad");
var p2 = new person("Ravi","Kumar","vizag");
var p3 = new person("Teja","Mourali","Rajahmandry");

console.log(p1);
console.log(p2);
console.log(p3);