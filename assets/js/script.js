const controls = document.getElementsByClassName("control");
const userChoice = document.getElementById("user-choice");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

for (let control of controls) {
    controls.addEventListener("click", function () {
	let userChoice = this.getAttribute("data-choice")
	playGame(userChoice);
});
}

function playGame(userChoice) {
    let pcChoice = document.getElementById("pc-choice");
}	