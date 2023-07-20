
let student_1 = new Student(1,"Xiao_Zhan.jpeg","Loan", 110899,"11A1");
let student_2 = new Student(2,"Xiao_Zhan.jpeg","Loan", 110899,"11A2");
let list = new StudentList();

list.addStudent(student_1);
list.addStudent(student_2);
// list.addStudent(student_2);
console.log(list.students)
list.displayAll();
 
// document.getElementById('add-btn').addEventListener('click', function(){list.addStudent(student_1);});
