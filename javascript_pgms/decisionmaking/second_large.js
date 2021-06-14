var n1=100,n2=30,n3=30;
if((num1>num2)&(num1>num3)){//100>20 & 100>30 T & T=>T
    //blck1 highest no=n1
    //scnd possibility eithe n2 or n3
    if(num2>num3){//20>30 F
        //num2 secnd //num1,num2,num3
    }
    else{
        //n3 scnd n1 n2 n3
        console.log('scnd ${n2}');
    }
}
else if((num2>num1)&(num2>num3)){//100>20 & 100>30 T & T=>T
    //blck1 highest no=n1
    //scnd possibility eithe n2 or n3
    if(num1>num3){//20>30 F
        //num2 secnd //num1,num2,num3
    }
    else{
        //n3 scnd n1 n2 n3
    }
}