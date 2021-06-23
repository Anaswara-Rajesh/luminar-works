var mobile={
    code:1000,
    brand_name:"samsung",
    price:30000,
    processor:"snapdragon"
}

//brand name
console.log(mobile.brand_name);
console.log(mobile["brand_name"]);
//chk offr exists if not add offer of 20%
if(!("offer" in mobile)){
    mobile.offer="20%"
}
console.log(mobile);

//price cr-2000
mobile.price=2000
console.log(mobile);