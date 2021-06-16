//array-store more than one object
//store same type and diff type
//no length limit
//possible to update
//insertion order is preserved

//define
// var expenses=[20000,24000,30000,27000,32000]
// expenses[1]=25000
// //console.log(expenses);
// for(let i=0;i<expenses.length;i++)
// {
//     console.log(expenses[i]);
// }


// var expenses=[20000,24000,30000,27000,32000]
// expenses[3]+=5000
// //console.log(expenses);
// for(let i=0;i<expenses.length;i++)
// {
//     console.log(expenses[i]);
// }

// var expenses=[20000,24000,30000,27000,32000]
// for(let amount of expenses)
// {
//     console.log(amount);
// }

var expenses=[20000,24000,30000,27000,32000]
for(let exp of expenses)
{
    if(exp>25000){
    console.log(exp);
    }
}