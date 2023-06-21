// var Letter =require("./Letters.js")

function Word (str){
    console.log(str)
    //this will create the word object
    this.word=str.split("").map(function(char){
        return new Letter(char);
    });

    //shows the word
    this.display=function(){
        return this.word.map(function(letters){
            console.log("letters", letters)
            return letters.displayLetter();
        }).join(" "); //the join give spaces between undercores and letters
    };

    // returns either the letter or the underscore

    this.check =function(char){
        this.word.forEach(function(letters){
            letters.checkLetter(char);
            if(char === " "){
                return " ";
            }
        });
    };
};

