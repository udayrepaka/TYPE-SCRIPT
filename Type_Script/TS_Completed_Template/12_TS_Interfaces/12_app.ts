// Create a Student Interface , and printStudent function
interface Student{
    name : string,
    age : number,
    courseCompleted : boolean,
    address : string
}

let student:Student = {
    name : 'Rajan',
    age : 20,
    courseCompleted : true,
    address : 'Hyderabad'
};

function printStudent(student:Student){
    console.log(`Name : ${student.name} 
                 Age : ${student.age}
                 CourseCompleted : ${student.courseCompleted}
                 Address : ${student.address}`);
}

printStudent(student);