const gameContainer=document.getElementById("gameContainer")
const startBtn= document.getElementById("startBtn")
const letterBtnEL=document.getElementById("letterbtn")
const badLetters=document.getElementById("badLetters")
let wordSpaces= document.getElementById("wordSpaces")
const guessesLeft= document.getElementById("guessesLeft")

const alphabet = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let randomWord;
const underscore=[]
const guessed=[]
let i=0;
let remainaingGuesses=10;


//TODO: Find how to create the alphabet letters in the Letter constructor
//TODO: create logic for the end of the game
//TODO: add wins/loses to localStorage
//Todo: create a restart button
//Todo: include hints

function displayBtn(){
    for(let i=0; i<alphabet.length; i++){
        const letterBtn = document.createElement("button")
        letterBtn.textContent= alphabet[i]
        letterBtn.setAttribute("value", alphabet[i])
        letterBtn.setAttribute("class"," button alphaBtn mt-2 mx-1")
        letterBtnEL.append(letterBtn)  
    }
}
guessesLeft.textContent= `Guesses Left: ${remainaingGuesses}`

function movie(){
    
    if(wordList.length>0){
        const randomIndex=  Math.floor(Math.random() * wordList.length);
    
        randomWord= wordList[randomIndex].movie
        randomWord = new Word(randomWord);

       
        
        wordSpaces.innerHTML=randomWord.display()
        
       
    }
  
}

function checkLetter(userChoice){
    randomWord.check(userChoice)
    wordSpaces.innerHTML=randomWord.display() 
     const show= randomWord.display()
     console.log(show);    
    

        // if(!guessed.includes(userChoice)){
        //     console.log(userChoice);
        //    guessed.push(userChoice) 
        // } 
        
        if(!show.includes(userChoice) && !guessed.includes(userChoice) ){
            console.log("try again");
            guessed.push(userChoice) 
            const btn= document.createElement("button")

            guessed.forEach(index => {
                btn.textContent=userChoice;
                btn.setAttribute("class"," button alphaBtn mt-2 mx-1")
                badLetters.append(btn)
            });
        
            remainaingGuesses--
             guessesLeft.textContent= `Guesses Left: ${remainaingGuesses}`
            console.log(remainaingGuesses);
        }      
}

startBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    gameContainer.classList.remove("is-hidden")
    startBtn.style.display="none"
    displayBtn()
    movie()
})

letterBtnEL.addEventListener("click", (event)=>{
    event.preventDefault()
    const clickedLetter= this.event.target.value
    checkLetter(clickedLetter)
})







