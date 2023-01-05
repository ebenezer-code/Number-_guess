const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

const userTurns = document.querySelector(".userTurns");
const userGuessMsg = document.querySelector(".userGuessMsg");
const lowOrHi = document.querySelector(".lowOrHi");

let turns = 1;
let reset;

function getNumber () {
    const guess = Number(guessField.value);
    guess.toLocaleString()
    if(turns === 1) {
        userTurns.textContent = `Previous Guesses: `
    }
    userTurns.textContent += `${guess} `
   
    if(guess === randomNumber) {
        userGuessMsg.textContent = `Congratulations YOU WON!!`;
        userGuessMsg.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }else if(turns === 10) {
        userGuessMsg.textContent = `GAME OVER!!`;
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        userGuessMsg.textContent = "WRONG GUESS";
        userGuessMsg.style.backgroundColor = "red";
        if(guess > randomNumber) {
                lowOrHi.textContent = `Guess too HIGH!!`
        } else if(guess < randomNumber){
            lowOrHi.textContent = `Guess too LOW!!`
        }
    }

 turns++;
 guessField.value = "";
 guessField.focus();
}
guessSubmit.addEventListener("click", () => getNumber());

function setGameOver () {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    let params = document.querySelector(".params")
    reset = document.createElement("button");
    reset.textContent = "Start Over";
    reset.className = "btn";
    params.append(reset);

    reset.addEventListener("click", () => resetGame());
}

function resetGame () {

    turns = 1;
   const resetParams = document.querySelectorAll(".params p");
    for(let param of resetParams) {
        param.textContent = "";
    }
    reset.remove();
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

}