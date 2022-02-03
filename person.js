class Person {
  constructor(firstName, lastName, age, gendor, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gendor = gendor;
    this.interests = interests;
  }
  bio() {
    console.log(`${this.firstName} is ${this.age} yaers old.They like ${this.interests}.`);
  }
  greeting() {
    console.log(`Hi!I'm ${this.name}.`);
  }
}

exports.Person = Person;
