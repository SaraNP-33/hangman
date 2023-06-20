const gameContainer=document.getElementById("gameContainer")
const startBtn= document.getElementById("startBtn")
const letterBtnEL=document.getElementById("letterbtn")
let wordSpaces= document.getElementById("wordSpaces")

const alphabet = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let randomWord;
const underscore=[]
const guessed=[]
let i=0;


function displayBtn(){
    for(let i=0; i<alphabet.length; i++){
        const letterBtn = document.createElement("button")
        letterBtn.textContent= alphabet[i]
        letterBtn.setAttribute("value", alphabet[i])
        letterBtn.setAttribute("class"," button alphaBtn mt-2 mx-1")
        letterBtnEL.append(letterBtn)

    }
}

function movie(){
    
    if(wordList.length>0){
        const randomIndex=  Math.floor(Math.random() * wordList.length);
        console.log(randomIndex)
        randomWord= wordList[randomIndex].movie
       
        randomWord = new Word(randomWord);
        console.log(randomWord)
        wordSpaces.innerHTML=randomWord.display()
       
    }
  
}

function checkLetter(userChoice){
        if(!guessed.includes(userChoice)){
            console.log(userChoice);
           guessed.push(userChoice)
          randomWord.check(userChoice)
          wordSpaces.innerHTML=randomWord.display()
           
        } 
        else{
            console.log("try again");
        }
        
    
    
}

startBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    gameContainer.classList.remove("is-hidden")
    displayBtn()
    movie()
})

letterBtnEL.addEventListener("click", (event)=>{
    event.preventDefault()
    const clickedLetter= this.event.target.value
    // console.log(clickedLetter)
    checkLetter(clickedLetter)
})







// wordStatus = randomWord.map(letter => ((guessed.indexOf(letter) >= 0 && letter!==" ") ? letter : ' _ ')).join(' ');
    // console.log(wordStatus)