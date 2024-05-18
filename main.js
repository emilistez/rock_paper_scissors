const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
} else {
    return 'Error! Please enter either rock, paper, or scissors.';
}
};



const getComputerChoice = () => {
const  computerInput = Math.floor(Math.random() *3)
switch(computerInput) {
    case 0:
        return 'rock';
    break;
    case 1:
        return 'paper';
    break;
    case 2:
        return 'scissors';
}
};

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return 'This game is a tie!';
    }
    if(userChoice === 'rock') {
        if(computerChoice === 'paper'){
            return 'Sorry, the computer won.';
        } else {
            return 'Congratulations! You won!';
        }
    }
    if(userChoice === 'paper') {
        if(computerChoice === 'scissors'){
            return 'Sorry, the computer won.';
        } else {
            return 'Congratulations! You won!';
        }
    }
    if(userChoice === 'scissors') {
        if(computerChoice === 'rock'){
            return 'Sorry, the computer won.';
        } else {
            return 'Congratulations! You won!';
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}.`);
    console.log(`Computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();