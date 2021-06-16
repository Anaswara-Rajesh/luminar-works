let gcd=0;
var low=60;
var upp=72;
for(let i=1;i<=low & i<=upp;i++)
{
    if(low%i==0 & upp%i==0)
    {
        gcd=i;
    }
}
console.log(`gcd of ${low} and ${upp} is ${gcd}.`);