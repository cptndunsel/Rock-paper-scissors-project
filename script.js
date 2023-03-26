let roundCount = prompt("How many rounds do you want to play:");

var winCount = 0;
var tieCount = 0;
var lossCount = 0;

for (i = 0; i < parseInt(roundCount); i++) {
	var playerChoice = prompt("Rock, paper or scissors?:");
	var randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber === 0) {
		compChoice = "rock"
	}
	else if (randomNumber === 1) {
		compChoice = "paper"
	}
	else if (randomNumber === 2) {
		compChoice = "scissors";
	}
	if (playerChoice === compChoice) {
		alert("Tie!");
		tieCount++
	}
	else if (playerChoice === "rock" && compChoice === "scissors") {
		alert("The computer chose scissors. You win!");
		winCount++
	}
	else if (playerChoice === "rock" && compChoice === "paper") {
		alert("The computer chose paper. You lose!");
		lossCount++
	}
	else if (playerChoice === "paper" && compChoice === "rock") {
		alert("The computer chose rock. You win!");
		winCount++
	}
	else if (playerChoice === "paper" && compChoice === "scissors") {
		alert("The computer chose scissors. You lose!");
		lossCount++
	}
	else if (playerChoice === "scissors" && compChoice === "paper") {
		alert("The computer chose paper. You win!");
		winCount++
	}
	else if (playerChoice === "scissors" && compChoice === "rock") {
		alert("The computer chose rock. You lose!");
		lossCount++
	}
}

alert("Out of " + roundCount + " rounds, you have accumulated " + winCount + " wins," + tieCount + " ties, and " + lossCount + " losses.");
