const choices = ["Taş👊", "Kağıt✋", "Makas✌"];
const buttons = document.querySelectorAll("#buttons button");
const result = document.getElementById("result");

buttons.forEach(button => {
  button.addEventListener("click", playGame);
});

function playGame() {
  const playerChoice = this.id;
  const computerChoice = getRandomChoice();
  const winner = getWinner(playerChoice, computerChoice);

  result.textContent = `Player: ${playerChoice} - Computer: ${computerChoice} - Winner: ${winner}`;
}

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Draw";
  } else if (
    (playerChoice === "Taş👊" && computerChoice === "Makas✌") ||
    (playerChoice === "Kağıt✋" && computerChoice === "Taş👊") ||
    (playerChoice === "Makas✌" && computerChoice === "Kağıt✋")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}
