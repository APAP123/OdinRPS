function computerPlay(){
    var result = Math.floor(Math.random() * 10);
    if( result <= 3) {
        return 'rock';
    }
    else if(result <= 6) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'rock':
            if(computerSelection === 'rock') {
                return 0; //tie
            }
            else if(computerSelection === 'paper') {
                return -1; //CPU wins
            }
            else {
                return 1; //You win
            }
            break;
        case 'paper':
            if(computerSelection === 'rock') {
                return 1; //You win
            }
            else if(computerSelection === 'paper') {
                return 0; //tie
            }
            else {
                return -1; //CPU wins
            }
            break;
        case 'scissors':
            if(computerSelection === 'rock') {
                return -1; //CPU wins
            }
            else if(computerSelection === 'paper') {
                return 1; //You win
            }
            else {
                return 0; //tie
            }
            break;
        default:
            return "something broke!";
    }
}

function playerPlay(){
    let message = "Rock, Paper, or Scissors?";
    while(true) {
        let result = prompt(message);
        console.log("result is " + result)
        if ( (result.toLowerCase() != "rock") && (result.toLowerCase() != "paper") && (result.toLowerCase() != "scissors")) {
            message = "Invalid response. Response must be 'rock', 'paper', or 'scissors'.";
        }
        else {
            return result;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        result = playRound(playerSelection, computerSelection);

        switch(result){
            case -1:
                computerScore++;
                console.log("You lose! " + computerSelection + " beats " + playerSelection + ".");
                break;
            case 0:
                console.log("It's a tie!");
                break;
            case 1:
                playerScore++;
                console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
        }
    }

    console.log("Final Score: Player - " + playerScore + ", Computer - " + computerScore);
}

//const playerSelection = playerPlay();
//const computerSelection = computerPlay();

//console.log(playRound(playerSelection, computerSelection));

game();