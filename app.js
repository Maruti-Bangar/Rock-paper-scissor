window.onload = function () {
  abc();
};
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("our-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".game-center");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function popFunction() {
  var popup = document.getElementById("myPopup");
  const closeBtn = document.querySelector(".cross");
  popup.classList.toggle("show");
  closeBtn.classList.toggle("show");
}

const abc = () => {
  const userscore = localStorage.getItem("userscore");
  const compscore = localStorage.getItem("compscore");

  if (userscore == null) {
    localStorage.setItem("userscore", 0);
    localStorage.setItem("compscore", 0);
  } else {
    userScore_span.innerText = userscore;
    computerScore_span.innerText = compscore;
  }
};

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertCase(anythingIwant) {
  if (anythingIwant === "paper") return "Paper";
  if (anythingIwant === "scissors") return "Scissors";
  return "Rock";
}

function win(user, computer) {
  let score = localStorage.getItem("userscore");
  console.log(score);
  score++;
  localStorage.setItem("userscore", score);
  userScore_span.innerText = score;
  window.location.href = "Mewin.html";
}

function loses(user, computer) {
  let score = localStorage.getItem("compscore");
  console.log(score);
  score++;
  localStorage.setItem("compscore", score);
  userScore_span.innerText = score;
  computerScore_span.innerHTML = computerScore;
  window.location.href = "Melost.html";
}

function draw(user, computer) {
  window.location.href = "Tieup.html";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);

      break;
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      loses(userChoice, computerChoice);

      break;
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      draw(userChoice, computerChoice);
      console.log("draw");
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("rock"));
  paper_div.addEventListener("click", () => game("paper"));
  scissors_div.addEventListener("click", () => game("scissors"));
}
main();
