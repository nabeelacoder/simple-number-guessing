let numberofGuesses = 0;
const randomNum = Math.floor(Math.random() * 10 + 1);
let userInput = document.getElementById("userInput");
let submitBtn= document.getElementById("submit");
let answer = document.getElementById("answer");

submitBtn.addEventListener("click", guessNumber);

function guessNumber(){
    numberofGuesses+=1;
    if(userInput.value == randomNum){
        answer.innerHTML = `The number was ${randomNum}, you guessed correct, in ${numberofGuesses} number of tries!`;
    } else if(userInput.value < randomNum){
        answer.innerHTML = "Your number is too small, try again!";
    } else{
        answer.innerHTML = "Your number is too big, try again!";
    }
}