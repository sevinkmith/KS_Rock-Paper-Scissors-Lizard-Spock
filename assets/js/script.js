function checker(input){
    var choices = ["rock", "paper", "scissors", "lizard", "spock"];
    var num = Math.floor(Math.random()*5);

    document.getElementById("pc-choice").
    innerHTML = `Computer chose <span>${choices[num].toUpperCase()}</span>`;

    document.getElementByID("user-choice").
    innerHTML= `You chose <span> ${input.toUpperCase()} </span>`;
}
