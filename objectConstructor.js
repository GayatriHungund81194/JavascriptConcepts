function Person(name,phone,place,rollno) {
  this.name = name;
  this.phone = phone;
  this.place = place;
  this.rollno = rollno;
  this.updateNumber = function() {
    return ++this.rollno;
  }
}
var person1 = new Person("phoebe","123456","san jose","1");
var person2 = new Person("ross","123456","NYC","2");
console.log(person1);
console.log(person2);
var people = [new Person("rachel","123456","NYC","3"),new Person("monica","123456","NYC","4")];
console.log(people);
