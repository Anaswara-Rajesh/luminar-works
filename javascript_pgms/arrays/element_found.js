var arr=[10,12,13,14,15]
var srch=5;
console.log(arr);
for(let num of arr){
    if(num==srch){
        console.log(`element ${srch} found in array`);
    }
    else{
        console.log(`element ${srch} not found in array`);
    }
}