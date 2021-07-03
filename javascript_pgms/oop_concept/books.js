class booklibrary{
    getbooks(){
        let books={
            "the alchemist":{bk_name:"alchemist",author:"paulo",price:200,no_copies:5},
            "the poem":{bk_name:"the poem",author:"pau",price:100,no_copies:9},
            "the story":{bk_name:"the story",author:"pulo",price:300,no_copies:4},
        }
        return books
    }
    findbook(bookname){
        let bookdetails=this.getbooks()
        if(bk_name in bookdetails){
            return 1
        }
        else{
            return 0
        }
        
    }
}
let booklib1=new booklibrary()
let searchbook=booklib1.findbook("")
let res=searchbook==0?"not available":"available"
console.log(res);