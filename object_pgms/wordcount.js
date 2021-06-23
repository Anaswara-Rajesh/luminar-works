var text ="hai hello hai hello"
//find wrd count
//hai:2 hello:2

//stp1:split txt into words
var words=text.split(" ")
console.log(words);//['hai','hello','hai','hello']
var dict={}
for(let word of words){//hai hello
    if(!(word in dict)){
        dict[word]=1;
    }
    else{
        dict[word]+=1//dict[hai] 1+1=2
    }
}
console.log(dict);
//key    value
//hai     2
//hello   2