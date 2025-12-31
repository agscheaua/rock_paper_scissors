

let containerChoices = document.createElement("div");
containerChoices.classList.add("containerChoices") 
document.body.appendChild(containerChoices);

let buttonRock = document.createElement("button");
buttonRock.textContent = "ROCK";
buttonRock.classList.add("choice", "rock");
containerChoices.appendChild(buttonRock);

let buttonPaper = document.createElement("button");
buttonPaper.textContent = "PAPER";
buttonPaper.classList.add("choice", "paper");
containerChoices.appendChild(buttonPaper);

let buttonScissor = document.createElement("button");
buttonScissor.textContent = "SCISSOR";
buttonScissor.classList.add("choice", "scissor");
containerChoices.appendChild(buttonScissor);

let scoreBoard = document.createElement("div");
scoreBoard.classList.add("scoreBoard");
document.body.appendChild(scoreBoard);

let humanScoreBoard = document.createElement("span");
scoreBoard.appendChild(humanScoreBoard);
let computerScoreBoard = document. createElement("span");
scoreBoard.appendChild(computerScoreBoard);

let choiceTaken = document.createElement("div");
choiceTaken.classList.add("choiceTaken");
document.body.insertBefore(choiceTaken, scoreBoard);

let humanChoiceTaken = document.createElement("span")
choiceTaken.appendChild(humanChoiceTaken);
let computerChoiceTaken = document.createElement("span");
choiceTaken.appendChild(computerChoiceTaken);

let gameInfo = document.createElement("div");
gameInfo.classList.add("gameInfo");
document.body.insertBefore(gameInfo, choiceTaken);

let humanScore = 0; 
let computerScore = 0;

containerChoices.addEventListener("click", (event) => {
    let humanChoice = event.target.textContent.toLowerCase();

    let calcNumberChoice = (Math.floor(Math.random() * 100 + 1)); 
    let computerChoice = getComputerChoice(calcNumberChoice);

    humanChoiceTaken.textContent = `Player choice: ${humanChoice}`;
    computerChoiceTaken.textContent = `Computer choice: ${computerChoice}`;

    let oneRound = playRound(humanChoice, computerChoice);
    
    if (oneRound === "you won"){
        humanScore = humanScore + 1;
        gameInfo.textContent = "The Player has won this round!";
    }
    else if (oneRound === "you lose"){
        computerScore = computerScore + 1;
        gameInfo.textContent = "The Computer has won this round!";
    }
    else if (oneRound === "equal"){ 
        gameInfo.textContent = "Equal between the participants!";
    }
    else {}; 

    if( (humanScore === 5) && (computerScore < 5)){
    humanScore = 0;
    computerScore = 0;
    gameInfo.textContent = "The Player has won the game!"
    }                   
    else if( (humanScore < 5) && (computerScore === 5) ){
    humanScore = 0;
    computerScore = 0;
    gameInfo.textContent = "The Computer has won the game!";
    }
    else{};

    humanScoreBoard.textContent = `Player score: ${humanScore}`;
    computerScoreBoard.textContent = `Computer score: ${computerScore}`;

    } );
 
function getComputerChoice(pc_choice) {
    if (pc_choice <= 33) {
        return "rock";
    }
    else if ((pc_choice <= 66) && (pc_choice > 33)) { 
        return "paper";
    }
    else if ((pc_choice <= 100) && (pc_choice > 66)) {
        return "scissor";
    }; 
};                  

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        return "equal";
    }
    else if ((humanChoice === "rock") && (computerChoice === "scissor")){   
        return "you won";
    }
    else if ((humanChoice === "rock") && (computerChoice === "paper")){
        return "you lose";
    }  
    else if ((humanChoice === "paper") && (computerChoice) === "rock"){
        return "you won";
    }
    else if ((humanChoice === "paper") && (computerChoice) === "scissor"){
        return "you lose";
    }
    else if ((humanChoice === "scissor") && (computerChoice) === "rock"){
        return "you lose";
    }
    else if ((humanChoice === "scissor") && (computerChoice) === "paper"){
        return "you won"
    }
    else {
        return "invalid input";
    };
};

  