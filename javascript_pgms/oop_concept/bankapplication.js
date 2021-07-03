//createaccount()
//deposite()
//withdrawl()
//balanceenquiry()
class bank{
    status=0
    accounts={
        1000:{acc_no:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
        1001:{acc_no:1001,name:"bjay",balance:2000,username:1001,password:"usertwo"},
        1002:{acc_no:1002,name:"cjay",balance:3000,username:1002,password:"userthree"},
        1003:{acc_no:1003,name:"djay",balance:4000,username:1003,password:"userfour"},
    }
    getaccdetails(){
        
        return this.accounts
    }
    //1005,useron1
    authenticate(username,pwd){
        let account_details =this.accounts
        if(username in account_details){
            if(pwd==account_details[username]["password"]){
                this.status=1
                return username
                //1 success
            }
            else{
                return -1
                //-1 invalid password
            }
        }
        else{
            return 0
            //invalid usr    
        }
    }
    fundtransfer(fm_accno,to_accno,amt){
        if(this.status==1){
            let bal=this.balanceenquiry(fm_accno)
            if(balane>=amount){
                if(to_accno in this.accounts){
                    this.accounts[fm_accno]["balance"]-=amount;
                    this.accounts[to_accno]["balance"]+=amount;
                }
                else{
                    console.log("invalid to account number");
                }

            }
            else{
                console.log("insufficient balance");
            }
        }
        else{
            console.log("invalid session");
        }
    }
    withdrawl(amt){

        if(this.balance<amt){
            console.log("insufficient blnce");
        }
        else{
            this.balance-=amt;
            console.log(`your account ${this.acc_no} has been debited with amount ${amt} your avl balance:${this.balance}`);
        }

    }
    balanceenquiry(acc_no){
        if(this.status==1){
            return this.accounts[acc_no]["balance"]
        }
        return "invalid session"
    }
}
var obj1=new bank()
var user=obj1.authenticate(1000,"userone")
//var res=user==0?"invalid":user==-1?"invalid pass":"sucess"
obj1.fundtransfer(user,1001,200)
console.log(obj1.balanceenquiry(user));