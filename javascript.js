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
        console.log(`It's a tie! You both input ${hChoice[0]}. The score is now ${hScore} for you v. ${cScore} for the computer.`);
    } else if (hChoice[1] > cChoice[1]) {
        hScore ++;
        console.log(`You won, congrats! You chose ${hChoice[0]} and the computer chose ${cChoice[0]}. The score is now ${hScore} for you v. ${cScore} for the computer.`);
    } else {
        cScore ++;
        console.log(`Looks like the computer won :(. You chose ${hChoice[0]} and the computer chose ${cChoice[0]}. The score is now ${hScore} for you v. ${cScore} for the computer. `)
    }
    return [hScore, cScore];
};

function playGame(selection) {
    let roundCount = 1;
    const hSelection = getHumanChoice(selection);
    const cSelection = getComputerChoice();
    playRound(hSelection,cSelection);

    // Tie
    if (hScore === cScore) {
        console.log("It's a tie! No one wins this one!");
    // winner
    } else if (hScore > cScore) {
        console.log("Congrats! You are the winner");
    // Loser
    } else {
        console.log("Too bad! Looks like you didn't win that time!");
    }

    // const again = prompt('Try Again?', 'Yes');
    // if (again === 'Yes') {
    //     hScore = 0
    //     cScore = 0
    //     playGame()
    // } else {
    //     console.log('You didn't input 'Yes' so we'll assume you don't want to play again right now! Thanks for playing!')
    //     return
    // }
};


let selection;
let input = document.querySelector('#inputs');
input.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'rock':
            console.log("Rock selected");
            selection = 'rock';
            break;
        case 'paper':
            console.log("Paper selected");
            selection = 'paper';
            break;
        case 'scissors':
            console.log("Scissors selected");
            selection = 'scissors';
            break;
    }
    playGame(selection);
})

let hScore = 0;
let cScore = 0;