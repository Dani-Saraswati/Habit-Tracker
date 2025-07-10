const habitInput = document.getElementById("habitInput");
const habitDisplay = document.getElementById("habitDisplay");
const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const habitMessage = document.getElementById("habitMessage");

let count=0;

habitInput.oninput = function () {
  const habit = habitInput.value.trim();
  habitDisplay.textContent = habit ? `Habit: ${habit}` : "";
};

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
  updateMessage();
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
  updateMessage();
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
  updateMessage();
};

function updateMessage() {
  habitMessage.textContent = `You've done this habit ${count} ${count === 1 ? 'time' : 'times'} today.`;
}
