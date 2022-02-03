const PersonModel = require("./person");

class Student extends PersonModel.Person {
  greeting() {
    console.log(`Yo! I'm ${this.firstName}.`);
  }
}

exports.Student = Student;
