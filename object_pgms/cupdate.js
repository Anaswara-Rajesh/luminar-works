var state={name:"kerala",confirmed_cases:12000,cured:5000}
//state name
console.log(state.name);
console.log(state.confirmed_cases);
//death 
console.log("death" in state);

//death is not exists add death:100
if(!("death" in state)){
    state["death"]=100

}
console.log(state);
state.cured+=500;
console.log(state);