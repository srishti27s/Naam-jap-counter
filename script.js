let count = 0;
const countDisplay = document.getElementById("count");
const countButton = document.getElementById("count-button");
const malaMessage = document.getElementById("mala-message");
countButton.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;

  if (count === 109) {
    count = 0;
    countDisplay.textContent = count;
    malaMessage.textContent = "mala poori! 🙏";
  }

  const RamMusic = document.getElementById("ram-music");
  RamMusic.play();
});

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function () {
  count = 0;
  malaMessage.textContent = "";
  countDisplay.textContent = count;
});
// const RamMusic = document.getElementById("ram-music");
// RamMusic.play();
