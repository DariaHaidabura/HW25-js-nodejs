let teacherModel = require('./teacher');
let studentModel = require('./student');

let teacher1= new teacherModel.Teacher('Nikita', 'Ivanov', 45, 'male', 'footbal', 'History');
teacher1.bio();
teacher1.greeting();


let student1 = new studentModel.Student('Daria', 'Gordaya', 18, 'female', 'dancing');
student1.bio();
student1.greeting();


