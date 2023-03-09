let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    if (number == 0) 
    {
        return 'rock'
    }
    else if (number == 1) {
        return 'paper'
    }
    else
    return 'scissors'
}

function getPLayerChoice() {
    return prompt('Rock, Paper or Scissors?')
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log('It\'s a tie')
    }
    else if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            console.log('Paper beats Rock')
            return ++computerScore
        }
        else {
            console.log('Rock beats Scissors')
            return ++playerScore
        }
        
    }
    else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            console.log('Paper beats Rock')
            return ++playerScore 
        }
        else {
            console.log('Scissors beats Paper')
            return ++computerScore
            }
    }
    else {
        if (playerSelection.toLowerCase() === 'scissors') {
            if (computerSelection === 'rock') {
                console.log('Rock beats Scissors')
                return ++computerScore
            }
            else 
                {
                console.log('Scissors beats Paper')
                return ++playerScore
                }
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPLayerChoice(), getComputerChoice())
    }
    if (playerScore > computerScore) {
        console.log('You won!')
    }
    else if (playerScore < computerScore) {
        console.log('Computer won!')
    }
    else console.log('It\'s a tie!')
    console.log(playerScore)
    console.log(computerScore)
}

game()