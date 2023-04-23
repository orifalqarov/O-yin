window.addEventListener("DOMContentLoaded", function () {
  const choices = document.querySelectorAll(".choices"),
    modal = document.querySelector(".modal"),
    result = document.querySelector("#result"),
    score = document.querySelector("#score"),
    restart = document.querySelector("#restart"),
    scoreBoard = {
      player: 0,
      computer: 0,
      draw: 0,
    };
  //play game
  function play(event) {
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();
    restart.style.display = "inline-block";
    let winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
  }

  //getComputerChoice
  function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
      return "rock";
    } else if (rand <= 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  //getWinner
  function getWinner(p, c) {
    if (p === c) {
      return "it is a draw";
    } else if (p === "rock") {
      if (c === "paper") {
        return "Computer";
      } else {
        return "player";
      }
    } else {
      if (c === "scissors") {
        return "Computer";
      } else {
        return "player";
      }
    }
  }
  //showWinner
  function showWinner(winner, computerChoice) {
    modal.style.display = "inline-block";
    if (winner === "player") {
      scoreBoard.player++;
      result.innerHTML = `
        <h1 class="text-win">You win</h1>
        <i class=" choice fas fa-hand-${computerChoice} fa-10x"  ></i>
        <p> Computer choice: <strong>${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }</strong></p>
        `;
    } else if (winner === "Computer") {
      scoreBoard.computer++;
      result.innerHTML = `
        <h1 class="text-lose">You lose</h1>
        <i class=" choice fas fa-hand-${computerChoice} fa-10x"  ></i>
        <p> Computer choice: <strong>${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }</strong></p>
        `;
    } else {
      scoreBoard.draw++;
      result.innerHTML = `
        <h1>Its a draw</h1>
        <i class=" choice fas fa-hand-${computerChoice} fa-10x"  ></i>
        <p> Computer choice: <strong> ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }</strong></p>
        `;
    }
    score.innerHTML = `
        <p class="success">Player: ${scoreBoard.player} </p>
        <p class="draw">Draw: ${scoreBoard.draw}</p>
        <p class="success">Computer: ${scoreBoard.computer} </p>
        `;
  }

  //restartGame
  function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    scoreBoard.draw = 0;
    score.innerHTML = `
    <p class="success">Player:  ${ scoreBoard.player} </p>
    <p class="draw">Draw:  ${ scoreBoard.draw}</p>
    <p class="success">Computer: ${ scoreBoard.computer} </p>
    `;
  }

  function clearModal(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  modal.addEventListener("click", clearModal);
  choices.forEach((choice) => choice.addEventListener("click", play));
  restart.addEventListener("click", restartGame);
});
