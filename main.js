const stats = {
	correctAnswers: 0,
	incorrectAnswers: 0,
	questionsAnswered: 0,
	questionsUnanswered: 0,
};

const username = document.querySelector("#user-name");
const startGameButton = document.querySelector("#start-game-button");
const playAgainButton = document.querySelector("#play-again");
const homeButton = document.querySelector("#home-button");
const progress = document.querySelector("#progress");
const gameLength = document.querySelectorAll(".length-radios");
const answerRadioLabels = document.querySelectorAll(".answer-radio-labels");
const answerRadioButtons = document.querySelectorAll(".answer-radio-buttons");


// EventListeners go here

async function getQuestions() {
	let response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
	let data = await response.json();
	let randNumber = Math.floor(Math.random()) * 10;
	let questionObject = data.results[randNumber];
	let correctAnswer = questionObject.correct_answer;
	let incorrentAnswers = questionObject.incorrect_answers;
	let questionElement = document.querySelector("#question");
	questionElement.textContent = questionObject.question;
	answerRadioLabels[0].textContent = correctAnswer;
	answerRadioLabels[1].textContent = incorrentAnswers[0];
	answerRadioLabels[2].textContent = incorrentAnswers[1];
	answerRadioLabels[3].textContent = incorrentAnswers[2];
    checkAnswer(correctAnswer)
}

getQuestions();

function checkAnswer(correctAnswer) {
    if (answerRadioButtons[0].checked === true) {
        if (answerRadioLabels.textContent = correctAnswer) {
            alert('Correct!');
        }
    }
    if (answerRadioButtons[1].checked === true) {
        if (answerRadioLabels.textContent = correctAnswer) {
            alert('Incorrect!');
        }
    }
    if (answerRadioButtons[2].checked === true) {
        if (answerRadioLabels.textContent = correctAnswer) {
            alert('Incorrect!');
        }
    }
    if (answerRadioButtons[3].checked === true) {
        if (answerRadioLabels.textContent = correctAnswer) {
            alert('Incorrect!');
        }
    }
}



// PLAIGERISED
// function createMoveHandler(move) {
// 	playerMove = move;
// 	return function doMove() {
// 		computerMove = getComputerMove();
// 		result = getWinner(move, computerMove);
// 		updateScore(result);
// 		displayResult(score);
// 	};
// }

// function welcomeUser() {
// 	const usernameInput = document.querySelector("#username-input");
// 	const welcomeMessage = document.querySelector("#welcome-username");
// 	usernameInput.value = "Dave";
// 	welcomeMessage.textContent = `Welcome, ${usernameInput.value}!`;
// }

// function getComputerMove() {
// 	// Get a random number between 0 and less than 1
// 	let randomNumber = Math.random();

// 	// If randomNumber is between 0 and 0.33 return rock
// 	if (randomNumber >= 0 && randomNumber < 0.33) {
// 		return "rock";
// 	}

// 	// If randomNumber is between 0.33 and 0.66 return paper
// 	if (randomNumber >= 0.33 && randomNumber < 0.66) {
// 		return "paper";
// 	}

// 	// If randomNumber is between 0.66 and 1 return scissors
// 	if (randomNumber >= 0.66 && randomNumber < 1) {
// 		return "scissors";
// 	}
// }

// function getWinner(playerMove, computerMove) {
// 	// console.log(playerMove, computerMove);
// 	// If both player and computer play the same move, return 0 for draw
// 	if (playerMove === computerMove) {
// 		return 0;
// 	}

// 	if (playerMove === "rock") {
// 		if (computerMove === "paper") {
// 			// player rock loses to computer paper, return -1 for player loss
// 			return -1;
// 		} else if (computerMove === "scissors") {
// 			// player rock beats computer scissors, return 1 for player win
// 			return 1;
// 		}
// 	} else if (playerMove === "paper") {
// 		if (computerMove === "rock") {
// 			// player paper beats computer rock, return 1 for player win
// 			return 1;
// 		} else if (computerMove === "scissors") {
// 			// player paper loses to computer scissors, return -1 for player loss
// 			return -1;
// 		}
// 	} else if (playerMove === "scissors") {
// 		if (computerMove === "rock") {
// 			// player scissors loses to computer rock, return -1 for player loss
// 			return -1;
// 		} else if (computerMove === "paper") {
// 			// player scissors beats computer paper, return 1 for player win
// 			return 1;
// 		}
// 	}
// }

// function updateScore(result) {
// 	if (result === 1) {
// 		score.wins++;
// 	} else if (result === 0) {
// 		score.draws++;
// 	} else if (result === -1) {
// 		score.losses++;
// 	}
// 	score.gamesPlayed++;
// }

// function displayResult(score) {
// 	gamesWon.textContent = `Wins: ${score.wins}`;
// 	gamesLost.textContent = `Losses: ${score.losses}`;
// 	gamesDrawn.textContent = `Draws: ${score.draws}`;
// 	gamesPlayed.textContent = `Games played:  ${score.gamesPlayed}`;
// 	displayYourMove.textContent = `Your move: ${playerMove}`;
// 	displayComputerMove.textContent = `Computer move: ${computerMove}`;
// }

// NOT WORKING
// function gameDifficultySetup() {
// 	const difficultyOptions = document.querySelectorAll(".difficulty-radios"); // nodelist [0:Easy, 1:Medium, 2:Hard]
// 	for (const choice of difficultyOptions) {
// 		if (difficultyOptions[choice].checked) {
// 			return difficultyOptions[choice];
// 		}
// 	}
// }

// console.log(gameDifficultySetup());
