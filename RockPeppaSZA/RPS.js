function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)+1
    if (compChoice === 1){
        return "1"
    }else if (compChoice === 2){
        return "2"
    }else{
        return "3"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter 1,2 or 3 for rock, paper, scissors respectivly");
    return humanChoice
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){
    if ((humanChoice === "1" && computerChoice==="2")||(humanChoice ==="2" && computerChoice === "3")|| (humanChoice =="3" && computerChoice ==="1")){
        alert("you won the round")
        humanScore = humanScore+1
    }else if (humanChoice === computerChoice){
        alert("tie game")
    }else{
        computerScore= computerScore+1
        alert("you lost the round")
    }
}
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection);
