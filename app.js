// 

let correctAnswer = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
let count = 0;

function addGuess() {

    let guess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");

    count++;

    if (guess == correctAnswer) {
        message.innerHTML = "Correct! You guessed the number.";
    } 
    else if (count >= attempts) {
        message.innerHTML = 
        "Your number of attempts has exceeded. The correct answer is " 
        + correctAnswer + ".";
    } 
    else {
        message.innerHTML = "Wrong guess. Try again.";
    }

    document.getElementById("guessInput").value = "";
}