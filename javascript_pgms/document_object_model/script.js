function checkslot(){
    let ag=age.Value
    if(ag<18){
    result.innerHTML=`<p style="color:red">noteligible</p>`
    }
    else{
        result.innerHTML=`<p style="color:red">eligible</p>`

    }
}