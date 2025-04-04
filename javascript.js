// Define functions
function getComputerChoice() {
    let compChoice
    let randNum = Math.floor(Math.random() * 100)
    if (randNum <= 33) {
        compChoice = 'Rock';
        randNum = 1;
    } else if (randNum <= 66) {
        compChoice = 'Paper';
        randNum = 2;
    } else {
        compChoice = 'Scissors';
        randNum = 3;
    }
    return [compChoice, randNum];
}

function getHumanChoice(selection) {
    let humanChoice = selection;

    let humanChoiceVal;
    if (humanChoice.toLowerCase() == 'rock') {
        humanChoiceVal = 1;
    } else if (humanChoice.toLowerCase() == 'paper'){
        humanChoiceVal = 2;
    } else {
        humanChoiceVal = 3;
    }
    return [humanChoice, humanChoiceVal];
}

function playRound(hChoice,cChoice) {

    if (hChoice[1] === cChoice[1]) {
        resultsPara.textContent = `It's a tie! You both input ${hChoice[0]}.`;
        scorePara.textContent = `Current Score: Player = ${hScore} | Computer = ${cScore}`;
    } else if (hChoice[1] > cChoice[1]) {
        hScore ++;
        resultsPara.textContent = `You won, congrats! You chose ${hChoice[0]} and the computer chose ${cChoice[0]}.`;
        scorePara.textContent = `Current Score: Player = ${hScore} | Computer = ${cScore}`;
    } else {
        cScore ++;
        resultsPara.textContent = `Looks like the computer won :( You chose ${hChoice[0]} and the computer chose ${cChoice[0]}.`;
        scorePara.textContent = `Current Score: Player = ${hScore} | Computer = ${cScore}`;
    }
    return [hScore, cScore];
};

function playGame(selection) {
    if (hScore <= 5 && cScore <= 5){
        const hSelection = getHumanChoice(selection);
        const cSelection = getComputerChoice();
        playRound(hSelection,cSelection);
    } else {
    // winner
        if (hScore > cScore) {
            resultsPara.textContent = "Congrats! You are the winner. The score will be reset in 5 seconds if you would like to play again.";
        // Loser
        } else {
            resultsPara.textContent = "Too bad! Looks like you didn't win that time! The score will be reset in 5 seconds if you would like to play again.";
        }
        setTimeout(resetScoreBoard, 5000);
    };
    
};

function resetScoreBoard() {
    hScore = 0;
    cScore = 0;
    resultsPara.textContent = `The score has been reset to ${hScore} - ${cScore}, feel free to play again.`;
    return;
};

// init global const / variables
const results = document.querySelector('.results');
const resultsPara = document.createElement('p');
results.appendChild(resultsPara);

const score = document.querySelector('.score');
const scorePara = document.createElement('p');
results.appendChild(scorePara);

let hScore = 0;
let cScore = 0;

// start selection input
let selection;
let input = document.querySelector('#inputs');
input.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'rock':
            selection = 'rock';
            break;
        case 'paper':
            selection = 'paper';
            break;
        case 'scissors':
            selection = 'scissors';
            break;
    }
    playGame(selection);
})