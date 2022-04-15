const gameContainer=document.getElementById("gameContainer")
const startBtn= document.getElementById("startBtn")
const letterBtnEL=document.getElementById("letterbtn")
const wordSpaces= document.getElementById("wordSpaces")

const letters = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function displayBtn(){
    for(let i=0; i<letters.length; i++){
        const letterBtn = document.createElement("button")
        letterBtn.textContent= letters[i]
        letterBtn.setAttribute("value", letters[i])
        letterBtn.setAttribute("class"," button alphaBtn mt-2 mx-1")
        letterBtnEL.append(letterBtn)

    }
}

startBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    gameContainer.classList.remove("is-hidden")
    displayBtn()
})

letterBtnEL.addEventListener("click", (event)=>{
    event.preventDefault()
    const clickedLetter= this.event.target.value
    console.log(clickedLetter)
})