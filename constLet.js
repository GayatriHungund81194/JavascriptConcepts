// const MYCONST = 5;
// console.log(MYCONST);
// MYCONST = 6;
function logscope() {
  var localVar = 2;
  if (localVar) {
    var localVar = "I am different";
    console.log("Nested Localvar:",localVar);
  }
  console.log("logscope localvar:",localVar);
}
logscope();

//If you want the scope to be global to a block of function then use localVar
//If you want the scope of variable to be till the end of one block, use let (specific to if statement or any loop the scope gets over when loop terminates)
function logscope1() {
  var localVar1 = 2;
  if (localVar1) {
    let localVar1 = "I am different";
    console.log("Nested Localvar:",localVar1);
  }
  console.log("logscope localvar:",localVar1);
}
logscope1();
