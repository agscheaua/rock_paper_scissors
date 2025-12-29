


let containerChoices = document.createElement("div");
document.body.appendChild(containerChoices);

let buttonRock = document.createElement("button");
buttonRock.textContent = "ROCK";
buttonRock.classList.add("choice", "rock");

let buttonPaper = document.createElement("button");
buttonPaper.textContent = "PAPER";
buttonPaper.classList.add("choice", "paper");

let buttonScissor = document.createElement("button");
buttonScissor.textContent = "SCISSOR";
buttonScissor.classList.add("choice", "scissor");

containerChoices.appendChild(buttonRock);
containerChoices.appendChild(buttonPaper);
containerChoices.appendChild(buttonScissor);

let scoreBoard = document.createElement("div");
scoreBoard.classList.add("scoreBoard");
document.body.appendChild(scoreBoard);

let humanScoreBoard = document.createElement("span");
let computerScoreBoard = document. createElement("span")
scoreBoard.appendChild(humanScoreBoard);
scoreBoard.appendChild(computerScoreBoard);

let humanScore = 0; 
let computerScore = 0;

containerChoices.addEventListener("click", (event) => {
    let humanChoice = event.target.textContent.toLowerCase();

    let calcNumberChoice = (Math.floor(Math.random() * 100 + 1)); 
    let computerChoice = getComputerChoice(calcNumberChoice);

    let oneRound = playRound(humanChoice, computerChoice);
    
    if (oneRound === "you won"){
        console.log("you won");
        humanScore = humanScore + 1;
    }
    else if (oneRound === "you lose"){
        console.log("you lose");
        computerScore = computerScore + 1;
    }
    else if (oneRound === "equal"){ 
        console.log("equal");
    }
    else {} 
    console.log(`This is your score: ${humanScore}`);
    console.log(`This is the computer score: ${computerScore}`);

    if( (humanScore === 5) && (computerScore < 5)){
    console.log("You win the game!");
    humanScore = 0;
    computerScore = 0;
    }                   
    else if( (humanScore < 5) && (computerScore === 5) ){
    console.log("You have lost the game!")
    humanScore = 0;
    computerScore = 0;
    }
    else if( (humanScore === computerScore) &&
    (humanScore === 5) &&
    ( computerScore === 5) ){
    console.log("It is equal between the 2 participants!")
    }
    else{}


    humanScoreBoard.textContent = `Player score is: ${humanScore}`;

    } );
 
function getComputerChoice(pc_choice) {
    if (pc_choice <= 33) {
        //console.log("rock");
        return "rock";
    }
    else if ((pc_choice <= 66) && (pc_choice > 33)) { 
        //console.log("paper");
        return "paper";
    }
    else if ((pc_choice <= 100) && (pc_choice > 66)) {
        //console.log("scissor");
        return "scissor";
    } 
};                  

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        //console.log("equal"); 
        return "equal";
    }
    else if ((humanChoice === "rock") && (computerChoice === "scissor")){   
        //console.log("you won");
        return "you won";
    }
    else if ((humanChoice === "rock") && (computerChoice === "paper")){
        //console.log("you lose");
        return "you lose";
    }  
    else if ((humanChoice === "paper") && (computerChoice) === "rock"){
        //console.log("you won");
        return "you won";
    }
    else if ((humanChoice === "paper") && (computerChoice) === "scissor"){
        //console.log("you lose");
        return "you lose";
    }
    else if ((humanChoice === "scissor") && (computerChoice) === "rock"){
        //console.log("you lose");
        return "you lose";
    }
    else if ((humanChoice === "scissor") && (computerChoice) === "paper"){
        //console.log("you won");
        return "you won"
    }
    else {
        //console.log("invalid input");
        return "invalid input";
    }
}

  