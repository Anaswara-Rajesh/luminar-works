var arr=[3,4,1,2];
arr.sort((i,j)=>i-j);
var elem=6;
var cnt=0;
console.log("length",arr.length);
var low=0,upp=arr.length-1;
while(low<upp){  //0<3 0<2 0<1 1<1
    let totl=arr[low]+arr[upp]; //1+4=5 1+3=4 1+2

    //case1
    if(elem==totl){  //3==5 3==4 3==3
        console.log(`pairs ${arr[low]} ${arr[upp]}`);
        low++; 

    }
    //case 2
    else if(elem>totl){  //3>5 3>4
        low=low+1;

    }
    //case 3
    else if(elem<totl){  // 3<4
        upp=upp-1;

    }
    cnt++;
}
console.log("counter",+cnt);














// //more than 2 soln
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         cnt++;
//         let totl=arr[i]+arr[j];
//         if(elem==totl){
//             console.log(arr[i],arr[j]);
//         }
//     }

// }
// console.log(cnt);


// for(let num1 of arr){
// //num1=1
//     for(let num2 of arr){//num2=1
//         let total=num1+num2;//1+1=2
//         if(elem==total)//6==2
//         {
//             console.log(`pairs are ${num1}  ${num2}`);
//         }


//     }

// }