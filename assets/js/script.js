let resultInfo = document.getElementById("result");
userScore = 0;
pcScore = 0;
const user_score_span = document.getElementById("user-score");
const pc_score_span = document.getElementById("pc-score");
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
    console.log(num)
    var pcChoice = document.getElementById("pc-choice");
    pchoice = choices[num].toUpperCase()
    pcChoice.innerHTML = `Computer chose <span>${pchoice}</span>`;

    var userChoice = document.getElementById("user-choice")
    userChoice.innerHTML= `You chose <span> ${input.toUpperCase()} </span>`;
    // pcChoice = choicesObject[num];
    pchoice = pchoice.toLowerCase();
    console.log(choicesObject[input][pchoice])

    switch(choicesObject[input][pchoice]) {
    case 'wins':
        resultInfo.innerHTML = "You win!";
        userScore++;
        user_score_span.innerHTML = userScore;
        if (userScore == 5) {
            resultInfo.innerHTML = "You won the game!";
            resultInfo.classList.add("winner");
            setTimeout(function(){
                location.reload();
            }
            , 3000);
        }
        break;
        case 'lose':
            resultInfo.innerHTML = "You lose!";
            pcScore++;
            pc_score_span.innerHTML = pcScore;
            if (pcScore == 5) {
                resultInfo.innerHTML = "The PC won the game!";
                resultInfo.classList.add("lose");
                // refresh page
                setTimeout(function(){
                    location.reload();
                }, 3000);
                
            }
            break;
    default:
        resultInfo.innerHTML = "It's a draw!";
}

}

const rock = document.getElementById("rock");

rock.addEventListener("click", function(){
    checker("rock");
});