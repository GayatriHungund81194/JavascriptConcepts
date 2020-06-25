function doSomeMath() {
	var a = 5;
	var b = 4;
	function multiply(){
		var result;
		result = a*b;
		return result;
	}

	return multiply;
}
//Closure is a function inside a function that relies on outside variables for execution
var theResult = doSomeMath();

console.log("The result: ", theResult());
