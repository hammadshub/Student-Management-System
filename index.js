class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    course = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.course.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("hammad", 21, "student1");
const student2 = new Student("Ali", 21, "student2");
const instructor1 = new Instructor("Wali", 21, 10000);
const instructor2 = new Instructor("Waqar", 24, 130000);
const course1 = new Course("course01", "Metaverse");
const course2 = new Course("course02", "Blockchain");
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
const department1 = new Department("Computer Science");
department1.addCourse(course1);
department1.addCourse(course2);
console.log(department1);
console.log(course1.instructor);
export {};
