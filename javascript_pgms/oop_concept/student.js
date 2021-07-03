class student{
    //this.rol,.....instance variables
    //this
    //inside cls access thi
    //outside cls refname.instance var

    //locl variable
    //this used to point current cls instance variables
    //duty of setstudent() is to initialize instance var
    //constructor-->instance var initialize cheyyunnu
    //constructor name always same as cls in java,c++
    //in js constuctor name always constuctor()
    //in python constructor name always _init_()
    //constructor will automatically invoked during object creation

    constructor(roll,name,course,totl){
        this.roll=roll
        this.name=name
        this.course=course
        this.totl=totl
    }
    printdetails(){
        console.log(this.roll,this.name,this.course,this.totl);
    }
}
var stu1=new student(1000,"ravi","bca",50)

console.log(stu1);
var stu2=new student(1001,"raj","mca",60)
