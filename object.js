var person  = new Object();
person.name = "Gayatri Milind Hungund";
person.education = "MS in Computer Science";
person.profileExists = true;

var person2 = {
  name : "Gayatri Milind Hungund",
  education : "MS in Computer Science",
  profileExists : true,
  rollno: 0,

  updateNumber : function() {
    return ++person2.rollno;
  }
}
console.log("Person1"+person);
console.log("Person2"+person2);
person2.updateNumber();
