let player = "";
let arr = ["Rock", "Paper", "Scissors"];
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
let computer = random(arr);
console.log(computer);


function play(player) {
  let status = "Tie"
  if (player == arr[0] && computer == arr[1] || player == arr[1] && computer == arr[2] || player == arr[2] && computer == arr[0]) {
    status = "Loss"
  }
  else if (player == arr[0] && computer == arr[2] || player == arr[1] && computer == arr[0] || player == arr[2] && computer == arr[1]) {
    status = "Win"
  }
  console.log(player);

  let element = document.querySelector("#result").innerHTML = `
  <h1>${status}</h1>`
}

