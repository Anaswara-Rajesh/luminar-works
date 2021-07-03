class employee{
    constructor(id,name,desig,salary,exp){
        //initialize
        this.id=id
        this.name=name
        this.desig=desig
        this.salary=salary
        this.exp=exp
    }
}
var emp1=new employee(100,"ram","developer",25000,2)
var emp2=new employee(101,"raj","developer",15000,4)
var emp3=new employee(102,"ravi","mrkt",35000,1)
var emp4=new employee(103,"sam","developer",75000,2)
var emp5=new employee(104,"oam","developer",65000,6)
var employees=[]
employees.push(emp1,emp2,emp3,emp4,emp5)
var icon_emp=employees.reduce((obj1,obj2)=>obj1.salary>obj2.salary?obj1:obj2)
console.log(icon_emp);


//create 5 emp obj
//print highest salary employees
//sort empaccording with their exp
//chk isthere any emp working as qa