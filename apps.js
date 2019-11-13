let player = "";
let arr = ["Rock", "Paper", "Scissors"];
let gameStatus;
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


function play(player) {
  let computer = random(arr);
  console.log(computer);
  gameStatus = "Tie"
  if (player == arr[0] && computer == arr[1] || player == arr[1] && computer == arr[2] || player == arr[2] && computer == arr[0]) {
    gameStatus = "Loss";
    score()
  }
  else if (player == arr[0] && computer == arr[2] || player == arr[1] && computer == arr[0] || player == arr[2] && computer == arr[1]) {
    gameStatus = "Win";
    score()
  }
  console.log(player);

  let element = document.querySelector("#result").innerHTML = `
  <h1>${gameStatus}</h1>
  <button class="btn btn-danger" value="Refresh Page" onClick="window.location.reload();">Reset</button>`
}

let wins = 0;
let losses = 0;

function score() {
  if (gameStatus == "Loss") {
    losses++
  }
  else if (gameStatus == "Win") {
    wins++
  }
  console.log(wins);
  console.log(losses);
  let element = document.querySelector("#scoreboard").innerHTML = `<h1>${wins} - ${losses}</h1>`
}