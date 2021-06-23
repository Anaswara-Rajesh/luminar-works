// var pattern = "ABABC"
// var dict = {}
// for (let char of pattern) {
//     //char A
//     if ((!char in dict)) {
//         dict[char] = 1;//dict[A]=1 dict[B]=1
//     }
//     else{
//         console.log("first recursive character is " +char);
//         break;
//     }
// }

var temparature = [
    { district: "tvm", temprature: 25 },
    { district: "kollam", temprature: 27 },
    { district: "kottayam", temprature: 24 },
    { district: "ekm", temprature: 27 },
    { district: "tsr", temprature: 25 },
    { district: "pkd", temprature: 30 },
    { district: "tvm", temprature: 27 },
    { district: "kollam", temprature: 25 },
    { district: "kottayam", temprature: 28 },
    { district: "ekm", temprature: 29 },
    { district: "tsr", temprature: 30 },
    { district: "pkd", temprature: 31 },

]
//var sorted_temp=temparature.sort((dist1,dist2)=>dist2.temprature-dist1.temparature)
var weather = {}
for (let data of temparature) {
    let district=data["district"]
    let temp=data["temprature"]
    if(district in weather){
       let old_temp=weather[district]
       if(old_temp<temp){
           weather[district]=temp
       }
       else{
           weather[district]=old_temp;
       }
    }
    
    else {
        weather[district] = temp;
    }
}
console.log(weather);

//weather 
//key value
//tvm 25


//sort weather according to temp desc
//dist heighest temp?
function sortByTemp(data){
    //[tvm,27],[kollam,27]
    return Object.entries(data).sort((dist1,dist2)=>dist2[1]-dist1[1])
}
console.log(sortByTemp(weather));


