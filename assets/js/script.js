const gameGrid = document.getElementById('game-area')
const userChoice = document.createElement('h2')
const pcChoice = document.createElement('h2')
const result = document.createElement('h2')
gameGrid.append(userChoice, pcChoice, result)

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']