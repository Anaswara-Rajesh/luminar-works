//functions//
//typeof()  //find datatype

// specific task perform cheyyum
//creating function

//function functionName(param1,param2,.....paramn){
    //function definition
    //return value;
//}

// function add(num1,num2){
//     let res=num1+num2;
//     //console.log(res);
//     return res;
// }

//calling function by using functionname;
// var op=add(50,50);
// console.log(op);

// function sub(num1,num2){
//     return num1-num2;
// }
// console.log(sub(100,20));
// var sres=sub(50,40)
// console.log(sres);



// create a function to chk given nmbr is odd or even
// if num is odd will rtn true else rtn false

// function oddevn(num)
// {
//     if(num%2==0){
//         return false;
//     }                          //return num%2==0?false:true
//     else{
//         return true;
//     }
// }
// console.log(oddevn(4));


//create a function to finding factorial of a number

// function fact(num){
//     let res=1;
//     for(let i=1;i<=num;i++){
//         res=res*i;
//     }
//     return res
// }
// console.log(fact(5));


//subtract num1,num2
// function sub(num1,num2){

//     return num1<num2?num2-num1:num1-num2

//     // if(num1<num2){
//     //     return num2-num1;
//     // }
//     // else{
//     //     return num1-num2
//     // }
// }

// console.log(sub(10,6));//10-6=4
// console.log(sub(6,10));//10-6=4


function addNumbers(...args){
    //console.log(args);
    let res=0;
    for(let num of args){
        res+=num;
    }
    return res;
}
console.log(addNumbers(45,50)); 
console.log(addNumbers(10,20,30));

var arr1=[10,20,30]
var arr2=[50,60]
var res=[...arr1,...arr2] //[...arr1,100,200]
console.log(res);



















