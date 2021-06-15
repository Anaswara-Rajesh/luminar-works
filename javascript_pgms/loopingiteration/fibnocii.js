var n1=0,n2=1,sum=0;
console.log("fibnocii series");
console.log(n1,n2); // 0 1
while(sum<21)   //0<=21
{    
     sum=n1+n2; //sum=1
     n1=n2;    //n1=1
     n2=sum;   //n2=1
     console.log(sum);     
}