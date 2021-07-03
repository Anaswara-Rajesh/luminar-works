//many forms (more than one form)=>ploymorphism

//method overloading
//same method name diff number of parameters
class Calculation{
    add(){
        console.log("inside no arg mthd");  
    }
    add(num1){
        console.log("inside single arg mthd");
    }
    add(num1,num2){
        console.log("inside two arg mthd");
    }
}

var calc=new Calculation()
calc.add();
calc.add(10);
calc.add(10,20);