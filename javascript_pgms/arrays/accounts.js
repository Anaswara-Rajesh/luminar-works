
var accounts={
  1000:{accno:1000,ac_type:"savings",balance:5000}
}
//2000,ac_type=current,balance=2000
accounts[2000]={accno:2000,ac_type:"current",balance:2000}
console.log(accounts);
accounts[1000]["balance"]+=2000
console.log(accounts);