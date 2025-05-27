var startTime = new Date().getTime();
var box = document.getElementById("box");
var reaction = document.getElementById("reaction-time");
var restartBtn = document.getElementById("restart-btn");
box.style.backgroundColor = getRandomColor();

// Generate a random hex color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// On box click
function boxClicked() {
  var endTime = new Date().getTime();
  var reactionTime = (endTime - startTime) / 1000;

  reaction.innerHTML =
    "Reaction Time: " + reactionTime + " seconds";
  reaction.style.display = "block";

  box.style.backgroundColor = getRandomColor();
  startTime = new Date().getTime();

  // box.style.display = "none";
  // restartBtn.style.display = "inline-block";
}

// Restart test
// function restartTest() {
//   box.style.display = "block";
//   box.style.backgroundColor = getRandomColor();

//   reaction.style.display = "none";
//   restartBtn.style.display = "none";

//   startTime = new Date().getTime();
// }
