//push()->inser an obj at end of array
//pop()->remove obj from arry
// var arr=[10,11,12,13,14,15]
// arr.push(100);
// console.log(arr);
// arr.pop();
// console.log(arr);

//create odd and even array
// var arr=[10,11,12,13,14,15];
// var odd=[],even=[];
// for(let num of arr){
//     if(num%2==0){
//         even.push(num);
//     }
//     else{
//         odd.push(num);
//     }
// }
// console.log("odd",odd);
// console.log("even",even);



// var arr=[10,11,12,13,14,15]
// for(let val of arr){
//     if(val%2==0){
//         console.log(val);
//     }
// }

//sum of array
// var arr=[10,11,12,13,14,15];
// var sum=0;
// for(let val of arr){ 
//     sum+=val;
// }
// console.log(sum);

//find highest no from array
// var arr=[10,11,12,13,14,15]
// var largest=0;
// for(let val of arr){
//     if(val>largest){
//         var largest=val;
//     }

//  }
//  console.log(largest);

//find lowest number from array

var arr=[10,11,12,13,14,15]
var smallest=arr[0];
for(let val of arr){
    if(val<smallest){
        smallest=arr[val];
    }

 }
 console.log(smallest);
