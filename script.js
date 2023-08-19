// declare variables
let user = "",
  computer = "",
  user_count = 0,
  computer_count = 0;

// get computer choice
// computer = getComputerChoice();
// document.getElementById("computer_choice").innerHTML = computer;

// to get computer choice
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

// to get user choice
let btns = document.querySelectorAll(".choice");

btns.forEach((button) => {
  button.addEventListener("click", handleClick);
  //game starts when user choose move
  button.addEventListener("click", game);
});

function handleClick() {
  user = this.value;
}

// to disable user buttons
function handleDisable() {
  btns.forEach((button) => {
    button.disabled = true;
  });
}

// to reload page
function handlePlayAgain() {
  location.reload();
}

// to play again
function playAgain() {
  handleDisable();
  let gameContainer = document.querySelector('.container');
  let playAgainContainer = document.querySelector('.playAgain_container');
  // document.getElementsByClassName("container").style.display = "none";
  playAgainContainer.style.display = 'flex';
  gameContainer.style.display = 'none';
  if (user_count == 5) {
    document.getElementById("winner_logo").src = "image/player.png";
    document.getElementById("winner_score").innerHTML = user_count;
  } else {
    document.getElementById("winner_logo").src = "image/robot.png";
    document.getElementById("winner_score").innerHTML = computer_count;
  }
}

//handle user image
function handleUserImage() {
  if (user == "rock") {
    document.getElementById("player_move").src = "image/stone.png";
  } else if (user == "paper") {
    document.getElementById("player_move").src = "image/paper (1).png";
  } else if (user == "scissors") {
    document.getElementById("player_move").src = "image/scissors.png";
  } else {
    document.getElementById("player_move").src = "image/question-mark.png";
  }
}

//handle computer image
function handleComputerImage() {
  if (computer == "rock") {
    document.getElementById("computer_move").src = "image/stone.png";
  } else if (computer == "paper") {
    document.getElementById("computer_move").src = "image/paper (1).png";
  } else if (computer == "scissors") {
    document.getElementById("computer_move").src = "image/scissors.png";
  } else {
    document.getElementById("computer_move").src = "image/question-mark.png";
  }
}

// game
function game() {
  computer = getComputerChoice();
  // document.getElementById("computer_choice").innerHTML = computer;
  handleUserImage();
  handleComputerImage();
  if (
    (user == "rock" && computer == "scissors") ||
    (user == "paper" && computer == "rock") ||
    (user == "scissors" && computer == "paper")
  ) {
    user_count += 1;
    document.getElementById("match_result").innerHTML =
      "You Won! " + user + " beats " + computer;
    document.getElementById("user_count").innerHTML = user_count;
    if (user_count == 5) {
      setTimeout(playAgain(), 4000);
    }
  } else if (user == computer) {
    document.getElementById("match_result").innerHTML = "It's tie!";
  } else {
    computer_count += 1;
    document.getElementById("match_result").innerHTML =
      "You lost! " + computer + " beats " + user;
    document.getElementById("computer_count").innerHTML = computer_count;
    if (computer_count == 5) {
      setTimeout(playAgain(), 4000);
    }
  }
}

/////////

// function SavedValue() {
//   document.getElementById("saved_result").innerHTML = user;
// }

// function getUserChoice(value) {
//   document.getElementById("user_choice").innerHTML = value;
// }

// for (i of btns) {
//   i.addEventListener("click", function () {
//     document.getElementById("user_choice").innerHTML = this.innerHTML;
//   });
// }
