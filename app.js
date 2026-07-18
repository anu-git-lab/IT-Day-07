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
        Swal.fire({
  title: "Sweet!",
  text: "Modal with a custom image.",
  imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3IybWdycTIxeWl6bHA5OTJsMGNrdWpnN2Q4MGIzYzJzaHlwYzVpYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vu5UbNpjpqfMq2UFg0/giphy.gif",
  imageWidth: 400,
  imageHeight: 200,
//    imageAlt: "Custom image"
});
    } 
    else if (count >= attempts) {
        message.innerHTML = 
        "Your number of attempts has exceeded. The correct answer is " 
        + correctAnswer + ".";
    } 
    else {
        message.innerHTML = "Wrong guess. Try again.";
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Wrong guess!",
//   footer: "<a href=\"#\">Why do I have this issue?</a>"
});
    }

    document.getElementById("guessInput").value = "";
}