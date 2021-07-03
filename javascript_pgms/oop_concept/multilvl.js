class parent1{
    m1(){
        console.log("inside parent");
    }
}
class child{
    m2(){
        console.log("inside child");
    }
}
class subchild extends child{
    m3(){
        console.log("inside sub child");
    }
}
var sub=new subchild()
sub.m3()
sub.m2()
sub.m1()

//multilvl inheritnce

var child1=new child()
//child1.m3();err
child1.m2()
child1.m1()

var parent=new parent1()
parent.m3()
// parent.m2()
// parent.m1()err

