var arr=[4,5,6]//[11.10,9]
//15 15-4=11 15-5=10 15-6=9


//step 1 find totl sum
var totl=0;
var op=[];
for(let num of arr){
         totl=totl+num;
} 
//console.log(totl);
for(let num of arr){
    let res=totl-num;
    op.push(res);
} 
console.log(op);