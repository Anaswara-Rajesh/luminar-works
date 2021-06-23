//array methods
//ES6
//arrowFunction
// let add=(num1,num2)=>num1+num2
// //(param1,param2)=>stmt
// let sub=(num1,num2)=>num1-num2    //num1<num2>num2-num1:num1-num2
// // if(num1<num2){
// //     return num2-num1
// // }
// // else{
// //     return num1-num2
// // }
// let cube=num=>num**3
// console.log(add(10,2));
// console.log(cube(3));


//create an arrow function rtn odd or even
let od_evn=num=>num%2==0?"even":"odd"
console.log(od_evn(6));


//map(),filter(),sort(),reduce(),some(),find(),forEach()

//1)map()

var arr=[3,4,2,8,7,9]

var squares=arr.map(num=>num**2)
console.log(squares);
var cubes=arr.map(num=>num**3)
console.log(cubes);


//var emp=[emp1,emp2,emp3]
//obbj=>sqfx()=>res

//2)filter
//find odd numbers from array
var arr=[3,4,2,8,7,9]
var evens=arr.filter(num=>num%2==0)
console.log(evens);