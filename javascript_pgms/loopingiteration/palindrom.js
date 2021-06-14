//123
//321
var num=123;
while(num!=0)  //123!=0   12!=0
{
    let digit=num%10;  //digit=123%10=3   12%10=2
    console.log(digit);  //32
    num=Math.floor(num/10)  //num=123%10=12  12/10=1
}