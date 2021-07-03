//object oriented prgming
//class?plan,designpatter,template
//object?real world entity
//reference

//laptop
//minotebook a5
//tv
//sonybraviatv
//
// person={
//     age:25
// }
// class Person {
//     setpeson(age, name, gender) {
//         this.age = age;
//         this.name = name;
//         this.gender = gender
//     }
//     printDetails() {
//         console.log(this.age, this.name, this.gender);
//     }
// }
// var person=new Person();//create an object reference person
// person.setpeson(25,"ram","male")
// person.printDetails()

class Employee {
    setemployee(eid,e_name,desig,salary) {
        this.emp_id = eid;
        this.emp_name = e_name;
        this.designation = desig;
        this.salary=salary;
    }
    printDetails() {
        console.log(this.emp_id,this.emp_name,this.designation,this.salary);
    }
}
var emp=new Employee();//create an object reference person
emp.setemployee(1000,"ram","developer",25000)
emp.printDetails()

var emp1=new Employee();//create an object reference person
emp1.setemployee(1001,"raj","developer",35000)
emp1.printDetails()

