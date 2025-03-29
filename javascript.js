function getComputerChoice() {
    let compChoice
    let randNum = Math.floor(Math.random() * 100)
    if (randNum <= 33) {
        compChoice = "Rock";
        randNum = 1;
    } else if (randNum <= 66) {
        compChoice = "Paper";
        randNum = 2;
    } else {
        compChoice = "Scissors";
        randNum = 3;
    }
    return compChoice, randNum;
}

// getComputerChoice();

const playButton = document.querySelector("#playButton");

function getHumanChoice() {
    let humanChoice = prompt("Input one of: 'Rock', 'Paper', 'Scissors' to play.", "Rock");
    let humanChoiceVal;
    if (humanChoice.toLowerCase() == "rock") {
        humanChoiceVal = 1;
    } else if (humanChoice.toLowerCase() == "paper"){
        humanChoiceVal = 2;
    } else {
        humanChoiceVal = 3;
    }
    return humanChoiceVal;
}
// getHumanChoice()
function playRound(hChoice,cChoice) {
    if (hChoice.toLowerCase() === cChoice.toLowerCase()) {
        console.log("It's a tie!");

    }

}

function playGame() {
    let roundCount = 1;
    let hScore = 0;
    let cScore = 0;

    while (roundCount < 6) {
        console.log(`This is game ${roundCount}`)
        
        const hSelection = getHumanChoice();
        const cSelection = getComputerChoice();
        playRound(hSelection,cSelection);
        
        roundCount ++ ;
    };
};