//print all numbr between 21 to 40 --23,29,31,37

// var lower=21,upper=40;

// for(let i=lower;i<=upper;i++)
// {
//     //i=21
//     let flag=0;
//     for(let j=2;j<i;j++)
//     {
//         if(i%j==0)
//         {
//             flag++;
//             break;
//         }
//     }
//     if(flag==0){
//         console.log(i);
//     }
    
// }


for(let i=1;i<=3;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str+="*"+"\t";
    }
    console.log(str);
}