// var num1=20,num2=30,num3=10;
// if(num1>num2)
// {
//     if(num1>num3)
//     {
//         console.log(`${num1} is largest`);
//     }
//     else{
//         console.log(`${num3} is largest`);
//     }
// }
// else if(num2>num1)
// {
//     if(num2>num3)
//     {
//         console.log(`${num2} is large`);
//     }
//     else{
//         console.log(`${num3} is largest`);
//     }
// }


if(num1>num2 & num1>num3){
    console.log(`${num1} largest`);
}
else if(num2>num1 & num3>num2){
console.log(`${num2} is large`);
}
else if(num3>num1 & num3>num3){
    console.log(`${num3} is large`);

}
else if(num1==num2 & num1==num3){
console.log("all same");
}