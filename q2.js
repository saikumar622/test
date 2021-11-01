var x=16;
function sum(){
   console.log("Globally value of x is :"+ x);
   diff();
}
function diff(){
    x=66;
console.log(" locally value of x: "+x);
}
console.log(x++);
sum();