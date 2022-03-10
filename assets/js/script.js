let resultInfo = document.getElementById("result");
let choicesObject = {
    'rock' : {
        'rock' : 'draw',
        'paper' : 'lose',
        'scissors' : 'win',
        'lizard' : 'win',
        'spock' : 'lose'
    },
    'scissors' : {
        'rock' : 'lose',
        'paper' : 'win',
        'scissors' : 'draw',
        'lizard' : 'win',
        'spock' : 'lose'
    },
    'paper' : {
        'rock' : 'wins',
        'paper' : 'draw',
        'scissors' : 'lose',
        'lizard' : 'lose',
        'spock' : 'win'
    },
    'lizard' : {
        'rock' : 'lose',
        'paper' : 'wins',
        'scissors' : 'lose',
        'lizard' : 'draw',
        'spock' : 'win'
    },
    'spock' : {
        'rock' : 'win',
        'paper' : 'lose',
        'scissors' : 'wins',
        'lizard' : 'lose',
        'spock' : 'draw'
    }
}
function checker(input){
    var choices = ["rock", "paper", "scissors", "lizard", "spock"];
    var num = Math.floor(Math.random()*5);

    const pcChoice = document.getElementById("pc-choice");
    pcChoice.innerHTML = `Computer chose <span>${choices[num].toUpperCase()}</span>`;

    const userChoice = document.getElementById("user-choice")
    userChoice.innerHTML= `You chose <span> ${input.toUpperCase()} </span>`;
}
checker();