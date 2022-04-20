const gameContainer=document.getElementById("gameContainer")
const startBtn= document.getElementById("startBtn")
const letterBtnEL=document.getElementById("letterbtn")
const wordSpaces= document.getElementById("wordSpaces")

const letters = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let randomWord;
let wordStatus=null
const underscore=[]
let i=0;


function displayBtn(){
    for(let i=0; i<letters.length; i++){
        const letterBtn = document.createElement("button")
        letterBtn.textContent= letters[i]
        letterBtn.setAttribute("value", letters[i])
        letterBtn.setAttribute("class"," button alphaBtn mt-2 mx-1")
        letterBtnEL.append(letterBtn)

    }
}

function word(){
    
    if(wordList.length>0){
        const randomIndex=  Math.floor(Math.random() * wordList.length);
        console.log(randomIndex)
        randomWord= wordList[randomIndex].movie.split("")
        console.log(randomWord)
    }
    // still have to figure out how to remove the underscore from the blankSpace
    wordStatus = randomWord.map(letter => (underscore.indexOf(letter) >= 0 ? letter : ' _ ')).join(' ')
   
        console.log(wordStatus)

       wordSpaces.innerHTML = wordStatus
}

startBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    gameContainer.classList.remove("is-hidden")
    displayBtn()
    word()
})

letterBtnEL.addEventListener("click", (event)=>{
    event.preventDefault()
    const clickedLetter= this.event.target.value
    console.log(clickedLetter)
})







// wordStatus = randomWord.map(letter => ((guessed.indexOf(letter) >= 0 && letter!==" ") ? letter : ' _ ')).join(' ');
    // console.log(wordStatus)