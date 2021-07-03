//inheritence
// class parent{
//     phone()
//     {
//         console.log("samsung");
//     }
// }
// class child extends parent{

// }
// var child=new child()
// child.phone()


class person{
    setperson(name,age){
        this.name=name
        this.age=age
    }
    printperson(){
        console.log(this.age,this.name);
    }
}
class student extends person{
    setstudent(rol,course){
        this.rol=rol
        this.course=course
    }
    printstudent(){
        console.log(this.rol,this.course);
    }
}
var student1=new student()
student.setperson("ram",25)
student.setstudent(100,"bca")