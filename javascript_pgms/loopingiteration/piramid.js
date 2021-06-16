
for(let row=1;row<6;row++)
{   let string="";
    for(let space=6-row;space>=1;space--)
    {
              string+=" "
    
    }
    for(let star=1;star<=row;star++){
        string+="* "
    }
    console.log(string);
}
