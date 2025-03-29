function getComputerChoice() {
    let compChoice
    const randNum = Math.floor(Math.random() * 100)
    if (randNum <= 33) {
        compChoice = "Rock";
    } else if (randNum <= 66) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissors";
    }
    console.log(compChoice);
}

getComputerChoice();

const playButton = document.querySelector("#playButton");

function getHumanChoice() {
    playButton.addEventListener("click", () => {
        let humanChoice = prompt("Input one of: 'Rock', 'Paper', 'Scissors' to play.", "Rock");
        console.log(humanChoice);
});
}
getHumanChoice();