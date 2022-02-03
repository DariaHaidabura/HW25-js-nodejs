const PersonModel = require("./person");

class Teacher extends PersonModel.Person {
  constructor(firstName, lastName, age, gender, interests, subject) {
    super(firstName, lastName, age, gender, interests);
    this.subject = subject;
  }
  greeting() {
    console.log(`Hello! My name is ${this.firstName} ${this.lastName} and I teach ${this.subject}.`);
  }
}

exports.Teacher = Teacher;
