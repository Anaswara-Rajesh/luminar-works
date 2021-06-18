var arr=[10,8,11,9,12,7,13]
var element=5;
var flag=0;
//num1=10
//num2=8
//if(num1<num2){
//num1-num2
//}

//procedure BINSRCH(arr,low,upp,element,mid)

//stp1:sort array
arr.sort((num1,num2)=>num1-num2)//ascending order
console.log(arr);
var low=0,upp=arr.length-1;

while(low<upp){
let mid=Math.floor((low+upp)/2)
 
//case1
if(element>arr[mid]){
    low=mid+1;
}
//case 2
else if(element<arr[mid]){
    upp=mid-1;
}
//case 3
else if(element==arr[mid]){
    flag++;
    break;
}
}
console.log(flag==0?"not found":"found");