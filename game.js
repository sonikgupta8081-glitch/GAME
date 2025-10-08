let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#computer-score");

const gencomputerchice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdex = Math.floor(Math.random() * 3);
  return option[randIdex];
};
const drawGame = () => {
  msg.innerText = "Game Drow!,play again";
  msg.style.backgroundColor = "black";
};
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "UserWim!";
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    CompScorePara.innerText = computerScore;
    msg.innerText = "user lose!";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  console.log("Userchoice=", userchoice);
  const computerchoice = gencomputerchice();
  console.log("Compchoice=", computerchoice);

  if (userchoice === computerchoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      // scissors,paper
      userWin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock,scissors

      userWin = computerchoice === "scissors" ? false : true;
    } else {
      //rock,paper
      computerchoice === "rock" ? false : t;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
