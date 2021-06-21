//data stractures
//medical store n number of medicin[med1,med2,med3,med4]

//var expens=[jan:10000,feb:25000,mar:30000,apr:32000,may:27000,june:40000,july:25000]
// values are stored in key value pairs
//define  {}

//var emp={id:1000,ename:"ajay",desig:"developer",salary:25000}//,exp:2,getSalary:function(){return this.salary}//

//var Math={pie:3.14,floor:function(){console.log("floor");}}
//var console={log:function(){console.log("lo");}}
//values are fetch by using corresponding key
//print emp name
// console.log(emp["ename"]);
// console.log(emp["salary"]);
// console.log(emp["exp"]);
// console.log(emp.exp);
//data type

//update emp salary as 30000
// emp["salary"]=30000
// console.log(emp);



//example 2
var stu={id:100,name:"ram",course:"bca",total:450}
//keys=>id,name,course,totl

//ram
// console.log(stu["name"]);
// console.log(stu.name);

//updation
// stu.total=500;
// console.log(stu);

//check for gender key is present

//console.log("gender" in stu);

//gender:male

// stu["gender"]="male"
// console.log(stu);
// stu.gender="female"
// console.log(stu);

stu.total=stu["total"]-50
console.log(stu);
