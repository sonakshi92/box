let startTime = new Date().getTime();
const box = document.getElementById("box");

// Generate a random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// On box click
function boxClicked() {
  const endTime = new Date().getTime();
  const reactionTime = (endTime - startTime) / 1000;

  document.getElementById("reaction-time").textContent =
    "Reaction Time: " + reactionTime + " seconds";
  document.getElementById("reaction-time").style.display = "block";

  box.style.display = "none";

  document.getElementById("restart-btn").style.display = "inline-block";
}

// Restart test
function restartTest() {
  box.style.display = "block";
  box.style.backgroundColor = getRandomColor();

  document.getElementById("reaction-time").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";

  startTime = new Date().getTime();
}
