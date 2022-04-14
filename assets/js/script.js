const gameContainer=document.getElementById("gameContainer")
const startBtn= document.getElementById("startBtn")



startBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    gameContainer.classList.remove("is-hidden")
})