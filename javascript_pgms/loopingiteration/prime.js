//var num=15;//not prime(1,15,3,5)
var num=7;//2 to 6
var flag=0;
for(let i=2;i<num;i++)  //i=2 i=3 i=4 i=5 i=6 7<7
{
    if(num % i==0)   //7%2==0 7%3==0 7%4==0 7%5==0 7%6==0
    {
        //factor
        flag+=1;
    }
}
if(flag==0)  //0==0
{
    console.log("prime");
}
else{
    console.log("not");
}