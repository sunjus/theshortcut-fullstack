const rps = ["r", "p", "s"];
const rpsWin = ["rs", "pr", "sp"];
const rpsName = {
  r: "Rock",
  p: "Paper",
  s: "Scissors",
};

//make a score as -1,0,1 after play
function score(a, b) {
  if (a === b) {
    return 0;
  }
  let vs = a + b;
  if (rpsWin.includes[vs]) {
    return 1;
  }
  return -1;
}

function playRps(userChoice) {
  const computerChoice = rps[Math.floor(Math.random() * rps.length)];
  const res = score(userChoice, computerChoice);
  return [res, userChoice, computerChoice];
}

function handleClick(event) {
  const userInput = event.target.value;
  [ret, userChoice, computerChoice] = playRps(userInput);
  let resultHTML = "<h1>Result</h1>";
  resultHTML += `<p>${rpsName[userChoice]} vs ${rpsName[computerChoice]}</p>`;

  if (ret === 0) {
    resultHTML += "Tie";
  } else if (ret === 1) {
    resultHTML += "Win";
  } else if (ret === -1) {
    resultHTML += "Lose";
  }

  document.querySelector("#rps-result").innerHTML = resultHTML;
}

document
  .querySelectorAll(".rps-select-btn")
  .forEach((elem) => elem.addEventListener("click", handleClick));
