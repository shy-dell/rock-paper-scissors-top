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
    return [compChoice, randNum];
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

    if (hChoice === cChoice[1]) {
        console.log(`It's a tie! The score is now ${hScore} for you v. ${cScore} for the computer.`);
    } else if (hChoice > cChoice[1]) {
        hScore ++;
        console.log(`You won, congrats! The score is now ${hScore} for you v. ${cScore} for the computer.`);
    } else {
        cScore ++;
        console.log(`Looks like the computer won :( The score is now ${hScore} for you v. ${cScore} for the computer. `)
    }
    return [hScore, cScore];
};

function playGame() {
    let roundCount = 1;

    while (roundCount < 6) {
        console.log(`This is Round ${roundCount}, you will play to 5 Rounds to determine the winner!`)
        
        const hSelection = getHumanChoice();
        const cSelection = getComputerChoice();
        playRound(hSelection,cSelection);
        
        roundCount ++ ;
    };
    if (hScore > cScore) {
        console.log("Congrats! You are the winner");
    } else {
        console.log("Too bad!");
    }

    const again = prompt("Try Again?", "Yes");
    if (again === "Yes") {
        playGame()
    } else {
        console.log("You didn't input 'Yes' so we'll assume you don't want to play again right now! Thanks for playing!")
        return
    }
};

let hScore = 0;
let cScore = 0;
playGame();