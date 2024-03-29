const gameContainer = document.getElementById("gameContainer");
const startBtn = document.getElementById("startBtn");
const sub = document.querySelector(".press-start");
const letterBtnEL = document.getElementById("letterbtn");
const badLetters = document.getElementById("badLetters");
let wordSpaces = document.getElementById("wordSpaces");
const guessesLeft = document.getElementById("guessesLeft");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".winner-loser-title");
const modalBody = document.querySelector(".winner-loser-body");
const keepPlayingModalBtn = document.querySelector(".keep-playing");
const scoresBtn = document.querySelector(".scores");
const closeModalEL = document.querySelector(".delete");
const hintBtn = document.getElementById("hint-btn");
const winEL = document.getElementById("wins");
const lossesEL = document.getElementById("losses");
const next=document.querySelector(".next")

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let randomWord;
let wrongGuesses = [];
let remainaingGuesses =6;
const jsConfetti = new JSConfetti();
let randomIndex;
let win = 0;
let lose = 0;
let previousWins;
let previousLosses;

//TODO: Find how to create the alphabet letters in the Letter constructor
//TODO: create logic for the end of the game
//ToDo: where to put this  badLetter.innerHTML= " " to reset bad letters
//Todo: check for errors with LocalStorage
//ToDo: reset guesses when you keep playing

previousWins = localStorage.getItem("win");
previousLosses = localStorage.getItem("lose");

function displayBtn() {
  for (let i = 0; i < alphabet.length; i++) {
    const letterBtn = document.createElement("button");
    letterBtn.textContent = alphabet[i];
    letterBtn.setAttribute("value", alphabet[i]);
    letterBtn.setAttribute("class", " button alphaBtn mt-2 mx-1");
    letterBtnEL.append(letterBtn);
  }
}

function movieWord() {

  if (wordList.length > 0) {
    randomIndex = Math.floor(Math.random() * wordList.length);
    randomWord = wordList[randomIndex].movie;
    randomWord = new Word(randomWord);
    wordSpaces.innerHTML = randomWord.display();
   

    guessesLeft.textContent = `Guesses Left: ${remainaingGuesses}`;

   

    if (previousWins > 0) {
      winEL.textContent = `Wins: ${previousWins}`;
      
    } 
    if(previousLosses > 0){
      lossesEL.textContent = `Losses: ${previousLosses}`;
    }
  }
}

function checkLetter(userChoice) {
  randomWord.check(userChoice);
  wordSpaces.innerHTML = randomWord.display();
  const show = randomWord.display();
  

  if (!show.includes(userChoice) && !wrongGuesses.includes(userChoice)) {
    console.log("try again");
    wrongGuesses.push(userChoice);
    const btn = document.createElement("button");

    wrongGuesses.forEach(() => {
      btn.textContent = userChoice;
      btn.setAttribute("class", " button alphaBtn is-static mt-2 mx-1");
      badLetters.append(btn);
    });

    remainaingGuesses--;
    guessesLeft.textContent = `Guesses Left: ${remainaingGuesses}`;
    console.log(remainaingGuesses);
  }

  // hint
  if (remainaingGuesses == 4) {
    console.log(remainaingGuesses == 4);
    hintBtn.innerHTML = " ";
    hintBtn.style.visibility="visible"
    const button = document.createElement("button");
    button.setAttribute("class", " button hint");
    button.textContent = "Hint!";
    hintBtn.append(button);

    setTimeout(()=>{
      button.style.animationPlayState='paused'
    },3000)
  }

  WinLose(show);
}

//Hint Modal
function hint() {
  modalBody.innerHTML = " ";
  modalTitle.textContent = "Hint!";
  const img = document.createElement("img");
  img.setAttribute("src", wordList[randomIndex].imgHint);
  const h3 = document.createElement("h3");
  h3.setAttribute("class", "title has-text-centered");
  h3.textContent = wordList[randomIndex].hint;
  modalBody.append(h3, img);
  openModal();
}

//Win/Lose Modal
function WinLose(show) {
  if (!show.includes("_")) {
    modalBody.innerHTML = " ";
    const img = document.createElement("img");
    img.setAttribute("src", endGame[0].victoryimg);
    img.style.width = "300px";
    img.style.display = "400px";
    const figure = document.createElement("figure");
    figure.setAttribute("class", "is-flex is-justify-content-center");
    figure.append(img);
    modalTitle.textContent = "YOU KNOW YOUR 90'S MOVIES!";
    modalBody.append(figure);
    jsConfetti.addConfetti({
      confettiColors: [
        "#f75ca5",
        "#34e0e8",
        "#f4b824",
        "#f66f35",
        "#3d40b3",
        "#74bd78",
      ],
    });
    openModal();
    win += previousWins;
    localStorage.setItem("win", ++win);
    winEL.textContent = `Wins: ${win}`;
    hintBtn.style.visibility="hidden"
    keepPlaying()
  } else if (remainaingGuesses === 0) {
    modalTitle.textContent = "LOSER!!!";
    modalBody.textContent = "YOU SUCK AT 90'S MOVIES!!!!";
    openModal();
    lose += [previousLosses];
    localStorage.setItem("lose", ++lose);
    lossesEL.textContent = `Losses: ${lose}`;
    hintBtn.style.display="none"
    keepPlaying()
  }
}

function keepPlaying(){
  wordList.splice(randomIndex, 1)
  next.innerHTML=" "
  const btn=document.createElement("button")
  btn.setAttribute("class", "button continue-game")
  btn.textContent="Keep Playing"
  next.append(btn)

}
function reset(){
  wrongGuesses=[]
  badLetters.innerHTML=" "
  remainaingGuesses =6
  guessesLeft.textContent = `Guesses Left: ${remainaingGuesses}`;
}

//Event Listeners
startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  gameContainer.classList.remove("is-hidden");
  startBtn.style.display = "none";
  sub.style.animationPlayState = "paused";
  sub.style.display = "none";
  displayBtn();
  movieWord();
});

letterBtnEL.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedLetter = event.target.value;
  checkLetter(clickedLetter);
});

closeModalEL.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.remove("is-active");
  
});

hintBtn.addEventListener("click", (event) => {
  event.preventDefault();
  hint();
});

next.addEventListener("click",()=>{
  reset()
  movieWord();
})

function openModal() {
  modal.classList.add("is-active");
}
