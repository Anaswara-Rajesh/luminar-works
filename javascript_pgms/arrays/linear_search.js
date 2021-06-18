var arr=[10,12,13,14,15]
var srch=13;
var flag=0;
console.log(arr);
for(let num of arr){
    if(num==srch){
        flag++;
        break;
        
    }   
}
console.log(flag==0?"element not found":"found");