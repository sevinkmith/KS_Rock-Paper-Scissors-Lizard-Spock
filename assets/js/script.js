function checker(input){
    var choices = ["rock", "paper", "scissors", "lizard", "spock"];
    var num = Math.floor(Math.random()*5);

    const pcChoice = document.getElementById("pc-choice");
    pcChoice.innerHTML = `Computer chose <span>${choices[num].toUpperCase()}</span>`;

    const userChoice = document.getElementById("user-choice")
    userChoice.innerHTML= `You chose <span> ${input.toUpperCase()} </span>`;
}