 class Person{
    name: string;
    age:number;

constructor(name:string , age:number){
    this.name = name;
    this.age= age;
}

getName(){
    return this.name
}

}

class Student extends Person{
    rollNumber:string;
    course:Course[]=[];

  constructor(name:string , age:number, rollNumber:string){
    super(name,age)
    this.rollNumber = rollNumber
  }

  registerForCourses(course:Course){
    this.course.push(course)
  }

}



class Instructor extends Person{
    salary:number;
    courses:Course[]=[]

    constructor(name:string,age:number,salary:number){
        super(name,age);
        this.salary =salary;
    }

assignCourse(course:Course){
    this.courses.push(course)
}

}


class Course{
  
    id:string;
    name:string;
    students:Student[]=[];

    instructor!:Instructor
     

   constructor(id:string,name:string,){
    this.id= id;
    this.name= name
   } 

   addStudent(student:Student){
    this.students.push(student)
    student.registerForCourses(this)
   }

   setInstructor(instructor:Instructor){
    this.instructor = instructor;
    instructor.assignCourse(this);
   }

}


class Department{
    name:string
    courses:Course[]=[]

    constructor(name:string){
        this.name=name
    }

    addCourse(course:Course){
        this.courses.push(course)
    }

     
}





const student1 = new Student("hammad",21,"student1")
const student2 = new Student("Ali",21,"student2")



const instructor1 = new Instructor("Wali",21, 10000)
const instructor2 = new Instructor("Waqar",24, 130000)


const course1 = new Course("course01","Metaverse")
const course2 = new Course("course02","Blockchain")


course1.addStudent(student1)
course1.addStudent(student2)
course1.setInstructor(instructor1)


const department1= new Department("Computer Science")
department1.addCourse(course1)
department1.addCourse(course2)

console.log(department1)






console.log(course1.instructor)
