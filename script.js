let startTime = new Date().getTime();

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
    `Reaction Time: ${reactionTime.toFixed(2)} seconds`;
  document.getElementById("reaction-time").style.display = "block";

  const box = document.querySelector(".box");
  box.style.animation = "none";
  box.style.backgroundColor = getRandomColor();
  box.style.pointerEvents = "none";

  document.getElementById("restart-btn").style.display = "inline-block";
}

// Restart test
function restartTest() {
  const box = document.querySelector(".box");
  box.style.animation = "shiftTheBox 6s linear infinite";
  box.style.pointerEvents = "auto";

  document.getElementById("reaction-time").style.display = "none";
  document.getElementById("restart-btn").style.display = "none";

  startTime = new Date().getTime();
}
